<template>
  <div class="afnews_box" type="gallery">
    <div class="thumb_box">
      <a  class="thumb_big thumb">
        <i style="background-image: url('@/assets/img/gallery-1.png')"></i>
      </a>
      <a  class="thumb_hoz-1 thumb_hoz">
        <i
          style="background-image: url('@/assets/img/gallery-2.png')"
        ></i>
      </a>
      <a  class="thumb_hoz-2 thumb_hoz">
        <i style="background-image: url('@/assets/img/gallery-3.png')"></i>
      </a>
      <div class="btn_gr">
        <BtnFunc
          type="img"
          title="12 Bức ảnh"
          color="#EEF4F9"
          hover="#f9f9f9"
        />
        <BtnFunc
          type="video"
          title="Xem slideshow"
          color="#EEF4F9"
          hover="#f9f9f9"
        />
      </div>
    </div>
    <Type title="Tiêu đề" type="" />
    <TitleCard title="Tiêu đề">
      <Preview />
      <Source />
    </TitleCard>
  </div>
</template>

<script>
import Source from "@/components/Text/Source";
import Preview from "@/components/Preview";
import TitleCard from "@/components/Text/TitleCard";
import BtnFunc from "@/components/Button/BtnFunc";
import Type from "@/components/Text/Type";
export default {
  name: "Gallery",
  components: { Preview, Source, TitleCard, BtnFunc, Type },
  data() {
    return {};
  },
};
</script>

<style scoped>
.afnews_box[type="gallery"] .thumb_big {
  grid-row: 1/4;
  grid-column: 1/1;
}
.afnews_box[type="gallery"] .thumb_hoz-1 {
  grid-row: 1/2;
  grid-column: 2/2;
}
.afnews_box[type="gallery"] .thumb_hoz-2 {
  grid-row: 2/3;
  grid-column: 2/2;
}

.af_home20-wrapper .afnews_box[type="gallery"] .btn_gr {
  grid-row: 3/4;
  grid-column: 2/2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.afnews_box[type="gallery"] .thumb_big i {
  padding-top: 142.16%;
}
.afnews_box[type="gallery"] .thumb_box {
  display: grid;
  grid-template: auto auto 75px / 370px 155px;
  grid-gap: 15px;
  margin-bottom: 15px;
}
.afnews_box[type="gallery"] {
  padding-bottom: 25px;
  border-bottom: 1px dashed #d6dce2;
  margin-bottom: 25px;
}
.afnews_box .thumb {
  display: block;
}

.afnews_box .thumb i {
  width: 100%;
  padding-top: 62.4%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
}
.af_home20-wrapper .afnews_box[type="gallery"] .thumb_hoz i {
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
</style>
