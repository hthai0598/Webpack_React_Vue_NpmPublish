<template>
    <Jumbotron v-if="this.data != null" :hrefData="this.data.href" :title="this.data.name" :line="true">
        <div class="af_flx justifySB">
            <div v-for="(item,index) in this.getData" :key="index" class="af_midright-left">
                <CardTextBottom :openPopup="(e)=>getThis.openPopup(item.id,e)"
                                :data="item"
                                :showPreview="true"
                                :showSource="false"
                                :sizeTitle="17"
                                :styleThumb="{ width: '100%' }"
                                :radius="false" />
            </div>
        </div>
    </Jumbotron>
</template>

<script>
    import { popupStatus } from '@/configData/eventBus.js';

    import Jumbotron from "@/components/Jumbotron";
    import CardTextBottom from "@/components/Card/CardTextBottom";
    export default {
        name: "Category3",
        props: {
            data: {
                default: null
            },
            title: {}

        },
        components: { Jumbotron, CardTextBottom },
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
                    return this.data.data.splice(0, 2)
                }
            }, getThis: function () {
                return this;
            }
        }
    };
</script>

<style scoped></style>
