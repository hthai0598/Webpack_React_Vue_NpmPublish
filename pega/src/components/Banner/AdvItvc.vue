<template>
    <div id="spon-bannerItvc">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "AdvItvc",
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
                /////quảng cáo Itvc
                commonHelper.appendAds("kkc8auuw", document.getElementById("spon-bannerItvc"));
            })
           
        }
    };
</script>

<style scoped>
</style>
