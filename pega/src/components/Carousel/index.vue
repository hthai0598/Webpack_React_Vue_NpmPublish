<template>
    <div class="carousel_root thumb-cont">
        <span style="z-index:100">
            <img @mouseleave="leave"
                 @mouseover="hover"
                 v-if="this.hoverPrev"
                 @click="action"
                 class="carousel_left"
                 width="40"
                 height="40"
                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
            <img @mouseleave="leave"
                 @mouseover="hover"
                 v-else
                 class="carousel_left"
                 width="40"
                 height="40"
                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwyLjQ0OTI5MzU5ODI5NDcwNjRlLTE2LC0yLjQ0OTI5MzU5ODI5NDcwNjRlLTE2LDEsMi44NDIxNzA5NDMwNDA0MDFlLTE0LDApIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0xNDUuMTg4LDIzOC41NzVsMjE1LjUtMjE1LjVjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFzLTEzLjgtNS4zLTE5LjEsMGwtMjI1LjEsMjI1LjFjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xbDIyNS4xLDIyNSAgIGMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFMMTQ1LjE4OCwyMzguNTc1eiIgZmlsbD0iI2VkZWRlZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
        </span>
        <ul :style="{ ...styleImg }" class="carousel_list">
            <li  :style="{minWidth:widthImg}"
                class="carousel_item"
                v-for="(item, index) in this.imgs"
                :key="index">
                <img :src="item" />
            </li>

        </ul>
        <span style="z-index:100">
            <img @mouseleave="leave"
                 @mouseover="hover"
                 v-if="this.hoverNext"
                 @click="action"
                 class="carousel_right"
                 width="40"
                 height="40"
                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsLTEuMjI0NjQ2Nzk5MTQ3MzUzMmUtMTYsMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMSw0NzcuMTc1OTMzODM3ODkwNTcsNDc3LjE3NDk4MDY0MDQxMTUpIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0xNDUuMTg4LDIzOC41NzVsMjE1LjUtMjE1LjVjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFzLTEzLjgtNS4zLTE5LjEsMGwtMjI1LjEsMjI1LjFjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xbDIyNS4xLDIyNSAgIGMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFMMTQ1LjE4OCwyMzguNTc1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
            <img @mouseleave="leave"
                 @mouseover="hover"
                 v-else
                 class="carousel_right"
                 width="40"
                 height="40"
                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsLTEuMjI0NjQ2Nzk5MTQ3MzUzMmUtMTYsMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMSw0NzcuMTc1OTMzODM3ODkwNTcsNDc3LjE3NDk4MDY0MDQxMTUpIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0xNDUuMTg4LDIzOC41NzVsMjE1LjUtMjE1LjVjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFzLTEzLjgtNS4zLTE5LjEsMGwtMjI1LjEsMjI1LjFjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xbDIyNS4xLDIyNSAgIGMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFMMTQ1LjE4OCwyMzguNTc1eiIgZmlsbD0iI2VkZWRlZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
        </span>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: {
            imgs: {
                default: () => [
                    "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png",
                    "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png",
                    "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png",
                    "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png",
                    "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png",
                    "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png",
                ],
            },
            styleImg: {
                default: () => {
                    return {  height: "120px" };
                },
            },
            step: {
                default: 1,
            },
            widthImg: {
                default: "180px"
            }
        },
        computed: {
            widthBox: function () {
                const width = this.width.replace("%", "").replace("px", "");
                return width;
            },
            widthContainer: function () {
                const width = this.$el.offsetWidth;
                return width;
            },
        },
        methods: {
            action: function (e) {
                e.preventDefault();
                const elmList = this.$el.querySelectorAll(".carousel_item");
                const widthContainer = this.widthContainer; ///width list chứa block
                const widthBox = this.widthBox; ///width của block
                const step = this.step * widthBox; /// tính ra mỗi lần click sẽ trôi bn px
                let stepClick = Math.floor(elmList.length / this.step); // số lần click để hết block
                let condition =
                    (widthBox * elmList.length) - widthContainer + 10 * (elmList.length - 1); //tính ra chiều dài của width tất cả các block
                //Next
                if (e.target.classList.contains("carousel_right")) {
                    this.index = this.index + 1;
                    let posMove = step * this.index * -1; //số px scroll
                    let conditionNext = (condition + 20) * -1; //
                    if (posMove < conditionNext) {
                        !this.max ? (this.max = true) : "";
                        if (this.step == 1) {
                            stepClick = this.index;
                        }
                        this.remember = posMove;
                        posMove = conditionNext;
                    }
                    if (this.index == 1) {
                        this.$el.children[1].style.transform = `translateX(-${step}px)`
                    }
                    if (this.index < stepClick) {
                        this.$el.children[1].style.transform = `translateX(${posMove}px)`
                    }
                    if (this.index >= stepClick) {
                        this.index = stepClick - 1;
                    }
                } else if (e.target.classList.contains("carousel_left")) {
                    this.index > 0 ? (this.index = this.index - 1) : (this.index = 0);
                    this.max ? (this.max = false) : "";
                    if (this.index >= 0) {
                        if (this.index == 1) {
                            this.$el.children[1].style.transform = `translateX(-${step}px)`
                        }
                        if (this.index <= stepClick) {
                            this.$el.children[1].style.transform = `translateX(-${step * this.index}px)`
                        }
                        if (this.index < 0) {
                            this.index = 0;
                        }
                    }
                }
            },
            hover: function (e) {
                if (e.target.classList.contains("carousel_left") && this.index != 0) {
                    this.hoverPrev = true;
                } else if (
                    e.target.classList.contains("carousel_right") &&
                    this.max == false
                ) {
                    this.hoverNext = true;
                }
            },
            leave: function (e) {
                if (e.target.classList.contains("carousel_left")) {
                    this.hoverPrev = false;
                } else if (e.target.classList.contains("carousel_right")) {
                    this.hoverNext = false;
                }
            },
        },
        components: {},
        data() {
            return {
                index: 0,
                width: this.widthImg,
                hoverPrev: false,
                hoverNext: false,
                max: false,
                pos: {}
            };
        },
    };
</script>

<style scoped>
    .carousel_root {
        width: 100%;
        position: relative;
        overflow: hidden;
        margin-bottom: 15px;
    }

    .carousel_list {
        width: 100%;
        margin: 10px auto;
        display: flex;
        justify-content: left;
        position: relative;
        transform: translateX(0);
        transition: 0.5s
    }

        .carousel_list::-webkit-scrollbar {
            display: none;
        }

    .carousel_item {
        border: 1px solid black;
        height: auto;
        position: relative;
        left: 0;
        text-align: center;
        margin-right: 10px;
        border-radius: 8px;
        box-sizing: border-box;
    }

        .carousel_item img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

    span {
        position: absolute;
        top: 35%;
        font-size: 30px;
        font-weight: bold;
        color: red;
        cursor: pointer;
        z-index: 1;
    }

        span:nth-of-type(2) {
            left: 93%;
            text-align: right;
        }

    .thumb-cont::before {
        position: absolute;
        content: '';
        width: 15%;
        height: 100%;
        background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        top: 0;
        right: 0;
        z-index: 2;
    }
</style>
