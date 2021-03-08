<template>
    <div :type="this.typeIcon" :style=" [this.typeIcon == 'content' ? {cursor: 'context-menu',}: {cursor: 'grab'},this.typeIcon == 'content' || this.typeIcon == 'bigevent' || this.typeIcon == 'hottopic' ? {position:'sticky', top:'-1%'}:{position:'unset'}]" class="headerPopup">
        <!--///save-->
        <div v-if="this.typeIcon == 'save'" class="label">
            <div class="label-wrapper">
                <span class="icn">
                    <svg width="18"
                         height="18"
                         viewBox="0 0 18 18"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.25 3.5C5.05109 3.5 4.86032 3.57902 4.71967 3.71967C4.57902 3.86032 4.5 4.05109 4.5 4.25V14.7926L8.56407 11.8897C8.82484 11.7034 9.17516 11.7034 9.43593 11.8897L13.5 14.7926V4.25C13.5 4.05109 13.421 3.86032 13.2803 3.71967C13.1397 3.57902 12.9489 3.5 12.75 3.5H5.25ZM3.65901 2.65901C4.08097 2.23705 4.65326 2 5.25 2H12.75C13.3467 2 13.919 2.23705 14.341 2.65901C14.7629 3.08097 15 3.65326 15 4.25V16.25C15 16.5309 14.843 16.7883 14.5932 16.9169C14.3434 17.0454 14.0427 17.0236 13.8141 16.8603L9 13.4217L4.18593 16.8603C3.95732 17.0236 3.65662 17.0454 3.40681 16.9169C3.15701 16.7883 3 16.5309 3 16.25V4.25C3 3.65326 3.23705 3.08097 3.65901 2.65901Z"
                              fill="white"></path>
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.25 3.5C5.05109 3.5 4.86032 3.57902 4.71967 3.71967C4.57902 3.86032 4.5 4.05109 4.5 4.25V14.7926L8.56407 11.8897C8.82484 11.7034 9.17516 11.7034 9.43593 11.8897L13.5 14.7926V4.25C13.5 4.05109 13.421 3.86032 13.2803 3.71967C13.1397 3.57902 12.9489 3.5 12.75 3.5H5.25ZM3.65901 2.65901C4.08097 2.23705 4.65326 2 5.25 2H12.75C13.3467 2 13.919 2.23705 14.341 2.65901C14.7629 3.08097 15 3.65326 15 4.25V16.25C15 16.5309 14.843 16.7883 14.5932 16.9169C14.3434 17.0454 14.0427 17.0236 13.8141 16.8603L9 13.4217L4.18593 16.8603C3.95732 17.0236 3.65662 17.0454 3.40681 16.9169C3.15701 16.7883 3 16.5309 3 16.25V4.25C3 3.65326 3.23705 3.08097 3.65901 2.65901Z"
                              fill="#1F9FFC"></path>
                    </svg>
                </span>
                <span class="txt" style="margin-left:5px">{{ this.getText }}</span>
            </div>
            <button type="button"
                    data-fancybox-close=""
                    class="fancybox-button fancybox-close-small"
                    title="Close"
                    @click="this.closePopup">
                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                </svg>
            </button>
        </div>
        <!--///addfolder-->
        <div v-else-if="this.typeIcon == 'addfolder'" class="label">
            <div class="label-wrapper">
                <span class="icn">
                    <svg width="18"
                         height="18"
                         viewBox="0 0 18 18"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 3C2.80109 3 2.61032 3.07902 2.46967 3.21967C2.32902 3.36032 2.25 3.55109 2.25 3.75V14.25C2.25 14.4489 2.32902 14.6397 2.46967 14.7803C2.61032 14.921 2.80109 15 3 15H15C15.1989 15 15.3897 14.921 15.5303 14.7803C15.671 14.6397 15.75 14.4489 15.75 14.25V6C15.75 5.80109 15.671 5.61032 15.5303 5.46967C15.3897 5.32902 15.1989 5.25 15 5.25H8.25C7.99924 5.25 7.76506 5.12467 7.62596 4.91602L6.34861 3H3ZM1.40901 2.15901C1.83097 1.73705 2.40326 1.5 3 1.5H6.75C7.00076 1.5 7.23494 1.62533 7.37404 1.83397L8.65139 3.75H15C15.5967 3.75 16.169 3.98705 16.591 4.40901C17.0129 4.83097 17.25 5.40326 17.25 6V14.25C17.25 14.8467 17.0129 15.419 16.591 15.841C16.169 16.2629 15.5967 16.5 15 16.5H3C2.40326 16.5 1.83097 16.2629 1.40901 15.841C0.987053 15.419 0.75 14.8467 0.75 14.25V3.75C0.75 3.15326 0.987053 2.58097 1.40901 2.15901Z"
                              fill="white"></path>
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 3C2.80109 3 2.61032 3.07902 2.46967 3.21967C2.32902 3.36032 2.25 3.55109 2.25 3.75V14.25C2.25 14.4489 2.32902 14.6397 2.46967 14.7803C2.61032 14.921 2.80109 15 3 15H15C15.1989 15 15.3897 14.921 15.5303 14.7803C15.671 14.6397 15.75 14.4489 15.75 14.25V6C15.75 5.80109 15.671 5.61032 15.5303 5.46967C15.3897 5.32902 15.1989 5.25 15 5.25H8.25C7.99924 5.25 7.76506 5.12467 7.62596 4.91602L6.34861 3H3ZM1.40901 2.15901C1.83097 1.73705 2.40326 1.5 3 1.5H6.75C7.00076 1.5 7.23494 1.62533 7.37404 1.83397L8.65139 3.75H15C15.5967 3.75 16.169 3.98705 16.591 4.40901C17.0129 4.83097 17.25 5.40326 17.25 6V14.25C17.25 14.8467 17.0129 15.419 16.591 15.841C16.169 16.2629 15.5967 16.5 15 16.5H3C2.40326 16.5 1.83097 16.2629 1.40901 15.841C0.987053 15.419 0.75 14.8467 0.75 14.25V3.75C0.75 3.15326 0.987053 2.58097 1.40901 2.15901Z"
                              fill="#1F9FFC"></path>
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75V8.25C8.25 7.83579 8.58579 7.5 9 7.5Z"
                              fill="white"></path>
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75V8.25C8.25 7.83579 8.58579 7.5 9 7.5Z"
                              fill="#1F9FFC"></path>
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 10.5C6 10.0858 6.33579 9.75 6.75 9.75H11.25C11.6642 9.75 12 10.0858 12 10.5C12 10.9142 11.6642 11.25 11.25 11.25H6.75C6.33579 11.25 6 10.9142 6 10.5Z"
                              fill="white"></path>
                        <path fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 10.5C6 10.0858 6.33579 9.75 6.75 9.75H11.25C11.6642 9.75 12 10.0858 12 10.5C12 10.9142 11.6642 11.25 11.25 11.25H6.75C6.33579 11.25 6 10.9142 6 10.5Z"
                              fill="#1F9FFC"></path>
                    </svg>
                </span>
                <span class="txt" style="margin-left:5px">{{ this.getText }}</span>
            </div>
            <button type="button"
                    data-fancybox-close=""
                    class="fancybox-button fancybox-close-small"
                    title="Close"
                    @click="this.closePopup">
                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                </svg>
            </button>
        </div>
        <!--///popupdetail-->
        <div v-else-if="this.typeIcon == 'content'" class="popup-header">
            <div @click="this.closePopup" class="type-1-close">

                <a data-popup="close-popup-1">
                    <i>
                        <svg width="16"
                             height="16"
                             viewBox="0 0 16 16"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.4713 3.52864C12.7317 3.78899 12.7317 4.2111 12.4713 4.47145L4.47132 12.4714C4.21097 12.7318 3.78886 12.7318 3.52851 12.4714C3.26816 12.2111 3.26816 11.789 3.52851 11.5286L11.5285 3.52864C11.7889 3.26829 12.211 3.26829 12.4713 3.52864Z"
                                  fill="#888888"></path>
                            <path fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.52851 3.52864C3.78886 3.26829 4.21097 3.26829 4.47132 3.52864L12.4713 11.5286C12.7317 11.789 12.7317 12.2111 12.4713 12.4714C12.211 12.7318 11.7889 12.7318 11.5285 12.4714L3.52851 4.47145C3.26816 4.2111 3.26816 3.78899 3.52851 3.52864Z"
                                  fill="#888888"></path>
                        </svg>
                    </i>
                </a>
            </div>
        </div>
        <!--///bigevent-->
        <div v-if="this.typeIcon == 'bigevent'" class="label">
            <div class="label-wrapper">
                <span class="event">Sự kiện nổi bật: </span>
                <span class="txt" style="margin-left:5px">{{ this.topicName }}</span>
            </div>
            <button type="button"
                    data-fancybox-close=""
                    class="fancybox-button fancybox-close-small"
                    title="Close"
                    @click="this.closePopup">
                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                </svg>
            </button>
        </div>
        <div v-if="this.typeIcon == 'hottopic'" class="label">
            <div class="label-wrapper">
                <span class="event">Chủ đề nổi bật: </span>
                <span class="txt" style="margin-left:5px">{{ this.topicName }}</span>
            </div>
            <button type="button"
                    data-fancybox-close=""
                    class="fancybox-button fancybox-close-small"
                    title="Close"
                    @click="this.closePopup">
                <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderPopup",
        components: {},
        props: {
            closePopup: {
                default: {
                    type: Function,
                    default: () => { },
                },
            },
            typeIcon: {},
            topicName: {}
        },
        data() {
            return {
                text: ""
            };
        },
        computed: {
            getText: function () {
                switch (this.typeIcon) {
                    case "save":
                        return "Đã đánh dấu";
                    case "addfolder":
                        return "Báo vào chuyên mục đã thêm"
                    default:
                }
            }
        },
    };
