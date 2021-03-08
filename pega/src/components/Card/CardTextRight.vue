<template>
    <div v-if="this.data != null" :data-id="this.data.id" :type="this.type"
         class="afnews_box af_flx"
         :style="[
      line
        ? { borderBottom: '1px', borderStyle: 'dashed', borderColor: '#E5E5E5' }
        : { borderBottom: 'none' },
    ]">
        <Thumb :title="this.data.title" :styleBinding="this.thumb" :img="this.data.image" :onClick="this.openPopup" />
        <TitleCard :id ="this.data.idx"
                   :linkTitleCard="this.linkTitleCard"
                   :onClick="this.openPopup"
                   :positionSource="this.positionSource"
                   :size="this.sizeTitle"
                   :title="this.data.title"
                   :titleCard="this.titleCard"
                   :type="this.typeTitleCard">
            <Source v-if='this.showSource && this.positionSource == "top"'
                    :size="this.sizeSource"
                    :time="this.data.publishDate"
                    :source="this.data.source" />
            <Preview v-if="this.showPreview" :preview="this.data.sapo" />
            <div class="afnews_tt">
                <Source v-if='this.showSource && this.positionSource == "bottom"'
                        :size="this.sizeSource"
                        :time="this.data.publishDate"
                        :styleSource="{marginBottom:'0px'}"
                        :source="this.data.source" />
                <FunctionGroup2 v-show="this.func && this.showFunc == 'func2'" v-if="this.type == 'midThumb'" />
            </div>
            <FuncGroup v-show="this.func && this.showFunc == 'func1'" v-if="this.type == 'midThumb'" />
        </TitleCard>
    </div>
</template>

<script>
    import { logic } from "@/utils/helper.js";

    import Preview from "@/components/Preview";
    import FunctionGroup2 from "@/components/FuncGroup/FunctionGroup2";
    import FuncGroup from "@/components/FuncGroup";
    import TitleCard from "@/components/Text/TitleCard";
    import Source from "@/components/Text/Source";
    import Thumb from "@/components/Thumb";
    export default {
        name: "CardTextRight",
        components: {
            Source,
            TitleCard,
            Thumb,
            Preview,
            FunctionGroup2,
            FuncGroup
        },
        methods: {
            hover: function () {
                this.func = true
            },
            leave: function () {
                this.func = false
            }
        },
        props: {
            data: {
                default: null
            },
            openPopup: {
                type: Function,
                default: () => { }
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
            sizeSource: {
                default: 11,
            },
            showPreview: {
                default: false,
            },
            showSource: {
                default: true,
            },
            positionSource: {
                default: "top",
            },
            styleThumb: {},
            titleCard: {},
            linkTitleCard: {},
            typeTitleCard: {},
            showFunc: {
                default: null
            }
        },
        computed: {
            thumb: function () {
                let style = this.styleThumb;
                return {
                    ...logic.thumbCase(this.type),
                    marginRight: "10px",
                    ...style,
                };
            },
        },
        data() {
            return {
                func: false
            };
        },
        mounted() {
            if (this.showFunc == 'func1' || this.showFunc == 'func2') {
                this.$el.addEventListener('mouseover', this.hover);
                this.$el.addEventListener('mouseleave', this.leave);
            }
        }

    };
</script>

<style scoped>
    .af_flx {
        display: flex;
        align-items: flex-start;
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
