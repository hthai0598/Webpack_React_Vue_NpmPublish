<template>
    <header>
        <Toolbar />
        <Menu />
        <AdvTop />
    </header>
</template>

<script>
    import Toolbar from "@/components/Toolbar";
    import Menu from "@/components/Menu";
    import AdvTop from "@/components/Banner/AdvTop";
    export default {
        name: "Header",
        components: {
            Toolbar, AdvTop, Menu
            //Toolbar: () => import(/* webpackChunkName: "Toolbar" */ "@/components/Toolbar"),
            //Menu: () => import(/* webpackChunkName: "Menu" */ "@/components/Menu"),
            //AdvTop: () => import(/* webpackChunkName: "AdvTop" */ "@/components/Banner/AdvTop"),
        },
        data() {
            return {};
        },
    };
</script>

<style scoped></style>
