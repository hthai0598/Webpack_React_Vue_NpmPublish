<template>
    <div class="af_section-top">
        <div class="af_flx justifySB">
            <BigLeft :firstNews="this.firstNews" />
            <BigRight :topNews="this.topNews" />
        </div>
        <div id="adm_sticky_footer"></div>
    </div>
</template>

<script>
    import BigLeft from "@/components/Box/BoxSelectionTop/BigLeft";
    import BigRight from "@/components/Box/BoxSelectionTop/BigRight";
    export default {
        name: "BoxSelectionTop",
        components: {
            BigLeft, BigRight
            //BigLeft: () => import(/* webpackChunkName: "BigLeft" */ "@/components/Box/BoxSelectionTop/BigLeft"),
            //BigRight: () => import(/* webpackChunkName: "BigRight" */ "@/components/Box/BoxSelectionTop/BigRight"),
        },
        props: {
            firstNews: {
                default: null,
            },
            topNews: {
                default: null,
            },
        },

    };
</script>

<style scoped>
    .af_section-top {
        margin-bottom: 25px;
        padding-bottom: 30px;
        border-bottom: 1px solid #d6dce2;
    }
</style>
