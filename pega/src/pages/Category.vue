<template>
    <Layout>
        <CategoryNav />
        <div class="af_home20-wrapper">
            <div class="w1160">
                <BoxSelectionTop :firstNews="this.firstNews" :topNews="this.topNews" />
                <BoxSelectionMid />
            </div>
        </div>
    </Layout>
</template>


<script>
    import axios from 'axios'
    import { apiWeb } from '@/utils/common.js';
    import { commonHelper } from '@/utils/helper.js';
    import { dataContent } from '@/configData/eventBus.js';

    import Layout from "@/components/Layout";
    import BoxSelectionTop from "@/components/Box/BoxSelectionTop";
    import BoxSelectionMid from "@/components/Box/BoxSelectionMid";
    import CategoryNav from "@/components/CategoryNav";

    export default {
        name: "Category",
        components: {
            Layout, BoxSelectionTop, BoxSelectionMid, CategoryNav
            //Layout: () => import(/* webpackChunkName: "Layout" */ "@/components/Layout"),
            //BoxSelectionTop: () => import(/* webpackChunkName: "BoxSelectionTop" */ "@/components/Box/BoxSelectionTop"),
            //BoxSelectionMid: () => import(/* webpackChunkName: "BoxSelectionMid" */ "@/components/Box/BoxSelectionMid"),
            //CategoryNav: () => import(/* webpackChunkName: "CategoryNav" */ "@/components/CategoryNav"),
        },
        data() {
            return {
                firstNews: null,
                topNews: null,
                menu: {
                    menuExtend: null,
                    newspaper: null,
                },
                dataObj: {
                    streamForYou: null,
                    bigEvent: null,
                    hotTopic: null,
                    box: null,
                    datasplice: null
                }
            };
        },
        methods: {
        },
        created() {
            let idCategory = this.$root.buildMethod.idCategory
            let activeIndex = this.$root.buildMethod.activeIndex
            let cate = 0;
            activeIndex == 0 ? cate = idCategory : cate = activeIndex;
            let config = commonHelper.checkJwt(this.$root.user);

            let firstNews = commonHelper.getKingToken(tk => {
                axios(apiWeb.firstNewsCate(this.$root.buildMethod.domainApi, config[0], config[1], cate), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.firstNews = values.data;
                        if (values.data.data != null) {
                            let dataSplice = values.data.data.splice(4, 4)
                            this.dataObj.datasplice = dataSplice
                            dataContent.$emit("dataContent", this.dataObj)
                        }
                        else {
                            this.firstNews = undefined
                            console.error('firstnew error')
                        }
                    }
                }).catch(e => {
                    console.error(e)
                    this.dataObj.datasplice = undefined
                    dataContent.$emit("dataContent", this.dataObj)
                })
            }, this.$root.buildMethod.domain);
            let topnews = commonHelper.getKingToken(tk => {
                axios(apiWeb.topNewsCate(this.$root.buildMethod.domainApi, config[0], config[1]), commonHelper.getHeader(tk)).then(values => {
                    if (values != null) {
                        this.topNews = values.data;
                    }
                    else {
                        console.error('topNews error')
                        this.topNews = undefined;
                    }
                }).catch(e => {
                    console.error(e)
                    this.topNews = undefined;
                })
            }, this.$root.buildMethod.domain);

            let streamForYou = commonHelper.getKingToken(tk => {
                axios(apiWeb.streamForYouCate(this.$root.buildMethod.domainApi, config[0], config[1], 0, cate, 20), commonHelper.getHeader(tk)).then(values => {
                    if (values != null) {
                        this.dataObj.streamForYou = values.data;
                        dataContent.$emit("dataContent", this.dataObj)
                    }
                    else {
                        console.error("stream error")
                        this.dataObj.streamForYou = undefined
                        dataContent.$emit("dataContent", this.dataObj)
                    }
                }).catch(e => {
                    console.error(e)
                    this.dataObj.streamForYou = undefined
                    dataContent.$emit("dataContent", this.dataObj)
                })
            }, this.$root.buildMethod.domain);
        },
    };
</script>

<style scoped>
    .af_home20-wrapper {
        background: #ffffff;
        padding: 25px 0;
    }

        .af_home20-wrapper .af_section-mid {
            padding: 25px 0;
        }
</style>
