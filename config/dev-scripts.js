Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = void 0;

function _react() {
    const data = _interopRequireDefault(require('react'));

    _react = function _react() {
        return data;
    };

    return data;
}

function _fs() {
    const data = require('fs');

    _fs = function _fs() {
        return data;
    };

    return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _default = (api) => {
    api.describe({
        key: 'devScripts',
        type: api.ApplyPluginsType.modify,
        config: {
            schema(joi) {
                return joi.object();
            }

        },

        enableBy() {
            return api.env === 'development';
        }

    });
    console.log(api.ApplyPluginsType, 'api.ApplyPluginsType');
    api.addBeforeMiddlewares(() => (req, res, next) => {
        if (req.path.includes('@@/devScripts1.js')) {
            api.applyPlugins({
                key: 'devScripts',
                type: api.ApplyPluginsType.modify,
                initialValue: [(0, _fs().readFileSync)(require.resolve('./webpackHotDevClient'), 'utf-8')]
            }).then((scripts) => {
                res.end(scripts.join('\r\n\r\n').replace(/{}.SOCKET_SERVER/g, JSON.stringify(process.env.SOCKET_SERVER || '')));
            });
        } else {
            next();
        }
    });
    api.addHTMLHeadScripts(() => [{
        src: `${api.config.publicPath}@@/devScripts1.js`
    }]);
    api.onGenerateFiles(() => {
        api.writeTmpFile({
            path: './core/devScripts.ts',
            content: `
if (window.g_initWebpackHotDevClient) {
  function tryApplyUpdates(onHotUpdateSuccess?: Function) {
    // @ts-ignore
    if (!module.hot) {
      window.location.reload();
      return;
    }

    function isUpdateAvailable() {
      // @ts-ignore
      return window.g_getMostRecentCompilationHash() !== __webpack_hash__;
    }

    // TODO: is update available?
    // @ts-ignore
    if (!isUpdateAvailable() || module.hot.status() !== 'idle') {
      return;
    }

    function handleApplyUpdates(err: Error | null, updatedModules: any) {
      if (err || !updatedModules || window.g_getHadRuntimeError()) {
        window.location.reload();
        return;
      }

      onHotUpdateSuccess?.();

      if (isUpdateAvailable()) {
        // While we were updating, there was a new update! Do it again.
        tryApplyUpdates();
      }
    }

    // @ts-ignore
    module.hot.check(true).then(
      function (updatedModules: any) {
        handleApplyUpdates(null, updatedModules);
      },
      function (err: Error) {
        handleApplyUpdates(err, null);
      },
    );
  }

  window.g_initWebpackHotDevClient({
    tryApplyUpdates,
  });
}

export const __mfsu = 1;
      `
        });
    });
    api.addEntryImportsAhead(() => [{
        source: '@@/core/devScripts'
    }]);
};

exports.default = _default;
