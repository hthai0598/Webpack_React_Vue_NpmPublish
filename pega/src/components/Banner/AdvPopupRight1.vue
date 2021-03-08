<template>
    <div id="adv_popupRight1">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv_popupRight1",
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
                //quảng cáo right1 popup
                commonHelper.appendAds("kkm9iq7c", document.getElementById("adv_popupRight1"));
            })
            
        }
    };
</script>

<style scoped>
</style>
