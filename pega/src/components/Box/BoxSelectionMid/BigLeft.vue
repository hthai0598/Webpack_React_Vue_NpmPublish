<template>
    <div v-if="this.streamForYou != undefined" ref="el" class="af_bigleft">
        <LabelNewH2 title="Tin của bạn" />
        <!--<ul class="list_afnews-mid">
            <li>
                <CardTextRight type="midThumb"
                               title="uigasuids"
                               titleCard="Mẹ và bé"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>

            <li><Live /></li>
            <li>
                <CardTextRight type="midThumb"
                               titleCard="Mẹ và bé"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               titleCard="Mẹ và bé"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
        </ul>

        <Tutorial />
        <ul class="list_afnews-mid">
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
        </ul>

        <ul class="list_afnews-mid">
            <Gallery />
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               titleCard="Giải trí"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
        </ul>

        <CardTextBottom :showPreview="true"
                        positionTitleCard="top"
                        type="bigThumb"
                        titleCard="Giải trí"
                        typeTitleCard="eMag-tag"
                        :line="false" />
        <ul class="list_afnews-mid">
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               titleCard="Giải trí"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
        </ul>

        <CardTextBottom :showPreview="true"
                        positionTitleCard="top"
                        type="bigThumb"
                        titleCard="Du lich"
                        :line="false">
            <Carousel slot="carousel" />
        </CardTextBottom>
        <ul class="list_afnews-mid">
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <CardTextRight type="midThumb"
                               titleCard="Giải trí"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' }" />
            </li>
            <li>
                <Skeleton />
            </li>
        </ul>-->


        <ul ref="mock" v-if="this.streamForYou != null && this.streamForYou.length > 0" class="list_afnews-mid">
            <li v-for="(item,index) in this.lst1">
                <CardTextRight :data="item"
                               :openPopup="(e)=>getThis.openPopup(item.id,e)"
                               :sizeSource="13"
                               :titleCard="item.titleCard"
                               :linkTitleCard="item.href"
                               :showPreview="true"
                               positionSource="bottom"
                               type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' ,flexShrink: '0'}" />
                <!--                showFunc="func2"-->
            </li>
            <AdvStream1 />
            <li v-for="(item,index) in this.lst2">
                <CardTextRight :data="item"
                               :openPopup="(e)=>getThis.openPopup(item.id,e)"
                               :sizeSource="13"
                               :titleCard="item.titleCard"
                               :linkTitleCard="item.href"
                               :showPreview="true"
                               positionSource="bottom"
                               type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' ,flexShrink: '0'}" />
                <!--                showFunc="func2"-->
            </li>
            <AdvStream2 />
            <li v-for="(item,index) in this.lst3">
                <CardTextRight :data="item"
                               :openPopup="(e)=>getThis.openPopup(item.id,e)"
                               :sizeSource="13"
                               :titleCard="item.titleCard"
                               :linkTitleCard="item.href"
                               :showPreview="true"
                               positionSource="bottom"
                               type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' ,flexShrink: '0'}" />
                <!--                showFunc="func2"-->
            </li>
            <AdvStream3 />
            <li v-for="(item,index) in this.lst4">
                <CardTextRight :data="item"
                               :openPopup="(e)=>getThis.openPopup(item.id,e)"
                               :sizeSource="13"
                               :titleCard="item.titleCard"
                               :linkTitleCard="item.href"
                               :showPreview="true"
                               positionSource="bottom"
                               type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' ,flexShrink: '0'}" />
                <!--                showFunc="func2"-->
            </li>
            <AdvStream4 />
            <li v-for="(item,index) in this.lst5">
                <CardTextRight :data="item"
                               :openPopup="(e)=>getThis.openPopup(item.id,e)"
                               :sizeSource="13"
                               :titleCard="item.titleCard"
                               :linkTitleCard="item.href"
                               :showPreview="true"
                               positionSource="bottom"
                               type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' ,flexShrink: '0'}" />
                <!--                showFunc="func2"-->
            </li>
            <AdvStream5 />
            <li v-for="(item,index) in this.lst6">
                <CardTextRight :data="item"
                               :openPopup="(e)=>getThis.openPopup(item.id,e)"
                               :sizeSource="13"
                               :titleCard="item.titleCard"
                               :linkTitleCard="item.href"
                               :showPreview="true"
                               positionSource="bottom"
                               type="midThumb"
                               :styleThumb="{ marginBottom: '0', marginRight: '20px' ,flexShrink: '0'}" />
                <!--                showFunc="func2"-->
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
        <ul style="margin-bottom: 20px;" v-if="this.loadStatus">
            <li>
                <SkeTextRight />
            </li>
        </ul>
        <BtnLoadMore v-if="this.streamForYou != null && this.stepLoad > this.defaultStep - 1" :loadMore="this.loadMore" />

    </div>
