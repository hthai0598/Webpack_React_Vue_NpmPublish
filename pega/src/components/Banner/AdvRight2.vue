<template>
    <div id="adv-right2">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-right2",
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
                ///quảng cáo adv-right2
                commonHelper.appendAds("kkc8c5s5", document.getElementById("adv-right2"))
            })
          
        }
    };
</script>

<style scoped>
</style>
