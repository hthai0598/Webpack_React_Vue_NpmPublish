<template>
    <Jumbotron v-if="this.data != null" :hrefData="this.data.href" :title="this.data.name" :line="true">
        <CardTextLeft :openPopup="(e)=>getThis.openPopup(item.id,e)"
                      v-for="(item,index) in this.getData" :key="index" type="midThumb"
                      :data="item"
                      :line="true"
                      :showSource="false"
                      :showPreview="true" />
    </Jumbotron>
</template>

<script>
    import { popupStatus } from '@/configData/eventBus.js';

    import Jumbotron from "@/components/Jumbotron";
    import CardTextLeft from "@/components/Card/CardTextLeft";
    export default {
        name: "Category4",
        components: { Jumbotron, CardTextLeft },
        data() {
            return {};
        },
        props: {
            data: {
                default: null
            },
            title: {}
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
                if (this.data != null) {
                    return this.data.data.splice(0, 2)
                }
            },
            getThis: function () {
                return this;
            }
        }
    };
</script>

<style scoped>
    .afnews_box[kind="row_reverse"] + [kind="row_reverse"] {
        margin-top: 25px;
        padding-top: 25px;
        border-top: 1px dashed #d6dce2;
    }
</style>
