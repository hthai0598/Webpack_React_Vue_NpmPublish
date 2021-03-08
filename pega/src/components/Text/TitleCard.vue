<template>
    <div class="afnews_total">
        <Type v-if="this.titleCard != ''"
              :id="this.id"
              :titleCard="this.titleCard"
              :type="this.type"
              :linkTitleCard="this.linkTitleCard" />
        <a :title="this.title"
           @click="this.onClick"
           class="afnews_title line-clam4"
           :style="{ fontSize: this.size + 'px' }">
            {{ title }}
        </a>
        <slot />
    </div>
</template>

<script>
    import Type from "@/components/Text/Type";
    export default {
        name: "TitleCard",
        props: {
            size: {
                default: 17,
            },
            linkTitleCard: {},
            id: {},
            title: {
            },
            titleCard: {
                default: "",
            },
            type: {
                default: "",
            },
            positionSource: {},
            onClick: {
                type: Function,
                default: () => { }
            }
        },
        components: {
            Type,
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .afnews_title {
        font-family: SFPD-SemiBold;
        line-height: 140%;
        color: #111111;
        display: block;
        word-break: break-word;
        cursor: pointer
    }

    .line-clam4 {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .afnews_title:hover {
        color: #666666;
    }
</style>
