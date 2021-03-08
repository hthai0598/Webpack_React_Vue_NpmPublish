<template>
    <div class="afcategory">
        <h4 :class="this.line ? 'afcate_heading' : 'afcate_headingNone'">
            <a :href="this.hrefData" :title="this.title" @click="this.click" :class="this.line ? 'text' : 'textNone'">{{ title }}</a>
        </h4>
        <slot />
    </div>
</template>

<script>
    export default {
        name: "Jumbotron",
        props: {
            title: {
                default: "Tiêu đề",
            },
            line: {
                default: true,
            },
            hrefData: {
                default: ""
            }
        },
        data() {
            return {};
        },
        methods: {
            click: function (e) {
                if (this.title == 'Sự kiện nổi bật' || this.title == 'Chủ đề nổi bật') {
                    e.preventDefault()
                }
                else {
                    window.location.href = this.hrefData
                }
            }
        }
    };
</script>

<style scoped>
    .afcategory {
        margin-bottom: 25px;
        padding: 15px;
        background: #f1f1f1;
    }

        .afcategory .afcate_heading {
            cursor: pointer;
            border-bottom: 1px solid #d6dce2;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .afcategory .afcate_headingNone {
            cursor: pointer;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .afcategory .afcate_heading .text {
            font-size: 18px;
            line-height: 140%;
            font-family: SFPD-Bold;
            text-transform: uppercase;
            /*padding-bottom: 7px;*/
            display: inline-block;
            border-bottom: 2px solid #161616;
            color: #161616;
        }

        .afcategory .afcate_headingNone .textNone {
            font-size: 18px;
            line-height: 140%;
            font-family: SFPD-Bold;
            text-transform: uppercase;
            padding-bottom: 7px;
            display: inline-block;
            color: #161616;
        }
</style>
