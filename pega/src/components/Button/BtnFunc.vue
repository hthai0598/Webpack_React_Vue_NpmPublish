<template>
  <a
    @mouseleave="this.onLeave"
    @mouseover="this.onHover"
    class="btnfunc"
    :style="{ background: this.color, fontSize: this.size }"
  >
    <span v-if="type == 'video'" class="icn">
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6742 6.15634C12.2917 6.54929 12.2917 7.45071 11.6742 7.84366L3.53688 13.022C2.87115 13.4456 2 12.9674 2 12.1783L2 1.82167C2 1.03258 2.87115 0.554369 3.53688 0.978012L11.6742 6.15634Z"
          fill="#888888"
        ></path>
      </svg>
    </span>
    <span v-if="type == 'img'" class="icn">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5 3H3V2H11.5C12.3284 2 13 2.67157 13 3.5V12H12V3.5C12 3.22386 11.7761 3 11.5 3Z"
          fill="#888888"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5 1H5V0H13.5C14.3284 0 15 0.671573 15 1.5V10H14V1.5C14 1.22386 13.7761 1 13.5 1Z"
          fill="#888888"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.65 5.1C1.34624 5.1 1.1 5.34624 1.1 5.65V13.35C1.1 13.6538 1.34624 13.9 1.65 13.9H9.35C9.65376 13.9 9.9 13.6538 9.9 13.35V5.65C9.9 5.34624 9.65376 5.1 9.35 5.1H1.65ZM0 5.65C0 4.73873 0.73873 4 1.65 4H9.35C10.2613 4 11 4.73873 11 5.65V13.35C11 14.2613 10.2613 15 9.35 15H1.65C0.73873 15 0 14.2613 0 13.35V5.65Z"
          fill="#888888"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.575 7.3C3.42312 7.3 3.3 7.42312 3.3 7.575C3.3 7.72688 3.42312 7.85 3.575 7.85C3.72688 7.85 3.85 7.72688 3.85 7.575C3.85 7.42312 3.72688 7.3 3.575 7.3ZM2.2 7.575C2.2 6.81561 2.81561 6.2 3.575 6.2C4.33439 6.2 4.95 6.81561 4.95 7.575C4.95 8.33439 4.33439 8.95 3.575 8.95C2.81561 8.95 2.2 8.33439 2.2 7.575Z"
          fill="#888888"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.31109 8.01109C7.52588 7.7963 7.87412 7.7963 8.08891 8.01109L10.8389 10.7611C11.0537 10.9759 11.0537 11.3241 10.8389 11.5389C10.6241 11.7537 10.2759 11.7537 10.0611 11.5389L7.7 9.17782L2.03891 14.8389C1.82412 15.0537 1.47588 15.0537 1.26109 14.8389C1.0463 14.6241 1.0463 14.2759 1.26109 14.0611L7.31109 8.01109Z"
          fill="#888888"
        ></path>
      </svg>
    </span>
    <span class="txt"> {{ title }} </span>
  </a>
</template>

<script>
export default {
  name: "BtnFunc",
  props: {
    title: {
      default: "title",
    },
    type: {
      default: "video",
    },
    color: {
      default: "#ffffff",
    },
    hover: {
      default: "#f9f9f9",
    },
    size: {
      default: 16,
    },
  },
  methods: {
    onHover: function () {
      this.$el.style.background = this.hover;
    },
    onLeave: function () {
      this.$el.style.background = this.color;
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.btnfunc {
  background: #ffffff;
  border-radius: 6px;
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  box-sizing: border-box;
}
.btnfunc .icn {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.btnfunc .txt {
  font-size: 13px;
  line-height: 16px;
  font-family: SFPD-SemiBold;
  display: block;
  color: #555555;
}
</style>
