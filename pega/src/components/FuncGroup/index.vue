<template>
    <div class="function">
        <Send />
        <Share />
        <Save />
    </div>
</template>

<script>
    import Save from "@/components/FuncGroup/Save";
    import Share from "@/components/FuncGroup/Share";
    import Send from "@/components/FuncGroup/Send";
    export default {
        name: "FuncGroup",
        components: {
            Save,
            Share,
            Send
        },
        methods: {
        },
        data() {
            return {
            };
        }
    };
</script>

<style scoped>
    .function {
        display: flex;
        margin-top: 15px;
        align-items: center;
    }

        .function a {
            cursor: pointer;
            display: flex;
            margin-right: 12px;
        }
</style>
