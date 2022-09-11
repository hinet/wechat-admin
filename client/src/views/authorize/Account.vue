<template>
    <div class="container">
        <t-space direction="vertical">
            <t-breadcrumb>
                <template #default>
                    <t-breadcrumbItem>控制台</t-breadcrumbItem>
                    <t-breadcrumbItem>管家中心</t-breadcrumbItem>
                    <t-breadcrumbItem>授权帐号管理</t-breadcrumbItem>
                </template>
                <template #separator> > </template>
            </t-breadcrumb>
            <t-card title="授权帐号介绍" :bordered="false">

                <div class="tips">
                    <li>授权帐号指的是获得公众号或者小程序管理员授权的帐号，服务商可为授权帐号提供代开发、代运营等服务。</li>
                    <li>代开发小程序指的是小程序管理员将权限集id为18的"小程序开发与数据分析"权限授权给该第三方，服务商可代小程序提交代码、发布上线等。</li>
                </div>
                <t-tabs :default-value="1">
                    <t-tab-panel :value="1" label="普通授权帐号">
                        <div class="search-box">
                            <t-input placeholder="请输入 AppID，不支持模糊搜索" />
                            <t-button>
                                <Icon name="search" slot="icon" /> 搜索
                            </t-button>
                        </div>
                        <t-base-table row-key="index" :data="data" :columns="columns" :maxHeight="140"
                            :pagination="{ total: 30 }" />
                    </t-tab-panel>
                    <t-tab-panel :value="2" label="代开发小程序">
                        <p style="margin: 20px">选项卡2内容区</p>
                    </t-tab-panel>
                </t-tabs>
            </t-card>

        </t-space>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const data = ref([]);
const columns = [
    { colKey: 'index', title: 'AppID' },
    { colKey: 'index', title: '原始ID' },
];
</script>
<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .t-space {
        margin: 0 auto;
        max-width: 1080px;
    }

    .t-tab-panel {
        padding-top: 10px;
    }

    .search-box {
        width: 50%;
        display: flex;
        flex-direction: row;

        .t-button {
            margin-left: 6px;
        }
    }

    .t-table {
        margin-top: 10px;
    }
}
</style>