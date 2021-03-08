<template>
    <div class="cate-box">
        <h3 class="cate-label">{{this.title}}</h3>
        <ul class="list-cate" v-if="this.data != null">
            <Box v-for="(item,index) in this.data" :data="item"  :key="index"/>
        </ul>
    </div>
</template>

<script>
    import Box from "@/components/Box/CateBox/Box";
    export default {
        name: "CateBox",
        components: { Box },
        props: {
            data: {
                default: null
            },
            title: {
                default:"Chuyên mục"
            }
        },
        data() {
            return {
            };
        },
    };
</script>

<style scoped>
    .cate-box {
        width: 700px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

        .cate-box .cate-label {
            font-size: 15px;
            line-height: 20px;
            color: #8e8e8e;
            font-family: SFPD-SemiBold;
            margin-bottom: 15px;
        }

    .list-cate {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