</script>

<style scoped>
    /*   .headerPopup[type='content']
    {
        position:sticky;
    }*/
    .event {
        color: #8e8e8e;
        font-size: 13px;
        font-family: SFPD-Regular;
    }

    .label {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        top: 0;
        left: 0;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.05);
    }

    .headerPopup {
        top: 0;
        /*position: sticky;*/
        z-index: 100;
    }


    .label .label-wrapper {
        display: flex;
        align-items: center;
    }

    .label-wrapper .txt {
        font-size: 15px;
        line-height: 20px;
        color: #353535;
        font-family: SFPD-SemiBold;
        margin-left: 15px;
    }

    .fancybox-close-small {
        background: transparent;
        border: 0;
        border-radius: 0;
        color: #ccc;
        cursor: pointer;
        opacity: 0.8;
        padding: 8px;
        position: absolute;
        right: -12px;
        top: -44px;
        z-index: 401;
    }

    .fancybox-button {
        width: 30px;
        height: 30px;
        outline: none;
    }

    .label button {
        position: relative;
        display: block;
        padding: 0;
    }

    .fancybox-close-small {
        color: currentColor;
        padding: 10px;
        right: 0;
        top: 0;
    }

    /*---*/
    .popup-header {
        height: 40px;
        display: flex;
        justify-content: flex-end;
        z-index: 1;
        cursor: pointer;
    }

        .popup-header .type-1-close a {
            display: flex;
            width: 40px;
            height: 40px;
            background-color: #f1f1f1;
            border-bottom-left-radius: 10px;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #888;
            font-weight: bold;
        }

            .popup-header .type-1-close a i {
                display: block;
                margin-right: 3px;
            }
</style>
