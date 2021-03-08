<template>
    <Jumbotron v-if="this.bigEvent!= null" title="Sự kiện nổi bật" :line="false">
        <div class="event">
            <div class="event-wrapper">
                <div @click="this.openPopup" :data-id="this.bigEvent.data[0].main_article.id" :data-topic-id="this.bigEvent.data[0].topicId" :data-topic-name="this.bigEvent.data[0].topicName" class="event-detail">
                    <Thumb :titleEvent="this.bigEvent.data[0].topicName" :title="this.bigEvent.data[0].topicName" :img="this.bigEvent.data[0].main_article.image" />
                    <Info :related="this.bigEvent.data[0].size" :date="this.bigEvent.data[0].main_article.publishDate" :source="this.bigEvent.data[0].main_article.source" :title1="this.bigEvent.data[0].topicName" :title2="this.bigEvent.data[0].main_article.title" />
                </div>
                <div v-if="this.bigEvent.data.length > 1" @click="this.openPopup" :data-id="this.bigEvent.data[1].main_article.id" :data-topic-id="this.bigEvent.data[1].topicId" :data-topic-name="this.bigEvent.data[1].topicName" class="event-detail">
                    <Thumb :titleEvent="this.bigEvent.data[1].topicName" :title="this.bigEvent.data[1].topicName" :img="this.bigEvent.data[1].main_article.image" />
                    <Info :related="this.bigEvent.data[1].size" :date="this.bigEvent.data[1].main_article.publishDate" :source="this.bigEvent.data[1].main_article.source" :title1="this.bigEvent.data[1].topicName" :title2="this.bigEvent.data[1].main_article.title" />
                </div>
            </div>
        </div>
    </Jumbotron>
</template>

<script>
    import {
        popupStatus
    } from "@/configData/eventBus.js";

    import Jumbotron from "@/components/Jumbotron";
    import Thumb from "@/components/Thumb";
    import Info from "@/components/Info";

    export default {
        name: "Category1",
        components: { Jumbotron, Thumb, Info },
        props: {
            bigEvent: {
            },
        },
        data() {
            return {};
        },
        methods: {
            openPopup: function (e) {
                e.preventDefault()
                let topicId = e.target.closest('[data-topic-id]').getAttribute("data-topic-id")
                let topicName = e.target.closest('[data-topic-name]').getAttribute("data-topic-name")
                let obj = {
                    topicId: topicId,
                    topicName: topicName
                }

                if (topicId != undefined || topicId != null || topicId != "") {
                    popupStatus.$emit("popupStatus", true, 'bigevent', 'bigevent', obj); ///truyền status để mở popup dạng bigEvent (layout)
                    localStorage.setItem("topicName", topicName);
                }
            }
        },
        created() {
        },
        updated(){
        }
    };
</script>

<style scoped>
    .event .event-wrapper {
        display: flex;
        justify-content: space-between;
        cursor: pointer
    }

    .event-detail {
        width: 48.5%;
        display: flex;
        flex-direction: column;
    }

    .event .event-wrapper .event-detail .info .title-involve {
        font-size: 13px;
        line-height: 140%;
        text-transform: uppercase;
        color: #888888;
        font-family: SFPD-Regular;
        margin-bottom: 5px;
    }

    .event .event-wrapper .event-detail .info .title-event {
        font-size: 17px;
        line-height: 140%;
        color: #111111;
        font-family: SFPD-SemiBold;
        margin-bottom: 5px;
    }
</style>
