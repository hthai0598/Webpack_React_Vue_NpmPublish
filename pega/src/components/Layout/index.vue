<template>
    <main>
        <Header />
        <slot />
        <Footer />
        <Popup :state="this.state" :typeIcon="this.typeIcon" :typeContent="this.typeContent" :id="this.id" :topicId="this.topicId" :topicName="this.topicName" v-if="this.statusPopup" />
        <Popup :state="this.state" :popupOverload="this.statusPopupOverload" :typeIcon="this.typeIconOverload" :typeContent="this.typeContentOverload" :id="this.idOverload" :topicId="this.topicIdOverload" :topicName="this.topicNameOverload" v-if="this.statusPopupOverload" />
        <!--icon: save,addfolder -->
        <!--content: thumb,catebox,content,bigevent-->
    </main>
</template>

<script>
    import { popupStatus, popupStatusOverload } from "@/configData/eventBus.js";

    //import Popup from "@/components/Popup";
    import Header from "@/components/Layout/Header";
    import Footer from "@/components/Layout/Footer";
    export default {
        name: "Layout",
        components: {
            Header, Footer,
            //Popup
            Popup: () => import(/* webpackChunkName: "Popup" */ "@/components/Popup"),
            //Header: () => import(/* webpackChunkName: "Header" */ "@/components/Layout/Header"),
            //Footer: () => import(/* webpackChunkName: "Footer" */ "@/components/Layout/Footer"),
        },
        methods: {
            checkPopupClose: function (data) {
                if (data == null) {
                    data = {}
                }
                if (this.statusPopupOverload && this.statusPopup) {
                    this.statusPopupOverload = false;
                    this.$nextTick(() => {
                        document.getElementsByClassName('wrapBox')[0].classList.remove("fade-out");
                        document.getElementsByClassName('wrapBox')[0].classList.add("fade-in");
                    })
                }
                else if (!this.statusPopupOverload && this.statusPopup && !data.hasOwnProperty('type')) {
                    this.statusPopup = false;
                    document.body.style.overflow = "visible";
                    document.title = this.$root.titlePage
                }
                else {
                    //this.statusPopup = true;
                    console.log('xxx')
                }
            },
            //xử lý back,next history
            windowEvent: function () {
                let data = history.state
                ///nếu data null hoặc  {} back
                if (data == null || Object.keys(data).length == 0) {
                    if (data != null) {
                        if (data.hasOwnProperty('type') && data.type == "bigevent" || data.type == "hottopic") {
                            console.log('next')
                        }
                        else {
                            //check popup để đóng
                            this.checkPopupClose(data);
                            document.title = this.$root.titlePage;
                        }
                    }
                    else {
                        //check popup để đóng
                        this.checkPopupClose(data)
                        document.title = this.$root.titlePage
                    }
                }
                //next
                else {
                    if (data.type == "bigevent" || data.type == "hottopic") {
                        this.checkPopupClose(data)
                        document.title = data.title
                        this.typeIcon = data.typeIcon;
                        this.typeContent = data.typeContent;
                        this.statusPopup = true;
                        this.topicId = data.topicId
                        this.topicName = localStorage.getItem('topicName')
                        this.state = data;
                        document.body.style.marginRight = "15px";
                    }
                    else {
                        this.id = data.id;
                        this.typeIcon = 'content'
                        this.typeContent = 'content';
                        this.statusPopup = true;
                        this.state = data;
                    }
                }
            }
        },
        data() {
            return {
                state: false,

                statusPopup: false,//status của popup
                typeIcon: "", //status của popup
                typeContent: "",//status của popup
                topicId: null,
                topicName: null,
                id: null,


                typeIconOverload: "",
                typeContentOverload: "",
                statusPopupOverload: false,
                topicIdOverload: null,
                topicNameOverload: null,
                idOverload: null,
            };
        },
        created() {
            window.addEventListener('popstate', this.windowEvent);
            if (!this.$root.category) {
                ///Khi coppy lick popup để mở popup
                if (this.$root.buildMethod.id != 0) {
                    this.statusPopup = true;
                    this.state = null;
                    this.typeIcon = 'content';
                    this.typeContent = 'content';
                    this.id = this.$root.buildMethod.id;
                    this.$root.titlePage = 'Pega - Đọc báo không giới hạn'
                    document.body.style.overflowY = "hidden";
                    document.body.style.marginRight = "15px";
                }
                else if (this.$root.buildMethod.id == 0 && this.$root.buildMethod.topicId != 0) {
                    this.statusPopup = true;
                    this.state = null;
                    if (location.pathname.includes('/su-kien-noi-bat-')) {
                        this.topicId = this.$root.buildMethod.topicId;
                        this.typeIcon = 'bigevent';
                        this.typeContent = 'bigevent';
                        this.topicName = localStorage.getItem('topicName')
                    }
                    else if (location.pathname.includes('/chu-de-noi-bat-')) {
                        this.topicId = this.$root.buildMethod.topicId;
                        this.typeIcon = 'hottopic';
                        this.typeContent = 'hottopic';
                        this.topicName = localStorage.getItem('topicName')
                        document.body.style.marginRight = "15px";
                    }
                    this.$root.titlePage = 'Pega - Đọc báo không giới hạn'
                    document.body.style.overflowY = "hidden";
                    document.body.style.marginRight = "15px";
                }
            }

            /// đón sự kiện bật popup từ button
            popupStatus.$on("popupStatus", (status, typeIcon, typeContent, obj) => {
                if (status) {
                    this.statusPopup = true;
                    this.state = null;
                    this.typeIcon = typeIcon;
                    this.typeContent = typeContent;
                    if (this.typeIcon == 'bigevent' || this.typeIcon == 'hottopic') {
                        this.topicId = obj.topicId
                        this.topicName = obj.topicName
                    }
                    else if (this.typeIcon == 'content') {
                        this.id = obj.id
                    }
                    document.body.style.overflowY = "hidden";
                    document.body.style.marginRight = "15px";
                } else {
                    this.statusPopup = false;
                    document.body.style.overflow = "visible";
                }
            });

            /// đón sự kiện bật popup từ trong popup (popup đè nhau)
            popupStatusOverload.$on("popupStatusOverload", (status, typeIcon, typeContent, obj) => {
                if (status) {
                    this.state = null;
                    this.statusPopupOverload = status;
                    this.typeIconOverload = typeIcon;
                    this.typeContentOverload = typeContent;
                    this.idOverload = obj.id
                }
                else {

                    this.statusPopupOverload = false;
                }
            });
        },
        updated() {
        }
    };
</script>

<style scoped>
    main {
        position: relative;
    }
</style>
