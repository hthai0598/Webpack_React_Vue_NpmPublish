<template>
    <div class="wrapper-cell af_flx" type="midThumb">
        <div class="image"></div>
        <div class="text">
            <div class="text-line"></div>
            <div class="text-line"></div>
            <div class="text-line"></div>
            <div class="text-line"></div>
            <div class="text-line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkeTextRight",
        components: {},
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .wrapper-cell.af_flx {
        display: flex;
    }

    .wrapper-cell .image {
        height: 160px;
        width: 260px;
        margin-bottom: 8px;
    }

    .wrapper-cell.af_flx .image {
        margin-right: 20px;
        margin-bottom: 0;
    }

    .wrapper-cell.af_flx .image {
        flex-shrink: 0;
    }

    .wrapper-cell.af_flx .text {
        flex-grow: 1;
        display: block;
    }

    .wrapper-cell .text-line {
        height: 10px;
        margin: 4px 0;
    }

    .wrapper-cell .image,
    .af_home20-wrapper .wrapper-cell .text-line {
        animation-duration: 1.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f6f6;
        background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
        background-size: cover;
        position: relative;
    }


    .wrapper-cell.af_flx[type='midThumb'] {
        display: flex;
    }

    .image {
        margin-right: 20px;
        margin-bottom: 0;
    }

    .wrapper-cell.af_flx .image {
        flex-shrink: 0;
    }

    .wrapper-cell[type='midThumb'] .image {
        height: 160px;
        width: 260px;
        margin-bottom: 8px;
    }

    .wrapper-cell .text-line {
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

    .wrapper-cell.af_flx .text {
        flex-grow: 1;
        display: block;
    }

    .wrapper-cell .text-line {
        height: 10px;
        margin: 4px 0;
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0;
        }

        100% {
            background-position: 468px 0;
        }
    }
</style>
