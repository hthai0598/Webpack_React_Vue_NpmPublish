<template>
    <div id="adv_popupRight2">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv_popupRight2",
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
                //quảng cáo right2 popup
                commonHelper.appendAds("kkm9kzhf", document.getElementById("adv_popupRight2"));
            })
            
        }
    };
</script>

<style scoped>
</style>
