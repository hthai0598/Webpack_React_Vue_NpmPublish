<template>
    <div class="spon-banner">
        <a href="#" class="thumb">
            <i style=" background: #F6F6F6; background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);"></i>
        </a>
    </div>
</template>

<script>
    export default {
        name: "SkeBanner",
        components: {},
        data() {
            return {};
        },
    };
</script>

<style scoped>
    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0
        }

        100% {
            background-position: 468px 0
        }
    }

    .af_bigright-right .spon-banner {
        animation-duration: 1.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #F6F6F6;
        background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
        background-size: cover;
        position: relative;
    }


    .spon-banner {
        padding-bottom: 25px;
        border-bottom: 1px dashed #E5E5E5;
        margin-bottom: 25px;
    }

    .spon-banner .thumb {
        margin-bottom: 10px;
        display: block;
    }

        .spon-banner .thumb i {
            border: none;
        }

    a.thumb {
        height: 800px
    }
</style>
