import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  BlockStack,
  Box,
  Button,
  Card,
  InlineStack,
  Layout,
  Link,
  List,
  Page,
  Text,
  init_esm as init_esm2
} from "/build/_shared/chunk-PPC6FZZS.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  init_esm,
  useActionData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-XCYA53LZ.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app._index.jsx
init_remix_hmr();
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
init_esm();
init_esm2();
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app._index.jsx"
  );
  import.meta.hot.lastModified = "1701433214506.0952";
}
function Index() {
  var _a;
  _s();
  const nav = useNavigation();
  const actionData = useActionData();
  const submit = useSubmit();
  const isLoading = ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST";
  const productId = (_a = actionData == null ? void 0 : actionData.product) == null ? void 0 : _a.id.replace("gid://shopify/Product/", "");
  (0, import_react.useEffect)(() => {
    if (productId) {
      shopify.toast.show("Product created");
    }
  }, [productId]);
  const generateProduct = () => submit({}, {
    replace: true,
    method: "POST"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "Remix app template", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { variant: "primary", onClick: generateProduct, children: "Generate a product" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "Congrats on creating a new Shopify app \u{1F389}" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 103,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", as: "p", children: [
            "This embedded app template uses",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/tools/app-bridge", target: "_blank", removeUnderline: true, children: "App Bridge" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 108,
              columnNumber: 21
            }, this),
            " ",
            "interface examples like an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "/app/additional", removeUnderline: true, children: "additional page in the app nav" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 112,
              columnNumber: 21
            }, this),
            ", as well as an",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/api/admin-graphql", target: "_blank", removeUnderline: true, children: "Admin GraphQL" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 116,
              columnNumber: 21
            }, this),
            " ",
            "mutation demo, to provide a starting point for app development."
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 106,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 102,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h3", variant: "headingMd", children: "Get started with products" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 124,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "bodyMd", children: [
            "Generate a product with GraphQL and get the JSON output for that product. Learn more about the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate", target: "_blank", removeUnderline: true, children: "productCreate" }, void 0, false, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 130,
              columnNumber: 21
            }, this),
            " ",
            "mutation in our API references."
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 127,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 123,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { gap: "300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { loading: isLoading, onClick: generateProduct, children: "Generate a product" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { url: `shopify:admin/products/${productId}`, target: "_blank", variant: "plain", children: "View product" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 140,
            columnNumber: 43
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        (actionData == null ? void 0 : actionData.product) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { padding: "400", background: "bg-surface-active", borderWidth: "025", borderRadius: "200", borderColor: "border", overflowX: "scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { style: {
          margin: 0
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: JSON.stringify(actionData.product, null, 2) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 148,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 145,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 144,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 101,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 100,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "App template specs" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 158,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "Framework" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 163,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://remix.run", target: "_blank", removeUnderline: true, children: "Remix" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 166,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 162,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "Database" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 171,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://www.prisma.io/", target: "_blank", removeUnderline: true, children: "Prisma" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 174,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 170,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "Interface" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 179,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://polaris.shopify.com", target: "_blank", removeUnderline: true, children: "Polaris" }, void 0, false, {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 183,
                  columnNumber: 25
                }, this),
                ", ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/tools/app-bridge", target: "_blank", removeUnderline: true, children: "App Bridge" }, void 0, false, {
                  fileName: "app/routes/app._index.jsx",
                  lineNumber: 187,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 182,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 178,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "bodyMd", children: "API" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 193,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/api/admin-graphql", target: "_blank", removeUnderline: true, children: "GraphQL API" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 196,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 192,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 161,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 157,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 156,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingMd", children: "Next steps" }, void 0, false, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 205,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
              "Build an",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/getting-started/build-app-example", target: "_blank", removeUnderline: true, children: [
                " ",
                "example app"
              ] }, void 0, true, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 211,
                columnNumber: 23
              }, this),
              " ",
              "to get started"
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 209,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
              "Explore Shopify\u2019s API with",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: "https://shopify.dev/docs/apps/tools/graphiql-admin-api", target: "_blank", removeUnderline: true, children: "GraphiQL" }, void 0, false, {
                fileName: "app/routes/app._index.jsx",
                lineNumber: 219,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app._index.jsx",
              lineNumber: 217,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app._index.jsx",
            lineNumber: 208,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 204,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 203,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 155,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 154,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(Index, "DJCLLfqNMkauIsSoxpEWeZL/QGs=", false, function() {
  return [useNavigation, useActionData, useSubmit];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-PXZAHNF7.js.map
