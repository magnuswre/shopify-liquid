import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  require_en,
  styles_default
} from "/build/_shared/chunk-MIBD2XN6.js";
import {
  esm_exports as esm_exports2,
  init_esm as init_esm2
} from "/build/_shared/chunk-PPC6FZZS.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  Outlet,
  UNSAFE_DEFERRED_SYMBOL,
  createStaticHandler,
  defer,
  esm_exports,
  getStaticContextFromError,
  init_esm,
  init_router,
  isRouteErrorResponse,
  json,
  matchRoutes,
  redirect,
  redirectDocument,
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-2N2LV74M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-TMWW2RMQ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async)
          return Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError)
      throw env.error;
  }
  return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message2) {
      var e = new Error(message2);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources
    };
  }
});

// node_modules/@shopify/shopify-api/lib/error.js
var require_error = __commonJS({
  "node_modules/@shopify/shopify-api/lib/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureDeprecatedError = exports.BillingError = exports.InvalidRequestError = exports.UnsupportedClientType = exports.MissingRequiredArgument = exports.SessionStorageError = exports.MissingWebhookCallbackError = exports.InvalidWebhookError = exports.InvalidSession = exports.CookieNotFound = exports.BotActivityDetected = exports.InvalidOAuthError = exports.GraphqlQueryError = exports.RestResourceError = exports.HttpThrottlingError = exports.HttpInternalError = exports.HttpRetriableError = exports.HttpResponseError = exports.HttpMaxRetriesError = exports.HttpRequestError = exports.PrivateAppError = exports.SafeCompareError = exports.InvalidDeliveryMethodError = exports.MissingJwtTokenError = exports.InvalidJwtError = exports.InvalidHostError = exports.InvalidShopError = exports.InvalidHmacError = exports.ShopifyError = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var ShopifyError = class extends Error {
      constructor(...args) {
        super(...args);
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    exports.ShopifyError = ShopifyError;
    var InvalidHmacError = class extends ShopifyError {
    };
    exports.InvalidHmacError = InvalidHmacError;
    var InvalidShopError = class extends ShopifyError {
    };
    exports.InvalidShopError = InvalidShopError;
    var InvalidHostError = class extends ShopifyError {
    };
    exports.InvalidHostError = InvalidHostError;
    var InvalidJwtError = class extends ShopifyError {
    };
    exports.InvalidJwtError = InvalidJwtError;
    var MissingJwtTokenError = class extends ShopifyError {
    };
    exports.MissingJwtTokenError = MissingJwtTokenError;
    var InvalidDeliveryMethodError = class extends ShopifyError {
    };
    exports.InvalidDeliveryMethodError = InvalidDeliveryMethodError;
    var SafeCompareError = class extends ShopifyError {
    };
    exports.SafeCompareError = SafeCompareError;
    var PrivateAppError = class extends ShopifyError {
    };
    exports.PrivateAppError = PrivateAppError;
    var HttpRequestError = class extends ShopifyError {
    };
    exports.HttpRequestError = HttpRequestError;
    var HttpMaxRetriesError = class extends ShopifyError {
    };
    exports.HttpMaxRetriesError = HttpMaxRetriesError;
    var HttpResponseError = class extends ShopifyError {
      constructor({ message: message2, code, statusText, body, headers }) {
        super(message2);
        this.response = {
          code,
          statusText,
          body,
          headers
        };
      }
    };
    exports.HttpResponseError = HttpResponseError;
    var HttpRetriableError = class extends HttpResponseError {
    };
    exports.HttpRetriableError = HttpRetriableError;
    var HttpInternalError = class extends HttpRetriableError {
    };
    exports.HttpInternalError = HttpInternalError;
    var HttpThrottlingError = class extends HttpRetriableError {
      constructor(_a) {
        var { retryAfter } = _a, params = tslib_1.__rest(_a, ["retryAfter"]);
        super(params);
        this.response.retryAfter = retryAfter;
      }
    };
    exports.HttpThrottlingError = HttpThrottlingError;
    var RestResourceError = class extends ShopifyError {
    };
    exports.RestResourceError = RestResourceError;
    var GraphqlQueryError = class extends ShopifyError {
      constructor({ message: message2, response, headers }) {
        super(message2);
        this.response = response;
        this.headers = headers;
      }
    };
    exports.GraphqlQueryError = GraphqlQueryError;
    var InvalidOAuthError = class extends ShopifyError {
    };
    exports.InvalidOAuthError = InvalidOAuthError;
    var BotActivityDetected = class extends ShopifyError {
    };
    exports.BotActivityDetected = BotActivityDetected;
    var CookieNotFound = class extends ShopifyError {
    };
    exports.CookieNotFound = CookieNotFound;
    var InvalidSession = class extends ShopifyError {
    };
    exports.InvalidSession = InvalidSession;
    var InvalidWebhookError = class extends ShopifyError {
      constructor({ message: message2, response }) {
        super(message2);
        this.response = response;
      }
    };
    exports.InvalidWebhookError = InvalidWebhookError;
    var MissingWebhookCallbackError = class extends InvalidWebhookError {
    };
    exports.MissingWebhookCallbackError = MissingWebhookCallbackError;
    var SessionStorageError = class extends ShopifyError {
    };
    exports.SessionStorageError = SessionStorageError;
    var MissingRequiredArgument = class extends ShopifyError {
    };
    exports.MissingRequiredArgument = MissingRequiredArgument;
    var UnsupportedClientType = class extends ShopifyError {
    };
    exports.UnsupportedClientType = UnsupportedClientType;
    var InvalidRequestError = class extends ShopifyError {
    };
    exports.InvalidRequestError = InvalidRequestError;
    var BillingError = class extends ShopifyError {
      constructor({ message: message2, errorData }) {
        super(message2);
        this.message = message2;
        this.errorData = errorData;
      }
    };
    exports.BillingError = BillingError;
    var FeatureDeprecatedError = class extends ShopifyError {
    };
    exports.FeatureDeprecatedError = FeatureDeprecatedError;
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/crypto.js
var require_crypto = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crypto = exports.setCrypto = void 0;
    var cryptoVar;
    exports.crypto = cryptoVar;
    try {
      exports.crypto = cryptoVar = crypto;
    } catch (_e) {
    }
    function setCrypto(crypto2) {
      exports.crypto = cryptoVar = crypto2;
    }
    exports.setCrypto = setCrypto;
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/types.js
var require_types = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HashFormat = void 0;
    var HashFormat;
    (function(HashFormat2) {
      HashFormat2["Base64"] = "base64";
      HashFormat2["Hex"] = "hex";
    })(HashFormat = exports.HashFormat || (exports.HashFormat = {}));
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/utils.js
var require_utils = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hashString = exports.asBase64 = exports.asHex = exports.createSHA256HMAC = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var error_1 = require_error();
    var crypto_1 = require_crypto();
    var types_1 = require_types();
    function createSHA256HMAC(secret, payload, returnFormat = types_1.HashFormat.Base64) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cryptoLib = typeof (crypto_1.crypto === null || crypto_1.crypto === void 0 ? void 0 : crypto_1.crypto.webcrypto) === "undefined" ? crypto_1.crypto : crypto_1.crypto.webcrypto;
        const enc = new TextEncoder();
        const key = yield cryptoLib.subtle.importKey("raw", enc.encode(secret), {
          name: "HMAC",
          hash: { name: "SHA-256" }
        }, false, ["sign"]);
        const signature = yield cryptoLib.subtle.sign("HMAC", key, enc.encode(payload));
        return returnFormat === types_1.HashFormat.Base64 ? asBase64(signature) : asHex(signature);
      });
    }
    exports.createSHA256HMAC = createSHA256HMAC;
    function asHex(buffer) {
      return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    }
    exports.asHex = asHex;
    var LookupTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function asBase64(buffer) {
      let output = "";
      const input = new Uint8Array(buffer);
      for (let i = 0; i < input.length; ) {
        const byte1 = input[i++];
        const byte2 = input[i++];
        const byte3 = input[i++];
        const enc1 = byte1 >> 2;
        const enc2 = (byte1 & 3) << 4 | byte2 >> 4;
        let enc3 = (byte2 & 15) << 2 | byte3 >> 6;
        let enc4 = byte3 & 63;
        if (isNaN(byte2)) {
          enc3 = 64;
        }
        if (isNaN(byte3)) {
          enc4 = 64;
        }
        output += LookupTable[enc1] + LookupTable[enc2] + LookupTable[enc3] + LookupTable[enc4];
      }
      return output;
    }
    exports.asBase64 = asBase64;
    function hashString(str, returnFormat) {
      const buffer = new TextEncoder().encode(str);
      switch (returnFormat) {
        case types_1.HashFormat.Base64:
          return asBase64(buffer);
        case types_1.HashFormat.Hex:
          return asHex(buffer);
        default:
          throw new error_1.ShopifyError(`Unrecognized hash format '${returnFormat}'`);
      }
    }
    exports.hashString = hashString;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/utils.js
var require_utils2 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitN = void 0;
    function splitN(str, sep, maxNumParts) {
      const parts = str.split(sep);
      const maxParts = Math.min(Math.abs(maxNumParts), parts.length);
      return [...parts.slice(0, maxParts - 1), parts.slice(maxParts - 1).join(sep)];
    }
    exports.splitN = splitN;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/headers.js
var require_headers = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flatHeaders = exports.removeHeader = exports.canonicalizeHeaders = exports.addHeader = exports.setHeader = exports.getHeader = exports.getHeaders = exports.canonicalizeHeaderName = void 0;
    function canonicalizeHeaderName(hdr) {
      return hdr.replace(/(^|-)(\w+)/g, (_fullMatch, start, letters) => start + letters.slice(0, 1).toUpperCase() + letters.slice(1).toLowerCase());
    }
    exports.canonicalizeHeaderName = canonicalizeHeaderName;
    function getHeaders(headers, needle_) {
      const result = [];
      if (!headers)
        return result;
      const needle = canonicalizeHeaderName(needle_);
      for (const [key, values] of Object.entries(headers)) {
        if (canonicalizeHeaderName(key) !== needle)
          continue;
        if (Array.isArray(values)) {
          result.push(...values);
        } else {
          result.push(values);
        }
      }
      return result;
    }
    exports.getHeaders = getHeaders;
    function getHeader(headers, needle) {
      var _a;
      if (!headers)
        return void 0;
      return (_a = getHeaders(headers, needle)) === null || _a === void 0 ? void 0 : _a[0];
    }
    exports.getHeader = getHeader;
    function setHeader(headers, key, value) {
      canonicalizeHeaders(headers);
      headers[canonicalizeHeaderName(key)] = [value];
    }
    exports.setHeader = setHeader;
    function addHeader(headers, key, value) {
      canonicalizeHeaders(headers);
      const canonKey = canonicalizeHeaderName(key);
      let list = headers[canonKey];
      if (!list) {
        list = [];
      } else if (!Array.isArray(list)) {
        list = [list];
      }
      headers[canonKey] = list;
      list.push(value);
    }
    exports.addHeader = addHeader;
    function canonicalizeValue(value) {
      if (typeof value === "number")
        return value.toString();
      return value;
    }
    function canonicalizeHeaders(hdr) {
      for (const [key, values] of Object.entries(hdr)) {
        const canonKey = canonicalizeHeaderName(key);
        if (!hdr[canonKey])
          hdr[canonKey] = [];
        if (!Array.isArray(hdr[canonKey]))
          hdr[canonKey] = [canonicalizeValue(hdr[canonKey])];
        if (key === canonKey)
          continue;
        delete hdr[key];
        hdr[canonKey].push(...[values].flat().map((value) => canonicalizeValue(value)));
      }
      return hdr;
    }
    exports.canonicalizeHeaders = canonicalizeHeaders;
    function removeHeader(headers, needle) {
      canonicalizeHeaders(headers);
      const canonKey = canonicalizeHeaderName(needle);
      delete headers[canonKey];
    }
    exports.removeHeader = removeHeader;
    function flatHeaders(headers) {
      return Object.entries(headers).flatMap(([header, values]) => Array.isArray(values) ? values.map((value) => [header, value]) : [[header, values]]);
    }
    exports.flatHeaders = flatHeaders;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/cookies.js
var require_cookies = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cookies = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var utils_1 = require_utils();
    var utils_2 = require_utils2();
    var headers_1 = require_headers();
    var Cookies = class {
      static parseCookies(hdrs) {
        const entries = hdrs.filter((hdr) => hdr.trim().length > 0).map((cookieDef) => {
          const [keyval, ...opts] = cookieDef.split(";");
          const [name, value] = (0, utils_2.splitN)(keyval, "=", 2).map((value2) => value2.trim());
          return [
            name,
            Object.assign({
              name,
              value
            }, Object.fromEntries(opts.map((opt) => (0, utils_2.splitN)(opt, "=", 2).map((value2) => value2.trim()))))
          ];
        });
        const jar = Object.fromEntries(entries);
        for (const cookie of Object.values(jar)) {
          if (typeof cookie.expires === "string") {
            cookie.expires = new Date(cookie.expires);
          }
        }
        return jar;
      }
      static encodeCookie(data) {
        let result = "";
        result += `${data.name}=${data.value};`;
        result += Object.entries(data).filter(([key]) => !["name", "value", "expires"].includes(key)).map(([key, value]) => `${key}=${value}`).join("; ");
        if (data.expires) {
          result += ";";
          result += `expires=${data.expires.toUTCString()}`;
        }
        return result;
      }
      constructor(request, response, { keys = [] } = {}) {
        var _a, _b;
        this.response = response;
        this.receivedCookieJar = {};
        this.outgoingCookieJar = {};
        this.keys = [];
        if (keys)
          this.keys = keys;
        const cookieReqHdr = (_a = (0, headers_1.getHeader)(request.headers, "Cookie")) !== null && _a !== void 0 ? _a : "";
        this.receivedCookieJar = Cookies.parseCookies(cookieReqHdr.split(";"));
        const cookieResHdr = (_b = (0, headers_1.getHeaders)(response.headers, "Set-Cookie")) !== null && _b !== void 0 ? _b : [];
        this.outgoingCookieJar = Cookies.parseCookies(cookieResHdr);
      }
      toHeaders() {
        return Object.values(this.outgoingCookieJar).map((cookie) => Cookies.encodeCookie(cookie));
      }
      updateHeader() {
        if (!this.response.headers) {
          this.response.headers = {};
        }
        (0, headers_1.removeHeader)(this.response.headers, "Set-Cookie");
        this.toHeaders().map((hdr) => (0, headers_1.addHeader)(this.response.headers, "Set-Cookie", hdr));
      }
      get(name) {
        var _a;
        return (_a = this.receivedCookieJar[name]) === null || _a === void 0 ? void 0 : _a.value;
      }
      deleteCookie(name) {
        this.set(name, "", {
          path: "/",
          expires: /* @__PURE__ */ new Date(0)
        });
      }
      getAndVerify(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const value = this.get(name);
          if (!value)
            return void 0;
          if (!(yield this.isSignedCookieValid(name))) {
            return void 0;
          }
          return value;
        });
      }
      get canSign() {
        var _a;
        return ((_a = this.keys) === null || _a === void 0 ? void 0 : _a.length) > 0;
      }
      set(name, value, opts = {}) {
        this.outgoingCookieJar[name] = Object.assign(Object.assign({}, opts), {
          name,
          value
        });
        this.updateHeader();
      }
      setAndSign(name, value, opts = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!this.canSign) {
            throw Error("No keys provided for signing.");
          }
          this.set(name, value, opts);
          const sigName = `${name}.sig`;
          const signature = yield (0, utils_1.createSHA256HMAC)(this.keys[0], value);
          this.set(sigName, signature, opts);
          this.updateHeader();
        });
      }
      isSignedCookieValid(cookieName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const signedCookieName = `${cookieName}.sig`;
          if (!this.get(cookieName) || !this.get(signedCookieName)) {
            this.deleteCookie(signedCookieName);
            this.deleteCookie(cookieName);
            return false;
          }
          const value = this.get(cookieName);
          const signature = this.get(signedCookieName);
          const allCheckSignatures = yield Promise.all(this.keys.map((key) => (0, utils_1.createSHA256HMAC)(key, value)));
          if (!allCheckSignatures.includes(signature)) {
            this.deleteCookie(signedCookieName);
            this.deleteCookie(cookieName);
            return false;
          }
          return true;
        });
      }
    };
    exports.Cookies = Cookies;
  }
});

// node_modules/@shopify/shopify-api/runtime/http/types.js
var require_types2 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/runtime/http/index.js
var require_http = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/http/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setAbstractConvertHeadersFunc = exports.abstractConvertHeaders = exports.setAbstractConvertResponseFunc = exports.abstractConvertResponse = exports.setAbstractConvertIncomingResponseFunc = exports.abstractConvertIncomingResponse = exports.setAbstractConvertRequestFunc = exports.abstractConvertRequest = exports.setAbstractFetchFunc = exports.abstractFetch = exports.isOK = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_cookies(), exports);
    tslib_1.__exportStar(require_headers(), exports);
    tslib_1.__exportStar(require_utils2(), exports);
    tslib_1.__exportStar(require_types2(), exports);
    function isOK(resp) {
      return resp.statusCode >= 200 && resp.statusCode <= 299;
    }
    exports.isOK = isOK;
    var abstractFetch = () => {
      throw new Error("Missing adapter implementation for 'abstractFetch' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractFetch = abstractFetch;
    function setAbstractFetchFunc(func) {
      exports.abstractFetch = func;
    }
    exports.setAbstractFetchFunc = setAbstractFetchFunc;
    var abstractConvertRequest = () => {
      throw new Error("Missing adapter implementation for 'abstractConvertRequest' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractConvertRequest = abstractConvertRequest;
    function setAbstractConvertRequestFunc(func) {
      exports.abstractConvertRequest = func;
    }
    exports.setAbstractConvertRequestFunc = setAbstractConvertRequestFunc;
    var abstractConvertIncomingResponse = () => Promise.resolve({});
    exports.abstractConvertIncomingResponse = abstractConvertIncomingResponse;
    function setAbstractConvertIncomingResponseFunc(func) {
      exports.abstractConvertIncomingResponse = func;
    }
    exports.setAbstractConvertIncomingResponseFunc = setAbstractConvertIncomingResponseFunc;
    var abstractConvertResponse = () => {
      throw new Error("Missing adapter implementation for 'abstractConvertResponse' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractConvertResponse = abstractConvertResponse;
    function setAbstractConvertResponseFunc(func) {
      exports.abstractConvertResponse = func;
    }
    exports.setAbstractConvertResponseFunc = setAbstractConvertResponseFunc;
    var abstractConvertHeaders = () => {
      throw new Error("Missing adapter implementation for 'abstractConvertHeaders' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractConvertHeaders = abstractConvertHeaders;
    function setAbstractConvertHeadersFunc(func) {
      exports.abstractConvertHeaders = func;
    }
    exports.setAbstractConvertHeadersFunc = setAbstractConvertHeadersFunc;
  }
});

// node_modules/@shopify/shopify-api/runtime/crypto/index.js
var require_crypto2 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/crypto/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_crypto(), exports);
    tslib_1.__exportStar(require_utils(), exports);
  }
});

// node_modules/@shopify/shopify-api/runtime/platform/types.js
var require_types3 = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/platform/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/runtime/platform/runtime-string.js
var require_runtime_string = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/platform/runtime-string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setAbstractRuntimeString = exports.abstractRuntimeString = void 0;
    var abstractRuntimeString = () => {
      throw new Error("Missing adapter implementation for 'abstractRuntimeString' - make sure to import the appropriate adapter for your platform");
    };
    exports.abstractRuntimeString = abstractRuntimeString;
    function setAbstractRuntimeString(func) {
      exports.abstractRuntimeString = func;
    }
    exports.setAbstractRuntimeString = setAbstractRuntimeString;
  }
});

// node_modules/@shopify/shopify-api/runtime/platform/index.js
var require_platform = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/platform/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_types3(), exports);
    tslib_1.__exportStar(require_runtime_string(), exports);
  }
});

// node_modules/@shopify/shopify-api/runtime/index.js
var require_runtime = __commonJS({
  "node_modules/@shopify/shopify-api/runtime/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_http(), exports);
    tslib_1.__exportStar(require_crypto2(), exports);
    tslib_1.__exportStar(require_platform(), exports);
  }
});

// node_modules/@shopify/shopify-api/adapters/web-api/adapter.js
var require_adapter = __commonJS({
  "node_modules/@shopify/shopify-api/adapters/web-api/adapter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webApiRuntimeString = exports.webApiFetch = exports.webApiConvertResponse = exports.webApiConvertHeaders = exports.webApiConvertRequest = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var runtime_1 = require_runtime();
    function webApiConvertRequest(adapterArgs) {
      var _a;
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = adapterArgs.rawRequest;
        const headers = {};
        for (const [key, value] of request.headers.entries()) {
          (0, runtime_1.addHeader)(headers, key, value);
        }
        return {
          headers,
          method: (_a = request.method) !== null && _a !== void 0 ? _a : "GET",
          url: new URL(request.url).toString()
        };
      });
    }
    exports.webApiConvertRequest = webApiConvertRequest;
    function webApiConvertHeaders(headers, _adapterArgs) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const remixHeaders = new Headers();
        (0, runtime_1.flatHeaders)(headers !== null && headers !== void 0 ? headers : {}).forEach(([key, value]) => remixHeaders.append(key, value));
        return Promise.resolve(remixHeaders);
      });
    }
    exports.webApiConvertHeaders = webApiConvertHeaders;
    function webApiConvertResponse(resp, adapterArgs) {
      var _a;
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Response(resp.body, {
          status: resp.statusCode,
          statusText: resp.statusText,
          headers: yield webApiConvertHeaders((_a = resp.headers) !== null && _a !== void 0 ? _a : {}, adapterArgs)
        });
      });
    }
    exports.webApiConvertResponse = webApiConvertResponse;
    function webApiFetch({ headers, method, url, body }) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const resp = yield fetch(url, {
          method,
          headers: (0, runtime_1.flatHeaders)(headers),
          body
        });
        const respBody = yield resp.text();
        return {
          statusCode: resp.status,
          statusText: resp.statusText,
          body: respBody,
          headers: (0, runtime_1.canonicalizeHeaders)(Object.fromEntries(resp.headers.entries()))
        };
      });
    }
    exports.webApiFetch = webApiFetch;
    function webApiRuntimeString() {
      return "Web API";
    }
    exports.webApiRuntimeString = webApiRuntimeString;
  }
});

// node_modules/@shopify/shopify-api/adapters/web-api/index.js
var require_web_api = __commonJS({
  "node_modules/@shopify/shopify-api/adapters/web-api/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runtime_1 = require_runtime();
    var adapter_1 = require_adapter();
    (0, runtime_1.setAbstractFetchFunc)(adapter_1.webApiFetch);
    (0, runtime_1.setAbstractConvertRequestFunc)(adapter_1.webApiConvertRequest);
    (0, runtime_1.setAbstractConvertResponseFunc)(adapter_1.webApiConvertResponse);
    (0, runtime_1.setAbstractConvertHeadersFunc)(adapter_1.webApiConvertHeaders);
    (0, runtime_1.setAbstractRuntimeString)(adapter_1.webApiRuntimeString);
  }
});

// node_modules/compare-versions/lib/esm/index.js
var esm_exports3 = {};
__export(esm_exports3, {
  compare: () => compare,
  compareVersions: () => compareVersions,
  satisfies: () => satisfies,
  validate: () => validate
});
var compareVersions, validate, compare, satisfies, semver, validateAndParse, isWildcard, tryParse, forceType, compareStrings, compareSegments, operatorResMap, allowedOperators, assertValidOperator;
var init_esm3 = __esm({
  "node_modules/compare-versions/lib/esm/index.js"() {
    compareVersions = (v1, v2) => {
      const n1 = validateAndParse(v1);
      const n2 = validateAndParse(v2);
      const p1 = n1.pop();
      const p2 = n2.pop();
      const r = compareSegments(n1, n2);
      if (r !== 0)
        return r;
      if (p1 && p2) {
        return compareSegments(p1.split("."), p2.split("."));
      } else if (p1 || p2) {
        return p1 ? -1 : 1;
      }
      return 0;
    };
    validate = (version) => typeof version === "string" && /^[v\d]/.test(version) && semver.test(version);
    compare = (v1, v2, operator) => {
      assertValidOperator(operator);
      const res = compareVersions(v1, v2);
      return operatorResMap[operator].includes(res);
    };
    satisfies = (version, range) => {
      const m = range.match(/^([<>=~^]+)/);
      const op = m ? m[1] : "=";
      if (op !== "^" && op !== "~")
        return compare(version, range, op);
      const [v1, v2, v3, , vp] = validateAndParse(version);
      const [r1, r2, r3, , rp] = validateAndParse(range);
      const v = [v1, v2, v3];
      const r = [r1, r2 !== null && r2 !== void 0 ? r2 : "x", r3 !== null && r3 !== void 0 ? r3 : "x"];
      if (rp) {
        if (!vp)
          return false;
        if (compareSegments(v, r) !== 0)
          return false;
        if (compareSegments(vp.split("."), rp.split(".")) === -1)
          return false;
      }
      const nonZero = r.findIndex((v4) => v4 !== "0") + 1;
      const i = op === "~" ? 2 : nonZero > 1 ? nonZero : 1;
      if (compareSegments(v.slice(0, i), r.slice(0, i)) !== 0)
        return false;
      if (compareSegments(v.slice(i), r.slice(i)) === -1)
        return false;
      return true;
    };
    semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
    validateAndParse = (version) => {
      if (typeof version !== "string") {
        throw new TypeError("Invalid argument expected string");
      }
      const match = version.match(semver);
      if (!match) {
        throw new Error(`Invalid argument not valid semver ('${version}' received)`);
      }
      match.shift();
      return match;
    };
    isWildcard = (s) => s === "*" || s === "x" || s === "X";
    tryParse = (v) => {
      const n = parseInt(v, 10);
      return isNaN(n) ? v : n;
    };
    forceType = (a, b) => typeof a !== typeof b ? [String(a), String(b)] : [a, b];
    compareStrings = (a, b) => {
      if (isWildcard(a) || isWildcard(b))
        return 0;
      const [ap, bp] = forceType(tryParse(a), tryParse(b));
      if (ap > bp)
        return 1;
      if (ap < bp)
        return -1;
      return 0;
    };
    compareSegments = (a, b) => {
      for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const r = compareStrings(a[i] || "0", b[i] || "0");
        if (r !== 0)
          return r;
      }
      return 0;
    };
    operatorResMap = {
      ">": [1],
      ">=": [0, 1],
      "=": [0],
      "<=": [-1, 0],
      "<": [-1]
    };
    allowedOperators = Object.keys(operatorResMap);
    assertValidOperator = (op) => {
      if (typeof op !== "string") {
        throw new TypeError(`Invalid operator type, expected string but got ${typeof op}`);
      }
      if (allowedOperators.indexOf(op) === -1) {
        throw new Error(`Invalid operator, expected one of ${allowedOperators.join("|")}`);
      }
    };
  }
});

// node_modules/@shopify/shopify-api/lib/types.js
var require_types4 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BillingReplacementBehavior = exports.BillingInterval = exports.gdprTopics = exports.ClientType = exports.ShopifyHeader = exports.LATEST_API_VERSION = exports.LIBRARY_NAME = exports.ApiVersion = exports.LogSeverity = void 0;
    var LogSeverity;
    (function(LogSeverity2) {
      LogSeverity2[LogSeverity2["Error"] = 0] = "Error";
      LogSeverity2[LogSeverity2["Warning"] = 1] = "Warning";
      LogSeverity2[LogSeverity2["Info"] = 2] = "Info";
      LogSeverity2[LogSeverity2["Debug"] = 3] = "Debug";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var ApiVersion;
    (function(ApiVersion2) {
      ApiVersion2["October22"] = "2022-10";
      ApiVersion2["January23"] = "2023-01";
      ApiVersion2["April23"] = "2023-04";
      ApiVersion2["July23"] = "2023-07";
      ApiVersion2["October23"] = "2023-10";
      ApiVersion2["Unstable"] = "unstable";
    })(ApiVersion = exports.ApiVersion || (exports.ApiVersion = {}));
    exports.LIBRARY_NAME = "Shopify API Library";
    exports.LATEST_API_VERSION = ApiVersion.October23;
    var ShopifyHeader;
    (function(ShopifyHeader2) {
      ShopifyHeader2["AccessToken"] = "X-Shopify-Access-Token";
      ShopifyHeader2["ApiVersion"] = "X-Shopify-API-Version";
      ShopifyHeader2["Domain"] = "X-Shopify-Shop-Domain";
      ShopifyHeader2["Hmac"] = "X-Shopify-Hmac-Sha256";
      ShopifyHeader2["Topic"] = "X-Shopify-Topic";
      ShopifyHeader2["WebhookId"] = "X-Shopify-Webhook-Id";
      ShopifyHeader2["StorefrontPrivateToken"] = "Shopify-Storefront-Private-Token";
      ShopifyHeader2["StorefrontSDKVariant"] = "X-SDK-Variant";
      ShopifyHeader2["StorefrontSDKVersion"] = "X-SDK-Version";
    })(ShopifyHeader = exports.ShopifyHeader || (exports.ShopifyHeader = {}));
    var ClientType;
    (function(ClientType2) {
      ClientType2["Rest"] = "rest";
      ClientType2["Graphql"] = "graphql";
    })(ClientType = exports.ClientType || (exports.ClientType = {}));
    exports.gdprTopics = [
      "CUSTOMERS_DATA_REQUEST",
      "CUSTOMERS_REDACT",
      "SHOP_REDACT"
    ];
    var BillingInterval;
    (function(BillingInterval2) {
      BillingInterval2["OneTime"] = "ONE_TIME";
      BillingInterval2["Every30Days"] = "EVERY_30_DAYS";
      BillingInterval2["Annual"] = "ANNUAL";
      BillingInterval2["Usage"] = "USAGE";
    })(BillingInterval = exports.BillingInterval || (exports.BillingInterval = {}));
    var BillingReplacementBehavior;
    (function(BillingReplacementBehavior2) {
      BillingReplacementBehavior2["ApplyImmediately"] = "APPLY_IMMEDIATELY";
      BillingReplacementBehavior2["ApplyOnNextBillingCycle"] = "APPLY_ON_NEXT_BILLING_CYCLE";
      BillingReplacementBehavior2["Standard"] = "STANDARD";
    })(BillingReplacementBehavior = exports.BillingReplacementBehavior || (exports.BillingReplacementBehavior = {}));
  }
});

// node_modules/@shopify/shopify-api/lib/version.js
var require_version = __commonJS({
  "node_modules/@shopify/shopify-api/lib/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SHOPIFY_API_LIBRARY_VERSION = void 0;
    exports.SHOPIFY_API_LIBRARY_VERSION = "8.1.1";
  }
});

// node_modules/@shopify/shopify-api/lib/logger/log.js
var require_log = __commonJS({
  "node_modules/@shopify/shopify-api/lib/logger/log.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.log = void 0;
    var types_1 = require_types4();
    function log(config) {
      return function(severity, message2, context = {}) {
        if (severity > config.logger.level) {
          return;
        }
        const prefix = [];
        if (config.logger.timestamps) {
          prefix.push(`${(/* @__PURE__ */ new Date()).toISOString().slice(0, -5)}Z`);
        }
        let packageString = context.package || "shopify-api";
        delete context.package;
        switch (severity) {
          case types_1.LogSeverity.Debug:
            packageString = `${packageString}/DEBUG`;
            break;
          case types_1.LogSeverity.Info:
            packageString = `${packageString}/INFO`;
            break;
          case types_1.LogSeverity.Warning:
            packageString = `${packageString}/WARNING`;
            break;
          case types_1.LogSeverity.Error:
            packageString = `${packageString}/ERROR`;
            break;
        }
        prefix.push(packageString);
        const contextParts = [];
        Object.entries(context).forEach(([key, value]) => {
          contextParts.push(`${key}: ${value}`);
        });
        let suffix = "";
        if (contextParts.length > 0) {
          suffix = ` | {${contextParts.join(", ")}}`;
        }
        config.logger.log(severity, `[${prefix.join("] [")}] ${message2}${suffix}`);
      };
    }
    exports.log = log;
  }
});

// node_modules/@shopify/shopify-api/lib/logger/index.js
var require_logger = __commonJS({
  "node_modules/@shopify/shopify-api/lib/logger/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logger = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var compare_versions_1 = (init_esm3(), __toCommonJS(esm_exports3));
    var types_1 = require_types4();
    var error_1 = require_error();
    var version_1 = require_version();
    var log_1 = require_log();
    function logger(config) {
      const logFunction = (0, log_1.log)(config);
      return {
        log: logFunction,
        debug: (message2, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () {
          return logFunction(types_1.LogSeverity.Debug, message2, context);
        }),
        info: (message2, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () {
          return logFunction(types_1.LogSeverity.Info, message2, context);
        }),
        warning: (message2, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () {
          return logFunction(types_1.LogSeverity.Warning, message2, context);
        }),
        error: (message2, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () {
          return logFunction(types_1.LogSeverity.Error, message2, context);
        }),
        deprecated: deprecated(logFunction)
      };
    }
    exports.logger = logger;
    function deprecated(logFunction) {
      return function(version, message2) {
        if ((0, compare_versions_1.compare)(version_1.SHOPIFY_API_LIBRARY_VERSION, version, ">=")) {
          throw new error_1.FeatureDeprecatedError(`Feature was deprecated in version ${version}`);
        }
        return logFunction(types_1.LogSeverity.Warning, `[Deprecated | ${version}] ${message2}`);
      };
    }
  }
});

// node_modules/@shopify/shopify-api/rest/load-rest-resources.js
var require_load_rest_resources = __commonJS({
  "node_modules/@shopify/shopify-api/rest/load-rest-resources.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadRestResources = void 0;
    var logger_1 = require_logger();
    function loadRestResources({ resources, config, RestClient }) {
      const firstResource = Object.keys(resources)[0];
      if (config.apiVersion !== resources[firstResource].apiVersion) {
        (0, logger_1.logger)(config).warning(`Loading REST resources for API version ${resources[firstResource].apiVersion}, which doesn't match the default ${config.apiVersion}`);
      }
      return Object.fromEntries(Object.entries(resources).map(([name, resource]) => {
        class NewResource extends resource {
        }
        NewResource.setClassProperties({
          Client: RestClient,
          config
        });
        Object.entries(NewResource.hasOne).map(([_attribute, klass]) => {
          klass.setClassProperties({
            Client: RestClient,
            config
          });
        });
        Object.entries(NewResource.hasMany).map(([_attribute, klass]) => {
          klass.setClassProperties({
            Client: RestClient,
            config
          });
        });
        Reflect.defineProperty(NewResource, "name", {
          value: name
        });
        return [name, NewResource];
      }));
    }
    exports.loadRestResources = loadRestResources;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/scopes/index.js
var require_scopes = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/scopes/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthScopes = void 0;
    var AuthScopes = class {
      constructor(scopes) {
        let scopesArray = [];
        if (typeof scopes === "string") {
          scopesArray = scopes.split(new RegExp(`${AuthScopes.SCOPE_DELIMITER}\\s*`));
        } else if (Array.isArray(scopes)) {
          scopesArray = scopes;
        } else if (scopes) {
          scopesArray = Array.from(scopes.expandedScopes);
        }
        scopesArray = scopesArray.map((scope) => scope.trim()).filter((scope) => scope.length);
        const impliedScopes = this.getImpliedScopes(scopesArray);
        const scopeSet = new Set(scopesArray);
        const impliedSet = new Set(impliedScopes);
        this.compressedScopes = new Set([...scopeSet].filter((x) => !impliedSet.has(x)));
        this.expandedScopes = /* @__PURE__ */ new Set([...scopeSet, ...impliedSet]);
      }
      has(scope) {
        let other;
        if (scope instanceof AuthScopes) {
          other = scope;
        } else {
          other = new AuthScopes(scope);
        }
        return other.toArray().filter((x) => !this.expandedScopes.has(x)).length === 0;
      }
      equals(otherScopes) {
        let other;
        if (otherScopes instanceof AuthScopes) {
          other = otherScopes;
        } else {
          other = new AuthScopes(otherScopes);
        }
        return this.compressedScopes.size === other.compressedScopes.size && this.toArray().filter((x) => !other.has(x)).length === 0;
      }
      toString() {
        return this.toArray().join(AuthScopes.SCOPE_DELIMITER);
      }
      toArray() {
        return [...this.compressedScopes];
      }
      getImpliedScopes(scopesArray) {
        return scopesArray.reduce((array, current) => {
          const matches = current.match(/^(unauthenticated_)?write_(.*)$/);
          if (matches) {
            array.push(`${matches[1] ? matches[1] : ""}read_${matches[2]}`);
          }
          return array;
        }, []);
      }
    };
    exports.AuthScopes = AuthScopes;
    AuthScopes.SCOPE_DELIMITER = ",";
  }
});

// node_modules/@shopify/shopify-api/lib/config.js
var require_config = __commonJS({
  "node_modules/@shopify/shopify-api/lib/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var error_1 = require_error();
    var types_1 = require_types4();
    var scopes_1 = require_scopes();
    var logger_1 = require_logger();
    function validateConfig(params) {
      var _a;
      const config = {
        apiKey: "",
        apiSecretKey: "",
        scopes: new scopes_1.AuthScopes([]),
        hostName: "",
        hostScheme: "https",
        apiVersion: types_1.LATEST_API_VERSION,
        isEmbeddedApp: true,
        isCustomStoreApp: false,
        logger: {
          log: defaultLogFunction,
          level: types_1.LogSeverity.Info,
          httpRequests: false,
          timestamps: false
        },
        future: {}
      };
      const mandatory = ["apiSecretKey", "hostName"];
      if (!("isCustomStoreApp" in params) || !params.isCustomStoreApp) {
        mandatory.push("apiKey");
        mandatory.push("scopes");
      }
      if ("isCustomStoreApp" in params && params.isCustomStoreApp) {
        if (!("adminApiAccessToken" in params) || ((_a = params.adminApiAccessToken) === null || _a === void 0 ? void 0 : _a.length) === 0) {
          mandatory.push("adminApiAccessToken");
        }
      }
      const missing = [];
      mandatory.forEach((key) => {
        if (!notEmpty(params[key])) {
          missing.push(key);
        }
      });
      if (missing.length) {
        throw new error_1.ShopifyError(`Cannot initialize Shopify API Library. Missing values for: ${missing.join(", ")}`);
      }
      const { hostScheme, isCustomStoreApp, adminApiAccessToken, userAgentPrefix, logger, privateAppStorefrontAccessToken, customShopDomains, billing } = params, mandatoryParams = tslib_1.__rest(params, ["hostScheme", "isCustomStoreApp", "adminApiAccessToken", "userAgentPrefix", "logger", "privateAppStorefrontAccessToken", "customShopDomains", "billing"]);
      Object.assign(config, mandatoryParams, {
        hostName: params.hostName.replace(/\/$/, ""),
        scopes: params.scopes instanceof scopes_1.AuthScopes ? params.scopes : new scopes_1.AuthScopes(params.scopes),
        hostScheme: hostScheme !== null && hostScheme !== void 0 ? hostScheme : config.hostScheme,
        isCustomStoreApp: isCustomStoreApp !== null && isCustomStoreApp !== void 0 ? isCustomStoreApp : config.isCustomStoreApp,
        adminApiAccessToken: adminApiAccessToken !== null && adminApiAccessToken !== void 0 ? adminApiAccessToken : config.adminApiAccessToken,
        userAgentPrefix: userAgentPrefix !== null && userAgentPrefix !== void 0 ? userAgentPrefix : config.userAgentPrefix,
        logger: Object.assign(Object.assign({}, config.logger), logger || {}),
        privateAppStorefrontAccessToken: privateAppStorefrontAccessToken !== null && privateAppStorefrontAccessToken !== void 0 ? privateAppStorefrontAccessToken : config.privateAppStorefrontAccessToken,
        customShopDomains: customShopDomains !== null && customShopDomains !== void 0 ? customShopDomains : config.customShopDomains,
        billing: billing !== null && billing !== void 0 ? billing : config.billing
      });
      if (config.isCustomStoreApp && params.adminApiAccessToken === params.apiSecretKey) {
        (0, logger_1.logger)(config).warning("adminApiAccessToken is set to the same value as apiSecretKey. adminApiAccessToken should be set to the Admin API access token for custom store apps; apiSecretKey should be set to the custom store app's API secret key.");
      }
      return config;
    }
    exports.validateConfig = validateConfig;
    function notEmpty(value) {
      if (value == null) {
        return false;
      }
      return typeof value === "string" || Array.isArray(value) ? value.length > 0 : true;
    }
    function defaultLogFunction(severity, message2) {
      switch (severity) {
        case types_1.LogSeverity.Debug:
          console.debug(message2);
          break;
        case types_1.LogSeverity.Info:
          console.log(message2);
          break;
        case types_1.LogSeverity.Warning:
          console.warn(message2);
          break;
        case types_1.LogSeverity.Error:
          console.error(message2);
          break;
      }
    }
  }
});

// node_modules/@shopify/network/build/cjs/network.js
var require_network = __commonJS({
  "node_modules/@shopify/network/build/cjs/network.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Method = void 0;
    (function(Method) {
      Method["Get"] = "GET";
      Method["Post"] = "POST";
      Method["Put"] = "PUT";
      Method["Patch"] = "PATCH";
      Method["Delete"] = "DELETE";
      Method["Head"] = "HEAD";
      Method["Options"] = "OPTIONS";
      Method["Connect"] = "CONNECT";
    })(exports.Method || (exports.Method = {}));
    exports.StatusCode = void 0;
    (function(StatusCode) {
      StatusCode[StatusCode["Continue"] = 100] = "Continue";
      StatusCode[StatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
      StatusCode[StatusCode["Ok"] = 200] = "Ok";
      StatusCode[StatusCode["Created"] = 201] = "Created";
      StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
      StatusCode[StatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
      StatusCode[StatusCode["NoContent"] = 204] = "NoContent";
      StatusCode[StatusCode["ResetContent"] = 205] = "ResetContent";
      StatusCode[StatusCode["PartialContent"] = 206] = "PartialContent";
      StatusCode[StatusCode["MultipleChoices"] = 300] = "MultipleChoices";
      StatusCode[StatusCode["MovedPermanently"] = 301] = "MovedPermanently";
      StatusCode[StatusCode["Found"] = 302] = "Found";
      StatusCode[StatusCode["SeeOther"] = 303] = "SeeOther";
      StatusCode[StatusCode["NotModified"] = 304] = "NotModified";
      StatusCode[StatusCode["UseProxy"] = 305] = "UseProxy";
      StatusCode[StatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
      StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
      StatusCode[StatusCode["PaymentRequired"] = 402] = "PaymentRequired";
      StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
      StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
      StatusCode[StatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
      StatusCode[StatusCode["NotAcceptable"] = 406] = "NotAcceptable";
      StatusCode[StatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
      StatusCode[StatusCode["RequestTimeout"] = 408] = "RequestTimeout";
      StatusCode[StatusCode["Conflict"] = 409] = "Conflict";
      StatusCode[StatusCode["Gone"] = 410] = "Gone";
      StatusCode[StatusCode["LengthRequired"] = 411] = "LengthRequired";
      StatusCode[StatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
      StatusCode[StatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
      StatusCode[StatusCode["RequestUriTooLong"] = 414] = "RequestUriTooLong";
      StatusCode[StatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
      StatusCode[StatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
      StatusCode[StatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
      StatusCode[StatusCode["ImATeapot"] = 418] = "ImATeapot";
      StatusCode[StatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
      StatusCode[StatusCode["TooManyRequests"] = 429] = "TooManyRequests";
      StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
      StatusCode[StatusCode["NotImplemented"] = 501] = "NotImplemented";
      StatusCode[StatusCode["BadGateway"] = 502] = "BadGateway";
      StatusCode[StatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
      StatusCode[StatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
      StatusCode[StatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
    })(exports.StatusCode || (exports.StatusCode = {}));
    exports.Header = void 0;
    (function(Header) {
      Header["Accept"] = "Accept";
      Header["AcceptEncoding"] = "Accept-Encoding";
      Header["AcceptLanguage"] = "Accept-Language";
      Header["AccessControlAllowCredentials"] = "Access-Control-Allow-Credentials";
      Header["AccessControlAllowHeaders"] = "Access-Control-Allow-Headers";
      Header["AccessControlAllowMethods"] = "Access-Control-Allow-Methods";
      Header["AccessControlAllowOrigin"] = "Access-Control-Allow-Origin";
      Header["AccessControlExposeHeaders"] = "Access-Control-Expose-Headers";
      Header["AccessControlMaxAge"] = "Access-Control-Max-Age";
      Header["AccessControlRequestHeaders"] = "Access-Control-Request-Headers";
      Header["AccessControlRequestMethod"] = "Access-Control-Request-Method";
      Header["Authorization"] = "Authorization";
      Header["CacheControl"] = "Cache-Control";
      Header["CacheStatus"] = "Cache-Status";
      Header["Connection"] = "Connection";
      Header["ContentDisposition"] = "Content-Disposition";
      Header["ContentEncoding"] = "Content-Encoding";
      Header["ContentLength"] = "Content-Length";
      Header["ContentSecurityPolicy"] = "Content-Security-Policy";
      Header["ContentSecurityPolicyReportOnly"] = "Content-Security-Policy-Report-Only";
      Header["ContentType"] = "Content-Type";
      Header["ContentTypeOptions"] = "X-Content-Type-Options";
      Header["Cookie"] = "Cookie";
      Header["DownloadOptions"] = "X-Download-Options";
      Header["ETag"] = "ETag";
      Header["Forwarded"] = "Forwarded";
      Header["ForwardedFor"] = "X-Forwarded-For";
      Header["ForwardedHost"] = "X-Forwarded-Host";
      Header["ForwardedProtocol"] = "X-Forwarded-Proto";
      Header["FrameOptions"] = "X-Frame-Options";
      Header["Host"] = "Host";
      Header["IfNoneMatch"] = "If-None-Match";
      Header["Location"] = "Location";
      Header["Origin"] = "Origin";
      Header["ReferrerPolicy"] = "Referrer-Policy";
      Header["ServerTiming"] = "Server-Timing";
      Header["StrictTransportSecurity"] = "Strict-Transport-Security";
      Header["TimingAllowOrigin"] = "Timing-Allow-Origin";
      Header["Trailer"] = "Trailer";
      Header["TransferEncoding"] = "Transfer-Encoding";
      Header["UserAgent"] = "User-Agent";
      Header["WwwAuthenticate"] = "WWW-Authenticate";
      Header["XhrRedirectedTo"] = "X-XHR-Redirected-To";
      Header["XhrReferer"] = "X-XHR-Referer";
      Header["XssProtecton"] = "X-XSS-Protection";
      Header["XContentTypeOptions"] = "X-Content-Type-Options";
      Header["XDownloadOptions"] = "X-Download-Options";
      Header["XForwardedFor"] = "X-Forwarded-For";
      Header["XForwardedHost"] = "X-Forwarded-Host";
      Header["XForwardedProto"] = "X-Forwarded-Proto";
      Header["XFrameOptions"] = "X-Frame-Options";
      Header["XXhrRedirectedTo"] = "X-XHR-Redirected-To";
      Header["XXhrReferer"] = "X-XHR-Referer";
      Header["XXssProtecton"] = "X-XSS-Protection";
      Header["XXssProtection"] = "X-XSS-Protection";
    })(exports.Header || (exports.Header = {}));
    exports.CspDirective = void 0;
    (function(CspDirective) {
      CspDirective["ChildSrc"] = "child-src";
      CspDirective["ConnectSrc"] = "connect-src";
      CspDirective["DefaultSrc"] = "default-src";
      CspDirective["FontSrc"] = "font-src";
      CspDirective["FrameSrc"] = "frame-src";
      CspDirective["ImgSrc"] = "img-src";
      CspDirective["ManifestSrc"] = "manifest-src";
      CspDirective["MediaSrc"] = "media-src";
      CspDirective["ObjectSrc"] = "object-src";
      CspDirective["PrefetchSrc"] = "prefetch-src";
      CspDirective["ScriptSrc"] = "script-src";
      CspDirective["StyleSrc"] = "style-src";
      CspDirective["WebrtcSrc"] = "webrtc-src";
      CspDirective["WorkerSrc"] = "worker-src";
      CspDirective["BaseUri"] = "base-uri";
      CspDirective["PluginTypes"] = "plugin-types";
      CspDirective["Sandbox"] = "sandbox";
      CspDirective["FormAction"] = "form-action";
      CspDirective["FrameAncestors"] = "frame-ancestors";
      CspDirective["ReportUri"] = "report-uri";
      CspDirective["BlockAllMixedContent"] = "block-all-mixed-content";
      CspDirective["RequireSriFor"] = "require-sri-for";
      CspDirective["UpgradeInsecureRequests"] = "upgrade-insecure-requests";
    })(exports.CspDirective || (exports.CspDirective = {}));
    exports.CspSandboxAllow = void 0;
    (function(CspSandboxAllow) {
      CspSandboxAllow["Forms"] = "allow-forms";
      CspSandboxAllow["SameOrigin"] = "allow-same-origin";
      CspSandboxAllow["Scripts"] = "allow-scripts";
      CspSandboxAllow["Popups"] = "allow-popups";
      CspSandboxAllow["Modals"] = "allow-modals";
      CspSandboxAllow["OrientationLock"] = "allow-orientation-lock";
      CspSandboxAllow["PointerLock"] = "allow-pointer-lock";
      CspSandboxAllow["Presentation"] = "allow-presentation";
      CspSandboxAllow["PopupsToEscapeSandbox"] = "allow-popups-to-escape-sandbox";
      CspSandboxAllow["TopNavigation"] = "allow-top-navigation";
    })(exports.CspSandboxAllow || (exports.CspSandboxAllow = {}));
    exports.SpecialSource = void 0;
    (function(SpecialSource) {
      SpecialSource["Any"] = "*";
      SpecialSource["Self"] = "'self'";
      SpecialSource["UnsafeInline"] = "'unsafe-inline'";
      SpecialSource["UnsafeEval"] = "'unsafe-eval'";
      SpecialSource["None"] = "'none'";
      SpecialSource["StrictDynamic"] = "'strict-dynamic'";
      SpecialSource["ReportSample"] = "'report-sample'";
      SpecialSource["Data"] = "data:";
      SpecialSource["Blob"] = "blob:";
      SpecialSource["FileSystem"] = "filesystem:";
    })(exports.SpecialSource || (exports.SpecialSource = {}));
    exports.SriAsset = void 0;
    (function(SriAsset) {
      SriAsset["Script"] = "script";
      SriAsset["Style"] = "style";
    })(exports.SriAsset || (exports.SriAsset = {}));
    exports.HashAlgorithm = void 0;
    (function(HashAlgorithm) {
      HashAlgorithm["Sha256"] = "sha256";
      HashAlgorithm["Sha384"] = "sha384";
      HashAlgorithm["Sha512"] = "sha512";
    })(exports.HashAlgorithm || (exports.HashAlgorithm = {}));
    exports.ResponseType = void 0;
    (function(ResponseType) {
      ResponseType["Informational"] = "1xx";
      ResponseType["Success"] = "2xx";
      ResponseType["Redirection"] = "3xx";
      ResponseType["ClientError"] = "4xx";
      ResponseType["ServerError"] = "5xx";
      ResponseType["Unknown"] = "Unknown";
    })(exports.ResponseType || (exports.ResponseType = {}));
    function getResponseType(status) {
      if (status >= 100 && status < 200) {
        return exports.ResponseType.Informational;
      } else if (status >= 200 && status < 300) {
        return exports.ResponseType.Success;
      } else if (status >= 300 && status < 400) {
        return exports.ResponseType.Redirection;
      } else if (status >= 400 && status < 500) {
        return exports.ResponseType.ClientError;
      } else if (status >= 500 && status < 600) {
        return exports.ResponseType.ServerError;
      } else {
        return exports.ResponseType.Unknown;
      }
    }
    function nonceSource(nonce) {
      return `'nonce-${nonce}'`;
    }
    function hashSource(hashAlgorithm, value) {
      return `'${hashAlgorithm}-${value}'`;
    }
    exports.CacheControl = void 0;
    (function(CacheControl) {
      CacheControl["NoCache"] = "no-cache";
      CacheControl["NoStore"] = "no-store";
      CacheControl["MustRevalidate"] = "must-revalidate";
      CacheControl["MaxAge"] = "max-age";
    })(exports.CacheControl || (exports.CacheControl = {}));
    var noCache = `${exports.CacheControl.NoCache},${exports.CacheControl.NoStore},${exports.CacheControl.MustRevalidate},${exports.CacheControl.MaxAge}=0`;
    exports.getResponseType = getResponseType;
    exports.hashSource = hashSource;
    exports.noCache = noCache;
    exports.nonceSource = nonceSource;
  }
});

// node_modules/@shopify/network/build/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@shopify/network/build/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var network = require_network();
    Object.defineProperty(exports, "CacheControl", {
      enumerable: true,
      get: function() {
        return network.CacheControl;
      }
    });
    Object.defineProperty(exports, "CspDirective", {
      enumerable: true,
      get: function() {
        return network.CspDirective;
      }
    });
    Object.defineProperty(exports, "CspSandboxAllow", {
      enumerable: true,
      get: function() {
        return network.CspSandboxAllow;
      }
    });
    Object.defineProperty(exports, "HashAlgorithm", {
      enumerable: true,
      get: function() {
        return network.HashAlgorithm;
      }
    });
    Object.defineProperty(exports, "Header", {
      enumerable: true,
      get: function() {
        return network.Header;
      }
    });
    Object.defineProperty(exports, "Method", {
      enumerable: true,
      get: function() {
        return network.Method;
      }
    });
    Object.defineProperty(exports, "ResponseType", {
      enumerable: true,
      get: function() {
        return network.ResponseType;
      }
    });
    Object.defineProperty(exports, "SpecialSource", {
      enumerable: true,
      get: function() {
        return network.SpecialSource;
      }
    });
    Object.defineProperty(exports, "SriAsset", {
      enumerable: true,
      get: function() {
        return network.SriAsset;
      }
    });
    Object.defineProperty(exports, "StatusCode", {
      enumerable: true,
      get: function() {
        return network.StatusCode;
      }
    });
    exports.getResponseType = network.getResponseType;
    exports.hashSource = network.hashSource;
    exports.noCache = network.noCache;
    exports.nonceSource = network.nonceSource;
  }
});

// node_modules/@shopify/network/index.js
var require_network2 = __commonJS({
  "node_modules/@shopify/network/index.js"(exports, module) {
    module.exports = require_cjs();
  }
});

// node_modules/@shopify/shopify-api/lib/utils/processed-query.js
var require_processed_query = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/processed-query.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProcessedQuery = class {
      static stringify(keyValuePairs) {
        if (!keyValuePairs || Object.keys(keyValuePairs).length === 0)
          return "";
        return new ProcessedQuery().putAll(keyValuePairs).stringify();
      }
      constructor() {
        this.processedQuery = new URLSearchParams();
      }
      putAll(keyValuePairs) {
        Object.entries(keyValuePairs).forEach(([key, value]) => this.put(key, value));
        return this;
      }
      put(key, value) {
        if (Array.isArray(value)) {
          this.putArray(key, value);
        } else if ((value === null || value === void 0 ? void 0 : value.constructor) === Object) {
          this.putObject(key, value);
        } else {
          this.putSimple(key, value);
        }
      }
      putArray(key, value) {
        value.forEach((arrayValue) => this.processedQuery.append(`${key}[]`, `${arrayValue}`));
      }
      putObject(key, value) {
        Object.entries(value).forEach(([entry, entryValue]) => {
          this.processedQuery.append(`${key}[${entry}]`, `${entryValue}`);
        });
      }
      putSimple(key, value) {
        this.processedQuery.append(key, `${value}`);
      }
      stringify(omitQuestionMark = false) {
        const queryString = this.processedQuery.toString();
        return omitQuestionMark ? queryString : `?${queryString}`;
      }
    };
    exports.default = ProcessedQuery;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/http_client/types.js
var require_types5 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/http_client/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataType = void 0;
    var DataType;
    (function(DataType2) {
      DataType2["JSON"] = "application/json";
      DataType2["GraphQL"] = "application/graphql";
      DataType2["URLEncoded"] = "application/x-www-form-urlencoded";
    })(DataType = exports.DataType || (exports.DataType = {}));
  }
});

// node_modules/@shopify/shopify-api/lib/clients/http_client/http_client.js
var require_http_client = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/http_client/http_client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.httpClientClass = exports.HttpClient = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var network_1 = require_network2();
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var types_1 = require_types4();
    var version_1 = require_version();
    var processed_query_1 = tslib_1.__importDefault(require_processed_query());
    var crypto_1 = require_crypto2();
    var types_2 = require_types();
    var http_1 = require_http();
    var platform_1 = require_platform();
    var logger_1 = require_logger();
    var types_3 = require_types5();
    var HttpClient = class {
      constructor(params) {
        this.loggedDeprecations = {};
        this.domain = params.domain;
      }
      /**
       * Performs a GET request on the given path.
       */
      get(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          return this.request(Object.assign({ method: network_1.Method.Get }, params));
        });
      }
      /**
       * Performs a POST request on the given path.
       */
      post(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          return this.request(Object.assign({ method: network_1.Method.Post }, params));
        });
      }
      /**
       * Performs a PUT request on the given path.
       */
      put(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          return this.request(Object.assign({ method: network_1.Method.Put }, params));
        });
      }
      /**
       * Performs a DELETE request on the given path.
       */
      delete(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          return this.request(Object.assign({ method: network_1.Method.Delete }, params));
        });
      }
      request(params) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const maxTries = params.tries ? params.tries : 1;
          if (maxTries <= 0) {
            throw new ShopifyErrors.HttpRequestError(`Number of tries must be >= 0, got ${maxTries}`);
          }
          let userAgent = `${types_1.LIBRARY_NAME} v${version_1.SHOPIFY_API_LIBRARY_VERSION} | ${(0, platform_1.abstractRuntimeString)()}`;
          if (this.httpClass().config.userAgentPrefix) {
            userAgent = `${this.httpClass().config.userAgentPrefix} | ${userAgent}`;
          }
          if (params.extraHeaders) {
            if (params.extraHeaders["user-agent"]) {
              userAgent = `${params.extraHeaders["user-agent"]} | ${userAgent}`;
              delete params.extraHeaders["user-agent"];
            } else if (params.extraHeaders["User-Agent"]) {
              userAgent = `${params.extraHeaders["User-Agent"]} | ${userAgent}`;
            }
          }
          let headers = Object.assign(Object.assign({}, params.extraHeaders), { "User-Agent": userAgent });
          let body;
          if (params.method === network_1.Method.Post || params.method === network_1.Method.Put) {
            const type = (_a = params.type) !== null && _a !== void 0 ? _a : types_3.DataType.JSON;
            const data = params.data;
            if (data) {
              switch (type) {
                case types_3.DataType.JSON:
                  body = typeof data === "string" ? data : JSON.stringify(data);
                  break;
                case types_3.DataType.URLEncoded:
                  body = typeof data === "string" ? data : new URLSearchParams(data).toString();
                  break;
                case types_3.DataType.GraphQL:
                  body = data;
                  break;
              }
              headers = Object.assign(Object.assign({}, headers), { "Content-Type": type, "Content-Length": new TextEncoder().encode(body).length });
            }
          }
          const url = `${this.httpClass().scheme}://${this.domain}${this.getRequestPath(params.path)}${processed_query_1.default.stringify(params.query)}`;
          const request = {
            method: params.method,
            url,
            headers: (0, http_1.canonicalizeHeaders)(headers),
            body
          };
          if (this.httpClass().config.logger.httpRequests) {
            const message2 = [
              "Making HTTP request",
              `${request.method} ${request.url}`,
              `Headers: ${JSON.stringify(headers)}`
            ];
            if (body) {
              message2.push(`Body: ${JSON.stringify(body).replace(/\n/g, "\\n  ")}`);
            }
            (0, logger_1.logger)(this.httpClass().config).debug(message2.join("  -  "));
          }
          function sleep(waitTime) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              return new Promise((resolve) => setTimeout(resolve, waitTime));
            });
          }
          let tries = 0;
          while (tries < maxTries) {
            try {
              return yield this.doRequest(request);
            } catch (error) {
              tries++;
              if (error instanceof ShopifyErrors.HttpRetriableError) {
                if (tries < maxTries) {
                  let waitTime = this.httpClass().RETRY_WAIT_TIME;
                  if (error instanceof ShopifyErrors.HttpThrottlingError && error.response.retryAfter) {
                    waitTime = error.response.retryAfter * 1e3;
                  }
                  yield sleep(waitTime);
                  continue;
                }
                if (maxTries > 1) {
                  throw new ShopifyErrors.HttpMaxRetriesError(`Exceeded maximum retry count of ${maxTries}. Last message: ${error.message}`);
                }
              }
              throw error;
            }
          }
          throw new ShopifyErrors.ShopifyError(`Unexpected flow, reached maximum HTTP tries but did not throw an error`);
        });
      }
      getRequestPath(path) {
        return `/${path.replace(/^\//, "")}`;
      }
      httpClass() {
        return this.constructor;
      }
      throwFailedRequest(body, response) {
        const errorMessages = [];
        if (body.errors) {
          errorMessages.push(JSON.stringify(body.errors, null, 2));
        }
        const xRequestId = (0, http_1.getHeader)(response.headers, "x-request-id");
        if (xRequestId) {
          errorMessages.push(`If you report this error, please include this id: ${xRequestId}`);
        }
        const errorMessage = errorMessages.length ? `:
${errorMessages.join("\n")}` : "";
        const headers = response.headers ? response.headers : {};
        const code = response.statusCode;
        const statusText = response.statusText;
        switch (true) {
          case response.statusCode === network_1.StatusCode.TooManyRequests: {
            const retryAfter = (0, http_1.getHeader)(response.headers, "Retry-After");
            throw new ShopifyErrors.HttpThrottlingError({
              message: `Shopify is throttling requests${errorMessage}`,
              code,
              statusText,
              body,
              headers,
              retryAfter: retryAfter ? parseFloat(retryAfter) : void 0
            });
          }
          case response.statusCode >= network_1.StatusCode.InternalServerError:
            throw new ShopifyErrors.HttpInternalError({
              message: `Shopify internal error${errorMessage}`,
              code,
              statusText,
              body,
              headers
            });
          default:
            throw new ShopifyErrors.HttpResponseError({
              message: `Received an error response (${response.statusCode} ${response.statusText}) from Shopify${errorMessage}`,
              code,
              statusText,
              body,
              headers
            });
        }
      }
      doRequest(request) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const log = (0, logger_1.logger)(this.httpClass().config);
          const response = yield (0, http_1.abstractFetch)(request);
          if (this.httpClass().config.logger.httpRequests) {
            log.debug(`Completed HTTP request, received ${response.statusCode} ${response.statusText}`);
          }
          let body = {};
          if (response.body) {
            try {
              body = JSON.parse(response.body);
            } catch (error) {
              body = response.body;
            }
          }
          if (!(0, http_1.isOK)(response)) {
            this.throwFailedRequest(body, response);
          }
          const deprecationReason = (0, http_1.getHeader)(response.headers, "X-Shopify-API-Deprecated-Reason");
          if (deprecationReason) {
            const deprecation = {
              message: deprecationReason,
              path: request.url
            };
            if (request.body) {
              deprecation.body = `${request.body.substring(0, 100)}...`;
            }
            const depHash = yield (0, crypto_1.createSHA256HMAC)(this.httpClass().config.apiSecretKey, JSON.stringify(deprecation), types_2.HashFormat.Hex);
            if (!Object.keys(this.loggedDeprecations).includes(depHash) || Date.now() - this.loggedDeprecations[depHash] >= HttpClient.DEPRECATION_ALERT_DELAY) {
              this.loggedDeprecations[depHash] = Date.now();
              const stack = new Error().stack;
              const message2 = `API Deprecation Notice ${(/* @__PURE__ */ new Date()).toLocaleString()} : ${JSON.stringify(deprecation)}  -  Stack Trace: ${stack}`;
              yield log.warning(message2);
            }
          }
          return {
            body,
            headers: (_a = response.headers) !== null && _a !== void 0 ? _a : {}
          };
        });
      }
    };
    exports.HttpClient = HttpClient;
    HttpClient.RETRY_WAIT_TIME = 1e3;
    HttpClient.DEPRECATION_ALERT_DELAY = 3e5;
    function httpClientClass(config, scheme = "https") {
      class NewHttpClient extends HttpClient {
      }
      NewHttpClient.config = config;
      NewHttpClient.scheme = scheme;
      Reflect.defineProperty(NewHttpClient, "name", {
        value: "HttpClient"
      });
      return NewHttpClient;
    }
    exports.httpClientClass = httpClientClass;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/rest/rest_client.js
var require_rest_client = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/rest/rest_client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.restClientClass = exports.RestClient = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var http_1 = require_http();
    var types_1 = require_types4();
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var http_client_1 = require_http_client();
    var logger_1 = require_logger();
    var RestClient = class extends http_client_1.HttpClient {
      constructor(params) {
        super({ domain: params.session.shop });
        const config = this.restClass().config;
        if (!config.isCustomStoreApp && !params.session.accessToken) {
          throw new ShopifyErrors.MissingRequiredArgument("Missing access token when creating REST client");
        }
        if (params.apiVersion) {
          const message2 = params.apiVersion === config.apiVersion ? `REST client has a redundant API version override to the default ${params.apiVersion}` : `REST client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
          (0, logger_1.logger)(config).debug(message2);
        }
        this.session = params.session;
        this.apiVersion = params.apiVersion;
      }
      request(params) {
        const _super = Object.create(null, {
          request: { get: () => super.request }
        });
        var _a, _b, _c3;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const customStoreAppAccessToken = (_a = this.restClass().config.adminApiAccessToken) !== null && _a !== void 0 ? _a : this.restClass().config.apiSecretKey;
          params.extraHeaders = Object.assign({ [types_1.ShopifyHeader.AccessToken]: this.restClass().config.isCustomStoreApp ? customStoreAppAccessToken : this.session.accessToken }, params.extraHeaders);
          const ret = yield _super.request.call(this, params);
          const link = (0, http_1.getHeader)(ret.headers, "link");
          if (link !== void 0) {
            const pageInfo = {
              limit: ((_b = params.query) === null || _b === void 0 ? void 0 : _b.limit) ? (_c3 = params.query) === null || _c3 === void 0 ? void 0 : _c3.limit.toString() : RestClient.DEFAULT_LIMIT
            };
            if (link) {
              const links2 = link.split(", ");
              for (const link2 of links2) {
                const parsedLink = link2.match(RestClient.LINK_HEADER_REGEXP);
                if (!parsedLink) {
                  continue;
                }
                const linkRel = parsedLink[2];
                const linkUrl = new URL(parsedLink[1]);
                const linkFields = linkUrl.searchParams.get("fields");
                const linkPageToken = linkUrl.searchParams.get("page_info");
                if (!pageInfo.fields && linkFields) {
                  pageInfo.fields = linkFields.split(",");
                }
                if (linkPageToken) {
                  switch (linkRel) {
                    case "previous":
                      pageInfo.previousPageUrl = parsedLink[1];
                      pageInfo.prevPage = this.buildRequestParams(parsedLink[1]);
                      break;
                    case "next":
                      pageInfo.nextPageUrl = parsedLink[1];
                      pageInfo.nextPage = this.buildRequestParams(parsedLink[1]);
                      break;
                  }
                }
              }
            }
            ret.pageInfo = pageInfo;
          }
          return ret;
        });
      }
      getRequestPath(path) {
        const cleanPath = super.getRequestPath(path);
        if (cleanPath.startsWith("/admin")) {
          return `${cleanPath.replace(/\.json$/, "")}.json`;
        } else {
          return `/admin/api/${this.apiVersion || this.restClass().config.apiVersion}${cleanPath.replace(/\.json$/, "")}.json`;
        }
      }
      restClass() {
        return this.constructor;
      }
      buildRequestParams(newPageUrl) {
        const pattern = `^/admin/api/[^/]+/(.*).json$`;
        const url = new URL(newPageUrl);
        const path = url.pathname.replace(new RegExp(pattern), "$1");
        return {
          path,
          query: Object.fromEntries(url.searchParams.entries())
        };
      }
    };
    exports.RestClient = RestClient;
    RestClient.LINK_HEADER_REGEXP = /<([^<]+)>; rel="([^"]+)"/;
    RestClient.DEFAULT_LIMIT = "50";
    function restClientClass(params) {
      const { config } = params;
      class NewRestClient extends RestClient {
      }
      NewRestClient.config = config;
      NewRestClient.scheme = "https";
      Reflect.defineProperty(NewRestClient, "name", {
        value: "RestClient"
      });
      return NewRestClient;
    }
    exports.restClientClass = restClientClass;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/graphql/graphql_client.js
var require_graphql_client = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/graphql/graphql_client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.graphqlClientClass = exports.GraphqlClient = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = require_types4();
    var http_client_1 = require_http_client();
    var types_2 = require_types5();
    var logger_1 = require_logger();
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var GraphqlClient = class {
      constructor(params) {
        this.baseApiPath = "/admin/api";
        const config = this.graphqlClass().config;
        if (!config.isCustomStoreApp && !params.session.accessToken) {
          throw new ShopifyErrors.MissingRequiredArgument("Missing access token when creating GraphQL client");
        }
        if (params.apiVersion) {
          const message2 = params.apiVersion === config.apiVersion ? `GraphQL client has a redundant API version override to the default ${params.apiVersion}` : `GraphQL client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
          (0, logger_1.logger)(config).debug(message2);
        }
        this.session = params.session;
        this.apiVersion = params.apiVersion;
        this.client = new (this.graphqlClass()).HttpClient({
          domain: this.session.shop
        });
      }
      query(params) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (typeof params.data === "string" && params.data.length === 0 || Object.entries(params.data).length === 0) {
            throw new ShopifyErrors.MissingRequiredArgument("Query missing.");
          }
          const apiHeaders = this.getApiHeaders();
          params.extraHeaders = Object.assign(Object.assign({}, apiHeaders), params.extraHeaders);
          const path = `${this.baseApiPath}/${this.apiVersion || this.graphqlClass().config.apiVersion}/graphql.json`;
          let dataType;
          if (typeof params.data === "object") {
            dataType = types_2.DataType.JSON;
          } else {
            dataType = types_2.DataType.GraphQL;
          }
          const result = yield this.client.post(Object.assign({ path, type: dataType }, params));
          const errors = result.body.errors;
          if ((errors === null || errors === void 0 ? void 0 : errors.length) > 0) {
            throw new ShopifyErrors.GraphqlQueryError({
              message: (_b = (_a = errors[0]) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "GraphQL query returned errors",
              response: result.body,
              headers: result.headers
            });
          }
          return result;
        });
      }
      getApiHeaders() {
        const { config } = this.graphqlClass();
        let accessToken;
        if (config.isCustomStoreApp) {
          accessToken = config.adminApiAccessToken;
        } else {
          accessToken = this.session.accessToken;
          if (!accessToken) {
            throw new ShopifyErrors.MissingRequiredArgument("Session missing access token.");
          }
        }
        return {
          [types_1.ShopifyHeader.AccessToken]: accessToken
        };
      }
      graphqlClass() {
        return this.constructor;
      }
    };
    exports.GraphqlClient = GraphqlClient;
    function graphqlClientClass(params) {
      const { config } = params;
      let { HttpClient } = params;
      if (!HttpClient) {
        HttpClient = (0, http_client_1.httpClientClass)(params.config);
      }
      class NewGraphqlClient extends GraphqlClient {
      }
      NewGraphqlClient.config = config;
      NewGraphqlClient.HttpClient = HttpClient;
      Reflect.defineProperty(NewGraphqlClient, "name", {
        value: "GraphqlClient"
      });
      return NewGraphqlClient;
    }
    exports.graphqlClientClass = graphqlClientClass;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/graphql/storefront_client.js
var require_storefront_client = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/graphql/storefront_client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.storefrontClientClass = exports.StorefrontClient = void 0;
    var version_1 = require_version();
    var types_1 = require_types4();
    var http_client_1 = require_http_client();
    var logger_1 = require_logger();
    var error_1 = require_error();
    var graphql_client_1 = require_graphql_client();
    var StorefrontClient = class extends graphql_client_1.GraphqlClient {
      constructor(params) {
        super({ session: params.session, apiVersion: params.apiVersion });
        this.baseApiPath = "/api";
        const config = this.storefrontClass().config;
        if (params.apiVersion) {
          const message2 = params.apiVersion === config.apiVersion ? `Storefront client has a redundant API version override to the default ${params.apiVersion}` : `Storefront client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
          (0, logger_1.logger)(config).debug(message2);
        }
      }
      getApiHeaders() {
        const config = this.storefrontClass().config;
        let accessToken;
        if (config.isCustomStoreApp) {
          accessToken = config.privateAppStorefrontAccessToken;
          if (!accessToken) {
            throw new error_1.MissingRequiredArgument("Custom store apps must set the privateAppStorefrontAccessToken property to call the Storefront API.");
          }
        } else {
          accessToken = this.session.accessToken;
          if (!accessToken) {
            throw new error_1.MissingRequiredArgument("Session missing access token.");
          }
        }
        const sdkVariant = types_1.LIBRARY_NAME.toLowerCase().split(" ").join("-");
        return {
          [types_1.ShopifyHeader.StorefrontPrivateToken]: accessToken,
          [types_1.ShopifyHeader.StorefrontSDKVariant]: sdkVariant,
          [types_1.ShopifyHeader.StorefrontSDKVersion]: version_1.SHOPIFY_API_LIBRARY_VERSION
        };
      }
      storefrontClass() {
        return this.constructor;
      }
    };
    exports.StorefrontClient = StorefrontClient;
    function storefrontClientClass(params) {
      const { config } = params;
      let { HttpClient } = params;
      if (!HttpClient) {
        HttpClient = (0, http_client_1.httpClientClass)(config);
      }
      class NewStorefrontClient extends StorefrontClient {
      }
      NewStorefrontClient.config = config;
      NewStorefrontClient.HttpClient = HttpClient;
      Reflect.defineProperty(NewStorefrontClient, "name", {
        value: "StorefrontClient"
      });
      return NewStorefrontClient;
    }
    exports.storefrontClientClass = storefrontClientClass;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/graphql/graphql_proxy.js
var require_graphql_proxy = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/graphql/graphql_proxy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.graphqlProxy = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var graphql_client_1 = require_graphql_client();
    function graphqlProxy(config) {
      return ({ session, rawBody }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!session.accessToken) {
          throw new ShopifyErrors.InvalidSession("Cannot proxy query. Session not authenticated.");
        }
        const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
        const client = new GraphqlClient({ session });
        return client.query({
          data: rawBody
        });
      });
    }
    exports.graphqlProxy = graphqlProxy;
  }
});

// node_modules/@shopify/shopify-api/lib/clients/index.js
var require_clients = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clientClasses = void 0;
    var http_client_1 = require_http_client();
    var rest_client_1 = require_rest_client();
    var graphql_client_1 = require_graphql_client();
    var storefront_client_1 = require_storefront_client();
    var graphql_proxy_1 = require_graphql_proxy();
    function clientClasses(config) {
      const HttpClient = (0, http_client_1.httpClientClass)(config);
      return {
        // We don't pass in the HttpClient because the RestClient inherits from it, and goes through the same setup process
        Rest: (0, rest_client_1.restClientClass)({ config }),
        Graphql: (0, graphql_client_1.graphqlClientClass)({ config, HttpClient }),
        Storefront: (0, storefront_client_1.storefrontClientClass)({ config, HttpClient }),
        graphqlProxy: (0, graphql_proxy_1.graphqlProxy)(config)
      };
    }
    exports.clientClasses = clientClasses;
  }
});

// node_modules/isbot/index.js
var require_isbot = __commonJS({
  "node_modules/isbot/index.js"(exports, module) {
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e, n, i, u, a = [], f = true, o = false;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t)
              return;
            f = false;
          } else
            for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
              ;
        } catch (r2) {
          o = true, n = r2;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u))
              return;
          } finally {
            if (o)
              throw n;
          }
        }
        return a;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _classPrivateFieldGet(receiver, privateMap) {
      var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
      return _classApplyDescriptorGet(receiver, descriptor);
    }
    function _classPrivateFieldSet(receiver, privateMap, value) {
      var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
      _classApplyDescriptorSet(receiver, descriptor, value);
      return value;
    }
    function _classExtractFieldDescriptor(receiver, privateMap, action) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function _classApplyDescriptorGet(receiver, descriptor) {
      if (descriptor.get) {
        return descriptor.get.call(receiver);
      }
      return descriptor.value;
    }
    function _classApplyDescriptorSet(receiver, descriptor, value) {
      if (descriptor.set) {
        descriptor.set.call(receiver, value);
      } else {
        if (!descriptor.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
      }
    }
    function _classPrivateMethodGet(receiver, privateSet, fn) {
      if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return fn;
    }
    function _checkPrivateRedeclaration(obj, privateCollection) {
      if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
      }
    }
    function _classPrivateFieldInitSpec(obj, privateMap, value) {
      _checkPrivateRedeclaration(obj, privateMap);
      privateMap.set(obj, value);
    }
    function _classPrivateMethodInitSpec(obj, privateSet) {
      _checkPrivateRedeclaration(obj, privateSet);
      privateSet.add(obj);
    }
    var list = [
      " daum[ /]",
      " deusu/",
      " yadirectfetcher",
      "(?:^| )site",
      "(?:^|[^g])news",
      "@[a-z]",
      "\\(at\\)[a-z]",
      "\\(github\\.com/",
      "\\[at\\][a-z]",
      "^12345",
      "^<",
      "^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$",
      "^[^ ]{50,}$",
      "^active",
      "^ad muncher",
      "^amaya",
      "^anglesharp/",
      "^anonymous",
      "^avsdevicesdk/",
      "^axios/",
      "^bidtellect/",
      "^biglotron",
      "^btwebclient/",
      "^castro",
      "^clamav[ /]",
      "^client/",
      "^cobweb/",
      "^coccoc",
      "^custom",
      "^ddg[_-]android",
      "^discourse",
      "^dispatch/\\d",
      "^downcast/",
      "^duckduckgo",
      "^facebook",
      "^fdm[ /]\\d",
      "^getright/",
      "^gozilla/",
      "^hatena",
      "^hobbit",
      "^hotzonu",
      "^hwcdn/",
      "^jeode/",
      "^jetty/",
      "^jigsaw",
      "^linkdex",
      "^lwp[-: ]",
      "^metauri",
      "^microsoft bits",
      "^movabletype",
      "^mozilla/\\d\\.\\d \\(compatible;?\\)$",
      "^mozilla/\\d\\.\\d \\w*$",
      "^navermailapp",
      "^netsurf",
      "^offline explorer",
      "^php",
      "^postman",
      "^postrank",
      "^python",
      "^read",
      "^reed",
      "^restsharp/",
      "^snapchat",
      "^space bison",
      "^svn",
      "^swcd ",
      "^taringa",
      "^test certificate info",
      "^thumbor/",
      "^tumblr/",
      "^user-agent:mozilla",
      "^valid",
      "^venus/fedoraplanet",
      "^w3c",
      "^webbandit/",
      "^webcopier",
      "^wget",
      "^whatsapp",
      "^xenu link sleuth",
      "^yahoo",
      "^yandex",
      "^zdm/\\d",
      "^zoom marketplace/",
      "^{{.*}}$",
      "adbeat\\.com",
      "appinsights",
      "archive",
      "ask jeeves/teoma",
      "bit\\.ly/",
      "bluecoat drtr",
      "bot",
      "browsex",
      "burpcollaborator",
      "capture",
      "catch",
      "check",
      "chrome-lighthouse",
      "chromeframe",
      "cloud",
      "crawl",
      "cryptoapi",
      "dareboost",
      "datanyze",
      "dataprovider",
      "dejaclick",
      "dmbrowser",
      "download",
      "evc-batch/",
      "feed",
      "firephp",
      "freesafeip",
      "gomezagent",
      "google",
      "headlesschrome/",
      "http",
      "httrack",
      "hubspot marketing grader",
      "hydra",
      "ibisbrowser",
      "images",
      "inspect",
      "iplabel",
      "ips-agent",
      "java",
      "library",
      "mail\\.ru/",
      "manager",
      "monitor",
      "morningscore/",
      "neustar wpm",
      "nutch",
      "offbyone",
      "optimize",
      "pageburst",
      "pagespeed",
      "perl",
      "phantom",
      "pingdom",
      "powermarks",
      "preview",
      "proxy",
      "ptst[ /]\\d",
      "reader",
      "rexx;",
      "rigor",
      "rss",
      "scan",
      "scrape",
      "search",
      "serp ?reputation ?management",
      "server",
      "sogou",
      "sparkler/",
      "speedcurve",
      "spider",
      "splash",
      "statuscake",
      "stumbleupon\\.com",
      "supercleaner",
      "synapse",
      "synthetic",
      "torrent",
      "tracemyfile",
      "transcoder",
      "trendsmapresolver",
      "twingly recon",
      "url",
      "virtuoso",
      "wappalyzer",
      "webglance",
      "webkit2png",
      "websitemetadataretriever",
      "whatcms/",
      "wordpress",
      "zgrab"
    ];
    function amend(list2) {
      try {
        new RegExp("(?<! cu)bot").test("dangerbot");
      } catch (error) {
        return list2;
      }
      [
        // Addresses: Cubot device
        ["bot", "(?<! cu)bot"],
        // Addresses: Android webview
        ["google", "(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],
        // Addresses: libhttp browser
        ["http", "(?<!(?:lib))http"],
        // Addresses: java based browsers
        ["java", "java(?!;)"],
        // Addresses: Yandex Search App
        ["search", "(?<! ya(?:yandex)?)search"]
      ].forEach(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), search = _ref2[0], replace = _ref2[1];
        var index = list2.lastIndexOf(search);
        if (~index) {
          list2.splice(index, 1, replace);
        }
      });
      return list2;
    }
    amend(list);
    var flags = "i";
    var _list = /* @__PURE__ */ new WeakMap();
    var _pattern = /* @__PURE__ */ new WeakMap();
    var _update = /* @__PURE__ */ new WeakSet();
    var _index = /* @__PURE__ */ new WeakSet();
    var Isbot = /* @__PURE__ */ function() {
      function Isbot2(patterns) {
        var _this = this;
        _classCallCheck(this, Isbot2);
        _classPrivateMethodInitSpec(this, _index);
        _classPrivateMethodInitSpec(this, _update);
        _classPrivateFieldInitSpec(this, _list, {
          writable: true,
          value: void 0
        });
        _classPrivateFieldInitSpec(this, _pattern, {
          writable: true,
          value: void 0
        });
        _classPrivateFieldSet(this, _list, patterns || list.slice());
        _classPrivateMethodGet(this, _update, _update2).call(this);
        var isbot2 = function isbot3(ua) {
          return _this.test(ua);
        };
        return Object.defineProperties(isbot2, Object.entries(Object.getOwnPropertyDescriptors(Isbot2.prototype)).reduce(function(accumulator, _ref) {
          var _ref2 = _slicedToArray(_ref, 2), prop = _ref2[0], descriptor = _ref2[1];
          if (typeof descriptor.value === "function") {
            Object.assign(accumulator, _defineProperty({}, prop, {
              value: _this[prop].bind(_this)
            }));
          }
          if (typeof descriptor.get === "function") {
            Object.assign(accumulator, _defineProperty({}, prop, {
              get: function get() {
                return _this[prop];
              }
            }));
          }
          return accumulator;
        }, {}));
      }
      _createClass(Isbot2, [{
        key: "pattern",
        get: (
          /**
           * Get a clone of the pattern
           * @type RegExp
           */
          function get() {
            return new RegExp(_classPrivateFieldGet(this, _pattern));
          }
        )
        /**
         * Match given string against out pattern
         * @param  {string} ua User Agent string
         * @returns {boolean}
         */
      }, {
        key: "test",
        value: function test(ua) {
          return Boolean(ua) && _classPrivateFieldGet(this, _pattern).test(ua);
        }
        /**
         * Get the match for strings' known crawler pattern
         * @param  {string} ua User Agent string
         * @returns {string|null}
         */
      }, {
        key: "find",
        value: function find() {
          var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var match = ua.match(_classPrivateFieldGet(this, _pattern));
          return match && match[0];
        }
        /**
         * Get the patterns that match user agent string if any
         * @param  {string} ua User Agent string
         * @returns {string[]}
         */
      }, {
        key: "matches",
        value: function matches() {
          var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return _classPrivateFieldGet(this, _list).filter(function(entry) {
            return new RegExp(entry, flags).test(ua);
          });
        }
        /**
         * Clear all patterns that match user agent
         * @param  {string} ua User Agent string
         * @returns {void}
         */
      }, {
        key: "clear",
        value: function clear() {
          var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          this.exclude(this.matches(ua));
        }
        /**
         * Extent patterns for known crawlers
         * @param  {string[]} filters
         * @returns {void}
         */
      }, {
        key: "extend",
        value: function extend() {
          var _this2 = this;
          var filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          [].push.apply(_classPrivateFieldGet(this, _list), filters.filter(function(rule) {
            return _classPrivateMethodGet(_this2, _index, _index2).call(_this2, rule) === -1;
          }).map(function(filter) {
            return filter.toLowerCase();
          }));
          _classPrivateMethodGet(this, _update, _update2).call(this);
        }
        /**
         * Exclude patterns from bot pattern rule
         * @param  {string[]} filters
         * @returns {void}
         */
      }, {
        key: "exclude",
        value: function exclude() {
          var filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var length = filters.length;
          while (length--) {
            var index = _classPrivateMethodGet(this, _index, _index2).call(this, filters[length]);
            if (index > -1) {
              _classPrivateFieldGet(this, _list).splice(index, 1);
            }
          }
          _classPrivateMethodGet(this, _update, _update2).call(this);
        }
        /**
         * Create a new Isbot instance using given list or self's list
         * @param  {string[]} [list]
         * @returns {Isbot}
         */
      }, {
        key: "spawn",
        value: function spawn(list2) {
          return new Isbot2(list2 || _classPrivateFieldGet(this, _list));
        }
      }]);
      return Isbot2;
    }();
    function _update2() {
      _classPrivateFieldSet(this, _pattern, new RegExp(_classPrivateFieldGet(this, _list).join("|"), flags));
    }
    function _index2(rule) {
      return _classPrivateFieldGet(this, _list).indexOf(rule.toLowerCase());
    }
    var isbot = new Isbot();
    module.exports = isbot;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/safe-compare.js
var require_safe_compare = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/safe-compare.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeCompare = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var safeCompare = (strA, strB) => {
      if (typeof strA === typeof strB) {
        const enc = new TextEncoder();
        const buffA = enc.encode(JSON.stringify(strA));
        const buffB = enc.encode(JSON.stringify(strB));
        if (buffA.length === buffB.length) {
          return timingSafeEqual2(buffA, buffB);
        }
      } else {
        throw new ShopifyErrors.SafeCompareError(`Mismatched data types provided: ${typeof strA} and ${typeof strB}`);
      }
      return false;
    };
    exports.safeCompare = safeCompare;
    function timingSafeEqual2(bufA, bufB) {
      const viewA = new Uint8Array(bufA);
      const viewB = new Uint8Array(bufB);
      let out = 0;
      for (let i = 0; i < viewA.length; i++) {
        out |= viewA[i] ^ viewB[i];
      }
      return out === 0;
    }
  }
});

// node_modules/@shopify/shopify-api/lib/utils/hmac-validator.js
var require_hmac_validator = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/hmac-validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCurrentTimeInSec = exports.validateHmac = exports.generateLocalHmac = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var crypto_1 = require_crypto2();
    var types_1 = require_types();
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var safe_compare_1 = require_safe_compare();
    var processed_query_1 = tslib_1.__importDefault(require_processed_query());
    var HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC = 90;
    function stringifyQueryForAdmin(query) {
      const processedQuery = new processed_query_1.default();
      Object.keys(query).sort((val1, val2) => val1.localeCompare(val2)).forEach((key) => processedQuery.put(key, query[key]));
      return processedQuery.stringify(true);
    }
    function stringifyQueryForAppProxy(query) {
      return Object.entries(query).sort(([val1], [val2]) => val1.localeCompare(val2)).reduce((acc, [key, value]) => {
        return `${acc}${key}=${Array.isArray(value) ? value.join(",") : value}`;
      }, "");
    }
    function generateLocalHmac(config) {
      return (params, signator = "admin") => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { hmac, signature } = params, query = tslib_1.__rest(params, ["hmac", "signature"]);
        const queryString = signator === "admin" ? stringifyQueryForAdmin(query) : stringifyQueryForAppProxy(query);
        return (0, crypto_1.createSHA256HMAC)(config.apiSecretKey, queryString, types_1.HashFormat.Hex);
      });
    }
    exports.generateLocalHmac = generateLocalHmac;
    function validateHmac(config) {
      return (query, { signator } = { signator: "admin" }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (signator === "admin" && !query.hmac) {
          throw new ShopifyErrors.InvalidHmacError("Query does not contain an HMAC value.");
        }
        if (signator === "appProxy" && !query.signature) {
          throw new ShopifyErrors.InvalidHmacError("Query does not contain a signature value.");
        }
        validateHmacTimestamp(query);
        const hmac = signator === "appProxy" ? query.signature : query.hmac;
        const localHmac = yield generateLocalHmac(config)(query, signator);
        return (0, safe_compare_1.safeCompare)(hmac, localHmac);
      });
    }
    exports.validateHmac = validateHmac;
    function getCurrentTimeInSec() {
      return Math.trunc(Date.now() / 1e3);
    }
    exports.getCurrentTimeInSec = getCurrentTimeInSec;
    function validateHmacTimestamp(query) {
      if (Math.abs(getCurrentTimeInSec() - Number(query.timestamp)) > HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC) {
        throw new ShopifyErrors.InvalidHmacError("HMAC timestamp is outside of the tolerance range");
      }
    }
  }
});

// node_modules/@shopify/shopify-api/lib/auth/decode-host.js
var require_decode_host = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/decode-host.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeHost = void 0;
    function decodeHost(host) {
      return atob(host);
    }
    exports.decodeHost = decodeHost;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/shop-validator.js
var require_shop_validator = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/shop-validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sanitizeHost = exports.sanitizeShop = void 0;
    var error_1 = require_error();
    var decode_host_1 = require_decode_host();
    function sanitizeShop(config) {
      return (shop, throwOnInvalid = false) => {
        const domainsRegex = ["myshopify\\.com", "shopify\\.com", "myshopify\\.io"];
        if (config.customShopDomains) {
          domainsRegex.push(...config.customShopDomains.map((regex) => typeof regex === "string" ? regex : regex.source));
        }
        const shopUrlRegex = new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9-_]*\\.(${domainsRegex.join("|")})[/]*$`);
        const sanitizedShop = shopUrlRegex.test(shop) ? shop : null;
        if (!sanitizedShop && throwOnInvalid) {
          throw new error_1.InvalidShopError("Received invalid shop argument");
        }
        return sanitizedShop;
      };
    }
    exports.sanitizeShop = sanitizeShop;
    function sanitizeHost() {
      return (host, throwOnInvalid = false) => {
        const base64regex = /^[0-9a-zA-Z+/]+={0,2}$/;
        let sanitizedHost = base64regex.test(host) ? host : null;
        if (sanitizedHost) {
          const { hostname } = new URL(`https://${(0, decode_host_1.decodeHost)(sanitizedHost)}`);
          const originsRegex = [
            "myshopify\\.com",
            "shopify\\.com",
            "myshopify\\.io",
            "spin\\.dev"
          ];
          const hostRegex = new RegExp(`\\.(${originsRegex.join("|")})$`);
          if (!hostRegex.test(hostname)) {
            sanitizedHost = null;
          }
        }
        if (!sanitizedHost && throwOnInvalid) {
          throw new error_1.InvalidHostError("Received invalid host argument");
        }
        return sanitizedHost;
      };
    }
    exports.sanitizeHost = sanitizeHost;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/types.js
var require_types6 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STATE_COOKIE_NAME = exports.SESSION_COOKIE_NAME = void 0;
    exports.SESSION_COOKIE_NAME = "shopify_app_session";
    exports.STATE_COOKIE_NAME = "shopify_app_state";
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/nonce.js
var require_nonce = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/nonce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nonce = void 0;
    var crypto_1 = require_crypto2();
    function nonce() {
      const length = 15;
      const bytes = crypto_1.crypto.getRandomValues ? crypto_1.crypto.getRandomValues(new Uint8Array(length)) : crypto_1.crypto.randomBytes(length);
      const nonce2 = bytes.map((byte) => {
        return byte % 10;
      }).join("");
      return nonce2;
    }
    exports.nonce = nonce;
  }
});

// node_modules/uuid/dist/commonjs-browser/rng.js
var require_rng = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      if (!getRandomValues) {
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return getRandomValues(rnds8);
    }
  }
});

// node_modules/uuid/dist/commonjs-browser/regex.js
var require_regex = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/validate.js
var require_validate = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validate2(uuid) {
      return typeof uuid === "string" && _regex.default.test(uuid);
    }
    var _default = validate2;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/stringify.js
var require_stringify = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    exports.unsafeStringify = unsafeStringify;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    function unsafeStringify(arr, offset = 0) {
      return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
    }
    function stringify(arr, offset = 0) {
      const uuid = unsafeStringify(arr, offset);
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    }
    var _default = stringify;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v1.js
var require_v1 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.unsafeStringify)(b);
    }
    var _default = v1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/parse.js
var require_parse = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse3(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse3;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v35.js
var require_v35 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URL = exports.DNS = void 0;
    exports.default = v35;
    var _stringify = require_stringify();
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL2;
    function v35(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL2;
      return generateUUID;
    }
  }
});

// node_modules/uuid/dist/commonjs-browser/md5.js
var require_md5 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function md5(bytes) {
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = new Uint8Array(msg.length);
        for (let i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }
      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    function md5ToHexEncodedArray(input) {
      const output = [];
      const length32 = input.length * 32;
      const hexTab = "0123456789abcdef";
      for (let i = 0; i < length32; i += 8) {
        const x = input[i >> 5] >>> i % 32 & 255;
        const hex2 = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex2);
      }
      return output;
    }
    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    function wordsToMd5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[getOutputLength(len) - 1] = len;
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      let d = 271733878;
      for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }
    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }
      const length8 = input.length * 8;
      const output = new Uint32Array(getOutputLength(length8));
      for (let i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 255) << i % 32;
      }
      return output;
    }
    function safeAdd(x, y) {
      const lsw = (x & 65535) + (y & 65535);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    var _default = md5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v3.js
var require_v3 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/native.js
var require_native = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var _default = {
      randomUUID
    };
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v4.js
var require_v4 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _native = _interopRequireDefault(require_native());
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function v4(options, buf, offset) {
      if (_native.default.randomUUID && !buf && !options) {
        return _native.default.randomUUID();
      }
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.unsafeStringify)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/sha1.js
var require_sha1 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    }
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    function sha1(bytes) {
      const K = [1518500249, 1859775393, 2400959708, 3395469782];
      const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = [];
        for (let i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        bytes = Array.prototype.slice.call(bytes);
      }
      bytes.push(128);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);
      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);
        for (let j = 0; j < 16; ++j) {
          arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }
        M[i] = arr;
      }
      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) {
          W[t] = M[i][t];
        }
        for (let t = 16; t < 80; ++t) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
    }
    var _default = sha1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v5.js
var require_v5 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/nil.js
var require_nil = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/version.js
var require_version2 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.slice(14, 15), 16);
    }
    var _default = version;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/index.js
var require_commonjs_browser = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function get() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function get() {
        return _parse.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function get() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function get() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function get() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function get() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function get() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function get() {
        return _version.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version2());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/@shopify/shopify-api/lib/session/session.js
var require_session = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Session = void 0;
    var error_1 = require_error();
    var scopes_1 = require_scopes();
    var propertiesToSave = [
      "id",
      "shop",
      "state",
      "isOnline",
      "scope",
      "accessToken",
      "expires",
      "onlineAccessInfo"
    ];
    var Session = class {
      static fromPropertyArray(entries) {
        if (!Array.isArray(entries)) {
          throw new error_1.InvalidSession("The parameter is not an array: a Session cannot be created from this object.");
        }
        const obj = Object.fromEntries(entries.filter(([_key, value]) => value !== null && value !== void 0).map(([key, value]) => {
          switch (key.toLowerCase()) {
            case "isonline":
              return ["isOnline", value];
            case "accesstoken":
              return ["accessToken", value];
            case "onlineaccessinfo":
              return ["onlineAccessInfo", value];
            default:
              return [key.toLowerCase(), value];
          }
        }).map(([key, value]) => {
          switch (key) {
            case "isOnline":
              if (typeof value === "string") {
                return [key, value.toString().toLowerCase() === "true"];
              } else if (typeof value === "number") {
                return [key, Boolean(value)];
              }
              return [key, value];
            case "scope":
              return [key, value.toString()];
            case "expires":
              return [key, value ? new Date(Number(value)) : void 0];
            case "onlineAccessInfo":
              return [
                key,
                {
                  associated_user: {
                    id: Number(value)
                  }
                }
              ];
            default:
              return [key, value];
          }
        }));
        Object.setPrototypeOf(obj, Session.prototype);
        return obj;
      }
      constructor(params) {
        Object.assign(this, params);
      }
      isActive(scopes) {
        return !this.isScopeChanged(scopes) && Boolean(this.accessToken) && !this.isExpired();
      }
      isScopeChanged(scopes) {
        const scopesObject = scopes instanceof scopes_1.AuthScopes ? scopes : new scopes_1.AuthScopes(scopes);
        return !scopesObject.equals(this.scope);
      }
      isExpired() {
        return Boolean(this.expires && this.expires < /* @__PURE__ */ new Date());
      }
      toObject() {
        const object = {
          id: this.id,
          shop: this.shop,
          state: this.state,
          isOnline: this.isOnline
        };
        if (this.scope) {
          object.scope = this.scope;
        }
        if (this.expires) {
          object.expires = this.expires;
        }
        if (this.accessToken) {
          object.accessToken = this.accessToken;
        }
        if (this.onlineAccessInfo) {
          object.onlineAccessInfo = this.onlineAccessInfo;
        }
        return object;
      }
      equals(other) {
        if (!other)
          return false;
        const mandatoryPropsMatch = this.id === other.id && this.shop === other.shop && this.state === other.state && this.isOnline === other.isOnline;
        if (!mandatoryPropsMatch)
          return false;
        const copyA = this.toPropertyArray();
        copyA.sort(([k1], [k2]) => k1 < k2 ? -1 : 1);
        const copyB = other.toPropertyArray();
        copyB.sort(([k1], [k2]) => k1 < k2 ? -1 : 1);
        return JSON.stringify(copyA) === JSON.stringify(copyB);
      }
      toPropertyArray() {
        return Object.entries(this).filter(([key, value]) => propertiesToSave.includes(key) && value !== void 0 && value !== null).map(([key, value]) => {
          var _a;
          switch (key) {
            case "expires":
              return [key, value ? value.getTime() : void 0];
            case "onlineAccessInfo":
              return [key, (_a = value === null || value === void 0 ? void 0 : value.associated_user) === null || _a === void 0 ? void 0 : _a.id];
            default:
              return [key, value];
          }
        });
      }
    };
    exports.Session = Session;
  }
});

// node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default, isCryptoKey;
var init_webcrypto = __esm({
  "node_modules/jose/dist/browser/runtime/webcrypto.js"() {
    webcrypto_default = crypto;
    isCryptoKey = (key) => key instanceof CryptoKey;
  }
});

// node_modules/jose/dist/browser/runtime/digest.js
var digest, digest_default;
var init_digest = __esm({
  "node_modules/jose/dist/browser/runtime/digest.js"() {
    init_webcrypto();
    digest = async (algorithm, data) => {
      const subtleDigest = `SHA-${algorithm.slice(-3)}`;
      return new Uint8Array(await webcrypto_default.subtle.digest(subtleDigest, data));
    };
    digest_default = digest;
  }
});

// node_modules/jose/dist/browser/lib/buffer_utils.js
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  buffers.forEach((buffer) => {
    buf.set(buffer, i);
    i += buffer.length;
  });
  return buf;
}
function p2s(alg, p2sInput) {
  return concat(encoder.encode(alg), new Uint8Array([0]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
  if (value < 0 || value >= MAX_INT32) {
    throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
  }
  buf.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf = new Uint8Array(8);
  writeUInt32BE(buf, high, 0);
  writeUInt32BE(buf, low, 4);
  return buf;
}
function uint32be(value) {
  const buf = new Uint8Array(4);
  writeUInt32BE(buf, value);
  return buf;
}
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
  const iterations = Math.ceil((bits >> 3) / 32);
  const res = new Uint8Array(iterations * 32);
  for (let iter = 0; iter < iterations; iter++) {
    const buf = new Uint8Array(4 + secret.length + value.length);
    buf.set(uint32be(iter + 1));
    buf.set(secret, 4);
    buf.set(value, 4 + secret.length);
    res.set(await digest_default("sha256", buf), iter * 32);
  }
  return res.slice(0, bits >> 3);
}
var encoder, decoder, MAX_INT32;
var init_buffer_utils = __esm({
  "node_modules/jose/dist/browser/lib/buffer_utils.js"() {
    init_digest();
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    MAX_INT32 = 2 ** 32;
  }
});

// node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64, encode, decodeBase64, decode;
var init_base64url = __esm({
  "node_modules/jose/dist/browser/runtime/base64url.js"() {
    init_buffer_utils();
    encodeBase64 = (input) => {
      let unencoded = input;
      if (typeof unencoded === "string") {
        unencoded = encoder.encode(unencoded);
      }
      const CHUNK_SIZE = 32768;
      const arr = [];
      for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
      }
      return btoa(arr.join(""));
    };
    encode = (input) => {
      return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
    decodeBase64 = (encoded) => {
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      return bytes;
    };
    decode = (input) => {
      let encoded = input;
      if (encoded instanceof Uint8Array) {
        encoded = decoder.decode(encoded);
      }
      encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
      try {
        return decodeBase64(encoded);
      } catch (_a) {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    };
  }
});

// node_modules/jose/dist/browser/util/errors.js
var errors_exports = {};
__export(errors_exports, {
  JOSEAlgNotAllowed: () => JOSEAlgNotAllowed,
  JOSEError: () => JOSEError,
  JOSENotSupported: () => JOSENotSupported,
  JWEDecryptionFailed: () => JWEDecryptionFailed,
  JWEInvalid: () => JWEInvalid,
  JWKInvalid: () => JWKInvalid,
  JWKSInvalid: () => JWKSInvalid,
  JWKSMultipleMatchingKeys: () => JWKSMultipleMatchingKeys,
  JWKSNoMatchingKey: () => JWKSNoMatchingKey,
  JWKSTimeout: () => JWKSTimeout,
  JWSInvalid: () => JWSInvalid,
  JWSSignatureVerificationFailed: () => JWSSignatureVerificationFailed,
  JWTClaimValidationFailed: () => JWTClaimValidationFailed,
  JWTExpired: () => JWTExpired,
  JWTInvalid: () => JWTInvalid
});
var JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWEDecryptionFailed, JWEInvalid, JWSInvalid, JWTInvalid, JWKInvalid, JWKSInvalid, JWKSNoMatchingKey, JWKSMultipleMatchingKeys, JWKSTimeout, JWSSignatureVerificationFailed;
var init_errors = __esm({
  "node_modules/jose/dist/browser/util/errors.js"() {
    JOSEError = class extends Error {
      static get code() {
        return "ERR_JOSE_GENERIC";
      }
      constructor(message2) {
        var _a;
        super(message2);
        this.code = "ERR_JOSE_GENERIC";
        this.name = this.constructor.name;
        (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, this.constructor);
      }
    };
    JWTClaimValidationFailed = class extends JOSEError {
      static get code() {
        return "ERR_JWT_CLAIM_VALIDATION_FAILED";
      }
      constructor(message2, claim = "unspecified", reason = "unspecified") {
        super(message2);
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        this.claim = claim;
        this.reason = reason;
      }
    };
    JWTExpired = class extends JOSEError {
      static get code() {
        return "ERR_JWT_EXPIRED";
      }
      constructor(message2, claim = "unspecified", reason = "unspecified") {
        super(message2);
        this.code = "ERR_JWT_EXPIRED";
        this.claim = claim;
        this.reason = reason;
      }
    };
    JOSEAlgNotAllowed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
      static get code() {
        return "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    JOSENotSupported = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
      static get code() {
        return "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    JWEDecryptionFailed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_DECRYPTION_FAILED";
        this.message = "decryption operation failed";
      }
      static get code() {
        return "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    JWEInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_INVALID";
      }
      static get code() {
        return "ERR_JWE_INVALID";
      }
    };
    JWSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_INVALID";
      }
      static get code() {
        return "ERR_JWS_INVALID";
      }
    };
    JWTInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWT_INVALID";
      }
      static get code() {
        return "ERR_JWT_INVALID";
      }
    };
    JWKInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWK_INVALID";
      }
      static get code() {
        return "ERR_JWK_INVALID";
      }
    };
    JWKSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_INVALID";
      }
      static get code() {
        return "ERR_JWKS_INVALID";
      }
    };
    JWKSNoMatchingKey = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_NO_MATCHING_KEY";
        this.message = "no applicable key found in the JSON Web Key Set";
      }
      static get code() {
        return "ERR_JWKS_NO_MATCHING_KEY";
      }
    };
    JWKSMultipleMatchingKeys = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
        this.message = "multiple matching keys found in the JSON Web Key Set";
      }
      static get code() {
        return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      }
    };
    JWKSTimeout = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_TIMEOUT";
        this.message = "request timed out";
      }
      static get code() {
        return "ERR_JWKS_TIMEOUT";
      }
    };
    JWSSignatureVerificationFailed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
        this.message = "signature verification failed";
      }
      static get code() {
        return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/random.js
var random_default;
var init_random = __esm({
  "node_modules/jose/dist/browser/runtime/random.js"() {
    init_webcrypto();
    random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
  }
});

// node_modules/jose/dist/browser/lib/iv.js
function bitLength(alg) {
  switch (alg) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var iv_default;
var init_iv = __esm({
  "node_modules/jose/dist/browser/lib/iv.js"() {
    init_errors();
    init_random();
    iv_default = (alg) => random_default(new Uint8Array(bitLength(alg) >> 3));
  }
});

// node_modules/jose/dist/browser/lib/check_iv_length.js
var checkIvLength, check_iv_length_default;
var init_check_iv_length = __esm({
  "node_modules/jose/dist/browser/lib/check_iv_length.js"() {
    init_errors();
    init_iv();
    checkIvLength = (enc, iv) => {
      if (iv.length << 3 !== bitLength(enc)) {
        throw new JWEInvalid("Invalid Initialization Vector length");
      }
    };
    check_iv_length_default = checkIvLength;
  }
});

// node_modules/jose/dist/browser/runtime/check_cek_length.js
var checkCekLength, check_cek_length_default;
var init_check_cek_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_cek_length.js"() {
    init_errors();
    checkCekLength = (cek, expected) => {
      const actual = cek.byteLength << 3;
      if (actual !== expected) {
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
      }
    };
    check_cek_length_default = checkCekLength;
  }
});

// node_modules/jose/dist/browser/runtime/timing_safe_equal.js
var timingSafeEqual, timing_safe_equal_default;
var init_timing_safe_equal = __esm({
  "node_modules/jose/dist/browser/runtime/timing_safe_equal.js"() {
    timingSafeEqual = (a, b) => {
      if (!(a instanceof Uint8Array)) {
        throw new TypeError("First argument must be a buffer");
      }
      if (!(b instanceof Uint8Array)) {
        throw new TypeError("Second argument must be a buffer");
      }
      if (a.length !== b.length) {
        throw new TypeError("Input buffers must have the same length");
      }
      const len = a.length;
      let out = 0;
      let i = -1;
      while (++i < len) {
        out |= a[i] ^ b[i];
      }
      return out === 0;
    };
    timing_safe_equal_default = timingSafeEqual;
  }
});

// node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usages) {
  if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkSigCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "EdDSA": {
      if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
        throw unusable("Ed25519 or Ed448");
      }
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(key.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(key.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "ECDH": {
      switch (key.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(key.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(key.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const expected = parseInt(alg.slice(9), 10) || 1;
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}
var init_crypto_key = __esm({
  "node_modules/jose/dist/browser/lib/crypto_key.js"() {
  }
});

// node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types2) {
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor && actual.constructor.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
function withAlg(alg, actual, ...types2) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
}
var invalid_key_input_default;
var init_invalid_key_input = __esm({
  "node_modules/jose/dist/browser/lib/invalid_key_input.js"() {
    invalid_key_input_default = (actual, ...types2) => {
      return message("Key must be ", actual, ...types2);
    };
  }
});

// node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default, types;
var init_is_key_like = __esm({
  "node_modules/jose/dist/browser/runtime/is_key_like.js"() {
    init_webcrypto();
    is_key_like_default = (key) => {
      return isCryptoKey(key);
    };
    types = ["CryptoKey"];
  }
});

// node_modules/jose/dist/browser/runtime/decrypt.js
async function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["decrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const expectedTag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  let macCheckPassed;
  try {
    macCheckPassed = timing_safe_equal_default(tag, expectedTag);
  } catch (_a) {
  }
  if (!macCheckPassed) {
    throw new JWEDecryptionFailed();
  }
  let plaintext;
  try {
    plaintext = new Uint8Array(await webcrypto_default.subtle.decrypt({ iv, name: "AES-CBC" }, encKey, ciphertext));
  } catch (_b) {
  }
  if (!plaintext) {
    throw new JWEDecryptionFailed();
  }
  return plaintext;
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "decrypt");
    encKey = cek;
  }
  try {
    return new Uint8Array(await webcrypto_default.subtle.decrypt({
      additionalData: aad,
      iv,
      name: "AES-GCM",
      tagLength: 128
    }, encKey, concat(ciphertext, tag)));
  } catch (_a) {
    throw new JWEDecryptionFailed();
  }
}
var decrypt, decrypt_default;
var init_decrypt = __esm({
  "node_modules/jose/dist/browser/runtime/decrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_timing_safe_equal();
    init_errors();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    decrypt = async (enc, cek, ciphertext, iv, tag, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      check_iv_length_default(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          return cbcDecrypt(enc, cek, ciphertext, iv, tag, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          return gcmDecrypt(enc, cek, ciphertext, iv, tag, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    decrypt_default = decrypt;
  }
});

// node_modules/jose/dist/browser/runtime/zlib.js
var inflate, deflate;
var init_zlib = __esm({
  "node_modules/jose/dist/browser/runtime/zlib.js"() {
    init_errors();
    inflate = async () => {
      throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.');
    };
    deflate = async () => {
      throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');
    };
  }
});

// node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint, is_disjoint_default;
var init_is_disjoint = __esm({
  "node_modules/jose/dist/browser/lib/is_disjoint.js"() {
    isDisjoint = (...headers) => {
      const sources = headers.filter(Boolean);
      if (sources.length === 0 || sources.length === 1) {
        return true;
      }
      let acc;
      for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
          acc = new Set(parameters);
          continue;
        }
        for (const parameter of parameters) {
          if (acc.has(parameter)) {
            return false;
          }
          acc.add(parameter);
        }
      }
      return true;
    };
    is_disjoint_default = isDisjoint;
  }
});

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}
var init_is_object = __esm({
  "node_modules/jose/dist/browser/lib/is_object.js"() {
  }
});

// node_modules/jose/dist/browser/runtime/bogus.js
var bogusWebCrypto, bogus_default;
var init_bogus = __esm({
  "node_modules/jose/dist/browser/runtime/bogus.js"() {
    bogusWebCrypto = [
      { hash: "SHA-256", name: "HMAC" },
      true,
      ["sign"]
    ];
    bogus_default = bogusWebCrypto;
  }
});

// node_modules/jose/dist/browser/runtime/aeskw.js
function checkKeySize(key, alg) {
  if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
    throw new TypeError(`Invalid key size for alg: ${alg}`);
  }
}
function getCryptoKey(key, alg, usage) {
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "AES-KW", true, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
var wrap, unwrap;
var init_aeskw = __esm({
  "node_modules/jose/dist/browser/runtime/aeskw.js"() {
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    wrap = async (alg, key, cek) => {
      const cryptoKey = await getCryptoKey(key, alg, "wrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, cryptoKey, "AES-KW"));
    };
    unwrap = async (alg, key, encryptedKey) => {
      const cryptoKey = await getCryptoKey(key, alg, "unwrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
    };
  }
});

// node_modules/jose/dist/browser/runtime/ecdhes.js
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
  if (!isCryptoKey(publicKey)) {
    throw new TypeError(invalid_key_input_default(publicKey, ...types));
  }
  checkEncCryptoKey(publicKey, "ECDH");
  if (!isCryptoKey(privateKey)) {
    throw new TypeError(invalid_key_input_default(privateKey, ...types));
  }
  checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
  const value = concat(lengthAndInput(encoder.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
  let length;
  if (publicKey.algorithm.name === "X25519") {
    length = 256;
  } else if (publicKey.algorithm.name === "X448") {
    length = 448;
  } else {
    length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  }
  const sharedSecret = new Uint8Array(await webcrypto_default.subtle.deriveBits({
    name: publicKey.algorithm.name,
    public: publicKey
  }, privateKey, length));
  return concatKdf(sharedSecret, keyLength, value);
}
async function generateEpk(key) {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  return webcrypto_default.subtle.generateKey(key.algorithm, true, ["deriveBits"]);
}
function ecdhAllowed(key) {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  return ["P-256", "P-384", "P-521"].includes(key.algorithm.namedCurve) || key.algorithm.name === "X25519" || key.algorithm.name === "X448";
}
var init_ecdhes = __esm({
  "node_modules/jose/dist/browser/runtime/ecdhes.js"() {
    init_buffer_utils();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/jose/dist/browser/lib/check_p2s.js
function checkP2s(p2s2) {
  if (!(p2s2 instanceof Uint8Array) || p2s2.length < 8) {
    throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }
}
var init_check_p2s = __esm({
  "node_modules/jose/dist/browser/lib/check_p2s.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/pbes2kw.js
function getCryptoKey2(key, alg) {
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "PBKDF2", false, ["deriveBits"]);
  }
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, "deriveBits", "deriveKey");
    return key;
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
async function deriveKey2(p2s2, alg, p2c, key) {
  checkP2s(p2s2);
  const salt = p2s(alg, p2s2);
  const keylen = parseInt(alg.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg.slice(8, 11)}`,
    iterations: p2c,
    name: "PBKDF2",
    salt
  };
  const wrapAlg = {
    length: keylen,
    name: "AES-KW"
  };
  const cryptoKey = await getCryptoKey2(key, alg);
  if (cryptoKey.usages.includes("deriveBits")) {
    return new Uint8Array(await webcrypto_default.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
  }
  if (cryptoKey.usages.includes("deriveKey")) {
    return webcrypto_default.subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ["wrapKey", "unwrapKey"]);
  }
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
var encrypt, decrypt2;
var init_pbes2kw = __esm({
  "node_modules/jose/dist/browser/runtime/pbes2kw.js"() {
    init_random();
    init_buffer_utils();
    init_base64url();
    init_aeskw();
    init_check_p2s();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    encrypt = async (alg, key, cek, p2c = 2048, p2s2 = random_default(new Uint8Array(16))) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key);
      const encryptedKey = await wrap(alg.slice(-6), derived, cek);
      return { encryptedKey, p2c, p2s: encode(p2s2) };
    };
    decrypt2 = async (alg, key, encryptedKey, p2c, p2s2) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key);
      return unwrap(alg.slice(-6), derived, encryptedKey);
    };
  }
});

// node_modules/jose/dist/browser/runtime/subtle_rsaes.js
function subtleRsaEs(alg) {
  switch (alg) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/subtle_rsaes.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default;
var init_check_key_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_key_length.js"() {
    check_key_length_default = (alg, key) => {
      if (alg.startsWith("RS") || alg.startsWith("PS")) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
          throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/rsaes.js
var encrypt2, decrypt3;
var init_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/rsaes.js"() {
    init_subtle_rsaes();
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_check_key_length();
    init_invalid_key_input();
    init_is_key_like();
    encrypt2 = async (alg, key, cek) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      checkEncCryptoKey(key, alg, "encrypt", "wrapKey");
      check_key_length_default(alg, key);
      if (key.usages.includes("encrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.encrypt(subtleRsaEs(alg), key, cek));
      }
      if (key.usages.includes("wrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, key, subtleRsaEs(alg)));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
    };
    decrypt3 = async (alg, key, encryptedKey) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      checkEncCryptoKey(key, alg, "decrypt", "unwrapKey");
      check_key_length_default(alg, key);
      if (key.usages.includes("decrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.decrypt(subtleRsaEs(alg), key, encryptedKey));
      }
      if (key.usages.includes("unwrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, key, subtleRsaEs(alg), ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
    };
  }
});

// node_modules/jose/dist/browser/lib/cek.js
function bitLength2(alg) {
  switch (alg) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var cek_default;
var init_cek = __esm({
  "node_modules/jose/dist/browser/lib/cek.js"() {
    init_errors();
    init_random();
    cek_default = (alg) => random_default(new Uint8Array(bitLength2(alg) >> 3));
  }
});

// node_modules/jose/dist/browser/lib/format_pem.js
var format_pem_default;
var init_format_pem = __esm({
  "node_modules/jose/dist/browser/lib/format_pem.js"() {
    format_pem_default = (b64, descriptor) => {
      const newlined = (b64.match(/.{1,64}/g) || []).join("\n");
      return `-----BEGIN ${descriptor}-----
${newlined}
-----END ${descriptor}-----`;
    };
  }
});

// node_modules/jose/dist/browser/runtime/asn1.js
function getElement(seq) {
  let result = [];
  let next = 0;
  while (next < seq.length) {
    let nextPart = parseElement(seq.subarray(next));
    result.push(nextPart);
    next += nextPart.byteLength;
  }
  return result;
}
function parseElement(bytes) {
  let position = 0;
  let tag = bytes[0] & 31;
  position++;
  if (tag === 31) {
    tag = 0;
    while (bytes[position] >= 128) {
      tag = tag * 128 + bytes[position] - 128;
      position++;
    }
    tag = tag * 128 + bytes[position] - 128;
    position++;
  }
  let length = 0;
  if (bytes[position] < 128) {
    length = bytes[position];
    position++;
  } else if (length === 128) {
    length = 0;
    while (bytes[position + length] !== 0 || bytes[position + length + 1] !== 0) {
      if (length > bytes.byteLength) {
        throw new TypeError("invalid indefinite form length");
      }
      length++;
    }
    const byteLength2 = position + length + 2;
    return {
      byteLength: byteLength2,
      contents: bytes.subarray(position, position + length),
      raw: bytes.subarray(0, byteLength2)
    };
  } else {
    let numberOfDigits = bytes[position] & 127;
    position++;
    length = 0;
    for (let i = 0; i < numberOfDigits; i++) {
      length = length * 256 + bytes[position];
      position++;
    }
  }
  const byteLength = position + length;
  return {
    byteLength,
    contents: bytes.subarray(position, byteLength),
    raw: bytes.subarray(0, byteLength)
  };
}
function spkiFromX509(buf) {
  const tbsCertificate = getElement(getElement(parseElement(buf).contents)[0].contents);
  return encodeBase64(tbsCertificate[tbsCertificate[0].raw[0] === 160 ? 6 : 5].raw);
}
function getSPKI(x509) {
  const pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, "");
  const raw = decodeBase64(pem);
  return format_pem_default(spkiFromX509(raw), "PUBLIC KEY");
}
var genericExport, toSPKI, toPKCS8, findOid, getNamedCurve2, genericImport, fromPKCS8, fromSPKI, fromX509;
var init_asn1 = __esm({
  "node_modules/jose/dist/browser/runtime/asn1.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_format_pem();
    init_errors();
    init_is_key_like();
    genericExport = async (keyType, keyFormat, key) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      if (!key.extractable) {
        throw new TypeError("CryptoKey is not extractable");
      }
      if (key.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
      }
      return format_pem_default(encodeBase64(new Uint8Array(await webcrypto_default.subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
    };
    toSPKI = (key) => {
      return genericExport("public", "spki", key);
    };
    toPKCS8 = (key) => {
      return genericExport("private", "pkcs8", key);
    };
    findOid = (keyData, oid, from = 0) => {
      if (from === 0) {
        oid.unshift(oid.length);
        oid.unshift(6);
      }
      let i = keyData.indexOf(oid[0], from);
      if (i === -1)
        return false;
      const sub = keyData.subarray(i, i + oid.length);
      if (sub.length !== oid.length)
        return false;
      return sub.every((value, index) => value === oid[index]) || findOid(keyData, oid, i + 1);
    };
    getNamedCurve2 = (keyData) => {
      switch (true) {
        case findOid(keyData, [42, 134, 72, 206, 61, 3, 1, 7]):
          return "P-256";
        case findOid(keyData, [43, 129, 4, 0, 34]):
          return "P-384";
        case findOid(keyData, [43, 129, 4, 0, 35]):
          return "P-521";
        case findOid(keyData, [43, 101, 110]):
          return "X25519";
        case findOid(keyData, [43, 101, 111]):
          return "X448";
        case findOid(keyData, [43, 101, 112]):
          return "Ed25519";
        case findOid(keyData, [43, 101, 113]):
          return "Ed448";
        default:
          throw new JOSENotSupported("Invalid or unsupported EC Key Curve or OKP Key Sub Type");
      }
    };
    genericImport = async (replace, keyFormat, pem, alg, options) => {
      var _a;
      let algorithm;
      let keyUsages;
      const keyData = new Uint8Array(atob(pem.replace(replace, "")).split("").map((c) => c.charCodeAt(0)));
      const isPublic = keyFormat === "spki";
      switch (alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${alg.slice(-3)}` };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${alg.slice(-3)}` };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
          };
          keyUsages = isPublic ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
          break;
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          const namedCurve = getNamedCurve2(keyData);
          algorithm = namedCurve.startsWith("P-") ? { name: "ECDH", namedCurve } : { name: namedCurve };
          keyUsages = isPublic ? [] : ["deriveBits"];
          break;
        }
        case "EdDSA":
          algorithm = { name: getNamedCurve2(keyData) };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported "alg" (Algorithm) value');
      }
      return webcrypto_default.subtle.importKey(keyFormat, keyData, algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages);
    };
    fromPKCS8 = (pem, alg, options) => {
      return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", pem, alg, options);
    };
    fromSPKI = (pem, alg, options) => {
      return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", pem, alg, options);
    };
    fromX509 = (pem, alg, options) => {
      let spki;
      try {
        spki = getSPKI(pem);
      } catch (cause) {
        throw new TypeError("Failed to parse the X.509 certificate", { cause });
      }
      return fromSPKI(spki, alg, options);
    };
  }
});

// node_modules/jose/dist/browser/runtime/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "oct": {
      switch (jwk.alg) {
        case "HS256":
        case "HS384":
        case "HS512":
          algorithm = { name: "HMAC", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = ["sign", "verify"];
          break;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          throw new JOSENotSupported(`${jwk.alg} keys cannot be imported as CryptoKey instances`);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
          algorithm = { name: "AES-GCM" };
          keyUsages = ["encrypt", "decrypt"];
          break;
        case "A128KW":
        case "A192KW":
        case "A256KW":
          algorithm = { name: "AES-KW" };
          keyUsages = ["wrapKey", "unwrapKey"];
          break;
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
          algorithm = { name: "PBKDF2" };
          keyUsages = ["deriveBits"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var parse, jwk_to_key_default;
var init_jwk_to_key = __esm({
  "node_modules/jose/dist/browser/runtime/jwk_to_key.js"() {
    init_webcrypto();
    init_errors();
    init_base64url();
    parse = async (jwk) => {
      var _a, _b;
      if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
      }
      const { algorithm, keyUsages } = subtleMapping(jwk);
      const rest = [
        algorithm,
        (_a = jwk.ext) !== null && _a !== void 0 ? _a : false,
        (_b = jwk.key_ops) !== null && _b !== void 0 ? _b : keyUsages
      ];
      if (algorithm.name === "PBKDF2") {
        return webcrypto_default.subtle.importKey("raw", decode(jwk.k), ...rest);
      }
      const keyData = { ...jwk };
      delete keyData.alg;
      delete keyData.use;
      return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
    };
    jwk_to_key_default = parse;
  }
});

// node_modules/jose/dist/browser/key/import.js
async function importSPKI(spki, alg, options) {
  if (typeof spki !== "string" || spki.indexOf("-----BEGIN PUBLIC KEY-----") !== 0) {
    throw new TypeError('"spki" must be SPKI formatted string');
  }
  return fromSPKI(spki, alg, options);
}
async function importX509(x509, alg, options) {
  if (typeof x509 !== "string" || x509.indexOf("-----BEGIN CERTIFICATE-----") !== 0) {
    throw new TypeError('"x509" must be X.509 formatted string');
  }
  return fromX509(x509, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
  if (typeof pkcs8 !== "string" || pkcs8.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) {
    throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
  }
  return fromPKCS8(pkcs8, alg, options);
}
async function importJWK(jwk, alg, octAsKeyObject) {
  var _a;
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg || (alg = jwk.alg);
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      octAsKeyObject !== null && octAsKeyObject !== void 0 ? octAsKeyObject : octAsKeyObject = jwk.ext !== true;
      if (octAsKeyObject) {
        return jwk_to_key_default({ ...jwk, alg, ext: (_a = jwk.ext) !== null && _a !== void 0 ? _a : false });
      }
      return decode(jwk.k);
    case "RSA":
      if (jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}
var init_import = __esm({
  "node_modules/jose/dist/browser/key/import.js"() {
    init_base64url();
    init_asn1();
    init_jwk_to_key();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/check_key_type.js
var symmetricTypeCheck, asymmetricTypeCheck, checkKeyType, check_key_type_default;
var init_check_key_type = __esm({
  "node_modules/jose/dist/browser/lib/check_key_type.js"() {
    init_invalid_key_input();
    init_is_key_like();
    symmetricTypeCheck = (alg, key) => {
      if (key instanceof Uint8Array)
        return;
      if (!is_key_like_default(key)) {
        throw new TypeError(withAlg(alg, key, ...types, "Uint8Array"));
      }
      if (key.type !== "secret") {
        throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
      }
    };
    asymmetricTypeCheck = (alg, key, usage) => {
      if (!is_key_like_default(key)) {
        throw new TypeError(withAlg(alg, key, ...types));
      }
      if (key.type === "secret") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
      }
      if (usage === "sign" && key.type === "public") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
      }
      if (usage === "decrypt" && key.type === "public") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
      }
      if (key.algorithm && usage === "verify" && key.type === "private") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
      }
      if (key.algorithm && usage === "encrypt" && key.type === "private") {
        throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
      }
    };
    checkKeyType = (alg, key, usage) => {
      const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
      if (symmetric) {
        symmetricTypeCheck(alg, key);
      } else {
        asymmetricTypeCheck(alg, key, usage);
      }
    };
    check_key_type_default = checkKeyType;
  }
});

// node_modules/jose/dist/browser/runtime/encrypt.js
async function cbcEncrypt(enc, plaintext, cek, iv, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["encrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const ciphertext = new Uint8Array(await webcrypto_default.subtle.encrypt({
    iv,
    name: "AES-CBC"
  }, encKey, plaintext));
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const tag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  return { ciphertext, tag };
}
async function gcmEncrypt(enc, plaintext, cek, iv, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "encrypt");
    encKey = cek;
  }
  const encrypted = new Uint8Array(await webcrypto_default.subtle.encrypt({
    additionalData: aad,
    iv,
    name: "AES-GCM",
    tagLength: 128
  }, encKey, plaintext));
  const tag = encrypted.slice(-16);
  const ciphertext = encrypted.slice(0, -16);
  return { ciphertext, tag };
}
var encrypt3, encrypt_default;
var init_encrypt = __esm({
  "node_modules/jose/dist/browser/runtime/encrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_errors();
    init_is_key_like();
    encrypt3 = async (enc, plaintext, cek, iv, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      check_iv_length_default(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          return cbcEncrypt(enc, plaintext, cek, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          return gcmEncrypt(enc, plaintext, cek, iv, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    encrypt_default = encrypt3;
  }
});

// node_modules/jose/dist/browser/lib/aesgcmkw.js
async function wrap2(alg, key, cek, iv) {
  const jweAlgorithm = alg.slice(0, 7);
  iv || (iv = iv_default(jweAlgorithm));
  const { ciphertext: encryptedKey, tag } = await encrypt_default(jweAlgorithm, cek, key, iv, new Uint8Array(0));
  return { encryptedKey, iv: encode(iv), tag: encode(tag) };
}
async function unwrap2(alg, key, encryptedKey, iv, tag) {
  const jweAlgorithm = alg.slice(0, 7);
  return decrypt_default(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
}
var init_aesgcmkw = __esm({
  "node_modules/jose/dist/browser/lib/aesgcmkw.js"() {
    init_encrypt();
    init_decrypt();
    init_iv();
    init_base64url();
  }
});

// node_modules/jose/dist/browser/lib/decrypt_key_management.js
async function decryptKeyManagement(alg, key, encryptedKey, joseHeader, options) {
  check_key_type_default(alg, key, "decrypt");
  switch (alg) {
    case "dir": {
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return key;
    }
    case "ECDH-ES":
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
      if (!ecdhAllowed(key))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const epk = await importJWK(joseHeader.epk, alg);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== "string")
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        try {
          partyUInfo = decode(joseHeader.apu);
        } catch (_a) {
          throw new JWEInvalid("Failed to base64url decode the apu");
        }
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== "string")
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        try {
          partyVInfo = decode(joseHeader.apv);
        } catch (_b) {
          throw new JWEInvalid("Failed to base64url decode the apv");
        }
      }
      const sharedSecret = await deriveKey(epk, key, alg === "ECDH-ES" ? joseHeader.enc : alg, alg === "ECDH-ES" ? bitLength2(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
      if (alg === "ECDH-ES")
        return sharedSecret;
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg.slice(-6), sharedSecret, encryptedKey);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt3(alg, key, encryptedKey);
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.p2c !== "number")
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      const p2cLimit = (options === null || options === void 0 ? void 0 : options.maxPBES2Count) || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
      if (typeof joseHeader.p2s !== "string")
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      let p2s2;
      try {
        p2s2 = decode(joseHeader.p2s);
      } catch (_c3) {
        throw new JWEInvalid("Failed to base64url decode the p2s");
      }
      return decrypt2(alg, key, encryptedKey, joseHeader.p2c, p2s2);
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg, key, encryptedKey);
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.iv !== "string")
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
      if (typeof joseHeader.tag !== "string")
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
      let iv;
      try {
        iv = decode(joseHeader.iv);
      } catch (_d) {
        throw new JWEInvalid("Failed to base64url decode the iv");
      }
      let tag;
      try {
        tag = decode(joseHeader.tag);
      } catch (_e) {
        throw new JWEInvalid("Failed to base64url decode the tag");
      }
      return unwrap2(alg, key, encryptedKey, iv, tag);
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
}
var decrypt_key_management_default;
var init_decrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/decrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_errors();
    init_cek();
    init_import();
    init_check_key_type();
    init_is_object();
    init_aesgcmkw();
    decrypt_key_management_default = decryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    } else if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default;
var init_validate_crit = __esm({
  "node_modules/jose/dist/browser/lib/validate_crit.js"() {
    init_errors();
    validate_crit_default = validateCrit;
  }
});

// node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms, validate_algorithms_default;
var init_validate_algorithms = __esm({
  "node_modules/jose/dist/browser/lib/validate_algorithms.js"() {
    validateAlgorithms = (option, algorithms) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    };
    validate_algorithms_default = validateAlgorithms;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/decrypt.js
async function flattenedDecrypt(jwe, key, options) {
  var _a;
  if (!isObject(jwe)) {
    throw new JWEInvalid("Flattened JWE must be an object");
  }
  if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
    throw new JWEInvalid("JOSE Header missing");
  }
  if (typeof jwe.iv !== "string") {
    throw new JWEInvalid("JWE Initialization Vector missing or incorrect type");
  }
  if (typeof jwe.ciphertext !== "string") {
    throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
  }
  if (typeof jwe.tag !== "string") {
    throw new JWEInvalid("JWE Authentication Tag missing or incorrect type");
  }
  if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
    throw new JWEInvalid("JWE Protected Header incorrect type");
  }
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
    throw new JWEInvalid("JWE Encrypted Key incorrect type");
  }
  if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
    throw new JWEInvalid("JWE AAD incorrect type");
  }
  if (jwe.header !== void 0 && !isObject(jwe.header)) {
    throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
  }
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected)) {
    throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
  }
  let parsedProt;
  if (jwe.protected) {
    try {
      const protectedHeader2 = decode(jwe.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader2));
    } catch (_b) {
      throw new JWEInvalid("JWE Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jwe.header, jwe.unprotected)) {
    throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected
  };
  validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
  if (joseHeader.zip !== void 0) {
    if (!parsedProt || !parsedProt.zip) {
      throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
    }
    if (joseHeader.zip !== "DEF") {
      throw new JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
    }
  }
  const { alg, enc } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
  }
  if (typeof enc !== "string" || !enc) {
    throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
  }
  const keyManagementAlgorithms = options && validate_algorithms_default("keyManagementAlgorithms", options.keyManagementAlgorithms);
  const contentEncryptionAlgorithms = options && validate_algorithms_default("contentEncryptionAlgorithms", options.contentEncryptionAlgorithms);
  if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
  }
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
    throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter not allowed');
  }
  let encryptedKey;
  if (jwe.encrypted_key !== void 0) {
    try {
      encryptedKey = decode(jwe.encrypted_key);
    } catch (_c3) {
      throw new JWEInvalid("Failed to base64url decode the encrypted_key");
    }
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jwe);
    resolvedKey = true;
  }
  let cek;
  try {
    cek = await decrypt_key_management_default(alg, key, encryptedKey, joseHeader, options);
  } catch (err) {
    if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
      throw err;
    }
    cek = cek_default(enc);
  }
  let iv;
  let tag;
  try {
    iv = decode(jwe.iv);
  } catch (_d) {
    throw new JWEInvalid("Failed to base64url decode the iv");
  }
  try {
    tag = decode(jwe.tag);
  } catch (_e) {
    throw new JWEInvalid("Failed to base64url decode the tag");
  }
  const protectedHeader = encoder.encode((_a = jwe.protected) !== null && _a !== void 0 ? _a : "");
  let additionalData;
  if (jwe.aad !== void 0) {
    additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(jwe.aad));
  } else {
    additionalData = protectedHeader;
  }
  let ciphertext;
  try {
    ciphertext = decode(jwe.ciphertext);
  } catch (_f) {
    throw new JWEInvalid("Failed to base64url decode the ciphertext");
  }
  let plaintext = await decrypt_default(enc, cek, ciphertext, iv, tag, additionalData);
  if (joseHeader.zip === "DEF") {
    plaintext = await ((options === null || options === void 0 ? void 0 : options.inflateRaw) || inflate)(plaintext);
  }
  const result = { plaintext };
  if (jwe.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jwe.aad !== void 0) {
    try {
      result.additionalAuthenticatedData = decode(jwe.aad);
    } catch (_g) {
      throw new JWEInvalid("Failed to base64url decode the aad");
    }
  }
  if (jwe.unprotected !== void 0) {
    result.sharedUnprotectedHeader = jwe.unprotected;
  }
  if (jwe.header !== void 0) {
    result.unprotectedHeader = jwe.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}
var init_decrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/decrypt.js"() {
    init_base64url();
    init_decrypt();
    init_zlib();
    init_errors();
    init_is_disjoint();
    init_is_object();
    init_decrypt_key_management();
    init_buffer_utils();
    init_cek();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/jose/dist/browser/jwe/compact/decrypt.js
async function compactDecrypt(jwe, key, options) {
  if (jwe instanceof Uint8Array) {
    jwe = decoder.decode(jwe);
  }
  if (typeof jwe !== "string") {
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length } = jwe.split(".");
  if (length !== 5) {
    throw new JWEInvalid("Invalid Compact JWE");
  }
  const decrypted = await flattenedDecrypt({
    ciphertext,
    iv: iv || void 0,
    protected: protectedHeader || void 0,
    tag: tag || void 0,
    encrypted_key: encryptedKey || void 0
  }, key, options);
  const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/decrypt.js"() {
    init_decrypt2();
    init_errors();
    init_buffer_utils();
  }
});

// node_modules/jose/dist/browser/jwe/general/decrypt.js
async function generalDecrypt(jwe, key, options) {
  if (!isObject(jwe)) {
    throw new JWEInvalid("General JWE must be an object");
  }
  if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(isObject)) {
    throw new JWEInvalid("JWE Recipients missing or incorrect type");
  }
  if (!jwe.recipients.length) {
    throw new JWEInvalid("JWE Recipients has no members");
  }
  for (const recipient of jwe.recipients) {
    try {
      return await flattenedDecrypt({
        aad: jwe.aad,
        ciphertext: jwe.ciphertext,
        encrypted_key: recipient.encrypted_key,
        header: recipient.header,
        iv: jwe.iv,
        protected: jwe.protected,
        tag: jwe.tag,
        unprotected: jwe.unprotected
      }, key, options);
    } catch (_a) {
    }
  }
  throw new JWEDecryptionFailed();
}
var init_decrypt4 = __esm({
  "node_modules/jose/dist/browser/jwe/general/decrypt.js"() {
    init_decrypt2();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/runtime/key_to_jwk.js
var keyToJWK, key_to_jwk_default;
var init_key_to_jwk = __esm({
  "node_modules/jose/dist/browser/runtime/key_to_jwk.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_is_key_like();
    keyToJWK = async (key) => {
      if (key instanceof Uint8Array) {
        return {
          kty: "oct",
          k: encode(key)
        };
      }
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
      }
      if (!key.extractable) {
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
      }
      const { ext, key_ops, alg, use, ...jwk } = await webcrypto_default.subtle.exportKey("jwk", key);
      return jwk;
    };
    key_to_jwk_default = keyToJWK;
  }
});

// node_modules/jose/dist/browser/key/export.js
async function exportSPKI(key) {
  return toSPKI(key);
}
async function exportPKCS8(key) {
  return toPKCS8(key);
}
async function exportJWK(key) {
  return key_to_jwk_default(key);
}
var init_export = __esm({
  "node_modules/jose/dist/browser/key/export.js"() {
    init_asn1();
    init_asn1();
    init_key_to_jwk();
  }
});

// node_modules/jose/dist/browser/lib/encrypt_key_management.js
async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
  let encryptedKey;
  let parameters;
  let cek;
  check_key_type_default(alg, key, "encrypt");
  switch (alg) {
    case "dir": {
      cek = key;
      break;
    }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!ecdhAllowed(key)) {
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      }
      const { apu, apv } = providedParameters;
      let { epk: ephemeralKey } = providedParameters;
      ephemeralKey || (ephemeralKey = (await generateEpk(key)).privateKey);
      const { x, y, crv, kty } = await exportJWK(ephemeralKey);
      const sharedSecret = await deriveKey(key, ephemeralKey, alg === "ECDH-ES" ? enc : alg, alg === "ECDH-ES" ? bitLength2(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
      parameters = { epk: { x, crv, kty } };
      if (kty === "EC")
        parameters.epk.y = y;
      if (apu)
        parameters.apu = encode(apu);
      if (apv)
        parameters.apv = encode(apv);
      if (alg === "ECDH-ES") {
        cek = sharedSecret;
        break;
      }
      cek = providedCek || cek_default(enc);
      const kwAlg = alg.slice(-6);
      encryptedKey = await wrap(kwAlg, sharedSecret, cek);
      break;
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await encrypt2(alg, key, cek);
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      cek = providedCek || cek_default(enc);
      const { p2c, p2s: p2s2 } = providedParameters;
      ({ encryptedKey, ...parameters } = await encrypt(alg, key, cek, p2c, p2s2));
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await wrap(alg, key, cek);
      break;
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      cek = providedCek || cek_default(enc);
      const { iv } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap2(alg, key, cek, iv));
      break;
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
  return { cek, encryptedKey, parameters };
}
var encrypt_key_management_default;
var init_encrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/encrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_cek();
    init_errors();
    init_export();
    init_check_key_type();
    init_aesgcmkw();
    encrypt_key_management_default = encryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/encrypt.js
var unprotected, FlattenedEncrypt;
var init_encrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/encrypt.js"() {
    init_base64url();
    init_encrypt();
    init_zlib();
    init_iv();
    init_encrypt_key_management();
    init_errors();
    init_is_disjoint();
    init_buffer_utils();
    init_validate_crit();
    unprotected = Symbol();
    FlattenedEncrypt = class {
      constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
          throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = plaintext;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
          throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
          throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== void 0) {
          if (!this._protectedHeader || !this._protectedHeader.zip) {
            throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
          }
          if (joseHeader.zip !== "DEF") {
            throw new JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
          }
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
          throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (alg === "dir") {
          if (this._cek) {
            throw new TypeError("setContentEncryptionKey cannot be called when using Direct Encryption");
          }
        } else if (alg === "ECDH-ES") {
          if (this._cek) {
            throw new TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement");
          }
        }
        let cek;
        {
          let parameters;
          ({ cek, encryptedKey, parameters } = await encrypt_key_management_default(alg, enc, key, this._cek, this._keyManagementParameters));
          if (parameters) {
            if (options && unprotected in options) {
              if (!this._unprotectedHeader) {
                this.setUnprotectedHeader(parameters);
              } else {
                this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
              }
            } else {
              if (!this._protectedHeader) {
                this.setProtectedHeader(parameters);
              } else {
                this._protectedHeader = { ...this._protectedHeader, ...parameters };
              }
            }
          }
        }
        this._iv || (this._iv = iv_default(enc));
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
          protectedHeader = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder.encode("");
        }
        if (this._aad) {
          aadMember = encode(this._aad);
          additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(aadMember));
        } else {
          additionalData = protectedHeader;
        }
        let ciphertext;
        let tag;
        if (joseHeader.zip === "DEF") {
          const deflated = await ((options === null || options === void 0 ? void 0 : options.deflateRaw) || deflate)(this._plaintext);
          ({ ciphertext, tag } = await encrypt_default(enc, deflated, cek, this._iv, additionalData));
        } else {
          ;
          ({ ciphertext, tag } = await encrypt_default(enc, this._plaintext, cek, this._iv, additionalData));
        }
        const jwe = {
          ciphertext: encode(ciphertext),
          iv: encode(this._iv),
          tag: encode(tag)
        };
        if (encryptedKey) {
          jwe.encrypted_key = encode(encryptedKey);
        }
        if (aadMember) {
          jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
          jwe.protected = decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
          jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
          jwe.header = this._unprotectedHeader;
        }
        return jwe;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwe/general/encrypt.js
var IndividualRecipient, GeneralEncrypt;
var init_encrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/general/encrypt.js"() {
    init_encrypt2();
    init_errors();
    init_cek();
    init_is_disjoint();
    init_encrypt_key_management();
    init_base64url();
    init_validate_crit();
    IndividualRecipient = class {
      constructor(enc, key, options) {
        this.parent = enc;
        this.key = key;
        this.options = options;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addRecipient(...args) {
        return this.parent.addRecipient(...args);
      }
      encrypt(...args) {
        return this.parent.encrypt(...args);
      }
      done() {
        return this.parent;
      }
    };
    GeneralEncrypt = class {
      constructor(plaintext) {
        this._recipients = [];
        this._plaintext = plaintext;
      }
      addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, { crit: options === null || options === void 0 ? void 0 : options.crit });
        this._recipients.push(recipient);
        return recipient;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      async encrypt(options) {
        var _a, _b, _c3;
        if (!this._recipients.length) {
          throw new JWEInvalid("at least one recipient must be added");
        }
        options = { deflateRaw: options === null || options === void 0 ? void 0 : options.deflateRaw };
        if (this._recipients.length === 1) {
          const [recipient] = this._recipients;
          const flattened = await new FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).encrypt(recipient.key, { ...recipient.options, ...options });
          let jwe2 = {
            ciphertext: flattened.ciphertext,
            iv: flattened.iv,
            recipients: [{}],
            tag: flattened.tag
          };
          if (flattened.aad)
            jwe2.aad = flattened.aad;
          if (flattened.protected)
            jwe2.protected = flattened.protected;
          if (flattened.unprotected)
            jwe2.unprotected = flattened.unprotected;
          if (flattened.encrypted_key)
            jwe2.recipients[0].encrypted_key = flattened.encrypted_key;
          if (flattened.header)
            jwe2.recipients[0].header = flattened.header;
          return jwe2;
        }
        let enc;
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, recipient.unprotectedHeader)) {
            throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
          }
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const { alg } = joseHeader;
          if (typeof alg !== "string" || !alg) {
            throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
          }
          if (alg === "dir" || alg === "ECDH-ES") {
            throw new JWEInvalid('"dir" and "ECDH-ES" alg may only be used with a single recipient');
          }
          if (typeof joseHeader.enc !== "string" || !joseHeader.enc) {
            throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
          }
          if (!enc) {
            enc = joseHeader.enc;
          } else if (enc !== joseHeader.enc) {
            throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
          }
          validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), recipient.options.crit, this._protectedHeader, joseHeader);
          if (joseHeader.zip !== void 0) {
            if (!this._protectedHeader || !this._protectedHeader.zip) {
              throw new JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
            }
          }
        }
        const cek = cek_default(enc);
        let jwe = {
          ciphertext: "",
          iv: "",
          recipients: [],
          tag: ""
        };
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          const target = {};
          jwe.recipients.push(target);
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const p2c = joseHeader.alg.startsWith("PBES2") ? 2048 + i : void 0;
          if (i === 0) {
            const flattened = await new FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(cek).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).setKeyManagementParameters({ p2c }).encrypt(recipient.key, {
              ...recipient.options,
              ...options,
              [unprotected]: true
            });
            jwe.ciphertext = flattened.ciphertext;
            jwe.iv = flattened.iv;
            jwe.tag = flattened.tag;
            if (flattened.aad)
              jwe.aad = flattened.aad;
            if (flattened.protected)
              jwe.protected = flattened.protected;
            if (flattened.unprotected)
              jwe.unprotected = flattened.unprotected;
            target.encrypted_key = flattened.encrypted_key;
            if (flattened.header)
              target.header = flattened.header;
            continue;
          }
          const { encryptedKey, parameters } = await encrypt_key_management_default(((_a = recipient.unprotectedHeader) === null || _a === void 0 ? void 0 : _a.alg) || ((_b = this._protectedHeader) === null || _b === void 0 ? void 0 : _b.alg) || ((_c3 = this._unprotectedHeader) === null || _c3 === void 0 ? void 0 : _c3.alg), enc, recipient.key, cek, { p2c });
          target.encrypted_key = encode(encryptedKey);
          if (recipient.unprotectedHeader || parameters)
            target.header = { ...recipient.unprotectedHeader, ...parameters };
        }
        return jwe;
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/subtle_dsa.js
function subtleDsa(alg, algorithm) {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "EdDSA":
      return { name: algorithm.name };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_dsa = __esm({
  "node_modules/jose/dist/browser/runtime/subtle_dsa.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
function getCryptoKey3(alg, key, usage) {
  if (isCryptoKey(key)) {
    checkSigCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, ...types));
    }
    return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
var init_get_sign_verify_key = __esm({
  "node_modules/jose/dist/browser/runtime/get_sign_verify_key.js"() {
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/jose/dist/browser/runtime/verify.js
var verify, verify_default;
var init_verify = __esm({
  "node_modules/jose/dist/browser/runtime/verify.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
    verify = async (alg, key, signature, data) => {
      const cryptoKey = await getCryptoKey3(alg, key, "verify");
      check_key_length_default(alg, cryptoKey);
      const algorithm = subtleDsa(alg, cryptoKey.algorithm);
      try {
        return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
      } catch (_a) {
        return false;
      }
    };
    verify_default = verify;
  }
});

// node_modules/jose/dist/browser/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  var _a;
  if (!isObject(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !isObject(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch (_b) {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode((_a = jws.protected) !== null && _a !== void 0 ? _a : ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode(jws.signature);
  } catch (_c3) {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const verified = await verify_default(alg, key, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    try {
      payload = decode(jws.payload);
    } catch (_d) {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}
var init_verify2 = __esm({
  "node_modules/jose/dist/browser/jws/flattened/verify.js"() {
    init_base64url();
    init_verify();
    init_errors();
    init_buffer_utils();
    init_is_disjoint();
    init_is_object();
    init_check_key_type();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/jose/dist/browser/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var init_verify3 = __esm({
  "node_modules/jose/dist/browser/jws/compact/verify.js"() {
    init_verify2();
    init_errors();
    init_buffer_utils();
  }
});

// node_modules/jose/dist/browser/jws/general/verify.js
async function generalVerify(jws, key, options) {
  if (!isObject(jws)) {
    throw new JWSInvalid("General JWS must be an object");
  }
  if (!Array.isArray(jws.signatures) || !jws.signatures.every(isObject)) {
    throw new JWSInvalid("JWS Signatures missing or incorrect type");
  }
  for (const signature of jws.signatures) {
    try {
      return await flattenedVerify({
        header: signature.header,
        payload: jws.payload,
        protected: signature.protected,
        signature: signature.signature
      }, key, options);
    } catch (_a) {
    }
  }
  throw new JWSSignatureVerificationFailed();
}
var init_verify4 = __esm({
  "node_modules/jose/dist/browser/jws/general/verify.js"() {
    init_verify2();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/epoch.js
var epoch_default;
var init_epoch = __esm({
  "node_modules/jose/dist/browser/lib/epoch.js"() {
    epoch_default = (date) => Math.floor(date.getTime() / 1e3);
  }
});

// node_modules/jose/dist/browser/lib/secs.js
var minute, hour, day, week, year, REGEX, secs_default;
var init_secs = __esm({
  "node_modules/jose/dist/browser/lib/secs.js"() {
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    year = day * 365.25;
    REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
    secs_default = (str) => {
      const matched = REGEX.exec(str);
      if (!matched) {
        throw new TypeError("Invalid time period format");
      }
      const value = parseFloat(matched[1]);
      const unit = matched[2].toLowerCase();
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          return Math.round(value);
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          return Math.round(value * minute);
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          return Math.round(value * hour);
        case "day":
        case "days":
        case "d":
          return Math.round(value * day);
        case "week":
        case "weeks":
        case "w":
          return Math.round(value * week);
        default:
          return Math.round(value * year);
      }
    };
  }
});

// node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp, checkAudiencePresence, jwt_claims_set_default;
var init_jwt_claims_set = __esm({
  "node_modules/jose/dist/browser/lib/jwt_claims_set.js"() {
    init_errors();
    init_buffer_utils();
    init_epoch();
    init_secs();
    init_is_object();
    normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
    checkAudiencePresence = (audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
      }
      return false;
    };
    jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
      const { typ } = options;
      if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
      }
      let payload;
      try {
        payload = JSON.parse(decoder.decode(encodedPayload));
      } catch (_a) {
      }
      if (!isObject(payload)) {
        throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
      }
      const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
      if (maxTokenAge !== void 0)
        requiredClaims.push("iat");
      if (audience !== void 0)
        requiredClaims.push("aud");
      if (subject !== void 0)
        requiredClaims.push("sub");
      if (issuer !== void 0)
        requiredClaims.push("iss");
      for (const claim of new Set(requiredClaims.reverse())) {
        if (!(claim in payload)) {
          throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, claim, "missing");
        }
      }
      if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
      }
      if (subject && payload.sub !== subject) {
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
      }
      if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
      }
      let tolerance;
      switch (typeof options.clockTolerance) {
        case "string":
          tolerance = secs_default(options.clockTolerance);
          break;
        case "number":
          tolerance = options.clockTolerance;
          break;
        case "undefined":
          tolerance = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate } = options;
      const now = epoch_default(currentDate || /* @__PURE__ */ new Date());
      if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
        throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
      }
      if (payload.nbf !== void 0) {
        if (typeof payload.nbf !== "number") {
          throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
        }
        if (payload.nbf > now + tolerance) {
          throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
        }
      }
      if (payload.exp !== void 0) {
        if (typeof payload.exp !== "number") {
          throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
        }
        if (payload.exp <= now - tolerance) {
          throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
        }
      }
      if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
        if (age - tolerance > max) {
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
        }
      }
      return payload;
    };
  }
});

// node_modules/jose/dist/browser/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  var _a;
  const verified = await compactVerify(jwt, key, options);
  if (((_a = verified.protectedHeader.crit) === null || _a === void 0 ? void 0 : _a.includes("b64")) && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var init_verify5 = __esm({
  "node_modules/jose/dist/browser/jwt/verify.js"() {
    init_verify3();
    init_jwt_claims_set();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwt/decrypt.js
async function jwtDecrypt(jwt, key, options) {
  const decrypted = await compactDecrypt(jwt, key, options);
  const payload = jwt_claims_set_default(decrypted.protectedHeader, decrypted.plaintext, options);
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
    throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
  }
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
    throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
  }
  if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
    throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
  }
  const result = { payload, protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt5 = __esm({
  "node_modules/jose/dist/browser/jwt/decrypt.js"() {
    init_decrypt3();
    init_jwt_claims_set();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwe/compact/encrypt.js
var CompactEncrypt;
var init_encrypt4 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/encrypt.js"() {
    init_encrypt2();
    CompactEncrypt = class {
      constructor(plaintext) {
        this._flattened = new FlattenedEncrypt(plaintext);
      }
      setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
      }
      setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
      }
      async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join(".");
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/sign.js
var sign, sign_default;
var init_sign = __esm({
  "node_modules/jose/dist/browser/runtime/sign.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
    sign = async (alg, key, data) => {
      const cryptoKey = await getCryptoKey3(alg, key, "sign");
      check_key_length_default(alg, cryptoKey);
      const signature = await webcrypto_default.subtle.sign(subtleDsa(alg, cryptoKey.algorithm), cryptoKey, data);
      return new Uint8Array(signature);
    };
    sign_default = sign;
  }
});

// node_modules/jose/dist/browser/jws/flattened/sign.js
var FlattenedSign;
var init_sign2 = __esm({
  "node_modules/jose/dist/browser/jws/flattened/sign.js"() {
    init_base64url();
    init_sign();
    init_is_disjoint();
    init_errors();
    init_buffer_utils();
    init_check_key_type();
    init_validate_crit();
    FlattenedSign = class {
      constructor(payload) {
        if (!(payload instanceof Uint8Array)) {
          throw new TypeError("payload must be an instance of Uint8Array");
        }
        this._payload = payload;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
          throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader)) {
          throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader
        };
        const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has("b64")) {
          b64 = this._protectedHeader.b64;
          if (typeof b64 !== "boolean") {
            throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
          }
        }
        const { alg } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        check_key_type_default(alg, key, "sign");
        let payload = this._payload;
        if (b64) {
          payload = encoder.encode(encode(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
          protectedHeader = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder.encode("");
        }
        const data = concat(protectedHeader, encoder.encode("."), payload);
        const signature = await sign_default(alg, key, data);
        const jws = {
          signature: encode(signature),
          payload: ""
        };
        if (b64) {
          jws.payload = decoder.decode(payload);
        }
        if (this._unprotectedHeader) {
          jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
          jws.protected = decoder.decode(protectedHeader);
        }
        return jws;
      }
    };
  }
});

// node_modules/jose/dist/browser/jws/compact/sign.js
var CompactSign;
var init_sign3 = __esm({
  "node_modules/jose/dist/browser/jws/compact/sign.js"() {
    init_sign2();
    CompactSign = class {
      constructor(payload) {
        this._flattened = new FlattenedSign(payload);
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === void 0) {
          throw new TypeError("use the flattened module for creating JWS with b64: false");
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
      }
    };
  }
});

// node_modules/jose/dist/browser/jws/general/sign.js
var IndividualSignature, GeneralSign;
var init_sign4 = __esm({
  "node_modules/jose/dist/browser/jws/general/sign.js"() {
    init_sign2();
    init_errors();
    IndividualSignature = class {
      constructor(sig, key, options) {
        this.parent = sig;
        this.key = key;
        this.options = options;
      }
      setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this.protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addSignature(...args) {
        return this.parent.addSignature(...args);
      }
      sign(...args) {
        return this.parent.sign(...args);
      }
      done() {
        return this.parent;
      }
    };
    GeneralSign = class {
      constructor(payload) {
        this._signatures = [];
        this._payload = payload;
      }
      addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this._signatures.push(signature);
        return signature;
      }
      async sign() {
        if (!this._signatures.length) {
          throw new JWSInvalid("at least one signature must be added");
        }
        const jws = {
          signatures: [],
          payload: ""
        };
        for (let i = 0; i < this._signatures.length; i++) {
          const signature = this._signatures[i];
          const flattened = new FlattenedSign(this._payload);
          flattened.setProtectedHeader(signature.protectedHeader);
          flattened.setUnprotectedHeader(signature.unprotectedHeader);
          const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
          if (i === 0) {
            jws.payload = payload;
          } else if (jws.payload !== payload) {
            throw new JWSInvalid("inconsistent use of JWS Unencoded Payload (RFC7797)");
          }
          jws.signatures.push(rest);
        }
        return jws;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/produce.js
var ProduceJWT;
var init_produce = __esm({
  "node_modules/jose/dist/browser/jwt/produce.js"() {
    init_epoch();
    init_is_object();
    init_secs();
    ProduceJWT = class {
      constructor(payload) {
        if (!isObject(payload)) {
          throw new TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = payload;
      }
      setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
      }
      setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
      }
      setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
      }
      setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
      }
      setNotBefore(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, nbf: input };
        } else {
          this._payload = { ...this._payload, nbf: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setExpirationTime(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, exp: input };
        } else {
          this._payload = { ...this._payload, exp: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setIssuedAt(input) {
        if (typeof input === "undefined") {
          this._payload = { ...this._payload, iat: epoch_default(/* @__PURE__ */ new Date()) };
        } else {
          this._payload = { ...this._payload, iat: input };
        }
        return this;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/sign.js
var SignJWT;
var init_sign5 = __esm({
  "node_modules/jose/dist/browser/jwt/sign.js"() {
    init_sign3();
    init_errors();
    init_buffer_utils();
    init_produce();
    SignJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
      }
      async sign(key, options) {
        var _a;
        const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray((_a = this._protectedHeader) === null || _a === void 0 ? void 0 : _a.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
          throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
        }
        return sig.sign(key, options);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/encrypt.js
var EncryptJWT;
var init_encrypt5 = __esm({
  "node_modules/jose/dist/browser/jwt/encrypt.js"() {
    init_encrypt4();
    init_buffer_utils();
    init_produce();
    EncryptJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
      }
      replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
      }
      replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
      }
      async encrypt(key, options) {
        const enc = new CompactEncrypt(encoder.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
          enc.setInitializationVector(this._iv);
        }
        if (this._cek) {
          enc.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
          enc.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc.encrypt(key, options);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwk/thumbprint.js
async function calculateJwkThumbprint(jwk, digestAlgorithm) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  digestAlgorithm !== null && digestAlgorithm !== void 0 ? digestAlgorithm : digestAlgorithm = "sha256";
  if (digestAlgorithm !== "sha256" && digestAlgorithm !== "sha384" && digestAlgorithm !== "sha512") {
    throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  }
  let components;
  switch (jwk.kty) {
    case "EC":
      check(jwk.crv, '"crv" (Curve) Parameter');
      check(jwk.x, '"x" (X Coordinate) Parameter');
      check(jwk.y, '"y" (Y Coordinate) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
      break;
    case "OKP":
      check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
      check(jwk.x, '"x" (Public Key) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
      break;
    case "RSA":
      check(jwk.e, '"e" (Exponent) Parameter');
      check(jwk.n, '"n" (Modulus) Parameter');
      components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
      break;
    case "oct":
      check(jwk.k, '"k" (Key Value) Parameter');
      components = { k: jwk.k, kty: jwk.kty };
      break;
    default:
      throw new JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
  }
  const data = encoder.encode(JSON.stringify(components));
  return encode(await digest_default(digestAlgorithm, data));
}
async function calculateJwkThumbprintUri(jwk, digestAlgorithm) {
  digestAlgorithm !== null && digestAlgorithm !== void 0 ? digestAlgorithm : digestAlgorithm = "sha256";
  const thumbprint = await calculateJwkThumbprint(jwk, digestAlgorithm);
  return `urn:ietf:params:oauth:jwk-thumbprint:sha-${digestAlgorithm.slice(-3)}:${thumbprint}`;
}
var check;
var init_thumbprint = __esm({
  "node_modules/jose/dist/browser/jwk/thumbprint.js"() {
    init_digest();
    init_base64url();
    init_errors();
    init_buffer_utils();
    init_is_object();
    check = (value, description) => {
      if (typeof value !== "string" || !value) {
        throw new JWKInvalid(`${description} missing or invalid`);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwk/embedded.js
async function EmbeddedJWK(protectedHeader, token) {
  const joseHeader = {
    ...protectedHeader,
    ...token === null || token === void 0 ? void 0 : token.header
  };
  if (!isObject(joseHeader.jwk)) {
    throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
  }
  const key = await importJWK({ ...joseHeader.jwk, ext: true }, joseHeader.alg, true);
  if (key instanceof Uint8Array || key.type !== "public") {
    throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a public key');
  }
  return key;
}
var init_embedded = __esm({
  "node_modules/jose/dist/browser/jwk/embedded.js"() {
    init_import();
    init_is_object();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwks/local.js
function getKtyFromAlg(alg) {
  switch (typeof alg === "string" && alg.slice(0, 2)) {
    case "RS":
    case "PS":
      return "RSA";
    case "ES":
      return "EC";
    case "Ed":
      return "OKP";
    default:
      throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
  }
}
function isJWKSLike(jwks) {
  return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
  return isObject(key);
}
function clone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}
async function importWithAlgCache(cache, jwk, alg) {
  const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
  if (cached[alg] === void 0) {
    const key = await importJWK({ ...jwk, ext: true }, alg);
    if (key instanceof Uint8Array || key.type !== "public") {
      throw new JWKSInvalid("JSON Web Key Set members must be public keys");
    }
    cached[alg] = key;
  }
  return cached[alg];
}
function createLocalJWKSet(jwks) {
  const set = new LocalJWKSet(jwks);
  return async function(protectedHeader, token) {
    return set.getKey(protectedHeader, token);
  };
}
var LocalJWKSet;
var init_local = __esm({
  "node_modules/jose/dist/browser/jwks/local.js"() {
    init_import();
    init_errors();
    init_is_object();
    LocalJWKSet = class {
      constructor(jwks) {
        this._cached = /* @__PURE__ */ new WeakMap();
        if (!isJWKSLike(jwks)) {
          throw new JWKSInvalid("JSON Web Key Set malformed");
        }
        this._jwks = clone(jwks);
      }
      async getKey(protectedHeader, token) {
        const { alg, kid } = { ...protectedHeader, ...token === null || token === void 0 ? void 0 : token.header };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk2) => {
          let candidate = kty === jwk2.kty;
          if (candidate && typeof kid === "string") {
            candidate = kid === jwk2.kid;
          }
          if (candidate && typeof jwk2.alg === "string") {
            candidate = alg === jwk2.alg;
          }
          if (candidate && typeof jwk2.use === "string") {
            candidate = jwk2.use === "sig";
          }
          if (candidate && Array.isArray(jwk2.key_ops)) {
            candidate = jwk2.key_ops.includes("verify");
          }
          if (candidate && alg === "EdDSA") {
            candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
          }
          if (candidate) {
            switch (alg) {
              case "ES256":
                candidate = jwk2.crv === "P-256";
                break;
              case "ES256K":
                candidate = jwk2.crv === "secp256k1";
                break;
              case "ES384":
                candidate = jwk2.crv === "P-384";
                break;
              case "ES512":
                candidate = jwk2.crv === "P-521";
                break;
            }
          }
          return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
          throw new JWKSNoMatchingKey();
        } else if (length !== 1) {
          const error = new JWKSMultipleMatchingKeys();
          const { _cached } = this;
          error[Symbol.asyncIterator] = async function* () {
            for (const jwk2 of candidates) {
              try {
                yield await importWithAlgCache(_cached, jwk2, alg);
              } catch (_a) {
                continue;
              }
            }
          };
          throw error;
        }
        return importWithAlgCache(this._cached, jwk, alg);
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/fetch_jwks.js
var fetchJwks, fetch_jwks_default;
var init_fetch_jwks = __esm({
  "node_modules/jose/dist/browser/runtime/fetch_jwks.js"() {
    init_errors();
    fetchJwks = async (url, timeout, options) => {
      let controller;
      let id;
      let timedOut = false;
      if (typeof AbortController === "function") {
        controller = new AbortController();
        id = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, timeout);
      }
      const response = await fetch(url.href, {
        signal: controller ? controller.signal : void 0,
        redirect: "manual",
        headers: options.headers
      }).catch((err) => {
        if (timedOut)
          throw new JWKSTimeout();
        throw err;
      });
      if (id !== void 0)
        clearTimeout(id);
      if (response.status !== 200) {
        throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
      }
      try {
        return await response.json();
      } catch (_a) {
        throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
      }
    };
    fetch_jwks_default = fetchJwks;
  }
});

// node_modules/jose/dist/browser/jwks/remote.js
function isCloudflareWorkers() {
  return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
}
function createRemoteJWKSet(url, options) {
  const set = new RemoteJWKSet(url, options);
  return async function(protectedHeader, token) {
    return set.getKey(protectedHeader, token);
  };
}
var RemoteJWKSet;
var init_remote = __esm({
  "node_modules/jose/dist/browser/jwks/remote.js"() {
    init_fetch_jwks();
    init_errors();
    init_local();
    RemoteJWKSet = class extends LocalJWKSet {
      constructor(url, options) {
        super({ keys: [] });
        this._jwks = void 0;
        if (!(url instanceof URL)) {
          throw new TypeError("url must be an instance of URL");
        }
        this._url = new URL(url.href);
        this._options = { agent: options === null || options === void 0 ? void 0 : options.agent, headers: options === null || options === void 0 ? void 0 : options.headers };
        this._timeoutDuration = typeof (options === null || options === void 0 ? void 0 : options.timeoutDuration) === "number" ? options === null || options === void 0 ? void 0 : options.timeoutDuration : 5e3;
        this._cooldownDuration = typeof (options === null || options === void 0 ? void 0 : options.cooldownDuration) === "number" ? options === null || options === void 0 ? void 0 : options.cooldownDuration : 3e4;
        this._cacheMaxAge = typeof (options === null || options === void 0 ? void 0 : options.cacheMaxAge) === "number" ? options === null || options === void 0 ? void 0 : options.cacheMaxAge : 6e5;
      }
      coolingDown() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
      }
      fresh() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
      }
      async getKey(protectedHeader, token) {
        if (!this._jwks || !this.fresh()) {
          await this.reload();
        }
        try {
          return await super.getKey(protectedHeader, token);
        } catch (err) {
          if (err instanceof JWKSNoMatchingKey) {
            if (this.coolingDown() === false) {
              await this.reload();
              return super.getKey(protectedHeader, token);
            }
          }
          throw err;
        }
      }
      async reload() {
        if (this._pendingFetch && isCloudflareWorkers()) {
          this._pendingFetch = void 0;
        }
        this._pendingFetch || (this._pendingFetch = fetch_jwks_default(this._url, this._timeoutDuration, this._options).then((json4) => {
          if (!isJWKSLike(json4)) {
            throw new JWKSInvalid("JSON Web Key Set malformed");
          }
          this._jwks = { keys: json4.keys };
          this._jwksTimestamp = Date.now();
          this._pendingFetch = void 0;
        }).catch((err) => {
          this._pendingFetch = void 0;
          throw err;
        }));
        await this._pendingFetch;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/unsecured.js
var UnsecuredJWT;
var init_unsecured = __esm({
  "node_modules/jose/dist/browser/jwt/unsecured.js"() {
    init_base64url();
    init_buffer_utils();
    init_errors();
    init_jwt_claims_set();
    init_produce();
    UnsecuredJWT = class extends ProduceJWT {
      encode() {
        const header = encode(JSON.stringify({ alg: "none" }));
        const payload = encode(JSON.stringify(this._payload));
        return `${header}.${payload}.`;
      }
      static decode(jwt, options) {
        if (typeof jwt !== "string") {
          throw new JWTInvalid("Unsecured JWT must be a string");
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split(".");
        if (length !== 3 || signature !== "") {
          throw new JWTInvalid("Invalid Unsecured JWT");
        }
        let header;
        try {
          header = JSON.parse(decoder.decode(decode(encodedHeader)));
          if (header.alg !== "none")
            throw new Error();
        } catch (_a) {
          throw new JWTInvalid("Invalid Unsecured JWT");
        }
        const payload = jwt_claims_set_default(header, decode(encodedPayload), options);
        return { payload, header };
      }
    };
  }
});

// node_modules/jose/dist/browser/util/base64url.js
var base64url_exports2 = {};
__export(base64url_exports2, {
  decode: () => decode2,
  encode: () => encode2
});
var encode2, decode2;
var init_base64url2 = __esm({
  "node_modules/jose/dist/browser/util/base64url.js"() {
    init_base64url();
    encode2 = encode;
    decode2 = decode;
  }
});

// node_modules/jose/dist/browser/util/decode_protected_header.js
function decodeProtectedHeader(token) {
  let protectedB64u;
  if (typeof token === "string") {
    const parts = token.split(".");
    if (parts.length === 3 || parts.length === 5) {
      ;
      [protectedB64u] = parts;
    }
  } else if (typeof token === "object" && token) {
    if ("protected" in token) {
      protectedB64u = token.protected;
    } else {
      throw new TypeError("Token does not contain a Protected Header");
    }
  }
  try {
    if (typeof protectedB64u !== "string" || !protectedB64u) {
      throw new Error();
    }
    const result = JSON.parse(decoder.decode(decode2(protectedB64u)));
    if (!isObject(result)) {
      throw new Error();
    }
    return result;
  } catch (_a) {
    throw new TypeError("Invalid Token or Protected Header formatting");
  }
}
var init_decode_protected_header = __esm({
  "node_modules/jose/dist/browser/util/decode_protected_header.js"() {
    init_base64url2();
    init_buffer_utils();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/util/decode_jwt.js
function decodeJwt(jwt) {
  if (typeof jwt !== "string")
    throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
  const { 1: payload, length } = jwt.split(".");
  if (length === 5)
    throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
  if (length !== 3)
    throw new JWTInvalid("Invalid JWT");
  if (!payload)
    throw new JWTInvalid("JWTs must contain a payload");
  let decoded;
  try {
    decoded = decode2(payload);
  } catch (_a) {
    throw new JWTInvalid("Failed to base64url decode the payload");
  }
  let result;
  try {
    result = JSON.parse(decoder.decode(decoded));
  } catch (_b) {
    throw new JWTInvalid("Failed to parse the decoded payload as JSON");
  }
  if (!isObject(result))
    throw new JWTInvalid("Invalid JWT Claims Set");
  return result;
}
var init_decode_jwt = __esm({
  "node_modules/jose/dist/browser/util/decode_jwt.js"() {
    init_base64url2();
    init_buffer_utils();
    init_is_object();
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/generate.js
async function generateSecret(alg, options) {
  var _a;
  let length;
  let algorithm;
  let keyUsages;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      length = parseInt(alg.slice(-3), 10);
      algorithm = { name: "HMAC", hash: `SHA-${length}`, length };
      keyUsages = ["sign", "verify"];
      break;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      length = parseInt(alg.slice(-3), 10);
      return random_default(new Uint8Array(length >> 3));
    case "A128KW":
    case "A192KW":
    case "A256KW":
      length = parseInt(alg.slice(1, 4), 10);
      algorithm = { name: "AES-KW", length };
      keyUsages = ["wrapKey", "unwrapKey"];
      break;
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      length = parseInt(alg.slice(1, 4), 10);
      algorithm = { name: "AES-GCM", length };
      keyUsages = ["encrypt", "decrypt"];
      break;
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return webcrypto_default.subtle.generateKey(algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages);
}
function getModulusLengthOption(options) {
  var _a;
  const modulusLength = (_a = options === null || options === void 0 ? void 0 : options.modulusLength) !== null && _a !== void 0 ? _a : 2048;
  if (typeof modulusLength !== "number" || modulusLength < 2048) {
    throw new JOSENotSupported("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
  }
  return modulusLength;
}
async function generateKeyPair(alg, options) {
  var _a, _b, _c3;
  let algorithm;
  let keyUsages;
  switch (alg) {
    case "PS256":
    case "PS384":
    case "PS512":
      algorithm = {
        name: "RSA-PSS",
        hash: `SHA-${alg.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["sign", "verify"];
      break;
    case "RS256":
    case "RS384":
    case "RS512":
      algorithm = {
        name: "RSASSA-PKCS1-v1_5",
        hash: `SHA-${alg.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["sign", "verify"];
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      algorithm = {
        name: "RSA-OAEP",
        hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
      break;
    case "ES256":
      algorithm = { name: "ECDSA", namedCurve: "P-256" };
      keyUsages = ["sign", "verify"];
      break;
    case "ES384":
      algorithm = { name: "ECDSA", namedCurve: "P-384" };
      keyUsages = ["sign", "verify"];
      break;
    case "ES512":
      algorithm = { name: "ECDSA", namedCurve: "P-521" };
      keyUsages = ["sign", "verify"];
      break;
    case "EdDSA":
      keyUsages = ["sign", "verify"];
      const crv = (_a = options === null || options === void 0 ? void 0 : options.crv) !== null && _a !== void 0 ? _a : "Ed25519";
      switch (crv) {
        case "Ed25519":
        case "Ed448":
          algorithm = { name: crv };
          break;
        default:
          throw new JOSENotSupported("Invalid or unsupported crv option provided");
      }
      break;
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      keyUsages = ["deriveKey", "deriveBits"];
      const crv2 = (_b = options === null || options === void 0 ? void 0 : options.crv) !== null && _b !== void 0 ? _b : "P-256";
      switch (crv2) {
        case "P-256":
        case "P-384":
        case "P-521": {
          algorithm = { name: "ECDH", namedCurve: crv2 };
          break;
        }
        case "X25519":
        case "X448":
          algorithm = { name: crv2 };
          break;
        default:
          throw new JOSENotSupported("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448");
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return webcrypto_default.subtle.generateKey(algorithm, (_c3 = options === null || options === void 0 ? void 0 : options.extractable) !== null && _c3 !== void 0 ? _c3 : false, keyUsages);
}
var init_generate = __esm({
  "node_modules/jose/dist/browser/runtime/generate.js"() {
    init_webcrypto();
    init_errors();
    init_random();
  }
});

// node_modules/jose/dist/browser/key/generate_key_pair.js
async function generateKeyPair2(alg, options) {
  return generateKeyPair(alg, options);
}
var init_generate_key_pair = __esm({
  "node_modules/jose/dist/browser/key/generate_key_pair.js"() {
    init_generate();
  }
});

// node_modules/jose/dist/browser/key/generate_secret.js
async function generateSecret2(alg, options) {
  return generateSecret(alg, options);
}
var init_generate_secret = __esm({
  "node_modules/jose/dist/browser/key/generate_secret.js"() {
    init_generate();
  }
});

// node_modules/jose/dist/browser/runtime/runtime.js
var runtime_default;
var init_runtime = __esm({
  "node_modules/jose/dist/browser/runtime/runtime.js"() {
    runtime_default = "WebCryptoAPI";
  }
});

// node_modules/jose/dist/browser/util/runtime.js
var runtime_default2;
var init_runtime2 = __esm({
  "node_modules/jose/dist/browser/util/runtime.js"() {
    init_runtime();
    runtime_default2 = runtime_default;
  }
});

// node_modules/jose/dist/browser/index.js
var browser_exports = {};
__export(browser_exports, {
  CompactEncrypt: () => CompactEncrypt,
  CompactSign: () => CompactSign,
  EmbeddedJWK: () => EmbeddedJWK,
  EncryptJWT: () => EncryptJWT,
  FlattenedEncrypt: () => FlattenedEncrypt,
  FlattenedSign: () => FlattenedSign,
  GeneralEncrypt: () => GeneralEncrypt,
  GeneralSign: () => GeneralSign,
  SignJWT: () => SignJWT,
  UnsecuredJWT: () => UnsecuredJWT,
  base64url: () => base64url_exports2,
  calculateJwkThumbprint: () => calculateJwkThumbprint,
  calculateJwkThumbprintUri: () => calculateJwkThumbprintUri,
  compactDecrypt: () => compactDecrypt,
  compactVerify: () => compactVerify,
  createLocalJWKSet: () => createLocalJWKSet,
  createRemoteJWKSet: () => createRemoteJWKSet,
  cryptoRuntime: () => runtime_default2,
  decodeJwt: () => decodeJwt,
  decodeProtectedHeader: () => decodeProtectedHeader,
  errors: () => errors_exports,
  exportJWK: () => exportJWK,
  exportPKCS8: () => exportPKCS8,
  exportSPKI: () => exportSPKI,
  flattenedDecrypt: () => flattenedDecrypt,
  flattenedVerify: () => flattenedVerify,
  generalDecrypt: () => generalDecrypt,
  generalVerify: () => generalVerify,
  generateKeyPair: () => generateKeyPair2,
  generateSecret: () => generateSecret2,
  importJWK: () => importJWK,
  importPKCS8: () => importPKCS8,
  importSPKI: () => importSPKI,
  importX509: () => importX509,
  jwtDecrypt: () => jwtDecrypt,
  jwtVerify: () => jwtVerify
});
var init_browser = __esm({
  "node_modules/jose/dist/browser/index.js"() {
    init_decrypt3();
    init_decrypt2();
    init_decrypt4();
    init_encrypt3();
    init_verify3();
    init_verify2();
    init_verify4();
    init_verify5();
    init_decrypt5();
    init_encrypt4();
    init_encrypt2();
    init_sign3();
    init_sign2();
    init_sign4();
    init_sign5();
    init_encrypt5();
    init_thumbprint();
    init_embedded();
    init_local();
    init_remote();
    init_unsecured();
    init_export();
    init_import();
    init_decode_protected_header();
    init_decode_jwt();
    init_errors();
    init_generate_key_pair();
    init_generate_secret();
    init_base64url2();
    init_runtime2();
  }
});

// node_modules/@shopify/shopify-api/lib/utils/get-hmac-key.js
var require_get_hmac_key = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/get-hmac-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHMACKey = void 0;
    function getHMACKey(key) {
      const arrayBuffer = new Uint8Array(key.length);
      for (let i = 0, keyLen = key.length; i < keyLen; i++) {
        arrayBuffer[i] = key.charCodeAt(i);
      }
      return arrayBuffer;
    }
    exports.getHMACKey = getHMACKey;
  }
});

// node_modules/@shopify/shopify-api/lib/session/decode-session-token.js
var require_decode_session_token = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/decode-session-token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeSessionToken = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var jose = tslib_1.__importStar((init_browser(), __toCommonJS(browser_exports)));
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var get_hmac_key_1 = require_get_hmac_key();
    var JWT_PERMITTED_CLOCK_TOLERANCE = 10;
    function decodeSessionToken(config) {
      return (token, { checkAudience = true } = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        let payload;
        try {
          payload = (yield jose.jwtVerify(token, (0, get_hmac_key_1.getHMACKey)(config.apiSecretKey), {
            algorithms: ["HS256"],
            clockTolerance: JWT_PERMITTED_CLOCK_TOLERANCE
          })).payload;
        } catch (error) {
          throw new ShopifyErrors.InvalidJwtError(`Failed to parse session token '${token}': ${error.message}`);
        }
        if (checkAudience && payload.aud !== config.apiKey) {
          throw new ShopifyErrors.InvalidJwtError("Session token had invalid API key");
        }
        return payload;
      });
    }
    exports.decodeSessionToken = decodeSessionToken;
  }
});

// node_modules/@shopify/shopify-api/lib/session/session-utils.js
var require_session_utils = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/session-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customAppSession = exports.getCurrentSessionId = exports.getOfflineId = exports.getJwtSessionId = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = require_types6();
    var http_1 = require_http();
    var shop_validator_1 = require_shop_validator();
    var logger_1 = require_logger();
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var decode_session_token_1 = require_decode_session_token();
    var session_1 = require_session();
    function getJwtSessionId(config) {
      return (shop, userId) => {
        return `${(0, shop_validator_1.sanitizeShop)(config)(shop, true)}_${userId}`;
      };
    }
    exports.getJwtSessionId = getJwtSessionId;
    function getOfflineId(config) {
      return (shop) => {
        return `offline_${(0, shop_validator_1.sanitizeShop)(config)(shop, true)}`;
      };
    }
    exports.getOfflineId = getOfflineId;
    function getCurrentSessionId(config) {
      return function getCurrentSessionId2(_a) {
        var { isOnline } = _a, adapterArgs = tslib_1.__rest(_a, ["isOnline"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
          const log = (0, logger_1.logger)(config);
          if (config.isEmbeddedApp) {
            log.debug("App is embedded, looking for session id in JWT payload", {
              isOnline
            });
            const authHeader = request.headers.Authorization;
            if (authHeader) {
              const matches = (typeof authHeader === "string" ? authHeader : authHeader[0]).match(/^Bearer (.+)$/);
              if (!matches) {
                log.error("Missing Bearer token in authorization header", { isOnline });
                throw new ShopifyErrors.MissingJwtTokenError("Missing Bearer token in authorization header");
              }
              const jwtPayload = yield (0, decode_session_token_1.decodeSessionToken)(config)(matches[1]);
              const shop = jwtPayload.dest.replace(/^https:\/\//, "");
              log.debug("Found valid JWT payload", { shop, isOnline });
              if (isOnline) {
                return getJwtSessionId(config)(shop, jwtPayload.sub);
              } else {
                return getOfflineId(config)(shop);
              }
            } else {
              log.error("Missing Authorization header, was the request made with authenticatedFetch?", { isOnline });
            }
          } else {
            log.debug("App is not embedded, looking for session id in cookies", {
              isOnline
            });
            const cookies = new http_1.Cookies(request, {}, {
              keys: [config.apiSecretKey]
            });
            return cookies.getAndVerify(types_1.SESSION_COOKIE_NAME);
          }
          return void 0;
        });
      };
    }
    exports.getCurrentSessionId = getCurrentSessionId;
    function customAppSession(config) {
      return (shop) => {
        return new session_1.Session({
          id: "",
          shop: `${(0, shop_validator_1.sanitizeShop)(config)(shop, true)}`,
          state: "",
          isOnline: false
        });
      };
    }
    exports.customAppSession = customAppSession;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/create-session.js
var require_create_session = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/create-session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.accessTokenResponse = exports.createSession = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var uuid_1 = require_commonjs_browser();
    var session_1 = require_session();
    var logger_1 = require_logger();
    var session_utils_1 = require_session_utils();
    function createSession2({ config, accessTokenResponse: accessTokenResponse2, shop, state }) {
      const associatedUser = accessTokenResponse2.associated_user;
      const isOnline = Boolean(associatedUser);
      (0, logger_1.logger)(config).info("Creating new session", { shop, isOnline });
      if (isOnline) {
        let sessionId;
        const responseBody = accessTokenResponse2;
        const { access_token, scope } = responseBody, rest = tslib_1.__rest(responseBody, ["access_token", "scope"]);
        const sessionExpiration = new Date(Date.now() + responseBody.expires_in * 1e3);
        if (config.isEmbeddedApp) {
          sessionId = (0, session_utils_1.getJwtSessionId)(config)(shop, `${rest.associated_user.id}`);
        } else {
          sessionId = (0, uuid_1.v4)();
        }
        return new session_1.Session({
          id: sessionId,
          shop,
          state,
          isOnline,
          accessToken: access_token,
          scope,
          expires: sessionExpiration,
          onlineAccessInfo: rest
        });
      } else {
        return new session_1.Session({
          id: (0, session_utils_1.getOfflineId)(config)(shop),
          shop,
          state,
          isOnline,
          accessToken: accessTokenResponse2.access_token,
          scope: accessTokenResponse2.scope
        });
      }
    }
    exports.createSession = createSession2;
    function accessTokenResponse(postResponse) {
      const associatedUser = postResponse.body.associated_user;
      const isOnline = Boolean(associatedUser);
      if (isOnline) {
        return postResponse.body;
      }
      return postResponse.body;
    }
    exports.accessTokenResponse = accessTokenResponse;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/oauth.js
var require_oauth = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/oauth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.callback = exports.begin = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var isbot_1 = tslib_1.__importDefault(require_isbot());
    var processed_query_1 = tslib_1.__importDefault(require_processed_query());
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var hmac_validator_1 = require_hmac_validator();
    var shop_validator_1 = require_shop_validator();
    var http_client_1 = require_http_client();
    var types_1 = require_types5();
    var http_1 = require_http();
    var logger_1 = require_logger();
    var types_2 = require_types6();
    var nonce_1 = require_nonce();
    var safe_compare_1 = require_safe_compare();
    var create_session_1 = require_create_session();
    var logForBot = ({ request, log, func }) => {
      log.debug(`Possible bot request to auth ${func}: `, {
        userAgent: request.headers["User-Agent"]
      });
    };
    function begin(config) {
      return (_a) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        var { shop, callbackPath, isOnline } = _a, adapterArgs = tslib_1.__rest(_a, ["shop", "callbackPath", "isOnline"]);
        throwIfCustomStoreApp(config.isCustomStoreApp, "Cannot perform OAuth for private apps");
        const log = (0, logger_1.logger)(config);
        log.info("Beginning OAuth", { shop, isOnline, callbackPath });
        const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
        const response = yield (0, http_1.abstractConvertIncomingResponse)(adapterArgs);
        if ((0, isbot_1.default)(request.headers["User-Agent"])) {
          logForBot({ request, log, func: "begin" });
          response.statusCode = 410;
          return (0, http_1.abstractConvertResponse)(response, adapterArgs);
        }
        const cookies = new http_1.Cookies(request, response, {
          keys: [config.apiSecretKey],
          secure: true
        });
        const state = (0, nonce_1.nonce)();
        yield cookies.setAndSign(types_2.STATE_COOKIE_NAME, state, {
          expires: new Date(Date.now() + 6e4),
          sameSite: "lax",
          secure: true,
          path: callbackPath
        });
        const query = {
          client_id: config.apiKey,
          scope: config.scopes.toString(),
          redirect_uri: `${config.hostScheme}://${config.hostName}${callbackPath}`,
          state,
          "grant_options[]": isOnline ? "per-user" : ""
        };
        const processedQuery = new processed_query_1.default();
        processedQuery.putAll(query);
        const cleanShop = (0, shop_validator_1.sanitizeShop)(config)(shop, true);
        const redirectUrl = `https://${cleanShop}/admin/oauth/authorize${processedQuery.stringify()}`;
        response.statusCode = 302;
        response.statusText = "Found";
        response.headers = Object.assign(Object.assign(Object.assign({}, response.headers), cookies.response.headers), { Location: redirectUrl });
        log.debug(`OAuth started, redirecting to ${redirectUrl}`, { shop, isOnline });
        return (0, http_1.abstractConvertResponse)(response, adapterArgs);
      });
    }
    exports.begin = begin;
    function callback(config) {
      return function callback2(_a) {
        var adapterArgs = tslib_1.__rest(_a, []);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          throwIfCustomStoreApp(config.isCustomStoreApp, "Cannot perform OAuth for private apps");
          const log = (0, logger_1.logger)(config);
          const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
          const query = new URL(request.url, `${config.hostScheme}://${config.hostName}`).searchParams;
          const shop = query.get("shop");
          const response = {};
          if ((0, isbot_1.default)(request.headers["User-Agent"])) {
            logForBot({ request, log, func: "callback" });
            throw new ShopifyErrors.BotActivityDetected("Invalid OAuth callback initiated by bot");
          }
          log.info("Completing OAuth", { shop });
          const cookies = new http_1.Cookies(request, response, {
            keys: [config.apiSecretKey],
            secure: true
          });
          const stateFromCookie = yield cookies.getAndVerify(types_2.STATE_COOKIE_NAME);
          cookies.deleteCookie(types_2.STATE_COOKIE_NAME);
          if (!stateFromCookie) {
            log.error("Could not find OAuth cookie", { shop });
            throw new ShopifyErrors.CookieNotFound(`Cannot complete OAuth process. Could not find an OAuth cookie for shop url: ${shop}`);
          }
          const authQuery = Object.fromEntries(query.entries());
          if (!(yield validQuery({ config, query: authQuery, stateFromCookie }))) {
            log.error("Invalid OAuth callback", { shop, stateFromCookie });
            throw new ShopifyErrors.InvalidOAuthError("Invalid OAuth callback.");
          }
          log.debug("OAuth request is valid, requesting access token", { shop });
          const body = {
            client_id: config.apiKey,
            client_secret: config.apiSecretKey,
            code: query.get("code")
          };
          const postParams = {
            path: "/admin/oauth/access_token",
            type: types_1.DataType.JSON,
            data: body
          };
          const cleanShop = (0, shop_validator_1.sanitizeShop)(config)(query.get("shop"), true);
          const HttpClient = (0, http_client_1.httpClientClass)(config);
          const client = new HttpClient({ domain: cleanShop });
          const postResponse = yield client.post(postParams);
          const session = (0, create_session_1.createSession)({
            accessTokenResponse: (0, create_session_1.accessTokenResponse)(postResponse),
            shop: cleanShop,
            state: stateFromCookie,
            config
          });
          if (!config.isEmbeddedApp) {
            yield cookies.setAndSign(types_2.SESSION_COOKIE_NAME, session.id, {
              expires: session.expires,
              sameSite: "lax",
              secure: true,
              path: "/"
            });
          }
          return {
            headers: yield (0, http_1.abstractConvertHeaders)(cookies.response.headers, adapterArgs),
            session
          };
        });
      };
    }
    exports.callback = callback;
    function validQuery({ config, query, stateFromCookie }) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (yield (0, hmac_validator_1.validateHmac)(config)(query)) && (0, safe_compare_1.safeCompare)(query.state, stateFromCookie);
      });
    }
    function throwIfCustomStoreApp(isCustomStoreApp, message2) {
      if (isCustomStoreApp) {
        throw new ShopifyErrors.PrivateAppError(message2);
      }
    }
  }
});

// node_modules/@shopify/shopify-api/lib/auth/get-embedded-app-url.js
var require_get_embedded_app_url = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/get-embedded-app-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildEmbeddedAppUrl = exports.getEmbeddedAppUrl = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var http_1 = require_http();
    var shop_validator_1 = require_shop_validator();
    var decode_host_1 = require_decode_host();
    function getEmbeddedAppUrl(config) {
      return (_a) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        var adapterArgs = tslib_1.__rest(_a, []);
        const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
        if (!request) {
          throw new ShopifyErrors.MissingRequiredArgument("getEmbeddedAppUrl requires a request object argument");
        }
        if (!request.url) {
          throw new ShopifyErrors.InvalidRequestError("Request does not contain a URL");
        }
        const url = new URL(request.url, `https://${request.headers.host}`);
        const host = url.searchParams.get("host");
        if (typeof host !== "string") {
          throw new ShopifyErrors.InvalidRequestError("Request does not contain a host query parameter");
        }
        return buildEmbeddedAppUrl(config)(host);
      });
    }
    exports.getEmbeddedAppUrl = getEmbeddedAppUrl;
    function buildEmbeddedAppUrl(config) {
      return (host) => {
        (0, shop_validator_1.sanitizeHost)()(host, true);
        const decodedHost = (0, decode_host_1.decodeHost)(host);
        return `https://${decodedHost}/apps/${config.apiKey}`;
      };
    }
    exports.buildEmbeddedAppUrl = buildEmbeddedAppUrl;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/oauth/token-exchange.js
var require_token_exchange = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/oauth/token-exchange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tokenExchange = exports.RequestedTokenType = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var decode_session_token_1 = require_decode_session_token();
    var shop_validator_1 = require_shop_validator();
    var types_1 = require_types5();
    var http_client_1 = require_http_client();
    var create_session_1 = require_create_session();
    var RequestedTokenType;
    (function(RequestedTokenType2) {
      RequestedTokenType2["OnlineAccessToken"] = "urn:shopify:params:oauth:token-type:online-access-token";
      RequestedTokenType2["OfflineAccessToken"] = "urn:shopify:params:oauth:token-type:offline-access-token";
    })(RequestedTokenType = exports.RequestedTokenType || (exports.RequestedTokenType = {}));
    var TokenExchangeGrantType = "urn:ietf:params:oauth:grant-type:token-exchange";
    var IdTokenType = "urn:ietf:params:oauth:token-type:id_token";
    function tokenExchange(config) {
      return ({ shop, sessionToken, requestedTokenType }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, decode_session_token_1.decodeSessionToken)(config)(sessionToken);
        const body = {
          client_id: config.apiKey,
          client_secret: config.apiSecretKey,
          grant_type: TokenExchangeGrantType,
          subject_token: sessionToken,
          subject_token_type: IdTokenType,
          requested_token_type: requestedTokenType
        };
        const postParams = {
          path: "/admin/oauth/access_token",
          type: types_1.DataType.JSON,
          data: body,
          extraHeaders: {
            Accept: types_1.DataType.JSON
          }
        };
        const cleanShop = (0, shop_validator_1.sanitizeShop)(config)(shop, true);
        const HttpClient = (0, http_client_1.httpClientClass)(config);
        const client = new HttpClient({ domain: cleanShop });
        const postResponse = yield client.post(postParams);
        return {
          session: (0, create_session_1.createSession)({
            accessTokenResponse: (0, create_session_1.accessTokenResponse)(postResponse),
            shop: cleanShop,
            // We need to keep this as an empty string as our template DB schemas have this required
            state: "",
            config
          })
        };
      });
    }
    exports.tokenExchange = tokenExchange;
  }
});

// node_modules/@shopify/shopify-api/lib/auth/index.js
var require_auth = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shopifyAuth = void 0;
    var oauth_1 = require_oauth();
    var nonce_1 = require_nonce();
    var safe_compare_1 = require_safe_compare();
    var get_embedded_app_url_1 = require_get_embedded_app_url();
    var token_exchange_1 = require_token_exchange();
    function shopifyAuth(config) {
      var _a;
      const shopify = {
        begin: (0, oauth_1.begin)(config),
        callback: (0, oauth_1.callback)(config),
        nonce: nonce_1.nonce,
        safeCompare: safe_compare_1.safeCompare,
        getEmbeddedAppUrl: (0, get_embedded_app_url_1.getEmbeddedAppUrl)(config),
        buildEmbeddedAppUrl: (0, get_embedded_app_url_1.buildEmbeddedAppUrl)(config)
      };
      if ((_a = config.future) === null || _a === void 0 ? void 0 : _a.unstable_tokenExchange) {
        shopify.tokenExchange = (0, token_exchange_1.tokenExchange)(config);
      }
      return shopify;
    }
    exports.shopifyAuth = shopifyAuth;
  }
});

// node_modules/@shopify/shopify-api/lib/session/index.js
var require_session2 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shopifySession = void 0;
    var decode_session_token_1 = require_decode_session_token();
    var session_utils_1 = require_session_utils();
    function shopifySession(config) {
      return {
        customAppSession: (0, session_utils_1.customAppSession)(config),
        getCurrentId: (0, session_utils_1.getCurrentSessionId)(config),
        getOfflineId: (0, session_utils_1.getOfflineId)(config),
        getJwtSessionId: (0, session_utils_1.getJwtSessionId)(config),
        decodeSessionToken: (0, decode_session_token_1.decodeSessionToken)(config)
      };
    }
    exports.shopifySession = shopifySession;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/version-compatible.js
var require_version_compatible = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/version-compatible.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.versionPriorTo = exports.versionCompatible = void 0;
    var types_1 = require_types4();
    function versionCompatible(config) {
      return (referenceVersion, currentVersion = config.apiVersion) => {
        if (currentVersion === types_1.ApiVersion.Unstable) {
          return true;
        }
        const numericVersion = (version) => parseInt(version.replace("-", ""), 10);
        const current = numericVersion(currentVersion);
        const reference = numericVersion(referenceVersion);
        return current >= reference;
      };
    }
    exports.versionCompatible = versionCompatible;
    function versionPriorTo(config) {
      return (referenceVersion, currentVersion = config.apiVersion) => {
        return !versionCompatible(config)(referenceVersion, currentVersion);
      };
    }
    exports.versionPriorTo = versionPriorTo;
  }
});

// node_modules/@shopify/shopify-api/lib/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shopifyUtils = void 0;
    var shop_validator_1 = require_shop_validator();
    var hmac_validator_1 = require_hmac_validator();
    var version_compatible_1 = require_version_compatible();
    function shopifyUtils(config) {
      return {
        sanitizeShop: (0, shop_validator_1.sanitizeShop)(config),
        sanitizeHost: (0, shop_validator_1.sanitizeHost)(),
        validateHmac: (0, hmac_validator_1.validateHmac)(config),
        versionCompatible: (0, version_compatible_1.versionCompatible)(config),
        versionPriorTo: (0, version_compatible_1.versionPriorTo)(config)
      };
    }
    exports.shopifyUtils = shopifyUtils;
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/types.js
var require_types7 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebhookValidationErrorReason = exports.WebhookOperation = exports.DeliveryMethod = void 0;
    var DeliveryMethod;
    (function(DeliveryMethod2) {
      DeliveryMethod2["Http"] = "http";
      DeliveryMethod2["EventBridge"] = "eventbridge";
      DeliveryMethod2["PubSub"] = "pubsub";
    })(DeliveryMethod = exports.DeliveryMethod || (exports.DeliveryMethod = {}));
    var WebhookOperation;
    (function(WebhookOperation2) {
      WebhookOperation2["Create"] = "create";
      WebhookOperation2["Update"] = "update";
      WebhookOperation2["Delete"] = "delete";
    })(WebhookOperation = exports.WebhookOperation || (exports.WebhookOperation = {}));
    var WebhookValidationErrorReason;
    (function(WebhookValidationErrorReason2) {
      WebhookValidationErrorReason2["MissingHeaders"] = "missing_headers";
      WebhookValidationErrorReason2["MissingBody"] = "missing_body";
      WebhookValidationErrorReason2["InvalidHmac"] = "invalid_hmac";
    })(WebhookValidationErrorReason = exports.WebhookValidationErrorReason || (exports.WebhookValidationErrorReason = {}));
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/registry.js
var require_registry = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/registry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addHostToCallbackUrl = exports.handlerIdentifier = exports.getHandlers = exports.getTopicsAdded = exports.addHandlers = exports.topicForStorage = exports.registry = void 0;
    var error_1 = require_error();
    var logger_1 = require_logger();
    var types_1 = require_types7();
    function registry() {
      return {};
    }
    exports.registry = registry;
    function topicForStorage(topic) {
      return topic.toUpperCase().replace(/\/|\./g, "_");
    }
    exports.topicForStorage = topicForStorage;
    function addHandlers(config, webhookRegistry) {
      return function addHandlers2(handlersToAdd) {
        for (const [topic, handlers] of Object.entries(handlersToAdd)) {
          const topicKey = topicForStorage(topic);
          if (Array.isArray(handlers)) {
            for (const handler of handlers) {
              mergeOrAddHandler(config, webhookRegistry, topicKey, handler);
            }
          } else {
            mergeOrAddHandler(config, webhookRegistry, topicKey, handlers);
          }
        }
      };
    }
    exports.addHandlers = addHandlers;
    function getTopicsAdded(webhookRegistry) {
      return function getTopicsAdded2() {
        return Object.keys(webhookRegistry);
      };
    }
    exports.getTopicsAdded = getTopicsAdded;
    function getHandlers(webhookRegistry) {
      return function getHandlers2(topic) {
        return webhookRegistry[topicForStorage(topic)] || [];
      };
    }
    exports.getHandlers = getHandlers;
    function handlerIdentifier(config, handler) {
      const prefix = handler.deliveryMethod;
      switch (handler.deliveryMethod) {
        case types_1.DeliveryMethod.Http:
          return `${prefix}_${addHostToCallbackUrl(config, handler.callbackUrl)}`;
        case types_1.DeliveryMethod.EventBridge:
          return `${prefix}_${handler.arn}`;
        case types_1.DeliveryMethod.PubSub:
          return `${prefix}_${handler.pubSubProject}:${handler.pubSubTopic}`;
        default:
          throw new error_1.InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
      }
    }
    exports.handlerIdentifier = handlerIdentifier;
    function addHostToCallbackUrl(config, callbackUrl) {
      if (callbackUrl.startsWith("/")) {
        return `${config.hostScheme}://${config.hostName}${callbackUrl}`;
      } else {
        return callbackUrl;
      }
    }
    exports.addHostToCallbackUrl = addHostToCallbackUrl;
    function mergeOrAddHandler(config, webhookRegistry, topic, handler) {
      var _a, _b;
      const log = (0, logger_1.logger)(config);
      (_a = handler.includeFields) === null || _a === void 0 ? void 0 : _a.sort();
      (_b = handler.metafieldNamespaces) === null || _b === void 0 ? void 0 : _b.sort();
      if (!(topic in webhookRegistry)) {
        webhookRegistry[topic] = [handler];
        return;
      }
      const identifier = handlerIdentifier(config, handler);
      for (const index in webhookRegistry[topic]) {
        if (!Object.prototype.hasOwnProperty.call(webhookRegistry[topic], index)) {
          continue;
        }
        const existingHandler = webhookRegistry[topic][index];
        const existingIdentifier = handlerIdentifier(config, existingHandler);
        if (identifier !== existingIdentifier) {
          continue;
        }
        if (handler.deliveryMethod === types_1.DeliveryMethod.Http) {
          log.info(`Detected multiple handlers for '${topic}', webhooks.process will call them sequentially`);
          break;
        } else {
          throw new error_1.InvalidDeliveryMethodError(`Can only add multiple handlers when deliveryMethod is Http. Invalid handler: ${JSON.stringify(handler)}`);
        }
      }
      webhookRegistry[topic].push(handler);
    }
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/query-template.js
var require_query_template = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/query-template.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.queryTemplate = void 0;
    function queryTemplate(template, params) {
      let query = template;
      Object.entries(params).forEach(([key, value]) => {
        query = query.replace(`{{${key}}}`, value);
      });
      return query;
    }
    exports.queryTemplate = queryTemplate;
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/register.js
var require_register = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/register.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TEMPLATE_MUTATION = exports.TEMPLATE_GET_HANDLERS = exports.register = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var graphql_client_1 = require_graphql_client();
    var error_1 = require_error();
    var logger_1 = require_logger();
    var types_1 = require_types4();
    var registry_1 = require_registry();
    var query_template_1 = require_query_template();
    var types_2 = require_types7();
    function register(config, webhookRegistry) {
      return function register2({ session }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const log = (0, logger_1.logger)(config);
          log.info("Registering webhooks", { shop: session.shop });
          const registerReturn = Object.keys(webhookRegistry).reduce((acc, topic) => {
            acc[topic] = [];
            return acc;
          }, {});
          const existingHandlers = yield getExistingHandlers(config, session);
          log.debug(`Existing topics: [${Object.keys(existingHandlers).join(", ")}]`, { shop: session.shop });
          for (const topic in webhookRegistry) {
            if (!Object.prototype.hasOwnProperty.call(webhookRegistry, topic)) {
              continue;
            }
            if (types_1.gdprTopics.includes(topic)) {
              continue;
            }
            registerReturn[topic] = yield registerTopic({
              config,
              session,
              topic,
              existingHandlers: existingHandlers[topic] || [],
              handlers: (0, registry_1.getHandlers)(webhookRegistry)(topic)
            });
            delete existingHandlers[topic];
          }
          for (const topic in existingHandlers) {
            if (!Object.prototype.hasOwnProperty.call(existingHandlers, topic)) {
              continue;
            }
            const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
            const client = new GraphqlClient({ session });
            registerReturn[topic] = yield runMutations({
              config,
              client,
              topic,
              handlers: existingHandlers[topic],
              operation: types_2.WebhookOperation.Delete
            });
          }
          return registerReturn;
        });
      };
    }
    exports.register = register;
    function getExistingHandlers(config, session) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
        const client = new GraphqlClient({ session });
        const existingHandlers = {};
        let hasNextPage;
        let endCursor = null;
        do {
          const query = buildCheckQuery(endCursor);
          const response = yield client.query({
            data: query
          });
          response.body.data.webhookSubscriptions.edges.forEach((edge) => {
            const handler = buildHandlerFromNode(edge);
            if (!existingHandlers[edge.node.topic]) {
              existingHandlers[edge.node.topic] = [];
            }
            existingHandlers[edge.node.topic].push(handler);
          });
          endCursor = response.body.data.webhookSubscriptions.pageInfo.endCursor;
          hasNextPage = response.body.data.webhookSubscriptions.pageInfo.hasNextPage;
        } while (hasNextPage);
        return existingHandlers;
      });
    }
    function buildCheckQuery(endCursor) {
      return (0, query_template_1.queryTemplate)(exports.TEMPLATE_GET_HANDLERS, {
        END_CURSOR: JSON.stringify(endCursor)
      });
    }
    function buildHandlerFromNode(edge) {
      var _a, _b;
      const endpoint = edge.node.endpoint;
      let handler;
      switch (endpoint.__typename) {
        case "WebhookHttpEndpoint":
          handler = {
            deliveryMethod: types_2.DeliveryMethod.Http,
            callbackUrl: endpoint.callbackUrl,
            // This is a dummy for now because we don't really care about it
            callback: () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            })
          };
          break;
        case "WebhookEventBridgeEndpoint":
          handler = {
            deliveryMethod: types_2.DeliveryMethod.EventBridge,
            arn: endpoint.arn
          };
          break;
        case "WebhookPubSubEndpoint":
          handler = {
            deliveryMethod: types_2.DeliveryMethod.PubSub,
            pubSubProject: endpoint.pubSubProject,
            pubSubTopic: endpoint.pubSubTopic
          };
          break;
      }
      handler.id = edge.node.id;
      handler.includeFields = edge.node.includeFields;
      handler.metafieldNamespaces = edge.node.metafieldNamespaces;
      (_a = handler.includeFields) === null || _a === void 0 ? void 0 : _a.sort();
      (_b = handler.metafieldNamespaces) === null || _b === void 0 ? void 0 : _b.sort();
      return handler;
    }
    function registerTopic({ config, session, topic, existingHandlers, handlers }) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let registerResults = [];
        const { toCreate, toUpdate, toDelete } = categorizeHandlers(config, existingHandlers, handlers);
        const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
        const client = new GraphqlClient({ session });
        let operation = types_2.WebhookOperation.Create;
        registerResults = registerResults.concat(yield runMutations({ config, client, topic, operation, handlers: toCreate }));
        operation = types_2.WebhookOperation.Update;
        registerResults = registerResults.concat(yield runMutations({ config, client, topic, operation, handlers: toUpdate }));
        operation = types_2.WebhookOperation.Delete;
        registerResults = registerResults.concat(yield runMutations({ config, client, topic, operation, handlers: toDelete }));
        return registerResults;
      });
    }
    function categorizeHandlers(config, existingHandlers, handlers) {
      const handlersByKey = handlers.reduce((acc, value) => {
        acc[(0, registry_1.handlerIdentifier)(config, value)] = value;
        return acc;
      }, {});
      const existingHandlersByKey = existingHandlers.reduce((acc, value) => {
        acc[(0, registry_1.handlerIdentifier)(config, value)] = value;
        return acc;
      }, {});
      const toCreate = Object.assign({}, handlersByKey);
      const toUpdate = {};
      const toDelete = {};
      for (const existingKey in existingHandlersByKey) {
        if (!Object.prototype.hasOwnProperty.call(existingHandlersByKey, existingKey)) {
          continue;
        }
        const existingHandler = existingHandlersByKey[existingKey];
        const handler = handlersByKey[existingKey];
        if (existingKey in handlersByKey) {
          delete toCreate[existingKey];
          if (!areHandlerFieldsEqual(existingHandler, handler)) {
            toUpdate[existingKey] = handler;
            toUpdate[existingKey].id = existingHandler.id;
          }
        } else {
          toDelete[existingKey] = existingHandler;
        }
      }
      return {
        toCreate: Object.values(toCreate),
        toUpdate: Object.values(toUpdate),
        toDelete: Object.values(toDelete)
      };
    }
    function areHandlerFieldsEqual(arr1, arr2) {
      const includeFieldsEqual = arraysEqual2(arr1.includeFields || [], arr2.includeFields || []);
      const metafieldNamespacesEqual = arraysEqual2(arr1.metafieldNamespaces || [], arr2.metafieldNamespaces || []);
      return includeFieldsEqual && metafieldNamespacesEqual;
    }
    function arraysEqual2(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    function runMutations({ config, client, topic, handlers, operation }) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const registerResults = [];
        for (const handler of handlers) {
          registerResults.push(yield runMutation({ config, client, topic, handler, operation }));
        }
        return registerResults;
      });
    }
    function runMutation({ config, client, topic, handler, operation }) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let registerResult;
        (0, logger_1.logger)(config).debug(`Running webhook mutation`, { topic, operation });
        try {
          const query = buildMutation(config, topic, handler, operation);
          const result = yield client.query({ data: query });
          registerResult = {
            deliveryMethod: handler.deliveryMethod,
            success: isSuccess(result.body, handler, operation),
            result: result.body,
            operation
          };
        } catch (error) {
          if (error instanceof error_1.InvalidDeliveryMethodError) {
            registerResult = {
              deliveryMethod: handler.deliveryMethod,
              success: false,
              result: { message: error.message },
              operation
            };
          } else {
            throw error;
          }
        }
        return registerResult;
      });
    }
    function buildMutation(config, topic, handler, operation) {
      const params = {};
      let identifier;
      if (handler.id) {
        identifier = `id: "${handler.id}"`;
      } else {
        identifier = `topic: ${topic}`;
      }
      const mutationArguments = {
        MUTATION_NAME: getMutationName(handler, operation),
        IDENTIFIER: identifier,
        MUTATION_PARAMS: ""
      };
      if (operation !== types_2.WebhookOperation.Delete) {
        switch (handler.deliveryMethod) {
          case types_2.DeliveryMethod.Http:
            params.callbackUrl = `"${(0, registry_1.addHostToCallbackUrl)(config, handler.callbackUrl)}"`;
            break;
          case types_2.DeliveryMethod.EventBridge:
            params.arn = `"${handler.arn}"`;
            break;
          case types_2.DeliveryMethod.PubSub:
            params.pubSubProject = `"${handler.pubSubProject}"`;
            params.pubSubTopic = `"${handler.pubSubTopic}"`;
            break;
          default:
            throw new error_1.InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
        }
        if (handler.includeFields) {
          params.includeFields = JSON.stringify(handler.includeFields);
        }
        if (handler.metafieldNamespaces) {
          params.metafieldNamespaces = JSON.stringify(handler.metafieldNamespaces);
        }
        const paramsString = Object.entries(params).map(([key, value]) => `${key}: ${value}`).join(", ");
        mutationArguments.MUTATION_PARAMS = `webhookSubscription: {${paramsString}}`;
      }
      return (0, query_template_1.queryTemplate)(exports.TEMPLATE_MUTATION, mutationArguments);
    }
    function getMutationName(handler, operation) {
      switch (operation) {
        case types_2.WebhookOperation.Create:
          return `${getEndpoint(handler)}Create`;
        case types_2.WebhookOperation.Update:
          return `${getEndpoint(handler)}Update`;
        case types_2.WebhookOperation.Delete:
          return "webhookSubscriptionDelete";
        default:
          throw new error_1.ShopifyError(`Unrecognized operation '${operation}'`);
      }
    }
    function getEndpoint(handler) {
      switch (handler.deliveryMethod) {
        case types_2.DeliveryMethod.Http:
          return "webhookSubscription";
        case types_2.DeliveryMethod.EventBridge:
          return "eventBridgeWebhookSubscription";
        case types_2.DeliveryMethod.PubSub:
          return "pubSubWebhookSubscription";
        default:
          throw new error_1.ShopifyError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
      }
    }
    function isSuccess(result, handler, operation) {
      const mutationName = getMutationName(handler, operation);
      return Boolean(result.data && result.data[mutationName] && result.data[mutationName].userErrors.length === 0);
    }
    exports.TEMPLATE_GET_HANDLERS = `query shopifyApiReadWebhookSubscriptions {
  webhookSubscriptions(
    first: 250,
    after: {{END_CURSOR}},
  ) {
    edges {
      node {
        id
        topic
        includeFields
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
          ... on WebhookEventBridgeEndpoint {
            arn
          }
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`;
    exports.TEMPLATE_MUTATION = `
  mutation shopifyApiCreateWebhookSubscription {
    {{MUTATION_NAME}}(
      {{IDENTIFIER}},
      {{MUTATION_PARAMS}}
    ) {
      userErrors {
        field
        message
      }
    }
  }
`;
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/validate.js
var require_validate2 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateFactory = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var http_1 = require_http();
    var crypto_1 = require_crypto2();
    var types_1 = require_types();
    var types_2 = require_types4();
    var safe_compare_1 = require_safe_compare();
    var logger_1 = require_logger();
    var types_3 = require_types7();
    var registry_1 = require_registry();
    var HANDLER_PROPERTIES = {
      apiVersion: types_2.ShopifyHeader.ApiVersion,
      domain: types_2.ShopifyHeader.Domain,
      hmac: types_2.ShopifyHeader.Hmac,
      topic: types_2.ShopifyHeader.Topic,
      webhookId: types_2.ShopifyHeader.WebhookId
    };
    function validateFactory(config) {
      return function validate2(_a) {
        var { rawBody } = _a, adapterArgs = tslib_1.__rest(_a, ["rawBody"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
          const log = (0, logger_1.logger)(config);
          const webhookCheck = checkWebhookRequest(rawBody, request.headers);
          if (!webhookCheck.valid) {
            yield log.debug("Received malformed webhook request", webhookCheck);
            return webhookCheck;
          }
          const { hmac, valid: _valid } = webhookCheck, loggingContext = tslib_1.__rest(webhookCheck, ["hmac", "valid"]);
          yield log.debug("Webhook request is well formed", loggingContext);
          if (yield checkWebhookHmac(config.apiSecretKey, rawBody, hmac)) {
            yield log.debug("Webhook request is valid", loggingContext);
            return webhookCheck;
          } else {
            yield log.debug("Webhook HMAC validation failed. Please note that events manually triggered from a store's Notifications settings will fail this validation. To test this, please use the CLI or trigger the actual event in a development store.");
            return {
              valid: false,
              reason: types_3.WebhookValidationErrorReason.InvalidHmac
            };
          }
        });
      };
    }
    exports.validateFactory = validateFactory;
    function checkWebhookRequest(rawBody, headers) {
      if (!rawBody.length) {
        return {
          valid: false,
          reason: types_3.WebhookValidationErrorReason.MissingBody
        };
      }
      const missingHeaders = [];
      const entries = Object.entries(HANDLER_PROPERTIES);
      const headerValues = entries.reduce((acc, [property, headerName]) => {
        const headerValue = (0, http_1.getHeader)(headers, headerName);
        if (headerValue) {
          acc[property] = headerValue;
        } else {
          missingHeaders.push(headerName);
        }
        return acc;
      }, {});
      if (missingHeaders.length) {
        return {
          valid: false,
          reason: types_3.WebhookValidationErrorReason.MissingHeaders,
          missingHeaders
        };
      } else {
        return Object.assign(Object.assign({ valid: true }, headerValues), { topic: (0, registry_1.topicForStorage)(headerValues.topic) });
      }
    }
    function checkWebhookHmac(secret, rawBody, hmac) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const generatedHash = yield (0, crypto_1.createSHA256HMAC)(secret, rawBody, types_1.HashFormat.Base64);
        return (0, safe_compare_1.safeCompare)(generatedHash, hmac);
      });
    }
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/process.js
var require_process = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/process.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.process = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var network_1 = require_network2();
    var http_1 = require_http();
    var ShopifyErrors = tslib_1.__importStar(require_error());
    var logger_1 = require_logger();
    var types_1 = require_types7();
    var validate_1 = require_validate2();
    var STATUS_TEXT_LOOKUP = {
      [network_1.StatusCode.Ok]: "OK",
      [network_1.StatusCode.BadRequest]: "Bad Request",
      [network_1.StatusCode.Unauthorized]: "Unauthorized",
      [network_1.StatusCode.NotFound]: "Not Found",
      [network_1.StatusCode.InternalServerError]: "Internal Server Error"
    };
    function process2(config, webhookRegistry) {
      return function process3(_a) {
        var { rawBody } = _a, adapterArgs = tslib_1.__rest(_a, ["rawBody"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const response = {
            statusCode: network_1.StatusCode.Ok,
            statusText: STATUS_TEXT_LOOKUP[network_1.StatusCode.Ok],
            headers: {}
          };
          yield (0, logger_1.logger)(config).info("Receiving webhook request");
          const webhookCheck = yield (0, validate_1.validateFactory)(config)(Object.assign({ rawBody }, adapterArgs));
          let errorMessage = "Unknown error while handling webhook";
          if (webhookCheck.valid) {
            const handlerResult = yield callWebhookHandlers(config, webhookRegistry, webhookCheck, rawBody);
            response.statusCode = handlerResult.statusCode;
            if (!(0, http_1.isOK)(response)) {
              errorMessage = handlerResult.errorMessage || errorMessage;
            }
          } else {
            const errorResult = yield handleInvalidWebhook(config, webhookCheck);
            response.statusCode = errorResult.statusCode;
            response.statusText = STATUS_TEXT_LOOKUP[response.statusCode];
            errorMessage = errorResult.errorMessage;
          }
          const returnResponse = yield (0, http_1.abstractConvertResponse)(response, adapterArgs);
          if (!(0, http_1.isOK)(response)) {
            throw new ShopifyErrors.InvalidWebhookError({
              message: errorMessage,
              response: returnResponse
            });
          }
          return Promise.resolve(returnResponse);
        });
      };
    }
    exports.process = process2;
    function callWebhookHandlers(config, webhookRegistry, webhookCheck, rawBody) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const log = (0, logger_1.logger)(config);
        const { hmac: _hmac, valid: _valid } = webhookCheck, loggingContext = tslib_1.__rest(webhookCheck, ["hmac", "valid"]);
        yield log.debug("Webhook request is valid, looking for HTTP handlers to call", loggingContext);
        const handlers = webhookRegistry[webhookCheck.topic] || [];
        const response = { statusCode: network_1.StatusCode.Ok };
        let found = false;
        for (const handler of handlers) {
          if (handler.deliveryMethod !== types_1.DeliveryMethod.Http) {
            continue;
          }
          if (!handler.callback) {
            response.statusCode = network_1.StatusCode.InternalServerError;
            response.errorMessage = "Cannot call webhooks.process with a webhook handler that doesn't have a callback";
            throw new ShopifyErrors.MissingWebhookCallbackError({
              message: response.errorMessage,
              response
            });
          }
          found = true;
          yield log.debug("Found HTTP handler, triggering it", loggingContext);
          try {
            yield handler.callback(webhookCheck.topic, webhookCheck.domain, rawBody, webhookCheck.webhookId, webhookCheck.apiVersion);
          } catch (error) {
            response.statusCode = network_1.StatusCode.InternalServerError;
            response.errorMessage = error.message;
          }
        }
        if (!found) {
          yield log.debug("No HTTP handlers found", loggingContext);
          response.statusCode = network_1.StatusCode.NotFound;
          response.errorMessage = `No HTTP webhooks registered for topic ${webhookCheck.topic}`;
        }
        return response;
      });
    }
    function handleInvalidWebhook(config, webhookCheck) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = {
          statusCode: network_1.StatusCode.InternalServerError,
          errorMessage: "Unknown error while handling webhook"
        };
        switch (webhookCheck.reason) {
          case types_1.WebhookValidationErrorReason.MissingHeaders:
            response.statusCode = network_1.StatusCode.BadRequest;
            response.errorMessage = `Missing one or more of the required HTTP headers to process webhooks: [${webhookCheck.missingHeaders.join(", ")}]`;
            break;
          case types_1.WebhookValidationErrorReason.MissingBody:
            response.statusCode = network_1.StatusCode.BadRequest;
            response.errorMessage = "No body was received when processing webhook";
            break;
          case types_1.WebhookValidationErrorReason.InvalidHmac:
            response.statusCode = network_1.StatusCode.Unauthorized;
            response.errorMessage = `Could not validate request HMAC`;
            break;
        }
        yield (0, logger_1.logger)(config).debug(`Webhook request is invalid, returning ${response.statusCode}: ${response.errorMessage}`);
        return response;
      });
    }
  }
});

// node_modules/@shopify/shopify-api/lib/webhooks/index.js
var require_webhooks = __commonJS({
  "node_modules/@shopify/shopify-api/lib/webhooks/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shopifyWebhooks = void 0;
    var registry_1 = require_registry();
    var register_1 = require_register();
    var process_1 = require_process();
    var validate_1 = require_validate2();
    function shopifyWebhooks(config) {
      const webhookRegistry = (0, registry_1.registry)();
      return {
        addHandlers: (0, registry_1.addHandlers)(config, webhookRegistry),
        getTopicsAdded: (0, registry_1.getTopicsAdded)(webhookRegistry),
        getHandlers: (0, registry_1.getHandlers)(webhookRegistry),
        register: (0, register_1.register)(config, webhookRegistry),
        process: (0, process_1.process)(config, webhookRegistry),
        validate: (0, validate_1.validateFactory)(config)
      };
    }
    exports.shopifyWebhooks = shopifyWebhooks;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/check.js
var require_check = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.check = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var graphql_client_1 = require_graphql_client();
    var error_1 = require_error();
    function check2(config) {
      return function check3({ session, plans, isTest = true, returnObject = false }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!config.billing) {
            throw new error_1.BillingError({
              message: "Attempted to look for purchases without billing configs",
              errorData: []
            });
          }
          const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
          const client = new GraphqlClient({ session });
          const plansArray = Array.isArray(plans) ? plans : [plans];
          return assessPayments({
            plans: plansArray,
            client,
            isTest,
            returnObject
          });
        });
      };
    }
    exports.check = check2;
    function assessPayments({ plans, client, isTest, returnObject }) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const returnValue = returnObject ? {
          hasActivePayment: false,
          oneTimePurchases: [],
          appSubscriptions: []
        } : false;
        let installation;
        let endCursor = null;
        do {
          const currentInstallations = yield client.query({
            data: {
              query: HAS_PAYMENTS_QUERY,
              variables: { endCursor }
            }
          });
          installation = currentInstallations.body.data.currentAppInstallation;
          if (returnObject) {
            installation.activeSubscriptions.map((subscription) => {
              if (subscriptionMeetsCriteria({ plans, isTest, subscription })) {
                returnValue.hasActivePayment = true;
                returnValue.appSubscriptions.push(subscription);
              }
            });
            installation.oneTimePurchases.edges.map((purchase) => {
              if (purchaseMeetsCriteria({ plans, isTest, purchase: purchase.node })) {
                returnValue.hasActivePayment = true;
                returnValue.oneTimePurchases.push(purchase.node);
              }
            });
          } else {
            const params = { plans, isTest, installation };
            if (hasSubscription(params) || hasOneTimePayment(params)) {
              return true;
            }
          }
          endCursor = installation.oneTimePurchases.pageInfo.endCursor;
        } while (installation === null || installation === void 0 ? void 0 : installation.oneTimePurchases.pageInfo.hasNextPage);
        return returnValue;
      });
    }
    function subscriptionMeetsCriteria({ plans, isTest, subscription }) {
      return plans.includes(subscription.name) && (isTest || !subscription.test);
    }
    function purchaseMeetsCriteria({ plans, isTest, purchase }) {
      return plans.includes(purchase.name) && (isTest || !purchase.test) && purchase.status === "ACTIVE";
    }
    function hasSubscription({ plans, isTest, installation }) {
      return installation.activeSubscriptions.some((subscription) => subscriptionMeetsCriteria({ plans, isTest, subscription }));
    }
    function hasOneTimePayment({ plans, isTest, installation }) {
      return installation.oneTimePurchases.edges.some((purchase) => purchaseMeetsCriteria({ plans, isTest, purchase: purchase.node }));
    }
    var HAS_PAYMENTS_QUERY = `
  query appSubscription($endCursor: String) {
    currentAppInstallation {
      activeSubscriptions {
        id
        name
        test
      }

      oneTimePurchases(first: 250, sortKey: CREATED_AT, after: $endCursor) {
        edges {
          node {
            id
            name
            test
            status
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/request.js
var require_request = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.request = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = require_types4();
    var error_1 = require_error();
    var get_embedded_app_url_1 = require_get_embedded_app_url();
    var graphql_client_1 = require_graphql_client();
    var crypto_1 = require_crypto2();
    var types_2 = require_types();
    function request(config) {
      return function(_a) {
        var _b;
        var { session, plan, isTest = true, returnUrl: returnUrlParam, returnObject = false } = _a, overrides = tslib_1.__rest(_a, ["session", "plan", "isTest", "returnUrl", "returnObject"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!config.billing || !config.billing[plan]) {
            throw new error_1.BillingError({
              message: `Could not find plan ${plan} in billing settings`,
              errorData: []
            });
          }
          const billingConfig = Object.assign({}, config.billing[plan]);
          const filteredOverrides = Object.fromEntries(Object.entries(overrides).filter(([_key, value]) => value !== void 0));
          const cleanShopName = session.shop.replace(".myshopify.com", "");
          const embeddedAppUrl = (0, get_embedded_app_url_1.buildEmbeddedAppUrl)(config)((0, crypto_1.hashString)(`admin.shopify.com/store/${cleanShopName}`, types_2.HashFormat.Base64));
          const appUrl = `${config.hostScheme}://${config.hostName}?shop=${session.shop}`;
          const returnUrl = returnUrlParam || (config.isEmbeddedApp ? embeddedAppUrl : appUrl);
          const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
          const client = new GraphqlClient({ session });
          function isLineItemPlan(billingConfig2) {
            return "lineItems" in billingConfig2;
          }
          function isOneTimePlan(billingConfig2) {
            return billingConfig2.interval === types_1.BillingInterval.OneTime;
          }
          let data;
          if (isLineItemPlan(billingConfig)) {
            const mergedBillingConfigs = mergeBillingConfigs(billingConfig, filteredOverrides);
            const mutationRecurringResponse = yield requestSubscriptionPayment({
              billingConfig: mergedBillingConfigs,
              plan,
              client,
              returnUrl,
              isTest
            });
            data = mutationRecurringResponse.data.appSubscriptionCreate;
          } else if (isOneTimePlan(billingConfig)) {
            const mutationOneTimeResponse = yield requestSinglePayment({
              billingConfig: Object.assign(Object.assign({}, billingConfig), filteredOverrides),
              plan,
              client,
              returnUrl,
              isTest
            });
            data = mutationOneTimeResponse.data.appPurchaseOneTimeCreate;
          } else {
            switch (billingConfig.interval) {
              case types_1.BillingInterval.Usage: {
                const mutationUsageResponse = yield requestUsagePayment({
                  billingConfig: Object.assign(Object.assign({}, billingConfig), filteredOverrides),
                  plan,
                  client,
                  returnUrl,
                  isTest
                });
                data = mutationUsageResponse.data.appSubscriptionCreate;
                break;
              }
              default: {
                const mutationRecurringResponse = yield requestRecurringPayment({
                  billingConfig: Object.assign(Object.assign({}, billingConfig), filteredOverrides),
                  plan,
                  client,
                  returnUrl,
                  isTest
                });
                data = mutationRecurringResponse.data.appSubscriptionCreate;
              }
            }
          }
          if ((_b = data.userErrors) === null || _b === void 0 ? void 0 : _b.length) {
            throw new error_1.BillingError({
              message: "Error while billing the store",
              errorData: data.userErrors
            });
          }
          if (returnObject) {
            return data;
          } else {
            return data.confirmationUrl;
          }
        });
      };
    }
    exports.request = request;
    function requestSubscriptionPayment({ billingConfig, plan, client, returnUrl, isTest }) {
      var _a;
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const lineItems = billingConfig.lineItems.map((item) => {
          if (item.interval === types_1.BillingInterval.Every30Days || item.interval === types_1.BillingInterval.Annual) {
            const appRecurringPricingDetails = {
              interval: item.interval,
              price: {
                amount: item.amount,
                currencyCode: item.currencyCode
              }
            };
            if (item.discount) {
              appRecurringPricingDetails.discount = {
                durationLimitInIntervals: item.discount.durationLimitInIntervals,
                value: {
                  amount: item.discount.value.amount,
                  percentage: item.discount.value.percentage
                }
              };
            }
            return {
              plan: {
                appRecurringPricingDetails
              }
            };
          } else if (item.interval === types_1.BillingInterval.Usage) {
            const appUsagePricingDetails = {
              terms: item.terms,
              cappedAmount: {
                amount: item.amount,
                currencyCode: item.currencyCode
              }
            };
            return {
              plan: {
                appUsagePricingDetails
              }
            };
          } else {
            throw new error_1.BillingError({
              message: "Invalid interval provided",
              errorData: [item]
            });
          }
        });
        const mutationResponse = yield client.query({
          data: {
            query: RECURRING_PURCHASE_MUTATION,
            variables: {
              name: plan,
              trialDays: billingConfig.trialDays,
              replacementBehavior: billingConfig.replacementBehavior,
              returnUrl,
              test: isTest,
              lineItems
            }
          }
        });
        if ((_a = mutationResponse.body.errors) === null || _a === void 0 ? void 0 : _a.length) {
          throw new error_1.BillingError({
            message: "Error while billing the store",
            errorData: mutationResponse.body.errors
          });
        }
        return mutationResponse.body;
      });
    }
    function requestRecurringPayment({ billingConfig, plan, client, returnUrl, isTest }) {
      var _a, _b, _c3, _d, _e, _f;
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const mutationResponse = yield client.query({
          data: {
            query: RECURRING_PURCHASE_MUTATION,
            variables: {
              name: plan,
              trialDays: billingConfig.trialDays,
              replacementBehavior: billingConfig.replacementBehavior,
              returnUrl,
              test: isTest,
              lineItems: [
                {
                  plan: {
                    appRecurringPricingDetails: {
                      interval: billingConfig.interval,
                      price: {
                        amount: billingConfig.amount,
                        currencyCode: billingConfig.currencyCode
                      },
                      discount: {
                        durationLimitInIntervals: (_a = billingConfig.discount) === null || _a === void 0 ? void 0 : _a.durationLimitInIntervals,
                        value: {
                          amount: (_c3 = (_b = billingConfig.discount) === null || _b === void 0 ? void 0 : _b.value) === null || _c3 === void 0 ? void 0 : _c3.amount,
                          percentage: (_e = (_d = billingConfig.discount) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.percentage
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        });
        if ((_f = mutationResponse.body.errors) === null || _f === void 0 ? void 0 : _f.length) {
          throw new error_1.BillingError({
            message: "Error while billing the store",
            errorData: mutationResponse.body.errors
          });
        }
        return mutationResponse.body;
      });
    }
    function requestUsagePayment({ billingConfig, plan, client, returnUrl, isTest }) {
      var _a;
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const mutationResponse = yield client.query({
          data: {
            query: RECURRING_PURCHASE_MUTATION,
            variables: {
              name: plan,
              returnUrl,
              test: isTest,
              trialDays: billingConfig.trialDays,
              replacementBehavior: billingConfig.replacementBehavior,
              lineItems: [
                {
                  plan: {
                    appUsagePricingDetails: {
                      terms: billingConfig.usageTerms,
                      cappedAmount: {
                        amount: billingConfig.amount,
                        currencyCode: billingConfig.currencyCode
                      }
                    }
                  }
                }
              ]
            }
          }
        });
        if ((_a = mutationResponse.body.errors) === null || _a === void 0 ? void 0 : _a.length) {
          throw new error_1.BillingError({
            message: `Error while billing the store:: ${mutationResponse.body.errors}`,
            errorData: mutationResponse.body.errors
          });
        }
        return mutationResponse.body;
      });
    }
    function requestSinglePayment({ billingConfig, plan, client, returnUrl, isTest }) {
      var _a;
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const mutationResponse = yield client.query({
          data: {
            query: ONE_TIME_PURCHASE_MUTATION,
            variables: {
              name: plan,
              returnUrl,
              test: isTest,
              price: {
                amount: billingConfig.amount,
                currencyCode: billingConfig.currencyCode
              }
            }
          }
        });
        if ((_a = mutationResponse.body.errors) === null || _a === void 0 ? void 0 : _a.length) {
          throw new error_1.BillingError({
            message: "Error while billing the store",
            errorData: mutationResponse.body.errors
          });
        }
        return mutationResponse.body;
      });
    }
    function mergeBillingConfigs(billingConfig, overrides) {
      const mergedConfig = Object.assign(Object.assign({}, billingConfig), overrides);
      const mergedLineItems = [];
      if (billingConfig.lineItems && overrides.lineItems) {
        for (const i of billingConfig.lineItems) {
          let found = false;
          for (const j of overrides.lineItems) {
            if (i.interval === j.interval) {
              mergedLineItems.push(Object.assign(Object.assign({}, i), j));
              found = true;
              break;
            }
          }
          if (!found) {
            mergedLineItems.push(i);
          }
        }
        mergedConfig.lineItems = mergedLineItems;
      }
      return mergedConfig;
    }
    var RECURRING_PURCHASE_MUTATION = `
  mutation test(
    $name: String!
    $lineItems: [AppSubscriptionLineItemInput!]!
    $returnUrl: URL!
    $test: Boolean
    $trialDays: Int
    $replacementBehavior: AppSubscriptionReplacementBehavior
  ) {
    appSubscriptionCreate(
      name: $name
      lineItems: $lineItems
      returnUrl: $returnUrl
      test: $test
      trialDays: $trialDays
      replacementBehavior: $replacementBehavior
    ) {
      appSubscription {
        id
        name
        test
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`;
    var ONE_TIME_PURCHASE_MUTATION = `
  mutation test(
    $name: String!
    $price: MoneyInput!
    $returnUrl: URL!
    $test: Boolean
  ) {
    appPurchaseOneTimeCreate(
      name: $name
      price: $price
      returnUrl: $returnUrl
      test: $test
    ) {
      appPurchaseOneTime {
        id
        name
        test
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/cancel.js
var require_cancel = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/cancel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cancel = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var graphql_client_1 = require_graphql_client();
    var error_1 = require_error();
    var CANCEL_MUTATION = `
  mutation appSubscriptionCancel($id: ID!, $prorate: Boolean) {
    appSubscriptionCancel(id: $id, prorate: $prorate) {
      appSubscription {
        id
        name
        test
      }
      userErrors {
        field
        message
      }
    }
  }
`;
    function cancel(config) {
      return function(subscriptionInfo) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const { session, subscriptionId, prorate = true } = subscriptionInfo;
          const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
          const client = new GraphqlClient({ session });
          try {
            const response = yield client.query({
              data: {
                query: CANCEL_MUTATION,
                variables: {
                  id: subscriptionId,
                  prorate
                }
              }
            });
            if (response.body.data.appSubscriptionCancel.userErrors.length) {
              throw new error_1.BillingError({
                message: "Error while canceling a subscription",
                errorData: response.body.data.appSubscriptionCancel.userErrors
              });
            }
            return response.body.data.appSubscriptionCancel.appSubscription;
          } catch (error) {
            if (error instanceof error_1.GraphqlQueryError) {
              throw new error_1.BillingError({
                message: error.message,
                errorData: (_a = error.response) === null || _a === void 0 ? void 0 : _a.errors
              });
            } else {
              throw error;
            }
          }
        });
      };
    }
    exports.cancel = cancel;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/subscriptions.js
var require_subscriptions = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/subscriptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subscriptions = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var error_1 = require_error();
    var graphql_client_1 = require_graphql_client();
    var SUBSCRIPTION_QUERY = `
  query appSubscription {
    currentAppInstallation {
      activeSubscriptions {
        id
        name
        test
      }
  }
}
`;
    function subscriptions(config) {
      return function({ session }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!config.billing) {
            throw new error_1.BillingError({
              message: "Attempted to look for purchases without billing configs",
              errorData: []
            });
          }
          const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
          const client = new GraphqlClient({ session });
          const response = yield client.query({
            data: {
              query: SUBSCRIPTION_QUERY
            }
          });
          return response.body.data.currentAppInstallation;
        });
      };
    }
    exports.subscriptions = subscriptions;
  }
});

// node_modules/@shopify/shopify-api/lib/billing/index.js
var require_billing = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shopifyBilling = void 0;
    var check_1 = require_check();
    var request_1 = require_request();
    var cancel_1 = require_cancel();
    var subscriptions_1 = require_subscriptions();
    function shopifyBilling(config) {
      return {
        check: (0, check_1.check)(config),
        request: (0, request_1.request)(config),
        cancel: (0, cancel_1.cancel)(config),
        subscriptions: (0, subscriptions_1.subscriptions)(config)
      };
    }
    exports.shopifyBilling = shopifyBilling;
  }
});

// node_modules/@shopify/shopify-api/lib/session/classes.js
var require_classes = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/classes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Session = void 0;
    var session_1 = require_session();
    Object.defineProperty(exports, "Session", { enumerable: true, get: function() {
      return session_1.Session;
    } });
  }
});

// node_modules/@shopify/shopify-api/rest/types.js
var require_types8 = __commonJS({
  "node_modules/@shopify/shopify-api/rest/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/lib/base-types.js
var require_base_types = __commonJS({
  "node_modules/@shopify/shopify-api/lib/base-types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/lib/auth/types.js
var require_types9 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/auth/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RequestedTokenType = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_types6(), exports);
    var token_exchange_1 = require_token_exchange();
    Object.defineProperty(exports, "RequestedTokenType", { enumerable: true, get: function() {
      return token_exchange_1.RequestedTokenType;
    } });
  }
});

// node_modules/@shopify/shopify-api/lib/billing/types.js
var require_types10 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/billing/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/lib/clients/rest/types.js
var require_types11 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/rest/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/lib/clients/graphql/types.js
var require_types12 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/graphql/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/lib/clients/types.js
var require_types13 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/clients/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_types5(), exports);
    tslib_1.__exportStar(require_types11(), exports);
    tslib_1.__exportStar(require_types12(), exports);
  }
});

// node_modules/@shopify/shopify-api/lib/session/types.js
var require_types14 = __commonJS({
  "node_modules/@shopify/shopify-api/lib/session/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@shopify/shopify-api/lib/index.js
var require_lib = __commonJS({
  "node_modules/@shopify/shopify-api/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shopifyApi = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var load_rest_resources_1 = require_load_rest_resources();
    var platform_1 = require_platform();
    var config_1 = require_config();
    var clients_1 = require_clients();
    var auth_1 = require_auth();
    var session_1 = require_session2();
    var utils_1 = require_utils3();
    var webhooks_1 = require_webhooks();
    var billing_1 = require_billing();
    var logger_1 = require_logger();
    var version_1 = require_version();
    tslib_1.__exportStar(require_error(), exports);
    tslib_1.__exportStar(require_classes(), exports);
    tslib_1.__exportStar(require_types8(), exports);
    tslib_1.__exportStar(require_types4(), exports);
    tslib_1.__exportStar(require_base_types(), exports);
    tslib_1.__exportStar(require_types9(), exports);
    tslib_1.__exportStar(require_types10(), exports);
    tslib_1.__exportStar(require_types13(), exports);
    tslib_1.__exportStar(require_types14(), exports);
    tslib_1.__exportStar(require_types7(), exports);
    function shopifyApi(_a) {
      var { future } = _a, config = tslib_1.__rest(_a, ["future"]);
      const { restResources } = config, otherConfigs = tslib_1.__rest(config, ["restResources"]);
      const libConfig = Object.assign(Object.assign({}, otherConfigs), { future });
      const validatedConfig = (0, config_1.validateConfig)(libConfig);
      const shopify = {
        config: validatedConfig,
        clients: (0, clients_1.clientClasses)(validatedConfig),
        auth: (0, auth_1.shopifyAuth)(validatedConfig),
        session: (0, session_1.shopifySession)(validatedConfig),
        utils: (0, utils_1.shopifyUtils)(validatedConfig),
        webhooks: (0, webhooks_1.shopifyWebhooks)(validatedConfig),
        billing: (0, billing_1.shopifyBilling)(validatedConfig),
        logger: (0, logger_1.logger)(validatedConfig),
        rest: {}
      };
      if (restResources) {
        shopify.rest = (0, load_rest_resources_1.loadRestResources)({
          resources: restResources,
          config: validatedConfig,
          RestClient: shopify.clients.Rest
        });
      }
      shopify.logger.info(`version ${version_1.SHOPIFY_API_LIBRARY_VERSION}, environment ${(0, platform_1.abstractRuntimeString)()}`).catch((err) => console.log(err));
      return shopify;
    }
    exports.shopifyApi = shopifyApi;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/types.js
var require_types15 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppDistribution = /* @__PURE__ */ function(AppDistribution2) {
      AppDistribution2["AppStore"] = "app_store";
      AppDistribution2["SingleMerchant"] = "single_merchant";
      AppDistribution2["ShopifyAdmin"] = "shopify_admin";
      return AppDistribution2;
    }({});
    var LoginErrorType = /* @__PURE__ */ function(LoginErrorType2) {
      LoginErrorType2["MissingShop"] = "MISSING_SHOP";
      LoginErrorType2["InvalidShop"] = "INVALID_SHOP";
      return LoginErrorType2;
    }({});
    exports.AppDistribution = AppDistribution;
    exports.LoginErrorType = LoginErrorType;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/boundary/headers.js
var require_headers2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/boundary/headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function headersBoundary(headers) {
      const {
        parentHeaders,
        loaderHeaders,
        actionHeaders,
        errorHeaders
      } = headers;
      if (errorHeaders && Array.from(errorHeaders.entries()).length > 0) {
        return errorHeaders;
      }
      return new Headers([...parentHeaders ? Array.from(parentHeaders.entries()) : [], ...loaderHeaders ? Array.from(loaderHeaders.entries()) : [], ...actionHeaders ? Array.from(actionHeaders.entries()) : []]);
    }
    exports.headersBoundary = headersBoundary;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/boundary/error.js
var require_error2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/boundary/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsxRuntime = require_jsx_runtime();
    function errorBoundary(error) {
      if (error.constructor.name === "ErrorResponse" || error.constructor.name === "ErrorResponseImpl") {
        return /* @__PURE__ */ jsxRuntime.jsx("div", {
          dangerouslySetInnerHTML: {
            __html: error.data || "Handling response"
          }
        });
      }
      throw error;
    }
    exports.errorBoundary = errorBoundary;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/boundary/index.js
var require_boundary = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/boundary/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var headers = require_headers2();
    var error = require_error2();
    var boundary2 = {
      /**
       * A function that handles errors or thrown responses.
       *
       * @example
       * <caption>Catching errors in a route</caption>
       * ```ts
       * // /app/routes/admin/widgets.ts
       * import { boundary } from "@shopify/shopify-app-remix/server";
       *
       * export function ErrorBoundary() {
       *   return boundary.error(useRouteError());
       * }
       * ```
       */
      error: error.errorBoundary,
      /**
       * A function that sets the appropriate document repsonse headers.
       *
       * @example
       * <caption>Catching errors in a route</caption>
       * ```ts
       * // /app/routes/admin/widgets.ts
       * import { boundary } from "@shopify/shopify-app-remix/server";
       *
       * export const headers = (headersArgs) => {
       *   return boundary.headers(headersArgs);
       * };
       * ```
       */
      headers: headers.headersBoundary
    };
    exports.boundary = boundary2;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/version.js
var require_version3 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SHOPIFY_REMIX_LIBRARY_VERSION = "2.1.0";
    exports.SHOPIFY_REMIX_LIBRARY_VERSION = SHOPIFY_REMIX_LIBRARY_VERSION;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/webhooks/register.js
var require_register2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/webhooks/register.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function registerWebhooksFactory({
      api,
      logger
    }) {
      return async function registerWebhooks({
        session
      }) {
        return api.webhooks.register({
          session
        }).then((response) => {
          Object.entries(response).forEach(([topic, topicResults]) => {
            topicResults.forEach(({
              success,
              ...rest
            }) => {
              if (success) {
                logger.debug("Registered webhook", {
                  topic,
                  shop: session.shop,
                  operation: rest.operation
                });
              } else {
                logger.error("Failed to register webhook", {
                  topic,
                  shop: session.shop,
                  result: JSON.stringify(rest.result)
                });
              }
            });
          });
          return response;
        });
      };
    }
    exports.registerWebhooksFactory = registerWebhooksFactory;
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode3;
      var index = 0;
      while (index < str.length) {
        var eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode3;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode3(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode3(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode4) {
      try {
        return decode4(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/warnings.js
function warnOnce(condition, message2) {
  if (!condition && !alreadyWarned[message2]) {
    alreadyWarned[message2] = true;
    console.warn(message2);
  }
}
var alreadyWarned;
var init_warnings = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/warnings.js"() {
    alreadyWarned = {};
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/cookies.js
async function encodeCookieValue(sign2, value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign2(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length)
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, part;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
var import_cookie, createCookieFactory, isCookie;
var init_cookies = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/cookies.js"() {
    import_cookie = __toESM(require_cookie());
    init_warnings();
    createCookieFactory = ({
      sign: sign2,
      unsign
    }) => (name, cookieOptions = {}) => {
      let {
        secrets = [],
        ...options
      } = {
        path: "/",
        sameSite: "lax",
        ...cookieOptions
      };
      warnOnceAboutExpiresCookie(name, options.expires);
      return {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, {
            ...options,
            ...parseOptions
          });
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(name, value === "" ? "" : await encodeCookieValue(sign2, value, secrets), {
            ...options,
            ...serializeOptions
          });
        }
      };
    };
    isCookie = (object) => {
      return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
    };
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/utils.js
function stringToArray(s) {
  const utf8 = unescape(encodeURIComponent(s));
  return Uint8Array.from(utf8, (_, i) => utf8.charCodeAt(i));
}
function arrayToString(a) {
  const utf8 = String.fromCharCode.apply(null, a);
  return decodeURIComponent(escape(utf8));
}
function mergeArrays(...arrays) {
  const out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0));
  let offset = 0;
  for (const arr of arrays) {
    out.set(arr, offset);
    offset += arr.length;
  }
  return out;
}
function arraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
var init_utils = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/utils.js"() {
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/search.js
function coerce(a) {
  if (a instanceof Uint8Array) {
    return (index) => a[index];
  }
  return a;
}
function jsmemcmp(buf1, pos1, buf2, pos2, len) {
  const fn1 = coerce(buf1);
  const fn2 = coerce(buf2);
  for (let i = 0; i < len; ++i) {
    if (fn1(pos1 + i) !== fn2(pos2 + i)) {
      return false;
    }
  }
  return true;
}
function createOccurenceTable(s) {
  const table = new Array(256).fill(s.length);
  if (s.length > 1) {
    for (let i = 0; i < s.length - 1; i++) {
      table[s[i]] = s.length - 1 - i;
    }
  }
  return table;
}
var MATCH, StreamSearch, ReadableStreamSearch, EOQ, QueueableStreamSearch;
var init_search = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/search.js"() {
    init_utils();
    MATCH = Symbol("Match");
    StreamSearch = class {
      constructor(needle) {
        this._lookbehind = new Uint8Array();
        if (typeof needle === "string") {
          this._needle = needle = stringToArray(needle);
        } else {
          this._needle = needle;
        }
        this._lastChar = needle[needle.length - 1];
        this._occ = createOccurenceTable(needle);
      }
      feed(chunk) {
        let pos = 0;
        let tokens;
        const allTokens = [];
        while (pos !== chunk.length) {
          ;
          [pos, ...tokens] = this._feed(chunk, pos);
          allTokens.push(...tokens);
        }
        return allTokens;
      }
      end() {
        const tail = this._lookbehind;
        this._lookbehind = new Uint8Array();
        return tail;
      }
      _feed(data, bufPos) {
        const tokens = [];
        let pos = -this._lookbehind.length;
        if (pos < 0) {
          while (pos < 0 && pos <= data.length - this._needle.length) {
            const ch = this._charAt(data, pos + this._needle.length - 1);
            if (ch === this._lastChar && this._memcmp(data, pos, this._needle.length - 1)) {
              if (pos > -this._lookbehind.length) {
                tokens.push(this._lookbehind.slice(0, this._lookbehind.length + pos));
              }
              tokens.push(MATCH);
              this._lookbehind = new Uint8Array();
              return [
                pos + this._needle.length,
                ...tokens
              ];
            } else {
              pos += this._occ[ch];
            }
          }
          if (pos < 0) {
            while (pos < 0 && !this._memcmp(data, pos, data.length - pos)) {
              pos++;
            }
          }
          if (pos >= 0) {
            tokens.push(this._lookbehind);
            this._lookbehind = new Uint8Array();
          } else {
            const bytesToCutOff = this._lookbehind.length + pos;
            if (bytesToCutOff > 0) {
              tokens.push(this._lookbehind.slice(0, bytesToCutOff));
              this._lookbehind = this._lookbehind.slice(bytesToCutOff);
            }
            this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + data.length), (_, i) => this._charAt(data, i - this._lookbehind.length));
            return [
              data.length,
              ...tokens
            ];
          }
        }
        pos += bufPos;
        while (pos <= data.length - this._needle.length) {
          const ch = data[pos + this._needle.length - 1];
          if (ch === this._lastChar && data[pos] === this._needle[0] && jsmemcmp(this._needle, 0, data, pos, this._needle.length - 1)) {
            if (pos > bufPos) {
              tokens.push(data.slice(bufPos, pos));
            }
            tokens.push(MATCH);
            return [
              pos + this._needle.length,
              ...tokens
            ];
          } else {
            pos += this._occ[ch];
          }
        }
        if (pos < data.length) {
          while (pos < data.length && (data[pos] !== this._needle[0] || !jsmemcmp(data, pos, this._needle, 0, data.length - pos))) {
            ++pos;
          }
          if (pos < data.length) {
            this._lookbehind = data.slice(pos);
          }
        }
        if (pos > 0) {
          tokens.push(data.slice(bufPos, pos < data.length ? pos : data.length));
        }
        return [
          data.length,
          ...tokens
        ];
      }
      _charAt(data, pos) {
        if (pos < 0) {
          return this._lookbehind[this._lookbehind.length + pos];
        }
        return data[pos];
      }
      _memcmp(data, pos, len) {
        return jsmemcmp(this._charAt.bind(this, data), pos, this._needle, 0, len);
      }
    };
    ReadableStreamSearch = class {
      constructor(needle, _readableStream) {
        this._readableStream = _readableStream;
        this._search = new StreamSearch(needle);
      }
      async *[Symbol.asyncIterator]() {
        const reader = this._readableStream.getReader();
        try {
          while (true) {
            const result = await reader.read();
            if (result.done) {
              break;
            }
            yield* this._search.feed(result.value);
          }
          const tail = this._search.end();
          if (tail.length) {
            yield tail;
          }
        } finally {
          reader.releaseLock();
        }
      }
    };
    EOQ = Symbol("End of Queue");
    QueueableStreamSearch = class {
      constructor(needle) {
        this._chunksQueue = [];
        this._closed = false;
        this._search = new StreamSearch(needle);
      }
      push(...chunks) {
        if (this._closed) {
          throw new Error("cannot call push after close");
        }
        this._chunksQueue.push(...chunks);
        if (this._notify) {
          this._notify();
        }
      }
      close() {
        if (this._closed) {
          throw new Error("close was already called");
        }
        this._closed = true;
        this._chunksQueue.push(EOQ);
        if (this._notify) {
          this._notify();
        }
      }
      async *[Symbol.asyncIterator]() {
        while (true) {
          let chunk;
          while (!(chunk = this._chunksQueue.shift())) {
            await new Promise((resolve) => this._notify = resolve);
            this._notify = void 0;
          }
          if (chunk === EOQ) {
            break;
          }
          yield* this._search.feed(chunk);
        }
        const tail = this._search.end();
        if (tail.length) {
          yield tail;
        }
      }
    };
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/index.js
function parseContentDisposition(header) {
  const parts = header.split(";").map((part) => part.trim());
  if (parts.shift() !== "form-data") {
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(parts) + "`");
  }
  const out = {};
  for (const part of parts) {
    const kv = part.split("=", 2);
    if (kv.length !== 2) {
      throw new Error("malformed content-disposition header: key-value pair not found - " + part + " in `" + header + "`");
    }
    const [name, value] = kv;
    if (value[0] === '"' && value[value.length - 1] === '"') {
      out[name] = value.slice(1, -1).replace(/\\"/g, '"');
    } else if (value[0] !== '"' && value[value.length - 1] !== '"') {
      out[name] = value;
    } else if (value[0] === '"' && value[value.length - 1] !== '"' || value[0] !== '"' && value[value.length - 1] === '"') {
      throw new Error("malformed content-disposition header: mismatched quotations in `" + header + "`");
    }
  }
  if (!out.name) {
    throw new Error("malformed content-disposition header: missing field name in `" + header + "`");
  }
  return out;
}
function parsePartHeaders(lines) {
  const entries = [];
  let disposition = false;
  let line;
  while (typeof (line = lines.shift()) !== "undefined") {
    const colon = line.indexOf(":");
    if (colon === -1) {
      throw new Error("malformed multipart-form header: missing colon");
    }
    const header = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    switch (header) {
      case "content-disposition":
        disposition = true;
        entries.push(...Object.entries(parseContentDisposition(value)));
        break;
      case "content-type":
        entries.push([
          "contentType",
          value
        ]);
    }
  }
  if (!disposition) {
    throw new Error("malformed multipart-form header: missing content-disposition");
  }
  return Object.fromEntries(entries);
}
async function readHeaderLines(it, needle) {
  let firstChunk = true;
  let lastTokenWasMatch = false;
  const headerLines = [[]];
  const crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      throw new Error("malformed multipart-form data: unexpected end of stream");
    }
    if (firstChunk && result.value !== MATCH && arraysEqual(result.value.slice(0, 2), dash)) {
      return [
        void 0,
        new Uint8Array()
      ];
    }
    let chunk;
    if (result.value !== MATCH) {
      chunk = result.value;
    } else if (!lastTokenWasMatch) {
      chunk = needle;
    } else {
      throw new Error("malformed multipart-form data: unexpected boundary");
    }
    if (!chunk.length) {
      continue;
    }
    if (firstChunk) {
      firstChunk = false;
    }
    const tokens = crlfSearch.feed(chunk);
    for (const [i, token] of tokens.entries()) {
      const isMatch = token === MATCH;
      if (!isMatch && !token.length) {
        continue;
      }
      if (lastTokenWasMatch && isMatch) {
        tokens.push(crlfSearch.end());
        return [
          headerLines.filter((chunks) => chunks.length).map(mergeArrays2).map(arrayToString),
          mergeArrays(...tokens.slice(i + 1).map((token2) => token2 === MATCH ? CRLF : token2))
        ];
      }
      if (lastTokenWasMatch = isMatch) {
        headerLines.push([]);
      } else {
        headerLines[headerLines.length - 1].push(token);
      }
    }
  }
}
async function* streamMultipart(body, boundary2) {
  const needle = mergeArrays(dash, stringToArray(boundary2));
  const it = new ReadableStreamSearch(needle, body)[Symbol.asyncIterator]();
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      return;
    }
    if (result.value === MATCH) {
      break;
    }
  }
  const crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let feedChunk = function(chunk) {
      const chunks = [];
      for (const token of crlfSearch.feed(chunk)) {
        if (trailingCRLF) {
          chunks.push(CRLF);
        }
        if (!(trailingCRLF = token === MATCH)) {
          chunks.push(token);
        }
      }
      return mergeArrays(...chunks);
    };
    const [headerLines, tail] = await readHeaderLines(it, needle);
    if (!headerLines) {
      return;
    }
    async function nextToken() {
      const result = await it.next();
      if (result.done) {
        throw new Error("malformed multipart-form data: unexpected end of stream");
      }
      return result;
    }
    let trailingCRLF = false;
    let done = false;
    async function nextChunk() {
      const result = await nextToken();
      let chunk;
      if (result.value !== MATCH) {
        chunk = result.value;
      } else if (!trailingCRLF) {
        chunk = CRLF;
      } else {
        done = true;
        return { value: crlfSearch.end() };
      }
      return { value: feedChunk(chunk) };
    }
    const bufferedChunks = [{ value: feedChunk(tail) }];
    yield {
      ...parsePartHeaders(headerLines),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            const result = bufferedChunks.shift();
            if (!result) {
              break;
            }
            if (result.value.length > 0) {
              return result;
            }
          }
          for (; ; ) {
            if (done) {
              return {
                done,
                value: void 0
              };
            }
            const result = await nextChunk();
            if (result.value.length > 0) {
              return result;
            }
          }
        }
      }
    };
    while (!done) {
      bufferedChunks.push(await nextChunk());
    }
  }
}
var mergeArrays2, dash, CRLF;
var init_src = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/index.js"() {
    init_search();
    init_utils();
    mergeArrays2 = Function.prototype.apply.bind(mergeArrays, void 0);
    dash = stringToArray("--");
    CRLF = stringToArray("\r\n");
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/formData.js
function composeUploadHandlers(...handlers) {
  return async (part) => {
    for (let handler of handlers) {
      let value = await handler(part);
      if (typeof value !== "undefined" && value !== null) {
        return value;
      }
    }
    return void 0;
  };
}
async function parseMultipartFormData(request, uploadHandler) {
  let contentType = request.headers.get("Content-Type") || "";
  let [type, boundary2] = contentType.split(/\s*;\s*boundary=/);
  if (!request.body || !boundary2 || type !== "multipart/form-data") {
    throw new TypeError("Could not parse content as FormData.");
  }
  let formData = new FormData();
  let parts = streamMultipart(request.body, boundary2);
  for await (let part of parts) {
    if (part.done)
      break;
    if (typeof part.filename === "string") {
      part.filename = part.filename.split(/[/\\]/).pop();
    }
    let value = await uploadHandler(part);
    if (typeof value !== "undefined" && value !== null) {
      formData.append(part.name, value);
    }
  }
  return formData;
}
var init_formData = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/formData.js"() {
    init_src();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode;
var init_mode = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/mode.js"() {
    ServerMode = /* @__PURE__ */ function(ServerMode2) {
      ServerMode2["Development"] = "development";
      ServerMode2["Production"] = "production";
      ServerMode2["Test"] = "test";
      return ServerMode2;
    }({});
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/errors.js
function sanitizeError(error, serverMode) {
  if (error instanceof Error && serverMode !== ServerMode.Development) {
    let sanitized = new Error("Unexpected Server Error");
    sanitized.stack = void 0;
    return sanitized;
  }
  return error;
}
function sanitizeErrors(errors, serverMode) {
  return Object.entries(errors).reduce((acc, [routeId, error]) => {
    return Object.assign(acc, {
      [routeId]: sanitizeError(error, serverMode)
    });
  }, {});
}
function serializeError(error, serverMode) {
  let sanitized = sanitizeError(error, serverMode);
  return {
    message: sanitized.message,
    stack: sanitized.stack
  };
}
function serializeErrors(errors, serverMode) {
  if (!errors)
    return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = {
        ...val,
        __type: "RouteErrorResponse"
      };
    } else if (val instanceof Error) {
      let sanitized = sanitizeError(val, serverMode);
      serialized[key] = {
        message: sanitized.message,
        stack: sanitized.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...sanitized.name !== "Error" ? {
          __subType: sanitized.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
var init_errors2 = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/errors.js"() {
    init_router();
    init_mode();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/responses.js
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectStatusCode(statusCode) {
  return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(response) {
  return isRedirectStatusCode(response.status);
}
function isTrackedPromise(value) {
  return value != null && typeof value.then === "function" && value._tracked === true;
}
function createDeferredReadableStream(deferredData, signal, serverMode) {
  let encoder2 = new TextEncoder();
  let stream = new ReadableStream({
    async start(controller) {
      let criticalData = {};
      let preresolvedKeys = [];
      for (let [key, value] of Object.entries(deferredData.data)) {
        if (isTrackedPromise(value)) {
          criticalData[key] = `${DEFERRED_VALUE_PLACEHOLDER_PREFIX}${key}`;
          if (typeof value._data !== "undefined" || typeof value._error !== "undefined") {
            preresolvedKeys.push(key);
          }
        } else {
          criticalData[key] = value;
        }
      }
      controller.enqueue(encoder2.encode(JSON.stringify(criticalData) + "\n\n"));
      for (let preresolvedKey of preresolvedKeys) {
        enqueueTrackedPromise(controller, encoder2, preresolvedKey, deferredData.data[preresolvedKey], serverMode);
      }
      let unsubscribe = deferredData.subscribe((aborted, settledKey) => {
        if (settledKey) {
          enqueueTrackedPromise(controller, encoder2, settledKey, deferredData.data[settledKey], serverMode);
        }
      });
      await deferredData.resolveData(signal);
      unsubscribe();
      controller.close();
    }
  });
  return stream;
}
function enqueueTrackedPromise(controller, encoder2, settledKey, promise, serverMode) {
  if ("_error" in promise) {
    controller.enqueue(encoder2.encode("error:" + JSON.stringify({
      [settledKey]: promise._error instanceof Error ? serializeError(promise._error, serverMode) : promise._error
    }) + "\n\n"));
  } else {
    controller.enqueue(encoder2.encode("data:" + JSON.stringify({
      [settledKey]: promise._data ?? null
    }) + "\n\n"));
  }
}
var json2, defer2, redirect2, redirectDocument2, redirectStatusCodes, DEFERRED_VALUE_PLACEHOLDER_PREFIX;
var init_responses = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/responses.js"() {
    init_router();
    init_errors2();
    json2 = (data, init = {}) => {
      return json(data, init);
    };
    defer2 = (data, init = {}) => {
      return defer(data, init);
    };
    redirect2 = (url, init = 302) => {
      return redirect(url, init);
    };
    redirectDocument2 = (url, init = 302) => {
      return redirectDocument(url, init);
    };
    redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    DEFERRED_VALUE_PLACEHOLDER_PREFIX = "__deferred_promise:";
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/entry.js
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => {
    memo[routeId] = manifest[routeId].module;
    return memo;
  }, {});
}
var init_entry = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/entry.js"() {
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/headers.js
function getDocumentHeadersRR(build, context) {
  let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
  let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
  let errorHeaders;
  if (boundaryIdx >= 0) {
    let {
      actionHeaders,
      actionData,
      loaderHeaders,
      loaderData
    } = context;
    context.matches.slice(boundaryIdx).some((match) => {
      let id = match.route.id;
      if (actionHeaders[id] && (!actionData || actionData[id] === void 0)) {
        errorHeaders = actionHeaders[id];
      } else if (loaderHeaders[id] && loaderData[id] === void 0) {
        errorHeaders = loaderHeaders[id];
      }
      return errorHeaders != null;
    });
  }
  return matches.reduce((parentHeaders, match, idx) => {
    let {
      id
    } = match.route;
    let routeModule = build.routes[id].module;
    let loaderHeaders = context.loaderHeaders[id] || new Headers();
    let actionHeaders = context.actionHeaders[id] || new Headers();
    let includeErrorHeaders = errorHeaders != void 0 && idx === matches.length - 1;
    let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
    if (routeModule.headers == null) {
      let headers2 = new Headers(parentHeaders);
      if (includeErrorCookies) {
        prependCookies(errorHeaders, headers2);
      }
      prependCookies(actionHeaders, headers2);
      prependCookies(loaderHeaders, headers2);
      return headers2;
    }
    let headers = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders,
      errorHeaders: includeErrorHeaders ? errorHeaders : void 0
    }) : routeModule.headers : void 0);
    if (includeErrorCookies) {
      prependCookies(errorHeaders, headers);
    }
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}
var import_set_cookie_parser;
var init_headers = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/headers.js"() {
    import_set_cookie_parser = __toESM(require_set_cookie());
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/invariant.js
function invariant(value, message2) {
  if (value === false || value === null || typeof value === "undefined") {
    console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new");
    throw new Error(message2);
  }
}
var init_invariant = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/invariant.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js
function matchServerRoutes(routes, pathname) {
  let matches = matchRoutes(routes, pathname);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js"() {
    init_router();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/data.js
async function callRouteActionRR({
  loadContext,
  action,
  params,
  request,
  routeId
}) {
  let result = await action({
    request: stripDataParam(stripIndexParam(request)),
    context: loadContext,
    params
  });
  if (result === void 0) {
    throw new Error(`You defined an action for route "${routeId}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json2(result);
}
async function callRouteLoaderRR({
  loadContext,
  loader,
  params,
  request,
  routeId
}) {
  let result = await loader({
    request: stripDataParam(stripIndexParam(request)),
    context: loadContext,
    params
  });
  if (result === void 0) {
    throw new Error(`You defined a loader for route "${routeId}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  }
  if (isDeferredData(result)) {
    if (result.init && isRedirectStatusCode(result.init.status || 200)) {
      return redirect2(new Headers(result.init.headers).get("Location"), result.init);
    }
    return result;
  }
  return isResponse(result) ? result : json2(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_data");
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}
var init_data = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/data.js"() {
    init_responses();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routes.js
function groupRoutesByParentId(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    let parentId = route.parentId || "";
    if (!routes[parentId]) {
      routes[parentId] = [];
    }
    routes[parentId].push(route);
  });
  return routes;
}
function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => ({
    ...route,
    children: createRoutes(manifest, route.id, routesByParentId)
  }));
}
function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let commonRoute = {
      // Always include root due to default boundaries
      hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
      id: route.id,
      path: route.path,
      loader: route.module.loader ? (
        // Need to use RR's version here to permit the optional context even
        // though we know it'll always be provided in remix
        (args) => callRouteLoaderRR({
          request: args.request,
          params: args.params,
          loadContext: args.context,
          loader: route.module.loader,
          routeId: route.id
        })
      ) : void 0,
      action: route.module.action ? (args) => callRouteActionRR({
        request: args.request,
        params: args.params,
        loadContext: args.context,
        action: route.module.action,
        routeId: route.id
      }) : void 0,
      handle: route.module.handle
    };
    return route.index ? {
      index: true,
      ...commonRoute
    } : {
      caseSensitive: route.caseSensitive,
      children: createStaticHandlerDataRoutes(manifest, future, route.id, routesByParentId),
      ...commonRoute
    };
  });
}
var init_routes = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routes.js"() {
    init_data();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/markup.js
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
var ESCAPE_LOOKUP, ESCAPE_REGEX;
var init_markup = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/markup.js"() {
    ESCAPE_LOOKUP = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js
function createServerHandoffString(serverHandoff) {
  return escapeHtml(JSON.stringify(serverHandoff));
}
var init_serverHandoff = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js"() {
    init_markup();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/server.js
function derive(build, mode) {
  let routes = createRoutes(build.routes);
  let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
  let serverMode = isServerMode(mode) ? mode : ServerMode.Production;
  let staticHandler = createStaticHandler(dataRoutes);
  let errorHandler = build.entry.module.handleError || ((error, {
    request
  }) => {
    if (serverMode !== ServerMode.Test && !request.signal.aborted) {
      console.error(
        // @ts-expect-error This is "private" from users but intended for internal use
        isRouteErrorResponse(error) && error.error ? error.error : error
      );
    }
  });
  return {
    routes,
    dataRoutes,
    serverMode,
    staticHandler,
    errorHandler
  };
}
async function handleDataRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    if (isRedirectResponse(response)) {
      let headers = new Headers(response.headers);
      headers.set("X-Remix-Redirect", headers.get("Location"));
      headers.set("X-Remix-Status", response.status);
      headers.delete("Location");
      if (response.headers.get("Set-Cookie") !== null) {
        headers.set("X-Remix-Revalidate", "yes");
      }
      return new Response(null, {
        status: 204,
        headers
      });
    }
    if (UNSAFE_DEFERRED_SYMBOL in response) {
      let deferredData = response[UNSAFE_DEFERRED_SYMBOL];
      let body = createDeferredReadableStream(deferredData, request.signal, serverMode);
      let init = deferredData.init || {};
      let headers = new Headers(init.headers);
      headers.set("Content-Type", "text/remix-deferred");
      headers.set("X-Remix-Response", "yes");
      init.headers = headers;
      return new Response(body, init);
    }
    response.headers.set("X-Remix-Response", "yes");
    return response;
  } catch (error) {
    if (isResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
      return error;
    }
    if (isRouteErrorResponse(error)) {
      if (error) {
        handleError(error);
      }
      return errorResponseToJson(error, serverMode);
    }
    let errorInstance = error instanceof Error ? error : new Error("Unexpected Server Error");
    handleError(errorInstance);
    return json(serializeError(errorInstance, serverMode), {
      status: 500,
      headers: {
        "X-Remix-Error": "yes"
      }
    });
  }
}
async function handleDocumentRequestRR(serverMode, build, staticHandler, request, loadContext, handleError, criticalCss) {
  let context;
  try {
    context = await staticHandler.query(request, {
      requestContext: loadContext
    });
  } catch (error) {
    handleError(error);
    return new Response(null, {
      status: 500
    });
  }
  if (isResponse(context)) {
    return context;
  }
  if (context.errors) {
    Object.values(context.errors).forEach((err) => {
      if (!isRouteErrorResponse(err) || err.error) {
        handleError(err);
      }
    });
    context.errors = sanitizeErrors(context.errors, serverMode);
  }
  let headers = getDocumentHeadersRR(build, context);
  let entryContext = {
    manifest: build.assets,
    routeModules: createEntryRouteModules(build.routes),
    staticHandlerContext: context,
    criticalCss,
    serverHandoffString: createServerHandoffString({
      url: context.location.pathname,
      criticalCss,
      state: {
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: serializeErrors(context.errors, serverMode)
      },
      future: build.future
    }),
    future: build.future,
    serializeError: (err) => serializeError(err, serverMode)
  };
  let handleDocumentRequestFunction = build.entry.module.default;
  try {
    return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
  } catch (error) {
    handleError(error);
    context = getStaticContextFromError(staticHandler.dataRoutes, context, error);
    if (context.errors) {
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    entryContext = {
      ...entryContext,
      staticHandlerContext: context,
      serverHandoffString: createServerHandoffString({
        url: context.location.pathname,
        state: {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors(context.errors, serverMode)
        },
        future: build.future
      })
    };
    try {
      return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
    } catch (error2) {
      handleError(error2);
      return returnLastResortErrorResponse(error2, serverMode);
    }
  }
}
async function handleResourceRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    invariant(isResponse(response), "Expected a Response to be returned from queryRoute");
    return response;
  } catch (error) {
    if (isResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
      return error;
    }
    if (isRouteErrorResponse(error)) {
      if (error) {
        handleError(error);
      }
      return errorResponseToJson(error, serverMode);
    }
    handleError(error);
    return returnLastResortErrorResponse(error, serverMode);
  }
}
function errorResponseToJson(errorResponse, serverMode) {
  return json(serializeError(
    // @ts-expect-error This is "private" from users but intended for internal use
    errorResponse.error || new Error("Unexpected Server Error"),
    serverMode
  ), {
    status: errorResponse.status,
    statusText: errorResponse.statusText,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function returnLastResortErrorResponse(error, serverMode) {
  let message2 = "Unexpected Server Error";
  if (serverMode !== ServerMode.Production) {
    message2 += `

${String(error)}`;
  }
  return new Response(message2, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
var createRequestHandler;
var init_server = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/server.js"() {
    init_router();
    init_entry();
    init_errors2();
    init_headers();
    init_invariant();
    init_mode();
    init_routeMatching();
    init_routes();
    init_responses();
    init_serverHandoff();
    createRequestHandler = (build, mode) => {
      let _build;
      let routes;
      let serverMode;
      let staticHandler;
      let errorHandler;
      return async function requestHandler(request, loadContext = {}, {
        __criticalCss: criticalCss
      } = {}) {
        _build = typeof build === "function" ? await build() : build;
        if (typeof build === "function") {
          let derived = derive(_build, mode);
          routes = derived.routes;
          serverMode = derived.serverMode;
          staticHandler = derived.staticHandler;
          errorHandler = derived.errorHandler;
        } else if (!routes || !serverMode || !staticHandler || !errorHandler) {
          let derived = derive(_build, mode);
          routes = derived.routes;
          serverMode = derived.serverMode;
          staticHandler = derived.staticHandler;
          errorHandler = derived.errorHandler;
        }
        let url = new URL(request.url);
        let matches = matchServerRoutes(routes, url.pathname);
        let handleError = (error) => errorHandler(error, {
          context: loadContext,
          params: matches && matches.length > 0 ? matches[0].params : {},
          request
        });
        let response;
        if (url.searchParams.has("_data")) {
          let routeId = url.searchParams.get("_data");
          response = await handleDataRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError);
          if (_build.entry.module.handleDataRequest) {
            var _matches$find;
            response = await _build.entry.module.handleDataRequest(response, {
              context: loadContext,
              params: (matches === null || matches === void 0 ? void 0 : (_matches$find = matches.find((m) => m.route.id == routeId)) === null || _matches$find === void 0 ? void 0 : _matches$find.params) || {},
              request
            });
          }
        } else if (matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
          response = await handleResourceRequestRR(serverMode, staticHandler, matches.slice(-1)[0].route.id, request, loadContext, handleError);
        } else {
          response = await handleDocumentRequestRR(serverMode, _build, staticHandler, request, loadContext, handleError, criticalCss);
        }
        if (request.method === "HEAD") {
          return new Response(null, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });
        }
        return response;
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions.js
function flash(name) {
  return `__flash_${name}__`;
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`);
}
var createSession, isSession, createSessionStorageFactory;
var init_sessions = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions.js"() {
    init_cookies();
    init_warnings();
    createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            map.delete(flashName);
            return value;
          }
          return void 0;
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    };
    isSession = (object) => {
      return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
    };
    createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options);
          let data = id && await readData(id);
          return createSession(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          let expires = (options === null || options === void 0 ? void 0 : options.maxAge) != null ? new Date(Date.now() + options.maxAge * 1e3) : (options === null || options === void 0 ? void 0 : options.expires) != null ? options.expires : cookie.expires;
          if (id) {
            await updateData(id, data, expires);
          } else {
            id = await createData(data, expires);
          }
          return cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          await deleteData(session.id);
          return cookie.serialize("", {
            ...options,
            maxAge: void 0,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js
var createCookieSessionStorageFactory;
var init_cookieStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js"() {
    init_cookies();
    init_sessions();
    createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096) {
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          }
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            maxAge: void 0,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js
var createMemorySessionStorageFactory;
var init_memoryStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js"() {
    createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = Math.random().toString(36).substring(2, 10);
          map.set(id, {
            data,
            expires
          });
          return id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > /* @__PURE__ */ new Date()) {
              return data;
            }
            if (expires)
              map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js
var MaxPartSizeExceededError;
var init_errors3 = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js"() {
    MaxPartSizeExceededError = class extends Error {
      constructor(field, maxBytes) {
        super(`Field "${field}" exceeded upload size of ${maxBytes} bytes.`);
        this.field = field;
        this.maxBytes = maxBytes;
      }
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js
function createMemoryUploadHandler({
  filter,
  maxPartSize = 3e6
} = {}) {
  return async ({
    filename,
    contentType,
    name,
    data
  }) => {
    if (filter && !await filter({
      filename,
      contentType,
      name
    })) {
      return void 0;
    }
    let size = 0;
    let chunks = [];
    for await (let chunk of data) {
      size += chunk.byteLength;
      if (size > maxPartSize) {
        throw new MaxPartSizeExceededError(name, maxPartSize);
      }
      chunks.push(chunk);
    }
    if (typeof filename === "string") {
      return new File(chunks, filename, {
        type: contentType
      });
    }
    return await new Blob(chunks, {
      type: contentType
    }).text();
  };
}
var init_memoryUploadHandler = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js"() {
    init_errors3();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/dev.js
async function broadcastDevReady(build, origin) {
  origin ??= "https://first-translate-lambda-lounge.trycloudflare.com/";
  if (!origin)
    throw Error("Dev server origin not set");
  let url = new URL(origin);
  url.pathname = "ping";
  let response = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      buildHash: build.assets.version
    })
  }).catch((error) => {
    console.error(`Could not reach Remix dev server at ${url}`);
    throw error;
  });
  if (!response.ok) {
    console.error(`Could not reach Remix dev server at ${url} (${response.status})`);
    throw Error(await response.text());
  }
}
function logDevReady(build) {
  console.log(`[REMIX DEV] ${build.assets.version} ready`);
}
var init_dev = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/dev.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/index.js
var esm_exports4 = {};
__export(esm_exports4, {
  MaxPartSizeExceededError: () => MaxPartSizeExceededError,
  broadcastDevReady: () => broadcastDevReady,
  createCookieFactory: () => createCookieFactory,
  createCookieSessionStorageFactory: () => createCookieSessionStorageFactory,
  createMemorySessionStorageFactory: () => createMemorySessionStorageFactory,
  createRequestHandler: () => createRequestHandler,
  createSession: () => createSession,
  createSessionStorageFactory: () => createSessionStorageFactory,
  defer: () => defer2,
  isCookie: () => isCookie,
  isSession: () => isSession,
  json: () => json2,
  logDevReady: () => logDevReady,
  redirect: () => redirect2,
  redirectDocument: () => redirectDocument2,
  unstable_composeUploadHandlers: () => composeUploadHandlers,
  unstable_createMemoryUploadHandler: () => createMemoryUploadHandler,
  unstable_parseMultipartFormData: () => parseMultipartFormData
});
var init_esm4 = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/index.js"() {
    init_cookies();
    init_formData();
    init_responses();
    init_server();
    init_sessions();
    init_cookieStorage();
    init_memoryStorage();
    init_memoryUploadHandler();
    init_errors3();
    init_dev();
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/admin/graphql.js
var require_graphql = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/admin/graphql.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runtime = require_runtime();
    function graphqlClientFactory({
      params,
      handleClientError,
      session
    }) {
      return async function query(query, options) {
        var _options;
        const client = new params.api.clients.Graphql({
          session,
          apiVersion: (_options = options) === null || _options === void 0 ? void 0 : _options.apiVersion
        });
        try {
          var _options2, _options3, _options4;
          const apiResponse = await client.query({
            data: {
              query,
              variables: (_options2 = options) === null || _options2 === void 0 ? void 0 : _options2.variables
            },
            tries: (_options3 = options) === null || _options3 === void 0 ? void 0 : _options3.tries,
            extraHeaders: (_options4 = options) === null || _options4 === void 0 ? void 0 : _options4.headers
          });
          return new Response(JSON.stringify(apiResponse.body), {
            headers: runtime.flatHeaders(apiResponse.headers)
          });
        } catch (error) {
          if (handleClientError) {
            throw await handleClientError({
              error,
              params,
              session
            });
          }
          throw error;
        }
      };
    }
    exports.graphqlClientFactory = graphqlClientFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/admin/rest.js
var require_rest = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/admin/rest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function restClientFactory({
      params,
      handleClientError,
      session
    }) {
      const {
        api
      } = params;
      const client = new RemixRestClient({
        params,
        handleClientError,
        session
      });
      if (api.rest) {
        client.resources = {};
        const RestResourceClient = restResourceClientFactory({
          params,
          handleClientError,
          session
        });
        Object.entries(api.rest).forEach(([name, resource]) => {
          class RemixResource extends resource {
          }
          RemixResource.Client = RestResourceClient;
          Reflect.defineProperty(RemixResource, "name", {
            value: name
          });
          Reflect.set(client.resources, name, RemixResource);
        });
      }
      return client;
    }
    var RemixRestClient = class {
      constructor({
        params,
        session,
        handleClientError
      }) {
        this.session = void 0;
        this.params = void 0;
        this.handleClientError = void 0;
        this.params = params;
        this.handleClientError = handleClientError;
        this.session = session;
      }
      /**
       * Performs a GET request on the given path.
       */
      async get(params) {
        return this.makeRequest({
          method: "GET",
          ...params
        });
      }
      /**
       * Performs a POST request on the given path.
       */
      async post(params) {
        return this.makeRequest({
          method: "POST",
          ...params
        });
      }
      /**
       * Performs a PUT request on the given path.
       */
      async put(params) {
        return this.makeRequest({
          method: "PUT",
          ...params
        });
      }
      /**
       * Performs a DELETE request on the given path.
       */
      async delete(params) {
        return this.makeRequest({
          method: "DELETE",
          ...params
        });
      }
      async makeRequest(params) {
        const originalClient = new this.params.api.clients.Rest({
          session: this.session
        });
        const originalRequest = Reflect.get(originalClient, "request");
        try {
          const apiResponse = await originalRequest.call(originalClient, params);
          return new Response(JSON.stringify(apiResponse.body), {
            headers: apiResponse.headers
          });
        } catch (error) {
          if (this.handleClientError) {
            throw await this.handleClientError({
              error,
              session: this.session,
              params: this.params
            });
          } else
            throw new Error(error);
        }
      }
    };
    function restResourceClientFactory({
      params,
      handleClientError,
      session
    }) {
      const {
        api
      } = params;
      const ApiClient = api.clients.Rest;
      return class RestResourceClient extends ApiClient {
        async request(requestParams) {
          const originalClient = new api.clients.Rest({
            session
          });
          const originalRequest = Reflect.get(originalClient, "request");
          try {
            return await originalRequest.call(originalClient, requestParams);
          } catch (error) {
            if (handleClientError) {
              throw await handleClientError({
                error,
                params,
                session
              });
            } else
              throw new Error(error);
          }
        }
      };
    }
    exports.restClientFactory = restClientFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/admin/factory.js
var require_factory = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/admin/factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var graphql = require_graphql();
    var rest = require_rest();
    function adminClientFactory({
      params,
      handleClientError,
      session
    }) {
      return {
        rest: rest.restClientFactory({
          params,
          session,
          handleClientError
        }),
        graphql: graphql.graphqlClientFactory({
          params,
          session,
          handleClientError
        })
      };
    }
    exports.adminClientFactory = adminClientFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/const.js
var require_const = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/const.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var APP_BRIDGE_URL = "https://cdn.shopify.com/shopifycloud/app-bridge.js";
    var REAUTH_URL_HEADER = "X-Shopify-API-Request-Failure-Reauthorize-Url";
    exports.APP_BRIDGE_URL = APP_BRIDGE_URL;
    exports.REAUTH_URL_HEADER = REAUTH_URL_HEADER;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/ensure-cors-headers.js
var require_ensure_cors_headers = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/ensure-cors-headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _const = require_const();
    function ensureCORSHeadersFactory(params, request, corsHeaders = []) {
      const {
        logger,
        config
      } = params;
      return function ensureCORSHeaders(response) {
        const origin = request.headers.get("Origin");
        if (origin && origin !== config.appUrl) {
          logger.debug("Request comes from a different origin, adding CORS headers");
          const corsHeadersSet = /* @__PURE__ */ new Set(["Authorization", "Content-Type", ...corsHeaders]);
          response.headers.set("Access-Control-Allow-Origin", "*");
          response.headers.set("Access-Control-Allow-Headers", [...corsHeadersSet].join(", "));
          response.headers.set("Access-Control-Expose-Headers", _const.REAUTH_URL_HEADER);
        }
        return response;
      };
    }
    exports.ensureCORSHeadersFactory = ensureCORSHeadersFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/validate-session-token.js
var require_validate_session_token = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/validate-session-token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function validateSessionToken({
      api,
      logger
    }, token, {
      checkAudience = true
    } = {}) {
      logger.debug("Validating session token");
      try {
        const payload = await api.session.decodeSessionToken(token, {
          checkAudience
        });
        logger.debug("Session token is valid", {
          payload: JSON.stringify(payload)
        });
        return payload;
      } catch (error) {
        logger.debug(`Failed to validate session token: ${error.message}`);
        throw new Response(void 0, {
          status: 401,
          statusText: "Unauthorized"
        });
      }
    }
    exports.validateSessionToken = validateSessionToken;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/get-session-token-header.js
var require_get_session_token_header = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/get-session-token-header.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getSessionTokenHeader(request) {
      var _request$headers$get;
      return (_request$headers$get = request.headers.get("authorization")) === null || _request$headers$get === void 0 ? void 0 : _request$headers$get.replace("Bearer ", "");
    }
    exports.getSessionTokenHeader = getSessionTokenHeader;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/reject-bot-request.js
var require_reject_bot_request = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/reject-bot-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var isbot = require_isbot();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var isbot__default = /* @__PURE__ */ _interopDefaultLegacy(isbot);
    function rejectBotRequest({
      logger
    }, request) {
      if (isbot__default["default"](request.headers.get("User-Agent"))) {
        logger.debug("Request is from a bot, skipping auth");
        throw new Response(void 0, {
          status: 410,
          statusText: "Gone"
        });
      }
    }
    exports.rejectBotRequest = rejectBotRequest;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/respond-to-options-request.js
var require_respond_to_options_request = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/respond-to-options-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ensureCorsHeaders = require_ensure_cors_headers();
    function respondToOptionsRequest(params, request, corsHeaders) {
      if (request.method === "OPTIONS") {
        const ensureCORSHeaders = ensureCorsHeaders.ensureCORSHeadersFactory(params, request, corsHeaders);
        throw ensureCORSHeaders(new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Max-Age": "7200"
          }
        }));
      }
    }
    exports.respondToOptionsRequest = respondToOptionsRequest;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/begin-auth.js
var require_begin_auth = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/begin-auth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function beginAuth(params, request, isOnline, shop) {
      const {
        api,
        config
      } = params;
      throw await api.auth.begin({
        shop,
        callbackPath: config.auth.callbackPath,
        isOnline,
        rawRequest: request
      });
    }
    exports.beginAuth = beginAuth;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect-with-exitiframe.js
var require_redirect_with_exitiframe = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect-with-exitiframe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm4(), __toCommonJS(esm_exports4));
    function redirectWithExitIframe(params, request, shop) {
      const {
        api,
        config
      } = params;
      const url = new URL(request.url);
      const queryParams = url.searchParams;
      const host = api.utils.sanitizeHost(queryParams.get("host"));
      queryParams.set("shop", shop);
      queryParams.set("exitIframe", `${config.auth.path}?shop=${shop}`);
      if (host) {
        queryParams.set("host", host);
      }
      throw serverRuntime.redirect(`${config.auth.exitIframePath}?${queryParams.toString()}`);
    }
    exports.redirectWithExitIframe = redirectWithExitIframe;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect-with-app-bridge-headers.js
var require_redirect_with_app_bridge_headers = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect-with-app-bridge-headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _const = require_const();
    function redirectWithAppBridgeHeaders(redirectUri) {
      throw new Response(void 0, {
        status: 401,
        statusText: "Unauthorized",
        headers: getAppBridgeHeaders(redirectUri)
      });
    }
    function getAppBridgeHeaders(url) {
      return new Headers({
        [_const.REAUTH_URL_HEADER]: url
      });
    }
    exports.getAppBridgeHeaders = getAppBridgeHeaders;
    exports.redirectWithAppBridgeHeaders = redirectWithAppBridgeHeaders;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect-to-auth-page.js
var require_redirect_to_auth_page = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect-to-auth-page.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var beginAuth = require_begin_auth();
    var redirectWithExitiframe = require_redirect_with_exitiframe();
    var redirectWithAppBridgeHeaders = require_redirect_with_app_bridge_headers();
    async function redirectToAuthPage(params, request, shop, isOnline = false) {
      const {
        config
      } = params;
      const url = new URL(request.url);
      const isEmbeddedRequest = url.searchParams.get("embedded") === "1";
      const isXhrRequest = request.headers.get("authorization");
      if (isXhrRequest) {
        const redirectUri = new URL(config.auth.path, config.appUrl);
        redirectUri.searchParams.set("shop", shop);
        redirectWithAppBridgeHeaders.redirectWithAppBridgeHeaders(redirectUri.toString());
      } else if (isEmbeddedRequest) {
        redirectWithExitiframe.redirectWithExitIframe(params, request, shop);
      } else {
        throw await beginAuth.beginAuth(params, request, isOnline, shop);
      }
    }
    exports.redirectToAuthPage = redirectToAuthPage;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/billing/cancel.js
var require_cancel2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/billing/cancel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shopifyApi = require_lib();
    var redirectToAuthPage = require_redirect_to_auth_page();
    init_esm4();
    function cancelBillingFactory(params, request, session) {
      return async function cancelBilling(options) {
        const {
          api,
          logger
        } = params;
        logger.debug("Cancelling billing", {
          shop: session.shop,
          ...options
        });
        try {
          return await api.billing.cancel({
            session,
            subscriptionId: options.subscriptionId,
            isTest: options.isTest,
            prorate: options.prorate
          });
        } catch (error) {
          if (error instanceof shopifyApi.HttpResponseError && error.response.code === 401) {
            logger.debug("API token was invalid, redirecting to OAuth", {
              shop: session.shop
            });
            throw await redirectToAuthPage.redirectToAuthPage(params, request, session.shop);
          } else {
            throw error;
          }
        }
      };
    }
    exports.cancelBillingFactory = cancelBillingFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/billing/require.js
var require_require = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/billing/require.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shopifyApi = require_lib();
    var redirectToAuthPage = require_redirect_to_auth_page();
    init_esm4();
    function requireBillingFactory(params, request, session) {
      const {
        api,
        logger
      } = params;
      return async function requireBilling(options) {
        const logContext = {
          shop: session.shop,
          plans: options.plans,
          isTest: options.isTest
        };
        logger.debug("Checking billing for the shop", logContext);
        let data;
        try {
          data = await api.billing.check({
            session,
            plans: options.plans,
            isTest: options.isTest,
            returnObject: true
          });
        } catch (error) {
          if (error instanceof shopifyApi.HttpResponseError && error.response.code === 401) {
            logger.debug("API token was invalid, redirecting to OAuth", logContext);
            throw await redirectToAuthPage.redirectToAuthPage(params, request, session.shop);
          } else {
            throw error;
          }
        }
        if (!data.hasActivePayment) {
          logger.debug("Billing check failed", logContext);
          throw await options.onFailure(new Error("Billing check failed"));
        }
        logger.debug("Billing check succeeded", logContext);
        return data;
      };
    }
    exports.requireBillingFactory = requireBillingFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/billing/request.js
var require_request2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/billing/request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shopifyApi = require_lib();
    var serverRuntime = (init_esm4(), __toCommonJS(esm_exports4));
    var redirectToAuthPage = require_redirect_to_auth_page();
    var redirectWithAppBridgeHeaders = require_redirect_with_app_bridge_headers();
    function requestBillingFactory(params, request, session) {
      return async function requestBilling({
        plan,
        isTest,
        returnUrl,
        ...overrides
      }) {
        const {
          api,
          logger
        } = params;
        logger.info("Requesting billing", {
          shop: session.shop,
          plan,
          isTest,
          returnUrl
        });
        let result;
        try {
          result = await api.billing.request({
            plan,
            session,
            isTest,
            returnUrl,
            returnObject: true,
            ...overrides
          });
        } catch (error) {
          if (error instanceof shopifyApi.HttpResponseError && error.response.code === 401) {
            logger.debug("API token was invalid, redirecting to OAuth", {
              shop: session.shop
            });
            throw await redirectToAuthPage.redirectToAuthPage(params, request, session.shop);
          } else {
            throw error;
          }
        }
        throw redirectOutOfApp(params, request, result.confirmationUrl, session.shop);
      };
    }
    function redirectOutOfApp(params, request, url, shop) {
      const {
        config,
        logger
      } = params;
      logger.debug("Redirecting out of app", {
        url
      });
      const requestUrl = new URL(request.url);
      const isEmbeddedRequest = requestUrl.searchParams.get("embedded") === "1";
      const isXhrRequest = request.headers.get("authorization");
      if (isXhrRequest) {
        throw new Response(void 0, {
          status: 401,
          statusText: "Unauthorized",
          headers: redirectWithAppBridgeHeaders.getAppBridgeHeaders(url)
        });
      } else if (isEmbeddedRequest) {
        const params2 = new URLSearchParams({
          shop,
          host: requestUrl.searchParams.get("host"),
          exitIframe: url
        });
        throw serverRuntime.redirect(`${config.auth.exitIframePath}?${params2.toString()}`);
      } else {
        throw serverRuntime.redirect(url);
      }
    }
    exports.requestBillingFactory = requestBillingFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/handle-client-error.js
var require_handle_client_error = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/handle-client-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shopifyApi = require_lib();
    var redirectToAuthPage = require_redirect_to_auth_page();
    function handleClientErrorFactory({
      request
    }) {
      return async function handleClientError({
        error,
        params,
        session
      }) {
        if (error instanceof shopifyApi.HttpResponseError !== true) {
          params.logger.debug(`Got a response error from the API: ${error.message}`);
          throw error;
        }
        params.logger.debug(`Got an HTTP response error from the API: ${error.message}`, {
          code: error.response.code,
          statusText: error.response.statusText,
          body: JSON.stringify(error.response.body)
        });
        if (error.response.code === 401) {
          throw await redirectToAuthPage.redirectToAuthPage(params, request, session.shop);
        }
        throw new Response(JSON.stringify(error.response.body), {
          status: error.response.code,
          headers: {
            "Content-Type": error.response.headers["Content-Type"]
          }
        });
      };
    }
    exports.handleClientErrorFactory = handleClientErrorFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/app-bridge-url.js
var require_app_bridge_url = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/app-bridge-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _const = require_const();
    var appBridgeUrlOverride;
    function setAppBridgeUrlOverride(url) {
      appBridgeUrlOverride = url;
    }
    function appBridgeUrl() {
      return appBridgeUrlOverride || _const.APP_BRIDGE_URL;
    }
    exports.appBridgeUrl = appBridgeUrl;
    exports.setAppBridgeUrlOverride = setAppBridgeUrlOverride;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/add-response-headers.js
var require_add_response_headers = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/helpers/add-response-headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function addDocumentResponseHeadersFactory(params) {
      const {
        api,
        config
      } = params;
      return function(request, headers) {
        const {
          searchParams
        } = new URL(request.url);
        const shop = api.utils.sanitizeShop(searchParams.get("shop"));
        addDocumentResponseHeaders(headers, config.isEmbeddedApp, shop);
      };
    }
    function addDocumentResponseHeaders(headers, isEmbeddedApp, shop) {
      if (shop) {
        headers.set("Link", '<https://cdn.shopify.com/shopifycloud/app-bridge.js>; rel="preload"; as="script";');
      }
      if (isEmbeddedApp) {
        if (shop) {
          headers.set("Content-Security-Policy", `frame-ancestors https://${shop} https://admin.shopify.com https://*.spin.dev;`);
        }
      } else {
        headers.set("Content-Security-Policy", `frame-ancestors 'none';`);
      }
    }
    exports.addDocumentResponseHeaders = addDocumentResponseHeaders;
    exports.addDocumentResponseHeadersFactory = addDocumentResponseHeadersFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/render-app-bridge.js
var require_render_app_bridge = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/render-app-bridge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var appBridgeUrl = require_app_bridge_url();
    var addResponseHeaders = require_add_response_headers();
    function renderAppBridge({
      config
    }, request, redirectTo) {
      let redirectToScript = "";
      if (redirectTo) {
        var _redirectTo$target;
        const destination = new URL(redirectTo.url, config.appUrl);
        const target = (_redirectTo$target = redirectTo.target) !== null && _redirectTo$target !== void 0 ? _redirectTo$target : "_top";
        redirectToScript = `<script>window.open(${JSON.stringify(destination.toString())}, ${JSON.stringify(target)})<\/script>`;
      }
      const responseHeaders = new Headers({
        "content-type": "text/html;charset=utf-8"
      });
      addResponseHeaders.addDocumentResponseHeaders(responseHeaders, config.isEmbeddedApp, new URL(request.url).searchParams.get("shop"));
      throw new Response(`
      <script data-api-key="${config.apiKey}" src="${appBridgeUrl.appBridgeUrl()}"><\/script>
      ${redirectToScript}
    `, {
        headers: responseHeaders
      });
    }
    exports.renderAppBridge = renderAppBridge;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect.js
var require_redirect = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/helpers/redirect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm4(), __toCommonJS(esm_exports4));
    var getSessionTokenHeader = require_get_session_token_header();
    var renderAppBridge = require_render_app_bridge();
    var redirectWithAppBridgeHeaders = require_redirect_with_app_bridge_headers();
    function redirectFactory(params, request) {
      const {
        config
      } = params;
      return function redirect3(url, init) {
        const {
          searchParams
        } = new URL(request.url);
        const parsedUrl = new URL(url, config.appUrl);
        const isSameOrigin = parsedUrl.origin === config.appUrl;
        if (isSameOrigin || url.startsWith("/")) {
          searchParams.forEach((value, key) => {
            if (!parsedUrl.searchParams.has(key)) {
              parsedUrl.searchParams.set(key, value);
            }
          });
        }
        const target = typeof init !== "number" && (init === null || init === void 0 ? void 0 : init.target) || "_self";
        if (target === "_self") {
          if (isBounceRequest(request)) {
            throw renderAppBridge.renderAppBridge(params, request, {
              url: parsedUrl.toString(),
              target
            });
          } else {
            return serverRuntime.redirect(parsedUrl.toString(), init);
          }
        } else if (isDataRequest(request)) {
          throw redirectWithAppBridgeHeaders.redirectWithAppBridgeHeaders(parsedUrl.toString());
        } else if (isEmbeddedRequest(request)) {
          throw renderAppBridge.renderAppBridge(params, request, {
            url: parsedUrl.toString(),
            target
          });
        }
        return serverRuntime.redirect(url, init);
      };
    }
    function isBounceRequest(request) {
      return Boolean(getSessionTokenHeader.getSessionTokenHeader(request)) && request.headers.has("X-Shopify-Bounce");
    }
    function isDataRequest(request) {
      const {
        searchParams
      } = new URL(request.url);
      const isGet = request.method === "GET";
      const sessionTokenHeader = Boolean(getSessionTokenHeader.getSessionTokenHeader(request));
      const sessionTokenSearchParam = searchParams.has("id_token");
      return sessionTokenHeader && !sessionTokenSearchParam && !isBounceRequest(request) && (!isEmbeddedRequest(request) || !isGet);
    }
    function isEmbeddedRequest(request) {
      const {
        searchParams
      } = new URL(request.url);
      return searchParams.get("embedded") === "1";
    }
    exports.redirectFactory = redirectFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/authenticate.js
var require_authenticate = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/admin/authenticate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm4(), __toCommonJS(esm_exports4));
    var shopifyApi = require_lib();
    var factory = require_factory();
    var ensureCorsHeaders = require_ensure_cors_headers();
    var validateSessionToken = require_validate_session_token();
    var getSessionTokenHeader = require_get_session_token_header();
    var rejectBotRequest = require_reject_bot_request();
    var respondToOptionsRequest = require_respond_to_options_request();
    var cancel = require_cancel2();
    var require$1 = require_require();
    var request = require_request2();
    var beginAuth = require_begin_auth();
    var handleClientError = require_handle_client_error();
    var redirectToAuthPage = require_redirect_to_auth_page();
    var redirectWithExitiframe = require_redirect_with_exitiframe();
    var redirect3 = require_redirect();
    var renderAppBridge = require_render_app_bridge();
    var SESSION_TOKEN_PARAM = "id_token";
    var AuthStrategy = class {
      constructor({
        api,
        config,
        logger
      }) {
        this.api = void 0;
        this.config = void 0;
        this.logger = void 0;
        this.api = api;
        this.config = config;
        this.logger = logger;
      }
      async authenticateAdmin(request2) {
        const {
          api,
          logger,
          config
        } = this;
        rejectBotRequest.rejectBotRequest({
          api,
          logger,
          config
        }, request2);
        respondToOptionsRequest.respondToOptionsRequest({
          api,
          logger,
          config
        }, request2);
        const cors = ensureCorsHeaders.ensureCORSHeadersFactory({
          api,
          logger,
          config
        }, request2);
        let sessionContext;
        try {
          sessionContext = await this.authenticateAndGetSessionContext(request2);
        } catch (errorOrResponse) {
          if (errorOrResponse instanceof Response) {
            cors(errorOrResponse);
          }
          throw errorOrResponse;
        }
        const context = {
          admin: this.createAdminApiContext(request2, sessionContext.session),
          billing: this.createBillingContext(request2, sessionContext.session),
          session: sessionContext.session,
          cors
        };
        if (config.isEmbeddedApp) {
          return {
            ...context,
            sessionToken: sessionContext.token,
            redirect: redirect3.redirectFactory({
              api,
              config,
              logger
            }, request2)
          };
        } else {
          return context;
        }
      }
      async authenticateAndGetSessionContext(request2) {
        const {
          api,
          logger,
          config
        } = this;
        const params = {
          api,
          logger,
          config
        };
        const url = new URL(request2.url);
        const isPatchSessionToken = url.pathname === config.auth.patchSessionTokenPath;
        const isExitIframe = url.pathname === config.auth.exitIframePath;
        const isAuthRequest = url.pathname === config.auth.path;
        const isAuthCallbackRequest = url.pathname === config.auth.callbackPath;
        const sessionTokenHeader = getSessionTokenHeader.getSessionTokenHeader(request2);
        logger.info("Authenticating admin request");
        if (isPatchSessionToken) {
          logger.debug("Rendering bounce page");
          throw renderAppBridge.renderAppBridge(params, request2);
        } else if (isExitIframe) {
          const destination = url.searchParams.get("exitIframe");
          logger.debug("Rendering exit iframe page", {
            destination
          });
          throw renderAppBridge.renderAppBridge(params, request2, {
            url: destination
          });
        } else if (isAuthCallbackRequest) {
          throw await this.handleAuthCallbackRequest(request2);
        } else if (isAuthRequest) {
          throw await this.handleAuthBeginRequest(request2);
        } else if (sessionTokenHeader) {
          const sessionToken = await validateSessionToken.validateSessionToken({
            api,
            logger,
            config
          }, sessionTokenHeader);
          return this.validateAuthenticatedSession(request2, sessionToken);
        } else {
          await this.validateUrlParams(request2);
          await this.ensureInstalledOnShop(request2);
          await this.ensureAppIsEmbeddedIfRequired(request2);
          await this.ensureSessionTokenSearchParamIfRequired(request2);
          return this.ensureSessionExists(request2);
        }
      }
      async handleAuthBeginRequest(request2) {
        const {
          api,
          config,
          logger
        } = this;
        logger.info("Handling OAuth begin request");
        const shop = this.ensureValidShopParam(request2);
        logger.debug("OAuth request contained valid shop", {
          shop
        });
        if (config.isEmbeddedApp && request2.headers.get("Sec-Fetch-Dest") === "iframe") {
          logger.debug("Auth request in iframe detected, exiting iframe", {
            shop
          });
          throw redirectWithExitiframe.redirectWithExitIframe({
            api,
            config,
            logger
          }, request2, shop);
        } else {
          throw await beginAuth.beginAuth({
            api,
            config,
            logger
          }, request2, false, shop);
        }
      }
      async handleAuthCallbackRequest(request2) {
        const {
          api,
          config,
          logger
        } = this;
        logger.info("Handling OAuth callback request");
        const shop = this.ensureValidShopParam(request2);
        try {
          const {
            session,
            headers: responseHeaders
          } = await api.auth.callback({
            rawRequest: request2
          });
          await config.sessionStorage.storeSession(session);
          if (config.useOnlineTokens && !session.isOnline) {
            logger.info("Requesting online access token for offline session");
            await beginAuth.beginAuth({
              api,
              config,
              logger
            }, request2, true, shop);
          }
          if (config.hooks.afterAuth) {
            logger.info("Running afterAuth hook");
            await config.hooks.afterAuth({
              session,
              admin: this.createAdminApiContext(request2, session)
            });
          }
          throw await this.redirectToShopifyOrAppRoot(request2, responseHeaders);
        } catch (error) {
          if (error instanceof Response) {
            throw error;
          }
          logger.error("Error during OAuth callback", {
            error: error.message
          });
          if (error instanceof shopifyApi.CookieNotFound) {
            throw await this.handleAuthBeginRequest(request2);
          } else if (error instanceof shopifyApi.InvalidHmacError || error instanceof shopifyApi.InvalidOAuthError) {
            throw new Response(void 0, {
              status: 400,
              statusText: "Invalid OAuth Request"
            });
          } else {
            throw new Response(void 0, {
              status: 500,
              statusText: "Internal Server Error"
            });
          }
        }
      }
      async validateUrlParams(request2) {
        const {
          api,
          config,
          logger
        } = this;
        if (config.isEmbeddedApp) {
          const url = new URL(request2.url);
          const shop = api.utils.sanitizeShop(url.searchParams.get("shop"));
          if (!shop) {
            logger.debug("Missing or invalid shop, redirecting to login path", {
              shop
            });
            throw serverRuntime.redirect(config.auth.loginPath);
          }
          const host = api.utils.sanitizeHost(url.searchParams.get("host"));
          if (!host) {
            logger.debug("Invalid host, redirecting to login path", {
              host: url.searchParams.get("host")
            });
            throw serverRuntime.redirect(config.auth.loginPath);
          }
        }
      }
      async ensureInstalledOnShop(request2) {
        const {
          api,
          config,
          logger
        } = this;
        const url = new URL(request2.url);
        let shop = url.searchParams.get("shop");
        const isEmbedded = url.searchParams.get("embedded") === "1";
        logger.debug("Ensuring app is installed on shop", {
          shop
        });
        const offlineId = shop ? api.session.getOfflineId(shop) : await api.session.getCurrentId({
          isOnline: false,
          rawRequest: request2
        });
        if (!offlineId) {
          logger.info("Could not find a shop, can't authenticate request");
          throw new Response(void 0, {
            status: 400,
            statusText: "Bad Request"
          });
        }
        const offlineSession = await config.sessionStorage.loadSession(offlineId);
        if (!offlineSession) {
          logger.info("Shop hasn't installed app yet, redirecting to OAuth", {
            shop
          });
          if (isEmbedded) {
            redirectWithExitiframe.redirectWithExitIframe({
              api,
              config,
              logger
            }, request2, shop);
          } else {
            throw await beginAuth.beginAuth({
              api,
              config,
              logger
            }, request2, false, shop);
          }
        }
        shop = shop || offlineSession.shop;
        if (config.isEmbeddedApp && !isEmbedded) {
          try {
            logger.debug("Ensuring offline session is valid before embedding", {
              shop
            });
            await this.testSession(offlineSession);
            logger.debug("Offline session is still valid, embedding app", {
              shop
            });
          } catch (error) {
            if (error instanceof shopifyApi.HttpResponseError) {
              if (error.response.code === 401) {
                logger.info("Shop session is no longer valid, redirecting to OAuth", {
                  shop
                });
                throw await beginAuth.beginAuth({
                  api,
                  config,
                  logger
                }, request2, false, shop);
              } else {
                const message2 = JSON.stringify(error.response.body, null, 2);
                logger.error(`Unexpected error during session validation: ${message2}`, {
                  shop
                });
                throw new Response(void 0, {
                  status: error.response.code,
                  statusText: error.response.statusText
                });
              }
            } else if (error instanceof shopifyApi.GraphqlQueryError) {
              const context = {
                shop
              };
              if (error.response) {
                context.response = JSON.stringify(error.response);
              }
              logger.error(`Unexpected error during session validation: ${error.message}`, context);
              throw new Response(void 0, {
                status: 500,
                statusText: "Internal Server Error"
              });
            }
          }
        }
      }
      async testSession(session) {
        const {
          api
        } = this;
        const client = new api.clients.Graphql({
          session
        });
        await client.query({
          data: `#graphql
        query shopifyAppShopName {
          shop {
            name
          }
        }
      `
        });
      }
      ensureValidShopParam(request2) {
        const url = new URL(request2.url);
        const {
          api
        } = this;
        const shop = api.utils.sanitizeShop(url.searchParams.get("shop"));
        if (!shop) {
          throw new Response("Shop param is invalid", {
            status: 400
          });
        }
        return shop;
      }
      async ensureAppIsEmbeddedIfRequired(request2) {
        const {
          api,
          logger
        } = this;
        const url = new URL(request2.url);
        const shop = url.searchParams.get("shop");
        if (api.config.isEmbeddedApp && url.searchParams.get("embedded") !== "1") {
          logger.debug("App is not embedded, redirecting to Shopify", {
            shop
          });
          await this.redirectToShopifyOrAppRoot(request2);
        }
      }
      async ensureSessionTokenSearchParamIfRequired(request2) {
        const {
          api,
          logger
        } = this;
        const url = new URL(request2.url);
        const shop = url.searchParams.get("shop");
        const searchParamSessionToken = url.searchParams.get(SESSION_TOKEN_PARAM);
        if (api.config.isEmbeddedApp && !searchParamSessionToken) {
          logger.debug("Missing session token in search params, going to bounce page", {
            shop
          });
          this.redirectToBouncePage(url);
        }
      }
      async ensureSessionExists(request2) {
        const {
          api,
          config,
          logger
        } = this;
        const url = new URL(request2.url);
        const shop = url.searchParams.get("shop");
        const searchParamSessionToken = url.searchParams.get(SESSION_TOKEN_PARAM);
        if (api.config.isEmbeddedApp) {
          logger.debug("Session token is present in query params, validating session", {
            shop
          });
          const sessionToken = await validateSessionToken.validateSessionToken({
            api,
            config,
            logger
          }, searchParamSessionToken);
          return this.validateAuthenticatedSession(request2, sessionToken);
        } else {
          const sessionId = await api.session.getCurrentId({
            isOnline: config.useOnlineTokens,
            rawRequest: request2
          });
          if (!sessionId) {
            logger.debug("Session id not found in cookies, redirecting to OAuth", {
              shop
            });
            throw await beginAuth.beginAuth({
              api,
              config,
              logger
            }, request2, false, shop);
          }
          return {
            session: await this.loadSession(request2, shop, sessionId)
          };
        }
      }
      async validateAuthenticatedSession(request2, payload) {
        const {
          config,
          logger,
          api
        } = this;
        const dest = new URL(payload.dest);
        const shop = dest.hostname;
        const sessionId = config.useOnlineTokens ? api.session.getJwtSessionId(shop, payload.sub) : api.session.getOfflineId(shop);
        const session = await this.loadSession(request2, shop, sessionId);
        logger.debug("Found session, request is valid", {
          shop
        });
        return {
          session,
          token: payload
        };
      }
      async loadSession(request2, shop, sessionId) {
        const {
          api,
          config,
          logger
        } = this;
        logger.debug("Loading session from storage", {
          sessionId
        });
        const session = await config.sessionStorage.loadSession(sessionId);
        if (!session) {
          logger.debug("No session found, redirecting to OAuth", {
            shop
          });
          await redirectToAuthPage.redirectToAuthPage({
            api,
            config,
            logger
          }, request2, shop);
        } else if (!session.isActive(config.scopes)) {
          logger.debug("Found a session, but it has expired, redirecting to OAuth", {
            shop
          });
          await redirectToAuthPage.redirectToAuthPage({
            api,
            config,
            logger
          }, request2, shop);
        }
        return session;
      }
      async redirectToShopifyOrAppRoot(request2, responseHeaders) {
        const {
          api
        } = this;
        const url = new URL(request2.url);
        const host = api.utils.sanitizeHost(url.searchParams.get("host"));
        const shop = api.utils.sanitizeShop(url.searchParams.get("shop"));
        const redirectUrl = api.config.isEmbeddedApp ? await api.auth.getEmbeddedAppUrl({
          rawRequest: request2
        }) : `/?shop=${shop}&host=${encodeURIComponent(host)}`;
        throw serverRuntime.redirect(redirectUrl, {
          headers: responseHeaders
        });
      }
      redirectToBouncePage(url) {
        const {
          config
        } = this;
        url.searchParams.set("shopify-reload", `${config.appUrl}${url.pathname}${url.search}`);
        throw serverRuntime.redirect(`${config.auth.patchSessionTokenPath}${url.search}`);
      }
      createBillingContext(request$1, session) {
        const {
          api,
          logger,
          config
        } = this;
        return {
          require: require$1.requireBillingFactory({
            api,
            logger,
            config
          }, request$1, session),
          request: request.requestBillingFactory({
            api,
            logger,
            config
          }, request$1, session),
          cancel: cancel.cancelBillingFactory({
            api,
            logger,
            config
          }, request$1, session)
        };
      }
      createAdminApiContext(request2, session) {
        return factory.adminClientFactory({
          session,
          params: {
            api: this.api,
            config: this.config,
            logger: this.logger
          },
          handleClientError: handleClientError.handleClientErrorFactory({
            request: request2
          })
        });
      }
    };
    exports.AuthStrategy = AuthStrategy;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/webhooks/authenticate.js
var require_authenticate2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/webhooks/authenticate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var factory = require_factory();
    require_runtime();
    var handleClientError = require_handle_client_error();
    init_esm4();
    function authenticateWebhookFactory(params) {
      const {
        api,
        config,
        logger
      } = params;
      return async function authenticate2(request) {
        if (request.method !== "POST") {
          logger.debug("Received a non-POST request for a webhook. Only POST requests are allowed.", {
            url: request.url,
            method: request.method
          });
          throw new Response(void 0, {
            status: 405,
            statusText: "Method not allowed"
          });
        }
        const rawBody = await request.text();
        const check2 = await api.webhooks.validate({
          rawBody,
          rawRequest: request
        });
        if (!check2.valid) {
          logger.debug("Webhook validation failed", check2);
          throw new Response(void 0, {
            status: 400,
            statusText: "Bad Request"
          });
        }
        const sessionId = api.session.getOfflineId(check2.domain);
        const session = await config.sessionStorage.loadSession(sessionId);
        const webhookContext = {
          apiVersion: check2.apiVersion,
          shop: check2.domain,
          topic: check2.topic,
          webhookId: check2.webhookId,
          payload: JSON.parse(rawBody),
          session: void 0,
          admin: void 0
        };
        if (!session) {
          return webhookContext;
        }
        let admin;
        if (config.future.v3_webhookAdminContext) {
          admin = factory.adminClientFactory({
            params,
            session,
            handleClientError: handleClientError.handleClientErrorFactory({
              request
            })
          });
        } else {
          const restClient = new api.clients.Rest({
            session,
            apiVersion: check2.apiVersion
          });
          const graphqlClient = new api.clients.Graphql({
            session,
            apiVersion: check2.apiVersion
          });
          Object.entries(api.rest).forEach(([name, resource]) => {
            Reflect.set(restClient, name, resource);
          });
          admin = {
            rest: restClient,
            graphql: graphqlClient
          };
        }
        return {
          ...webhookContext,
          session,
          admin
        };
      };
    }
    exports.authenticateWebhookFactory = authenticateWebhookFactory;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module) {
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse2 = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module) {
    var SemVer = require_semver();
    var parse3 = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse3;
  }
});

// node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/semver/functions/valid.js"(exports, module) {
    var parse3 = require_parse2();
    var valid = (version, options) => {
      const v = parse3(version, options);
      return v ? v.version : null;
    };
    module.exports = valid;
  }
});

// node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/semver/functions/clean.js"(exports, module) {
    var parse3 = require_parse2();
    var clean = (version, options) => {
      const s = parse3(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module.exports = clean;
  }
});

// node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/semver/functions/inc.js"(exports, module) {
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc;
  }
});

// node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/semver/functions/diff.js"(exports, module) {
    var parse3 = require_parse2();
    var diff = (version1, version2) => {
      const v1 = parse3(version1, null, true);
      const v2 = parse3(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module.exports = diff;
  }
});

// node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/semver/functions/major.js"(exports, module) {
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module.exports = major;
  }
});

// node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/semver/functions/minor.js"(exports, module) {
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module.exports = minor;
  }
});

// node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/semver/functions/patch.js"(exports, module) {
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module.exports = patch;
  }
});

// node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/semver/functions/prerelease.js"(exports, module) {
    var parse3 = require_parse2();
    var prerelease = (version, options) => {
      const parsed = parse3(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module) {
    var SemVer = require_semver();
    var compare2 = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare2;
  }
});

// node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/semver/functions/rcompare.js"(exports, module) {
    var compare2 = require_compare();
    var rcompare = (a, b, loose) => compare2(b, a, loose);
    module.exports = rcompare;
  }
});

// node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/semver/functions/compare-loose.js"(exports, module) {
    var compare2 = require_compare();
    var compareLoose = (a, b) => compare2(a, b, true);
    module.exports = compareLoose;
  }
});

// node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/semver/functions/compare-build.js"(exports, module) {
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;
  }
});

// node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/semver/functions/sort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module.exports = sort;
  }
});

// node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/semver/functions/rsort.js"(exports, module) {
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module.exports = rsort;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module) {
    var compare2 = require_compare();
    var gt = (a, b, loose) => compare2(a, b, loose) > 0;
    module.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module) {
    var compare2 = require_compare();
    var lt = (a, b, loose) => compare2(a, b, loose) < 0;
    module.exports = lt;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module) {
    var compare2 = require_compare();
    var eq = (a, b, loose) => compare2(a, b, loose) === 0;
    module.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module) {
    var compare2 = require_compare();
    var neq = (a, b, loose) => compare2(a, b, loose) !== 0;
    module.exports = neq;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module) {
    var compare2 = require_compare();
    var gte = (a, b, loose) => compare2(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module) {
    var compare2 = require_compare();
    var lte = (a, b, loose) => compare2(a, b, loose) <= 0;
    module.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module) {
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports, module) {
    var SemVer = require_semver();
    var parse3 = require_parse2();
    var { safeRe: re, t } = require_re();
    var coerce2 = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse3(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
    };
    module.exports = coerce2;
  }
});

// node_modules/semver/node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/semver/node_modules/yallist/iterator.js"(exports, module) {
    "use strict";
    module.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/semver/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/semver/node_modules/yallist/yallist.js"(exports, module) {
    "use strict";
    module.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self = this;
      if (!(self instanceof Yallist)) {
        self = new Yallist();
      }
      self.tail = null;
      self.head = null;
      self.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }
      return self;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self, node, value) {
      var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
      if (inserted.next === null) {
        self.tail = inserted;
      }
      if (inserted.prev === null) {
        self.head = inserted;
      }
      self.length++;
      return inserted;
    }
    function push(self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }
    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/semver/node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/semver/node_modules/lru-cache/index.js"(exports, module) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h) => h);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self, key, doUse) => {
      const node = self[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
          del(self, node);
          if (!self[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self, hit) => {
      if (!hit || !hit.maxAge && !self[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
    };
    var trim = (self) => {
      if (self[LENGTH] > self[MAX]) {
        for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self, walker);
          walker = prev;
        }
      }
    };
    var del = (self, node) => {
      if (node) {
        const hit = node.value;
        if (self[DISPOSE])
          self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self);
    };
    module.exports = LRUCache;
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module) {
    var Range = class {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module) {
    var ANY = Symbol("SemVer ANY");
    var Comparator = class {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module) {
    var Range = require_range();
    var satisfies2 = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies2;
  }
});

// node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/semver/ranges/to-comparators.js"(exports, module) {
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module.exports = toComparators;
  }
});

// node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module.exports = maxSatisfying;
  }
});

// node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module.exports = minSatisfying;
  }
});

// node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/semver/ranges/min-version.js"(exports, module) {
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;
  }
});

// node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/semver/ranges/valid.js"(exports, module) {
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange;
  }
});

// node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/semver/ranges/outside.js"(exports, module) {
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies2 = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies2(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module.exports = outside;
  }
});

// node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/semver/ranges/gtr.js"(exports, module) {
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module.exports = gtr;
  }
});

// node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/semver/ranges/ltr.js"(exports, module) {
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module.exports = ltr;
  }
});

// node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/semver/ranges/intersects.js"(exports, module) {
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module.exports = intersects;
  }
});

// node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/semver/ranges/simplify.js"(exports, module) {
    var satisfies2 = require_satisfies();
    var compare2 = require_compare();
    module.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare2(a, b, options));
      for (const version of v) {
        const included = satisfies2(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/semver/ranges/subset.js"(exports, module) {
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies2 = require_satisfies();
    var compare2 = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare2(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies2(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies2(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies2(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies2(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies2(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare2(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare2(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module.exports = subset;
  }
});

// node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/semver/index.js"(exports, module) {
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse3 = require_parse2();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare2 = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce2 = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies2 = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse: parse3,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare: compare2,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce: coerce2,
      Comparator,
      Range,
      satisfies: satisfies2,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/override-logger.js
var require_override_logger = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/override-logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var semver2 = require_semver2();
    var shopifyApi = require_lib();
    var version = require_version3();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var semver__default = /* @__PURE__ */ _interopDefaultLegacy(semver2);
    function overrideLogger(logger) {
      const baseContext = {
        package: "shopify-app"
      };
      const warningFunction = (message2, context = {}) => logger.warning(message2, {
        ...baseContext,
        ...context
      });
      function deprecated(warningFunction2) {
        return function(version$1, message2) {
          if (semver__default["default"].gte(version.SHOPIFY_REMIX_LIBRARY_VERSION, version$1)) {
            throw new shopifyApi.FeatureDeprecatedError(`Feature was deprecated in version ${version$1}`);
          }
          return warningFunction2(`[Deprecated | ${version$1}] ${message2}`);
        };
      }
      return {
        ...logger,
        log: (severity, message2, context = {}) => logger.log(severity, message2, {
          ...baseContext,
          ...context
        }),
        debug: (message2, context = {}) => logger.debug(message2, {
          ...baseContext,
          ...context
        }),
        info: (message2, context = {}) => logger.info(message2, {
          ...baseContext,
          ...context
        }),
        warning: warningFunction,
        error: (message2, context = {}) => logger.error(message2, {
          ...baseContext,
          ...context
        }),
        deprecated: deprecated(warningFunction)
      };
    }
    exports.overrideLogger = overrideLogger;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/login/login.js
var require_login = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/login/login.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm4(), __toCommonJS(esm_exports4));
    var types2 = require_types15();
    function loginFactory(params) {
      const {
        api,
        config,
        logger
      } = params;
      return async function login(request) {
        const url = new URL(request.url);
        const shopParam = url.searchParams.get("shop");
        if (request.method === "GET" && !shopParam) {
          return {};
        }
        const shop = shopParam || (await request.formData()).get("shop");
        if (!shop) {
          logger.debug("Missing shop parameter", {
            shop
          });
          return {
            shop: types2.LoginErrorType.MissingShop
          };
        }
        const shopWithoutProtocol = shop.replace(/^https?:\/\//, "").replace(/\/$/, "");
        const shopWithDomain = (shop === null || shop === void 0 ? void 0 : shop.indexOf(".")) === -1 ? `${shopWithoutProtocol}.myshopify.com` : shopWithoutProtocol;
        const sanitizedShop = api.utils.sanitizeShop(shopWithDomain);
        if (!sanitizedShop) {
          logger.debug("Invalid shop parameter", {
            shop
          });
          return {
            shop: types2.LoginErrorType.InvalidShop
          };
        }
        const redirectUrl = `${config.appUrl}${config.auth.path}?shop=${sanitizedShop}`;
        logger.info(`Redirecting login request to ${redirectUrl}`, {
          shop: sanitizedShop
        });
        throw serverRuntime.redirect(redirectUrl);
      };
    }
    exports.loginFactory = loginFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/unauthenticated/helpers/get-offline-session.js
var require_get_offline_session = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/unauthenticated/helpers/get-offline-session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function getOfflineSession(shop, {
      api,
      config
    }) {
      const offlineSessionId = api.session.getOfflineId(shop);
      const session = await config.sessionStorage.loadSession(offlineSessionId);
      return session;
    }
    exports.getOfflineSession = getOfflineSession;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/unauthenticated/admin/factory.js
var require_factory2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/unauthenticated/admin/factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shopifyApi = require_lib();
    var factory = require_factory();
    var getOfflineSession = require_get_offline_session();
    function unauthenticatedAdminContextFactory(params) {
      return async (shop) => {
        const session = await getOfflineSession.getOfflineSession(shop, params);
        if (!session) {
          throw new shopifyApi.ShopifyError(`Could not find a session for shop ${shop} when creating unauthenticated admin context`);
        }
        return {
          session,
          admin: factory.adminClientFactory({
            params,
            session
          })
        };
      };
    }
    exports.unauthenticatedAdminContextFactory = unauthenticatedAdminContextFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/public/checkout/authenticate.js
var require_authenticate3 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/public/checkout/authenticate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ensureCorsHeaders = require_ensure_cors_headers();
    var validateSessionToken = require_validate_session_token();
    var getSessionTokenHeader = require_get_session_token_header();
    var rejectBotRequest = require_reject_bot_request();
    var respondToOptionsRequest = require_respond_to_options_request();
    function authenticateCheckoutFactory(params) {
      return async function authenticateCheckout(request, options = {}) {
        var _options$corsHeaders;
        const {
          logger
        } = params;
        const corsHeaders = (_options$corsHeaders = options.corsHeaders) !== null && _options$corsHeaders !== void 0 ? _options$corsHeaders : [];
        rejectBotRequest.rejectBotRequest(params, request);
        respondToOptionsRequest.respondToOptionsRequest(params, request, corsHeaders);
        const sessionTokenHeader = getSessionTokenHeader.getSessionTokenHeader(request);
        logger.info("Authenticating checkout request");
        if (!sessionTokenHeader) {
          logger.debug("Request did not contain a session token");
          throw new Response(void 0, {
            status: 401,
            statusText: "Unauthorized"
          });
        }
        return {
          sessionToken: await validateSessionToken.validateSessionToken(params, sessionTokenHeader, {
            checkAudience: false
          }),
          cors: ensureCorsHeaders.ensureCORSHeadersFactory(params, request, corsHeaders)
        };
      };
    }
    exports.authenticateCheckoutFactory = authenticateCheckoutFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/storefront/factory.js
var require_factory3 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/clients/storefront/factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var runtime = require_runtime();
    function storefrontClientFactory({
      params,
      session
    }) {
      const {
        api
      } = params;
      return {
        graphql: async (query, options = {}) => {
          const client = new api.clients.Storefront({
            session,
            apiVersion: options.apiVersion
          });
          const apiResponse = await client.query({
            data: {
              query,
              variables: options === null || options === void 0 ? void 0 : options.variables
            },
            tries: options.tries,
            extraHeaders: options.headers
          });
          return new Response(JSON.stringify(apiResponse.body), {
            headers: runtime.flatHeaders(apiResponse.headers)
          });
        }
      };
    }
    exports.storefrontClientFactory = storefrontClientFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/public/appProxy/authenticate.js
var require_authenticate4 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/public/appProxy/authenticate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var factory = require_factory();
    var factory$1 = require_factory3();
    function authenticateAppProxyFactory(params) {
      const {
        api,
        config,
        logger
      } = params;
      return async function authenticate2(request) {
        logger.info("Authenticating app proxy request");
        const {
          searchParams
        } = new URL(request.url);
        const query = Object.fromEntries(searchParams.entries());
        let isValid = false;
        try {
          isValid = await api.utils.validateHmac(query, {
            signator: "appProxy"
          });
        } catch (error) {
          logger.info(error.message);
          throw new Response(void 0, {
            status: 400,
            statusText: "Bad Request"
          });
        }
        if (!isValid) {
          logger.info("App proxy request has invalid signature");
          throw new Response(void 0, {
            status: 400,
            statusText: "Bad Request"
          });
        }
        const shop = searchParams.get("shop");
        const sessionId = api.session.getOfflineId(shop);
        const session = await config.sessionStorage.loadSession(sessionId);
        if (!session) {
          const context2 = {
            liquid,
            session: void 0,
            admin: void 0,
            storefront: void 0
          };
          return context2;
        }
        const context = {
          liquid,
          session,
          admin: factory.adminClientFactory({
            params,
            session
          }),
          storefront: factory$1.storefrontClientFactory({
            params,
            session
          })
        };
        return context;
      };
    }
    var liquid = (body, initAndOptions) => {
      if (typeof initAndOptions !== "object") {
        return new Response(body, {
          status: initAndOptions || 200,
          headers: {
            "Content-Type": "application/liquid"
          }
        });
      }
      const {
        layout,
        ...responseInit
      } = initAndOptions || {};
      const responseBody = layout === false ? `{% layout none %} ${body}` : body;
      const headers = new Headers(responseInit.headers);
      headers.set("Content-Type", "application/liquid");
      return new Response(responseBody, {
        ...responseInit,
        headers
      });
    };
    exports.authenticateAppProxyFactory = authenticateAppProxyFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/public/factory.js
var require_factory4 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/authenticate/public/factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var authenticate2 = require_authenticate3();
    var authenticate$1 = require_authenticate4();
    function authenticatePublicFactory(params) {
      const {
        logger,
        config
      } = params;
      const authenticateCheckout = authenticate2.authenticateCheckoutFactory(params);
      const authenticateAppProxy = authenticate$1.authenticateAppProxyFactory(params);
      if (config.future.v3_authenticatePublic) {
        const context = {
          checkout: authenticateCheckout,
          appProxy: authenticateAppProxy
        };
        return context;
      }
      const authenticatePublic = (request, options) => {
        logger.deprecated("3.0.0", "authenticate.public() will be deprecated in v3. Use authenticate.public.checkout() instead.");
        return authenticateCheckout(request, options);
      };
      authenticatePublic.checkout = authenticateCheckout;
      authenticatePublic.appProxy = authenticateAppProxy;
      return authenticatePublic;
    }
    exports.authenticatePublicFactory = authenticatePublicFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/unauthenticated/storefront/factory.js
var require_factory5 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/unauthenticated/storefront/factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shopifyApi = require_lib();
    var factory = require_factory3();
    var getOfflineSession = require_get_offline_session();
    function unauthenticatedStorefrontContextFactory(params) {
      return async (shop) => {
        const session = await getOfflineSession.getOfflineSession(shop, params);
        if (!session) {
          throw new shopifyApi.ShopifyError(`Could not find a session for shop ${shop} when creating unauthenticated storefront context`);
        }
        return {
          session,
          storefront: factory.storefrontClientFactory({
            params,
            session
          })
        };
      };
    }
    exports.unauthenticatedStorefrontContextFactory = unauthenticatedStorefrontContextFactory;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/shopify-app.js
var require_shopify_app = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/shopify-app.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require_web_api();
    var shopifyApi = require_lib();
    var types2 = require_types15();
    var version = require_version3();
    var register = require_register2();
    var authenticate$1 = require_authenticate();
    var authenticate2 = require_authenticate2();
    var overrideLogger = require_override_logger();
    var addResponseHeaders = require_add_response_headers();
    require_isbot();
    var login = require_login();
    var factory$1 = require_factory2();
    var factory = require_factory4();
    var factory$2 = require_factory5();
    function shopifyApp(appConfig) {
      const api = deriveApi(appConfig);
      const config = deriveConfig(appConfig, api.config);
      const logger = overrideLogger.overrideLogger(api.logger);
      if (appConfig.webhooks) {
        api.webhooks.addHandlers(appConfig.webhooks);
      }
      const params = {
        api,
        config,
        logger
      };
      const oauth = new authenticate$1.AuthStrategy(params);
      const shopify = {
        sessionStorage: config.sessionStorage,
        addDocumentResponseHeaders: addResponseHeaders.addDocumentResponseHeadersFactory(params),
        registerWebhooks: register.registerWebhooksFactory(params),
        authenticate: {
          admin: oauth.authenticateAdmin.bind(oauth),
          public: factory.authenticatePublicFactory(params),
          webhook: authenticate2.authenticateWebhookFactory(params)
        },
        unauthenticated: {
          admin: factory$1.unauthenticatedAdminContextFactory(params),
          storefront: factory$2.unauthenticatedStorefrontContextFactory(params)
        }
      };
      if (isAppStoreApp(shopify, appConfig) || isSingleMerchantApp(shopify, appConfig)) {
        shopify.login = login.loginFactory(params);
      }
      return shopify;
    }
    function isAppStoreApp(_shopify, config) {
      return config.distribution === types2.AppDistribution.AppStore;
    }
    function isSingleMerchantApp(_shopify, config) {
      return config.distribution === types2.AppDistribution.SingleMerchant;
    }
    function deriveApi(appConfig) {
      var _appConfig$isEmbedded, _appConfig$apiVersion;
      let appUrl;
      try {
        appUrl = new URL(appConfig.appUrl);
      } catch (error) {
        throw new shopifyApi.ShopifyError("Invalid appUrl provided. Please provide a valid URL.");
      }
      if (appUrl.hostname === "localhost" && !appUrl.port && process.env.PORT) {
        appUrl.port = process.env.PORT;
      }
      appConfig.appUrl = appUrl.origin;
      let userAgentPrefix = `Shopify Remix Library v${version.SHOPIFY_REMIX_LIBRARY_VERSION}`;
      if (appConfig.userAgentPrefix) {
        userAgentPrefix = `${appConfig.userAgentPrefix} | ${userAgentPrefix}`;
      }
      return shopifyApi.shopifyApi({
        ...appConfig,
        hostName: appUrl.host,
        hostScheme: appUrl.protocol.replace(":", ""),
        userAgentPrefix,
        isEmbeddedApp: (_appConfig$isEmbedded = appConfig.isEmbeddedApp) !== null && _appConfig$isEmbedded !== void 0 ? _appConfig$isEmbedded : true,
        apiVersion: (_appConfig$apiVersion = appConfig.apiVersion) !== null && _appConfig$apiVersion !== void 0 ? _appConfig$apiVersion : shopifyApi.LATEST_API_VERSION,
        isCustomStoreApp: appConfig.distribution === types2.AppDistribution.ShopifyAdmin
      });
    }
    function deriveConfig(appConfig, apiConfig) {
      var _appConfig$distributi, _appConfig$useOnlineT, _appConfig$hooks, _appConfig$future;
      if (!appConfig.sessionStorage) {
        throw new shopifyApi.ShopifyError("Please provide a valid session storage. Refer to https://github.com/Shopify/shopify-app-js/blob/main/README.md#session-storage-options for options.");
      }
      const authPathPrefix = appConfig.authPathPrefix || "/auth";
      appConfig.distribution = (_appConfig$distributi = appConfig.distribution) !== null && _appConfig$distributi !== void 0 ? _appConfig$distributi : types2.AppDistribution.AppStore;
      return {
        ...appConfig,
        ...apiConfig,
        canUseLoginForm: appConfig.distribution !== types2.AppDistribution.ShopifyAdmin,
        useOnlineTokens: (_appConfig$useOnlineT = appConfig.useOnlineTokens) !== null && _appConfig$useOnlineT !== void 0 ? _appConfig$useOnlineT : false,
        hooks: (_appConfig$hooks = appConfig.hooks) !== null && _appConfig$hooks !== void 0 ? _appConfig$hooks : {},
        sessionStorage: appConfig.sessionStorage,
        future: (_appConfig$future = appConfig.future) !== null && _appConfig$future !== void 0 ? _appConfig$future : {},
        auth: {
          path: authPathPrefix,
          callbackPath: `${authPathPrefix}/callback`,
          patchSessionTokenPath: `${authPathPrefix}/session-token`,
          exitIframePath: `${authPathPrefix}/exit-iframe`,
          loginPath: `${authPathPrefix}/login`
        }
      };
    }
    exports.shopifyApp = shopifyApp;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/server/index.js
var require_server = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/server/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require_web_api();
    var runtime = require_runtime();
    var shopifyApi = require_lib();
    var types2 = require_types15();
    var index = require_boundary();
    var shopifyApp = require_shopify_app();
    runtime.setAbstractRuntimeString(() => {
      return `Remix`;
    });
    Object.defineProperty(exports, "ApiVersion", {
      enumerable: true,
      get: function() {
        return shopifyApi.ApiVersion;
      }
    });
    Object.defineProperty(exports, "BillingInterval", {
      enumerable: true,
      get: function() {
        return shopifyApi.BillingInterval;
      }
    });
    Object.defineProperty(exports, "DeliveryMethod", {
      enumerable: true,
      get: function() {
        return shopifyApi.DeliveryMethod;
      }
    });
    Object.defineProperty(exports, "LATEST_API_VERSION", {
      enumerable: true,
      get: function() {
        return shopifyApi.LATEST_API_VERSION;
      }
    });
    Object.defineProperty(exports, "LogSeverity", {
      enumerable: true,
      get: function() {
        return shopifyApi.LogSeverity;
      }
    });
    exports.AppDistribution = types2.AppDistribution;
    exports.LoginErrorType = types2.LoginErrorType;
    exports.boundary = index.boundary;
    exports.shopifyApp = shopifyApp.shopifyApp;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/react/const.js
var require_const2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/react/const.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var APP_BRIDGE_URL = "https://cdn.shopify.com/shopifycloud/app-bridge.js";
    exports.APP_BRIDGE_URL = APP_BRIDGE_URL;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/react/components/RemixPolarisLink.js
var require_RemixPolarisLink = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/react/components/RemixPolarisLink.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    var react = (init_esm(), __toCommonJS(esm_exports));
    var jsxRuntime = require_jsx_runtime();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
    var RemixPolarisLink = /* @__PURE__ */ React__default["default"].forwardRef((props, ref) => {
      var _props$url;
      return /* @__PURE__ */ jsxRuntime.jsx(react.Link, {
        ...props,
        to: (_props$url = props.url) !== null && _props$url !== void 0 ? _props$url : props.to,
        ref
      });
    });
    exports.RemixPolarisLink = RemixPolarisLink;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/react/components/AppProvider/AppProvider.js
var require_AppProvider = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/react/components/AppProvider/AppProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var polaris = (init_esm2(), __toCommonJS(esm_exports2));
    var englishI18n = require_en();
    var _const = require_const2();
    var RemixPolarisLink = require_RemixPolarisLink();
    var jsxRuntime = require_jsx_runtime();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var englishI18n__default = /* @__PURE__ */ _interopDefaultLegacy(englishI18n);
    function AppProvider2(props) {
      const {
        children,
        apiKey,
        i18n,
        isEmbeddedApp = true,
        __APP_BRIDGE_URL = _const.APP_BRIDGE_URL,
        ...polarisProps
      } = props;
      return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [isEmbeddedApp && /* @__PURE__ */ jsxRuntime.jsx("script", {
          src: __APP_BRIDGE_URL,
          "data-api-key": apiKey
        }), /* @__PURE__ */ jsxRuntime.jsx(polaris.AppProvider, {
          ...polarisProps,
          linkComponent: RemixPolarisLink.RemixPolarisLink,
          i18n: i18n || englishI18n__default["default"],
          children
        })]
      });
    }
    exports.AppProvider = AppProvider2;
  }
});

// node_modules/@shopify/shopify-app-remix/build/cjs/react/index.js
var require_react2 = __commonJS({
  "node_modules/@shopify/shopify-app-remix/build/cjs/react/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppProvider2 = require_AppProvider();
    exports.AppProvider = AppProvider2.AppProvider;
  }
});

// app/routes/app.jsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
var import_server2 = __toESM(require_server());
var import_react2 = __toESM(require_react2());
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.jsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: styles_default
}];
function App() {
  _s();
  const {
    apiKey
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.AppProvider, { isEmbeddedApp: true, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app", rel: "home", children: "Home" }, void 0, false, {
        fileName: "app/routes/app.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/additional", children: "Additional page" }, void 0, false, {
        fileName: "app/routes/app.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/app.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(App, "OkbQxR4MmTZWMtDciFEyh6Qymi4=", false, function() {
  return [useLoaderData];
});
_c = App;
function ErrorBoundary() {
  _s2();
  return import_server2.boundary.error(useRouteError());
}
_s2(ErrorBoundary, "YDkf/bojC730qvJxOiv5VT1rhKY=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@remix-run/server-runtime/dist/esm/warnings.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/cookies.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/formData.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/mode.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/errors.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/entry.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/headers.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/invariant.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routeMatching.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/data.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routes.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/markup.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/serverHandoff.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/server.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/upload/errors.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/dev.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=/build/routes/app-L6EIMM5E.js.map
