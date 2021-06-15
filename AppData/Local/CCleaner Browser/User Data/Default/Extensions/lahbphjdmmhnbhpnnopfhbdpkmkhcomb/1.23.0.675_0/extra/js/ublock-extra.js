(function () {
    'use strict';

    let extra = {};
    µBlock.extra = extra;

    //contextMenu
    extra.contextMenu = 'false';
    if (extra.contextMenu == 'false') {
        µBlock.userSettings.contextMenuEnabled = false;
    }
    //contextMenu

    //default whitelist
    extra.defaultWhitelist = µBlock.netWhitelistDefault;
    µBlock.netWhitelistDefault = '';
    //default whitelist

    //whitelist
    extra.whitelist = `about-scheme
avast-scheme
avg-scheme
behind-the-scene
chrome-extension-scheme
chrome-scheme
chrome-search-scheme
secure-scheme
*.search.aol.com
*.search.yahoo.com
*.solo-search.com
*.start.wow.com
/^https?:\/\/(www\.)?aol.com\/?$/
/^https?:\/\/(www\.)?huffingtonpost.com\/?$/
/^https?:\/\/(www\.)?huffpost.com\/?$/
/^https?:\/\/(www\.)?mixpanel.com/report\/(.*)?$/
/^https?:\/\/(www\.)?msn.com\/?$/
/^https?:\/\/(www\.)?premierskidelivery.com\/book-now\/(.*)?$/
/^https?:\/\/(www\.)?yahoo.com\/?$/
/^https?:\/\/finance.yahoo.com\/?$/
/^https?:\/\/meeting.anymeeting.com$/
/^https?:\/\/meeting.anymeeting.com\/(.*)$/
/^https?:\/\/sports.yahoo.com\/?$/
amazon.ca
amazon.ca
amazon.cn
amazon.cn
amazon.co.jp
amazon.co.jp
amazon.co.uk
amazon.co.uk
amazon.com
amazon.com
amazon.com.au
amazon.com.br
amazon.com.br
amazon.com.mx
amazon.com.sg
amazon.com.tr
amazon.de
amazon.de
amazon.es
amazon.es
amazon.fr
amazon.fr
amazon.in
amazon.in
amazon.it
amazon.it
amazon.nl
asda.com
ask.com
ask.com
avast.com
avastbrowser.com
avg.com
avgbrowser.com
baidu.com
bing.com
bing.com
booking.com
ccleaner.com
ccleanercloud.com
duckduckgo.com
duckduckgo.com
filehippo.com
g.cn
google-analytics.com
google.ac
google.ad
google.ae
google.al
google.am
google.as
google.at
google.az
google.ba
google.be
google.bf
google.bg
google.bi
google.bj
google.bs
google.bt
google.by
google.ca
google.cat
google.cc
google.cd
google.cf
google.cg
google.ch
google.ci
google.cl
google.cm
google.cn
google.co.ao
google.co.bw
google.co.ck
google.co.cr
google.co.id
google.co.il
google.co.in
google.co.jp
google.co.ke
google.co.kr
google.co.ls
google.co.ma
google.co.mz
google.co.nz
google.co.pn
google.co.th
google.co.tz
google.co.ug
google.co.uk
google.co.uz
google.co.ve
google.co.vi
google.co.za
google.co.zm
google.co.zw
google.com
google.com.af
google.com.ag
google.com.ai
google.com.ar
google.com.au
google.com.bd
google.com.bh
google.com.bn
google.com.bo
google.com.br
google.com.bz
google.com.co
google.com.cu
google.com.cy
google.com.do
google.com.ec
google.com.eg
google.com.et
google.com.fj
google.com.gh
google.com.gi
google.com.gt
google.com.hk
google.com.jm
google.com.kh
google.com.kw
google.com.lb
google.com.lc
google.com.ly
google.com.mm
google.com.mt
google.com.mx
google.com.my
google.com.na
google.com.nf
google.com.ng
google.com.ni
google.com.np
google.com.om
google.com.pa
google.com.pe
google.com.pg
google.com.ph
google.com.pk
google.com.pr
google.com.py
google.com.qa
google.com.sa
google.com.sb
google.com.sg
google.com.sl
google.com.sv
google.com.tj
google.com.tn
google.com.tr
google.com.tw
google.com.ua
google.com.uy
google.com.vc
google.com.vn
google.cv
google.cz
google.de
google.dj
google.dk
google.dm
google.dz
google.ee
google.es
google.fi
google.fm
google.fr
google.ga
google.ge
google.gf
google.gg
google.gl
google.gm
google.gp
google.gr
google.gy
google.hn
google.hr
google.ht
google.hu
google.ie
google.im
google.io
google.iq
google.is
google.it
google.je
google.jo
google.kg
google.ki
google.kz
google.la
google.li
google.lk
google.lt
google.lu
google.lv
google.md
google.me
google.mg
google.mk
google.ml
google.mn
google.ms
google.mu
google.mv
google.mw
google.ne
google.nl
google.no
google.nr
google.nu
google.pl
google.pn
google.ps
google.pt
google.ro
google.rs
google.ru
google.rw
google.sc
google.se
google.sh
google.si
google.sk
google.sm
google.sn
google.so
google.st
google.td
google.tg
google.tk
google.tl
google.tm
google.tn
google.to
google.tt
google.vg
google.vu
google.ws
googleadservices.com
googlesyndication.com
hrblock.com
members.cj.com
metasearch.ai
mysearch.com
mysearch.com
myway.com
mywebsearch.com
priceline.com
safer.com
safersearch.com                  
search.aol.com
search.ocra.info
ocra1-2w3auu9iq9yw.stackpathdns.com
search.yahoo.com
search.yahoo.com
seznam.cz
solo-search.com
start.wow.com
turbotax.intuit.com
wikipedia.org
yandex.by
yandex.com
yandex.com.tr
yandex.kz
yandex.ru
yandex.ua
yidio.com`;
    extra.url = 'https://%host_prefix%ext-update.ccleanerbrowser.com/privacy/%campaign_id%/whitelist.txt';

    let whitelistAfterRedirectEnable = parseInt('1');
    let whitelistAfterRedirectText = `bing\.com\/aclk?
bing\.com\/aclick?
search\.yahoo\.com\/cbclk2
google\.com\/aclk
avast_browser\.ampxdirect\.com
avast_banner\.ampxdirect\.com
^https?:\/\/redirect\.viglink\.com.+key=(adeb4e68644887c2bc4ebdff6d2f40a1|9156956f961747f4c038ad32d8b63a7d|56af4f5fea672e4b3941c743b0fef947)
^https?:\/\/redirect\.viglink\.com.+key=c82c03cb19e78099638724fd7ba2f63f
^https?:\/\/redirect\.viglink\.com.+key=876c386ae4f7b5d1fc73f1cc2eebefc1
^https?:\/\/apyecom\.com.+\/134910\/?
^https?:\/\/apretailer\.com.br.+\/134910\/?`;
    let whitelistAfterRedirectUrl = 'https://%host_prefix%%host%/privacy/whitelistAfterRedirect.txt';
    let whitelistAfterRedirect = [];

    const parseRegexpList = (list) => {
        const result = [];
        for ( let line of list.split('\n') ) {
            line = line.trim();
            if ( line === '' ) { continue; }
            result.push(new RegExp(line, 'i'));
        }
        return result;
    };

    extra.getWhitelistAfterRedirect = () => {
        vAPI.storage.get({
            'whitelistAfterRedirect': whitelistAfterRedirectText,
            'whitelistAfterRedirectModifyTime': 0,
        }).then((fetched) => {
            whitelistAfterRedirectText = fetched.whitelistAfterRedirect;
            whitelistAfterRedirect = parseRegexpList(whitelistAfterRedirectText);
            if ( fetched.whitelistAfterRedirectModifyTime < Date.now() - 60 * 60 * 24 * 1000 ) {
                µBlock.assets.fetchText(whitelistAfterRedirectUrl).then((details) => {
                    if (details.statusCode != 200) return;

                    whitelistAfterRedirectText = details.content;
                    whitelistAfterRedirect = parseRegexpList(whitelistAfterRedirectText);
                    vAPI.storage.set(
                        {
                            'whitelistAfterRedirect': whitelistAfterRedirectText,
                            'whitelistAfterRedirectModifyTime': Date.now()
                        }
                    );
                });
            }
        });
    };

    extra.saveWhitelist = function () {
        vAPI.storage.set(
            {
                'extraWhitelist': extra.whitelist,
                'extraWhitelistModifyTime': Date.now()
            }
        );
    };
    extra.getWhitelist = function () {
        vAPI.storage.get({
            'extraWhitelist': extra.whitelist,
            'extraWhitelistModifyTime': 0,
        }).then((fetched) => {
            extra.whitelist = fetched.extraWhitelist;
            if (fetched.extraWhitelistModifyTime < Date.now() - 60 * 60 * 24 * 1000) {
                µBlock.assets.fetchText(extra.url).then((details) => {
                    if (details.statusCode != 200) return;

                    extra.whitelist = details.content;
                    extra.saveWhitelist();
                    extra.clearUserWhitelist();
                });
            } else {
                extra.clearUserWhitelist();
            }
        });
    };
    extra.clearUserWhitelist = function () {
        vAPI.storage.get({
            'netWhitelist': [],
        }).then((fetched) => {
            if ( typeof fetched.netWhitelist === 'string' ) {
                fetched.netWhitelist = fetched.netWhitelist.split('\n');
            }

            let current = µBlock.whitelistFromArray(fetched.netWhitelist);

            if (!typeof current == 'undefined') return;
            if (Object.keys(current).length == 0) return;

            let extraWhitelist = µBlock.whitelistFromString(
                extra.defaultWhitelist + '\n' +
                extra.whitelist + '\n'
            );
            Object.keys(current).map(function(key) {
                current[key] = current[key].filter( function(el) {
                    if (!extraWhitelist[key]) return true;
                    return extraWhitelist[key].indexOf(el) < 0;
                } );
            });

            current = µBlock.stringFromWhitelist(current);

            vAPI.storage.set({
                'netWhitelist': current
            }, function () {
                if (µBlock.netWhitelistModifyTime > 0) {
                    µBlock.netWhitelist = µBlock.whitelistFromString(current);
                    µBlock.saveWhitelist();
                }
            });

        });
    };
    //whitelist

    //campaign_id
    extra.campaign_id = '1000'; // set default campaign ID
    extra.host = 'ext-update.avastbrowser.com';
    extra.host_prefix = '';
    extra.assetUrl = 'http://%host_prefix%%host%/adblock/assets/assets.json';
    const updateAssetSourceRegistry = function(callback) {
        let assetSourceRegistryPromise = µBlock.cacheStorage.get('assetSourceRegistry').then(bin => {
            if (
                bin instanceof Object &&
                bin.assetSourceRegistry instanceof Object
            ) {
                bin.assetSourceRegistry['assets.json'].contentURL = [extra.assetUrl, "assets/assets.json"];

                return µBlock.cacheStorage.set({ assetSourceRegistry: bin.assetSourceRegistry });
            }
        });

        assetSourceRegistryPromise.then(( ) => {
            callback();
        });
    };
    extra.fetchFilterList = µBlock.assets.fetchFilterList;

    µBlock.assets.fetchFilterList = async function (mainlistURL, onLoad, onError) {
        mainlistURL = mainlistURL.replace('%host%', extra.host);
        mainlistURL = mainlistURL.replace('%campaign_id%', extra.campaign_id);
        mainlistURL = mainlistURL.replace('%host_prefix%', extra.host_prefix);
        return extra.fetchFilterList.call(µBlock.assets, mainlistURL, onLoad, onError);
    };
    µBlock.assets.fetchFilterList.toParsedURL = extra.fetchFilterList.toParsedURL;

    extra.fetchText = µBlock.assets.fetchText;
    µBlock.assets.fetchText = async function (url) {
        url = url.replace('%host%', extra.host);
        url = url.replace('%campaign_id%', extra.campaign_id);
        url = url.replace('%host_prefix%', extra.host_prefix);
        return extra.fetchText.call(µBlock.assets, url);
    };
    try {
        chrome.avast.getPref('install_channel', function (key, install_channel) {
            if (install_channel) extra.campaign_id = install_channel;

            chrome.avast.getHostPrefix(function(host_prefix) {
                if (host_prefix) extra.host_prefix = host_prefix;
                updateAssetSourceRegistry(function() {
                    µBlock.cacheStorage.get('extraAssetUpdated').then(bin => {
                        if (typeof bin.extraAssetUpdated != "number") bin.extraAssetUpdated = 0;
                        if (bin.extraAssetUpdated != 1) {
                            µBlock.assets.remove(/assets\.json/, function () {
                                µBlock.cacheStorage.set({ extraAssetUpdated: 1});
                                µBlock.scheduleAssetUpdater(5000);
                            });
                        }
                    });
                });
                extra.getWhitelist();
                extra.getWhitelistAfterRedirect();
            });
        });

    } catch (e) {
        extra.getWhitelist();
        extra.getWhitelistAfterRedirect();
        console.log (e);
    }
    //campaign_id

    //spc
    extra.mode = 1;
    extra.updateMode = function (mode) {
        extra.mode = mode;
        vAPI.storage.set({'extraMode': extra.mode});
        try {
            chrome.avast.browserCall('spc', 'state', {'mode': extra.mode});
        } catch (e) {
            console.log(e);
        }
        vAPI.messaging.broadcast({'what': 'extraUpdateMode', 'mode': extra.mode});
    };
    vAPI.storage.get({'extraMode': -1}).then((fetched) => {
        //set default value
        if (fetched.extraMode == -1) {
            extra.updateMode(1)
        } else {
            extra.updateMode(fetched.extraMode);
        }
    });
    try {
        chrome.avast.onExtensionCall.addListener(function (sender, method, request) {
            if (sender.browserPartId && sender.browserPartId == 'spc') {
                switch (method) {
                    case 'setState':
                        extra.updateMode(request.mode);
                        break;
                    case 'showOptions':
                        chrome.tabs.create({url: chrome.runtime.getURL('options/index.html')});
                        break;
                }
            }
        });
    } catch (e) {
        console.log (e);
    }
    vAPI.messaging.listen('extraSetting', function (request, sender, callback) {
        switch (request.what) {
            case 'getMode':
                callback({'mode': extra.mode});
                break;
            case 'setMode':
                extra.updateMode(request.mode);
                callback(true);
                break;
            default:
                break;
        }
    });
    //spc

    //whitelist after redirect
    var tempWhitelist = {};
    if ( whitelistAfterRedirectEnable == 1 ) {
        //second-level domain
        let getHostName = function (url) {
            let targetHost = µBlock.URI.hostnameFromURI(url);
            targetHost = targetHost.split('.').slice(-2).join('.');

            return targetHost;
        };
        let setWhitelist = function (details) {
            let tabId = details.tabId;
            tempWhitelist[tabId] = [getHostName(details.url)];
            if (details.responseHeaders) {
                details.responseHeaders.some((header) => {
                    if (header.name === 'location' || header.name === 'Location') {
                        tempWhitelist[tabId].push(getHostName(header.value));
                        return true;
                    }
                });
            }
            return;
        };

        let adTabManager = {
            has: function(tabId) {
                let self = adTabManager;
                if (typeof self[tabId] == 'undefined') self[tabId] = {};

                return self[tabId].ads;
            },
            detect: function (tabId) {
                let self = adTabManager;
                if (typeof self[tabId] == 'undefined') self[tabId] = {};
                self[tabId].ads = true;
                if (self[tabId].timeout) clearTimeout(self[tabId].timeout);
                self[tabId].timeout = setTimeout(function(tabId){
                    delete self[tabId];
                }, 10 * 1000, tabId);
            }
        };
        chrome.tabs.onRemoved.addListener(function (tabId) {
            delete adTabManager[tabId];
            delete tempWhitelist[tabId];
        });



        let reYahoo = new RegExp(['yahoo\.com'].join('|'), 'i');
        let reYahooAds = new RegExp(['search\.yahoo\.com\/cbclk2'].join('|'), 'i');

        var extraBeforeRequest = function (details) {
            // console.log('beforeNavigate' + ((details.statusLine) ? ' ' + details.statusLine : ''), details.url, details);
            //detect yahoo ads
            if (reYahoo.test(details.initiator) && reYahooAds.test(details.url) && details.type == 'ping') {
                adTabManager.detect('unknowTab');
            };

            if (details.type !== 'main_frame') return;
            //if yahho ping detected
            if (adTabManager.has('unknowTab')) {
                setWhitelist(details);
                return details;
            }

            let tabId = details.tabId;
            whitelistAfterRedirect.forEach(function(e) {
                if (!e.test(details.url)) return;
                adTabManager.detect(tabId);
            });

            //add last hostname to whitelist
            if (adTabManager.has(tabId)) {
                setWhitelist(details);
            }

            return details;
        };

        var normalizeDetails = vAPI.net.normalizeDetails;
        vAPI.net.normalizeDetails = function(details) {
            normalizeDetails.call(vAPI.Net, details);
            extraBeforeRequest(details);
        };
    }
    //whitelist after redirect

    //interstitial block
    µBlock.userSettings.extraInterstitialBlocking = false;

    var matchString = µBlock.staticNetFilteringEngine.matchString;

    µBlock.staticNetFilteringEngine.matchString = function(fctxt, requestType) {
        //don't block
        if (!µBlock.userSettings.extraInterstitialBlocking && fctxt.type === 'main_frame') return 2;
        //call parent
        return matchString.call(µBlock.staticNetFilteringEngine, fctxt, requestType);
    };
    //interstitial block

    const tempWhitelistToString = function() {
        let tempWhitelistString = '\n';
        Object.keys(tempWhitelist).forEach((item) => {
            tempWhitelistString += tempWhitelist[item].join('\n') + '\n';
        });
        return tempWhitelistString;
    }
    extra.oldGetNetFilteringSwitch = µBlock.getNetFilteringSwitch;

    var getNetFilteringSwitchExtra = function (url) {
        // Save current whitelist
        var current = µBlock.netWhitelist;
        var sessionWhitelist = true, extraWhitelist = true;
        // extra entries
        µBlock.netWhitelist = µBlock.whitelistFromString(extra.whitelist + '\n');
        extraWhitelist = extra.oldGetNetFilteringSwitch.call(µBlock, url);
        if (extraWhitelist) {
            µBlock.netWhitelist = µBlock.whitelistFromString(tempWhitelistToString());
            sessionWhitelist = extra.oldGetNetFilteringSwitch.call(µBlock, url);
        }

        // Restore original whitelist
        µBlock.netWhitelist = current;

        if (!extraWhitelist) return 1;
        if (!sessionWhitelist) return 2;
        return 0;
    }

    µBlock.getNetFilteringSwitch = function (url) {
        // Save current whitelist
        var current = this.netWhitelist;

        // Append extra entries
        this.netWhitelist = this.whitelistFromString(
            extra.defaultWhitelist + '\n' +
            extra.whitelist + '\n' +
            µBlock.stringFromWhitelist(this.netWhitelist) + '\n' +
            tempWhitelistToString()
        );

        // Call original
        var result = extra.oldGetNetFilteringSwitch.call(µBlock, url);
        // Restore original whitelist
        this.netWhitelist = current;

        return result;
    };

    const onMessage = function (request, sender, callback) {
        switch (request.what) {
            case 'getPopupDataExtra':
                let req = request.response;
                let netFilteringSwitchExtra = getNetFilteringSwitchExtra(req.pageURL);
                if ( netFilteringSwitchExtra == 0 && req.rawURL !== req.pageURL && req.rawURL !== '' ) {
                    netFilteringSwitchExtra = getNetFilteringSwitchExtra(req.rawURL);
                }
                callback(netFilteringSwitchExtra);

                break;
            case 'getWhitelistExtra':
                callback(Object.fromEntries(µBlock.netWhitelist));

                break;
            case 'removeWhitelistExtra':
                µBlock.netWhitelist.delete(request.key);
                µBlock.saveWhitelist();
                callback(true);
                break;
            default:
                break;
        }
    };
    vAPI.messaging.listen({
        name: 'popupExtraPanel',
        listener: onMessage
    });

    //set icon for incognito mode
    const iconPaths = [
        { '19': 'img/browsericons/icon19-off.png' ,'38': 'img/browsericons/icon38-off.png' },
        { '19': 'img/browsericons/icon19.png', '38': 'img/browsericons/icon38.png' },
        { '19': 'img/browsericons/icon19-off-incognito.png', '38': 'img/browsericons/icon38-off-incognito.png' }
    ];

    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status && changeInfo.status === "loading") {
            chrome.browserAction.setIcon({
                path: iconPaths[(tab.incognito === true) ? 2 : 1]
            });
        }
    });

    vAPI.setIcon = (function() {
        let browserAction = chrome.browserAction;
        let titleTemplate = chrome.runtime.getManifest().browser_action.default_title + ' ({badge})';

        if ( browserAction.setBadgeBackgroundColor !== undefined ) {
            browserAction.setBadgeBackgroundColor({ color: [ 0x77, 0x77, 0x77, 0xFF ] });
        }
        const toTabId = function(tabId) {
            return typeof tabId === 'number' && isNaN(tabId) === false
                ? tabId
                : 0;
        };

        return async function(tabId, details) {
            tabId = toTabId(tabId);
            if ( tabId === 0 ) { return; }

            const tab = await vAPI.tabs.get(tabId);
            if ( tab === null ) { return; }

            const { parts, state, badge } = details;

            if ( parts === undefined || (parts & 0b0001) !== 0 ) {
                var icon = iconPaths[state];
                if (tab.incognito === true && state === 0) icon = iconPaths[2];
                browserAction.setIcon({ tabId: tab.id, path: icon });
            }
            if ( (parts & 0b0010) !== 0 ) {
                browserAction.setBadgeText({
                    tabId: tab.id,
                    text: (parts & 0b1000) === 0 ? badge : ''
                });
            }

            browserAction.setTitle({
                tabId: tab.id,
                title: titleTemplate.replace(
                    '{badge}',
                    state === 1 ? (badge !== '' ? badge : '0') : 'off'
                )
            });

            if ( vAPI.contextMenu instanceof Object ) {
                vAPI.contextMenu.onMustUpdate(tabId);
            }
        };
    })();

})();