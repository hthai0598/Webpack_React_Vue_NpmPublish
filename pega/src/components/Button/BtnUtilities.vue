<template>
    <a @click="openPopup" class="popup-detail" data-fancybox="">
        <span v-if="this.type == 'save'" class="icn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3.5C5.05109 3.5 4.86032 3.57902 4.71967 3.71967C4.57902 3.86032 4.5 4.05109 4.5 4.25V14.7926L8.56407 11.8897C8.82484 11.7034 9.17516 11.7034 9.43593 11.8897L13.5 14.7926V4.25C13.5 4.05109 13.421 3.86032 13.2803 3.71967C13.1397 3.57902 12.9489 3.5 12.75 3.5H5.25ZM3.65901 2.65901C4.08097 2.23705 4.65326 2 5.25 2H12.75C13.3467 2 13.919 2.23705 14.341 2.65901C14.7629 3.08097 15 3.65326 15 4.25V16.25C15 16.5309 14.843 16.7883 14.5932 16.9169C14.3434 17.0454 14.0427 17.0236 13.8141 16.8603L9 13.4217L4.18593 16.8603C3.95732 17.0236 3.65662 17.0454 3.40681 16.9169C3.15701 16.7883 3 16.5309 3 16.25V4.25C3 3.65326 3.23705 3.08097 3.65901 2.65901Z" fill="white"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3.5C5.05109 3.5 4.86032 3.57902 4.71967 3.71967C4.57902 3.86032 4.5 4.05109 4.5 4.25V14.7926L8.56407 11.8897C8.82484 11.7034 9.17516 11.7034 9.43593 11.8897L13.5 14.7926V4.25C13.5 4.05109 13.421 3.86032 13.2803 3.71967C13.1397 3.57902 12.9489 3.5 12.75 3.5H5.25ZM3.65901 2.65901C4.08097 2.23705 4.65326 2 5.25 2H12.75C13.3467 2 13.919 2.23705 14.341 2.65901C14.7629 3.08097 15 3.65326 15 4.25V16.25C15 16.5309 14.843 16.7883 14.5932 16.9169C14.3434 17.0454 14.0427 17.0236 13.8141 16.8603L9 13.4217L4.18593 16.8603C3.95732 17.0236 3.65662 17.0454 3.40681 16.9169C3.15701 16.7883 3 16.5309 3 16.25V4.25C3 3.65326 3.23705 3.08097 3.65901 2.65901Z" fill="#1F9FFC"></path>
            </svg>
        </span>

        <span v-else-if="this.type == 'addfolder'" class="icn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C2.80109 3 2.61032 3.07902 2.46967 3.21967C2.32902 3.36032 2.25 3.55109 2.25 3.75V14.25C2.25 14.4489 2.32902 14.6397 2.46967 14.7803C2.61032 14.921 2.80109 15 3 15H15C15.1989 15 15.3897 14.921 15.5303 14.7803C15.671 14.6397 15.75 14.4489 15.75 14.25V6C15.75 5.80109 15.671 5.61032 15.5303 5.46967C15.3897 5.32902 15.1989 5.25 15 5.25H8.25C7.99924 5.25 7.76506 5.12467 7.62596 4.91602L6.34861 3H3ZM1.40901 2.15901C1.83097 1.73705 2.40326 1.5 3 1.5H6.75C7.00076 1.5 7.23494 1.62533 7.37404 1.83397L8.65139 3.75H15C15.5967 3.75 16.169 3.98705 16.591 4.40901C17.0129 4.83097 17.25 5.40326 17.25 6V14.25C17.25 14.8467 17.0129 15.419 16.591 15.841C16.169 16.2629 15.5967 16.5 15 16.5H3C2.40326 16.5 1.83097 16.2629 1.40901 15.841C0.987053 15.419 0.75 14.8467 0.75 14.25V3.75C0.75 3.15326 0.987053 2.58097 1.40901 2.15901Z" fill="white"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C2.80109 3 2.61032 3.07902 2.46967 3.21967C2.32902 3.36032 2.25 3.55109 2.25 3.75V14.25C2.25 14.4489 2.32902 14.6397 2.46967 14.7803C2.61032 14.921 2.80109 15 3 15H15C15.1989 15 15.3897 14.921 15.5303 14.7803C15.671 14.6397 15.75 14.4489 15.75 14.25V6C15.75 5.80109 15.671 5.61032 15.5303 5.46967C15.3897 5.32902 15.1989 5.25 15 5.25H8.25C7.99924 5.25 7.76506 5.12467 7.62596 4.91602L6.34861 3H3ZM1.40901 2.15901C1.83097 1.73705 2.40326 1.5 3 1.5H6.75C7.00076 1.5 7.23494 1.62533 7.37404 1.83397L8.65139 3.75H15C15.5967 3.75 16.169 3.98705 16.591 4.40901C17.0129 4.83097 17.25 5.40326 17.25 6V14.25C17.25 14.8467 17.0129 15.419 16.591 15.841C16.169 16.2629 15.5967 16.5 15 16.5H3C2.40326 16.5 1.83097 16.2629 1.40901 15.841C0.987053 15.419 0.75 14.8467 0.75 14.25V3.75C0.75 3.15326 0.987053 2.58097 1.40901 2.15901Z" fill="#1F9FFC"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75V8.25C8.25 7.83579 8.58579 7.5 9 7.5Z" fill="white"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75V8.25C8.25 7.83579 8.58579 7.5 9 7.5Z" fill="#1F9FFC"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10.5C6 10.0858 6.33579 9.75 6.75 9.75H11.25C11.6642 9.75 12 10.0858 12 10.5C12 10.9142 11.6642 11.25 11.25 11.25H6.75C6.33579 11.25 6 10.9142 6 10.5Z" fill="white"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10.5C6 10.0858 6.33579 9.75 6.75 9.75H11.25C11.6642 9.75 12 10.0858 12 10.5C12 10.9142 11.6642 11.25 11.25 11.25H6.75C6.33579 11.25 6 10.9142 6 10.5Z" fill="#1F9FFC"></path>
            </svg>
        </span>
        <span class="txt" v-if="this.type == 'save'">Đã đánh dấu</span>
        <span class="txt" v-else-if="this.type == 'addfolder'">Báo và chuyên mục đã thêm</span>
    </a>
</template>

<script>
    import {
        popupStatus
    } from "@/configData/eventBus.js";
    export default {
        name: "BtnUtilities",
        props: {
            type: {},
        },
        components: {},
        data() {
            return {};
        },
        methods: {
            openPopup: function (event) {
                event.preventDefault();
                let content;
                switch (this.type) {
                    case "save":
                        content = "thumb";
                        break;
                    case "addfolder":
                        content = "cateBox";
                        break;

                    default:
                        break;
                }
                popupStatus.$emit("popupStatus", true, this.type, content); ///truyền status để mở popup (layout)
            },
        },
    };
</script>

<style scoped>
    .popup-detail {
        cursor: pointer
    }


    .popup-register-wrapper .popup-detail {
        padding-bottom: 15px;
        margin-bottom: 15px;
    }

    .popup-register-wrapper .popup-detail {
        display: flex;
        align-items: center;
        position: relative;
    }

    .popup-detail .txt {
        font-size: 13px;
        line-height: 16px;
        color: #353535;
        font-family: SFPD-SemiBold;
        margin-left: 15px;
    }
</style>
