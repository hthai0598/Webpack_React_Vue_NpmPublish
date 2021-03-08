<template>
    <Jumbotron v-if="this.topic != null" :line="false" title="Chủ đề nổi bật">
        <div class="topic">
            <div class="topic-wrapper">
                <Topic v-for="(item,index) in this.topic" :key="index" :openPopup="(e)=>getThis.openPopup(item,e)" :topicData="item" :related="item.size" />
                <div v-if="this.size > 0" class="show-more" @click="this.loadMore">
                    <a>
                        <span class="txt">Xem thêm</span>
                        <span class="count">3</span>
                    </a>
                </div>
            </div>
        </div>
    </Jumbotron>
</template>

<script>
    import axios from 'axios';
    import { apiWeb } from '@/utils/common.js';
    import { commonHelper } from '@/utils/helper.js';
    import {
        popupStatus
    } from "@/configData/eventBus.js";
    import Jumbotron from "@/components/Jumbotron";
    import Topic from "@/components/Topic";
    export default {
        name: "Category6",
        components: { Jumbotron, Topic },
        props: {
            hotTopic: {
            },
        },
        data() {
            return {
                topic: [],
                size: 3,
                page: 0
            }
        },
        computed: {
            getThis: function () {
                return this
            }
        },
        watch: {
            hotTopic: function () {
                if (this.hotTopic != null) {
                    this.topic = this.hotTopic.data;
                }
            }
        },
        methods: {
            openPopup: function (data, e) {
                e.preventDefault()
                let topicId = data.topicId
                let topicName = data.topicName
                let obj = {
                    topicId: topicId,
                    topicName: topicName
                }
                if (topicId != undefined || topicId != null || topicId != "") {
                    popupStatus.$emit("popupStatus", true, 'hottopic', 'hottopic', obj); ///truyền status để mở popup dạng bigEvent (layout)
                    localStorage.setItem("topicName", topicName);
                }
            },
            loadMore: function () {
                let config = commonHelper.checkJwt(this.$root.user);
                this.page = this.page + 1;
                commonHelper.getKingToken(tk => {
                    axios(apiWeb.hotTopic(this.$root.buildMethod.domainApi, config[0], config[1], this.page), commonHelper.getHeader(tk)).then(rs => {
                        if (rs.data != "") {
                            this.topic = [...this.topic, ...rs.data.data]
                        }
                        else {
                            this.size = 0
                        }
                    })

                }, this.$root.buildMethod.domain)
            }
        },
        created() {
            if (this.hotTopic != null) {
                this.topic = this.hotTopic.data;
            }
        }
    };

</script>

<style scoped>
    .topic .topic-wrapper .show-more {
        background: #ffffff;
    }

    .show-more a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        font-family: SFPD-SemiBold;
    }

        .show-more a .count {
            margin-left: 8px;
            padding: 2px 8px;
            background: #e5e5e5;
            border-radius: 6px;
        }

    .topic {
        cursor: pointer
    }
</style>
