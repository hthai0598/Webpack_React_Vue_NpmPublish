<template>
    <div @click="this.onClick"
         class="pbc-expand"
         :style="[this.status ? { display: 'none' } : { display: 'flex' }]">
        <a @click="onclick" class="blog-expand-btn">
            <b>Đọc tiếp</b>
            <i>
                <svg width="16"
                     height="10"
                     viewBox="0 0 16 10"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.334735 0.829505C0.781049 0.390165 1.50467 0.390165 1.95098 0.829505L8 6.78401L14.049 0.829505C14.4953 0.390165 15.219 0.390165 15.6653 0.829505C16.1116 1.26884 16.1116 1.98116 15.6653 2.4205L8.80812 9.1705C8.36181 9.60983 7.63819 9.60983 7.19188 9.1705L0.334735 2.4205C-0.111578 1.98116 -0.111578 1.26884 0.334735 0.829505Z"
                          fill="#1F9FFC"></path>
                </svg>
            </i>
        </a>
    </div>
</template>

<script>
    export default {
        name: "BtnFadeContent",
        components: {},
        props: {
            onClick: {
                type: Function,
                default: () => { },
            },
            status: {
                default: false,
            },
            type: {
                default: 1
            },
            href: {
                default: null
            }
        },
        data() {
            return {
            };
        },
        methods: {
            onclick: function (e) {
                e.preventDefault()
            }
        },
    };
</script>

<style scoped>
    .pbc-expand {
        display: flex;
        z-index:100000;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        justify-content: center;
        align-items: flex-end;
        cursor:pointer;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    }

    .blog-expand-btn {
        display: inline-flex;
        height: 48px;
        padding: 0 25px;
        font-weight: bold;
        color: #1f9ffc;
        font-size: 16px;
        grid-column-gap: 10px;
        background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%);
        border: 2px solid #1f9ffc;
        box-sizing: border-box;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 100px;
        align-items: center;
    }
</style>
