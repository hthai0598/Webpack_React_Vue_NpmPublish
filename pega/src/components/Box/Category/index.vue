<template>
    <div>
        <Category1 v-if="!this.$root.category" :bigEvent="this.bigEvent" />
        <div v-for="(item,index) in this.boxHightLight" :key="index">
            <Category2 v-if="item.layoutid == 2" :data="item" />
            <Category3 v-if="item.layoutid == 3" :data="item" />
            <Category4 v-if="item.layoutid == 4" :data="item" />
            <Category5 v-if="item.layoutid == 5" :data="item" />
        </div>
        <Category6 v-if="!this.$root.category" :hotTopic="this.hotTopic" />
        <div class="sponsor_mid">
            <AdvItvc :mg="true" />
        </div>
        <div v-if="this.boxNormal != null" class="af_flx justifySB">
            <div class="af_bigright-left">
                <Category7 :boxNormal="this.boxNormal" />
            </div>
            <div class="af_bigright-right">
                <AdvRight2 />
                <AdvRight3 />
            </div>
        </div>
    </div>
</template>

<script>
    import { dataContent } from '@/configData/eventBus.js';
    import { commonHelper } from '@/utils/helper.js';

    import Category1 from "@/components/Box/Category/Category1";
    import Category2 from "@/components/Box/Category/Category2";
    import Category3 from "@/components/Box/Category/Category3";
    import Category4 from "@/components/Box/Category/Category4";
    import Category5 from "@/components/Box/Category/Category5";
    import Category6 from "@/components/Box/Category/Category6";
    import Category7 from "@/components/Box/Category/Category7";
    import AdvItvc from "@/components/Banner/AdvItvc";
    import AdvRight2 from "@/components/Banner/AdvRight2";
    import AdvRight3 from "@/components/Banner/AdvRight3";
    export default {
        name: "Category",
        components: {
            //Category1: () => import(/* webpackChunkName: "Category1" */ "@/components/Box/Category/Category1"),
            //Category2: () => import(/* webpackChunkName: "Category2" */ "@/components/Box/Category/Category2"),
            //Category3: () => import(/* webpackChunkName: "Category3" */ "@/components/Box/Category/Category3"),
            //Category4: () => import(/* webpackChunkName: "Category4" */ "@/components/Box/Category/Category4"),
            //Category5: () => import(/* webpackChunkName: "Category5" */ "@/components/Box/Category/Category5"),
            //Category6: () => import(/* webpackChunkName: "Category6" */ "@/components/Box/Category/Category6"),
            //Category7: () => import(/* webpackChunkName: "Category7" */ "@/components/Box/Category/Category7"),
            //SponBanner: () => import(/* webpackChunkName: "SponBanner" */ "@/components/Banner/SponBanner"),
            Category1,
            Category2,
            Category3,
            Category4,
            Category5,
            Category6,
            Category7,
            AdvItvc,
            AdvRight2,
            AdvRight3
        },
        data() {
            return {
                bigEvent: null,
                hotTopic: null,
                topicArticles: null,
                boxHightLight: null,
                boxNormal: null,
            };
        },
        computed: {
            getThis: function () {
                return this
            },
            menu: function () {
                return this.$store.state.menu;
            }
        },
        watch: {
            ///theo dõi menu trong vuex, nếu có data thì build box nổi bật
            menu() {
                let check = {
                    idCategory: this.$root.buildMethod.idCategory,
                    activeIndex: this.$root.buildMethod.activeIndex
                }
                if (this.menu != null) {
                    //build box nổi bật
                    commonHelper.buildBox(this.menu, this.$root.user, check, this.$root.buildMethod.domain, this.$root.buildMethod.domainApi).then(rs => {
                        this.boxHightLight = rs.hightlight;
                        this.boxNormal = rs.normal;
                    });
                }
            }
        },
        created() {
            dataContent.$on('dataContent', (data) => {
                let check = {
                    idCategory: this.$root.buildMethod.idCategory,
                    activeIndex: this.$root.buildMethod.activeIndex
                }
                if (data.bigEvent != null) {
                    this.bigEvent = data.bigEvent;
                }
                if (data.hotTopic != null) {
                    this.hotTopic = data.hotTopic;
                }
                //if (data.box != null) {
                //    //build box nổi bật
                //    commonHelper.buildBox(data.box, this.$root.user, check, this.$root.buildMethod.domain, this.$root.buildMethod.domainApi).then(rs => {
                //        this.boxHightLight = rs.hightlight;
                //        this.boxNormal = rs.normal;
                //    });
                //}
            })
        },
    };
</script>

<style scoped>
    .af_bigright-left {
        width: 265px;
    }

    .af_bigright-right {
        width: 300px;
    }
</style>
