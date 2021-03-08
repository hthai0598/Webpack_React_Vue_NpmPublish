<template>
  <h4 class="label">{{ title }}</h4>
</template>

<script>
export default {
  name: "LableNewH3",
  props: ["title"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.label {
  font-size: 17px;
  line-height: 24px;
  color: #161616;
  margin-bottom: 10px;
  font-family: SFPD-SemiBold;
}
</style>
