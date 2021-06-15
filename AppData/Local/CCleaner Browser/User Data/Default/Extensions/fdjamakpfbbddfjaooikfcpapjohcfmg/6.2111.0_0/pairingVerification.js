function hideForm() {
    document.getElementById('confirmation_form').style.display = 'none';
}

function hideTitle() {
    [].slice.call(document.getElementsByClassName('title')).forEach(element => {
        element.style.display = 'none';
    });
}

function displayText(textId) {
    [].slice.call(document.getElementsByClassName('text')).forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(textId).style.display = 'block';
}

function displayTitle(titleId) {
    [].slice.call(document.getElementsByClassName('title')).forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(titleId).style.display = 'block';
}

function displayErrorCode() {
    document.getElementById('code').classList.add('code-error');
}

function getLanguage() {
    if (navigator.languages) {
        return navigator.languages[0];
    }

    if (navigator.language) {
        return navigator.language;
    }

    return 'en';
}

function getI18nLocale() {
    const availableLocales = [
        'de',
        'en',
        'es',
        'fr',
        'it',
        'ja',
        'ko',
        'nl',
        'pt',
        'sv',
        'zh'
    ];
    const locale = getLanguage().substr(0, 2);

    if (!availableLocales.includes(locale)) {
        return 'en';
    }

    return locale;
}

function translateTexts() {
    const locale = getI18nLocale();

    fetch(`i18n/en.json`)
        .then(r => r.json())
        .then(englishTranslations => {
            if (locale === 'en') {
                return [englishTranslations, englishTranslations];
            }

            return fetch(`i18n/${locale}.json`)
                .then(r => r.json())
                .then(translations => {
                    return [englishTranslations, translations];
                });
        })
        .then(([englishTranslations, translations]) => {
            [
                'title',
                'title_success',
                'click_authorize_text',
                'wait_text',
                'done_completed',
                'done_cancelled',
                'error_NEED_PLUGIN_UPDATE',
                'confirmation_form_authorize',
                'confirmation_form_cancel',
                'help'
            ].forEach(elementId => {
                const translation =
                    translations['common/pairingVerification/' + elementId] ||
                    englishTranslations[
                        'common/pairingVerification/' + elementId
                    ];
                const translationWithLink = translation.replace(
                    /_([^_]+)_/,
                    '<a class="help-link" href="https://support.dashlane.com/hc/articles/360000695425" target="_blank">$1</a>'
                );
                document.getElementById(
                    elementId
                ).innerHTML = translationWithLink;
            });
        });
}

function getCodeFromBackground() {
    return new Promise((resolve, reject) => {
        chrome.runtime.getBackgroundPage(backgroundPage => {
            if (!backgroundPage || !backgroundPage.messageController) {
                return reject();
            }

            backgroundPage.messageController
                .getVerificationCode()
                .then(confirmationCode => resolve(confirmationCode));
        });
    });
}

function closeWindow() {
    chrome.runtime.getBackgroundPage(backgroundPage => {
        backgroundPage.backgroundController.removeTabWithInternalUrl(
            'pairingVerification.html'
        );
    });
}

function confirmAutomaticPairing(code) {
    chrome.runtime.getBackgroundPage(backgroundPage => {
        backgroundPage.messageController.confirmAutomaticPairing(code);
        closeWindow();
    });
}

function displayWaitingConfirmationMessage() {
    displayText('wait_text');
    displayTitle('title_success');
    hideForm();
}

function confirmPairing() {
    chrome.runtime.getBackgroundPage(backgroundPage => {
        backgroundPage.messageController.confirmVerificationCode();
        displayWaitingConfirmationMessage();
    });
}

function displayCode(code) {
    if (code.length !== 6) {
        return;
    }

    for (let i = 0; i < code.length; i++) {
        document.getElementById('code_' + i).innerHTML = code.charAt(i);
    }
}

function showErrorIcon() {
    document.getElementById('code').style.display = 'none';
    document.getElementById('error-icon').style.display = 'block';
}

function init() {
    translateTexts();

    const parsedUrl = new URL(window.location.href);
    const verificationCodeFromUrl = parsedUrl.searchParams.get('code');
    const error = parsedUrl.searchParams.get('error');
    const success = parsedUrl.searchParams.get('success');

    if (error) {
        displayText('error_' + error);
        displayErrorCode();
        hideForm();
        showErrorIcon();
        hideTitle();
        return;
    }

    if (success) {
        displayText('done_completed');
        hideForm();
        return;
    }

    getCodeFromBackground().then(verificationCode => {
        if (!verificationCode) {
            throw new Error('No verification code');
        }

        if (verificationCodeFromUrl) {
            confirmAutomaticPairing(verificationCodeFromUrl);
            return;
        }

        displayCode(verificationCode);
    });
    document
        .getElementById('confirmation_form')
        .addEventListener('submit', e => {
            e.preventDefault();
            confirmPairing();
        });

    document
        .getElementById('confirmation_form_cancel')
        .addEventListener('click', e => {
            e.preventDefault();
            displayText('done_cancelled');
            displayErrorCode();
            hideForm();
            showErrorIcon();
            hideTitle();
        });
}

init();
