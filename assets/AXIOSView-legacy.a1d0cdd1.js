System.register(["./index-legacy.965615c3.js"],(function(n,t){"use strict";var e,i;return{setters:[function(n){e=n.n,i=n.a}],execute:function(){n("default",e({data:function(){return{info:null}},mounted:function(){var n=this;i.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(t){return n.info=t}))}},(function(){var n=this;return(0,n._self._c)("div",{attrs:{id:"appAxios"}},[n._v(" "+n._s(n.info)+" ")])}),[],!1,null,null,null,null).exports)}}}));
