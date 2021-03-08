<template>
    <div id="adv-stream5">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-stream5",
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
                ///quảng cáo adv-stream5
                commonHelper.appendAds("kkc8joo3", document.getElementById("adv-stream5"))
            })

        }
    };
</script>

<style scoped>
</style>
