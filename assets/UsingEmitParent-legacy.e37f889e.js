System.register(["./index-legacy.a0107283.js"],(function(e,t){"use strict";var n;return{setters:[function(e){n=e.n}],execute:function(){var t=n({props:{value:String},methods:{notifyParent:function(){this.$emit("button-click","Button clicked in child component by using $Emit")}}},(function(){var e=this,t=e._self._c;return t("div",[t("button",{on:{click:e.notifyParent}},[e._v("Click me!")]),e._v(" "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:"Emit with model"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},function(t){return e.$emit("input",t.target.value)}]}})])}),[],!1,null,null,null,null).exports;e("default",n({components:{UsingEmitParentChild:t},data:function(){return{message:"",parentValue:""}},methods:{handleBtnClick:function(e){this.message=e}}},(function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v(e._s(e.message))]),t("UsingEmitParentChild",{on:{"button-click":e.handleBtnClick},model:{value:e.parentValue,callback:function(t){e.parentValue=t},expression:"parentValue"}}),t("p",[e._v(e._s(e.parentValue))])],1)}),[],!1,null,null,null,null).exports)}}}));
