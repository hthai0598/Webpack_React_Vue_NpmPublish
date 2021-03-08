<template>
    <div id="adv_popupRight3">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv_popupRight3",
        props: {
        },
        components: {},
        data() {
            return {};
        },
        mounted() {
            this.$nextTick(() => {
                //quảng cáo right3 popup
                commonHelper.appendAds("kkm9rbhq", document.getElementById("adv_popupRight3"));
            })
            
        }
    };
</script>

<style scoped>
</style>
