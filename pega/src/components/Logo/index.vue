<template>
    <div class="logo">
        <h1 v-if="!this.$root.category"><a title="Trang chủ" href="/"><img src="@/assets/img/Pega.png"></a></h1>
        <a v-else title="Trang chủ" href="/"><img src="@/assets/img/Pega.png"></a>
    </div>
</template>

<script>
    export default {
        name: "Logo",
        components: {},
        data() {
            return {};
        }
    };
</script>

<style scoped>
</style>
