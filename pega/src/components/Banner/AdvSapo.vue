<template>
    <div id="adv_sapo">
    </div>
</template>

<script>
    import { commonHelper } from "../../utils/helper";
    export default {
        name: "adv_sapo",
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
                //quảng cáo sapo popup
                commonHelper.appendAds("kkc9pd50", document.getElementById("adv_sapo"));
            })
            
        }
    };
</script>

<style scoped>
</style>
