System.register(["./index-legacy.965615c3.js"],(function(t,n){"use strict";var e;return{setters:[function(t){e=t.n}],execute:function(){t("default",e({data:function(){return{datas:null}},mounted:function(){var t=this;fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(n){200===n.status?n.json().then((function(n){console.log(n),t.datas=n})):console.log("Looks like there was a problem. Status Code: "+n.status)})).catch((function(t){console.log("Fetch Error :-S",t)}))}},(function(){var t=this;return(0,t._self._c)("div",{attrs:{id:"fetchApp"}},[t._v(" "+t._s(t.datas)+" ")])}),[],!1,null,null,null,null).exports)}}}));
