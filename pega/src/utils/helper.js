import { thumb, apiWeb } from "@/utils/common";
import axios from 'axios';
export const commonHelper = {
    hasClass: function (elm, className) {
        return (' ' + elm.className + ' ').indexOf(' ' + className + ' ') > -1;
    },
    checkJwt: function (user) {
        let id = -1;
        let guidId = -1
        if (user != null) {
            id = JSON.parse(user).id
        }
        guidId = this.getGuid();
        return [guidId, id];
    },
    objIsEmpty: function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return JSON.stringify(obj) === JSON.stringify({});
    },
    setCookie: function (name, value, days) {
        var cookieValue = escape(value) + ((date == null) ? "" : "; expires=" + date.toUTCString());
        document.cookie = name + "=" + cookieValue + "; path=/"
    },
    getCookie: function (name) {
        var value = document.cookie;
        var start = value.indexOf(" " + name + "=");
        if (start == -1) {
            start = value.indexOf(name + "=");
        }
        if (start == -1) {
            value = null;
        }
        else {
            start = value.indexOf("=", start) + 1;
            var end = value.indexOf(";", start);
            if (end == -1) {
                end = value.length;
            }
            value = unescape(value.substring(start, end));
        }
        return value;
    },
    eraseCookie: function (name) {
        document.cookie = name + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
    },
    replaceUnicode: function (s) {
        if (!s)
            return "";
        var strChar = "abcdefghijklmnopqrstxyzuvxw0123456789/-  ";
        s = commonHelper.UnicodeToKoDau(s.toLowerCase());
        var sReturn = ""; for (var i = 0; i < s.length; i++) { if (strChar.indexOf(s.charAt(i)) > -1) { if (s.charAt(i) != ' ') { sReturn += s.charAt(i); } else if (i > 0 && s.charAt(i - 1) != ' ' && s.charAt(i - 1) != '-') { sReturn += "-"; } } }
        sReturn = sReturn.replace(/--/g, "-");
        sReturn = sReturn.replace(/\//g, "-");
        return `/${sReturn}.htm`
    },
    UnicodeToKoDau: function (s) {
        var uniChars = "àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ";
        var KoDauChars = "aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDIIIOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYAADOOU";
        var retVal = "", pos = 0; for (var i = 0; i < s.length; i++) { pos = uniChars.indexOf(s.charAt(i)); if (pos >= 0) { retVal += KoDauChars.charAt(pos); } else { retVal += s.charAt(i); } }
        return retVal;
    },
    buildHref: function (data) {
        let newArr = data.reduce((x, v) => {
            v.href = commonHelper.replaceUnicode(v.name);
            if (v.hasOwnProperty('subcategories')) {
                let path = v.href.substr(0, v.href.indexOf('.htm'))
                let q = v.subcategories.reduce((a, b) => {
                    b.href = path + commonHelper.replaceUnicode(b.name);
                    return [...a, b]
                }, [])
                v.subcategories = q;
            }
            return [...x, v]
        }, [])
        return newArr;
    },
    buildHrefDetail: function (string, id = 0) {
        let str = this.replaceUnicode(string);
        str = str.split('.').join(`-${id}.`)
        return str
    },
    parseJwt: function (token) {
        try {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        } catch (e) {
            return { iss: "gate1", exp: 0, iat: "'2019-09-05 14:16" };
        }
    },
    getGuid: function () {
        //Lấy guid từ cookie
        var cf_uidT = '';
        try {
            var regex = new RegExp(/__uid\:([0-9]+)/);
            cf_uidT = regex.exec(decodeURIComponent(getCookie('__uif')))[1];
        } catch (e) {
            console.log(e);
        }
        return cf_uidT || '1509518141984318107';
    },
    buildBox: async function (boxMenu, user, check, domain, domainApi) {
        let config = commonHelper.checkJwt(user);
        let idCategory = check.idCategory
        let activeIndex = check.activeIndex
        let categoryId = 0;
        if (idCategory == undefined && activeIndex == undefined) {
            categoryId = 0;
        }
        else if (activeIndex == 0 && idCategory != 0) {
            categoryId = idCategory
        }
        else {
            categoryId = activeIndex
        }
        let rs = {
            //kqua
            hightlight: [],
            normal: [],
        };

        let data = {
            hightlight: [], //hightlight
            normal: [], //!hightlight
        };
        let arrApiHightlight = []; //api hightlight
        let arrApiNormal = []; //api !hightlight

        //trang chủ => gọi all
        if (categoryId == 0) {
            for (let i = 0; i < boxMenu.length; i++) {
                if (boxMenu[i].ishighlight) {
                    data.hightlight = [...data.hightlight, boxMenu[i]];
                } else {
                    data.normal = [...data.normal, boxMenu[i]];
                }
            }
            // hightlight = true
            for (let i = 0; i < data.hightlight.length; i++) {
                let id = data.hightlight[i].id; //id category
                //arrApiHightlight.push(await axios(apiWeb.firstNewsCate(config[0], config[1], id), config[2]))

                commonHelper.getKingToken(tk => {
                    arrApiHightlight.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                }, domain)
            }
            // hightlight = false
            for (let i = 0; i < data.normal.length; i++) {
                let id = data.normal[i].id; //id category
                commonHelper.getKingToken(tk => {
                    arrApiNormal.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                }, domain)
            }
        }
        //trang mục, gọi theo categoryId, lấy relatedcateids (subcategories nếu relatedcateids để làm box hightlight và !hightlight)
        else {
            //id là chuyên mục cha
            if (idCategory != 0 && activeIndex == 0) {
                let cateObj = boxMenu.find((x) => x.id == categoryId);
                if (cateObj != undefined) {
                    //nếu relatedcateids < 0 => duyệt subcategories
                    if (cateObj.relatedcateids.length <= 0) {
                        if (cateObj.subcategories != null) {
                            for (let i = 0; i < cateObj.subcategories.length; i++) {
                                let id = cateObj.subcategories[i].id;
                                if (cateObj.subcategories.ishighlight) {
                                    data.hightlight = [...data.hightlight, cateObj.subcategories[i]];
                                    commonHelper.getKingToken(tk => {
                                        arrApiHightlight.push(axios(apiWeb.firstNewsCate(tdomainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                    }, domain)
                                }
                                else {
                                    data.normal = [...data.normal, cateObj.subcategories[i]];
                                    commonHelper.getKingToken(tk => {
                                        arrApiNormal.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                    }, domain)
                                }
                            }
                        }
                    }
                    //nếu relatedcateids > 0 => duyệt relatedcateids
                    else {
                        //duyệt tìm xem relatedcateids trong boxMenu check hightlight,layout (Ưu tiên)
                        for (let i = 0; i < cateObj.relatedcateids.length; i++) {
                            let obj = boxMenu.find((x) => x.id == cateObj.relatedcateids[i]);
                            let id = obj.id;
                            if (obj.ishighlight) {
                                data.hightlight = [...data.hightlight, obj];
                                commonHelper.getKingToken(tk => {
                                    arrApiHightlight.push(axios(apiWeb.firstNewsCate(buildMethod.domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                }, domain)

                            } else {
                                data.normal = [...data.normal, obj];
                                commonHelper.getKingToken(tk => {
                                    arrApiNormal.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                }, domain)
                            }
                        }
                    }
                }
            }
            //id là chuyên mục con của chuyên mục cha
            else {
                let Obj = boxMenu.find((x) => x.id == idCategory);
                if (Obj != undefined) {
                    let cateObj = Obj.subcategories.find((x) => x.id == activeIndex);
                    //nếu relatedcateids < 0 => duyệt subcategories
                    if (cateObj.relatedcateids.length <= 0) {
                        if (Obj.subcategories != null) {
                            for (let i = 0; i < Obj.subcategories.length; i++) {
                                let id = Obj.subcategories[i].id;
                                if (id != activeIndex) {
                                    if (Obj.subcategories.ishighlight) {
                                        data.hightlight = [...data.hightlight, Obj.subcategories[i]];
                                        commonHelper.getKingToken(tk => {
                                            arrApiHightlight.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                        }, domain)

                                    } else {
                                        data.normal = [...data.normal, Obj.subcategories[i]];
                                        commonHelper.getKingToken(tk => {
                                            arrApiNormal.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                        }, domain)
                                    }
                                }
                            }
                            if (Obj.ishighlight) {
                                data.hightlight = [...data.hightlight, Obj];
                                commonHelper.getKingToken(tk => {
                                    arrApiHightlight.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                }, domain)
                            }
                            else {
                                data.normal = [...data.normal, Obj];
                                commonHelper.getKingToken(tk => {
                                    arrApiNormal.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                }, domain)
                            }
                        }
                    }
                    //nếu relatedcateids > 0 => duyệt relatedcateids
                    else {
                        //duyệt tìm xem relatedcateids trong boxMenu check hightlight,layout (Ưu tiên)
                        for (let i = 0; i < cateObj.relatedcateids.length; i++) {
                            let obj = boxMenu.find((x) => x.id == cateObj.relatedcateids[i]);
                            let id = obj.id;
                            if (obj.ishighlight) {
                                data.hightlight = [...data.hightlight, obj];
                                commonHelper.getKingToken(tk => {
                                    arrApiHightlight.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                }, domain)
                            } else {
                                data.normal = [...data.normal, obj];
                                commonHelper.getKingToken(tk => {
                                    arrApiNormal.push(axios(apiWeb.firstNewsCate(domainApi, config[0], config[1], id), commonHelper.getHeader(tk)))
                                }, domain)
                            }
                        }
                    }
                }
            }
        }
        // box hightlight
        if (arrApiHightlight.length > 0) {
            await Promise.all(arrApiHightlight).then((obj) => {
                for (let i = 0; i < data.hightlight.length; i++) {
                    obj[i].name = data.hightlight[i].name;
                    obj[i].layoutid = data.hightlight[i].layoutid;
                    obj[i].ishighlight = data.hightlight[i].ishighlight;
                    obj[i].id = data.hightlight[i].id;
                    obj[i].href = data.hightlight[i].href;
                }
                rs.hightlight = obj;
            });
        }
        //// box normal
        if (arrApiNormal.length > 0) {
            await Promise.all(arrApiNormal).then((obj) => {
                for (let i = 0; i < data.normal.length; i++) {
                    obj[i].name = data.normal[i].name;
                    obj[i].layoutid = data.normal[i].layoutid;
                    obj[i].ishighlight = data.normal[i].ishighlight;
                    obj[i].id = data.normal[i].id;
                    obj[i].href = data.normal[i].href;
                }
                rs.normal = obj;
            });
        }
        return rs;
    },
    unqId: function (data) {
        return data.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
    },
    getKingToken: function (callback, domain) {
        var trygetToken = 3;
        function getToken(cb) {
            fetch(`${domain}/api/gettoken`)
                .then(res => res.json())
                .then(rs => {
                    if (rs.code == 200) {
                        var ntk = getCookie('_pega_t_e_a_s');
                        if (ntk) {
                            rs.data.access_token = ntk;
                            cb(rs);
                        } else {
                            setTimeout(function () {
                                if (trygetToken > 0) {
                                    trygetToken--;
                                    getToken(cb);
                                } else cb(rs);
                            }, 1000);
                        }
                    }
                    else console.log(rs);
                })
        }
        //var currentToken = getCookie('_kh_token');
        var currentToken = this.getCookie('_pega_t_e_a_s');
        //if ($("#hdToken").length > 0) {
        if (currentToken != null) {
            var jwt = this.parseJwt(currentToken);
            var timespanExp = jwt.exp;
            //var timespanExp = parseFloat(currentTokenExp);//$("#hdToken").attr("data-exp"));
            var expDate = new Date(timespanExp * 1000);
            var now = new Date();
            if (expDate > now) {
                var rs = {
                    code: 200,
                    message: "Thành công",
                    data:
                    {
                        access_token: currentToken,// $("#hdToken").val(),
                        token_type: "bearer",
                        expires_in: timespanExp
                    }
                };
                callback(rs);
            } else getToken(callback);

        } else {
            getToken(callback);
        }
    },
    getHeader: function (tk) {
        return {
            headers: {
                'Authorization': 'Bearer ' + tk.data.access_token
            },
        }
    },
    appendAds: function (id, dom, type = 1) {
        removeAds(dom);
        if (dom != null && type == 1 || dom != undefined && type == 1) { // bài bt
            if (dom.querySelectorAll('div').length == 0) {
                var zone = document.createElement('zone');
                zone.setAttribute("id", id)

                let script = document.createElement('script');
                script.type = 'text/javascript';
                let code = 'arfAsync.push("' + id + '");';
                script.appendChild(document.createTextNode(code))

                dom.innerHTML = "<zone id='" + id + "'></zone>"
                dom.appendChild(script)
            }
        }
    },
    removeAds: function (dom) {
        if (dom != null | dom != undefined) {
            dom.innerHTML = ''
        }
    },
}

export const logic = {
    thumbCase: function (name, position = "right") {
        switch (name) {
            case "bigThumb":
                return thumb.bigThumb;
            case "midThumb":
                return (position == "bottom") ? { ...thumb.midThumb, marginRight: "0px", marginBottom: "8px", width: "260px" } : thumb.midThumb;
            case "smallThumb":
                return thumb.smallThumb;
            default:
                return thumb.smallThumb;
        }
    }
}

