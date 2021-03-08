<template>
    <li :type="this.data.type" :data-id="this.data.id" v-if="this.data != null" class="cate-item">
        <a :title="this.data.name" class="thumb">
            <img :src="this.data.image" alt="null" />
        </a>
        <div class="info">
            <a :title="this.data.name">{{this.data.name}}</a>
            <span class="des"></span>
        </div>
        <!--<a @click="this.action" href="" class="close-cate">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79079 0.209209C10.0697 0.488155 10.0697 0.940416 9.79079 1.21936L1.21936 9.79079C0.940416 10.0697 0.488155 10.0697 0.209209 9.79079C-0.0697365 9.51184 -0.0697365 9.05958 0.209209 8.78064L8.78064 0.209209C9.05958 -0.0697365 9.51184 -0.0697365 9.79079 0.209209Z" fill="white"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.209209 0.209209C0.488155 -0.0697365 0.940416 -0.0697365 1.21936 0.209209L9.79079 8.78064C10.0697 9.05958 10.0697 9.51184 9.79079 9.79079C9.51184 10.0697 9.05958 10.0697 8.78064 9.79079L0.209209 1.21936C-0.0697365 0.940416 -0.0697365 0.488155 0.209209 0.209209Z" fill="white"></path>
            </svg>
        </a>-->
    </li>
</template>

<script>
    import axios from 'axios';
    import { apiWeb } from '@/utils/common.js';
    import { commonHelper } from '@/utils/helper.js';

    export default {
        name: "Box",
        props: {
            data: {
                default: null
            },
        },
        methods: {
            action: function (e) {
                e.preventDefault();
                const id = this.$el.getAttribute('data-id')
                let config = commonHelper.checkJwt(this.$root.user);
                const unFollow = "0";
                let data = {
                    guid: config[0].toString(),
                    uid: config[1],
                    cateid: id,
                    follow: unFollow
                }
                if (this.data.type == 2) { //Chuyên mục
                    axios.post(apiWeb.actionCm(), data, config[2]).then(rs => {
                        if (rs.data.status == 'ok') {
                            this.$destroy();
                            this.$el.parentNode.removeChild(this.$el);
                        }
                    })
                }
                else if (this.data.type == 1) { //Chuyên trang
                    axios.post(apiWeb.actionCt(), data, config[2])
                }

            }
        },
        components: {},
    };
</script>

<style scoped>
    .cate-item {
        width: 48.5%;
        display: flex;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        position: relative;
        margin-bottom: 20px;
    }

    .thumb {
        width: 50px;
        height: 50px;
        display: block;
        margin-right: 10px;
    }

        .thumb > img {
            width: 100%;
        }

    .cate-item .info {
        display: flex;
        flex-direction: column;
    }

    .info a {
        font-size: 15px;
        line-height: 20px;
        color: #353535;
        font-family: SFPD-SemiBold;
    }

    .info .des {
        font-size: 13px;
        line-height: 16px;
        color: #8e8e8e;
        font-family: SFPD-Regular;
    }

    .list-cate .cate-item .close-cate {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
        width: 24px;
        height: 24px;
        background: #aaaaaa;
        border-radius: 100px;
        display: none;
        align-items: center;
        justify-content: center;
    }

    .list-cate .cate-item:hover .close-cate {
        display: flex;
    }
</style>
