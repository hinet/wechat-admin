<template>
    <div class="container">
        <div class="panel">
            <h2><span>服务微管家</span>管理控制台登录</h2>
            <t-form labelAlign="top" layout="vertical" ref="form" :data="formData" :rules="rules" @submit="onSubmit">
                <t-form-item label="账号" name="username" initialData="TDesign">
                    <t-input placeholder="请输入账号" v-model="formData.username" size="large" />
                </t-form-item>
                <t-form-item label="密码" name="password" initialData="TDesign">
                    <t-input placeholder="请输入密码" v-model="formData.password" size="large" />
                </t-form-item>
                <t-form-item labelAlign="right" labelWidth="0">
                    <a href="http://" @click="showTips">忘记帐号或密码</a>
                    <t-button theme="primary" type="submit" size="large">登录</t-button>
                </t-form-item>
            </t-form>
        </div>
    </div>
    <t-dialog v-model:visible="visible" header="忘记帐号或密码" :confirmBtn="null">
        <p>如忘记初始帐号和密码，可返回"微信开放平台-站内信"进行查看。</p>
        <p>若已重置过密码，需使用重置后的密码登录；如已忘记重置后的密码则无法再登录，需牢记重置后的密码。</p>
        <p>如有其他疑问，可扫码加入官方技术支持企业微信群反馈。</p>
    </t-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import api from "../api";
import { MessagePlugin } from 'tdesign-vue-next';

const store = useStore()
const visible = ref(false)
const formData = ref({
    username: '',
    password: '',
});
const rules = {
    username: [{ required: true, message: '请输入账号', type: 'error', trigger: 'blur' }]
}
const showTips = (e: any) => {
    e.preventDefault()
    visible.value = true
}
const onSubmit = ({ validateResult, firstError, e }) => {
    e.preventDefault();
    if (validateResult === true) {
        api.login(formData.value).then((res:any)=>{
            if(res.code == 0){
                store.commit("User/login",res.data)
                MessagePlugin.success('提交成功');
            }else{

            }
        })
        
    } else {
        console.log('Validate Errors: ', firstError, validateResult);
        MessagePlugin.error(firstError);
    }
}
</script>
<style lang="less" scoped>
.container {
    background-color: #efefef;

    .panel {
        width: 380px;
        margin: 10% auto;
        padding: 30px;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .06);

        h2 {
            margin-bottom: 15px;

            span {
                display: block;
                font-size: 14px;
                color: #999;
            }
        }
    }

    .t-form {
        .t-form__item {
            margin-bottom: 8px;

            &:last-child {
                padding-top: 10px;

                :deep(.t-form__controls-content) {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between !important;
                }

            }
        }
    }
}
</style>