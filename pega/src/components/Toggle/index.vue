<template>
<div class="popup-register">
    <div class="popup-register-wrapper">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    name: "Toggle",
    components: {},
    data() {
        return {};
    },
};
</script>

<style scoped>
.popup-register {
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    z-index: 11;
    transition: transform 0.3s;
}

.popup-register-wrapper {
    padding: 22px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}
</style>
