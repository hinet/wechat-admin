"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "uni-tabs",
  data() {
    return {
      options: [
        { name: "\u5168\u90E8" },
        { name: "\u5F85\u4ED8\u6B3E" },
        { name: "\u5F85\u8BA4\u8BC1" },
        { name: "\u5F02\u5E38" },
        { name: "\u5DF2\u5B8C\u6210" }
      ],
      current: 0
    };
  },
  methods: {
    tabChanged(index) {
      this.current = index;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.options, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n("uni-tabs-item" + ($data.current == index ? " active" : "")),
        c: common_vendor.o(($event) => $options.tabChanged(index))
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/wwwroot/wechat-admin/wechat/components/uni-tabs/uni-tabs.vue"]]);
wx.createComponent(Component);
