<template>
    <div class="af_flx justifySB">
        <BigLeft />
        <BigRight />
    </div>
</template>

<script>
    import BigLeft from "@/components/Box/BoxSelectionMid/BigLeft";
    import BigRight from "@/components/Box/BoxSelectionMid/BigRight";
    export default {
        name: "BoxSelectionMid",
        components: {
            BigRight, BigLeft
            //BigLeft: () => import(/* webpackChunkName: "BigLeft" */ "@/components/Box/BoxSelectionMid/BigLeft"),
            //BigRight: () => import(/* webpackChunkName: "BigRight" */ "@/components/Box/BoxSelectionMid/BigRight"),
        },
        props: {
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
</style>
