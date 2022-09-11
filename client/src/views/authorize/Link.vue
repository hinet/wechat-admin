<template>
    <div class="container">
        <t-space direction="vertical">
            <t-breadcrumb>
                <template #default>
                    <t-breadcrumbItem>控制台</t-breadcrumbItem>
                    <t-breadcrumbItem>管家中心</t-breadcrumbItem>
                    <t-breadcrumbItem>授权链接生成器</t-breadcrumbItem>
                </template>
                <template #separator> > </template>
            </t-breadcrumb>
            <t-alert>
                <template #message>
                    <p>服务商需要获得商家授权后方可代商家开发、运营、管理商家公众号和小程序，因此需要生成授权链接，引导商家完成授权。</p>
                    <p>复制链接后，可将链接分享给商家，也可以复制授权链接到企业官网，引导用户授权。</p>
                    <p>注意事项：如该第三方平台帐号尚未审核通过，则需将待授权的公众号或小程序加入“第三方平台-开发资料-授权测试公众号/小程序列表”后方可完成授权。</p>
                </template>
            </t-alert>
            <t-card title="授权回调页配置" :bordered="false">

                <div class="tips">
                    <li>商家授权成功后默认停留再授权成功页，如需在商家授权完成后自动跳转至回调页面，可通过下方配置添加回调 uri</li>
                    <li>支持配置由开发者自定义开发的uri，无域名前缀限制；授权后会自动重定向至该uri，但授权链接redirect_uri仍为微管家域名的uri，可在下方一键复制授权链接。</li>
                    <li>支持配置基于微管家进行二次开发的url，需与该微管家域名前缀一致。</li>
                    <li>当前微管家域名前缀为：https://wxcomponent-65545-2187314-1313669246.ap-shanghai.run.tcloudbase.com。</li>
                </div>
                <div class="setting">
                    <ul>
                        <li>授权回调uri：</li>
                        <li><a href="http://" @click="openCallback">开启</a></li>
                    </ul>
                </div>
                <div class="setting">
                    <ul>
                        <li>授权链接</li>
                        <li>使用方式</li>
                        <li>操作</li>
                    </ul>
                    <ul>
                        <li>PC 版授权链接</li>
                        <li>在电脑浏览器里打开后，使用微信扫码</li>
                        <li><a href="http://">复制链接</a></li>
                    </ul>
                    <ul>
                        <li>H5 版授权链接</li>
                        <li>在手机微信里直接访问授权链接</li>
                        <li><a href="http://">复制链接</a></li>
                    </ul>
                </div>
            </t-card>
        </t-space>
    </div>
    <t-dialog v-model:visible="visible" @confirm="onConfirm">
        <div class="dialog">
            <li>授权回调url</li>
            <li>
                <t-input v-model="form.callback_url" placeholder="请输入完整的url，包含协议前缀" />
            </li>
        </div>
    </t-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';
const visible = ref(false)
const form = ref({
    callback_url: ''
})
const openCallback = (e: any) => {
    e.preventDefault();
    visible.value = true
}
const onConfirm = (e: any) => {
    if (!form.value.callback_url) {
        MessagePlugin.info('请输入合法的url');
        return false;
    }
    visible.value = false
    console.log(e)
}
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

    .tips {
        li {
            list-style-type: disc;
            line-height: 180%;
        }
    }

    .setting {
        border-top: 1px solid #ececec;
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        padding-top: 15px;

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            align-items: center;

            &:first-child {
                li {
                    font-weight: bold;
                }
            }

            li {
                list-style: none;

                &:first-child {
                    width: 200px;
                }

                &:nth-child(2) {
                    flex: 1;
                }

                &:last-child {
                    width: 80px;
                }
            }
        }
    }
}
</style>