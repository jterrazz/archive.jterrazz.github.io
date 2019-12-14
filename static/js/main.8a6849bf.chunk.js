(this["webpackJsonpjterrazz.github.io"]=this["webpackJsonpjterrazz.github.io"]||[]).push([[0],{118:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),i=a.n(o),s=(a(98),a(13)),l=a(32),c=a(20),m=a(29),d=a(56),u=a(88),p=(a(118),a(7)),h=function(e){var t=Object(p.b)(),a=t.t,o=t.i18n,i=Object(n.useState)(window.localStorage.getItem("i18nextLng")||"en"),l=Object(s.a)(i,2),m=l[0],h=l[1],g=function(e){h(e),o.changeLanguage(e)};return r.a.createElement(d.a,{bg:"white",fixed:"top",expand:"lg"},r.a.createElement(c.b,{to:"/"},r.a.createElement(d.a.Brand,{className:"navbar-brand text-dark"},"jterrazz")),r.a.createElement(u.a,{className:"mx-auto d-flex align-items-center"},r.a.createElement("div",{className:"green-dot mr-2"}),r.a.createElement("div",{className:"small font-weight-500"},a("statusAvailable"))),r.a.createElement("div",{className:"small font-weight-600"},r.a.createElement("button",{className:"mr-md-1 px-1 px-md-2 "+("en"===m?"text-dark":"text-muted"),onClick:function(){return g("en")}},"EN"),r.a.createElement("button",{className:"fr"===m?"text-dark":"text-muted",onClick:function(){return g("fr")}},"FR")))},g=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(0),c=Object(s.a)(l,2),m=c[0],d=c[1],u=0,p=!1;var h=function(e){u=window.scrollY,p||(window.requestAnimationFrame((function(){var e;e=u,i(window.innerHeight/(document.body.offsetHeight-window.innerHeight)),d(e/document.body.offsetHeight-o*(1-e/document.body.offsetHeight)),p=!1})),p=!0)};return Object(n.useEffect)((function(){h(),window.addEventListener("scroll",h)})),r.a.createElement("div",{className:"bg-clear-2 position-relative overflow-hidden",style:{width:4,height:120}},r.a.createElement("div",{className:"progression w-100 gd-0 position-absolute",style:{height:"".concat(100*o,"%"),top:"".concat(100*m,"%")}}))},b=a(34),f=a(23),y=a(26),v=function(e){var t=[{component:f.b,link:"https://github.com/jterrazz"},{component:f.d,link:"https://medium.com/a-42-journey"},{component:f.c,link:"https://www.linkedin.com/in/jterrazz"},{component:f.f,link:"https://twitter.com/jterrazz42"},{component:b.a,link:"jterrazz@protonmail.com",type:"mailto"},{component:f.e,link:"jterrazz@protonmail.com",type:"skype"}],a=e.transparent?"":"social-outer"+("primary"===e.variant?" bg-primary":"");return r.a.createElement("ul",{className:"m-0 d-flex "+(e.vertical?"flex-column":"")},t.map((function(t){return r.a.createElement("a",{href:(t.type?"".concat(t.type,":"):"")+t.link},r.a.createElement("li",null,r.a.createElement("div",{className:(e.vertical?"mb-2 ":"mr-2 ")+a},r.a.createElement(y.a,{size:"lg",icon:t.component,className:"text-dark"}))))})))},w=a(21),E=a(17),j=function(e){var t=Object(p.b)().t;return r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("div",{className:"small text-uppercase font-weight-500 text-muted"},t("welcomeMessageSubtitle")),r.a.createElement("h1",{className:"mb-4",dangerouslySetInnerHTML:{__html:t("welcomeMessageTitle")}}),r.a.createElement(E.a,{variant:"dark",className:"rounded-pill font-weight-500 px-3",onClick:e.handleScrollToProjects},t("welcomeMessageWorkBtn")),r.a.createElement(c.b,{to:"/contact"},r.a.createElement(E.a,{variant:"transparent",className:"font-weight-500 p-3"},t("welcomeMessageContactBtn"))))},k={email:"jterrazz@protonmail.com",githubProfileUrl:"https://github.com/jterrazz",devpostProfileUrl:"https://devpost.com/jterrazz",articles:[{imageSrc:"https://miro.medium.com/max/11520/1*mxwl0_gdFfhnpXeh8RozCA.jpeg",title:"Implementing the sha256 and md5 hash functions in C",date:new Date,description:"Guide to understand and implement efficiently the sha256 and md5 functions in the C language.",link:"https://medium.com/a-42-journey/implementing-the-sha256-and-md5-hash-functions-in-c-78c17e657794?"},{imageSrc:"https://miro.medium.com/max/5312/1*P6vFidQIJazsiNkh0ijqtQ.jpeg",title:"How to create your own malloc library",date:new Date,description:"This article gathers all the useful informations to understand why malloc is useful, how it works, and how you can recreate it yourself.",link:"https://medium.com/a-42-journey/how-to-create-your-own-malloc-library-b86fedd39b96?"},{imageSrc:"https://miro.medium.com/max/10368/1*Ceb5wOYqam7eEY2NN2A0wQ.jpeg",title:"Expert Systems: How to implement a backward chaining resolver  in Python",date:new Date,description:"Inference reasoning using Python",link:"https://medium.com/a-42-journey/expert-systems-how-to-implement-a-backward-chaining-resolver-in-python-bf7d8924f72f"}],projects:[{name:"jterrazz.com",githubLink:"https://github.com/jterrazz/jterrazz.github.io",websiteLink:"https://jterrazz.com",date:new Date("2019/12/03"),loved:!0,priority:6,description:!0,category:"personal",tags:["web","react","bootstrap","github-pages","firebase-functions"],progress:1},{name:"42-woody-woodpacker",githubLink:"https://github.com/jterrazz/42-woody-woodpacker",date:new Date("2019/10/03"),priority:5,description:!0,category:"personal",tags:["42","C","virus","security","ASM"],progress:.9},{name:"42-hypertube",githubLink:"https://github.com/jterrazz/42-hypertube",date:new Date("2019/09/03"),loved:!0,priority:6,description:!0,category:"personal",tags:["42","docker","web","node.js","javascript","typescript","react","next.js","mongo"],progress:1},{name:"42-matcha",githubLink:"https://github.com/jterrazz/42-matcha",date:new Date("2019/09/03"),priority:9,description:!0,category:"personal",tags:["docker","react","bootstrap","vuex","scss"],progress:.5},{name:"myshop.eth",githubLink:"https://github.com/jterrazz/myshop.eth",date:new Date("2019/12/03"),priority:8,description:!0,category:"personal",tags:["ethereum","blockchain","ipfs"],progress:.01},{name:"deallit.com",githubLink:"https://github.com/jterrazz/deallit.com",date:new Date("2017/02/03"),loved:!0,priority:7,description:!0,category:"personal",tags:["vue.js","less","webpack","node.js","bitcoind","mocha","zero-mq","mysql","redis","aws","design"],progress:1},{name:"cryptoboard",githubLink:"https://github.com/jterrazz/cryptoboard",date:new Date("2017/12/03"),loved:!0,priority:10,description:!0,category:"personal",tags:["swift","design","iOS"],progress:1},{name:"react-native-learning",githubLinks:["https://github.com/jterrazz/rn-animated-desk","https://github.com/jterrazz/rn-authentication","https://github.com/jterrazz/rn-jobs"],date:new Date("2019/01/03"),priority:20,description:!0,category:"personal",tags:["react-native","iOS","android"],progress:1},{name:"42-music-room",githubLink:"https://github.com/jterrazz/42-music-room",date:new Date("2019/10/03"),priority:15,description:!0,category:"personal",tags:["42","iOS","android","react-native"],progress:.01},{name:"ffs-rn",githubLink:"https://github.com/jterrazz/ffs-rn",date:new Date("2019/10/03"),priority:20,description:!0,category:"personal",tags:["iOS","android","react-native"],progress:.01},{name:"42-libft",githubLink:"https://github.com/jterrazz/42-libft",date:new Date("2017/03/03"),priority:99,description:!0,category:"personal",tags:["42","C"],progress:1},{name:"42-piscine-reloaded",githubLink:"https://github.com/jterrazz/42-piscine-reloaded",date:new Date("2017/03/03"),priority:100,description:!0,category:"personal",tags:["42","C"],progress:1},{name:"42-expert-system",githubLink:"https://github.com/jterrazz/42-expert-system",mediumLink:"https://github.com/jterrazz/42-expert-system",date:new Date("2019/08/03"),priority:8,description:!0,category:"personal",tags:["42","C","python","rpn","algorithmic"],progress:1},{name:"42-libft-asm",githubLink:"https://github.com/jterrazz/42-libft-asm",mediumLink:"https://medium.com/a-42-journey/a-quick-guide-to-code-your-first-assembly-functions-43c2032ebfda",date:new Date("2019/05/03"),priority:10,description:!0,category:"personal",tags:["42","ASM"],progress:1},{name:"42-dr-quine",githubLink:"https://github.com/jterrazz/42-dr-quine",mediumLink:"https://medium.com/a-42-journey/build-your-own-quines-3dd117a89fdb",date:new Date("2019/06/03"),priority:11,description:!0,category:"personal",tags:["42","C","ASM","security"],progress:1},{name:"42-ssl-md5",githubLink:"https://github.com/jterrazz/42-ssl-md5",mediumLink:"https://medium.com/a-42-journey/implementing-the-sha256-and-md5-hash-functions-in-c-78c17e657794",date:new Date("2019/04/03"),priority:8,description:!0,category:"personal",tags:["42","C","encryption"],progress:1},{name:"42-ft-p",githubLink:"https://github.com/jterrazz/42-ft-p",date:new Date("2019/07/03"),priority:13,description:!0,category:"personal",tags:["42","C","network"],progress:.5},{name:"42-nm-otool",githubLink:"https://github.com/jterrazz/42-nm-otool",mediumLink:"https://medium.com/p/7d4fef3d7507",date:new Date("2019/04/03"),loved:!0,priority:7,description:!0,category:"personal",tags:["42","C","macho","unix"],progress:1},{name:"42-malloc",githubLink:"https://github.com/jterrazz/42-malloc",mediumLink:"https://medium.com/a-42-journey/how-to-create-your-own-malloc-library-b86fedd39b96",date:new Date("2019/03/03"),loved:!0,priority:9,description:!0,category:"personal",tags:["42","C","unix"],progress:1},{name:"42-ft-printf",githubLink:"https://github.com/jterrazz/42-ft-printf",date:new Date("2017/05/03"),priority:22,description:!0,category:"personal",tags:["42","C"],progress:1},{name:"42-corewar",githubLink:"https://github.com/jterrazz/42-corewar",date:new Date("2017/07/03"),priority:10,description:!0,category:"personal",tags:["42","C","ASM"],progress:1},{name:"42-fillit",githubLink:"https://github.com/jterrazz/42-fillit",date:new Date("2017/05/03"),priority:22,description:!0,category:"personal",tags:["42","C","algorithmic"],progress:1},{name:"42-get-next-line",githubLink:"https://github.com/jterrazz/42-get-next-line",date:new Date("2017/05/03"),priority:29,description:!0,category:"personal",tags:["42","C"],progress:1},{name:"42-lem-in",githubLink:"https://github.com/jterrazz/42-lem-in",date:new Date("2017/04/03"),priority:24,description:!0,category:"personal",tags:["42","C","algorithmic"],progress:1},{name:"42-push-swap",githubLink:"https://github.com/jterrazz/42-push-swap",date:new Date("2017/04/03"),priority:23,description:!0,category:"personal",tags:["42","C","algorithmic"],progress:1},{name:"dalia-b2c",date:new Date("2018/11/03"),linkedinLink:"https://www.linkedin.com/in/jterrazz/",priority:5,description:!0,category:"professional",tags:["python","django","nuxt.js","vue.js","postgres","heroku-hosting","heroku-ci"],progress:1},{name:"dalia-b2b",date:new Date("2018/08/03"),linkedinLink:"https://www.linkedin.com/in/jterrazz/",priority:3,description:!0,category:"professional",tags:["node.js","express","postgres","vue.js","nuxt.js"],progress:1},{name:"ethwaterloo-defi-dy",githubLink:"https://github.com/jterrazz/ethwaterloo-defi-dy",devpostLink:"https://devpost.com/software/defy-dy",date:new Date("2019/11/04"),loved:!0,priority:4,description:!0,category:"hackathon",tags:["ethereum","react"],rewards:4,progress:1},{name:"ethparis-collective",githubLink:"https://github.com/jterrazz/ethparis-collective",devpostLink:"https://devpost.com/software/ethparis",date:new Date("2019/03/03"),priority:12,description:!0,category:"hackathon",tags:["ethereum","vue.js"],rewards:1,progress:1}]},x=a(12),N=a(8),z=function(e){var t=Object(p.b)().t;return r.a.createElement("div",null,r.a.createElement("div",{className:"position-relative"},r.a.createElement(l.ParallaxBanner,{className:"w-100 mx-auto mb-3 mb-md-5",layers:[{image:"/images/anonymous.png",amount:.2}],style:{height:"320px",marginTop:-120}}),r.a.createElement("div",{className:"position-absolute d-flex justify-content-center",style:{left:0,right:0,top:-22}},r.a.createElement("div",{className:"bg-dark d-flex justify-content-center align-items-center",style:{width:44,height:44}},r.a.createElement("img",{src:"/images/arrow-down.svg",width:18})))),r.a.createElement(x.a,null,r.a.createElement(N.a,{xs:12,md:8},r.a.createElement("h2",{className:"mb-3 mb-md-5"},t("myIntroductionTitle")),r.a.createElement("p",{className:"font-weight-500 mb-3 mb-md-5",dangerouslySetInnerHTML:{__html:t("myIntroductionText")}}))),r.a.createElement("p",{className:"text-uppercase font-weight-bold mb-3 mb-md-5"},r.a.createElement("a",{href:"mailto:"+k.email,className:"text-dark"},k.email)))},S=a(80),L=a.n(S),C=(a(132),function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],i=a[1],l={show:!0,blink:!0,element:"|",hideWhenDone:!0,hideWhenDoneDelay:500};Object(n.useEffect)((function(){var e=function e(){document.getElementById("terminal").getBoundingClientRect().top<=2*window.innerHeight/3&&(i(!0),document.removeEventListener("scroll",e))};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]);var c=[{command:"whoami",results:["Terrazzoni Jean-Baptiste, 24yo from Corsica, France"]},{command:"ls -a skills.txt",results:["Backend / Frontend / Software / Design"]},{command:'curl "https://jterrazz.com/formation"',results:["42 Paris School","Accounting and finance bachelor's degree","French high school diploma in sciences"]},{command:"ps -A",results:["      PID TTY           TIME      CMD","     042 ttys000    0:00.03 Travel","     043 ttys000    0:00.03 Poker"," 18042 ttys000    0:00.03 New technologies"," 18043 ttys000    0:00.03 Cryptocurrencies"]}];return r.a.createElement("div",{id:"terminal",className:"terminal text-white small font-weight-600 p-3 overflow-hidden"},r.a.createElement("img",{src:"/images/terminal-dots.png",alt:"commands",width:53,className:"mb-2"}),o?r.a.createElement(L.a,{cursor:l,avgTypingDelay:30},c.map((function(e){return r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("span",{className:"terminal-command--blue"},"~/jterrazz"),r.a.createElement("span",{className:"terminal-command--purple"}," > "),e.command),r.a.createElement("br",null),e.results.map((function(e){return r.a.createElement("span",{className:"terminal-command terminal-command--gray"},e,r.a.createElement("br",null))})))}))):null)}),I=function(e){var t=Object(p.b)().t;return r.a.createElement("div",null,r.a.createElement("h2",{className:"mb-3 mb-md-4"},t("myInformationsTitle")),r.a.createElement(x.a,null,r.a.createElement(N.a,{xs:12,md:5,className:"mb-3 mb-md-4"},r.a.createElement("p",{className:"mb-3 mb-md-4",dangerouslySetInnerHTML:{__html:t("myInformationsText")}}),r.a.createElement(E.a,{variant:"dark",className:"rounded-pill",onClick:e.handleScrollToArticles},t("myInformationsArticleBtn"))),r.a.createElement(N.a,{xs:12,md:7},r.a.createElement("div",{className:"d-none d-md-block"},r.a.createElement(l.Parallax,{x:[20,0]},r.a.createElement(C,null))))))},P=a(92),T=a(89),A=(a(133),function(e){return r.a.createElement("button",{onClick:function(){e.onToggle&&e.onToggle(!e.selected)},className:e.className+" border d-inline-flex align-items-center tag-togglable animated"+(e.selected?" active":"")+(e.small?" small":"")},r.a.createElement("span",null,e.children),r.a.createElement("span",{className:"plus animated"}))}),M=a(91),D=function(e){return r.a.createElement("div",{className:"mydropdown position-relative"},r.a.createElement("div",{className:"mydropdown-toggle"},e.children),r.a.createElement("div",{className:"position-absolute mydropdown-label animated",style:{right:0,bottom:0,marginBottom:"130%"}},r.a.createElement("p",{className:"py-1 px-2 bg-dark text-white font-weight-600 small text-nowrap rounded m-0"},e.label)))},O=a(81),B=function(e){var t=Object(p.b)().t,a=e.project.name[0],n=e.project.githubLinks?e.project.githubLinks:[e.project.githubLink],o={4:"#083358",e:"#6bd5e1",m:"#ffb677",d:"#ff8364",j:"#ffb677",f:"#ffb677",c:"#ffb677",r:"#583c87"}[a]||"#000";return r.a.createElement("a",{href:e.project.link,className:"text-dark"},r.a.createElement("div",{className:"border p-3 rounded project-cell"},r.a.createElement("div",{className:"d-flex mb-3"},r.a.createElement("div",{className:"rounded d-flex align-items-center justify-content-center text-white font-weight-bold mr-3",style:{width:42,height:42,background:o}},a),r.a.createElement("div",null,r.a.createElement("div",{className:"font-weight-bold"},e.project.name),r.a.createElement("div",{className:"text-muted small"},e.project.date.getFullYear()))),r.a.createElement("p",{style:{fontSize:"0.95rem"}},t("projects.".concat(e.project.name.replace(".","-")))),e.project.tags.map((function(e){return r.a.createElement("li",{className:"tag"},e)})),r.a.createElement("div",{className:"mb-3 d-flex align-items-center mt-2"},r.a.createElement(y.a,{icon:b.b}),r.a.createElement(M.a,{variant:"dark",now:100*e.project.progress,style:{height:4},className:"flex-grow-1 ml-3"})),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},r.a.createElement("div",{className:"project-cell__category"},e.project.category),r.a.createElement("div",{className:"d-flex align-items-center"},e.project.rewards&&r.a.createElement("li",{className:"ml-2"},r.a.createElement("span",{className:"mr-2 small font-weight-500"},e.project.rewards),r.a.createElement(y.a,{size:"lg",icon:b.d,className:"text-warning"})),e.project.loved&&r.a.createElement("li",{className:"ml-2"},r.a.createElement(D,{label:t("projects.".concat(e.project.name.replace(".","-"),"/loved"))},r.a.createElement(y.a,{size:"lg",icon:b.c,className:"text-warning"}))),n.map((function(e){return e&&r.a.createElement("a",{href:e,className:"ml-2",target:"_blank"},r.a.createElement(y.a,{size:"lg",icon:f.b,className:"text-dark"}))})),e.project.devpostLink&&r.a.createElement("a",{href:e.project.devpostLink,className:"ml-2",target:"_blank"},r.a.createElement(y.a,{size:"lg",icon:f.a,className:"text-dark"})),e.project.linkedinLink&&r.a.createElement("a",{href:e.project.linkedinLink,className:"ml-2",target:"_blank"},r.a.createElement(y.a,{size:"lg",icon:O.faLinkedin,className:"text-dark"}))))))},H=a(82),q=a.n(H),F=function(e){var t=Object(p.b)().t,a=Object(n.useState)(["personal","professional","hackathon"].map((function(e){return{name:e,active:!0}}))),o=Object(s.a)(a,2),i=o[0],l=o[1],c=i.map((function(e){return e.active?e.name:null})).filter((function(e){return null!==e})),m=Object(P.a)(Array,Object(T.a)(e.projects.filter((function(e){return c.indexOf(e.category)>-1}))));m.sort((function(e,t){return e.priority-t.priority}));return r.a.createElement("div",null,r.a.createElement("h2",{className:"mb-4"},t("myProjectsTitle")),r.a.createElement("nav",{className:"mb-4"},r.a.createElement("label",{className:"font-weight-600 mr-2 d-none d-md-inline-block"},t("myProjectsCategoriesLabel")),i.map((function(e){return r.a.createElement(A,{className:"mr-2 mb-2 mb-md-0 px-3 py-2 px-md-4 py-md-3",key:e.name,onToggle:(a=e.name,function(e){l(i.map((function(t){return t.name===a?{name:a,active:e}:t})))}),selected:e.active},t("tags.".concat(e.name)));var a}))),r.a.createElement(q.a,{breakpointCols:{default:3,990:2,765:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},m.map((function(e){return r.a.createElement("li",{key:e.name,className:"mb-3 mb-md-4"},r.a.createElement(B,{project:e}))}))),r.a.createElement("p",{className:"font-italic m-0"},"And many others available on ",r.a.createElement("a",{href:k.githubProfileUrl},"Github")," and ",r.a.createElement("a",{href:k.devpostProfileUrl},"Devpost")))},G=function(e){return r.a.createElement("a",{href:e.link,className:"text-white"},r.a.createElement("li",{className:"article-cell bg-dark-clear rounded overflow-hidden"},r.a.createElement("div",{className:"w-100 bg-img-cover position-relative",style:{paddingBottom:"100%",backgroundImage:"url(".concat(e.imageSrc,")")}},r.a.createElement("div",{className:"position-absolute w-100 h-100 d-flex align-items-end p-3 bg-text-hover"},r.a.createElement("h4",{className:"m-0 font-weight-600"},e.title))),r.a.createElement("div",{className:"p-3 text-muted font-weight-500"},r.a.createElement("div",{className:"text-uppercase mb-2"},"Article | ",e.date.toDateString()),r.a.createElement("p",{className:"m-0 font-weight-500"},e.description))))},R=function(e){var t=Object(p.b)().t;return r.a.createElement("div",null,r.a.createElement("h2",null,t("myArticlesTitle")),r.a.createElement("p",{className:"text-muted mb-md-5 mb-3"},t("myArticlesSubtitle")),r.a.createElement(x.a,{className:"mb-md-5 mb-3"},e.articles.map((function(e){return r.a.createElement(N.a,{xs:12,md:4,className:"mb-3 mb-md-0"},r.a.createElement(G,e))}))),r.a.createElement("a",{href:"https://medium.com/a-42-journey"},r.a.createElement("p",{className:"font-italic text-white font-weight-500"},t("myArticlesMore"))))},J=function(e){var t=Object(p.b)().t;return r.a.createElement("div",null,r.a.createElement("div",{className:"position-fixed h-100 d-md-flex align-items-center mr-3 d-none",style:{right:0}},r.a.createElement(g,null)),r.a.createElement("div",{className:"position-fixed h-100 align-items-center ml-3 animated d-none d-md-flex"+(e.showMediaIcons?" opacity-100":" opacity-0"),style:{zIndex:99}},r.a.createElement(v,{vertical:!0,transparent:!0})),r.a.createElement("div",{style:{height:"100vh"},className:"position-relative"},r.a.createElement("div",{className:"position-absolute w-100 h-100"},r.a.createElement(w.a,{className:"w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center"},r.a.createElement(j,{handleScrollToProjects:e.handleScrollToProjects})))),r.a.createElement("div",{className:"bg-clear py-3 py-md-5"},r.a.createElement(w.a,null,r.a.createElement(z,null))),r.a.createElement(w.a,{className:"py-4 py-md-5"},r.a.createElement(I,{handleScrollToArticles:e.handleScrollToArticles})),r.a.createElement(w.a,{className:"py-4 py-md-5",ref:e.projectsRef},r.a.createElement(F,{projects:k.projects})),r.a.createElement("div",{className:"bg-dark text-white py-4 py-md-5",ref:e.articlesRef},r.a.createElement(w.a,null,r.a.createElement(R,{articles:k.articles}))),r.a.createElement("div",{className:"bg-dark text-white"},r.a.createElement(w.a,{className:"px-0 px-md-3"},r.a.createElement("div",{className:"bg-primary p-md-5 p-3 rounded"},r.a.createElement(x.a,{className:"d-flex align-items-center"},r.a.createElement(N.a,{xs:12,md:6},r.a.createElement("h4",{className:"font-weight-500 mb-md-0 mb-3"},t("homeGetStartedTitle"))),r.a.createElement(N.a,{xs:12,md:6},r.a.createElement("div",{className:"d-flex justify-content-start justify-content-md-end"},r.a.createElement(c.b,{to:"/contact"},r.a.createElement(E.a,{variant:"dark"},t("homeGetStartedContactBtn"))),r.a.createElement(E.a,{variant:"dark",className:"ml-3"},"Email"))))))))},U=function(e){var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement(J,{handleScrollToProjects:function(e){window.scroll({top:t.current.offsetTop-54,behavior:"smooth"})},handleScrollToArticles:function(e){window.scroll({top:a.current.offsetTop-54,behavior:"smooth"})},projectsRef:t,articlesRef:a,showMediaIcons:e.showMediaIcons})},W=function(e){var t=Object(p.b)().t;return r.a.createElement("footer",{className:"bg-dark text-white py-md-5 py-3 text-md-left text-center"},r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(N.a,{xs:12,md:4},r.a.createElement("div",{className:"small"},r.a.createElement(c.b,{to:"/",className:"text-white"},r.a.createElement("h5",{className:"font-weight-800"},"jterrazz.com")),r.a.createElement("div",null,"@2019"))),r.a.createElement(N.a,{xs:12,md:4,className:"d-flex justify-content-center align-items-center my-3"},r.a.createElement(v,{variant:e.variant})),r.a.createElement(N.a,{xs:12,md:4},r.a.createElement("div",{className:"text-muted text-md-right text-center small"},r.a.createElement("div",null,t("footerMadeWith")," ",r.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," (& ReactJS)"),r.a.createElement("div",null,t("footerHostedOn")," GitHub Pages"))))))},_=function(e){return null},V=a(35),K=a.n(V),Y=a(43),Q=a(19),X=a(86),$=a(85),Z=a.n($).a.create({baseURL:"https://europe-west1-com-jterrazz.cloudfunctions.net"}),ee={postContactForm:function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.post("/contactFormSubmit",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],i=a[1],l=Object(p.b)().t,c=function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ee.postContactForm(t);case 4:i(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{className:"flex-fill pb-md-5",id:"contact-page"},r.a.createElement(x.a,{className:"py-5"},r.a.createElement(N.a,{xs:12,md:6,className:"d-flex align-items-center"},r.a.createElement("h1",{className:"font-weight-700 my-4"},l("contactTitle"))),r.a.createElement(N.a,{xs:12,md:6},r.a.createElement("img",{src:"/images/working-man.png",alt:"working man",style:{width:"100%"}}))),r.a.createElement(x.a,null,r.a.createElement(N.a,{xs:12,md:6},r.a.createElement(X.a,{onSubmit:c,initialValues:{}},(function(e){var t=e.handleSubmit,a=e.handleChange;e.handleBlur,e.values,e.touched,e.isValid,e.errors;return r.a.createElement(Q.a,{noValidate:!0,onSubmit:t},r.a.createElement(Q.a.Group,{controlId:"fullName"},r.a.createElement(Q.a.Label,null,l("contactInputName")),r.a.createElement(Q.a.Control,{type:"text",placeholder:l("contactInputPlaceholderName"),className:"rounded-0",onChange:a})),r.a.createElement(Q.a.Group,{controlId:"message"},r.a.createElement(Q.a.Label,null,l("contactInputMessage")),r.a.createElement(Q.a.Control,{as:"textarea",rows:"3",placeholder:l("contactInputPlaceholderMessage"),onChange:a,className:"rounded-0"})),r.a.createElement(Q.a.Group,{controlId:"email"},r.a.createElement(Q.a.Label,null,l("contactInputEmail")),r.a.createElement(Q.a.Control,{required:!0,type:"email",placeholder:l("contactInputPlaceholderEmail"),onChange:a,className:"rounded-0"}),r.a.createElement(Q.a.Control.Feedback,null,"Looks good!")),r.a.createElement(E.a,{variant:"dark",type:"submit",className:"w-100 rounded-0"},l("contactSubmitButton")))})),o&&r.a.createElement("p",{className:"text-success text-center font-weight-500 p-2"},"Message sent !")),r.a.createElement(N.a,{xs:12,md:6,className:"my-3"},r.a.createElement("p",{className:"font-italic m-0"},l("contactReachMeTitle")," "),r.a.createElement("p",{className:"text-uppercase font-weight-bold mb-5"},r.a.createElement("a",{href:"mailto:"+k.email,className:"text-dark"},k.email)))))};var ae=Object(m.f)((function(e){var t=0,a=!1,o=Object(n.useState)(!0),i=Object(s.a)(o,2),d=i[0],u=i[1];window.addEventListener("scroll",(function(e){t=window.scrollY,a||(window.requestAnimationFrame((function(){t>window.innerHeight/2?u(!1):u(!0),a=!1})),a=!0)}));var p="/"===e.location.pathname?"primary":"";return r.a.createElement(c.a,null,r.a.createElement(h,null),r.a.createElement(l.ParallaxProvider,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/contact"},r.a.createElement(te,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(U,{showMediaIcons:d})))),r.a.createElement(W,{variant:p}),r.a.createElement(_,null))})),ne=function(){return r.a.createElement(c.a,null,r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(87),oe=a(90),ie={statusAvailable:"Available for work",welcomeMessageSubtitle:"Hello",welcomeMessageTitle:"I <b>design and build</b> the core of<br/>tomorrow's best applications",welcomeMessageWorkBtn:"My work",welcomeMessageContactBtn:"Contact me",myIntroductionTitle:"Hey there, my name is Jean-Baptiste, a passionate developer from France.",myIntroductionText:"I love connecting the most innovative companies with their customers through <b>efficient, well designed code and beautiful interfaces</b>. I can help you and your team conceive and create the applications that will change tomorrow.<br/><br/>But enough about me, how can I help you ?",myInformationsTitle:"About me",myInformationsText:"My <b>passion for technology</b> since my youngest age led me into joining the most innovative programming school: the <b>Paris 42 School</b>. From my background in <b>computer science and finance</b>, I acquired a diverse set of skills to help you build amazing applications.<br/><br/>I am now a <b>versatile developer</b> ready to offer solutions outside of the traditional developer's framework. Beside acquiring the latest skills in <b>Software and Web development</b>, I thrive in fast-paced environments and I am able to <b>collaborate</b> efficiently with teams.<br/><br/>I'm always curious for new adventures, so don't hesitate to contact me with your crazy ideas!",myInformationsArticleBtn:"Check my articles",myProjectsTitle:"My projects",myProjectsCategoriesLabel:"Categories:",myArticlesTitle:"My medium stories",myArticlesSubtitle:"Articles about unix, security and web development",myArticlesMore:"Access many more stories here",homeGetStartedTitle:"Let's get started!",homeGetStartedContactBtn:"Contact form",contactTitle:"Let's work together!",contactReachMeTitle:"Or reach me directly",contactInputName:"Name",contactInputPlaceholderName:"Enter your name",contactInputMessage:"Message",contactInputPlaceholderMessage:"Enter your message",contactInputEmail:"Email",contactInputPlaceholderEmail:"Enter your email",contactSubmitButton:"Submit",tags:{personal:"Personal",professional:"Profesional",hackathon:"Hackathon"},footerMadeWith:"Made with",footerHostedOn:"Hosted on",projects:{"jterrazz-com":"My portfolio website, hosted on Github Pages.","jterrazz-com/loved":"Beautiful design","42-woody-woodpacker":"Runtime packer for ELF binaries.","42-hypertube":"A web application for discovering and streaming peer to peer videos.","42-hypertube/loved":"Async backend with clean code","42-matcha":"A dating website made with VueJS and Express.","myshop-eth":"A decentralized, open and social platform that enable direct peer to peer markets.","deallit-com":"A social marketplace that use cryptocurrencies.","deallit-com/loved":"Complete web project with beautiful design",cryptoboard:"An iOS cryptocurrency tracker written in swift for learning purposes.","cryptoboard/loved":"Beautiful design","react-native-learning":"A collection of projects to learn about react native.","42-music-room":"A mobile application in partnership with Deezer.","ffs-rn":"Not your usual TODO app.","42-libft":"A basic C library used in the 42 projects.","42-piscine-reloaded":"42 Paris School entry test.","42-expert-system":"Backward chaining rule based system in Python.","42-libft-asm":"Basic library implemented in Assembly using the x86 Intel syntax.","42-dr-quine":"This project addresses auto-replication issues, and confronts you the Kleene's recursion theorem.","42-ssl-md5":"OpenSSL implementation in C. Supports md5, sha1,  sha256, sha224, sha512 and sha384 algorithms.","42-ft-p":"FTP client and server implemented in C, based on the RFC959 standard. Handle file transfers on the TCP/IP protocol.","42-nm-otool":"Nm and otool implementation in C. Parse Mach-o files, supports fat binaries, archives and corrupted binaries.","42-nm-otool/loved":"Clean and well documented project","42-malloc":"C implementation of the malloc library using mmap.","42-malloc/loved":"Clean and well documented project","42-ft-printf":"Custom printf implementation in C.","42-corewar":"Virtual machine simulating basic processors operations, with simple notions of Assembly.","42-fillit":"Algorithmic project for the 42 Paris School.","42-get-next-line":"Read lines from a file descriptor.","42-lem-in":"Handle a virtual anthill efficiently.","42-push-swap":"Sorts data on a stack, with a limited set of instructions and limited number of moves.","dalia-b2c":"DaliaB2C is an application allowing florist's clients to gift flowers, without knowing the delivery address of the receiver. The web/mobile app gets an order with the receiver data, and automatically contacts him to retrieve the delivery information. Find more about this project on LinkedIn.","dalia-b2b":"At Dalia, we had the idea to create a new B2B product for the company. The goal was to provide merchant websites an API that would allow their clients to gift products, only by knowing the receiver phone number / email. Find more about this project on LinkedIn.","ethwaterloo-defi-dy":"Derivatives of Defi protocols made for the ETHWaterloo hackathon in 36 hours. @smartcontractkit , @graphprotocol , @UMAprotocol and @fortmatic bounties winner.","ethwaterloo-defi-dy/loved":"Great team project","ethparis-collective":"Solidity crowdfunding platform created in 36 hours at the EthParis hackathon. Built with truffle, VueJS, SKALE sidechain, NodeJS. SKALE labs bounty winner","ethparis-collective/loved":"Great team project"}},se={statusAvailable:"Disponible",welcomeMessageSubtitle:"Bonjour",welcomeMessageTitle:"Je <b>con\xe7ois et construis</b> le code des <br/>applications de demain",welcomeMessageWorkBtn:"Mes projets",welcomeMessageContactBtn:"Contactez moi",myIntroductionTitle:"Bonjour, je suis Jean-Baptiste, un developeur passionn\xe9 \xe0 Paris.",myIntroductionText:"J'aime mettre en relation les entreprises les plus innovantes avec leurs clients. Gr\xe2ce \xe0 du code clair, efficace, intelligemment construit et de belles interfaces, je vous aiderai \xe0 cr\xe9er les applications du monde de demain.",myInformationsTitle:"Mon parcours",myInformationsText:"Ma <b>passion pour les nouvelles technologies</b> depuis mon plus jeune \xe2ge m'a amen\xe9 \xe0 int\xe9grer un des \xe9coles de programmation les plus innovante, <b>42 Paris</b>. D'une <b>formation informatique et financi\xe8re</b>, j'ai su acqu\xe9rir un ensemble de comp\xe9tences vari\xe9es qui vous aideront \xe0 construire de superbes applications.<br/><br/>Je suis d\xe9sormais un <b>developeur polyvalent</b>, capable de proposer des solutions en dehors du cadre habituel de developeur. En plus de ma\xeetriser les <b>techniques les plus r\xe9centes du developement web et logiciel</b>, je suis capable de <b>collaborer efficacement</b> en \xe9quipe et je sais m'\xe9panouir dans les environements en constante \xe9volution<br/><br/>Avide de nouvelles aventures, n'h\xe9sitez pas \xe0 me contacter avec vos superbes ide\xe9es!",myInformationsArticleBtn:"Acc\xe9der \xe0 mes articles",myProjectsTitle:"Mes projets",myProjectsCategoriesLabel:"Categories:",myArticlesTitle:"Mes articles",myArticlesSubtitle:"Unix, web, securit\xe9",myArticlesMore:"Acc\xe9der a tous mes articles",homeGetStartedTitle:"C'est parti!",homeGetStartedContactBtn:"Formulaire",contactTitle:"Travaillons ensemble!",contactReachMeTitle:"Ou contactez moi directement",contactInputName:"Nom",contactInputPlaceholderName:"Entrez votre nom",contactInputMessage:"Message",contactInputPlaceholderMessage:"Entrez votre message",contactInputEmail:"Email",contactInputPlaceholderEmail:"Entrez votre email",contactSubmitButton:"Envoyer",tags:{personal:"Personnel",professional:"Professionnel",hackathon:"Hackathon"},footerMadeWith:"R\xe9alis\xe9 avec",footerHostedOn:"H\xe9berg\xe9 sur",projects:{"jterrazz-com":"Mon portfolio, h\xe9berg\xe9 sur Github Pages","jterrazz-com/loved":"Beau design","42-woody-woodpacker":"Packer pour binaires ELF.","42-hypertube":"Une application web NodeJS/ReactJS pour d\xe9couvrir et rechercher des vid\xe9os P2P.","42-hypertube/loved":"Backend async et bien document\xe9","42-matcha":"Un site de rencontre en VueJS / Express.","myshop-eth":"Une marketplace sociale, d\xe9centralis\xe9e et ouverte pour permettre de vrais P2P echanges.","deallit-com":"Une marketplace avec crypto monnaies.","deallit-com/loved":"Projet web complet avec un beau design",cryptoboard:"Un trackeur de crypto monnaies r\xe9alis\xe9 pour apprendre Swift.","cryptoboard/loved":"Belle interface","react-native-learning":"Une collection de projets pour apprendre react-native.","42-music-room":"Une application mobile en partenariat avec Deezer.","ffs-rn":"Pas votre habituelle TODO app.","42-libft":"Librarie C de base pour les projets de l'ecole 42.","42-piscine-reloaded":"Test d'entr\xe9e de l'\xe9cole 42","42-expert-system":"Expert system en Python.","42-libft-asm":"Librarie de base r\xe9alis\xe9e en ASM et la syntax x86 Intel.","42-dr-quine":"Projet d'auto r\xe9plication, th\xe9or\xe8me de Kleene.","42-ssl-md5":"Impl\xe9mentation en C d'OpenSSL. Supporte les algorithmes md5, sha1, sha256, sha224, sha512 et sha384.","42-ft-p":"Client et serveur FTP impl\xe9ment\xe9s en C. Bas\xe9 sur le standard RFC959.","42-nm-otool":"Impl\xe9mentation des commandes nm et otool en C pour fichiers Mach-o, avec support des fat binaries, archives et des binaires corrompus.","42-nm-otool/loved":"Code clair et bien document\xe9","42-malloc":"Impl\xe9mentation en C de malloc avec mmap.","42-malloc/loved":"Code clair et bien document\xe9","42-ft-printf":"Impl\xe9mentation en C de printf.","42-corewar":"Machine virtuelle simulant un processeur et ses instructions, avec des notions d'assembly.","42-fillit":"Project d'algorithmie pour l'\xe9cole 42.","42-get-next-line":"Lire l'entr\xe9e d'un file descriptor.","42-lem-in":"G\xe9rer un fourmili\xe8re virtuelle efficacement.","42-push-swap":"Trier des donn\xe9es sur une pile, avec un nombre d'instructions et de d\xe9placement limit\xe9.","dalia-b2c":"DaliaB2C est une application qui permet aux fleuristes de proposer une livraison par cadeau sans connaitre l'addresse du destinataire. L'application recoit une commande et se charge de contacter le receveur. Vous pouvez trouver plus d'information \xe0 ce sujet sur mon LinkedIn.","dalia-b2b":"Chez Dalia, nous avons eu l'id\xe9e de cr\xe9er un service API g\xe9n\xe9rique \xe0 destination des sites de ecommerce. Le but \xe9tait de leur fournir une API qui permettrait \xe0 leur client d'offrir directement sur le site en connaissant uniquement un numero de telephone / email. Vous pouvez trouver plus d'information \xe0 ce sujet sur mon LinkedIn.","ethwaterloo-defi-dy":"Produits financiers d\xe9riv\xe9s sur les protocoles Ethereum r\xe9alis\xe9 au hackathon EthWaterloo au Canada. Gagnant des prix @smartcontractkit , @graphprotocol , @UMAprotocol and @fortmatic.","ethwaterloo-defi-dy/loved":"Excellent projet de groupe","ethparis-collective":"Plateforme de crowdfunding sur la blockchain ethereum cr\xe9\xe9 en 36 heures pour le hackathon EthParis. Avec truffle, VueJS, SKALE sidechain, NodeJS. Gagnant du prix SKALE labs","ethparis-collective/loved":"Excellent projet de groupe"}};re.a.use(oe.a).use(p.a).init({resources:{en:{translation:ie},fr:{translation:se}},caches:["localStorage","cookie"],fallbackLng:"en",interpolation:{escapeValue:!1}}),i.a.render(r.a.createElement((function(){return r.a.createElement(ne,null)}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,a){e.exports=a(152)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.8a6849bf.chunk.js.map