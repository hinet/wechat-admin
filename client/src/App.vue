<template>
  <t-layout>
    <t-aside :width="sideWidth">
      <Sidebar :collapsed="collapsed" />
    </t-aside>
    <t-layout>
      <t-header height="50px">
        <t-head-menu height="50px" expand-type="popup">
          <template #logo>
            <t-button variant="text" shape="square" @click="onCollapsed">
              <Icon :name="icon" />
            </t-button>
            <t-button variant="text" shape="square">
              <Icon name="refresh" />
            </t-button>
          </template>
          <template #operations>
            <t-menu-item value="item1"><template #icon>
                <Icon name="notification" />
              </template> 通知</t-menu-item>
            <t-submenu value="1">
              <template #icon>
                <Icon name="link" />
              </template>
              <template #title>
                <span>快捷链接</span>
              </template>
              <t-menu-item value="1-0" href="https://open.weixin.qq.com/">微信开放平台</t-menu-item>
              <t-menu-item value="1-1"
                href="https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Third_party_platform_appid.html">
                微信第三方平台</t-menu-item>
            </t-submenu>
            <t-submenu value="2">
              <template #icon>
                <t-avatar>W</t-avatar>
              </template>
              <template #title>
                <span>&nbsp;root 退出</span>
              </template>
              <t-menu-item value="2-0">修改密码</t-menu-item>
              <t-menu-item value="2-1">退出系统</t-menu-item>
            </t-submenu>
          </template>
        </t-head-menu>
      </t-header>
      <t-content><router-view></router-view></t-content>
      <t-footer>CopyRight @ 2022</t-footer>
    </t-layout>
  </t-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Sidebar from './views/layout/Sidebar.vue'
const collapsed = ref(false);
const sideWidth = ref("200px");
const icon = ref("menu-unfold");
const onCollapsed = () => {
  collapsed.value = !collapsed.value;
  if (collapsed.value) {
    icon.value = "menu-fold";
    sideWidth.value = "60px";
  } else {
    icon.value = "menu-unfold";
    sideWidth.value = "200px";
  }
}
</script>
<style lang="less">
#app {
  margin: 0 !important;
  padding: 0 !important;
  max-width: none !important;
  display: flex !important;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;

  .t-layout {
    .t-layout__header {
      padding-left: 6px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .08);

      .t-head-menu__inner {
        height: 50px;

        .t-menu__operations {
          height: 50px;
        }
      }

      .t-head-menu__inner li+li {
        margin-left: 8px;
      }

      .t-head-menu {
        .t-menu__item {
          min-width: 60px;
        }

        .t-menu__item.t-is-active {
          background-color: #ffffff;
        }
      }
    }

    .t-layout__content {
      padding: 15px;
      .t-breadcrumb{
        margin-bottom: 15px;
      }
      .t-alert{
        margin-bottom: 15px;
      }
    }
  }
  a {
    color: var(--td-brand-color);
    &:hover,
    &:focus{
      color: rgba(0, 82, 217, .6);
      background: none !important;
    }
  }
}
</style>
