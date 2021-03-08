<template>
    <Jumbotron v-if="this.data != null" :hrefData="this.data.href" :title="this.data.name" :line="true">
        <CardTextLeft :openPopup="(e)=>getThis.openPopup(this.data[0].id,e)"
                      :data="this.data.data[0]"
                      :showSource="false"
                      :showPreview="true"
                      type="midThumb" />
        <ul class="list_afnews-nothumb">
            <li v-for="(item,index) in this.getData" :key="index">
                <div class="afnews_box" :data-id="item.id">
                    <TitleCard :size="15"
                               :title="item.title" />
                </div>
            </li>
        </ul>
    </Jumbotron>
</template>

<script>
    import { popupStatus } from '@/configData/eventBus.js';

    import Jumbotron from "@/components/Jumbotron";
    import CardTextLeft from "@/components/Card/CardTextLeft";
    import TitleCard from "@/components/Text/TitleCard";
    export default {
        name: "Category5",
        props: {
            data: {
                default: null
            },
            title: {}
        },
        components: { TitleCard, Jumbotron, CardTextLeft },
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
                if (this.data != null) {
                    return this.data.data.splice(1, 3)
                }
            },
            getThis: function () {
                return this;
            }
        }
    };
</script>

<style scoped>
    .list_afnews-nothumb li {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px dashed #e5e5e5;
    }
</style>
