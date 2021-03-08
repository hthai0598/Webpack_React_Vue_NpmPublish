<template>
  <a href="/dang-nhap.htm" class="act-link">
    <span class="icn">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.6498 7.7C4.5267 7.7 2.7998 5.9731 2.7998 3.85C2.7998 1.7269 4.5267 0 6.6498 0C8.7729 0 10.4998 1.7269 10.4998 3.85C10.4998 5.9731 8.7729 7.7 6.6498 7.7ZM6.6498 0.7C4.9131 0.7 3.4998 2.1133 3.4998 3.85C3.4998 5.5867 4.9131 7 6.6498 7C8.3865 7 9.7998 5.5867 9.7998 3.85C9.7998 2.1133 8.3865 0.7 6.6498 0.7Z"
          fill="#555555"
        ></path>
        <path
          d="M12.25 14H1.05C0.4711 14 0 13.5289 0 12.95C0 12.9024 0.00980004 11.7705 0.8575 10.64C1.351 9.98202 2.0265 9.45912 2.8658 9.08672C3.8906 8.63102 5.1639 8.40002 6.65 8.40002C8.1361 8.40002 9.4094 8.63102 10.4342 9.08672C11.2735 9.45982 11.949 9.98202 12.4425 10.64C13.2902 11.7705 13.3 12.9024 13.3 12.95C13.3 13.5289 12.8289 14 12.25 14ZM6.65 9.10002C4.2091 9.10002 2.408 9.76712 1.4413 11.0292C0.7168 11.9749 0.7007 12.9416 0.7 12.9514C0.7 13.1432 0.8568 13.3 1.05 13.3H12.25C12.4432 13.3 12.6 13.1432 12.6 12.95C12.6 12.9416 12.5839 11.9749 11.8587 11.0292C10.8913 9.76712 9.0902 9.10002 6.65 9.10002Z"
          fill="#555555"
        ></path>
      </svg>
    </span>
    <span class="txt">Đăng nhập</span>
  </a>
</template>

<script>
export default {
  name: "BtnLogin",
  props: {
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.act-link {
  padding: 7px 20px;
  background: #f1f1f1;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.act-link .txt {
  font-size: 13px;
  line-height: 16px;
  color: #555555;
  font-family: SFPD-Regular;
  margin-left: 9px;
}
</style>
