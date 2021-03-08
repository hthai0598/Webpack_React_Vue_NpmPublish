<template>
    <div>
        <Jumbotron v-for="(item,index) in this.boxNormal" :key="index" :title="item.name" :hrefData="item.href">
            <CardTextBottom :openPopup="(e)=>getThis.openPopup(item.data.data[0].id,e)"
                            type="midThumb"
                            :data="item.data.data[0]"
                            :showPreview="true"
                            :styleThumb="{ width: '100%' }"
                            :radius="false"
                            :showSource="false" />
            <ul class="list_afnews-smallThumb">
                <li v-for="(item,index) in item.data.data" :key="index" v-if="index > 0 && index < 4">
                    <CardTextLeft  :openPopup="(e)=>getThis.openPopup(item.id,e)"
                                  :data="item"
                                  :styleThumbChild="{ paddingTop: '100%' }"
                                  :radius="false"
                                  :sizeTitle="13"
                                  :showPreview="false"
                                  :showSource="false"
                                  type="smallThumb" />
                </li>
            </ul>
        </Jumbotron>
    </div>
</template>

<script>
    import { popupStatus } from '@/configData/eventBus.js';

    import Jumbotron from "@/components/Jumbotron";
    import CardTextBottom from "@/components/Card/CardTextBottom";
    import CardTextLeft from "@/components/Card/CardTextLeft";
    export default {
        name: "Category7",
        components: { Jumbotron, CardTextLeft, CardTextBottom },
        props: {
            boxNormal: {
            },
        },
        data() {
            return {
                box: null,
            };
        },
        methods: {
            openPopup: function (data, e) {
                e.preventDefault();
                let id = data;
                ///truyền status để mở popup (layout)
                (id != null || id != undefined || id != "") ? popupStatus.$emit("popupStatus", true, "content", "content", { id: id }) : "";
            },
        },
        computed: {
            getThis: function () {
                return this;
            }
        },
        mounted() {
            this.$nextTick(() => {
                formatTrimLine();
            })
        },

    };
</script>

<style scoped>
    .list_afnews-smallThumb {
        margin-top: 10px;
    }

    .af_home20-wrapper .list_afnews-smallThumb li {
        padding-top: 10px;
        border-top: 1px dashed #e5e5e5;
        margin-top: 10px;
    }
</style>
