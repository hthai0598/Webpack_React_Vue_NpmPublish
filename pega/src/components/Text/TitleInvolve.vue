<template>
    <a :title="this.title" class="title-involve">{{ title }}</a>
</template>

<script>
    export default {
        name: "TitleEvent",
        props: {
            title: {
                default: "Title",
            },
        },
        components: {},
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .title-involve {
        font-size: 13px;
        line-height: 140%;
        text-transform: uppercase;
        color: #888888;
        font-family: SFPD-Regular;
        margin-bottom: 5px;
        cursor: pointer
    }
</style>
