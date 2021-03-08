<template>
    <div @click="clickOutSide" :class="this.popupOverload ? 'wrapPopupOverload fade-in' : 'wrapPopup fade-in'" :style="[this.typeContent =='content' ?{alignItems: 'normal'}:{alignItems: 'center'}]">
        <div class="wrapBox"
             :style="[
        this.typeContent == 'content' ? { width: '1160px',  marginTop: '30px'} : { width: '740px'},
        this.typeContent == 'content' || this.typeContent == 'bigevent'|| this.typeContent == 'hottopic' ? {overflow:'none',cursor: 'context-menu',}: {overflow:'hidden', cursor: 'grab'}
      ] ">
            <!--|| this.typeContent == 'thumb'|| this.typeContent == 'cateBox'-->
            <div class="popup_container">
                <Header :closePopup="this.closePopup" :typeIcon="this.typeIcon" :topicName="this.topicName" />
                <AdvPopupTop v-if="this.typeContent == 'content'" />

                <div class="content_popup">
                    <!--///typeContent=thumb-->
                    <!--Note: type này có case đặc biệt có thể mở popup trên popup qua props popupOverload truyền từ component Layout-->
                    <!--nếu true tức popup đc đc bật đè => set class wrapPopupOverload, nếu false =>  set class wrapPopup-->
                    <ul v-if="this.typeContent == 'thumb' && this.listBookmark != null" class="list_afnews-mid">
                        <li v-for="(item,index) in this.listBookmark" :key="index">
                            <CardTextRight :sizeSource="13"
                                           :data="item"
                                           positionSource="bottom"
                                           type="midThumb"
                                           :openPopup="(e)=>getThis.openPopup__(item.id,e)"
                                           :title="item.title"
                                           :source="item.source"
                                           :date="item.publishDate"
                                           :id="item.id" />     <!--showFunc="func1"-->

                        </li>
                    </ul>
                    <ul v-else-if="this.typeContent == 'thumb' && this.listBookmark == null" class="list_afnews-mid">
                        <li class="txt" style="text-align:center">
                            Chưa có thông tin
                        </li>
                    </ul>


                    <!--typeContent=catebox-->
                    <div v-else-if="this.typeContent == 'cateBox'">
                        <div v-if="this.categoryInterested == null && this.specializedNews == null" class="txt" style="text-align:center">
                            Chưa có thông tin
                        </div>
                        <div v-else>
                            <CateBox v-if="this.categoryInterested != null && this.categoryInterested.length>0" title="Chuyên mục" :data="this.categoryInterested" />
                            <CateBox v-if="this.specializedNews != null && this.specializedNews.length>0 " title="Chuyên trang" :data="this.specializedNews" />
                        </div>
                    </div>

                    <!--typeContent=content-->
                    <PopupPost :state="this.state" :dataId="this.id" v-else-if="this.typeContent == 'content'" />

                    <!--typeContent=bigevent || hottopic-->
                    <!--Note: type này có case đặc biệt có thể mở popup trên popup qua props popupOverload truyền từ component Layout-->
                    <!--nếu true tức popup đc đc bật đè => set class wrapPopupOverload, nếu false =>  set class wrapPopup-->
                    <div v-else-if="this.typeContent == 'bigevent' || this.typeContent == 'hottopic'">
                        <ul v-if="this.topicArticles != null" class="list_afnews-mid">
                            <li v-for="(item,index) in this.topicArticles" :key="index">
                                <CardTextRight type="midThumb"
                                               :data="item"
                                               :openPopup="(e)=>getThis.openPopup__(item.id,e)"
                                               :styleThumb="{ marginBottom: '0', marginRight: '20px' ,flexShrink: '0'}"
                                               :sizeSource="13"
                                               :showPreview="true"
                                               positionSource="bottom" />

                            </li>
                            <li v-if="this.showLoadMore">
                                <SkeTextRight />
                            </li>
                        </ul>
                        <ul v-else>
                            <li>
                                <SkeTextRight />
                            </li>
                            <li>
                                <SkeTextRight />
                            </li>
                            <li>
                                <SkeTextRight />
                            </li>
                        </ul>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
    import { popupStatus, popupStatusOverload } from "@/configData/eventBus.js";
    import { apiWeb } from '@/utils/common.js';
    import { commonHelper } from '@/utils/helper.js';

    //import Skeleton from "@/components/Skeleton";
    //import CardTextRight from "@/components/Card/CardTextRight";
    //import PopupPost from "@/components/Popup/PopupPost";
    //import CateBox from "@/components/Box/CateBox";
    //import FuncGroup from "@/components/FuncGroup";
    //import Header from "@/components/Popup/Header";
    //import Footer from "@/components/Popup/Footer";
    //import Footer from "@/components/Popup/Footer";
    export default {
        name: "Popup",
        props: {
            state: {
                default: null
            },
            status: {
                ///trạng thái popup (mặc định là đóng)
                default: false,
            },
            typeIcon: {
                default: "",
            },
            typeContent: {
                default: "thumb",
            },
            id: {
                default: null
            },
            topicId: {
                default: null
            },
            topicName: {
                default: null
            },
            popupOverload: {
                default: false
            }
        },
        methods: {
            scrollToLoad: function (event) {
                var element = event.target;
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    this.showLoadMore = true
                    this.pages = this.pages + 1;
                    let config = commonHelper.checkJwt(this.$root.user);
                    ///call api của bigEvent
                    commonHelper.getKingToken(tk => {
                        import('axios').then(({ default: axios }) => {
                            axios(apiWeb.topicArticles(this.$root.buildMethod.domainApi, config[0], config[1], this.pages, this.topicId), commonHelper.getHeader(tk)).then(rs => {
                                if (rs.data != "") {
                                    this.topicArticles = commonHelper.unqId([...this.topicArticles, ...rs.data.data])
                                    this.showLoadMore = false
                                }
                                else {
                                    this.showLoadMore = false
                                    this.$el.removeEventListener("scroll", this.scrollToLoad);
                                }
                            })

                        })
                    }, this.$root.buildMethod.domain)
                }
            },
            clickOutSide: function (event) {
                event.stopPropagation();
                if (this.$el != undefined) {
                    ///dk để ktra xem user có bật popup trên popup k, nếu wrappopup => chỉ bật 1 popup
                    if (event.target.classList.contains("wrapPopup")) {
                        this.$el.style.background = "none";
                        this.$el.classList.remove("fade-in");
                        this.$el.classList.add("fade-out");
                        //history.pushState(null, 'popup', '/')
                        this.$root.buildMethod.popupClosed();
                        setTimeout(() => {
                            document.body.style.marginRight = "0";
                            ///Truyền thông báo đóng popup (layout)
                            popupStatus.$emit("popupStatus", false);
                            if (this.typeContent != "cateBox" && this.typeContent != "thumb") {
                                history.go(-1)
                            }
                        }, 200);
                    }
                    else if (event.target.classList.contains("wrapPopupOverload")) {
                        //document.title = this.$root.titlePage
                        this.$el.classList.remove("fade-in");
                        this.$el.classList.add("fade-out");
                        this.$root.buildMethod.popupClosed();
                        this.$nextTick(() => {
                            document.getElementsByClassName('wrapBox')[0].classList.remove("fade-out");
                            document.getElementsByClassName('wrapBox')[0].classList.add("fade-in");
                        })
                        setTimeout(() => {
                            ///Truyền thông báo đóng popupOverload (layout)
                            popupStatusOverload.$emit("popupStatusOverload", false);
                            if (this.typeContent != "cateBox" && this.typeContent != "thumb") {
                                history.go(-1)
                            }
                        }, 200);
                        //history.pushState(null, 'popup', '/')
                    }
                }
            },
            closePopup: function () {
                this.$root.buildMethod.popupClosed();
                //document.title = this.$root.titlePage
                ///dk để ktra xem user có bật popup trên popup k, nếu wrappopup => chỉ bật 1 popup
                if (this.$el.classList.contains("wrapPopup")) {
                    this.$el.style.background = "none";
                    this.$el.classList.remove("fade-in");
                    this.$el.classList.add("fade-out");
                    setTimeout(() => {
                        document.body.style.marginRight = "0";
                        popupStatus.$emit("popupStatus", false);
                        //history.pushState({}, 'popup', '/')
                        if (this.typeContent != "cateBox" && this.typeContent != "thumb") {
                            history.go(-1)
                        }
                    }, 200);
                }
                else if (this.$el.classList.contains("wrapPopupOverload")) {
                    this.$el.classList.remove("fade-in");
                    this.$el.classList.add("fade-out");
                    this.$nextTick(() => {
                        document.getElementsByClassName('wrapBox')[0].classList.remove("fade-out");
                        document.getElementsByClassName('wrapBox')[0].classList.add("fade-in");
                    })
                    setTimeout(() => {
                        ///Truyền thông báo đóng popupOverload (layout)
                        popupStatusOverload.$emit("popupStatusOverload", false);
                        //history.pushState({}, 'popup', this.$root.origin)
                        if (this.typeContent != "cateBox" && this.typeContent != "thumb") {
                            history.go(-1)
                        }
                    }, 200);
                }

            },
            onDragStart: function (event) {
                this.$el.firstElementChild.classList.add("dragging");
                var style = getComputedStyle(this.$el.firstElementChild);
                this.$el.firstElementChild.drag = {
                    y:
                        (event.pageY || event.clientY + document.body.scrollTop) -
                        this.$el.firstElementChild.offsetTop +
                        parseInt(style.marginTop),
                    source: this.$el.firstElementChild,
                };
            },
            onDragMove: function (event) {
                if (!this.$el.firstElementChild.drag) {
                    return;
                } else if (this.$el.firstElementChild.drag != null) {
                    this.move = true
                    this.$el.firstElementChild.style.top =
                        (event.pageY || event.clientY + document.body.scrollTop) -
                        this.$el.firstElementChild.drag.y +
                        "px";
                }
            },
            onDragEnd: function (event) {
                if (!this.$el.firstElementChild.drag) {
                    return;
                } else if (this.move) {
                    this.$el.firstElementChild.classList.remove("dragging");
                    if (parseInt(this.$el.firstElementChild.style.top.replace("px", "")) > parseInt(this.top.replace("px", "")) + 100 || parseInt(this.$el.firstElementChild.style.top.replace("px", "")) < parseInt(this.top.replace("px", "")) - 100) {
                        this.closePopup();
                    } else {
                        this.$el.firstElementChild.style.top = `${this.top}px`;
                    }
                    this.$el.firstElementChild.drag = null;
                    this.move = false;
                }
                else {
                    this.$el.firstElementChild.classList.remove("dragging");
                    this.$el.firstElementChild.drag = null;
                    this.move = false;
                }
            },
            onDragOver: function (event) {
                event.preventDefault();
            },
            openPopup__: function (e, b) { /// click vào mở popup trên popup
                b.preventDefault()
                //this.$el.firstElementChild.style.visibility='hidden'
                this.$el.firstElementChild.classList.remove("fade-in");
                this.$el.firstElementChild.classList.add("fade-out");
                let id = arguments[0];
                ///truyền status để mở popup (layout)
                (id != null || id != undefined || id != "")
                    ///Truyền thông báo mở popupOverload (layout)
                    ? popupStatusOverload.$emit("popupStatusOverload", true, "content", "content", { id: id })
                    : ""
            }
        },
        computed: {
            getThis: function () {
                return this
            }
        },
        components: {
            //Header,Footer,PopupPost,CardTextRight,FuncGroup,CateBox,Skeleton
            Header: () => import(/* webpackChunkName: "Header" */ "@/components/Popup/Header"),
            Footer: () => import(/* webpackChunkName: "Footer" */ "@/components/Popup/Footer"),
            PopupPost: () => import(/* webpackChunkName: "PopupPost" */ "@/components/Popup/PopupPost"),
            CardTextRight: () => import(/* webpackChunkName: "CardTextRight" */ "@/components/Card/CardTextRight"),
            FuncGroup: () => import(/* webpackChunkName: "FuncGroup" */ "@/components/FuncGroup"),
            CateBox: () => import(/* webpackChunkName: "CateBox" */ "@/components/Box/CateBox"),
            SkeTextRight: () => import(/* webpackChunkName: "SkeTextRight" */ "@/components/Skeleton/SkeTextRight"),
            AdvPopupTop: () => import(/* webpackChunkName: "AdvPopupTop" */ "@/components/Banner/AdvPopupTop"),
        },
        data() {
            return {
                top: "0",
                pages: 0,
                move: false,
                showLoadMore: false,
                topicArticles: null, //api của bigEvent
                categoryInterested: null, //api của cateBox (chuyên mục)
                specializedNews: null, //api của cateBox (chuyên trang),
                detail: null,///api của detail popup,
                listBookmark: null, //api thumb (ds bài viết đã đánh dấu)
                key: 0
            };
        },
        created() {
            let config = commonHelper.checkJwt(this.$root.user);
            switch (this.typeContent) {
                case "bigevent":
                    if (this.state == null) {
                        import('axios').then(({ default: axios }) => {
                            ///call api của bigEvent
                            commonHelper.getKingToken(tk => {
                                axios(apiWeb.topicArticles(this.$root.buildMethod.domainApi, config[0], config[1], this.pages, this.topicId), commonHelper.getHeader(tk)).then(rs => {
                                    this.topicArticles = commonHelper.unqId(rs.data.data)
                                    this.$nextTick(() => {
                                        if (this.state == null && this.$root.buildMethod.topicId == 0) {
                                            history.pushState({ ...this.topicArticles, type: "bigevent", topicId: this.topicId, popupIndex: 1, title: document.title, typeIcon: this.typeIcon, typeContent: this.typeContent }, 'popup', '/su-kien-noi-bat-' + this.topicId + '.htm')
                                        }
                                        this.$el.style.alignItems = 'normal'
                                    })
                                }).catch(e => console.error(e))
                            }, this.$root.buildMethod.domain)
                        })
                    }
                    else {
                        this.topicArticles = this.state;
                        this.$nextTick(() => {
                            document.body.style.overflowY = "hidden";
                            this.$el.style.alignItems = 'normal'
                        })
                    }

                    break;
                case "hottopic":
                    if (this.state == null) {
                        import('axios').then(({ default: axios }) => {
                            commonHelper.getKingToken(tk => {
                                axios(apiWeb.topicArticles(this.$root.buildMethod.domainApi, config[0], config[1], this.pages, this.topicId), commonHelper.getHeader(tk)).then(rs => {
                                    this.topicArticles = commonHelper.unqId(rs.data.data)
                                    this.$nextTick(() => {
                                        if (this.state == null && this.$root.buildMethod.topicId == 0) {
                                            history.pushState({ ...this.topicArticles, type: "hottopic", topicId: this.topicId, popupIndex: 1, title: document.title, typeIcon: this.typeIcon, typeContent: this.typeContent }, 'popup', '/chu-de-noi-bat-' + this.topicId + '.htm')
                                        }
                                        this.$el.style.alignItems = 'normal'
                                    })
                                }).catch(e => console.error(e))
                            }, this.$root.buildMethod.domain)
                        })
                    }
                    else {
                        this.topicArticles = this.state;
                        this.$nextTick(() => {
                            this.$el.style.alignItems = 'normal'
                            document.body.style.overflowY = "hidden";
                        })
                    }

                    break;
                case "thumb":
                    import('axios').then(({ default: axios }) => {
                        commonHelper.getKingToken(tk => {
                            axios(apiWeb.listBookmark(this.$root.buildMethod.domainApi, config[0], config[1]), commonHelper.getHeader(tk)).then(rs => {
                                if (rs.data != null) {
                                    this.listBookmark = rs.data.data
                                }
                                if (this.listBookmark != null && this.listBookmark.length > 3) {
                                    for (var i = 0; i < this.listBookmark.length; i++) {
                                        this.listBookmark[i].image = this.listBookmark[i].sourceImage
                                    }
                                    this.$nextTick(() => {
                                        this.$el.style.alignItems = 'normal'
                                    })
                                }
                            }).catch(e => console.error(e))
                        }, this.$root.buildMethod.domain)
                    })

                    break;
                case "cateBox":
                    import('axios').then(({ default: axios }) => {
                        commonHelper.getKingToken(tk => {
                            axios(apiWeb.categoryInterested(this.$root.buildMethod.domainApi, config[0], config[1]), commonHelper.getHeader(tk)).then(rs => {
                                this.categoryInterested = rs.data.data.filter(x => x.type == 2)
                                this.specializedNews = rs.data.data.filter(x => x.type == 1)
                                if (this.categoryInterested.length == 0) {
                                    this.categoryInterested = null
                                }
                                if (this.specializedNews.length == 0) {
                                    this.specializedNews = null
                                }
                                if (this.categoryInterested != null && this.categoryInterested.length > 3 || this.specializedNews != null && this.specializedNews.length > 3) {
                                    this.$nextTick(() => {
                                        this.$el.style.alignItems = 'normal'
                                        this.top = '0'
                                    })
                                }
                            }).catch(e => console.error(e))
                        }, this.$root.buildMethod.domain)
                    })
                    ///call api của cateBox

                    break;
                case 'content':
                    this.$nextTick(() => {
                        this.$el.style.alignItems = 'normal'
                    })
                    break;
            }
        },
        mounted() {
            //if (this.typeContent != "content" && this.typeContent != "bigevent" && this.typeContent != "thumb" && this.typeContent != "cateBox") {
            if (this.typeContent != "content" && this.typeContent != "bigevent" && this.typeContent != "hottopic") {
                this.top = `${this.$el.firstElementChild.offsetTop}`;
                this.$el.addEventListener("mousedown", this.onDragStart);
                this.$el.addEventListener("mousemove", this.onDragMove);
                this.$el.addEventListener("mouseup", this.onDragEnd);
                this.$el.addEventListener("mouseout", this.onDragOver);
            }
            else if (this.typeContent == 'bigevent' && this.$el.classList.contains('wrapPopup') || this.typeContent == 'hottopic' && this.$el.classList.contains('wrapPopup')) {
                this.$el.addEventListener("scroll", this.scrollToLoad);
            }
        },
        updated() {
            if (this.state != null) {
                if (this.state.type == 'bigevent' || this.state.type == 'hottopic') {
                    this.topicArticles = this.state;
                    this.$nextTick(() => {
                        this.$el.style.alignItems = 'normal'
                        document.body.style.overflowY = "hidden";
                    })
                }
            }
            this.top = `${this.$el.firstElementChild.offsetTop}`;
        }
    };
