<template>
    <div id="adv-stream3">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-stream3",
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
                ///quảng cáo adv-stream3
                commonHelper.appendAds("kkc8fnlq", document.getElementById("adv-stream3"))
            })
          
        }
    };
</script>

<style scoped>
</style>
