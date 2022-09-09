"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {
        name: "",
        license: "",
        fullname: "",
        wechat: "",
        phone: ""
      },
      rules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "\u8BF7\u586B\u5199\u4F01\u4E1A\u540D\u79F0"
          }]
        },
        license: {
          rules: [{
            required: true,
            errorMessage: "\u8BF7\u586B\u5199\u7EDF\u4E00\u4FE1\u7528\u4EE3\u7801"
          }]
        },
        fullname: {
          rules: [{
            required: true,
            errorMessage: "\u8BF7\u586B\u5199\u6CD5\u4EBA\u59D3\u540D"
          }]
        },
        wechat: {
          rules: [{
            required: true,
            errorMessage: "\u8BF7\u586B\u5199\u6CD5\u4EBA\u5FAE\u4FE1\u53F7"
          }]
        },
        phone: {
          rules: [{
            required: true,
            errorMessage: "\u8BF7\u586B\u5199\u6CD5\u4EBA\u624B\u673A\u53F7"
          }]
        }
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((res) => {
      }).catch((err) => {
      });
    },
    reset() {
    }
  }
};
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.form.name,
    b: common_vendor.o(($event) => $data.form.name = $event.detail.value),
    c: common_vendor.p({
      label: "\u4F01\u4E1A\u540D\u79F0",
      name: "name"
    }),
    d: $data.form.license,
    e: common_vendor.o(($event) => $data.form.license = $event.detail.value),
    f: common_vendor.p({
      label: "\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801/\u8425\u4E1A\u6267\u7167\u53F7",
      name: "license"
    }),
    g: $data.form.fullname,
    h: common_vendor.o(($event) => $data.form.fullname = $event.detail.value),
    i: common_vendor.p({
      name: "fullname",
      label: "\u6CD5\u4EBA\u59D3\u540D"
    }),
    j: $data.form.wechat,
    k: common_vendor.o(($event) => $data.form.wechat = $event.detail.value),
    l: common_vendor.p({
      name: "wechat",
      label: "\u6CD5\u4EBA\u5FAE\u4FE1\u53F7"
    }),
    m: $data.form.phone,
    n: common_vendor.o(($event) => $data.form.phone = $event.detail.value),
    o: common_vendor.p({
      name: "phone",
      label: "\u6CD5\u4EBA\u624B\u673A\u53F7"
    }),
    p: common_vendor.sr("form", "769a7324-0"),
    q: common_vendor.p({
      model: $data.form,
      rules: $data.rules,
      ["label-width"]: "120",
      ["label-position"]: "top",
      ["err-show-type"]: "toast"
    }),
    r: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-769a7324"], ["__file", "E:/wwwroot/wechat-admin/wechat/pages/apply/apply.vue"]]);
wx.createPage(MiniProgramPage);