</script>

<style scoped>
    .txt {
        font-size: 18px;
        line-height: 140%;
        color: #353535;
        font-family: SFPD-Regular;
        margin-bottom: 15px;
    }

   /* .wrapPopup::-webkit-scrollbar {
        display: none;
    }*/

  /*  .wrapPopupOverload::-webkit-scrollbar {
        display: none;
    }*/

    .popup_container {
        width: 100%;
        position: relative;
        height: 100%;
        z-index: 200;
    }

    .dragging {
        cursor: grabbing !important;
    }

    .wrapPopup {
        /*padding: 6px;*/
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        background: rgb(10 10 10 / 84%);
        transition: 0.5s;
        overflow: hidden;
        overflow-x: auto;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        height: 100%;
    }

    .wrapPopupOverload {
        height: 100%;
        overflow-y: auto;
        align-items: normal;
        top: 0;
        width: 100%;
        z-index: 999;
        position: fixed;
        display: flex;
        overflow-y: auto;
        justify-content: center;
    }

    .content_popup {
        z-index: 1000;
        overflow-y: auto;
        padding: 20px 20px 40px 20px;
    }

    .wrapBox {
        z-index: 500;
        -webkit-overflow-scrolling: touch;
        text-align: left;
        vertical-align: middle;
        background: #fff;
        margin: 0 auto;
        border-radius: 8px;
        position: absolute;
    }

    .list_afnews-mid li {
        margin-bottom: 25px;
        padding-bottom: 25px;
        border-bottom: 1px dashed #E5E5E5;
    }

    .cate-box {
        width: 700px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

        .cate-box .cate-label {
            font-size: 15px;
            line-height: 20px;
            color: #8e8e8e;
            font-family: SFPD-SemiBold;
            margin-bottom: 15px;
        }

    .list-cate {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .list_afnews-mid li {
        margin-bottom: 25px;
        padding-bottom: 25px;
        border-bottom: 1px dashed #e5e5e5;
    }

        .list_afnews-mid li:nth-last-child(1) {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
        }

    .fade-in {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-timing-function: ease-in;
        animation-duration: 0.2s;
    }

    .fade-out {
        opacity: 0;
        animation-name: fadeOutOpacity;
        animation-timing-function: ease-out;
        animation-duration: 0.4s;
    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOutOpacity {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
</style>
