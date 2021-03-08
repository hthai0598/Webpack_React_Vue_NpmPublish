<template>
    <div class="toolbar w1160">
        <Logo />
        <BtnLogin v-if="!this.isLogin" />
        <BtnUser v-else :onClick="this.showToggle" />
        <Toggle v-if="this.toggleShow">
            <BtnUtilities type="save" />
            <BtnUtilities type="addfolder" />
            <a title="Đăng xuất" href="/dang-xuat.htm" class="popup-detail">
                <span class="icn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 1.6C2.18783 1.6 1.98434 1.68429 1.83431 1.83431C1.68429 1.98434 1.6 2.18783 1.6 2.4V13.6C1.6 13.8122 1.68429 14.0157 1.83431 14.1657C1.98434 14.3157 2.18783 14.4 2.4 14.4H5.6C6.04183 14.4 6.4 14.7582 6.4 15.2C6.4 15.6418 6.04183 16 5.6 16H2.4C1.76348 16 1.15303 15.7471 0.702944 15.2971C0.252856 14.847 0 14.2365 0 13.6V2.4C0 1.76348 0.252856 1.15303 0.702944 0.702944C1.15303 0.252856 1.76348 0 2.4 0H5.6C6.04183 0 6.4 0.358172 6.4 0.8C6.4 1.24183 6.04183 1.6 5.6 1.6H2.4Z" fill="#AAAAAA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6343 3.43431C10.9467 3.1219 11.4533 3.1219 11.7657 3.43431L15.7657 7.43431C16.0781 7.74673 16.0781 8.25327 15.7657 8.56569L11.7657 12.5657C11.4533 12.8781 10.9467 12.8781 10.6343 12.5657C10.3219 12.2533 10.3219 11.7467 10.6343 11.4343L14.0686 8L10.6343 4.56569C10.3219 4.25327 10.3219 3.74673 10.6343 3.43431Z" fill="#AAAAAA"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8 8C4.8 7.55817 5.15817 7.2 5.6 7.2H15.2C15.6418 7.2 16 7.55817 16 8C16 8.44183 15.6418 8.8 15.2 8.8H5.6C5.15817 8.8 4.8 8.44183 4.8 8Z" fill="#AAAAAA"></path>
                    </svg>
                </span>
                <span class="txt">Đăng xuất</span>
            </a>
        </Toggle>
    </div>
</template>

<script>
    import Logo from "@/components/Logo";
    import Toggle from "@/components/Toggle";
    import BtnLogin from "@/components/Button/BtnLogin";
    import BtnUser from "@/components/Button/BtnUser";
    import BtnUtilities from "@/components/Button/BtnUtilities";
    export default {
        name: "Toolbar",
        components: {
            //BtnLogin: () => import(/* webpackChunkName: "BtnLogin" */"@/components/Button/BtnLogin"),
            //Toggle: () => import(/* webpackChunkName: "Toggle" */"@/components/Toggle"),
            //BtnUser: () => import(/* webpackChunkName: "BtnUser" */"@/components/Button/BtnLogin"),
            //BtnUtilities: () => import(/* webpackChunkName: "BtnUtilities" */"@/components/Button/BtnUtilities"),
            Logo,
            Toggle,
            BtnLogin,
            BtnUser,
            BtnUtilities
        },
        data() {
            return {
                toggleShow: false,
                isLogin: this.$root.user != null ? true : false
            };
        },
        methods: {
            showToggle: function () {
                this.toggleShow = !this.toggleShow;
            },
        },
    };
</script>

<style scoped>
    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        position: relative;
    }

    .popup-detail::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
        height: 1px;
        background: #F2F2F2;
    }


    .popup-detail .txt {
        font-size: 13px;
        line-height: 16px;
        color: #353535;
        font-family: SFPD-SemiBold;
        margin-left: 15px;
    }
</style>
