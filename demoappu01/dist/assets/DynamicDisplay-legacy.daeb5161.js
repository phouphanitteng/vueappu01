System.register(["./index-legacy.a0107283.js"],(function(t,e){"use strict";var a,o=document.createElement("style");return o.textContent=".posts-tab[data-v-aa440d0d]{display:flex}.posts-sidebar[data-v-aa440d0d]{list-style-type:none;padding:0;margin-top:10px;border-right:2px solid #ddd;width:300px;overflow-y:auto}.posts-sidebar li[data-v-aa440d0d]{cursor:pointer;margin-bottom:10px;padding:10px}.posts-sidebar li.selected[data-v-aa440d0d]{font-weight:700;background-color:#f0f0f0}.selected-post-container[data-v-aa440d0d]{margin-top:20px;padding:20px;width:500px}.selected-post[data-v-aa440d0d]{border:1px solid #ddd;padding:20px}.selected-post h3[data-v-aa440d0d]{margin-top:0}.selected-post p[data-v-aa440d0d]{margin-bottom:10px}div[data-v-dcacaf0c]{padding:0;margin-top:10px;border-right:2px solid #ddd;width:300px;overflow-y:auto}#dynamic-component-demo[data-v-6cb7eae5]{position:absolute;left:40%}.tab-button[data-v-6cb7eae5]{margin-right:0;background-color:#84ba85;border:none;color:#fbfeff;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;cursor:pointer}.tab-button.active[data-v-6cb7eae5]{margin-right:0;background-color:#2e6f2e;border:none;color:#fff;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;cursor:pointer}\n",document.head.appendChild(o),{setters:[function(t){a=t.n}],execute:function(){var e=a({data:function(){return{posts:[{id:1,title:"Cat Ipsum",content:"<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>"},{id:2,title:"Hipster Ipsum",content:"<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>"},{id:3,title:"Cupcake Ipsum",content:"<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"}],selectedPost:null}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"posts-tab"},[e("ul",{staticClass:"posts-sidebar"},t._l(t.posts,(function(a){return e("li",{key:a.id,class:{selected:a===t.selectedPost},on:{click:function(e){t.selectedPost=a}}},[t._v(" "+t._s(a.title)+" ")])})),0),e("div",{staticClass:"selected-post-container"},[t.selectedPost?e("div",{staticClass:"selected-post"},[e("h3",[t._v(t._s(t.selectedPost.title))]),e("div",{domProps:{innerHTML:t._s(t.selectedPost.content)}})]):e("strong",[t._v(" Click on a blog title to the left to view it. ")])])])}),[],!1,null,"aa440d0d",null,null).exports,o=a({},(function(){return(0,this._self._c)("div",[this._v("Archive component")])}),[],!1,null,"dcacaf0c",null,null).exports;t("default",a({components:{TabPosts:e,TabArchive:o},data:function(){return{currentTab:"Posts",tabs:["Posts","Archive"]}},computed:{currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"dynamic-component-demo"}},[t._l(t.tabs,(function(a){return e("button",{key:a,class:["tab-button",{active:t.currentTab===a}],on:{click:function(e){t.currentTab=a}}},[t._v(" "+t._s(a)+" ")])})),e("keep-alive",[e(t.currentTabComponent,{tag:"component",staticClass:"tab"})],1)],2)}),[],!1,null,"6cb7eae5",null,null).exports)}}}));
