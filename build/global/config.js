"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = require("../settings.json");
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this._debug = false;
        this._verbose = false;
        this._tcp_error = false;
        this._appkey = appkey;
        this._appSecret = appSecret;
        this._appCommon = appCommon;
        this._appHeaders = appHeaders;
        this._webHeaders = webHeaders;
        this._initialized = false;
        this._danmuAddr = settings['bilibili-danmu'];
        var servers = settings['servers'];
        this._wsAddr = servers['default-ws-server'];
        this._httpAddr = servers['default-http-server'];
        this._biliveAddr = servers['bilive-ws-server'];
        this._bilihelperAddr = servers['bilihelper-tcp-server'];
        this._loadBalancing = settings['load-balancing'];
        this._roomCollectorStrategy = settings['room-collector-strategy'];
    }
    AppConfig.prototype.init = function () {
        if (this._initialized === false) {
            this.readArgs();
            this._initialized = true;
        }
    };
    AppConfig.prototype.readArgs = function () {
        if (process.argv.includes('-v')) {
            this._verbose = true;
        }
        if (process.argv.includes('--debug')) {
            this._debug = true;
        }
        if (process.argv.includes('--tcp-error')) {
            this._tcp_error = true;
        }
        return this;
    };
    Object.defineProperty(AppConfig.prototype, "danmuAddr", {
        get: function () {
            return this._danmuAddr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "wsAddr", {
        get: function () {
            return this._wsAddr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "httpAddr", {
        get: function () {
            return this._httpAddr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "biliveAddr", {
        get: function () {
            return this._biliveAddr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "bilihelperAddr", {
        get: function () {
            return this._bilihelperAddr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "loadBalancing", {
        get: function () {
            return this._loadBalancing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "roomCollectorStrategy", {
        get: function () {
            return this._roomCollectorStrategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "verbose", {
        get: function () {
            return this._verbose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "tcp_error", {
        get: function () {
            return this._tcp_error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "appkey", {
        get: function () {
            return this._appkey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "appSecret", {
        get: function () {
            return this._appSecret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "appCommon", {
        get: function () {
            return this._appCommon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "appHeaders", {
        get: function () {
            return this._appHeaders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "webHeaders", {
        get: function () {
            return this._webHeaders;
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());
exports.AppConfig = AppConfig;
var rand_hex = function (length) {
    if (length <= 0)
        return '';
    var items = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var max = items.length;
    var result = '';
    for (var i = 0; i < max; ++i) {
        result = "" + result + items[Math.floor(Math.random() * max)];
    }
    return result;
};
var statistics = {
    'appId': 1,
    'platform': 3,
    'version': '5.58.0',
    'abtest': '',
};
// const appkey: string = 'fb2c5b71e05297d0';                          // Alternative  APP_KEY
// const appSecret: string = '0a32fa204cd3a2f857cbe73444511e32';       // Alternative  SECRET_KEY
var appkey = '1d8b6e7d45233436';
var appSecret = '560c52ccd288fed045859ed18bffd973';
var appCommon = {
    'appkey': appkey,
    'build': 5580400,
    'channel': 'bili',
    'device': 'android',
    'mobi_app': 'android',
    'platform': 'android',
    'statistics': JSON.stringify(statistics),
};
var appHeaders = {
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 BiliDroid/5.58.0 (bbcallen@gmail.com)',
    'buvid': "XZ" + rand_hex(35),
};
var webHeaders = {
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
};
