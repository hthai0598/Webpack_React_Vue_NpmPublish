<template>
    <div class="sourse" :style="{ fontSize: this.size + 'px',...this.styleSource }">
        <a :title="this.source" class="sourse-link">{{ source }}</a>
        <span class="time" :time="this.time"> · {{ this.newTime }}</span>
    </div>
</template>

<script>
    export default {
        name: "Source",
        props: {
            size: {
                default: 13,
            },
            time: {
                default: null,
            },
            source: {
                default: "Kenh14.vn",
            },
            styleSource: {}
        },
        components: {},
        data() {
            return {
                newTime: null
            };
        },
        mounted() {
            import(/* webpackChunkName: "moment" */'moment').then(({ default: moment }) => {
                moment.locale('vi');
                this.newTime = moment(this.time * 1000).startOf('hour').fromNow()
            })
        }
    };
</script>

<style scoped>
    .sourse {
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 16px;
        color: #8e8e8e;
        font-family: SFPD-Regular;
        margin-bottom: 10px;
    }

        .sourse .sourse-link {
            margin-right: 4px;
            color: #8e8e8e;
        }
</style>
