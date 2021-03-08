<template>
    <p class="afnews_sapo" data-trimline="3">
        {{ preview }}
    </p>
</template>

<script>
    export default {
        name: "Preview",
        props: {
            preview: {
                default: "",
            },
        },
        components: {},
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .afnews_sapo {
        margin-top: 5px;
        font-size: 13px;
        line-height: 150%;
        font-family: SFPD-Regular;
        letter-spacing: 0.2px;
        display: block;
        color: #888888;
        margin-bottom: 5px;
    }

    .line-clam3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
