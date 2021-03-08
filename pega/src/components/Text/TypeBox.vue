<template>
  <div class="type_box">
    <div class="type">{{ title }}</div>
    <div class="text">{{ title2 }}</div>
  </div>
</template>

<script>
export default {
  name: "TypeBox",
  props: {
    title: {
      default: "title",
    },
    title2: {
      default: "title2",
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.afnews_box .type_box .type {
  font-size: 13px;
  line-height: 16px;
  font-family: SFPD-Regular;
  color: #888888;
  margin-bottom: 6px;
}

.afnews_box .type_box .text {
  font-size: 14px;
  line-height: 16px;
  font-family: SFPD-SemiBold;
  color: #555555;
}
.afnews_box .type_box {
  margin-bottom: 12px;
}
.af_home20-wrapper .afnews_box .type_box + .type_box {
  margin-bottom: 20px;
}
</style>
