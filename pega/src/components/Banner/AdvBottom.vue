<template>
    <div id="adv-bottom">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "",
        props: {
        },
        components: {},
        data() {
            return {};
        },
        mounted() {
            ///quảng cáo adv-bottom
            this.$nextTick(() => {
                commonHelper.appendAds("kkc8m9xw", document.getElementById("adv-bottom"))
            })
        },
      
    };
</script>

<style scoped>
</style>
