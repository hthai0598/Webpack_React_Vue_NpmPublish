<template>
    <div @click="actionExtend" class="menu_toggle-mobile">
        <div class="menu_toggle_wrapper">
            <span id="changeColor" class="txt">Tất cả</span>
            <span class="menu_toggle_icon">
                <i id='line-1' class="line-1"></i>
                <i id='line-2' class="line-2"></i>
                <i id='line-3' class="line-3"></i>
            </span>
        </div>
    </div>
</template>

<script>
    import { commonHelper } from "@/utils/helper";
    export default {
        name: "BtnExtend",
        components: {},
        props: {
            title: {
                type: String,
                default: "Tất cả",
            },
        },
        methods: {
            actionExtend: function () {
                this.$el.classList.toggle("hwg_menu_mobile--is-active");

                let action = commonHelper.hasClass(this.$el, "hwg_menu_mobile--is-active")
                ///Truyền sự kiện thông báo đóng(mở) extend menu lên component Menu
                this.$emit("actionExtend", action)
            },
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .menu_toggle-mobile {
        display: flex;
        align-items: center;
        justify-content: center;
    }

        .menu_toggle-mobile .menu_toggle_wrapper {
            display: flex;
            align-items: center;
        }

    .txt {
        margin-right: 10px;
        color: #aaaaaa;
    }

    .menu_toggle_icon {
        display: block;
        width: 18px;
        height: 12px;
        position: relative;
        opacity: 0.8;
        cursor: pointer;
        -webkit-transition: opacity 0.3s;
        -moz-transition: opacity 0.3s;
        -ms-transition: opacity 0.3s;
        transition: opacity 0.3s;
    }

        .menu_toggle_icon i {
            display: block;
            width: 100%;
            height: 2px;
            background-color: #aaaaaa;
            position: absolute;
            left: 0;
            transition: all 0.3s;
        }

            .menu_toggle_icon i.line-2 {
                top: 5px;
            }

            .menu_toggle_icon i.line-3 {
                top: 10px;
            }

    .hwg_menu_mobile--is-active .menu_toggle_icon {
        opacity: 1;
    }

        .hwg_menu_mobile--is-active .menu_toggle_icon i.line-1 {
            transform: rotate(-45deg);
            top: 6px;
        }

        .hwg_menu_mobile--is-active .menu_toggle_icon i.line-2 {
            display: none;
        }

        .hwg_menu_mobile--is-active .menu_toggle_icon i.line-3 {
            transform: rotate(45deg);
            top: 6px;
            width: 100%;
        }

    .hwg_menu_mobile--is-active .af-wrapper .menu .show-all-menu {
        display: block;
    }
</style>
