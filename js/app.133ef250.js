(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cf3422c4"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,s){n=a[e]=[t,s]});t.push(n[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,n[1](c)}a[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1725:function(e){e.exports=JSON.parse('{"profile":{"firstname":"Thomas","lastname":"Lupin","pseudo":"TheToto","short_bio_md":"étudiant en ingénieurie\\n informatique à l\'[EPITA](https://epita.fr \\"Site web d\'EPITA\\").","avatar_thumb":"/images/avatar.png","avatar_url":"https://files.thetoto.fr/private/avatar.png","email":"mail@thetoto.fr","links":[{"icon":"nf nf-fa-facebook_square","url":"https://facebook.com/thomaslupin"},{"icon":"nf nf-fa-linkedin_square","url":"https://www.linkedin.com/in/tlupin/"},{"icon":"nf nf-oct-mark_github","url":"https://github.com/Thetoto"},{"icon":"nf nf-fa-youtube_play","url":"https://www.youtube.com/user/MtTheToto"},{"icon":"nf nf-fa-envelope","url":"mailto:mail@thetoto.fr"}]},"presentation":{"intro":"Je suis actuellement en quatrième année d\'études d\'ingénieur en informatique (promo 2021 à l\'[EPITA](https://epita.fr \\"Site web d\'EPITA\\")).","apropos":"Toujours au courant des dernières actualités technologique, très actif dans les projets de groupe tout en motivant mes partenaires.\\n\\nJe suis à l\'aise dans un vaste pannel de technologies et langages, allant de la programmation pour Arduino, en passant par l\'assembleur x86_64, jusqu\'à des langages de haut niveau comme le Python.","cv":"https://files.thetoto.fr/private/cv.pdf","skills":[{"icons":["nf nf-custom-c","nf nf-custom-cpp"],"stars":4,"half_star":true},{"icons":["nf nf-dev-html5","nf nf-dev-css3"],"stars":4,"half_star":true},{"icons":["nf nf-dev-python","nf nf-dev-django adjust"],"stars":4,"half_star":false},{"icons":["nf nf-dev-javascript_badge","nf nf-dev-nodejs adjust"],"stars":3,"half_star":true},{"icons":["nf nf-mdi-language_csharp"],"stars":4,"half_star":false},{"icons":["nf nf-linux-archlinux","nf nf-dev-git"],"stars":4,"half_star":true},{"icons":[],"text":"Assembly x86_64","stars":2,"half_star":true}],"projects":[{"name":"Elves Must Live","description":"Un jeu vidéo de \\"Tower Defense\\" créé sous **Unity3D** lors de ma première année à l\'EPITA. Consultez le site web pour plus d\'informations.","image":"/images/thumbs/eml.png","icons":["nf nf-mdi-language_csharp","nf nf-dev-unity_small"],"iconsTitle":false,"floating":{"icon":"nf nf-fa-external_link","link":"https://elves-must-live.tk/","tooltip":"Site Web"},"links":[{"name":"Github","link":"https://github.com/Thetoto/Elves-Must-Live"},{"name":"Playlist Youtube","link":"https://www.youtube.com/watch?v=Hl6p07GA4Yk&list=PLTGwNGYPtQzu4s3vKDsgfxsrP_ReuP-Zf"}]},{"name":"Eye of the Graeae","description":"Eye of the Graeae est un logicel de reconnaissance optique de caractères (OCR) basé sur la technologie des réseaux de neurones. (Proof of concept)","image":"/images/thumbs/eye.png","icons":["nf nf-custom-c"],"iconsTitle":false,"floating":{"icon":"nf nf-oct-mark_github","link":"https://github.com/Thetoto/Eye-of-the-Graeae","tooltip":"GitHub"}},{"name":"42sh (shell interactif)","description":"42sh, un projet phare de l\'EPITA, est un shell (style BASH) développé en C.","icons":["nf nf-custom-c"],"iconsTitle":true},{"name":"Spider Web Server (httpd)","description":"Spider est un server HTTP écrit en C++. Il gère le reverse proxy, un nombre de vhost illimité, ainsi que le HTTPS (SSL/TLS)","icons":["nf nf-custom-cpp"],"iconsTitle":true},{"name":"Site de billetterie","description":"Un site web en Django (Python).\\nUn gros projet qui comprend : Un site de billetterie, où l\'on peut déposer des events et s\'y inscrire et une application mobile pour vérifier les tickets.","icons":["nf nf-dev-python","nf nf-dev-django"],"iconsTitle":true,"links":[{"name":"Github","link":"https://github.com/bible-white-corp/yakabible"},{"name":"Site en ligne","link":"http://yakabible.thetoto.fr/"}]},{"name":"K (kernel)","description":"Un kernel \'from-scratch\' en C et assembleur, où nous devions implémenter différents syscalls et drivers. D\'un driver serial pour le syscall `write`, puis la gestion de la mémoire et des interruptions, jusqu\'à un driver ATAPI pour charger des ROM en mémoire, et passer en Userland. Plus d\'info sur le support de cours ci-dessous.","icons":["nf nf-custom-c"],"iconsTitle":true,"links":[{"name":"Support de cours","link":"https://k.lse.epita.fr/"}]}],"projects_perso":[{"name":"Tranzat Creator","description":"Un site \\"créateur de personnage\\" pour créer un \\"Tranzat\\".","image":"/images/thumbs/tranzat.png","icons":["nf nf-dev-html5","nf nf-dev-javascript_badge"],"iconsTitle":true,"floating":{"icon":"nf nf-fa-external_link","link":"https://tranzat.thetoto.fr/","tooltip":"Site Web"},"links":[{"name":"Github","link":"https://github.com/Thetoto/Tranzat-Creator"}]},{"name":"C\'est L\'heure","description":"Bot messenger et site Web où le but est d\'envoyer en premier un message à des heures précises.\\nDifférentes stats et graphiques sont présentes sur le site.\\nLe site et le bot sont en Python/Django.","image":"/images/thumbs/cestlheure.png","icons":["nf nf-dev-python","nf nf-dev-django"],"iconsTitle":true,"floating":{"icon":"nf nf-oct-mark_github","link":"https://github.com/Thetoto/cestlheure","tooltip":"GitHub"},"links":[{"name":"Site Web","link":"https://cestlheure.tk"}]},{"name":"Thetoto.fr","description":"Le site web où vous naviguez actuellement.\\nIl est développé en VueJS pour découvrir un framework Web populaire.","icons":["nf nf-mdi-vuejs"],"iconsTitle":true,"links":[{"name":"Github","link":"https://github.com/Thetoto/thetoto.fr"}]}]},"timeline":[{"title":"Stage de découverte","place":"OrthoTech","description":"Stage de deux mois dans une entreprise fabriquant des appareillages orthopédiques. Découverte duprocessus de production des sièges orthopédiques et du secrétariat.","year":2013},{"title":"Baccalauréat Mention Bien","place":"Lycée Teilhard de Chardin","isSchool":true,"year":2015},{"title":"Stage d\'été","place":"Intermarché","description":"Stage de deux mois dans un hypermarché.","year":2018},{"title":"Assistant C#/OCaml (ACDC)","place":"EPITA","description":"Assistant des élèves de première année de l\'EPITA pour créer et assister les TP de programmation C# et OCaml.","year":2018},{"title":"University of Seoul","place":"Séoul, Corée du Sud","description":"Echange de 4 mois en Corée du Sud.","isSchool":true,"year":2018},{"title":"Stage technique","place":"Bouygues Télécom","description":"Stage d\'un semestre chez Bouygues Télécom (Le Spot Bouygues) pour concevoir un scanner de RIB pour en extraire l\'IBAN, et un scanner de bande MRZ. Utilisation de Amazon Web Services, Node.JS et Tesseract.","year":2019},{"title":"Assistant C++/Java (YAKA)","place":"EPITA","description":"Assistant des élèves de troisième année de l\'EPITA pour créer et assister les TP de programmation C++ et Java.","year":2020},{"title":"Diplôme d\'ingénieur","place":"EPITA","isSchool":true,"year":2021,"chip":"Futur"}]}')},"2f73":function(e,t,n){"use strict";var s=n("535b"),a=n.n(s);a.a},"335f":function(e,t,n){},"4e69":function(e,t,n){},"535b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("v-row",[!e.fullscreen||e.$vuetify.breakpoint.smAndDown?n("v-col",{class:e.$vuetify.breakpoint.smAndDown?"":"p-fixed",attrs:{id:"header",cols:"12",md:"5",lg:"4"}},[n("LeftPane"),e.$vuetify.breakpoint.smAndDown?e._e():n("v-tooltip",{attrs:{bottom:"",fixed:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[n("v-btn",e._g({staticStyle:{top:"50%"},attrs:{color:"red lighten-1",fab:"",small:"",absolute:"",right:""},on:{click:e.on_fullscreen}},s),[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-chevron-left")])],1)]}}],null,!1,880073287),model:{value:e.show_on,callback:function(t){e.show_on=t},expression:"show_on"}},[n("span",[e._v("Cacher la barre latérale")])])],1):e._e(),e.$vuetify.breakpoint.smAndDown||e.fullscreen?e._e():n("v-col",{attrs:{id:"header-proxy",cols:"12",md:"5",lg:"4"}}),n("v-col",{attrs:{id:"router",cols:"12",md:e.fullscreen?12:7,lg:e.fullscreen?12:8}},[e.fullscreen&&!e.$vuetify.breakpoint.smAndDown?n("v-tooltip",{attrs:{bottom:"",fixed:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[n("v-btn",e._g({staticStyle:{top:"50%"},attrs:{color:"red lighten-1",fab:"",small:"",fixed:"",left:""},on:{click:e.off_fullscreen}},s),[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-chevron-right")])],1)]}}],null,!1,3945074408),model:{value:e.show_off,callback:function(t){e.show_off=t},expression:"show_off"}},[n("span",[e._v("Afficher la barre latérale")])]):e._e(),n("router-view")],1)],1)],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"d-flex h100 w70"},[n("div",{staticClass:"align-self-center text-right"},[n("div",{staticClass:"mb-5 w70 float-right"},[n("a",{staticClass:"w70",attrs:{href:e.infos.avatar_url}},[n("img",{staticClass:"elevation-14",attrs:{id:"avatar",src:e.infos.avatar_thumb}})])]),n("div",{staticClass:"float-right w100"},[n("p",{staticClass:"headline"},[e._v(e._s(e.infos.firstname)+" '"+e._s(e.infos.pseudo)+"' "+e._s(e.infos.lastname)+",")]),n("vue-markdown",{attrs:{id:"short-bio"}},[e._v(e._s(e.infos.short_bio_md))]),n("hr",{staticClass:"my-3"}),e._l(e.infos.links,function(e){return n("a",{key:e.url,staticClass:"social",attrs:{target:"_blanc",href:e.url}},[n("i",{class:e.icon})])}),n("hr",{staticClass:"my-3"}),n("p",[e._v("\n        Email :\n        "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[n("span",e._g({on:{click:e.saveEmailClipboard}},s),[e._v(e._s(e.infos.email))])]}}])},[n("span",[e._v(e._s(e.email_clicked?"Copié !":"Cliquer pour copier"))])])],1)],2)])])},i=[],l=n("2f62"),c=n("1725");s["a"].use(l["a"]);var u=new l["a"].Store({state:{json:c,fullscreen:!1},mutations:{swap_fullscreen:e=>e.fullscreen=!e.fullscreen},actions:{}}),f=n("9ce6"),d=n.n(f),p={name:"LeftPane",components:{VueMarkdown:d.a},computed:{infos:()=>u.state.json.profile},data(){return{email_clicked:!1}},methods:{saveEmailClipboard(){const e=document.createElement("textarea");e.value="mail@thetoto.fr",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.email_clicked=!0}}},m=p,v=(n("5bd7"),n("2877")),h=n("6544"),_=n.n(h),b=n("a523"),g=n("3a2f"),y=Object(v["a"])(m,o,i,!1,null,"39f3dd04",null),k=y.exports;_()(y,{VContainer:b["a"],VTooltip:g["a"]}),n("92e4");var w={name:"App",components:{LeftPane:k},data(){return{show_on:!1,show_off:!1}},computed:{fullscreen:()=>u.state.fullscreen},methods:{on_fullscreen(){this.show_on=!1,u.commit("swap_fullscreen")},off_fullscreen(){this.show_off=!1,u.commit("swap_fullscreen")}}},T=w,C=(n("5f6d"),n("7496")),j=n("8336"),x=n("62ad"),S=n("a75b"),A=n("132d"),P=n("0fd9"),V=Object(v["a"])(T,a,r,!1,null,"66a33d01",null),O=V.exports;_()(V,{VApp:C["a"],VBtn:j["a"],VCol:x["a"],VContent:S["a"],VIcon:A["a"],VRow:P["a"],VTooltip:g["a"]});var I=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:{w90:e.$vuetify.breakpoint.mdAndDown,w70:e.$vuetify.breakpoint.lgAndUp},attrs:{id:"home"}},[e.$vuetify.breakpoint.lgAndUp?n("Toc",{attrs:{content:e.toc_list}}):e._e(),n("span",{attrs:{id:"intro"}},[n("h4Title",[e._v("Bonjour")]),n("vue-markdown",[e._v(e._s(e.presentation.intro))])],1),n("hr"),n("span",{staticClass:"toc",attrs:{id:"info",name:"Informations"}},[n("h4Title",[e._v("Informations")]),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h5",{staticClass:"headline font-weight-light mb-2"},[e._v("A propos")]),n("vue-markdown",[e._v(e._s(e.presentation.apropos))]),e.presentation.cv?n("a",{attrs:{target:"_blank",href:e.presentation.cv}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-file-download")]),e._v("CV\n          ")],1)],1):e._e()],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("h5",{staticClass:"headline font-weight-light mb-2"},[e._v("Compétences")]),n("Skills",{attrs:{list:e.presentation.skills}})],1)],1)],1),n("hr"),n("span",{staticClass:"toc",attrs:{id:"proj_maj",name:"Projets majeurs"}},[n("h4Title",[e._v("Projets majeurs")]),n("ProjectList",{attrs:{msn_id:"maj",list:e.presentation.projects}})],1),n("hr"),n("span",{staticClass:"toc",attrs:{id:"proj_perso",name:"Projets persos"}},[n("h4Title",[e._v("Projets perso")]),n("ProjectList",{attrs:{msn_id:"perso",list:e.presentation.projects_perso}})],1),n("hr"),n("span",{staticClass:"toc",attrs:{id:"timeline",name:"Parcours"}},[n("Timeline")],1)],1)},L=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}]},[n("ul",{attrs:{id:"table-of-contents"}},e._l(e.content,function(t){return n("li",{key:t.id,staticClass:"mb-2"},[n("a",{class:{"primary--text":e.activeIndex===e.content.indexOf(t),active:e.activeIndex===e.content.indexOf(t),"grey--text":e.activeIndex!==e.content.indexOf(t)},on:{click:function(n){return e.$vuetify.goTo("#"+t.id)}}},[e._v(e._s(t.name))])])}),0)])},q=[],B={name:"Toc",props:{content:Array},data:()=>({activeIndex:0,currentOffset:0}),methods:{findActiveIndex(){if(this.currentOffset<100)return void(this.activeIndex=0);const e=this.content.slice().reverse(),t=e.findIndex(e=>{const t=document.getElementById(e.id);return!!t&&t.offsetTop-100<this.currentOffset}),n=e.length;this.activeIndex=t>-1?n-1-t:n},onScroll(){this.currentOffset=window.pageYOffset||document.documentElement.offsetTop,clearTimeout(this.timeout),this.timeout=setTimeout(this.findActiveIndex,50)}}},D=B,M=(n("cdc2"),n("269a")),z=n.n(M),G=n("f977"),U=Object(v["a"])(D,$,q,!1,null,"0b77684b",null),J=U.exports;z()(U,{Scroll:G["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",tile:""}},e._l(e.list,function(t){return n("span",{key:e.list.indexOf(t)},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[e._l(t.icons,function(e){return n("i",{key:e,staticClass:"medium",class:e})}),t.text?n("span",[e._v(e._s(t.text))]):e._e()],2)],1),n("v-list-item-action",[n("div",{staticClass:"right-star"},[e._l(t.stars,function(e){return n("i",{key:e,staticClass:"nf nf-fa-star"})}),t.half_star?n("i",{staticClass:"nf nf-fa-star_half_o"}):e._e(),e._l(5-t.stars-(t.half_star?1:0),function(e){return n("i",{key:e+5,staticClass:"nf nf-fa-star_o"})})],2)])],1),n("v-divider")],1)}),0)},R=[],W={name:"Skills",props:{list:Array}},N=W,F=(n("2f73"),n("b0af")),Y=n("ce7e6"),K=n("da13"),Z=n("1800"),Q=n("5d23"),X=Object(v["a"])(N,H,R,!1,null,null,null),ee=X.exports;_()(X,{VCard:F["a"],VDivider:Y["a"],VListItem:K["a"],VListItemAction:Z["a"],VListItemContent:Q["a"],VListItemTitle:Q["b"]});var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"masonry",rawName:"v-masonry",value:e.msn_id,expression:"msn_id"}],attrs:{"item-selector":".msn-item"}},e._l(e.list,function(e){return n("ProjectCard",{key:e.name,attrs:{proj:e}})}),1)},ne=[],se=n("3f9b"),ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"msn-item",attrs:{cols:"12",md:e.fullscreen?6:12,lg:e.fullscreen?4:6}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var s=t.hover;return[n("v-card",{attrs:{elevation:s?12:2}},[n("v-img",{attrs:{src:e.proj.image}},[e.proj.iconsTitle?e._e():n("v-card-title",{staticClass:"white--text align-end fill-height"},e._l(e.proj.icons,function(e){return n("i",{key:e,class:e,staticStyle:{"font-size":"34px"}})}),0)],1),n("div",{staticStyle:{position:"relative"}},[e.proj.floating?n("CardFAB",{attrs:{floating:e.proj.floating,pulse:s}}):e._e(),n("v-card-title",[e.proj.iconsTitle?n("span",{staticClass:"mr-1"},e._l(e.proj.icons,function(e){return n("i",{key:e,staticClass:"mr-1",class:e})}),0):e._e(),e._v("\n          "+e._s(e.proj.name)+"\n        ")]),n("v-card-text",[n("vue-markdown",[e._v(e._s(e.proj.description))])],1),n("v-divider"),e.proj.links?n("v-card-actions",e._l(e.proj.links,function(t){return n("v-btn",{key:t.link,attrs:{text:""},on:{click:function(n){return e.urlOpen(t.link)}}},[e._v(e._s(t.name))])}),1):e._e()],1)],1)]}}])})],1)},re=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[n("v-btn",e._g({class:{pulse:e.pulse},attrs:{color:"red lighten-1",dark:"",small:"",absolute:"",top:"",right:"",fab:""},on:{click:function(t){return e.urlOpen(e.floating.link)}}},s),[n("i",{class:e.floating.icon,staticStyle:{"font-size":"24px"}})])]}}])},[n("span",[e._v(e._s(e.floating.tooltip))])])},ie=[],le={name:"CardFAB",props:{floating:Object,pulse:Boolean},methods:{urlOpen(e){window.open(e,"_blank")}}},ce=le,ue=(n("a307"),Object(v["a"])(ce,oe,ie,!1,null,"04245b10",null)),fe=ue.exports;_()(ue,{VBtn:j["a"],VTooltip:g["a"]});var de={name:"ProjectCard",components:{VueMarkdown:d.a,CardFAB:fe},props:{proj:Object},computed:{fullscreen:()=>u.state.fullscreen},methods:{urlOpen(e){window.open(e,"_blank")}}},pe=de,me=n("99d9"),ve=n("ce87"),he=n("adda"),_e=Object(v["a"])(pe,ae,re,!1,null,null,null),be=_e.exports;_()(_e,{VBtn:j["a"],VCard:F["a"],VCardActions:me["a"],VCardText:me["b"],VCardTitle:me["c"],VCol:x["a"],VDivider:Y["a"],VHover:ve["a"],VImg:he["a"]});var ge=n("5118");s["a"].use(se["a"]);var ye={name:"ProjectList",components:{ProjectCard:be},props:{msn_id:String,list:Array},computed:{fullscreen:()=>u.state.fullscreen},watch:{fullscreen(){var e=this;Object(ge["setTimeout"])(()=>e.$redrawVueMasonry(this.msn_id),50)}},mounted(){var e=this;this.interval=Object(ge["setInterval"])(()=>e.$redrawVueMasonry(this.msn_id),500)},destroyed(){Object(ge["clearInterval"])(this.interval)}},ke=ye,we=Object(v["a"])(ke,te,ne,!1,null,"3a67c116",null),Te=we.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"display-1 my-3"},[e._t("default")],2)},je=[],xe={},Se=Object(v["a"])(xe,Ce,je,!1,null,null,null),Ae=Se.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline",{attrs:{dense:e.$vuetify.breakpoint.mdAndDown}},[n("v-timeline-item",{attrs:{"hide-dot":"",right:""},scopedSlots:e._u([{key:"opposite",fn:function(){return[n("h4Title",[e._v("Formation")])]},proxy:!0}])},[n("h4Title",[e._v("Expérience")])],1),e._l(e.timeline,function(t){return n("v-timeline-item",{key:t.title,attrs:{"fill-dot":"",left:t.isSchool,right:!t.isSchool,icon:t.isSchool?"mdi-school":"mdi-briefcase",color:t.isSchool?"accent":"error"},scopedSlots:e._u([{key:"opposite",fn:function(){return[n("span",{staticClass:"headline"},[e._v(e._s(t.year))]),n("br"),n("span",[e._v(e._s(t.place))])]},proxy:!0}],null,!0)},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t.chip?n("v-chip",{staticClass:"ma-2",attrs:{label:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-label")]),e._v("\n          "+e._s(t.chip)+"\n        ")],1):e._e(),e._v("\n        "+e._s(t.title)+"\n      ")],1),t.description?n("v-card-text",[n("vue-markdown",[e._v(e._s(t.description))])],1):e._e()],1)],1)})],2)},Ve=[],Oe={name:"Timeline",components:{h4Title:Ae,VueMarkdown:d.a},computed:{timeline:()=>u.state.json.timeline,fullscreen:()=>u.state.fullscreen}},Ie=Oe,Ee=n("cc20"),Le=n("8414"),$e=n("1e06"),qe=Object(v["a"])(Ie,Pe,Ve,!1,null,"229c8bd4",null),Be=qe.exports;_()(qe,{VCard:F["a"],VCardText:me["b"],VCardTitle:me["c"],VChip:Ee["a"],VIcon:A["a"],VTimeline:Le["a"],VTimelineItem:$e["a"]});var De={name:"Home",components:{VueMarkdown:d.a,Toc:J,Skills:ee,ProjectList:Te,h4Title:Ae,Timeline:Be},computed:{presentation:()=>u.state.json.presentation,fullscreen:()=>u.state.fullscreen},data(){return{toc_list:[]}},mounted(){var e=document.querySelectorAll(".toc"),t=this.toc_list;Array.prototype.forEach.call(e,function(e){t.push({id:e.id,name:e.getAttribute("name")})})}},Me=De,ze=(n("cccb"),Object(v["a"])(Me,E,L,!1,null,null,null)),Ge=ze.exports;_()(ze,{VBtn:j["a"],VCol:x["a"],VContainer:b["a"],VIcon:A["a"],VRow:P["a"]}),s["a"].use(I["a"]);var Ue=new I["a"]({routes:[{path:"/",name:"home",component:Ge,props:!0},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),Je=n("f309");s["a"].use(Je["a"]);var He=new Je["a"]({icons:{iconfont:"mdi"}});n("f95d");s["a"].config.productionTip=!1,new s["a"]({router:Ue,store:u,vuetify:He,render:e=>e(O)}).$mount("#app")},"5bd7":function(e,t,n){"use strict";var s=n("cab9"),a=n.n(s);a.a},"5f6d":function(e,t,n){"use strict";var s=n("335f"),a=n.n(s);a.a},"82bf":function(e,t,n){},"8f8e":function(e,t,n){},"92e4":function(e,t,n){},a307:function(e,t,n){"use strict";var s=n("82bf"),a=n.n(s);a.a},cab9:function(e,t,n){},cccb:function(e,t,n){"use strict";var s=n("4e69"),a=n.n(s);a.a},cdc2:function(e,t,n){"use strict";var s=n("8f8e"),a=n.n(s);a.a},f95d:function(e,t,n){}});
//# sourceMappingURL=app.133ef250.js.map