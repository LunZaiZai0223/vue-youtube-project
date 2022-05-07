(function(){"use strict";var e={5141:function(e,t,o){var i=o(9242),a=o(3396);function n(e,t,o,i,n,r){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var r=o(7139),s={name:"App",mounted(){this.checkLocalStorage()},computed:{...(0,r.rn)("favoriteList",["favoriteList"])},methods:{...(0,r.OI)("favoriteList",["parseDataFromLocalStorage"]),checkLocalStorage(){if((0!==this.favoriteList.length||null!==localStorage.getItem("favorite"))&&0===this.favoriteList.length&&localStorage.getItem("favorite")){const e=JSON.parse(localStorage.getItem("favorite"));this.parseDataFromLocalStorage(e)}}}},d=o(89);const l=(0,d.Z)(s,[["render",n]]);var c=l,u=o(678);function p(e,t,o,i,n,r){const s=(0,a.up)("the-navigation"),d=(0,a.up)("is-fetching"),l=(0,a.up)("video-list"),c=(0,a.up)("the-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),n.isFetchingData?((0,a.wg)(),(0,a.j4)(d,{key:0})):(0,a.kq)("",!0),0!==e.loadedItems.length?((0,a.wg)(),(0,a.j4)(l,{key:1,"video-list":e.loadedItems,"list-Type":"home"},null,8,["video-list"])):(0,a.kq)("",!0),(0,a.Wm)(c)],64)}const h=e=>((0,a.dD)("data-v-0ce517dc"),e=e(),(0,a.Cn)(),e),v={class:"nav"},g={class:"nav-wrapper"},m=(0,a.Uk)(" Youtube API with "),f=h((()=>(0,a._)("span",{class:"color-green"},"Vue 3",-1))),w=h((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})],-1))),I=h((()=>(0,a._)("span",null,"我的收藏",-1)));function y(e,t,o,i,n,r){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",v,[(0,a._)("div",g,[(0,a._)("h1",null,[(0,a.Wm)(s,{to:{name:"home-page"}},{default:(0,a.w5)((()=>[m,f])),_:1})]),(0,a._)("nav",null,[(0,a.Wm)(s,{to:{name:"favorite-page"}},{default:(0,a.w5)((()=>[w,I])),_:1})])])])}var _={name:"TheNavigation"};const k=(0,d.Z)(_,[["render",y],["__scopeId","data-v-0ce517dc"]]);var b=k;const L=e=>((0,a.dD)("data-v-eba93aa6"),e=e(),(0,a.Cn)(),e),F=L((()=>(0,a._)("p",null,"此專案為單純的作品練習，資料及圖片來源皆出自網路，不使用於任何商業或營利行為。",-1))),V=L((()=>(0,a._)("p",null,[(0,a.Uk)("此專案的排版及功能參考大神的"),(0,a._)("a",{href:"https://mini-ghost.github.io/vue3-youtube-practice/#/",target:"_blank"},"練習"),(0,a.Uk)("。")],-1)));function T(e,t,o,i,n,r){const s=(0,a.up)("footer-item");return(0,a.wg)(),(0,a.iD)("footer",null,[(0,a._)("ul",null,[(0,a.Wm)(s,{footerInfo:n.footerInfo},null,8,["footerInfo"])]),F,V])}var D=o(2268);const A={class:"item"};function x(e,t,o,i,n,r){return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.footerInfo,(({toolName:e,version:t},o)=>((0,a.wg)(),(0,a.iD)("li",{key:o},[(0,a._)("p",A,[(0,a._)("span",null,(0,D.zw)(e+": "),1),(0,a._)("span",null,(0,D.zw)(t),1)])])))),128)}var C={name:"FooterItem",props:{footerInfo:{type:Array,default:()=>[{toolName:"vue",version:"^3.2.13"},{toolName:"vue-router",version:"^4.0.14"},{toolName:"vuex",version:"^4.0.2"}]}}};const N=(0,d.Z)(C,[["render",x],["__scopeId","data-v-99b8aa6a"]]);var P=N,j={name:"TheFooter",components:{FooterItem:P},data(){return{footerInfo:[{toolName:"Vue",version:"^3.2.13"},{toolName:"Vue-router",version:"^4.0.14"},{toolName:"Vuex",version:"^4.0.2"},{toolName:"vue3-youtube",version:"^0.1.9"}]}}};const H=(0,d.Z)(j,[["render",T],["__scopeId","data-v-eba93aa6"]]);var S=H;const O=e=>((0,a.dD)("data-v-675f6b20"),e=e(),(0,a.Cn)(),e),W=O((()=>(0,a._)("div",{class:"loading-backdrop"},null,-1))),$=O((()=>(0,a._)("div",{class:"loading-wrapper"},[(0,a._)("div",{class:"loading"})],-1)));function M(e,t,o,i,n,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[W,$],64)}var E={name:"IsFetching"};const z=(0,d.Z)(E,[["render",M],["__scopeId","data-v-675f6b20"]]);var B=z;const Y=e=>((0,a.dD)("data-v-fcdcd5c0"),e=e(),(0,a.Cn)(),e),Z={ref:"listWrapper"},q=["id"],R={key:0,class:"list-loading-wrapper"},U=Y((()=>(0,a._)("p",null,"載入中...",-1))),G=Y((()=>(0,a._)("div",{class:"list-loading"},null,-1))),J=[U,G];function K(e,t,o,i,n,r){const s=(0,a.up)("video-item");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("main",Z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.videoList,(({id:e,snippet:t})=>((0,a.wg)(),(0,a.iD)("div",{id:e,key:e,class:"card",ref_for:!0,ref:"cards"},[(0,a.Wm)(s,{snippet:t,id:e},null,8,["snippet","id"])],8,q)))),128))],512),n.displayLoading?((0,a.wg)(),(0,a.iD)("div",R,J)):(0,a.kq)("",!0)],64)}const Q=e=>((0,a.dD)("data-v-66150ad0"),e=e(),(0,a.Cn)(),e),X={class:"card-thumb"},ee=Q((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-icon",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a._)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})],-1))),te=[ee],oe=Q((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-icon",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a._)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})],-1))),ie=[oe],ae={class:"card-content"};function ne(e,t,o,i,n,r){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",X,[(0,a.Wm)(s,{to:r.goToVideoPage},{default:(0,a.w5)((()=>[(0,a._)("div",{style:(0,D.j5)({"background-image":"url(data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==)"})},null,4)])),_:1},8,["to"]),e.checkVideoHasAlreadyExisted(o.id)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[0]||(t[0]=t=>e.addNewFavoriteItem({id:o.id,snippet:o.snippet})),class:"not-in-favorite"},te)),e.checkVideoHasAlreadyExisted(o.id)?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:t[1]||(t[1]=t=>e.deleteFavoriteItem(o.id)),class:"is-in-favorite"},ie)):(0,a.kq)("",!0)]),(0,a._)("div",ae,[(0,a._)("h2",null,[(0,a.Wm)(s,{to:r.goToVideoPage},{default:(0,a.w5)((()=>[(0,a.Uk)((0,D.zw)(o.snippet.localized.title),1)])),_:1},8,["to"])]),(0,a._)("small",null,(0,D.zw)(o.snippet.channelTitle),1)])],64)}var re={name:"VideoItem",props:{id:{type:String,default:()=>""},snippet:{type:Object,default:()=>{}}},computed:{...(0,r.rn)(["loadedItems"]),...(0,r.Se)("favoriteList",["checkVideoHasAlreadyExisted"]),goToVideoPage(){return{name:"video-page",params:{videoId:this.id}}}},methods:{...(0,r.OI)("favoriteList",["addNewFavoriteItem","deleteFavoriteItem"]),addVideoToFavoriteList({id:e,snippet:t}){const o={id:e,snippet:t};this.addNewFavoriteItem(o)}}};const se=(0,d.Z)(re,[["render",ne],["__scopeId","data-v-66150ad0"]]);var de=se,le={name:"VideoList",components:{VideoItem:de},data(){return{observer:null,displayLoading:!1}},props:{videoList:{type:Array,default:()=>[]},listType:{type:String,default:()=>"home"}},mounted(){const e={root:null,threshold:0,rootMargin:"0px 0px -25% 0px"};this.observer=new IntersectionObserver(this.observerCallBack,e);const t=this.$refs.cards;t.forEach((e=>{this.observer.observe(e)}))},methods:{needToGetFurtherVideoData(e){const t=this.videoList.findIndex((t=>t.id===e)),o=t+1===this.videoList.length;return o},observerFurtherCards(){setTimeout((()=>{const[...e]=this.$refs.cards.slice(this.$refs.cards.length-12,this.$refs.cards.length);e.forEach((e=>this.observer.observe(e)))}),500)},observerCallBack(e){e.forEach((e=>{if(e.isIntersecting){const t=e.target.children[0].children[0].children[0],o=this.videoList.find((t=>t.id===e.target.id));if(t.style.backgroundImage=`url(${o.snippet.thumbnails.high.url})`,this.observer.unobserve(e.target),"home"===this.listType){const t=this.needToGetFurtherVideoData(e.target.id);t&&this.fetchFurtherVideoHandler(this.getFurtherVideoData,this.observerFurtherCards)}}}))},async getFurtherVideoData(){const{items:e,nextPageToken:t,pageInfo:o}=await this.$store.dispatch("fetchVideosData").then((e=>e));return!!(e||t||o)&&(8!==o.resultsPerPage&&(t||this.$store.commit("setMaxResults",8),this.$store.commit("updateNextPageToken",t),this.$store.commit("addNewLoadedItems",e),!0))},async fetchFurtherVideoHandler(e,t){this.activateLoading();const o=await e();o&&t(),this.deactivateLoading()},activateLoading(){this.displayLoading=!0},deactivateLoading(){this.displayLoading=!1}}};const ce=(0,d.Z)(le,[["render",K],["__scopeId","data-v-fcdcd5c0"]]);var ue=ce,pe={name:"HomePage",components:{TheNavigation:b,TheFooter:S,VideoList:ue,IsFetching:B},data(){return{isFetchingData:!0}},mounted(){this.getVideosData()},methods:{async getVideosData(){if(this.loadedItems.length>0)return void this.toggleIsFetchingData();const{items:e,nextPageToken:t}=await this.$store.dispatch("fetchVideosData").then((e=>e));this.$store.commit("updateNextPageToken",t),this.$store.commit("addNewLoadedItems",e),this.toggleIsFetchingData()},toggleIsFetchingData(){this.isFetchingData=!1}},computed:{...(0,r.rn)(["loadedItems"])}};const he=(0,d.Z)(pe,[["render",p],["__scopeId","data-v-f355830c"]]);var ve=he,ge=o.p+"img/no-favorite-video.4f33c8d4.jpg";const me=e=>((0,a.dD)("data-v-29ab1aaa"),e=e(),(0,a.Cn)(),e),fe={key:1,class:"not-found"},we=me((()=>(0,a._)("p",null,"Your list is empty!",-1))),Ie=me((()=>(0,a._)("div",{class:"image-wrapper"},[(0,a._)("img",{src:ge})],-1))),ye=[we,Ie];function _e(e,t,o,i,n,r){const s=(0,a.up)("the-navigation"),d=(0,a.up)("video-list"),l=(0,a.up)("the-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a._)("div",{class:(0,D.C_)(["favorite-list-wrapper",{"no-favorite":r.isNoFavoriteVideo}])},[r.isNoFavoriteVideo?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(d,{key:0,"video-list":e.favoriteList,"list-type":"favorite"},null,8,["video-list"])),r.isNoFavoriteVideo?((0,a.wg)(),(0,a.iD)("div",fe,ye)):(0,a.kq)("",!0)],2),(0,a.Wm)(l)],64)}var ke={name:"TheFavorite",components:{VideoList:ue,TheNavigation:b,TheFooter:S},computed:{...(0,r.rn)("favoriteList",["favoriteList"]),isNoFavoriteVideo(){return 0===this.favoriteList.length}},updated(){this.isNoFavoriteVideo&&window.scroll(0,0)}};const be=(0,d.Z)(ke,[["render",_e],["__scopeId","data-v-29ab1aaa"]]);var Le=be;function Fe(e,t,o,i,n,r){const s=(0,a.up)("the-navigation"),d=(0,a.up)("is-fetching"),l=(0,a.up)("video-player"),c=(0,a.up)("the-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),n.isFetchingData?((0,a.wg)(),(0,a.j4)(d,{key:0})):(0,a.kq)("",!0),n.currentVideoItem?((0,a.wg)(),(0,a.j4)(l,{key:1,"video-link":r.getVideoLink,"video-title":r.getVideoTitle,"video-description":r.getVideoDescription,"video-id":r.getVideoId,"channel-title":r.getChannelTitle,snippet:n.currentVideoItem},null,8,["video-link","video-title","video-description","video-id","channel-title","snippet"])):(0,a.kq)("",!0),(0,a.Wm)(c)],64)}const Ve="https://youtube.googleapis.com/youtube/v3/videos?",Te="AIzaSyBZ7Mm1v1QEyUaYnPET_koH0uC10x3XWwo",De=(e=!0,t,o=12)=>e?{method:"Get",params:{part:"snippet",chart:"mostPopular",maxResults:o,regionCode:"TW",key:Te}}:{method:"Get",params:{part:"snippet",chart:"mostPopular",maxResults:o,regionCode:"TW",key:Te,pageToken:t}},Ae=e=>({methods:"Get",params:{part:"snippet",id:e,regionCode:"TW",key:Te}}),xe=(e,{params:t})=>{const o=Object.entries(t).map((e=>e.join("="))).join("&");return e+o},Ce=({id:e})=>{const t=Ae(e),o=xe(Ve,t);return fetch(o).then((e=>e.json()))},Ne=e=>((0,a.dD)("data-v-6a8786c9"),e=e(),(0,a.Cn)(),e),Pe={class:"player-container",ref:"player"},je={class:"info"},He={class:"info-title"},Se={class:"info-add-favorite"},Oe=Ne((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-icon",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a._)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})],-1))),We=[Oe],$e=Ne((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-icon",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a._)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})],-1))),Me=[$e],Ee=["innerHTML"];function ze(e,t,o,i,n,r){const s=(0,a.up)("YouTube");return(0,a.wg)(),(0,a.iD)("div",Pe,[(0,a.Wm)(s,{class:"player-wrapper",src:e.videoLink,width:"100%",ref:"youtube"},null,8,["src"]),(0,a._)("div",je,[(0,a._)("div",He,[(0,a._)("h3",null,(0,D.zw)(e.videoTitle),1),(0,a._)("div",Se,[e.checkVideoHasAlreadyExisted(e.videoId)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"not-in-favorite",onClick:t[0]||(t[0]=t=>e.addNewFavoriteItem({id:e.videoId,snippet:e.snippet.snippet}))},We)),e.checkVideoHasAlreadyExisted(e.videoId)?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"is-in-favorite",onClick:t[1]||(t[1]=t=>e.deleteFavoriteItem(e.videoId))},Me)):(0,a.kq)("",!0)])]),(0,a._)("h4",null,(0,D.zw)(e.channelTitle),1)]),(0,a._)("div",{class:"description",innerHTML:e.transferUrlsAndHashTagsToTag},null,8,Ee)],512)}var Be=o(2722),Ye=o.n(Be),Ze=(0,a.aZ)({components:{YouTube:Ye()},props:["videoLink","videoDescription","videoTitle","channelTitle","videoId","snippet"],computed:{...(0,r.Se)("favoriteList",["checkVideoHasAlreadyExisted"]),transferUrlsAndHashTagsToTag(){const e="https://www.youtube.com/hashtag/",t=/(https?:\/\/[^\s]+)/g,o=/(?<!\S)#(\w|[\u3400-\uFFFD])+/g,i=t=>{const o=t.replace("#","");return`<a href="${e+o}" target="_blank">${t}</a>`},a=this.videoDescription.replace(t,(e=>`<a href="${e}" target="_black">${e}</a>`)),n=a.replace(o,i);return n}},methods:{...(0,r.OI)("favoriteList",["addNewFavoriteItem","deleteFavoriteItem"])}});const qe=(0,d.Z)(Ze,[["render",ze],["__scopeId","data-v-6a8786c9"]]);var Re=qe,Ue={name:"TheVideo",components:{TheNavigation:b,TheFooter:S,VideoPlayer:Re,IsFetching:B},data(){return{currentVideoId:"",currentVideoItem:null,isFetchingData:!0}},computed:{...(0,r.Se)(["getCurrentVideoData"]),getVideoLink(){return`https://www.youtube.com/watch?v=${this.currentVideoId}`},getVideoDescription(){return this.currentVideoItem.snippet.description},getVideoTitle(){return this.currentVideoItem.snippet.localized.title},getChannelTitle(){return this.currentVideoItem.snippet.channelTitle},getVideoId(){return this.currentVideoItem.id}},methods:{hasTheVideoLocally(e){return this.getCurrentVideoData(e)},toggleIsFetchingData(){this.isFetchingData=!1},async getVideoById(){this.currentVideoId=this.$route.params.videoId;const e=this.hasTheVideoLocally(this.currentVideoId);if(e)return this.currentVideoItem=e,void this.toggleIsFetchingData();const{items:t}=await Ce({id:this.currentVideoId}).then((e=>e));this.currentVideoItem=t[0],this.toggleIsFetchingData()}},mounted(){this.getVideoById()}};const Ge=(0,d.Z)(Ue,[["render",Fe]]);var Je=Ge,Ke=o.p+"img/page-not-found.dbd3a7e0.jpg";const Qe=e=>((0,a.dD)("data-v-34ebcee4"),e=e(),(0,a.Cn)(),e),Xe=Qe((()=>(0,a._)("div",{class:"page-not-found"},[(0,a._)("img",{src:Ke})],-1)));function et(e,t,o,i,n,r){const s=(0,a.up)("the-navigation"),d=(0,a.up)("the-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),Xe,(0,a.Wm)(d)],64)}var tt={name:"NotFound",components:{TheNavigation:b,TheFooter:S}};const ot=(0,d.Z)(tt,[["render",et],["__scopeId","data-v-34ebcee4"]]);var it=ot;const at=(0,u.p7)({history:(0,u.PO)(),routes:[{path:"/vue-youtube-project/",name:"home-page",component:ve},{path:"/favorite",name:"favorite-page",component:Le},{path:"/video/:videoId",name:"video-page",params:!0,component:Je},{path:"/:notFound(.*)",component:it}],scrollBehavior(e,t,o){return"home-page"===e.name?o||{left:0,top:0,behavior:"smooth"}:"favorite-page"===e.name||"video-page"===e.name?{left:0,top:0}:o||void 0}});var nt=at,rt={namespaced:!0,state(){return{favoriteList:[]}},getters:{checkVideoHasAlreadyExisted:e=>t=>e.favoriteList.find((e=>e.id===t))},mutations:{addNewFavoriteItem(e,t){e.favoriteList.push(t),localStorage.setItem("favorite",JSON.stringify(e.favoriteList))},deleteFavoriteItem(e,t){e.favoriteList=e.favoriteList.filter((e=>e.id!==t)),localStorage.setItem("favorite",JSON.stringify(e.favoriteList))},parseDataFromLocalStorage(e,t){e.favoriteList=t}}};const st=(0,r.MT)({modules:{favoriteList:rt},state(){return{isFirstLoading:!1,loadedItems:[],currentPageMode:"home",nextPageToken:"",currentVideoId:"",maxResults:12,isLastFetchAPI:!1}},getters:{getDataSnippet:e=>t=>{const{snippet:o}=e.loadedItems.find((e=>e.id===t));return o},getHighThumbnails:e=>t=>{const{thumbnails:o}=e.loadedItems.find((e=>e.id===t));return o.high},getCurrentVideoData:e=>t=>e.loadedItems.find((e=>e.id===t))},mutations:{addNewLoadedItems(e,t=[]){t.forEach((t=>{e.loadedItems.push(t)}))},afterFirstLoading(e,t){e.isFirstLoading=t},updateNextPageToken(e,t){e.nextPageToken=t},setMaxResults(e,t){e.maxResults=t},setIsLastFetchAPI(e,t=!0){e.isLastFetchAPI=t}},actions:{fetchVideosData({state:e,commit:t}){if(e.isLastFetchAPI)return{items:null,nextPageToken:null,pageInfo:null};const o=De(e.isFirstLoading,e.nextPageToken,e.maxResults),i=xe(Ve,o);return e.isFirstLoading&&t("afterFirstLoading",!1),8===e.maxResults&&t("setIsLastFetchAPI",!0),fetch(i).then((e=>e.json()))}}});var dt=st;const lt=(0,i.ri)(c);lt.use(nt),lt.use(dt),lt.mount("#app")}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,i,a,n){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],n=e[c][2];for(var s=!0,d=0;d<i.length;d++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](i[d])}))?i.splice(d--,1):(s=!1,n<r&&(r=n));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,a,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/vue-youtube-project/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,n,r=i[0],s=i[1],d=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(d)var c=d(o)}for(t&&t(i);l<r.length;l++)n=r[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},i=self["webpackChunkvue_youtube_project"]=self["webpackChunkvue_youtube_project"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(5141)}));i=o.O(i)})();
//# sourceMappingURL=app.5b352f1f.js.map