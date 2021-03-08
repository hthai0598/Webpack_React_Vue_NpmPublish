<template>
    <div class="afnews-type" :type="this.type">
        <a v-if="type === 'eMag-tag'" :class="this.type">
            <img src="" alt="" />
        </a>
        <a :data-id="this.id" :href="this.linkTitleCard" :title="this.titleCard">{{ titleCard }}</a>
    </div>
</template>

<script>
    export default {
        name: "Type",
        props: {
            titleCard: {
                default: "Tiêu đề",
            },
            type: {
            },
            id: {},
            linkTitleCard: {}
        },
        components: {},
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .afnews-type {
        font-size: 13px;
        line-height: 16px;
        font-family: SFPD-SemiBold;
        text-transform: uppercase;
        color: #aaaaaa;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        cursor: pointer
    }

        .afnews-type a {
            color: #aaaaaa;
        }

        .afnews-type[type="eMag-tag"] .eMag-tag {
            padding: 4px 8px;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 4px;
            width: 86px;
            height: 20px;
            box-sizing: border-box;
            margin-right: 8px;
            display: block;
        }
</style>
