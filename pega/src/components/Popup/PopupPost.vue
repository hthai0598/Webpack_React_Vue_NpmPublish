<template>
    <div v-if="this.detail!=null" :data-id="this.detail.id" class="pega-popup-wrapper">
        <div class="popup-body-wrapper">
            <div class="popup-body-left">
                <div class="popup-body-left-wrapper">
                    <div class="popup-body-top">
                        <div class="pb-header">
                            <div class="pb-header-title">
                                <h1 :title="this.detail.title">
                                    {{this.detail.title}}
                                </h1>
                            </div>
                            <div data-id-source="this.detail.domain.id" class="pb-header-sourse">
                                <div class="sourse-left">
                                    <a class="link-home">
                                        <i class="logo-home">
                                            <img :src="this.detail.domain.image" alt="" />
                                        </i>
                                        <span class="link-home-txt">{{this.detail.domain.name}}</span>
                                    </a>
                                    <span class="dot">.</span>
                                    <span class="time" :time="this.detail.publish_time">{{this.newTime}}</span>
                                </div>
                                <div class="sourse-right">
                                    <a :title="this.detail.title" @click="this.blank" :href="this.detail.url" target="_blank" rel="nofollow" class="action-link">
                                        <span class="act-txt">Link bài viết</span>
                                        <span class="icm">
                                            <svg width="10"
                                                 height="10"
                                                 viewBox="0 0 10 10"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M1.5 2.5C1.36739 2.5 1.24021 2.55268 1.14645 2.64645C1.05268 2.74021 1 2.86739 1 3V8.5C1 8.63261 1.05268 8.75979 1.14645 8.85355C1.24021 8.94732 1.36739 9 1.5 9H7C7.13261 9 7.25978 8.94732 7.35355 8.85355C7.44732 8.75978 7.5 8.63261 7.5 8.5V5.5C7.5 5.22386 7.72386 5 8 5C8.27614 5 8.5 5.22386 8.5 5.5V8.5C8.5 8.89783 8.34196 9.27936 8.06066 9.56066C7.77935 9.84196 7.39782 10 7 10H1.5C1.10217 10 0.720644 9.84196 0.43934 9.56066C0.158035 9.27936 0 8.89783 0 8.5V3C0 2.60218 0.158035 2.22064 0.43934 1.93934C0.720644 1.65804 1.10218 1.5 1.5 1.5H4.5C4.77614 1.5 5 1.72386 5 2C5 2.27614 4.77614 2.5 4.5 2.5H1.5Z"
                                                      fill="white"></path>
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M1.5 2.5C1.36739 2.5 1.24021 2.55268 1.14645 2.64645C1.05268 2.74021 1 2.86739 1 3V8.5C1 8.63261 1.05268 8.75979 1.14645 8.85355C1.24021 8.94732 1.36739 9 1.5 9H7C7.13261 9 7.25978 8.94732 7.35355 8.85355C7.44732 8.75978 7.5 8.63261 7.5 8.5V5.5C7.5 5.22386 7.72386 5 8 5C8.27614 5 8.5 5.22386 8.5 5.5V8.5C8.5 8.89783 8.34196 9.27936 8.06066 9.56066C7.77935 9.84196 7.39782 10 7 10H1.5C1.10217 10 0.720644 9.84196 0.43934 9.56066C0.158035 9.27936 0 8.89783 0 8.5V3C0 2.60218 0.158035 2.22064 0.43934 1.93934C0.720644 1.65804 1.10218 1.5 1.5 1.5H4.5C4.77614 1.5 5 1.72386 5 2C5 2.27614 4.77614 2.5 4.5 2.5H1.5Z"
                                                      fill="#1F9FFC"></path>
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M6 0.5C6 0.223858 6.22386 1.49012e-08 6.5 1.49012e-08H9.5C9.77614 1.49012e-08 10 0.223858 10 0.5V3.5C10 3.77614 9.77614 4 9.5 4C9.22386 4 9 3.77614 9 3.5V1H6.5C6.22386 1 6 0.776142 6 0.5Z"
                                                      fill="white"></path>
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M6 0.5C6 0.223858 6.22386 1.49012e-08 6.5 1.49012e-08H9.5C9.77614 1.49012e-08 10 0.223858 10 0.5V3.5C10 3.77614 9.77614 4 9.5 4C9.22386 4 9 3.77614 9 3.5V1H6.5C6.22386 1 6 0.776142 6 0.5Z"
                                                      fill="#1F9FFC"></path>
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M9.85355 0.146447C10.0488 0.341709 10.0488 0.658291 9.85355 0.853553L5.35355 5.35355C5.15829 5.54882 4.84171 5.54882 4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645L9.14645 0.146447C9.34171 -0.0488155 9.65829 -0.0488155 9.85355 0.146447Z"
                                                      fill="white"></path>
                                                <path fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M9.85355 0.146447C10.0488 0.341709 10.0488 0.658291 9.85355 0.853553L5.35355 5.35355C5.15829 5.54882 4.84171 5.54882 4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645L9.14645 0.146447C9.34171 -0.0488155 9.65829 -0.0488155 9.85355 0.146447Z"
                                                      fill="#1F9FFC"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- ///content -->
                        <div ref="fade" class="pb-body body-collapsed">
                            <div class="pbc-cover">
                                <img alt="" :src="this.detail.image" />
                                <h2 class="thumb-des">
                                    {{this.detail.sapo}}
                                </h2>
                                <AdvSapo />
                            </div>
                            <div class="pbc-content" v-html="this.detail.body">

                            </div>
                            <BtnFadeContent v-if="this.detail.article_type == 1" :type="this.detail.article_type" :status="this.showContent" :onClick="showAll" :href="this.detail.url" />
                            <BtnBlank v-else :status="false" :href="this.detail.url" :titlePost="this.detail.title" />
                        </div>
                        <AdvPopupOnImage />
                        <AdvPopupArticle />
                    </div>


                    <div class="popup-body-bottom">
                        <div class="news-more">
                            <div class="news-more-title">
                                <span>Tin liên quan</span>
                            </div>
                            <ul class="list-news">
                                <li class="news-item" v-for="(item,index) in this.relatedDetail" :key="index" :data-id="item.id">
                                    <div class="news-item-wrapper">
                                        <CardTextBottom :data="item"
                                                        :openPopup="(e) => getThis.changeData(e,item.id)"
                                                        :sizeTitle="13"
                                                        :styleThumb="{ width: '186px', marginBottom: '8px' }"
                                                        :line="false"
                                                        type="smallThumb" />
                                    </div>
                                </li>
                                <li>
                                    <AdvTql />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup-body-right">
                <AdvPopupRight1 />
                <AdvPopupRight2 />
                <AdvPopupRight3 />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { apiWeb } from '@/utils/common.js';
    import { commonHelper } from '@/utils/helper.js';

    import CardTextBottom from "@/components/Card/CardTextBottom";
    import BtnFadeContent from "@/components/Button/BtnFadeContent";
    import BtnBlank from "@/components/Button/BtnBlank";
    import AdvPopupRight1 from "@/components/Banner/AdvPopupRight1";
    import AdvPopupRight2 from "@/components/Banner/AdvPopupRight2";
    import AdvPopupRight3 from "@/components/Banner/AdvPopupRight3";
    import AdvPopupOnImage from "@/components/Banner/AdvPopupOnImage";
    import AdvPopupArticle from "@/components/Banner/AdvPopupArticle";
    import AdvSapo from "@/components/Banner/AdvSapo";
    import AdvTql from "@/components/Banner/AdvTql";
    export default {
        name: "PopupPost",
        props: {
            dataId: {
                default: null
            },
            state: {}
        },
        components: {
            CardTextBottom,
            BtnFadeContent, BtnBlank, AdvPopupRight1, AdvPopupRight2, AdvPopupRight3,
            AdvPopupOnImage, AdvTql, AdvPopupArticle, AdvSapo
        },
        data() {
            return {
                showContent: false,
                relatedDetail: null,
                detail: null,
                newTime: null,
            };
        },
        computed: {
            getThis: function () {
                return this;
            },
        },
        methods: {
            showAll: function () {
                let dom = this.$refs["fade"];
                dom.classList.remove("body-collapsed");
                this.showContent = true;
            },
            changeData: function (e, data) {
                let detail = axios(apiWeb.detail(this.$root.buildMethod.domainApi, data));
                detail.then(rs => {
                    //quảng cáo article popup
                    commonHelper.appendAds("kkc9quv8", document.getElementById("adv_popup_Article"));
                    //quảng cáo article popup
                    commonHelper.appendAds("kkc9quv8", document.getElementById("adv_popup_Article"));
                    //quảng cáo right1 popup
                    commonHelper.appendAds("kkm9iq7c", document.getElementById("adv_popupRight1"));
                    //quảng cáo right2 popup
                    commonHelper.appendAds("kkm9kzhf", document.getElementById("adv_popupRight2"));
                    //quảng cáo right3 popup
                    commonHelper.appendAds("kkm9rbhq", document.getElementById("adv_popupRight3"));
                    //quảng cáo top popup
                    commonHelper.appendAds("kkm9g5c3", document.getElementById("adv_popupTop"));
                    //quảng cáo sapo popup
                    commonHelper.appendAds("kkc9pd50", document.getElementById("adv_sapo"));

                    this.detail = rs.data.data
                    if (this.$el.closest('.wrapPopup') != undefined) {
                        this.$el.closest('.wrapPopup').scrollTo({ top: 0 });
                    }
                    else {
                        this.$el.closest('.wrapPopupOverload').scrollTo({ top: 0 });
                    }
                    document.title = rs.data.data.title
                    window.history.replaceState(rs.data.data, 'popup', commonHelper.buildHrefDetail(this.detail.title, this.detail.id));
                    this.$nextTick(() => {
                        let dom = this.$refs["fade"];
                        dom.classList.add("body-collapsed");
                        this.showContent = false;
                        this.$root.buildMethod.popupLoaded();
                        this.$root.buildMethod.popupRelatedLoaded();
                    })
                })
            },
            blank: function (e) {
                e.preventDefault()
                //this.$root.titlePage = this.detail.title
                window.open(this.detail.url, '_blank');
            }
        },
        mounted() {
            let config = commonHelper.checkJwt(this.$root.user);
            if (this.state == null) {
                if (this.dataId != null) {
                    let detail = axios(apiWeb.detail(this.$root.buildMethod.domainApi, this.dataId));
                    detail.then(rs => {
                        if (rs.data != null) {
                            this.detail = rs.data.data
                            document.title = rs.data.data.title
                            this.$nextTick(() => {
                                this.$root.buildMethod.popupLoaded();
                            })
                            commonHelper.getKingToken(tk => {
                                axios(apiWeb.relatedNews(this.$root.buildMethod.domainApi, config[0], config[1], this.dataId), commonHelper.getHeader(tk)).then(rs => {
                                    if (rs.data != null) {
                                        this.relatedDetail = rs.data.data.slice(0, 6)
                                        this.$nextTick(() => {
                                            this.$root.buildMethod.popupRelatedLoaded();
                                        })
                                    }
                                    else {
                                        console.error("relatedNews null")
                                    }
                                }).catch(e => { console.error(e) })
                            }, this.$root.buildMethod.domain)
                            import(/* webpackChunkName: "moment" */ 'moment').then(({ default: moment }) => {
                                moment.locale('vi');
                                this.newTime = moment(this.detail.publish_time * 1000).startOf('hour').fromNow()
                            })
                            if (this.$root.buildMethod.id == 0 || this.$root.category) {
                                window.history.pushState(rs.data.data, 'popup', commonHelper.buildHrefDetail(this.detail.title, this.detail.id));

                            }
                        }
                        else {
                            console.error('detail null')
                        }
                    }).catch(e => { console.error(e) })
                }
            }
            else {
                this.detail = this.state;
                document.title = this.state.title;
                this.$nextTick(() => {
                    this.$root.buildMethod.popupLoaded();
                })
                commonHelper.getKingToken(tk => {
                    axios(apiWeb.relatedNews(this.$root.buildMethod.domainApi, config[0], config[1], this.dataId), commonHelper.getHeader(tk)).then(rs => {
                        if (rs.data != null) {
                            this.relatedDetail = rs.data.data.slice(0, 6)
                            this.$nextTick(() => {
                                this.$root.buildMethod.popupRelatedLoaded();
                                document.body.style.overflowY = "hidden";
                                document.body.style.marginRight = "17px";
                            })
                        }
                        else {
                            console.error("relatedNews null")
                        }
                    }).catch(e => { console.error(e) })
                }, this.$root.buildMethod.domain)
                import(/* webpackChunkName: "moment" */ 'moment').then(({ default: moment }) => {
                    moment.locale('vi');
                    this.newTime = moment(this.detail.publish_time * 1000).startOf('hour').fromNow()
                })
            }

        },
        updated() {
        }
    };</script>

