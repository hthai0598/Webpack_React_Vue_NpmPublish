<template>
    <div id="adv-right1" :style="[this.$root.category ? {marginTop:'15px'} : {marginTop:'43px'}]">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-right1",
        props: {
            mg: {
                default: false,
            },
        },
        components: {},
        data() {
            return {};
        },
        mounted() {
            this.$nextTick(() => {
                ///quảng cáo adv-right1
                commonHelper.appendAds("kkc4u154", document.getElementById("adv-right1"));
            })

        }
    };
</script>

<style scoped>
</style>
