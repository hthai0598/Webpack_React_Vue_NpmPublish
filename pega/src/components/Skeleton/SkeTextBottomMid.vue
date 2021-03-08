<template>
    <div class="afnews_box" type="midThumb">
        <a href="#" class="thumb">
            <i style=" background: #F6F6F6; background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);"></i>
        </a>
        <div class="sourse">
            <a href="" class="sourse-link"></a>
            <span class="time"></span>
        </div>
        <div class="sourse">
            <a href="" class="sourse-link"></a>
            <span class="time"></span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SkeTextBottomMid",
        components: {},
        data() {
            return {};
        }
    };</script>

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

    .sourse {
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 16px;
        color: #8E8E8E;
        font-family: SFPD-Regular;
        margin-bottom: 10px;
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

    .afnews_box[type='midThumb'] .thumb {
        width: 260px;
        margin-bottom: 8px;
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

    .sourse {
        height: 10px;
        margin: 4px 0;
    }

        .sourse .sourse-link {
            margin-right: 4px;
            color: #8E8E8E;
        }

    .afnews_box .afnews_title {
        height: 10px;
        margin: 4px 0;
    }
</style>
