<template>
    <div @click="onClick" class="btn-logout">
        <div class="ava">
            <i :style="{backgroundImage:'url('+this.user.avatar+')'}"></i>
            <span class="icn">
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L0 0H8L4 4Z" fill="#C4C4C4"></path>
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BtnUser",
        props: {
            onClick: {
                type: Function,
            },
        },
        methods: {
        },
        components: {},
        data() {
            return {
                user: JSON.parse(this.$root.user)
            };
        },
    };</script>

<style scoped>
    .btn-logout {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

        .btn-logout .ava {
            width: 30px;
            padding-right: 15px;
            position: relative;
        }

            .btn-logout .ava i {
                width: 100%;
                padding-top: 100%;
                display: block;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                border-radius: 50%;
            }

            .btn-logout .ava .icn {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }
</style>
