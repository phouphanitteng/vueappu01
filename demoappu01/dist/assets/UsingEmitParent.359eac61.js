import{n as l}from"./index.cba2a32d.js";const r={props:{value:String},methods:{notifyParent(){this.$emit("button-click","Button clicked in child component by using $Emit")}}};var i=function(){var e=this,n=e._self._c;return n("div",[n("button",{on:{click:e.notifyParent}},[e._v("Click me!")]),e._v(" "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:"Emit with model"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},function(t){return e.$emit("input",t.target.value)}]}})])},s=[],o=l(r,i,s,!1,null,null,null,null);const c=o.exports,u={components:{UsingEmitParentChild:c},data(){return{message:"",parentValue:""}},methods:{handleBtnClick(a){this.message=a}}};var _=function(){var e=this,n=e._self._c;return n("div",[n("p",[e._v(e._s(e.message))]),n("UsingEmitParentChild",{on:{"button-click":e.handleBtnClick},model:{value:e.parentValue,callback:function(t){e.parentValue=t},expression:"parentValue"}}),n("p",[e._v(e._s(e.parentValue))])],1)},m=[],v=l(u,_,m,!1,null,null,null,null);const d=v.exports;export{d as default};
