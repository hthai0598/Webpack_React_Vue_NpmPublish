<template>
  <div class="afnews_box" type="tutorial">
    <div class="thumb_box">
      <Thumb :styleBinding="{ flexShrink: '0', width: '370px' }" />
      <div class="howto">
        <TypeBox />
        <TypeBox />
        <BtnFunc type="video" title="Xem ngay" />
      </div>
    </div>
    <Type title="Tiêu đề" type=""/>
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
import TypeBox from "@/components/Text/TypeBox";
import Type from "@/components/Text/Type";
import Thumb from "@/components/Thumb";
import BtnFunc from "@/components/Button/BtnFunc";
export default {
  name: "Tutorial",
  components: { Thumb, TypeBox, BtnFunc, TitleCard, Preview, Source, Type },
  data() {
    return {};
  },
};
</script>

<style scoped>
.afnews_box[type="tutorial"] .thumb_box .howto {
  flex-grow: 1;
  padding: 11px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.afnews_box[type="tutorial"] .thumb_box {
  margin-bottom: 15px;
  display: flex;
  background: #eef4f9;
}
</style>
