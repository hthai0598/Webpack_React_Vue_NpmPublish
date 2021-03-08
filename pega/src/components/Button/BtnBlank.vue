<template>
    <div @click="this.onClick"
         class="pbc-expand">
        <a  target="_blank" :title="this.titlePost" rel="nofollow" :href="this.href" @click="onclick" class="blog-expand-btn">
            <b>Đọc đầy đủ</b>
            <i>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.6 3.5C2.41435 3.5 2.2363 3.57375 2.10503 3.70503C1.97375 3.8363 1.9 4.01435 1.9 4.2V11.9C1.9 12.0857 1.97375 12.2637 2.10503 12.395C2.2363 12.5263 2.41435 12.6 2.6 12.6H10.3C10.4857 12.6 10.6637 12.5263 10.795 12.395C10.9262 12.2637 11 12.0857 11 11.9V7.7C11 7.3134 11.3134 7 11.7 7C12.0866 7 12.4 7.3134 12.4 7.7V11.9C12.4 12.457 12.1787 12.9911 11.7849 13.3849C11.3911 13.7787 10.857 14 10.3 14H2.6C2.04304 14 1.5089 13.7787 1.11508 13.3849C0.721249 12.9911 0.5 12.457 0.5 11.9V4.2C0.5 3.64305 0.721249 3.1089 1.11508 2.71508C1.5089 2.32125 2.04305 2.1 2.6 2.1H6.8C7.1866 2.1 7.5 2.4134 7.5 2.8C7.5 3.1866 7.1866 3.5 6.8 3.5H2.6Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.6 3.5C2.41435 3.5 2.2363 3.57375 2.10503 3.70503C1.97375 3.8363 1.9 4.01435 1.9 4.2V11.9C1.9 12.0857 1.97375 12.2637 2.10503 12.395C2.2363 12.5263 2.41435 12.6 2.6 12.6H10.3C10.4857 12.6 10.6637 12.5263 10.795 12.395C10.9262 12.2637 11 12.0857 11 11.9V7.7C11 7.3134 11.3134 7 11.7 7C12.0866 7 12.4 7.3134 12.4 7.7V11.9C12.4 12.457 12.1787 12.9911 11.7849 13.3849C11.3911 13.7787 10.857 14 10.3 14H2.6C2.04304 14 1.5089 13.7787 1.11508 13.3849C0.721249 12.9911 0.5 12.457 0.5 11.9V4.2C0.5 3.64305 0.721249 3.1089 1.11508 2.71508C1.5089 2.32125 2.04305 2.1 2.6 2.1H6.8C7.1866 2.1 7.5 2.4134 7.5 2.8C7.5 3.1866 7.1866 3.5 6.8 3.5H2.6Z" fill="#1F9FFC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9 0.7C8.9 0.313401 9.2134 2.08616e-08 9.6 2.08616e-08H13.8C14.1866 2.08616e-08 14.5 0.313401 14.5 0.7V4.9C14.5 5.2866 14.1866 5.6 13.8 5.6C13.4134 5.6 13.1 5.2866 13.1 4.9V1.4H9.6C9.2134 1.4 8.9 1.0866 8.9 0.7Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9 0.7C8.9 0.313401 9.2134 2.08616e-08 9.6 2.08616e-08H13.8C14.1866 2.08616e-08 14.5 0.313401 14.5 0.7V4.9C14.5 5.2866 14.1866 5.6 13.8 5.6C13.4134 5.6 13.1 5.2866 13.1 4.9V1.4H9.6C9.2134 1.4 8.9 1.0866 8.9 0.7Z" fill="#1F9FFC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.295 0.205025C14.5683 0.478392 14.5683 0.921608 14.295 1.19497L7.99497 7.49497C7.72161 7.76834 7.27839 7.76834 7.00502 7.49497C6.73166 7.22161 6.73166 6.77839 7.00502 6.50503L13.305 0.205025C13.5784 -0.0683418 14.0216 -0.0683418 14.295 0.205025Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.295 0.205025C14.5683 0.478392 14.5683 0.921608 14.295 1.19497L7.99497 7.49497C7.72161 7.76834 7.27839 7.76834 7.00502 7.49497C6.73166 7.22161 6.73166 6.77839 7.00502 6.50503L13.305 0.205025C13.5784 -0.0683418 14.0216 -0.0683418 14.295 0.205025Z" fill="#1F9FFC" />
                </svg>
            </i>
        </a>
    </div>
</template>

<script>
    export default {
        name: "BtnBtnBlank",
        components: {},
        props: {
            onClick: {
                type: Function,
                default: () => { },
            },
            status: {
                default: false,
            },
            href: {
                default: null
            },
            titlePost: {
            }
        },
        data() {
            return {
                title: 'Đọc đầy đủ'
            };
        },
        methods: {
            onclick: function (e) {
                if (this.type == 0) {
                    e.preventDefault()
                }
                else {
                    e.preventDefault();
                    //document.title = this.titlePost
                    window.open(this.href, '_blank');
                }
            }
        },
        created() {
        }
    };
</script>

<style scoped>
    .pbc-expand {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        justify-content: center;
        align-items: flex-end;
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
