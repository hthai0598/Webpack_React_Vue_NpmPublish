<template>
    <div id="adv-stream2">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-stream2",
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
                ///quảng cáo adv-stream2
                commonHelper.appendAds("kkc86nc0", document.getElementById("adv-stream2"))
            })
            
        }
    };
</script>

<style scoped>
</style>
