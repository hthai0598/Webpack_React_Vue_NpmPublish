<template>
    <div v-if="this.firstNews != null" class="af_bigleft">
        <div v-if="this.firstNews != undefined">
            <CardTextBottom :openPopup="(e)=>this.openPopup(this.firstNews.data[0].id,e)"
                            :sizeTitle="22"
                            :data="this.firstNews.data[0]"
                            :line="this.$root.category? false : true"
                            type="bigThumb"
                            positionSource="top">
                <LabelNewH2 :title="this.title" />
            </CardTextBottom>
            <ul v-if="!this.$root.category" class="list_afnews-top af_flx justifySB">
                <li>
                    <CardTextBottom :openPopup="(e)=>getThis.openPopup(this.firstNews.data[1].id,e)"
                                    :line="false"
                                    type="midThumb"
                                    :sizeTitle="17"
                                    positionSource="top"
                                    :data="this.firstNews.data[1]" />
                </li>
                <li>
                    <CardTextBottom :openPopup="(e)=>getThis.openPopup(this.firstNews.data[2].id,e)"
                                    :line="false"
                                    type="midThumb"
                                    :sizeTitle="17"
                                    positionSource="top"
                                    :data="this.firstNews.data[2]" />
                </li>

            </ul>
        </div>
    </div>
    <div v-else class="af_bigleft">
        <SkeTextBottomBig />
        <ul class="list_afnews-top af_flx justifySB">
            <li>
                <SkeTextBottomMid />
            </li>
            <li>
                <SkeTextBottomMid />
            </li>
        </ul>
    </div>
</template>

<script>
    import { popupStatus, dataTop } from "@/configData/eventBus.js";

    import CardTextBottom from "@/components/Card/CardTextBottom";
    import CardTextRight from "@/components/Card/CardTextRight";
    import LabelNewH2 from "@/components/Text/LabelNewH2";
    import SkeTextBottomBig from "@/components/Skeleton/SkeTextBottomBig";
    import SkeTextBottomMid from "@/components/Skeleton/SkeTextBottomMid";
    export default {
        name: "BigLeft",
        computed: {
            getThis: function () {
                return this;
            },
            title: function () {
                if (this.$root.category) {
                    return ""
                }
                else {
                    return 'Tin nóng'
                }
            }
        },
        components: {
            CardTextBottom, CardTextRight, LabelNewH2,
            SkeTextBottomBig, SkeTextBottomMid

        },
        props: {
            firstNews: {},
        },
        created() {
        },
        methods: {
            openPopup: function (data, e) {
                e.preventDefault();
                let id = data;
                ///truyền status để mở popup (layout)
                (id != null || id != undefined || id != "") ? popupStatus.$emit("popupStatus", true, "content", "content", { id: id }) : "";
            },
        },
    };
</script>

<style scoped>
    .af_home20-wrapper .af_bigleft {
        width: 540px;
        max-width: 100%;
    }

    .list_afnews-top li {
        width: 260px
    }

    .af_home20-wrapper .af_flx {
        display: flex;
        align-items: flex-start;
    }
</style>
