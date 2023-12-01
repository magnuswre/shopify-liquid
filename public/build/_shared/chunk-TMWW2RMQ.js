import {
  require_runtime
} from "/build/_shared/chunk-UWV35TSL.js";
import {
  __esm,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// hmr-runtime:remix:hmr
function createHotContext(id) {
  let callback;
  let disposed = false;
  let hot = {
    accept: (dep, cb) => {
      if (typeof dep !== "string") {
        cb = dep;
        dep = void 0;
      }
      if (dep) {
        if (window.__hmr__.contexts[dep]) {
          window.__hmr__.contexts[dep].dispose();
        }
        window.__hmr__.contexts[dep] = createHotContext(dep);
        window.__hmr__.contexts[dep].accept(cb);
        return;
      }
      if (disposed) {
        throw new Error("import.meta.hot.accept() called after dispose()");
      }
      if (callback) {
        throw new Error("import.meta.hot.accept() already called");
      }
      callback = cb;
    },
    dispose: () => {
      disposed = true;
    },
    emit(self) {
      if (callback) {
        callback(self);
        return true;
      }
      return false;
    }
  };
  if (window.__hmr__.contexts[id]) {
    window.__hmr__.contexts[id].dispose();
  }
  window.__hmr__.contexts[id] = hot;
  return hot;
}
var import_runtime, prevRefreshReg, prevRefreshSig;
var init_remix_hmr = __esm({
  "hmr-runtime:remix:hmr"() {
    import_runtime = __toESM(require_runtime());
    prevRefreshReg = window.$RefreshReg$;
    prevRefreshSig = window.$RefreshSig$;
    window.$RefreshReg$ = (type, id) => {
      const fullId = id;
      import_runtime.default.register(type, fullId);
    };
    window.$RefreshReg$ = prevRefreshReg;
    window.$RefreshSig$ = prevRefreshSig;
    window.$RefreshSig$ = import_runtime.default.createSignatureFunctionForTransform;
    window.$RefreshRuntime$ = import_runtime.default;
    window.$RefreshRuntime$.injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => {
    };
    window.$RefreshSig$ = () => (type) => type;
    if (!window.__hmr__) {
      window.__hmr__ = {
        contexts: {}
      };
    }
  }
});

export {
  createHotContext,
  init_remix_hmr
};
//# sourceMappingURL=/build/_shared/chunk-TMWW2RMQ.js.map
