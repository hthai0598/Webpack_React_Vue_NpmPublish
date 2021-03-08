<template>
    <div @click="this.loadMore" class="load-more-cell">
        <a  class="load-more-btn">
            <b>Xem thêm</b>
            <i>
                <svg width="12"
                     height="6"
                     viewBox="0 0 12 6"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.73013 0.21967C1.03697 -0.0732233 1.53446 -0.0732233 1.8413 0.21967L6 4.18934L10.1587 0.21967C10.4655 -0.0732233 10.963 -0.0732233 11.2699 0.21967C11.5767 0.512563 11.5767 0.987437 11.2699 1.28033L6.55558 5.78033C6.24874 6.07322 5.75126 6.07322 5.44442 5.78033L0.73013 1.28033C0.42329 0.987437 0.42329 0.512563 0.73013 0.21967Z"
                          fill="#333333"></path>
                </svg>
            </i>
        </a>
    </div>
</template>

<script>
    export default {
        name: "BtnLoadMore",
        props: {
            loadMore: {
                type: Function,
                default: () => { }
            }
        }
    };
</script>

<style>
    .load-more-btn {
        cursor:pointer;
        display: flex;
        justify-content: center;
        height: 40px;
        border: 1px solid #e5e5e5;
        align-items: center;
        font-family: SFPD-SemiBold;
        font-size: 13px;
        color: #333;
    }

    .af_home20-wrapper .load-more-cell .load-more-btn i {
        margin-left: 5px;
    }
</style>