<style scoped>
    .popup-body-wrapper {
        transition: all 500ms ease;
    }

    .pb-body.body-collapsed .pbc-content {
        max-height: 50vh;
        overflow: hidden;
        transition: max-height 0.3s;
    }

    .popup-body-wrapper {
        display: flex;
        justify-content: space-between;
    }

        .popup-body-wrapper .popup-body-left {
            max-width: 760px;
        }

        .popup-body-wrapper .popup-body-right {
            width: 400px;
        }

        .popup-body-wrapper .popup-body-left .popup-body-left-wrapper {
            padding: 0 80px;
            box-sizing: border-box;
            position: relative;
        }

            .popup-body-wrapper .popup-body-left .popup-body-left-wrapper::before {
                position: absolute;
                content: "";
                width: 1px;
                height: 90%;
                background: #eeeeee;
                top: -40px;
                right: 0;
            }

            .popup-body-wrapper .popup-body-left .popup-body-left-wrapper .popup-body-top {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                position: relative;
            }

            .popup-body-wrapper
            .popup-body-left
            .popup-body-left-wrapper
            .popup-body-bottom::before {
                position: absolute;
                content: "";
                width: 100%;
                height: 1px;
                background: #eeeeee;
                top: 0;
                left: 0;
            }

            .popup-body-wrapper
            .popup-body-left
            .popup-body-left-wrapper
            .popup-body-top
            .pb-header {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
            }

            .popup-body-wrapper
            .popup-body-left
            .popup-body-left-wrapper
            .popup-body-top
            .pb-body {
                display: flex;
                flex-direction: column;
            }

            .popup-body-wrapper
            .popup-body-left
            .popup-body-left-wrapper
            .popup-body-top
            .pb-header
            .pb-header-title {
                margin-bottom: 10px;
            }

                .popup-body-wrapper
                .popup-body-left
                .popup-body-left-wrapper
                .popup-body-top
                .pb-header
                .pb-header-title
                h1 {
                    font-size: 30px;
                    line-height: 130%;
                    color: #161616;
                    font-family: SFPD-SemiBold;
                }

            .popup-body-wrapper
            .popup-body-left
            .popup-body-left-wrapper
            .popup-body-top
            .pb-header
            .pb-header-sourse {
                display: flex;
                justify-content: space-between;
            }

    .popup-body-left-wrapper
    .popup-body-top
    .pb-header
    .pb-header-sourse
    .sourse-left {
        display: flex;
        align-items: center;
    }

    .popup-body-left
    .popup-body-left-wrapper
    .popup-body-top
    .pb-header
    .pb-header-sourse
    .sourse-left
    .link-home {
        display: flex;
        align-items: center;
    }

    .popup-body-wrapper
    .popup-body-left
    .popup-body-left-wrapper
    .popup-body-top
    .pb-header
    .pb-header-sourse
    .sourse-left
    .link-home
    i {
        width: 20px;
        height: 20px;
        display: block;
        margin-right: 5px;
    }

    .link-home i img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .popup-body-wrapper
    .popup-body-left
    .popup-body-left-wrapper
    .popup-body-top
    .pb-header
    .pb-header-sourse
    .sourse-right
    .action-link {
        display: flex;
        align-items: center;
    }

        .popup-body-wrapper
        .popup-body-left
        .popup-body-left-wrapper
        .popup-body-top
        .pb-header
        .pb-header-sourse
        .sourse-right
        .action-link
        .act-txt {
            font-size: 13px;
            line-height: 120%;
            color: #1f9ffc;
            font-family: SFPD-SemiBold;
            margin-right: 5px;
        }

    .popup-body-left-wrapper
    .popup-body-top
    .pb-header
    .pb-header-sourse
    .sourse-left
    .link-home-txt,
    .sourse-left
    .dot,
    .sourse-left
    .time {
        font-size: 15px;
        line-height: 130%;
        font-family: SFPD-SemiBold;
        color: #8e8e8e;
    }

    .dot {
        margin: 0 3px;
    }

    .sourse-left .time {
        font-size: 15px;
        line-height: 130%;
        font-family: SFPD-SemiBold;
        color: #8e8e8e;
    }

    .popup-body-left-wrapper .popup-body-bottom {
        padding: 20px 0;
        box-sizing: border-box;
        position: relative;
    }

    .popup-body-bottom::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background: #eeeeee;
        top: 0;
        left: 0;
    }

    .popup-body-left-wrapper .popup-body-bottom .news-more {
        display: flex;
        flex-direction: column;
        /* padding-bottom: 50px; */
    }

    .news-more-title {
        font-size: 15px;
        line-height: 20px;
        color: #8e8e8e;
        font-family: SFPD-Regular;
        margin-bottom: 20px;
    }

    .news-more .list-news {
        display: grid;
        grid-template-columns: repeat(3, 31%);
        grid-row-gap: 30px;
        grid-column-gap: 18px;
    }

    .list-news .news-item .news-item-wrapper {
        display: flex;
        flex-direction: column;
    }

    .pb-body .pbc-cover {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .popup-body-left
    .popup-body-left-wrapper
    .popup-body-top
    .pb-body
    .pbc-cover
    .thumb-des {
        margin-top: 20px;
        font-size: 17px;
        line-height: 24px;
        font-family: SFPD-Regular;
        color: #8e8e8e;
    }

    .pbc-content ::v-deep > p, .pbc-content ::v-deep > div {
        font-size: 18px;
        line-height: 140%;
        color: #353535;
        font-family: SFPD-Regular;
        margin-bottom: 15px;
    }

    .pbc-cover > img {
        width: 100%;
    }
</style>
