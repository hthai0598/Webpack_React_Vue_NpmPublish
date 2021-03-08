<template>
    <a :title-event="this.titleEvent" :title="this.title" @click="this.onClick" class="thumb" :style="{ ...styleBinding }">
        <i :style="[
        this.radius ? { borderRadius: '8px' } : { borderRadius: '0px' },
        this.img != ''
          ? { backgroundImage: 'url(' + this.img + ')' }
          : {
              backgroundImage:
                'url()',
            },
        ...styleThumbChild,
      ]"></i>
    </a>
</template>

<script>
    export default {
        name: "Thumb",
        props: {
            styleBinding: {},
            radius: {
                default: true,
            },
            img: {
                default: "",
            },
            onClick: {
                type: Function,
                default: () => { }
            },
            title: {

            },
            titleEvent: {

            },
            styleThumbChild: {},
        },
        components: {},
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .thumb i {
        width: 100%;
        padding-top: 62.4%;
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    .thumb {
        cursor: pointer;
        display: block;
    }
</style>
