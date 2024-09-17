// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"keHpo":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8c9ac7a304bac911";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bBsp0":[function(require,module,exports) {
var _asciiMorphMinJs = require("./lib/asciiMorph.min.js");
const asciiArtContainer = document.querySelector(".ascii-art-container");
(0, _asciiMorphMinJs.AsciiMorph)(asciiArtContainer, {
    x: 100,
    y: 15
});
// source : https://www.asciiart.eu/
let asciisGallery = [
    [
        "                _ooOoo_",
        "               o8888888o",
        '               88" . "88',
        "               (| -_- |)",
        "               O\\  =  /O",
        "            ____/`---'\\____",
        "          .'  \\\\|     |//  `.",
        "         /  \\\\|||  :  |||//  \\",
        "        /  _||||| -:- |||||_  \\",
        "        |   | \\\\\\  -  /'| |   |",
        "        | \\_|  `\\`---'//  |_/ |",
        "        \\  .-\\__ `-. -'__/-.  /",
        "      ___`. .'  /--.--\\  `. .'___",
        '   ."" \'<  `.___\\_<|>_/___.\' _> \\"".',
        "  | | :  `- \\`. ;`. _/; .'/ /  .' ; |",
        "  \\  \\ `-.   \\_\\_`. _.'_/_/  -' _.' /",
        "===`-.`___`-.__\\ \\___  /__.-'_.'_.-'===",
        "                `=--=-'                    hjw"
    ],
    [
        "      \\`.     ___",
        "       \\ \\   / __>0",
        "   /\\  /  |/' / ",
        "  /  \\/   `  ,`'--.",
        " / /(___________)_ \\",
        " |/ //.-.   .-.\\\\ \\ \\",
        " 0 // :@ ___ @: \\\\ /",
        "   ( o ^(___)^ o ) 0",
        "    \\ \\_______/ /",
        "/\\   '._______.'--.",
        "\\ /|  |<_____>    |",
        " \\ \\__|<_____>____/|__",
        "  \\____<_____>_______/",
        "      |<_____>    |",
        "      |<_____>    |",
        "      :<_____>____:",
        "     / <_____>   /|",
        "    /  <_____>  / |",
        "   /___________/  |",
        "   |           | _|__",
        "   |           | ---||_",
        "   |   |L\\/|/  |  | [__]",
        "   |  \\|||\\|\\  |  /",
        "   |           | /",
        "   |___________|/"
    ],
    [
        "                    ()                    ",
        "                 __/\\__                  ",
        '        |\\   .-"`      `"-.   /|         ',
        "        | \\.'( ') (' ) (. )`./ |         ",
        "         \\_                  _/          ",
        "           \\  `~\"'=::='\"~`  /            ",
        "    ,       `-.__      __.-'       ,     ",
        '.---\'\\________( `""~~""` )________/\'---. ',
        ' >   )       / `""~~~~""` \\       (   <  ',
        "'----`--..__/        -(-)- \\__..--`----' ",
        "            |_____ __ _____|             ",
        "            [_____[##]_____]  I HAVE BEEN CHOSEN... ",
        "            |              |    FAREWELL MY FRIENDS... ",
        "            \\      ||      /     I GO ONTO A BETTER PLACE! ",
        "       jgs   \\     ||     /                  ",
        '          .-"~`--._||_.--\'~"-.               ',
        '         (_____,.--""--.,_____)              '
    ],
    [
        "     .--------.",
        "    / .------. \\",
        "   / /        \\ \\",
        "   | |        | |",
        "  _| |________| |_",
        ".' |_|        |_| '.",
        "'._____ ____ _____.'",
        "|     .'____'.     |",
        "'.__.'.'    '.'.__.'",
        "'.__  |      |  __.'",
        "|   '.'.____.'.'   |",
        "'.____'.____.'____.'",
        "'.________________.'"
    ],
    [
        ' _________        .---"""      """---.              ',
        ":______.-':      :  .--------------.  :             ",
        "| ______  |      | :                : |             ",
        "|:______B:|      | |  Little Error: | |             ",
        "|:______B:|      | |                | |             ",
        "|:______B:|      | |  Power not     | |             ",
        "|         |      | |  found.        | |             ",
        "|:_____:  |      | |                | |             ",
        "|    ==   |      | :                : |             ",
        "|       O |      :  '--------------'  :             ",
        "|       o |      :'---...______...---'              ",
        "|       o |-._.-i___/'             ._        ",
        "|'-.____o_|   '-.   '-...______...-'  `-._          ",
        ":_________:      `.____________________   `-.___.-. ",
        "                 .'.eeeeeeeeeeeeeeeeee.'.      :___:",
        "               .'.eeeeeeeeeeeeeeeeeeeeee.'.         ",
        "              :____________________________:       "
    ],
    [
        '                             .-"""-.    __                         ',
        "                             /       \\.q$$$$p.                      ",
        "                         __:  db     $$$$$$$$b.                    ",
        '                  _._.-""  :  $"b.   :$$$S$$$$$b                   ',
        '                .\'   "-.  "   T. `b d$$$S$S$$$$P^.              .-,',
        "    .qp.       :        `.     TsP' TSSS$P'S$P'   `.            `dP",
        " ,q$$$$$b      ;b         \\  '.     /\"T$P  :P       `.      __ dP_,",
        ' :$$$$SS$b_    $$b.  __.   ;_  `-._/   Y    \\         `.   ( dP".;',
        " $$$$$$$S$$b.  :S$$$p._    $$$$p./      ;    \"-._       `--dP .'  ;",
        ':$$$$P^^TS$$$b  SS$$$$$$   \'T$$$$b.     ;        ""--.   dP  /   / ',
        '$$$$P    :$$$$bd$SSS$$$;\\  . "^$$$$b___/            __\\dP .-"_.-"  ',
        '$$$P     $$$$$$b`T$SSS$  "-.J   "^T$/  ""-._       ( dP\\ /   /     ',
        ':$$      ; T$$$$b.`T$$;     d$+.     ""-.   ""--.._dP-, `._."      ',
        " T;     :   T$$$$$b.`^'   _d$P .$p.___   \"         \\`-'            ",
        '  `.    ;    T$$$$$$b._.dS$$$ :$$$b"--..__..---g,   \\              ',
        '    `. :      $$$$$$$$$$S$$$P\\ TP^"\\       ,-dP ;    ;             ',
        "      \\;   .-'$$$$$$$SSSP^^\"  \\     `._,-.-dP-' |    ;             ",
        '       :     :"^^"" """        `.   `._:\'.`.\\   :    ;\\            ',
        '        \\  , :              bug  "-. (,j\\ ` /   ;\\(// \\\\           ',
        '         `:   \\                     "dP__.-"    \'-\\\\   \\;          ',
        "           \\   :                .--dP,             \\;              ",
        "            `--'                `dP`-'                              ",
        "                              .-j                                   ",
        "                              `-:_                                  ",
        "                                 \\)                                 ",
        "                                  `--'                              "
    ],
    [
        "       //:::::::::::::::::::::::::::::::::::::::::::::\\",
        "    //:::_______:::::::::________::::::::::_____:::::::\\",
        '  //:::_/   _-"":::_--"""        """--_::::\\_  ):::::::::\\',
        ' //:::/    /:::::_"                    "-_:::\\/:::::|^\\:::\\',
        "//:::/   /~::::::I__                      \\:::::::::|  \\:::\\",
        '\\\\:::\\   (::::::::::""""---___________     "--------"  /::://',
        ' \\\\:::\\  |::::::::::::::::::::::::::::""""==____      /::://',
        '  \\\\:::"\\/::::::::::::::::::::::::::::::::::::::\\   /~::://',
        "    \\\\:::::::::::::::::::::::::::::::::::::::::::)/~::://",
        '      \\\\::::""""""------_____::::::::::::::::::::::://',
        '        \\\\:::"\\               """""-----_____:::::://',
        '          \\\\:::"\\    __----__                )::://',
        '            \\\\:::"\\/~::::::::~\\_         __/~:://',
        '              \\\\::::::::::::::::""----""":::://',
        "                \\\\::::::::::::::::::::::::://",
        '                  \\\\:::\\^""--._.--""^/::://',
        '                    \\\\::"\\         /":://',
        '                      \\\\::"\\     /":://',
        '                        \\\\::"\\_ /":://',
        "                          \\\\::::://",
        "                            \\\\_//",
        '                              "'
    ],
    [
        "           0 _____                       ",
        "           X_____\\                      ",
        "   .-^-.  ||_| |_||  .-^-.               ",
        "  /_\\_/_\\_|  |_|  |_/_\\_/_\\             ",
        "  ||(_)| __\\_____/__ |(_)||             ",
        "  \\/| | |::|\\```/|::| | |\\/             ",
        "  /`---_|::|-+-+-|::|_---'\\            ",
        " / /  \\ |::|-|-|-|::| /  \\ \\           ",
        "/_/   /|`--'-+-+-`--'|\\   \\_\\          ",
        "| \\  / |===/_\\ /_\\===| \\  / |         ",
        "|  \\/  /---/-/-\\-\\  o\\  \\/  |        ",
        "| ||| | O / /   \\ \\   | ||| |          ",
        "| ||| ||-------------|o|||| |          ",
        "| ||| ||----\\ | /----|o|||| |          ",
        "| _|| ||-----|||-----|o|||_ |          ",
        "\\/|\\/  |     |||     |o|\\/|\\/         ",
        "\\_o/   |----|||||----|-' \\o_/         ",
        "       |##  |   |  ##|                 ",
        "       |----|   |----|                 ",
        "       ||__ |   | __||                 ",
        "      [|'  `|] [|'  `|]                ",
        "      [|`--'|] [|`--'|]                ",
        "      /|__| |\\ /| |__|\\              ",
        "      ||  | || || |  ||               ",
        "      ||__|_|| ||_|__||               ",
        "      ||    || ||    ||               ",
        "      \\|----|/ \\|----|/    -- Jay Thaler ",
        "      /______\\ /______\\              ",
        "      |__||__| |__||__|              "
    ],
    [
        "__ _____ ____ _____ ______ _______ _____ ______ ______ ______ ___",
        "__]_____]____]_____]______]_______]_____]______]______]______]___]",
        '             _                       _______  |||"||;;|.||##||=|||',
        "  _                           _     |   *  3| |||-|| =|-||==||+|||",
        "  ____________       _              |       | |||_||__|_||__||_|||",
        "|`.   --__     `.        _______    |       | ||================||",
        "|  `._____________`.  .'|.-----.|   _ ======| ||| | -|&|^^|!!|-|||",
        "|   | .-----------.| |  ||     ||  (o))   _ | ||| |**|=|+-|##|=|||",
        "|   | |  .-------.|| |  ||     ||  /||   / \\`._|  .-.|_|__|__|_|||",
        "|   | |  |       |||_`..|'_____'| //||___\\_/.'\\| (( ))==========||",
        "|   | |`.|  ==== ||| | `---------(o)||         \\  /-'-=|+|.-|-'|||",
        "|`. | |`.|_______|||/|______________||__.--._ (o)/|=|;:|-|&&|&&|||",
        "|  `|_|===========||_|                 (____)-.'(o)_|__|_|__|__|||",
        "|   | |  .-------.||                           `._\\=============||",
        "|   | |  |       |||                             `.     |       ||",
        "|   | |`.|  ==== |||`._____________________________`.  o|o      ||",
        "|`. | |`.|_______||| |._.----------------.__.-------.|__|_______||",
        "|  `|_|===========|| || '----------------'  | .---. ||  __",
        "|   | |  .-------.|| ||               |     |_______||.'\\.'",
        "|   | |  |       ||| || ______________|     | .---. ||'.__.'",
        "|   | |`.|  ==== ||| ||                `.   |_______|||  _ |",
        " `. | |`.|_______||| ||                  `. | .---. |||_  ||",
        "   `|_|========LGB||`||                    `|_______|||____|",
        "                       `.                    `.",
        "                         `.____________________`."
    ],
    [
        "                ,,ggddY888Ybbgg,,                  ",
        '          ,agd8""\'   .d8888888888bga,              ',
        '       ,gdP""\'     .d88888888888888888g,           ',
        '     ,dP"        ,d888888888888888888888b,         ',
        '   ,dP"         ,8888888888888888888888888b,       ',
        '  ,8"          ,8888888P"""88888888888888888,      ',
        " ,8'           I888888I    )88888888888888888,     ",
        ",8'            `8888888booo8888888888888888888,    ",
        "d'              `88888888888888888888888888888b    ",
        '8                `"8888888888888888888888888888    ',
        '8                  `"88888888888888888888888888    ',
        '8                      `"8888888888888888888888    ',
        "Y,                        `8888888888888888888P    ",
        "`8,                         `88888888888888888'    ",
        " `8,              .oo.       `888888888888888'     ",
        "  `8a             8888        88888888888888'      ",
        "   `Yba           `\"\"'       ,888888888888P'      ",
        "     \"Yba                   ,88888888888'         ",
        '       `"Yba,             ,8888888888P"\'          ',
        '          `"Y8baa,      ,d88888888P"\'             ',
        '               `""YYba8888P888"\'                  '
    ],
    [
        "                      `. ___                          ",
        "                    __,' __`.                _..----....____",
        "        __...--.'``;.   ,.   ;``--..__     .'    ,-._    _.-'",
        "  _..-''-------'   `'   `'   `'     O ``-''._   (,;') _,'    ",
        ",'________________                          \\`-._`-',       ",
        " `._              ```````````------...___   '-.._'-:         ",
        "    ```--.._      ,.                     ````--...__\\-.    ",
        "            `.--. `-`                       ____    |  |`   ",
        "              `. `.                       ,'`````.  ;  ;`   ",
        "                `._`.        __________   `.      \\'__/`    ",
        "                   `-:._____/______/___/____`.     \\  `     ",
        "                               |       `._    `.    \\      ",
        "                               `._________`-.   `.   `.___  ",
        "                                             SSt  `------'` "
    ],
    [
        "            #### ##### ##### ###  ##### ###                             ",
        "            ##  ####  ##### ###### #####  ###                          ",
        "               ####  ####  ########  ####  ####                        ",
        "             #####  ####  ####  ##### ##### ####                       ",
        "            ##### ##### ##### ## ##### #####  ####                     ",
        "            ###  ####  ##### ####  ####  ####  ###                     ",
        "            ##  ####  ####  ######  ####  ####  ##                     ",
        "              ##### ##### ########## ##### ##### ##                    ",
        "             ####  ##### #####  ##### #####  ####                      ",
        "            ####  ####  ####  ##  ####  ####  ####                     ",
        "            ### ##### #####  ####  ####  ##### ###                     ",
        "            #  ####  ##### ######## ##### #####  #                     ",
        "              ####  ####  #### #####  ####  ####                       ",
        "            ##### ##### #####    ####  ####  ###                       ",
        "            ###  ##### ##### #### ##### #####                          ",
        "            ##  ####  ####  ###### #####  ##                           ",
        "              ##### #####  ########  ####                              ",
        "             ##### ##### #####  ##### #####                            ",
        "            ####  ####  ##### ## #####  ####                           ",
        "            ###  ####  ####  ####  ####  ####                          ",
        "            ## ##### #####  ######  ##### #####                        ",
        "              ##### ##### ########## #####  ####                       ",
        "             ####  ####  #####  #####  ####  ####                      ",
        "            ####  ####  ####  ##  ####  ##### #####                    ",
        "            ### ##### #####  ####  ##### ##### #####                   ",
        "            #  ####  ##### ######## #####  ####  ####                  "
    ],
    [
        "D.H., 1991           __gggrgM**M#mggg__",
        '                __wgNN@"B*P""mp""@d#"@N#Nw__',
        "              _g#@0F_a*F#  _*F9m_ ,F9*__9NG#g_",
        '           _mN#F  aM"    #p"    !q@    9NL "9#Qu_',
        '          g#MF _pP"L  _g@"9L_  _g""#__  g"9w_ 0N#p',
        '        _0F jL*"   7_wF     #_gF     9gjF   "bJ  9h_',
        "       j#  gAF    _@NL     _g@#_      J@u_    2#_  #_",
        '      ,FF_#" 9_ _#"  "b_  g@   "hg  _#"  !q_ jF "*_09_',
        '      F N"    #p"      Ng@       `#g"      "w@    "# t',
        '     j p#    g"9_     g@"9_      gP"#_     gF"q    Pb L',
        '     0J  k _@   9g_ j#"   "b_  j#"   "b_ _d"   q_ g  ##',
        '     #F  `NF     "#g"       "Md"       5N#      9W"  j#',
        '     #k  jFb_    g@"q_     _*"9m_     _*"R_    _#Np  J#',
        '     tApjF  9g  J"   9M_ _m"    9%_ _*"   "#  gF  9_jNF',
        '      k`N    "q#       9g@        #gF       ##"    "#j',
        '      `_0q_   "#q_    _&"9p_    _g"`L_    _*"#   jAF,\'',
        '       9# "b_j   "b_ g"    *g _gF    9_ g#"  "L_*"qNF',
        '        "b_ "#_    "NL      _B#      _I@     j#" _#"',
        '          NM_0"*g_ j""9u_  gP  q_  _w@ ]_ _g*"F_g@',
        '           "NNh_ !w#_   9#g"    "m*"   _#*" _dN@"',
        '              9##g_0@q__ #"4_  j*"k __*NF_g#@P"',
        '                "9NN#gIPNL_ "b@" _2M"Lg#N@F"',
        '                    ""P@*NN#gEZgNN@#@P""'
    ],
    [
        "  _______________________________",
        " /\\                              \\",
        "/++\\    __________________________\\",
        "\\+++\\   \\ ************************/",
        " \\+++\\   \\___________________ ***/",
        "  \\+++\\   \\             /+++/***/",
        "   \\+++\\   \\           /+++/***/",
        "    \\+++\\   \\         /+++/***/",
        "     \\+++\\   \\       /+++/***/",
        "      \\+++\\   \\     /+++/***/",
        "       \\+++\\   \\   /+++/***/",
        "        \\+++\\   \\ /+++/***/",
        "         \\+++\\   /+++/***/",
        "          \\+++\\ /+++/***/",
        "           \\+++++++/***/",
        "            \\+++++/***/",
        "             \\+++/***/",
        "              \\+/___/"
    ],
    [
        "               (( _______",
        "     _______     /\\O    O\\",
        "    /O     /\\   /  \\      \\",
        "   /   O  /O \\ / O  \\O____O\\ ))",
        "((/_____O/    \\\\    /O     /",
        "  \\O    O\\    / \\  /   O  /",
        "   \\O    O\\ O/   \\/_____O/",
        "    \\O____O\\/ )) mrf      ))",
        "  (("
    ],
    [
        "                 _.--._",
        "                 _|__|_",
        "     _____________|__|_____________",
        "  .-'______________________________'-.",
        "  | |________POLICE___BOX__________| |",
        "  |  |============================|  |",
        "  |  | .-----------..-----------. |  |",
        "  |  | |  _  _  _  ||  _  _  _  | |  |",
        "  |  | | | || || | || | || || | | |  |",
        "  |  | | |_||_||_| || |_||_||_| | |  |",
        "  |  | | | || || | || | || || | | |  |",
        "  |  | | |_||_||_| || |_||_||_| | |  |",
        "  |  | |  _______  ||  _______  | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |_______| || |_______| | |  |",
        "  |  | |  _______ @||@ _______  | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |_______| || |_______| | |  |",
        "  |  | |  _______  ||  _______  | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |       | || |       | | |  |",
        "  |  | | |_______| || |_______| | |  |",
        "  |  | '-----------''-----------' |  |",
        " _|__|/__________________________\\|__|_ LGB",
        "'----'----------------------------'----'"
    ],
    [
        "-------------------------------------------------------------------------,",
        "[] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [",
        "-----------------------------------------------------------------------/",
        "      \\|/ | O -   ^^         |                  |           _   _     |",
        "     --O--|/ \\        O  ^^  |   ^^   |||||     |     ___  ( ) ( )   _/ ",
        " /\\   /|\\ |         --|--    | ^^     |O=O|     |_ __/_|_\\,_|___|___/  ",
        "/  \\/\\    |~~~~~~~~~~~|~~~~~~|        ( - )     | `-O---O-'       |",
        "  /\\  \\/\\_|          / \\     |       .-~~~-.    | -- -- -- -- -- /",
        " /  /\\ \\  |         '   `    |      //| o |\\\\   |______________ |",
        "--------------------------------------------------------------_/ ",
        "[] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [",
        "------------------------------------------------------------'"
    ],
    [
        "              ,.  _~-.,               .",
        "           ~'`_ /,_. \\_",
        "          / ,'_>@`,__`~.)             |           .",
        "          | |  @@@@'  \",! .           .          '",
        "          |/   ^^@     .!  \\          |         /",
        "          `' .^^^     ,'    '         |        .             .",
        "           .^^^   .          \\                /          .",
        "          .^^^       '  .     \\       |      /       . '",
        ".,.,.     ^^^             ` .   .,+~'`^`'~+,.     , '",
        "&&&&&&,  ,^^^^.  . ._ ..__ _  .'             '. '_ __ ____ __ _ .. .  .",
        "%%%%%%%%%^^^^^^%%&&;_,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,",
        "&&&&&%%%%%%%%%%%%%%%%%%&&;,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=",
        "%%%%%&&&&&&&&&&&%%%%&&&_,.;^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__",
        "%%%%%%%%%&&&&&&&&&-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-==--^'~=-.,__,.-=~'",
        "##mjy#####*\"'",
        "_,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,.-=~'`^`'~=-.,__,.-=~'",
        "",
        "~`'^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^`'~=-.,__,.-=~'`^"
    ],
    [
        "                 '",
        "            *          .",
        "                   *       '",
        "              *                *",
        "",
        "",
        "",
        "",
        "   *   '*",
        "           *",
        "                *",
        "                       *",
        "               *",
        "                     *",
        "",
        "         .                      .",
        "         .                      ;",
        "         :                  - --+- -",
        "         !           .          !",
        "         |        .             .",
        "         |_         +",
        "      ,  | `.",
        "--- --+-<#>-+- ---  --  -",
        "      `._|_,'",
        "         T",
        "         |",
        "         !",
        "         :         . :",
        "         .       *",
        "",
        "Ojo"
    ],
    [
        "                                       .",
        "              . .                     -:-             .  .  .",
        "            .'.:,'.        .  .  .     ' .           . \\ | / .",
        "            .'.;.`.       ._. ! ._.       \\          .__\\:/__.",
        "             `,:.'         ._\\!/_.                     .';`.      . ' .",
        "             ,'             . ! .        ,.,      ..======..       .:.",
        "            ,                 .         ._!_.     ||::: : | .        ',",
        "     .====.,                  .           ;  .~.===: : : :|   ..===.",
        "     |.::'||      .=====.,    ..=======.~,   |\"|: :|::::::|   ||:::|=====|",
        '  ___| :::|!__.,  |:::::|!_,   |: :: ::|"|l_l|"|:: |:;;:::|___!| ::|: : :|',
        ' |: :|::: |:: |!__|; :: |: |===::: :: :|"||_||"| : |: :: :|: : |:: |:::::|',
        ' |:::| _::|: :|:::|:===:|::|:::|:===F=:|"!/|\\!"|::F|:====:|::_:|: :|::__:|',
        " !_[]![_]_!_[]![]_!_[__]![]![_]![_][I_]!//_:_\\![]I![_][_]!_[_]![]_!_[__]!",
        " -----------------------------------\"---''''```---\"-----------------------",
        " _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |= _ _:_ _ =| _ _ _ _ _ _ _ _ _ _ _ _",
        "                                     |=    :    =|                Valkyrie",
        "_____________________________________L___________J________________________",
        "--------------------------------------------------------------------------"
    ],
    [
        "             8",
        "           .d8b.",
        "       _.d8888888b._",
        "     .88888888888888b.",
        "    d88888888888888888b",
        "    8888888888888888888",
        "    Y88888888888888888P",
        "     'Y8888888888888P'",
        "   _..._ 'Y88888P' _..._",
        " .d88888b. Y888P .d88888b.",
        "d888888888b 888 d88888888b",
        "888P  `Y8888888888P'  Y888",
        " b8b    Y88888888P    d8Y",
        "  `\"'  #############  '\"`",
        "         dP d8b Yb",
        "     Ob=dP d888b Yb=dO",
        '      `"` O88888O `"`',
        "   jgs     'Y8P'",
        "             '"
    ]
];
let currentIndex = 1;
setTimeout(function() {
    (0, _asciiMorphMinJs.AsciiMorph).morph(asciisGallery[0]);
}, 1000);
setInterval(function() {
    (0, _asciiMorphMinJs.AsciiMorph).morph(asciisGallery[currentIndex]);
    currentIndex++;
    if (currentIndex > asciisGallery.length - 1) currentIndex = 0;
}, 3000);

},{"./lib/asciiMorph.min.js":"4s1nf"}],"4s1nf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsciiMorph", ()=>AsciiMorph);
parcelHelpers.export(exports, "AsciiMorph2", ()=>AsciiMorph2);
var AsciiMorph = function() {
    "use strict";
    function f(a, b) {
        for(var c in b)c in a || (a[c] = b[c]);
        return a;
    }
    function g(a, b) {
        if (b < 1) return "";
        for(var c = ""; b > 1;)1 & b && (c += a), b >>= 1, a += a;
        return c + a;
    }
    function h(a, b, c) {
        return a.substr(0, b) + c + a.substr(b + c.length);
    }
    function i(c, d) {
        a = c, b = d;
    }
    function j(a) {
        var c, d = {
            x: 0,
            y: a.length
        };
        for(c = 0; c < a.length; c++)a[c].length > d.x && (d.x = a[c].length);
        for(c = 0; c < a.length; c++)a[c].length < d.x && (a[c] = a[c] + g(" ", d.x - a[c].length));
        for(var e = {
            x: Math.floor((b.x - d.x) / 2),
            y: Math.floor((b.y - d.y) / 2)
        }, c = 0; c < a.length; c++)a[c] = g(" ", e.x) + a[c] + g(" ", e.x);
        for(var c = 0; c < b.y; c++)c < e.y ? a.unshift(g(" ", b.x)) : c > e.y + d.y && a.push(g(" ", b.x));
        return a;
    }
    function k(a) {
        for(var b, c = null, d = !1, e = 0; e < a.length; e++){
            var f = a[e];
            b = f.search(/\S/), b === -1 && (b = null);
            for(var g = 0; g < f.length; g++)" " != f[g] && (c = g);
            null !== b && null !== c && (a = l(a, e, b, c), d = !0), b = null, c = null;
        }
        return !!d && a;
    }
    function l(a, c, d, e) {
        var f = {
            x: Math.floor(b.x / 2),
            y: Math.floor(b.y / 2)
        }, g = 1;
        c > f.y && (g = -1);
        a[c][d], a[c][e];
        return a[c] = h(a[c], d, " "), a[c] = h(a[c], e, " "), e - 1 != d + 1 && d !== e && d + 1 !== e ? (a[c + g] = h(a[c + g], d + 1, "+*/\\".substr(Math.floor(Math.random() * 4), 1)), a[c + g] = h(a[c + g], e - 1, "+*/\\".substr(Math.floor(Math.random() * 4), 1))) : d !== e && d + 1 !== e || c + 1 === f.y || c - 1 === f.y || c === f.y || (a[c + g] = h(a[c + g], d, "+*/\\".substr(Math.floor(Math.random() * 4), 1)), a[c + g] = h(a[c + g], e, "+*/\\".substr(Math.floor(Math.random() * 4), 1))), a;
    }
    function m(a) {
        var b = j(a.slice());
        n(b);
    }
    function n(b) {
        a.innerHTML = "";
        for(var d = 0; d < b.length; d++)a.innerHTML = a.innerHTML + b[d] + "\n";
        c = b;
    }
    function o(a) {
        clearTimeout(e);
        var b = p(a.slice());
        q(b);
    }
    function p(a) {
        for(var b = [], d = [], e = c, f = 0; f < 100; f++){
            var g = k(e);
            if (g === !1) break;
            b.push(g.slice(0)), e = g;
        }
        var h = j(a);
        d.unshift(h.slice(0));
        for(var f = 0; f < 100; f++){
            var g = k(h);
            if (g === !1) break;
            d.unshift(g.slice(0)), h = g;
        }
        return b.concat(d);
    }
    function q(a) {
        d = a, r();
    }
    function r() {
        e = setTimeout(function() {
            n(d[0]), d.shift(), d.length > 0 && r();
        }, 20);
    }
    function s(a, b) {
        return a && b ? void i(a, b) : void console.log("sorry, I need an element and a canvas size");
    }
    var a = null, b = {}, c = [], d = [], e = null;
    return f(s, {
        render: m,
        morph: o
    });
}();
var AsciiMorph2 = function() {
    "use strict";
    function f(a, b) {
        for(var c in b)c in a || (a[c] = b[c]);
        return a;
    }
    function g(a, b) {
        if (b < 1) return "";
        for(var c = ""; b > 1;)1 & b && (c += a), b >>= 1, a += a;
        return c + a;
    }
    function h(a, b, c) {
        return a.substr(0, b) + c + a.substr(b + c.length);
    }
    function i(c, d) {
        a = c, b = d;
    }
    function j(a) {
        var c, d = {
            x: 0,
            y: a.length
        };
        for(c = 0; c < a.length; c++)a[c].length > d.x && (d.x = a[c].length);
        for(c = 0; c < a.length; c++)a[c].length < d.x && (a[c] = a[c] + g(" ", d.x - a[c].length));
        for(var e = {
            x: Math.floor((b.x - d.x) / 2),
            y: Math.floor((b.y - d.y) / 2)
        }, c = 0; c < a.length; c++)a[c] = g(" ", e.x) + a[c] + g(" ", e.x);
        for(var c = 0; c < b.y; c++)c < e.y ? a.unshift(g(" ", b.x)) : c > e.y + d.y && a.push(g(" ", b.x));
        return a;
    }
    function k(a) {
        for(var b, c = null, d = !1, e = 0; e < a.length; e++){
            var f = a[e];
            b = f.search(/\S/), b === -1 && (b = null);
            for(var g = 0; g < f.length; g++)" " != f[g] && (c = g);
            null !== b && null !== c && (a = l(a, e, b, c), d = !0), b = null, c = null;
        }
        return !!d && a;
    }
    function l(a, c, d, e) {
        var f = {
            x: Math.floor(b.x / 2),
            y: Math.floor(b.y / 2)
        }, g = 1;
        c > f.y && (g = -1);
        a[c][d], a[c][e];
        return a[c] = h(a[c], d, " "), a[c] = h(a[c], e, " "), e - 1 != d + 1 && d !== e && d + 1 !== e ? (a[c + g] = h(a[c + g], d + 1, "+*/\\".substr(Math.floor(Math.random() * 4), 1)), a[c + g] = h(a[c + g], e - 1, "+*/\\".substr(Math.floor(Math.random() * 4), 1))) : d !== e && d + 1 !== e || c + 1 === f.y || c - 1 === f.y || c === f.y || (a[c + g] = h(a[c + g], d, "+*/\\".substr(Math.floor(Math.random() * 4), 1)), a[c + g] = h(a[c + g], e, "+*/\\".substr(Math.floor(Math.random() * 4), 1))), a;
    }
    function m(a) {
        var b = j(a.slice());
        n(b);
    }
    function n(b) {
        a.innerHTML = "";
        for(var d = 0; d < b.length; d++)a.innerHTML = a.innerHTML + b[d] + "\n";
        c = b;
    }
    function o(a) {
        clearTimeout(e);
        var b = p(a.slice());
        q(b);
    }
    function p(a) {
        for(var b = [], d = [], e = c, f = 0; f < 100; f++){
            var g = k(e);
            if (g === !1) break;
            b.push(g.slice(0)), e = g;
        }
        var h = j(a);
        d.unshift(h.slice(0));
        for(var f = 0; f < 100; f++){
            var g = k(h);
            if (g === !1) break;
            d.unshift(g.slice(0)), h = g;
        }
        return b.concat(d);
    }
    function q(a) {
        d = a, r();
    }
    function r() {
        e = setTimeout(function() {
            n(d[0]), d.shift(), d.length > 0 && r();
        }, 20);
    }
    function s(a, b) {
        return a && b ? void i(a, b) : void console.log("sorry, I need an element and a canvas size");
    }
    var a = null, b = {}, c = [], d = [], e = null;
    return f(s, {
        render: m,
        morph: o
    });
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["keHpo","bBsp0"], "bBsp0", "parcelRequired348")

//# sourceMappingURL=index.04bac911.js.map
