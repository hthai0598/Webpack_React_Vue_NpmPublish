<template>
    <div id="adv_popupTop">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv_popupTop",
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
                //quảng cáo top popup
                commonHelper.appendAds("kkm9g5c3", document.getElementById("adv_popupTop"));
            })
           
        }
    };
</script>

<style scoped>
</style>
