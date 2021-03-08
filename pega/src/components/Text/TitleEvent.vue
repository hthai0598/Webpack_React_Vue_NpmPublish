<template>
    <a :title="this.title" class="title-event">{{title}}</a>
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
    .title-event {
        font-size: 17px;
        line-height: 140%;
        color: #111111;
        font-family: SFPD-SemiBold;
        margin-bottom: 5px;
        cursor: pointer
    }
</style>
