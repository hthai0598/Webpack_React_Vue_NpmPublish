<template>
    <div id="adv-stream4">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-stream4",
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
                ///quảng cáo adv-stream4
                commonHelper.appendAds("kkc8ixar", document.getElementById("adv-stream4"))
            })
           
        }
    };
</script>

<style scoped>
</style>
