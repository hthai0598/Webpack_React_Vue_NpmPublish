<template>
    <div id="adv-right3">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-right3",
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
                ///quảng cáo adv-right3
                commonHelper.appendAds("kkc8efyy", document.getElementById("adv-right3"))
            })
            
        }
    };
</script>

<style scoped>
</style>
