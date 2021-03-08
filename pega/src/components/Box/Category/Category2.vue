<template>
    <Jumbotron :hrefData="this.data.href" :title="this.data.name" :line="true">
        <div class="af_flx justifySB">
            <div class="af_midright-left">
                <CardTextBottom :openPopup="(e)=>getThis.openPopup(this.data.data[0].id,e)"
                                :data="this.data.data[0]"
                                type="midThumb"
                                :sizeText="17"
                                :line="false"
                                :showPreview="true"
                                :showSource="false"
                                :radius="false" />
            </div>
            <div class="af_midright-right">
                <ul class="list_afnews-midright">
                    <li v-for="(item,index) in this.getData">
                        <CardTextLeft :data="item" :showSource="false" type="smallThumb" :sizeTitle="13" :openPopup="(e)=>getThis.openPopup(item.id,e)"/>
                    </li>
                </ul>
            </div>
        </div>
    </Jumbotron>
</template>

<script>
    import { popupStatus } from '@/configData/eventBus.js';

    import Jumbotron from "@/components/Jumbotron";
    import CardTextBottom from "@/components/Card/CardTextBottom";
    import CardTextLeft from "@/components/Card/CardTextLeft";
    export default {
        name: "Category2",
        props: {
            data: {
                default: null
            },
            title: {}
        },
        components: { CardTextBottom, CardTextLeft, Jumbotron },
        data() {
            return {};
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
            getData: function () {
                if (this.data != null && this.data.data.length > 0) {
                   
                    return this.data.data.splice(1, 4)
                }
            },
            getThis: function () {
                return this;
            }
        }
    };
</script>

<style scoped>
    .af_midright-right,
    .af_midright-left {
        width: 270px;
    }

    .list_afnews-midright li + li {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px dashed #D6DCE2;
    }
</style>
