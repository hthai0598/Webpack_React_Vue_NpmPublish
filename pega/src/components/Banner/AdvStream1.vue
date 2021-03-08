<template>
    <div id="adv-stream1">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv-stream1",
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
                ///quảng cáo adv-stream1
                commonHelper.appendAds("kkc858pl", document.getElementById("adv-stream1"))
            })
            
        }
    };
</script>

<style scoped>
</style>
