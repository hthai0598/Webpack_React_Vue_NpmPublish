<template>
    <div class="info">
        <TitleInvolve :title="this.title1" />
        <TitleEvent :title="this.title2" />
        <Source :size="13" :time="this.date" :source="this.source" />
        <a :title-event="this.title2" :title="this.title1" v-if="this.related > 0 " class="event-involve">
            <span class="txt">{{ related }} Tin liên quan</span>
            <span class="icn">
                <svg width="7"
                     height="10"
                     viewBox="0 0 7 10"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.71967 0.209209C1.01256 -0.0697365 1.48744 -0.0697365 1.78033 0.209209L6.28033 4.49492C6.57322 4.77387 6.57322 5.22613 6.28033 5.50508L1.78033 9.79079C1.48744 10.0697 1.01256 10.0697 0.71967 9.79079C0.426777 9.51184 0.426777 9.05958 0.71967 8.78064L4.68934 5L0.71967 1.21936C0.426777 0.940416 0.426777 0.488155 0.71967 0.209209Z"
                          fill="white"></path>
                    <path fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.71967 0.209209C1.01256 -0.0697365 1.48744 -0.0697365 1.78033 0.209209L6.28033 4.49492C6.57322 4.77387 6.57322 5.22613 6.28033 5.50508L1.78033 9.79079C1.48744 10.0697 1.01256 10.0697 0.71967 9.79079C0.426777 9.51184 0.426777 9.05958 0.71967 8.78064L4.68934 5L0.71967 1.21936C0.426777 0.940416 0.426777 0.488155 0.71967 0.209209Z"
                          fill="#1F9FFC"></path>
                </svg>
            </span>
        </a>
    </div>
</template>

<script>
    import TitleInvolve from "@/components/Text/TitleInvolve";
    import TitleEvent from "@/components/Text/TitleEvent";
    import Source from "@/components/Text/Source";
    export default {
        name: "Info",
        props: {
            title1: {
                default: "Tiêu đề 1",
            },
            title2: {
                default: "Tiêu đề 2",
            },
            related: {
                default: 0,
            },
            date: {
                default: "1 giờ trước",
            },
            source: {
                default: "chưa xác định"
            }
        },
        components: { Source, TitleInvolve, TitleEvent },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .info {
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        flex-grow: 1;
    }

        .info .event-involve {
            padding-top: 15px;
            border-top: 1px solid #f1f1f1;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

            .info .event-involve .txt {
                font-size: 13px;
                line-height: 16px;
                color: #1f9ffc;
                font-family: SFPD-SemiBold;
            }
</style>
