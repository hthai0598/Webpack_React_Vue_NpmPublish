<template>
    <Layout>
        <div class="af_home20-wrapper">
            <div class="w1160">
                <BoxSelectionTop :firstNews="this.firstNews" :topNews="this.topNews" />
                <BoxSelectionMid />
            </div>
        </div>
    </Layout>
</template>

<script>
    import { apiWeb } from '@/utils/common.js';
    import axios from 'axios'
    import { commonHelper } from '@/utils/helper.js';
    import { dataContent } from '@/configData/eventBus.js';

    import Layout from "@/components/Layout";
    import BoxSelectionTop from "@/components/Box/BoxSelectionTop";
    import BoxSelectionMid from "@/components/Box/BoxSelectionMid";

    export default {
        name: "Home",
        components: {
            Layout, BoxSelectionTop, BoxSelectionMid
            //Layout: () => import(/* webpackChunkName: "Layout" */ "@/components/Layout"),
            //BoxSelectionTop: () => import(/* webpackChunkName: "BoxSelectionTop" */ "@/components/Box/BoxSelectionTop"),
            //BoxSelectionMid: () => import(/* webpackChunkName: "BoxSelectionMid" */ "@/components/Box/BoxSelectionMid"),
        },
        data() {
            return {
                firstNews: null,
                topNews: null,
                dataObj: {
                    streamForYou: null,
                    bigEvent: null,
                    hotTopic: null,
                    box: null
                }
            };
        },
        methods: {
        },
        created() {
            let config = commonHelper.checkJwt(this.$root.user);
            let firstNews = commonHelper.getKingToken(tk => {
                axios(apiWeb.firstNews(this.$root.buildMethod.domainApi, config[0], config[1]), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.firstNews = values.data;
                    }
                    else {
                        this.firstNews = undefined;
                        console.error('firstnew error')
                    }
                }).catch(e => {
                    console.error(e)
                    this.firstNews = undefined;
                });
            }, this.$root.buildMethod.domain)
            let topnews = commonHelper.getKingToken(tk => {
                axios(apiWeb.topnews(this.$root.buildMethod.domainApi, config[0], config[1]), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.topNews = values.data;
                    }
                    else {
                        this.topNews = undefined;
                        console.error('topnew error')
                    }
                }).catch(e => {
                    console.error(e)
                    this.topNews = undefined;
                });;
            }, this.$root.buildMethod.domain)

            let streamForYou = commonHelper.getKingToken(tk => {
                axios(apiWeb.streamForYou(this.$root.buildMethod.domainApi, config[0], config[1], 0, 20), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.dataObj.streamForYou = values.data;
                        //sử dụng event bus emit data => boxselectionmid/bigleft component
                        dataContent.$emit("dataContent", this.dataObj)
                    }
                    else {
                        this.dataObj.streamForYou = undefined;
                        //sử dụng event bus emit data => category component
                        dataContent.$emit("dataContent", this.dataObj)
                        console.error('streamforu error')
                    }
                }).catch(e => {
                    this.dataObj.streamForYou = undefined;
                    //sử dụng event bus emit data => category component
                    dataContent.$emit("dataContent", this.dataObj)
                    console.error(e)
                });;
            }, this.$root.buildMethod.domain)
            let bigEvent = commonHelper.getKingToken(tk => {
                axios(apiWeb.bigEvent(this.$root.buildMethod.domainApi, config[0], config[1]), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.dataObj.bigEvent = values.data;
                        //sử dụng event bus emit data => category component
                        dataContent.$emit("dataContent", this.dataObj)
                    }
                    else {
                        this.dataObj.bigEvent = undefined;
                        //sử dụng event bus emit data => category component
                        dataContent.$emit("dataContent", this.dataObj)
                        console.error('bigevent error')
                    }
                }).catch(e => {
                    console.error(e)
                    this.dataObj.bigEvent = undefined;
                    //sử dụng event bus emit data => category component
                    dataContent.$emit("dataContent", this.dataObj)
                });;
            }, this.$root.buildMethod.domain)
            let hotTopic = commonHelper.getKingToken(tk => {
                axios(apiWeb.hotTopic(this.$root.buildMethod.domainApi, config[0], config[1]), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.dataObj.hotTopic = values.data;
                        ///sử dụng event bus emit data => category component
                        dataContent.$emit("dataContent", this.dataObj)
                    }
                    else {
                        this.dataObj.hotTopic = undefined;
                        ///sử dụng event bus emit data => category component
                        dataContent.$emit("dataContent", this.dataObj)
                        console.error('hottoopic error')
                    }
                }).catch(e => {
                    console.error(e)
                    this.dataObj.hotTopic = undefined;
                    ///sử dụng event bus emit data => category component
                    dataContent.$emit("dataContent", this.dataObj)
                });
            }, this.$root.buildMethod.domain)

        },
        updated() {
        }
    };</script>

<style scoped>
    .af_home20-wrapper {
        background: #ffffff;
        padding: 25px 0;
    }

        .af_home20-wrapper .af_section-mid {
            padding: 25px 0;
        }
</style>
