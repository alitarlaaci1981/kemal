const STANDALONE_SETTINGS_STORAGE_KEY = 'options.standalone';
const MARSHMALLOW_SETTINGS_STORAGE_KEY = 'options.marshmallow';

// Don't show the "Switch mode" form on OS and browsers that don't support desktop mode
// (Linux, Chrome OS, Edge Chromium)
// See https://jira.dashlane.com/browse/EXTENSION-3841 for Edge
chrome.runtime.getPlatformInfo(platformInfo => {
    const isDesktopModeAvailableOnOS = ['win', 'mac'].some(
        desktopModeOS => platformInfo.os === desktopModeOS
    );
    const isEdgeBrowser = navigator.userAgent.indexOf('Edg') !== -1;

    if (!isDesktopModeAvailableOnOS || isEdgeBrowser) {
        document.querySelector('#mode_selector_form').classList.add('hidden');
    }
});

function showEngineChoiceIfFeatureIsFlipped() {
    chrome.runtime.getBackgroundPage(backgroundPage => {
        if (
            backgroundPage.backgroundController.getSwitchToMlEngineFeatureToggle()
        ) {
            document
                .querySelector('#engine_selector_form')
                .classList.remove('hidden');
        }
    });
}

function saveOptions(evt) {
    evt.preventDefault();

    chrome.storage.local.get(STANDALONE_SETTINGS_STORAGE_KEY, res => {
        const previousMode = res[STANDALONE_SETTINGS_STORAGE_KEY];
        const userSelectedValue = document.querySelector(
            'input[name="standalone"]:checked'
        ).value;
        if (userSelectedValue) {
            const isStandalone = userSelectedValue === 'true';
            const hasSwitchedExtensionMode =
                previousMode && previousMode !== isStandalone;
            chrome.storage.local.set(
                {
                    'options.standalone': isStandalone,
                    hasSwitchedExtensionMode: hasSwitchedExtensionMode
                },
                () => chrome.runtime.reload()
            );
        }
    });
}

function setMarshmallowSettingsStorageKey(isMarshmallowEnabled) {
    chrome.storage.local.set(
        {
            [MARSHMALLOW_SETTINGS_STORAGE_KEY]: isMarshmallowEnabled
        },
        () => {
            if (chrome.runtime.lastError) {
                // Error storing the new value, reset checkbox to the previous one
                getAnalysisEngine();
                // Report error to the extension
                chrome.runtime.getBackgroundPage(backgroundPage => {
                    backgroundPage.backgroundController.reportOptionsException(
                        `Error storing value in async storage ${chrome.runtime.lastError.message}`,
                        'saveAnalysisEngine'
                    );
                });
            } else {
                showConfirmEngineChangedMessage();
            }
        }
    );
}

function saveAnalysisEngine(evt) {
    evt.preventDefault();

    const marshmallowInput = document.querySelector(
        'input[name="marshmallow"]:checked'
    );
    const userSelectedValue = marshmallowInput && marshmallowInput.value;
    const isMarshmallowEnabled = userSelectedValue === 'true';

    setMarshmallowSettingsStorageKey(isMarshmallowEnabled);
}

function getVersionInfo() {
    const manifest = chrome.runtime.getManifest();

    // populate extension name
    document.getElementById('extensionName').textContent = manifest.name;

    // add icon source to logo holder
    let icon48 = manifest.icons[48];
    // Chrome and Edge reply a relative URI while Firefox replies a full URI
    // with scheme moz-extension...
    try {
        new URL(icon48);
    } catch (e) {
        icon48 = '/' + icon48;
    }
    document.getElementById('logo').src = icon48;

    chrome.runtime.getBackgroundPage(backgroundPage => {
        const versionInfo = backgroundPage.backgroundController.getVersionInfo();

        document.getElementById('short_version_info').textContent =
            'v' + versionInfo.versions.extension + ' / ' + versionInfo.mode;
        document.getElementById('full_version_info').textContent =
            'Version Info:\n' + JSON.stringify(versionInfo, null, 4);

        if (versionInfo.mode.toLowerCase() === 'standalone') {
            document.querySelector('input#standalone').checked = true;
        } else {
            document.querySelector('input#desktop').checked = true;
        }
    });
}

function getAnalysisEngine() {
    chrome.runtime.getBackgroundPage(backgroundPage => {
        backgroundPage.backgroundController
            .getMarshmallowInfo()
            .then(isMarshmallowEnabled => {
                const ruleBasedElt = document.querySelector('input#rule-based');
                const marshmallowElt = document.querySelector(
                    'input#marshmallow'
                );
                const element = isMarshmallowEnabled
                    ? marshmallowElt
                    : ruleBasedElt;
                if (element) {
                    element.checked = true;
                }
            });
    });
}

function showConfirmEngineChangedMessage() {
    const confirmEngineChanged = document.getElementById(
        'confirmEngineChanged'
    );
    if (confirmEngineChanged) {
        confirmEngineChanged.classList.remove('hidden');
        window.setTimeout(() => {
            confirmEngineChanged.classList.add('hidden');
        }, 2000);
    }
}

function showFullVersionInfo() {
    document.getElementById('short_version_info').style.display = 'none';
    document.getElementById('full_version_info').style.display = 'block';
}

getVersionInfo();
showEngineChoiceIfFeatureIsFlipped();
getAnalysisEngine();
document
    .getElementById('mode_selector_form')
    .addEventListener('submit', saveOptions);
document
    .getElementById('engine_selector_form')
    .addEventListener('submit', saveAnalysisEngine);
document
    .getElementById('short_version_info')
    .addEventListener('click', showFullVersionInfo);
