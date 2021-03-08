import { commonHelper } from "@/utils/helper";
export const thumb = {
    "bigThumb": {
        marginBottom: "10px"
    },
    "midThumb": {
        width: "260px",
        marginRight: "20px",
        marginBottom: "0px",
    },
    "smallThumb": {
        width: "80px",
        flexShrink: "0",
        marginRight: "10px",
    }
}
const origin = {
    gate: "https://apigate.cnnd.vn"
}
export const iconBtnFunc = {
    Video: "video",
    Img: "img"
}


export const apiWeb = {
    //3 tin đầu
    firstNews: function (domainApi = origin.gate, guid = -1, id = -1) {
        //let api = `http://pega.aiservice.vn/api/v1/news?news=first_news&guid=${guid}&uid=${id}`;
        let api = `${domainApi}/webpega/news?news=first_news&guid=${guid}&uid=${id}`;
        return api;

    },
    //(list tin bên cạnh 3 tin đầu)
    topnews: function (domainApi = origin.gate, guid = - 1, id = -1) {
        //let api = ` http://pega.aiservice.vn/api/v1/news?news=top_news&guid=${guid}&uid=${id}`;
        let api = `${domainApi}/webpega/news?news=top_news&guid=${guid}&uid=${id}`;
        return api;

    },
    //tin của bạn
    streamForYou: function (domainApi = origin.gate, guid = -1, id = -1, page = 0, size = 10) {
        //let api = `http://pega.aiservice.vn/api/v1/news?news=news_4u&guid=${guid}&uid=${id}&page=${page}&page_size=${size}`;
        let api = `${domainApi}/webpega/news?news=news_4u&guid=${guid}&uid=${id}&page=${page}&page_size=${size}`;
        return api;
    },
    //sự kiện nổi bật
    bigEvent: function (domainApi = origin.gate, guid = -1, id = -1, page = 0) {
        //let api = `http://pega.aiservice.vn/api/v1/topic?topic=hot_events&guid=${guid}&uid=${id}&page=${page}`;
        let api = `${domainApi}/webpega/topic?topic=hot_events&guid=${guid}&uid=${id}&page=${page}`;
        return api;
    },
    //Chủ đề nổi bật
    hotTopic: function (domainApi = origin.gate, guid = -1, id = -1, page = 0) {
        //let api = `http://pega.aiservice.vn/api/v1/news?topic=hot_topics&guid=${guid}&uid=${id}&page=${page}`;
        let api = `${domainApi}/webpega/topic?topic=hot_topics&guid=${guid}&uid=${id}&page=${page}`;
        return api;
    },

    //lấy các bài trong topic sự kiện / chủ đề nổi bật
    topicArticles: function (domainApi = origin.gate, guid = -1, id = -1, page = 0, topicId = 0) {
        //let api = `http://pega.aiservice.vn/api/v1/news?news=topic_articles&guid=${guid}&uid=${id}&page=${page}`;
        let api = `${domainApi}/webpega/news?news=topic_articles&guid=${guid}&uid=${id}&page=${page}&topicid=${topicId}`;
        return api;
    },
    //lấy menu chuyên mục
    menuExtend: function (domainApi = origin.gate) {
        //let api = 'http://content-ml.admicro.vn/mlbigdata/pega/web/categories'
        let api = `${domainApi}/webpega/categories`
        return api;
    },
    //lấy báo hay đọc trong menu extend
    newspaper: function (domainApi = origin.gate) {
        //let api = 'http://content-ml.admicro.vn/mlbigdata/pega/web/habitsites'
        let api = `${domainApi}/webpega/habitsites`
        return api;
    },
    //lấy chuyên mục, chuyên tin quan tâm
    categoryInterested: function (domainApi = origin.gate, guid = -1, id = -1) {
        //let api = `http://content-ml.admicro.vn/mlbigdata/pega/web/user/following`;
        let api = `${domainApi}/webpega/user/following?guid=${guid}&uid=${id}`;
        return api;
    },
    //Lấy chi tiết bài
    detail: function (domainApi = origin.gate, id) {
        //let api = `http://content-ml.admicro.vn/mlbigdata/pega/web/news/detail`
        let api = `${domainApi}/serverpega/news/detail?item=${id}`
        return api;

    },
    listBookmark: function (domainApi = origin.gate, guid = -1, id = -1) {
        //let api = ` http://content-ml.admicro.vn/mlbigdata/pega/web/bookmark/news`
        let api = `${domainApi}/webpega/bookmark/news?guid=${guid}&uid=${id}`
        return api;

    },
    /// action chuyên mục (follow,unfollow)
    actionCm: function (domainApi = origin.gate,) {
        //let api = `http://content-ml.admicro.vn/mlbigdata/pega/web/category/follow`
        let api = `${domainApi}/webpega/category/follow`
        return api;

    },
    /// action chuyên trang (follow,unfollow)
    actionCt: function (domainApi = origin.gate,) {
        //let api = `http://content-ml.admicro.vn/mlbigdata/pega/web/site/follow`
        let api = `${domainApi}/webpega/site/follow`
        return api;

    },
    //Tin liên quan
    relatedNews: function (domainApi = origin.gate, guid = - 1, id = -1, itemid = 0) {
        //let api = `http://pega.aiservice.vn/api/v1/news?news=related_news`
        let api = `${domainApi}/webpega/news?news=related_news&guid=${guid}&uid=${id}&itemid=${itemid}`;
        return api;

    },
    firstNewsCate: function (domainApi = origin.gate, guid = -1, id = -1, cate = 1) {
        //let api = `http://pega.aiservice.vn/api/v1/news?news=first_news&guid=${guid}&uid=${id}&categoryid`;
        let api = `${domainApi}/webpega/news?news=first_news&guid=${guid}&uid=${id}&categoryid=${cate}`;
        return api;

    },
    topNewsCate: function (domainApi = origin.gate, guid = -1, id = -1, cate = 1) {
        //let api = `http://pega.aiservice.vn/api/v1/news?news=first_news&guid=${guid}&uid=${id}&categoryid`;
        let api = `${domainApi}/webpega/news?news=top_news&guid=${guid}&uid=${id}&categoryid=${cate}`;
        return api;

    },
    streamForYouCate: function (domainApi = origin.gate, guid = -1, id = -1, page = 0, cate = 0, size = 10) {
        //let api = `http://pega.aiservice.vn/api/v1/news?news=stream_news&categoryid=2&guid=5650507061897329571&uid=-1&page=0`;
        let api = `${domainApi}/webpega/news?news=stream_news&guid=${guid}&uid=${id}&page=${page}&categoryid=${cate}&page_size=${size}`;
        return api;
    }
}
