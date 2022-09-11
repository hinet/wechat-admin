<template>
    <div class="container">
        <t-space direction="vertical">
            <t-breadcrumb>
                <template #default>
                    <t-breadcrumbItem>控制台</t-breadcrumbItem>
                    <t-breadcrumbItem>首页</t-breadcrumbItem>
                </template>
                <template #separator> > </template>
            </t-breadcrumb>
            <t-alert message="欢迎体验基于微信第三方平台和微信云托管平台为基础搭建的“服务商微管家”SaaS应用。如有更多的需求或者使用问题可加入官方群进行反馈。" />
            <t-card :bordered="false" style="padding-top:12px">
                <t-row :gutter="15">
                    <t-col :span="8">
                        <t-card title="产品体验指引">
                            <t-steps>
                                <t-step-item title="获取商家授权">
                                    <template #content>
                                        服务商获得商家小程序授权后，即可代商家开发和运营小程序。<br /><a href="http://" target="_blank">前往体验</a>
                                    </template>
                                </t-step-item>
                                <t-step-item title="管理授权帐号">
                                    <template #content>
                                        可批量管理已授权商家公众号和小程序，可对授权帐号进行批量操作。<br /><a href="http://" target="_blank">前往体验</a>
                                    </template>
                                </t-step-item>
                                <t-step-item title="二次开发与系统对接">
                                    <template #content>该应用支持通过修改源码<br />进行二次开发，支持通过<br />openApi与业务系统对接。</template>
                                </t-step-item>
                            </t-steps>
                        </t-card>
                    </t-col>
                    <t-col :span="4">
                        <t-card title="联系我们">
                            <img width="97"
                                src="https://static-index-4gtuqm3bfa95c963-1304825656.tcloudbaseapp.com/cd6125c-c249-4d19-891f-1016ed218a6e.png" />
                            <p>加入官方交流群，获得技术支持</p>
                        </t-card>
                    </t-col>
                </t-row>
                <t-card title="产品特性" :bordered="false">
                    <t-row :gutter="15">
                        <t-col :span="4">
                            <div class="panel">
                                <img src="../assets/icons/home01.png" width="64" srcset="">
                                <div class="panel-body">
                                    <div class="title">开箱即用</div>
                                    <p>内置开箱即用的SaaS应用，便于服务商快速获得商家小程序授权、0成本启动服务商业务。</p>
                                </div>
                            </div>
                        </t-col>
                        <t-col :span="4">
                            <div class="panel">
                                <img src="../assets/icons/home02.png" width="64" srcset="">
                                <div class="panel-body">
                                    <div class="title">最佳实践</div>
                                    <p>内置应用是官方基于最佳实践进行设计，帮助新手服务商快速掌握基于第三方平台开展业务。</p>
                                </div>
                            </div>
                        </t-col>
                        <t-col :span="4">
                            <div class="panel">
                                <img src="../assets/icons/home03.png" width="64" srcset="">
                                <div class="panel-body">
                                    <div class="title">可轻松扩展</div>
                                    <p>基于云原生设计理念，且项目开源，开发者可快速低成本进行二次开发以及与业务系统集成。</p>
                                </div>
                            </div>
                        </t-col>
                        <t-col :span="4">
                            <div class="panel">
                                <img src="../assets/icons/home04.png" width="64" srcset="">
                                <div class="panel-body">
                                    <div class="title">节省成本</div>
                                    <p>根据负载自动扩缩容，超细粒度资源控制，以及按实际使用量计费，节省成本。</p>
                                </div>
                            </div>
                        </t-col>
                        <t-col :span="4">
                            <div class="panel">
                                <img src="../assets/icons/home05.png" width="64" srcset="">
                                <div class="panel-body">
                                    <div class="title">安全稳定</div>
                                    <p>基于VPC 网络隔离，提供应用运行时安全保障；支持微信私有协议，可免鉴权安全调用微信接口。</p>
                                </div>
                            </div>
                        </t-col>
                        <t-col :span="4">
                            <div class="panel">
                                <img src="../assets/icons/home06.png" width="64" srcset="">
                                <div class="panel-body">
                                    <div class="title">简易运维</div>
                                    <p>服务部署于微信云托管，微信云托管提供丰富的运维管理工具，极大降低开发者维护成本。</p>
                                </div>
                            </div>
                        </t-col>
                    </t-row>
                </t-card>
            </t-card>
        </t-space>
    </div>
</template>
<script setup lang="ts">

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

    .panel {
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            width: 42px;
            height: 42px;
        }

        .panel-body {
            padding-left: 12px;

            .title {
                font-weight: bold;
            }
        }
    }
}
</style>