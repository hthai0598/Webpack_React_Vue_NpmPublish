<template>
    <div v-if="this.menuExtend != null" class="show-all-menu">
        <div class="show-all-menu-wrapper w1040">
            <ul class="grid-menu">
                <li v-for="(item,index) in row1" :key="index" class="grid-item">
                    <a :title="item.name" :href="item.href" :data-id="item.id" class="cate">{{item.name}}</a>
                    <a :title="child.name" :href="child.href" :data-id="child.id" v-for="(child,i) in item.subcategories" :key="i">{{child.name}}</a>
                </li>
            </ul>
            <ul class="grid-menu">
                <li v-for="(item,index) in row2" :key="index" class="grid-item">
                    <a :title="item.name" :href="item.href" :data-id="item.id" class="cate">{{item.name}}</a>
                    <a :title="child.name" :href="child.href" :data-id="child.id" v-for="(child,i) in item.subcategories" :key="i">{{child.name}}</a>
                </li>
            </ul>
            <ul class="grid-menu">
                <li v-for="(item,index) in row3" :key="index" class="grid-item">
                    <a :title="item.name" :href="item.href" :data-id="item.id" class="cate">{{item.name}}</a>
                    <a :title="child.name" :href="child.href" :data-id="child.id" v-for="(child,i) in item.subcategories" :key="i">{{child.name}}</a>
                </li>
            </ul>
            <ul class="grid-menu">
                <li v-for="(item,index) in noSub" :key="index" class="grid-item">
                    <a :title="item.name" :href="item.href" :data-id="item.id" class="cate">{{item.name}}</a>
                    <a :title="child.name" :href="child.href" :data-id="child.id" v-for="(child,i) in item.subcategories" :key="i">{{child.name}}</a>
                </li>
            </ul>

            <div v-if="this.newspaper != null" class="list-news-paper">
                <LabelNewH3 title="Báo hay đọc" />
                <div class="news-paper-wrapper">
                    <div v-for="(item,index) in this.newspaper" :key="index" class="news-paper" v-if="item.image != '' ">
                        <a :title="item.name" target="_blank" rel="nofollow" :href="item.domain">
                            <span class="logo">
                                <img :src="item.image" alt="" />
                            </span>
                            <span class="url">{{item.name}}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { apiWeb } from '@/utils/common.js';
    import axios from 'axios'
    import { commonHelper } from '@/utils/helper.js';

    import LabelNewH3 from "@/components/Text/LabelNewH3";
    export default {
        name: "BoxMenu",
        props: {
            Lst: {},
            Title: {},

            menuExtend: {
                default: null
            }
        },
        computed: {
            newMenu: function () {
                return this.menuExtend.filter(x => x.subcategories);
            },
            noSub: function () {
                return this.menuExtend.filter(x => x.subcategories == undefined);
            },
            row1: function () {
                if (this.menuExtend != null && this.menuExtend.length > 0) {
                    let arr = [...this.newMenu]
                    return arr.splice(0, 5)
                }
            },
            row2: function () {
                if (this.menuExtend != null && this.menuExtend.length > 0) {
                    let arr = [...this.newMenu]
                    return arr.splice(5, 5)
                }
            },
            row3: function () {
                if (this.menuExtend != null && this.menuExtend.length > 0) {
                    let arr = [...this.newMenu]
                    return arr.splice(10, 15)
                }
            },
        },
        components: { LabelNewH3 },
        data() {
            return {
                newspaper: null,
            };
        },
        methods: {
            clickOutSide: function (event) {
                if (document.getElementsByClassName('extend')[0] != null) {
                    if (!this.$el.contains(event.target) && event.target.closest('.extend') == null) {
                        this.$emit('outside', false)
                        document.getElementsByClassName('extend')[0].children[0].classList.remove('hwg_menu_mobile--is-active')
                    }
                }
            }
        },
        mounted() {
            let newspaper = commonHelper.getKingToken(tk => {
                axios(apiWeb.newspaper(this.$root.buildMethod.domainApi), commonHelper.getHeader(tk)).then(values => {
                    if (values.data != null) {
                        this.newspaper = values.data.data;
                    }
                    else {
                        console.error('newspaper null')
                    }
                }).catch(e => console.error(e));
            }, this.$root.buildMethod.domain)
            window.addEventListener('click', this.clickOutSide)
        },
        updated() {
        }
    };
</script>

<style scoped>
    ul {
        list-style: none;
    }

    .show-all-menu-wrapper {
        display: flex;
        flex-direction: column;
        padding: 30px 0;
    }

        .show-all-menu-wrapper .grid-menu {
            display: grid;
            grid-template-columns: 19.2% 19.2% 19.2% 19.2% 19.2%;
            justify-content: space-between;
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid #eeeeee;
        }

    .grid-menu .grid-item {
        display: flex;
        flex-direction: column;
    }

    .cate {
        color: #161616;
        font-family: SFPD-SemiBold;
    }

    a {
        text-decoration: none;
        font-size: 15px;
        line-height: 20px;
        color: #616161;
        font-family: SFPD-Regular;
        margin-bottom: 10px;
    }



    /* lstNewSpaper */
    .show-all-menu-wrapper .list-news-paper {
        display: flex;
        flex-direction: column;
    }

    .news-paper-wrapper {
        display: grid;
        grid-template-columns: repeat(11, 8%);
        justify-content: space-between;
    }

        .news-paper-wrapper .news-paper {
            border: 1px solid #eeeeee;
            border-radius: 10px;
        }

    .news-paper a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px 0;
    }

        .news-paper a .logo {
            width: 50px;
            padding-top: 50px;
            position: relative;
            display: block;
        }

        .news-paper a .url {
            font-size: 13px;
            line-height: 16px;
            color: #353535;
            margin-top: 10px;
            font-family: SFPD-SemiBold;
        }

        .news-paper a .logo img {
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
            top: 0;
            left: 0;
        }

    .show-all-menu {
        width: 100%;
        position: absolute;
        top: 45px;
        left: 0;
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05), 0px 11px 10px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(10px);
        z-index: 10;
    }
</style>
