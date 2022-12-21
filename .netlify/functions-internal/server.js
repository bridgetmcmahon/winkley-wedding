var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Bridget & Todd",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  links: () => links,
  loader: () => loader
});
var import_react6 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-TA4NPA7W.css";

// app/components/Modal.jsx
var import_react5 = require("react");

// app/components/Form.jsx
var import_react3 = require("react"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function RsvpForm() {
  let [submitted, setSubmitted] = (0, import_react3.useState)(!1), errors = (0, import_react4.useActionData)();
  return submitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Thanks for your RSVP!" }, void 0, !1, {
      fileName: "app/components/Form.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { onClick: () => setSubmitted(!1), children: "Need to submit another?" }, void 0, !1, {
      fileName: "app/components/Form.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Form.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Please fill out the form below to RSVP" }, void 0, !1, {
      fileName: "app/components/Form.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-input__text mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Name" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-input__radio-buttons mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Attending the wedding?" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "attendingWeddingYes",
            name: "attendingWedding",
            value: "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form.jsx",
            lineNumber: 29,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "attendingWeddingYes", children: "Yes" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "attendingWeddingNo",
            name: "attendingWedding",
            value: "false",
            checked: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form.jsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "attendingWeddingNo", children: "No" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-input__radio-buttons mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Attending the recovery?" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "attendingRecoveryYes",
            name: "attendingRecovery",
            value: "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form.jsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "attendingRecoveryYes", children: "Yes" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            type: "radio",
            id: "attendingRecoveryNo",
            name: "attendingRecovery",
            value: "false",
            checked: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Form.jsx",
            lineNumber: 57,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "attendingRecoveryNo", children: "No" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-input__text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: "Dietary requirements" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text" }, void 0, !1, {
          fileName: "app/components/Form.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Form.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-submit pt2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", children: "Submit" }, void 0, !1, {
        fileName: "app/components/Form.jsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Form.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Form.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Form.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/Modal.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Modal({ closeModal }) {
  let modalRef = (0, import_react5.createRef)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "modal-outer", onMouseDown: (event) => {
    modalRef && modalRef.current && !modalRef.current.contains(event.target) && !document.getElementById("video-modal") && closeModal();
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "modal-inner", ref: modalRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RsvpForm, {}, void 0, !1, {
    fileName: "app/components/Modal.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Modal.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Modal.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var import_react7 = require("react");

// app/utils/db.server.js
var import_firebase_admin = __toESM(require("firebase-admin")), import_app = require("firebase-admin/app"), import_app2 = require("firebase/app");
require("dotenv").config();
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "winkley-wedding-rsvps",
  storageBucket: "winkley-wedding-rsvps.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}, _a, _b;
(_b = (_a = import_firebase_admin.default) == null ? void 0 : _a.apps) != null && _b.length || (0, import_app.initializeApp)({
  credential: (0, import_app.applicationDefault)(),
  databaseURL: "https://winkley-wedding-rsvps.firebaseio.com"
});
var db = import_firebase_admin.default.firestore(), Firebase, _a2;
(_a2 = Firebase == null ? void 0 : Firebase.apps) != null && _a2.length || (Firebase = (0, import_app2.initializeApp)(firebaseConfig));

// app/rsvp.js
async function getRsvps() {
  let querySnapshot = await db.collection("rsvps").get(), data = [];
  return querySnapshot == null || querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  }), data;
}
async function getRsvp(name) {
  let docSnapshot = await db.collection("rsvps").doc(String(name)).get();
  if (docSnapshot.exists)
    return docSnapshot.data();
}
async function createRsvp(rsvp) {
  let { name, attendingRecovery, attendingWedding, dietaryRequirements } = rsvp;
  return await db.collection("rsvps").doc(String(name)).set({
    name,
    attendingRecovery,
    attendingWedding,
    dietaryRequirements,
    createdAt: new Date()
  }), getRsvp(rsvp.name);
}

// app/routes/index.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  console.log("making a request");
  let formData = await request.formData();
  console.log(formData);
  let name = formData.get("name"), attendingWedding = formData.get("attendingWedding"), attendingRecovery = formData.get("attendingRecovery"), dietaryRequirements = formData.get("dietaryRequirements"), errors = {};
  return name || (errors.name = !0), await createRsvp({
    name,
    attendingRecovery,
    attendingWedding,
    dietaryRequirements
  }), null;
}, loader = ({ request }) => getRsvps(request);
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Marcellus|Montserrat"
    },
    { rel: "stylesheet", href: global_default }
  ];
}
function Index() {
  let [modalOpen, setModalOpen] = (0, import_react7.useState)(!1), data = (0, import_react6.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "#schedule", children: "Schedule" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "#accommodation", children: "Accommodation" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "#gifts", children: "Gifts" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "#rsvp", className: "bold", onClick: () => setModalOpen(!0), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "RSVP" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 62,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "header-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: [
        "Bridget",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("em", { children: "and" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 71,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        "Todd"
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "schedule", className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mb1", children: "Schedule" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "schedule-item pb2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "timeline-title", children: "Ceremony" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "schedule-item__time", children: "3.45pm \xB7 4th March 2023" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Amphitheatre @ The Calile Hotel" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Dress code: Cocktail" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "schedule-item pt1 pb2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "timeline-title", children: "Cocktail hour" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 90,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "schedule-item__time", children: "4.30pm \xB7 4th March 2023" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Terrace @ The Calile Hotel" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "schedule-item pt1 pb2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "timeline-title", children: "Reception" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "schedule-item__time", children: "6pm \xB7 4th March 2023" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Grand Rooms @ The Calile Hotel" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 99,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "schedule-item pt1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "timeline-title", children: "Recovery" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "schedule-item__time", children: "1pm \xB7 5th March 2023" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Slipstream Brewery" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "94 Wilkie Street, Yeerongpilly" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "pt1", children: "Please join us for a recovery beverage the following day to celebrate Todd's birthday!" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "accommodation", className: "alternate-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mb1", children: "Accommodation" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "For family and friends who are travelling from out of town and wish to stay at the Calile Hotel (or would like a little staycation), we have kindly been given a 15% discount on accommodation for our guests." }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "a",
          {
            target: "_blank",
            href: "https://reservations.thecalilehotel.com/?adult=1&arrive=2023-03-03&chain=14687&child=0&config=3218&configcode=3218&currency=AUD&depart=2023-03-05&hotel=1381&level=hotel&locale=en-US&promo=TH14140089&rooms=1&sbe_rc=ZjVjYTU2Y2ItMTMwMi00YzFjLTgxOGMtNmZiZThhNDIxZDE1LGU1ZTJjMDViLWJkNWUtNDM2Ni1iYWVhLTJkYzA2OGU1YmFkNQ..&theme=CALILE&themecode=CALILE",
            children: "Please use this link to book."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.jsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 122,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 114,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "gifts", className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mb1", children: "Gifts" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We're travelling overseas straight after the wedding and would hate to have to put any beautiful gifts you may have given us in storage. If you would like to give us a gift, there will be a wishing well on the day." }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "rsvp", className: "alternate-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "faq", className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mb2", children: "FAQ" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "What do I wear?" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 148,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The dress code is cocktail, and dance floor appropriate shoes are strongly encouraged." }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "Are children welcome?" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 158,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Our wedding is an over 18 event. However, all are welcome at the recovery the following day so please bring them along then." }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 160,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "Is there parking available?" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 168,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 167,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
            "There is secure parking available at The Calile. We recommend",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "a",
              {
                target: "_blank",
                href: "https://www.secureparking.com.au/en-au/car-parks/australia/queensland/brisbane/fortitude-valley/the-calile-hotel-car-park",
                children: "pre-booking"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.jsx",
                lineNumber: 172,
                columnNumber: 17
              },
              this
            ),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/index.jsx",
            lineNumber: 170,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 144,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      modalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Modal, { closeModal: () => setModalOpen(!1) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 184,
        columnNumber: 23
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "738918cb", entry: { module: "/build/entry.client-5PPXLMM7.js", imports: ["/build/_shared/chunk-VOGJWARB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NSCHR7S5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-UTLZTJJP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-738918CB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
