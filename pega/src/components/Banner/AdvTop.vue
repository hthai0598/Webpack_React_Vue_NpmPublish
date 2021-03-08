<template>
    <div id="sponsorbox_TopPage">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "sponsorbox_TopPage",
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
                /////quảng cáo adv-top
                commonHelper.appendAds("kkc4rqde", document.getElementById("sponsorbox_TopPage"));
            })

        }
    };
</script>

<style scoped>
    #sponsorbox_TopPage {
        background: #EEF4F9;
        padding: 25px 0;
    }
</style>
