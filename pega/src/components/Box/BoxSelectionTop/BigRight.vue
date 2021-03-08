<template>
    <div v-if="this.topNews != null" class="af_bigright">
        <div class="af_flx justifySB">
            <div v-if="this.topNews!=undefined" class="af_bigright-left">
                <CardTextBottom :openPopup="(e)=>this.openPopup(this.topNews.data[0].id,e)"
                                :line="true"
                                type="midThumb"
                                :sizeTitle="17"
                                positionSource="top"
                                :data="this.topNews.data[0]">
                    <LabelNewH2 :title="this.title" />
                </CardTextBottom>
                <ul class="list_afnews-topright">
                    <li v-for="(item,index) in this.listRender" :key="index">
                        <CardTextRight :openPopup="(e)=>getThis.openPopup(item.id,e)"
                                       :line="(index !== 4  && index != 1 ) ? true: false"
                                       type="smallThumb"
                                       sizeTitle="13"
                                       :data="item" />
                    </li>
                </ul>

            </div>
            <AdvRight1 />
        </div>
    </div>
    <div v-else class="af_bigright">
        <LabelNewH2 :title="this.title" />
        <div class="af_flx justifySB">
            <div class="af_bigright-left">
                <SkeTextBottomMid />
                <ul class="list_afnews-topright">
                    <li>
                        <SkeTextRightSmall />
                    </li>
                    <li>
                        <SkeTextRightSmall />
                    </li>
                    <li>
                        <SkeTextRightSmall />
                    </li>
                    <li>
                        <SkeTextRightSmall />
                    </li>
                </ul>
            </div>
            <AdvRight1 />
        </div>
    </div>
</template>

<script>
    import { popupStatus, dataTop } from "@/configData/eventBus.js";

    import CardTextBottom from "@/components/Card/CardTextBottom";
    import CardTextRight from "@/components/Card/CardTextRight";
    import LabelNewH2 from "@/components/Text/LabelNewH2";
    import SkeTextBottomMid from "@/components/Skeleton/SkeTextBottomMid";
    import SkeTextRightSmall from "@/components/Skeleton/SkeTextRightSmall";
    import SkeBanner from "@/components/Skeleton/SkeBanner";
    import AdvRight1 from "@/components/Banner/AdvRight1";

    export default {
        name: "BigRight",
        components: {
            CardTextBottom, CardTextRight, LabelNewH2,
            SkeTextBottomMid,
            SkeTextRightSmall,
            SkeBanner,
            AdvRight1
        },
        props: {
            topNews: {},
        },
        computed: {
            listRender: function () {
                if (this.topNews != null && !this.$root.category) {
                    return this.topNews.data.splice(1, 5);
                }
                else if (this.topNews != null && this.$root.category) {
                    return this.topNews.data.splice(1, 2);
                }
            },
            getThis: function () {
                return this;
            },
            title: function () {
                if (this.$root.category) {
                    return ""
                }
                else {
                    return 'Top news'
                }
            }
        },
        methods: {
            openPopup: function (data, e) {
                e.preventDefault();
                let id = data;
                ///truyền status để mở popup (layout)
                (id != null || id != undefined || id != "") ? popupStatus.$emit("popupStatus", true, "content", "content", { id: id }) : "";
            },
        },
        created() {
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

    .list_afnews-topright li {
        padding-top: 18px;
    }
</style>
