"use strict";
var common_vendor = require("../../common/vendor.js");
const UniTabs = () => "../../components/uni-tabs/uni-tabs.js";
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    apply() {
      common_vendor.index.navigateTo({
        url: "/pages/apply/apply"
      });
    }
  },
  components: {
    UniTabs
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_tabs2 = common_vendor.resolveComponent("uni-tabs");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_section2 + _easycom_uni_tabs2 + _easycom_uni_card2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_tabs = () => "../../components/uni-tabs/uni-tabs.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_tabs + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.apply && $options.apply(...args)),
    b: common_vendor.p({
      title: "\u6211\u7684\u5C0F\u7A0B\u5E8F",
      titleFontSize: "16px"
    }),
    c: common_vendor.p({
      title: "\u6DF1\u5733\u817E\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8",
      ["sub-title"]: "\u5F20\u4E09 410326198204234216",
      extra: "\u5DF2\u5B8C\u6210",
      border: false,
      isFull: true
    }),
    d: common_vendor.p({
      title: "\u6DF1\u5733\u817E\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8",
      ["sub-title"]: "\u5F20\u4E09 410326198204234216",
      extra: "\u5F85\u652F\u4ED8",
      border: false,
      isFull: true
    }),
    e: common_vendor.p({
      title: "\u6DF1\u5733\u817E\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8",
      ["sub-title"]: "\u5F20\u4E09 410326198204234216",
      extra: "\u5F02\u5E38",
      border: false,
      isFull: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "E:/wwwroot/wechat-admin/wechat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
