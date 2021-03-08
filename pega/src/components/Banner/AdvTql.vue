<template>
    <div id="adv_TQL">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv_TQL",
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
                //quảng cáo tin lquan cuối popup
                commonHelper.appendAds("kkc9rifk", document.getElementById("adv_TQL"));
            })

        }
    };
</script>

<style scoped>
</style>
