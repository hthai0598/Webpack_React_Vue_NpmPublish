<template>
    <div @click="this.openPopup" :data-id="this.topicData.main_article.id" :data-toppic-id="this.topicData.topicId" ::data-toppic-name="this.topicData.topicName" class="topic-detail">
        <div  class="detail-info">
            <TitleInvolve :title="this.topicData.topicName" />
            <TitleEvent :title="this.topicData.main_article.title" />
            <div class="topic-involve">
                <Source :time="this.topicData.main_article.publishDate" :source="this.topicData.main_article.source" />
                <div v-if="this.related > 0" class="topic-involve-txt">
                    <span class="txt">{{this.related}} tin liên quan</span>
                </div>
            </div>
        </div>
        <a class="action-link">
            <span class="icn">
                <svg width="11"
                     height="16"
                     viewBox="0 0 11 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.866117 0.334735C1.35427 -0.111578 2.14573 -0.111578 2.63388 0.334735L10.1339 7.19188C10.622 7.63819 10.622 8.36181 10.1339 8.80812L2.63388 15.6653C2.14573 16.1116 1.35427 16.1116 0.866117 15.6653C0.377961 15.219 0.377961 14.4953 0.866117 14.049L7.48223 8L0.866117 1.95098C0.377961 1.50467 0.377961 0.781049 0.866117 0.334735Z"
                          fill="white"></path>
                    <path fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.866117 0.334735C1.35427 -0.111578 2.14573 -0.111578 2.63388 0.334735L10.1339 7.19188C10.622 7.63819 10.622 8.36181 10.1339 8.80812L2.63388 15.6653C2.14573 16.1116 1.35427 16.1116 0.866117 15.6653C0.377961 15.219 0.377961 14.4953 0.866117 14.049L7.48223 8L0.866117 1.95098C0.377961 1.50467 0.377961 0.781049 0.866117 0.334735Z"
                          fill="#1F9FFC"></path>
                </svg>
            </span>
        </a>
    </div>
</template>

<script>
    import Source from "@/components/Text/Source";
    import TitleInvolve from "@/components/Text/TitleInvolve";
    import TitleEvent from "@/components/Text/TitleEvent";
    export default {
        name: "Topic",
        props: {
            topicData: {},
            openPopup: {
                type: Function,
                default: () => { }
            },
            related: {
                default:0
            }
        },
        components: { Source, TitleInvolve, TitleEvent },
        data() {
            return {};
        },

    };
</script>

<style scoped>
    .topic .topic-wrapper .topic-detail .detail-info {
        width: 93%;
        display: flex;
        flex-direction: column;
        padding: 15px;
        box-sizing: border-box;
    }

    .topic .topic-wrapper .topic-detail {
        display: flex;
        border-radius: 6px;
        background: #ffffff;
        margin-bottom: 15px;
    }

        .topic
        .topic-wrapper
        .topic-detail
        .detail-info
        .topic-involve
        .topic-involve-txt {
            font-size: 13px;
            line-height: 16px;
            color: #8e8e8e;
            font-family: SFPD-Regular;
        }

        .topic .topic-wrapper .topic-detail .detail-info .topic-involve {
            display: flex;
            justify-content: space-between;
        }

        .topic .topic-wrapper .topic-detail .action-link {
            width: 7%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.05);
        }
</style>
