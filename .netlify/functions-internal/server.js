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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
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
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Bridget & Todd",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
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
var global_default = "/build/_assets/global-76W5JPRT.css";

// app/components/Modal.jsx
var import_react5 = require("react");

// app/components/Form.jsx
var import_react3 = require("react"), import_react4 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function RsvpForm() {
  let [submitted, setSubmitted] = (0, import_react3.useState)(!1), errors = (0, import_react4.useActionData)();
  return submitted ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: "Thanks for your RSVP!" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { onClick: () => setSubmitted(!1), children: "Need to submit another?" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: "Please fill out the form below to RSVP" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react4.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "form-input__text mb2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { children: "Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "text" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "form-input__radio-buttons mb2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Attending the wedding?" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "radio",
            id: "attendingWeddingYes",
            name: "attendingWedding",
            value: "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "attendingWeddingYes", children: "Yes" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "radio",
            id: "attendingWeddingNo",
            name: "attendingWedding",
            value: "false",
            checked: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "attendingWeddingNo", children: "No" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "form-input__radio-buttons mb2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Attending the recovery?" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "radio",
            id: "attendingRecoveryYes",
            name: "attendingRecovery",
            value: "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "attendingRecoveryYes", children: "Yes" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "radio",
            id: "attendingRecoveryNo",
            name: "attendingRecovery",
            value: "false",
            checked: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "attendingRecoveryNo", children: "No" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "form-input__text", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { children: "Dietary requirements" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "text" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "form-submit pt2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "submit", children: "Submit" }) })
    ] })
  ] });
}

// app/components/Modal.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Modal({ closeModal }) {
  let modalRef = (0, import_react5.createRef)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "modal-outer", onMouseDown: (event) => {
    modalRef && modalRef.current && !modalRef.current.contains(event.target) && !document.getElementById("video-modal") && closeModal();
  }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "modal-inner", ref: modalRef, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(RsvpForm, {}) }) });
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
var import_jsx_runtime5 = require("react/jsx-runtime"), action = async ({ request }) => {
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
  return console.log(data), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "#schedule", children: "Schedule" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "#accommodation", children: "Accommodation" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "#gifts", children: "Gifts" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "#rsvp", className: "bold", onClick: () => setModalOpen(!0), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: "RSVP" }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "header-image", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h1", { children: [
        "Bridget",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("em", { children: "and" }) }),
        "Todd"
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: "schedule", className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "mb1", children: "Schedule" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "schedule-item pb2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "timeline-title", children: "Ceremony" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "schedule-item__time", children: "3.45pm \xB7 4th March 2023" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "The Amphitheatre @ The Calile Hotel" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Dress code: Cocktail" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "schedule-item pt1 pb2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "timeline-title", children: "Cocktail hour" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "schedule-item__time", children: "4.30pm \xB7 4th March 2023" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "The Terrace @ The Calile Hotel" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "schedule-item pt1 pb2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "timeline-title", children: "Reception" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "schedule-item__time", children: "6pm \xB7 4th March 2023" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "The Grand Rooms @ The Calile Hotel" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "schedule-item pt1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "timeline-title", children: "Recovery" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "schedule-item__time", children: "1pm \xB7 5th March 2023" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Slipstream Brewery" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "94 Wilkie Street, Yeerongpilly" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "pt1", children: "Please join us for a recovery beverage the following day to celebrate Todd's birthday!" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "accommodation", className: "alternate-background", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "mb1", children: "Accommodation" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "For family and friends who are travelling from out of town and wish to stay at the Calile Hotel (or would like a little staycation), we have kindly been given a 15% discount on accommodation for our guests." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "a",
          {
            target: "_blank",
            href: "https://reservations.thecalilehotel.com/?adult=1&arrive=2023-03-03&chain=14687&child=0&config=3218&configcode=3218&currency=AUD&depart=2023-03-05&hotel=1381&level=hotel&locale=en-US&promo=TH14140089&rooms=1&sbe_rc=ZjVjYTU2Y2ItMTMwMi00YzFjLTgxOGMtNmZiZThhNDIxZDE1LGU1ZTJjMDViLWJkNWUtNDM2Ni1iYWVhLTJkYzA2OGU1YmFkNQ..&theme=CALILE&themecode=CALILE",
            children: "Please use this link to book."
          }
        ) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: "gifts", className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "mb1", children: "Gifts" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "We're travelling overseas straight after the wedding and would hate to have to put any beautiful gifts you may have given us in storage. If you would like to give us a gift, there will be a wishing well on the day." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "rsvp", className: "alternate-background", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { id: "faq", className: "wrapper section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "mb2", children: "FAQ" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: "What do I wear?" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "The dress code is cocktail, and dance floor appropriate shoes are strongly encouraged." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: "Are children welcome?" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Our wedding is an over 18 event. However, all are welcome at the recovery the following day so please bring them along then." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: "Is there parking available?" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
            "There is secure parking available at The Calile. We recommend",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "a",
              {
                target: "_blank",
                href: "https://www.secureparking.com.au/en-au/car-parks/australia/queensland/brisbane/fortitude-valley/the-calile-hotel-car-park",
                children: "pre-booking"
              }
            ),
            "."
          ] })
        ] })
      ] }) }),
      modalOpen && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Modal, { closeModal: () => setModalOpen(!1) })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "bf9a6dcc", entry: { module: "/build/entry.client-62W2LEFJ.js", imports: ["/build/_shared/chunk-ZA3TC4FB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-USOTUO7Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DGEBXGBU.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-BF9A6DCC.js" };

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
