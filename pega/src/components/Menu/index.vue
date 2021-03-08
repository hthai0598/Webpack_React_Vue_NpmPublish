<template>
    <nav class="menu" style="background:#fff">
        <div class="menu-wrapper w1160">
            <ul v-if="this.menuExtend != null && this.menuExtend != undefined" class="list-menu">
                <li class="menu-item"><BtnHome /></li>
                <li class="menu-item"> <a href="/" title="Trang chủ">Trang chủ</a></li>
                <li v-for="(item, index) in newMenu" :key="index" class="menu-item">
                    <a :title="item.name" :data-id="item.id" :href="item.href">{{ item.name }}</a>
                </li>
                <li class="menu-item extend">
                    <BtnExtend @actionExtend="actionExtend" />
                </li>
            </ul>
            <ul v-else-if="this.menuExtend == null" class="list-menu">
                <li class="menu-item"><BtnHome /></li>
                <SkeMenu />
            </ul>
        </div>
        <BoxMenu :menuExtend="this.menuExtend" v-show="this.showAllMenu" @outside="this.actionExtend" />
    </nav>
</template>

<script>
    import { apiWeb } from '@/utils/common.js';
    import axios from 'axios'
    import { dataContent, menuContent } from '@/configData/eventBus.js';
    import { commonHelper } from '@/utils/helper.js';

    import BtnHome from "@/components/Button/BtnHome";
    import BoxMenu from "@/components/Menu/BoxMenu";
    import BtnExtend from "@/components/Button/BtnExtend";
    import SkeMenu from "@/components/Skeleton/SkeMenu";
    export default {
        name: "Menu",
        components: {
            BtnHome, BtnExtend, BoxMenu, SkeMenu
        },
        data() {
            return {
                showAllMenu: false,
                menuExtend: null,
            };
        },
        methods: {
            actionExtend: function (action) {
                this.showAllMenu = action;
                if (action) {
                    document.getElementById("changeColor").style.color = '#1F9FFC';
                    document.getElementById("line-1").style.background = 'linear-gradient(0deg, #1F9FFC, #1F9FFC), #FFFFFF';
                    document.getElementById("line-2").style.background = 'linear-gradient(0deg, #1F9FFC, #1F9FFC), #FFFFFF';
                    document.getElementById("line-3").style.background = 'linear-gradient(0deg, #1F9FFC, #1F9FFC), #FFFFFF';
                }
                else {
                    document.getElementById("changeColor").style.color = '#aaaaaa';
                    document.getElementById("line-1").style.background = '#aaaaaa';
                    document.getElementById("line-2").style.background = '#aaaaaa';
                    document.getElementById("line-3").style.background = '#aaaaaa';
                }
            },
            onScroll: function () {
                const height = this.$el.clientHeight;
                let y = window.scrollY;
                if (y > height) {
                    this.$el.style.position = 'fixed'
                    this.$el.style.top = '0px'
                    this.$el.style.zIndex = '100'
                    this.$el.style.width = '100%'
                    this.$el.style.width = '100%'
                    document.getElementsByClassName("menu")[0].style.boxShadow = '0px 4px 20px rgb(0 0 0 / 10%), 0px 1px 0px #f1f1f1'
                }
                else {
                    this.$el.style.position = 'relative'
                    this.$el.style.width = 'auto'
                    document.getElementsByClassName("menu")[0].style.boxShadow = 'none'

                }
            }
        },
        computed: {
            newMenu: function () {
                if (this.menuExtend != null) {
                    return this.menuExtend.filter(x => x.subcategories).splice(0, 9);
                }
            },
        },
        created() {
            commonHelper.getKingToken(tk => {
                axios(apiWeb.menuExtend(this.$root.buildMethod.domainApi), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.menuExtend = values.data.data;
                        let dataObj = {
                            box: values.data.data
                        }
                        let dataMenu = {
                            menuExtend: values.data.data
                        }
                        ////truyển dữ liệu menu => box/selectionMid/bigleft component
                        //dataContent.$emit("dataContent", dataObj);
                        this.$store.commit('SET_MENU', values.data.data)
                        //truyển dữ liệu menu => CategoryNav component
                        menuContent.$emit('menuContent', dataMenu);
                    }
                    else {
                        console.error("Menu null")
                    }
                }).catch(e => console.error(e))
            }, this.$root.buildMethod.domain)
            window.addEventListener("scroll", this.onScroll)
        },
        updated() {
        }
    };</script>

<style scoped>
    ul {
        list-style: none;
    }

    .menu {
        background: #ffffff;
    }

    .menu-item a {
        position: relative;
        font-size: 15px;
        line-height: 20px;
        color: #333333;
        font-family: SFPD-SemiBold;
    }

    .list-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

        .list-menu .menu-item {
            cursor: pointer;
            font-size: 15px;
            line-height: 20px;
            color: #333333;
            font-family: SFPD-SemiBold;
            margin-right: 30px
        }

    .menu-wrapper {
        padding: 10px 0;
    }
</style>
