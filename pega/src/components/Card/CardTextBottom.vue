<template>
    <div v-if="this.data != null" :data-id="this.data.id" :type="this.type"
         class="afnews_box"
         :style="[
      line
        ? { borderBottom: '1px', borderStyle: 'dashed', borderColor: '#E5E5E5' }
        : { borderBottom: 'none' },
    ]">
        <slot />
        <Thumb :title="this.data.title" :onClick="this.openPopup" :img="this.data.image" :style="this.thumb" :radius="this.radius" />
        <slot name="carousel"></slot>
        <TitleCard v-if="this.positionTitleCard == 'top'"
                   :size="this.sizeTitle"
                   :title="this.data.title"
                   :titleCard="this.titleCard"
                   :onClick="this.openPopup"
                   :type="this.typeTitleCard" />
        <Source v-if="this.showSource && this.positionSource == 'top'"
                :size="13"
                :time="this.data.publishDate"
                :source="this.data.source" />
        <TitleCard v-if="this.positionTitleCard == 'bottom'"
                   :size="this.sizeTitle"
                   :title="this.data.title"
                   :titleCard="this.titleCard"
                   :type="this.typeTitleCard"
                   :onClick="this.openPopup" />
        <Preview v-if="this.showPreview" :preview="this.data.sapo" />
        <div class="afnews_tt">
            <Source v-if="this.showSource && this.positionSource == 'bottom'"
                    :size="13"
                    :time="this.data.publishDate"
                    :source="this.data.source" />
        </div>  
    </div>
</template>

<script>
    import { logic } from "@/utils/helper.js";

    import Preview from "@/components/Preview";
    import TitleCard from "@/components/Text/TitleCard";
    import Source from "@/components/Text/Source";
    import Thumb from "@/components/Thumb";
    import FunctionGroup2 from "@/components/FuncGroup/FunctionGroup2";
    export default {
        name: "CardTextBottom",
        props: {
            title: {
                default: "Tiêu đề",
            },
            typeTitleCard: {},
            titleCard: {},
            data: {
                default: null
            },
            line: {
                default: false,
            },
            type: {
                default: "midThumb",
            },
            sizeTitle: {
                default: 17,
            },
            showPreview: {
                default: false,
            },
            showSource: {
                default: true,
            },
            styleThumb: {},
            radius: {
                default: true,
            },
            positionTitleCard: {
                default: "bottom",
            },
            positionSource: {
                default: "bottom",
            },
            openPopup: {
                type: Function,
                default: () => { }
            },
        },
        components: { TitleCard, Source, Thumb, Preview, FunctionGroup2 },
        computed: {
            thumb: function () {
                let style = this.styleThumb;
                return { ...logic.thumbCase(this.type, "bottom"), ...style };
            },
        },
        data() {
            return {};
        },
    }
</script>

<style scoped>
    .af_home20-wrapper .afnews_box .thumb {
        display: block;
    }

    .af_home20-wrapper .afnews_box[type="bigThumb"] {
        padding-bottom: 25px;
        border-bottom: 1px dashed #e5e5e5;
        margin-bottom: 25px;
    }

    .af_home20-wrapper .afnews_box[type="midThumb"] {
        padding-bottom: 18px;
    }

    .afnews_tt {
        font-size: 13px;
        line-height: 16px;
        color: #555555;
        display: flex;
        align-items: center;
        font-family: SFPD-Regular;
        justify-content: space-between;
    }
</style>
