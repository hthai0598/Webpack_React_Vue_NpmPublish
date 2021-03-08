<template>
  <h4 class="label-news">{{ title }}</h4>
</template>

<script>
export default {
  name: "LabelNewH2",
  props: ["title"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.label-news {
  font-size: 22px;
  line-height: 28px;
  color: #161616;
  font-family: SFPD-SemiBold;
  margin-bottom: 15px;
}
</style>
