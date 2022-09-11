<template>
  <t-menu theme="dark" :collapsed="collapsed" :width="['200px', '60px']" @change="onMenuChanged" :value="current">
    <template v-for="(item,index) in routes.options.routes">
      <t-submenu :value="index" :title="item.meta.title" v-if="item.children">
        <template #icon>
          <t-icon :name="item.meta.icon" />
        </template>
        <template v-for="(menu,key) in item.children">
          <t-menu-item :value="index+'-'+key" :to="menu.path">
            <span>{{menu.meta.title}}</span>
          </t-menu-item>
        </template>
      </t-submenu>
      <t-menu-item :value="index" :to="item.path" v-else>
        <template #icon>
          <t-icon :name="item.meta.icon" />
        </template>
        {{item.meta.title}}
      </t-menu-item>
    </template>

  </t-menu>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
const store = useStore();
const props = defineProps({
  collapsed: Boolean
});
const routes = useRouter()
//获取当前选中菜单
const current = computed(() => store.state.menu.current)
const onMenuChanged = (index: number) => {
  //保存当前菜单索引
  store.dispatch('menu/current',index)
}
</script>