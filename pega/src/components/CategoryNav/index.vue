<template>
    <div v-if="this.menuExtend!=null" class="category-nav">
        <ul class="kbws-list">
            <li ref="menuCategoryDefault" class="kbwsli active">
                <h1 v-if="this.active1"><a :href="this.menuExtend.href" :data-id="this.menuExtend.id" :title="this.menuExtend.name">{{this.menuExtend.name}}</a></h1>
                <a v-else :href="this.menuExtend.href" :data-id="this.menuExtend.id" :title="this.menuExtend.name">{{this.menuExtend.name}}</a>
            </li>
            <li class="kbwsli" v-for="(item,index) in this.menuExtend.subcategories" :key="index">
                <h2 v-if="item.active"><a :href="item.href" :data-id="item.id" :title="item.name">{{item.name}}</a></h2>
                <a v-else :href="item.href" :data-id="item.id" :title="item.name">{{item.name}}</a>
            </li>
        </ul>
    </div>

</template>

<script>
    import { menuContent } from '@/configData/eventBus.js';
    import { commonHelper } from '@/utils/helper.js';
    export default {
        name: "CategoryNav",
        components: {},
        data() {
            return {
                active1: true,
                menuExtend: null
            };
        },
        mounted() {
            //nhận data đc truyền từ component menu
            menuContent.$on('menuContent', (data) => {
                if (data.menuExtend != null) {
                    this.menuExtend = commonHelper.buildHref(data.menuExtend);
                    let id = this.$root.buildMethod.idCategory
                    let categoryNews = this.menuExtend.find(x => x.id == id);
                    if (categoryNews != undefined && categoryNews.subcategories != null && categoryNews.subcategories.length > 0) {
                        this.menuExtend = categoryNews;
                    }
                }
            })
        },
        updated() {
            //Xử lý active, unactive tin bài con đc chọn
            let notfound = 0;
            let arr = this.$el.querySelectorAll('a')
            for (var i = 0; i < arr.length; i++) {
                arr[i].closest('li').classList.remove('active')
                if (arr[i].getAttribute('data-id') != null && arr[i].getAttribute('data-id') == this.$root.buildMethod.activeIndex) {
                    arr[i].closest('li').classList.add('active');
                    notfound = 1;
                    this.active1 = false
                }
            }
            if (notfound == 0) {
                for (var i = 0; i < arr.length; i++) {
                    arr[i].closest('li').classList.remove('active');
                }
                this.$refs.menuCategoryDefault.classList.add('active');
                this.active1 = true;
            }
            else {
                for (var i = 0; i < this.menuExtend.subcategories.length; i++) {
                    if (this.menuExtend.subcategories[i].id == this.buildMethod.activeIndex) {
                        this.menuExtend.subcategories[i].active = true
                        this.active1 = false;
                    }
                    else {
                        this.menuExtend.subcategories[i].active = false
                    }
                }
            }
        }
    };</script>

<style scoped>
    .category-nav {
        border-bottom: 1px solid #e5e5e5;
        width: 100%;
        margin-bottom: 20px;
    }

        .category-nav .kbws-list {
            width: 1160px;
            margin-bottom: 0;
            border-bottom: 0;
        }

    .kbws-list {
        margin: 0 auto;
    }

    .kbwsli {
        margin-right: 20px;
        text-align: center;
        display: inline-block;
    }

    element.style {
    }

    .af-wrapper .category-nav .kbws-list .kbwsli.active a, .af-wrapper .category-nav .kbws-list .kbwsli:hover a {
        border-bottom: 4px solid #111111;
    }

    .af-wrapper .category-nav .kbws-list .kbwsli a {
        font-family: SFPD-SemiBold;
    }

    .kbwsli.active a, .kbwsli:hover a {
        border-bottom: 4px solid #111111;
    }

    .kbwsli a {
        display: block;
        font-family: SFD-SemiBold;
        font-size: 15px;
        line-height: 40px;
        color: #333;
        text-decoration: none;
        text-transform: uppercase;
        border-bottom: 4px solid #fff;
        padding-top: 8px;
    }

    .category-nav .kbws-list .kbwsli a {
        font-family: SFPD-SemiBold;
    }

    .kbws-list .kbwsli:hover a {
        border-bottom: 4px solid #111111;
    }
</style>
