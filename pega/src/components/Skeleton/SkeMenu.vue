<template>
    <div class="text-loading">
        <a title="loading" class="thumb">
            <i style=" background: #F6F6F6; background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);"></i>
        </a>
    </div>
</template>

<script>
    export default {
        name: "SkeMenu",
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

    .text-loading {
        width: 100%;
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

        .text-loading .thumb {
            margin-bottom: 10px;
            display: block;
        }

            .text-loading .thumb i {
                border: none;
            }

    a.thumb {
        height: 15px
    }
</style>
