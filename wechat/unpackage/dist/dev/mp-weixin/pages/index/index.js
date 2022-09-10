"use strict";
var common_vendor = require("../../common/vendor.js");
var uni_modules_mescrollUni_components_mescrollUni_mescrollMixins = require("../../uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js");
const UniTabs = () => "../../components/uni-tabs/uni-tabs.js";
const _sfc_main = {
  mixins: [uni_modules_mescrollUni_components_mescrollUni_mescrollMixins.MescrollMixin],
  data() {
    return {
      mescroll: null,
      upOption: {
        page: {
          size: 10
        },
        noMoreSize: 5,
        empty: {
          tip: "\u6682\u65E0\u76F8\u5173\u6570\u636E"
        }
      },
      dataList: []
    };
  },
  onLoad() {
  },
  methods: {
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    downCallback() {
      this.mescroll.resetUpScroll();
    },
    upCallback(page) {
    },
    apply() {
      common_vendor.index.navigateTo({
        url: "/pages/apply/apply"
      });
    },
    detail() {
      common_vendor.index.navigateTo({
        url: "/pages/index/detail"
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
  const _component_mescroll_body = common_vendor.resolveComponent("mescroll-body");
  (_easycom_uni_section2 + _easycom_uni_tabs2 + _easycom_uni_card2 + _component_mescroll_body)();
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
    c: common_vendor.o((...args) => $options.detail && $options.detail(...args)),
    d: common_vendor.p({
      title: "\u6DF1\u5733\u817E\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8",
      ["sub-title"]: "\u5F20\u4E09 410326198204234216",
      extra: "\u5DF2\u5B8C\u6210",
      border: false,
      isFull: true
    }),
    e: common_vendor.p({
      title: "\u6DF1\u5733\u817E\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8",
      ["sub-title"]: "\u5F20\u4E09 410326198204234216",
      extra: "\u5F85\u652F\u4ED8",
      border: false,
      isFull: true
    }),
    f: common_vendor.o((...args) => $options.detail && $options.detail(...args)),
    g: common_vendor.p({
      title: "\u6DF1\u5733\u817E\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8",
      ["sub-title"]: "\u5F20\u4E09 410326198204234216",
      extra: "\u5F02\u5E38",
      border: false,
      isFull: true
    }),
    h: common_vendor.sr("mescrollRef", "57280228-2"),
    i: common_vendor.o($options.mescrollInit),
    j: common_vendor.o($options.downCallback),
    k: common_vendor.o($options.upCallback),
    l: common_vendor.p({
      down: _ctx.downOption,
      up: $data.upOption
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "E:/wwwroot/wechat-admin/wechat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
