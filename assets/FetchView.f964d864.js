import{n as e}from"./index.efba2962.js";const s={data(){return{datas:null}},mounted(){const o=this;fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(function(t){if(t.status!==200){console.log("Looks like there was a problem. Status Code: "+t.status);return}t.json().then(function(n){console.log(n),o.datas=n})}).catch(function(t){console.log("Fetch Error :-S",t)})}};var c=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"fetchApp"}},[t._v(" "+t._s(t.datas)+" ")])},r=[],a=e(s,c,r,!1,null,null,null,null);const i=a.exports;export{i as default};
