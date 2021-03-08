<template>
    <div v-if="this.data != null" kind="row_reverse" :data-id="this.data.id"
         :type="this.type"
         class="afnews_box af_flx row_reverse"
         :style="[
      line
        ? { borderBottom: '1px', borderStyle: 'dashed', borderColor: '#E5E5E5' }
        : { borderBottom: 'none' },
      ...this.styleBinding,
    ]">
        <Thumb :title="this.data.title" :onClick="this.openPopup"
               :img="this.data.image"
               :radius="this.radius"
               :style="this.thumb"
               :styleThumbChild="this.styleThumbChild" />
        <TitleCard :onClick="this.openPopup" :size="this.sizeTitle" :title="this.data.title">
            <Source v-if="this.showSource"
                    :size="11"
                    time="this.data.publishDate"
                    source="this.data.source" />
            <Preview v-if="this.showPreview" :preview="this.data.sapo" />
        </TitleCard>
    </div>
</template>

<script>
    import { logic } from "@/utils/helper.js";

    import Preview from "@/components/Preview";
    import TitleCard from "@/components/Text/TitleCard";
    import Source from "@/components/Text/Source";
    import Thumb from "@/components/Thumb";
    export default {
        name: "CardTextLeft",
        components: { Source, TitleCard, Thumb, Preview },
        props: {
            data: {
                default: null
            },
            styleBinding: {
                marginLeft: "10px",
            },
            line: {
                default: false,
            },
            type: {
                default: "smallThumb",
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
            styleThumbChild: {},
            radius: {
                default: false,
            },
            openPopup: {
                type: Function,
                default: () => { }
            },
        },
        computed: {
            thumb: function () {
                let style = this.styleThumb;
                return {
                    ...logic.thumbCase(this.type),
                    marginRight: "0px",
                    marginLeft: "10px",
                    ...style,
                };
            },
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .af_flx {
        display: flex;
        align-items: flex-start;
    }

    .afnews_box.af_flx.row_reverse {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
</style>
