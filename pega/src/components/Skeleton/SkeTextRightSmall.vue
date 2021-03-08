<template>
    <div class="afnews_box af_flx" type="smallThumb">
        <a href="#" class="thumb">
            <i style="background: linear-gradient(to right, rgb(246, 246, 246) 8%, rgb(240, 240, 240) 18%, rgb(246, 246, 246) 33%);"></i>
        </a>
        <div class="afnews_total">
            <div class="sourse">
                <a href="" class="sourse-link"></a>
                <span class="time"></span>
            </div>
            <div class="sourse">
                <a href="" class="sourse-link"></a>
                <span class="time"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkeTextRightSmall",
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

    .animated-background, .sourse, .afnews_box .thumb i, .afnews_box .afnews_title, .af_bigright-right .spon-banner, .ct-box .wrapper-cell .image, .ct-box .wrapper-cell .text-line, .wrapper-cell .image, .wrapper-cell .text-line {
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

    .afnews_box .thumb i {
        width: 100%;
        padding-top: 62.4%;
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 8px;
    }

    .afnews_box[type='smallThumb'] .thumb {
        width: 80px;
        margin-right: 10px;
    }

    .label-news {
        font-size: 22px;
        line-height: 28px;
        color: #161616;
        font-family: SFPD-SemiBold;
        margin-bottom: 15px;
    }

    .afnews_box[type='bigThumb'] .thumb {
        margin-bottom: 10px;
        display: block;
    }

    .afnews_box .thumb i {
        border: none;
    }

    .afnews_total {
        flex-grow: 1;
        display: block;
        height: 10px;
        margin: 4px 0;
    }

    .sourse {
        font-size: 11px;
        line-height: 16px;
        margin-bottom: 0;
        margin-top: 5px;
    }

    .sourse-link {
        margin-right: 4px;
        color: #8E8E8E;
    }

    .sourse {
        font-size: 11px;
        line-height: 10px;
        margin-bottom: 0;
        margin-top: 5px;
    }
</style>
