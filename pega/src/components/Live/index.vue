<template>
  <div class="update-news">
    <div class="thumb">
      <i>
        <img src="" alt="" />
        <span class="title">
          <span class="icn">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="12"
                height="12"
                rx="6"
                stroke="white"
                stroke-opacity="0.5"
              ></rect>
              <rect
                x="3"
                y="3.5"
                width="7"
                height="7"
                rx="3.5"
                fill="white"
              ></rect>
            </svg>
          </span>
          <span class="txt">cập nhật Diễn biến</span>
        </span>
      </i>
    </div>
    <div class="info">
      <a  class="cate">Thời sự</a>
      <a  class="title"
        >Phát hiện 24 hành khách mắc Covid-19 trên cùng một chuyến bay từ Nga về
        nước</a
      >
      <Source />
      <ul class="list-update-news">
        <li class="item">
          <CardTextLeft :sizeTitle="13" :showSource="false" :radius="true" type="smallThumb" :styleBinding="{width:'100%'}" :styleThumb="{maxWidth:'37px'}" :styleThumbChild="{height:'37px'}"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CardTextLeft from "@/components/Card/CardTextLeft";
import Thumb from "@/components/Thumb";
import Source from "@/components/Text/Source";
import TitleCard from "@/components/Text/TitleCard";
export default {
  name: "Live",
  components: { Thumb, CardTextLeft, Source, TitleCard },
  data() {
    return {};
  },
};
</script>

<style scoped>
.update-news {
  display: flex;
  justify-content: space-between;
}
.thumb {
  width: 48%;
  margin-right: 15px;
}
.update-news .thumb i {
  width: 100%;
  display: block;
  position: relative;
  padding-top: 133.5%;
  border-radius: 8px;
  overflow: hidden;
}

.update-news .thumb i img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.update-news .thumb i .title {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: 100%;
  box-sizing: border-box;
  background: #ff2626;
}
.update-news .thumb i .title .icn {
  display: flex;
}
.update-news .thumb i .title .txt {
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 10px;
  font-family: SFPD-SemiBold;
}

.update-news .info {
  width: 48%;
  display: flex;
  flex-direction: column;
}
.update-news .info .cate {
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #353535;
  font-family: SFPD-SemiBold;
  margin-bottom: 8px;
}
.update-news .info .title {
  font-size: 17px;
  line-height: 24px;
  color: #353535;
  font-family: SFPD-SemiBold;
  margin-bottom: 8px;
}
.update-news .info .list-update-news {
  border-top: 1px solid #f1f1f1;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
}
.update-news .info .list-update-news li {
  margin-bottom: 15px;
  padding-bottom: 0;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
