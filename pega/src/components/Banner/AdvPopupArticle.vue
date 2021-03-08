<template>
    <div id="adv_popup_Article">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv_popup_Article",
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
                //quảng cáo article popup
                commonHelper.appendAds("kkc9quv8", document.getElementById("adv_popup_Article"));
            })
            
        }
    };
</script>

<style scoped>
</style>