</template>

<script>
    import { dataContent, popupStatus } from '@/configData/eventBus.js';
    import { apiWeb } from '../../../utils/common';
    import { commonHelper } from '../../../utils/helper';

    import LabelNewH2 from "@/components/Text/LabelNewH2";
    import Tutorial from "@/components/Thumb/ThumbBox/Tutorial";
    import Gallery from "@/components/Thumb/ThumbBox/Gallery";
    import CardTextRight from "@/components/Card/CardTextRight";
    import CardTextBottom from "@/components/Card/CardTextBottom";
    import SkeTextRight from "@/components/Skeleton/SkeTextRight";
    import Carousel from "@/components/Carousel";
    import Live from "@/components/Live";
    import BtnLoadMore from "@/components/Button/BtnLoadMore";
    import AdvStream1 from "@/components/Banner/AdvStream1";
    import AdvStream2 from "@/components/Banner/AdvStream2";
    import AdvStream3 from "@/components/Banner/AdvStream3";
    import AdvStream4 from "@/components/Banner/AdvStream4";
    import AdvStream5 from "@/components/Banner/AdvStream5";

    export default {
        name: "BigRight",
        components: {
            //Carousel: () => import(/* webpackChunkName: "Carousel" */ "@/components/Carousel"),
            //LabelNewH2: () => import(/* webpackChunkName: "LabelNewH2" */ "@/components/Text/LabelNewH2"),
            //Tutorial: () => import(/* webpackChunkName: "Tutorial" */ "@/components/Thumb/ThumbBox/Tutorial"),
            //CardTextRight: () => import(/* webpackChunkName: "CardTextRight" */ "@/components/Card/CardTextRight"),
            //Gallery: () => import(/* webpackChunkName: "Gallery" */ "@/components/Thumb/ThumbBox/Gallery"),
            //Live: () => import(/* webpackChunkName: "Live" */ "@/components/Live"),
            //CardTextBottom: () => import(/* webpackChunkName: "CardTextBottom" */ "@/components/Card/CardTextBottom"),
            //BtnLoadMore: () => import(/* webpackChunkName: "BtnLoadMore" */ "@/components/Button/BtnLoadMore"),
            //Skeleton: () => import(/* webpackChunkName: "Skeleton" */ "@/components/Skeleton"),
            Carousel,
            LabelNewH2,
            Tutorial,
            CardTextRight,
            Gallery,
            Live,
            CardTextBottom,
            SkeTextRight,
            BtnLoadMore,
            AdvStream1, AdvStream2, AdvStream3, AdvStream4, AdvStream5
        },
        props: {
        },
        data() {
            return {
                streamForYou: [],
                page: 0,
                defaultStep: 3,
                loadStatus: false,
                stepLoad: 0,
                elm: 0,
                arrBox: []
            };
        },
        created() {
            ///Hứng data từ eventbus đc truyền từ component home hoặc category
            dataContent.$on('dataContent', (data) => {
                ///check page home hay category
                //category => lấy 4 tin của api firstnews + những tin còn lại của tin của bạn
                if (data.streamForYou != null && data.streamForYou != undefined && data.datasplice != null && data.datasplice != undefined) {
                    this.streamForYou = [...data.datasplice, ...data.streamForYou.data];
                    this.$forceUpdate();
                }
                ///home
                else {
                    if (data.streamForYou != null) {
                        this.streamForYou = data.streamForYou.data;
                        this.$forceUpdate();
                    }
                }
                ///build tên những thể loại bài
                //if (data.box != null && data.box != undefined) {
                //    console.log('ok')
                //    this.arrBox = commonHelper.buildHref(data.box)
                //    this.getTitleCard(data.box)
                //}
            })

        },
        methods: {
            getTitleCard: function (newData) {
                let arr = []
                let cate = newData.filter(x => x.hasOwnProperty('subcategories'))
                for (var i = 0; i < cate.length; i++) {
                    for (var j = 0; j < cate[i].subcategories.length; j++) {
                        arr = [...arr, cate[i].subcategories[j]]
                    }
                }
                this.arrBox = [...this.arrBox, ...arr]
                for (var i = 0; i < this.streamForYou.length; i++) {
                    let data = this.arrBox.find(x => x.id == this.streamForYou[i].cate_id)
                    if (data != null && data != undefined) {
                        this.streamForYou[i].titleCard = data.name
                        this.streamForYou[i].href = data.href
                        this.streamForYou[i].idx = data.id
                    }
                }
            },
            loadMore: function (e) {
                e.preventDefault()
                this.stepLoad++;
                this.loadStatus = true
                this.page = this.page + 1;
                let config = commonHelper.checkJwt(this.$root.user);
                if (this.$root.buildMethod.idCategory != undefined && this.$root.buildMethod.activeIndex != undefined) {
                    let idCategory = this.$root.buildMethod.idCategory
                    let activeIndex = this.$root.buildMethod.activeIndex
                    let cate = 0;
                    activeIndex == 0 ? cate = idCategory : cate = activeIndex;
                    commonHelper.getKingToken(tk => {
                        import('axios').then(({ default: axios }) => {
                            axios(apiWeb.streamForYouCate(this.$root.buildMethod.domainApi, config[0], config[1], this.page, cate), commonHelper.getHeader(tk)).then(rs => {
                                this.streamForYou = commonHelper.unqId([...this.streamForYou, ...rs.data.data]);
                                this.getTitleCard(rs.data.data)
                                this.loadStatus = false
                            }).catch((e) => console.error(e));
                        })


                    }, this.$root.buildMethod.domain)
                }
                else {
                    commonHelper.getKingToken(tk => {
                        import('axios').then(({ default: axios }) => {
                            axios(apiWeb.streamForYou(this.$root.buildMethod.domainApi, config[0], config[1], this.page), commonHelper.getHeader(tk)).then(rs => {
                                this.streamForYou = commonHelper.unqId([...this.streamForYou, ...rs.data.data]);
                                this.getTitleCard(rs.data.data)
                                this.loadStatus = false
                            })
                        })


                    }, this.$root.buildMethod.domain)
                }
            },
            scrollToLoad: function (event) {
                let el = this.$refs['el']
                if (this.stepLoad < this.defaultStep) {
                    if (this.$refs['mock'] != undefined) {
                        this.elm = this.$refs['mock'].children[this.$refs['mock'].children.length - 3]
                        if (el.scrollTop === (el.scrollHeight - el.offsetHeight)) {
                            window.removeEventListener('scroll', this.scrollToLoad)
                            this.loadStatus = true
                            this.page = this.page + 1;
                            let config = commonHelper.checkJwt(this.$root.user);
                            ///check theo get streamapi home hay streamcategory
                            if (this.$root.buildMethod.idCategory != undefined && this.$root.buildMethod.activeIndex != undefined) {
                                let idCategory = this.$root.buildMethod.idCategory
                                let activeIndex = this.$root.buildMethod.activeIndex
                                let cate = 0;
                                activeIndex == 0 ? cate = idCategory : cate = activeIndex;
                                commonHelper.getKingToken(tk => {
                                    import('axios').then(({ default: axios }) => {
                                        axios(apiWeb.streamForYouCate(this.$root.buildMethod.domainApi, config[0], config[1], this.page, cate), commonHelper.getHeader(tk)).then(rs => {
                                            if (rs.data != "") {
                                                this.streamForYou = commonHelper.unqId([...this.streamForYou, ...rs.data.data]);

                                                this.getTitleCard(rs.data.data)

                                                this.loadStatus = false
                                                this.stepLoad++;
                                                window.addEventListener('scroll', this.scrollToLoad)
                                            }
                                            else {
                                                this.loadStatus = false
                                            }
                                        })
                                            .catch((e) => console.error(e));
                                    })

                                }, this.$root.buildMethod.domain)
                            }
                            else {
                                commonHelper.getKingToken(tk => {
                                    import('axios').then(({ default: axios }) => {
                                        axios(apiWeb.streamForYou(this.$root.buildMethod.domainApi, config[0], config[1], this.page), commonHelper.getHeader(tk)).then(rs => {
                                            if (rs.data != "") {
                                                this.streamForYou = commonHelper.unqId([...this.streamForYou, ...rs.data.data]);

                                                this.getTitleCard(rs.data.data)

                                                this.loadStatus = false
                                                this.stepLoad++;
                                                window.addEventListener('scroll', this.scrollToLoad)
                                            }
                                            else {
                                                this.loadStatus = false
                                            }
                                        })
                                            .catch((e) => console.error(e));
                                    })

                                }, this.$root.buildMethod.domain)
                            }

                        }

                    }
                }
                else if (this.stepLoad > this.defaultStep) {
                    this.defaultStep = this.defaultStep + 3
                }
            },
            openPopup: function (data, e) {
                e.preventDefault();
                let id = data;
                ///truyền status để mở popup (layout)
                (id != null || id != undefined || id != "") ? popupStatus.$emit("popupStatus", true, "content", "content", { id: id }) : "";
            },
        },
        computed: {
            getThis: function () {
                return this
            },
            lst1: function () {
                if (this.streamForYou != null) {
                    let data = [...this.streamForYou];
                    return data.splice(0, 4)
                }
            },
            lst2: function () {
                if (this.streamForYou != null) {
                    let data = [...this.streamForYou];
                    return data.splice(4, 4)
                }

            },
            lst3: function () {
                if (this.streamForYou != null) {
                    let data = [...this.streamForYou];
                    return data.splice(8, 4)
                }

            },
            lst4: function () {
                if (this.streamForYou != null) {
                    let data = [...this.streamForYou];
                    return data.splice(12, 4)
                }

            },
            lst5: function () {
                if (this.streamForYou != null) {
                    let data = [...this.streamForYou];
                    return data.splice(16, 4)
                }

            },
            lst6: function () {
                if (this.streamForYou != null) {
                    let data = [...this.streamForYou];
                    return data.splice(20)
                }

            },
            menu: function () {
                return this.$store.state.menu;
            }
        },
        watch: {
            ///theo dõi menu trong vuex, nếu có data thì build chủ để của bài viết vd:Thể thao, Đời sống ....
            menu() {
                if (this.menu != null && this.menu != undefined) {
                    this.arrBox = commonHelper.buildHref(this.menu)
                    this.getTitleCard(this.menu)
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToLoad)

        },
        updated() {
            this.$nextTick(() => {
                formatTrimLine();
            })

        }
    };
</script>

<style scoped>
    .af_home20-wrapper .list_afnews-mid li {
        margin-bottom: 25px;
        padding-bottom: 25px;
        border-bottom: 1px dashed #e5e5e5;
    }

    .afnews_box[type="tutorial"] {
        padding-bottom: 25px;
        border-bottom: 1px dashed #d6dce2;
        margin-bottom: 25px;
    }
</style>
