"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var utils_http = require("./utils/http.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/apply/apply.js";
  "./pages/index/detail.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/wwwroot/wechat-admin/wechat/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$http = utils_http.http;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
