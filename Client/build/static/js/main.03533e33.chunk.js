(this.webpackJsonpcandles=this.webpackJsonpcandles||[]).push([[0],{10:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(21),a=c.n(n),r=c(11),i=c(9),l=(c(27),c(0)),o=["btn--primary","btn--outline"],u=["btn--medium","btn--large"],d=function(e){var t=e.children,c=e.type,s=e.onClick,n=e.page,a=e.buttonStyle,r=e.buttonSize,i=o.includes(a)?a:o[0],d=u.includes(r)?r:u[0];return Object(l.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:"btn-mobile",children:Object(l.jsx)("button",{className:"btn ".concat(i," ").concat(d),onClick:s,type:c,children:t})})};c(29);var j=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),o=Object(r.a)(a,2),u=(o[0],o[1]),d=function(){return n(!1)},j=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(s.useEffect)((function(){j()}),[]),window.addEventListener("resize",j),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)(i.b,{to:"/",className:"navbar-logo",onClick:d,children:"CANdles"}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:Object(l.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"https://www.instagram.com/can_dles5280/",className:"nav-links",onClick:d,children:Object(l.jsx)("i",{className:"fab fa-instagram fa-2x"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"https://www.etsy.com/shop/CANdles5280",className:"nav-links",onClick:d,children:Object(l.jsx)("i",{className:"fab fa-etsy fa-2x"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/",className:"nav-links",onClick:d,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/products",className:"nav-links",onClick:d,children:"Products"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/about",className:"nav-links",onClick:d,children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/contact",className:"nav-links",onClick:d,children:"Contact"})})]})]})})})},b=c(2),m=(c(10),c(38),c.p+"static/media/video-2.f09ca1bd.mp4");var h=function(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("video",{src:m,autoPlay:!0,loop:!0,muted:!0}),Object(l.jsx)("h1",{children:"CANdles"}),Object(l.jsx)("p",{children:"Earth-friendly wax + recycled craft beer cans."}),Object(l.jsxs)("div",{className:"home-btns",children:[Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",page:"https://www.etsy.com/shop/CANdles5280",children:"ETSY"}),Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",page:"/contact",children:"CONTACT"})]})]})};c(19);var x=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)("a",{className:"cards__item__link",href:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{src:e.src,alt:"cards",className:"cards__item__img"})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.listing})})]})})})},p=c(4),O=c.n(p),f=c(8),_=c(18),v=c.n(_),N={USER_URL:"https://openapi.etsy.com/v2/users/CANdles.js?callback=getData&api_key=",LISTINGS_URL:"https://openapi.etsy.com/v2/shops/CANdles5280/listings/active.js?callback=getData&api_key=",KEY: process.env.REACT_APP_KEYSTRING, getUser:function(){document.getElementById("user").setAttribute("src",this.USER_URL+this.KEY)},getListings:function(){document.getElementById("listings").setAttribute("src",this.LISTINGS_URL+this.KEY)},getJsonpUser:function(){var e=this;return Object(f.a)(O.a.mark((function t(){var c,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()(e.user_URL+e.KEY+"&includes=MainImage");case 2:return c=t.sent,t.next=5,c.json();case 5:return s=t.sent,t.abrupt("return",s.results);case 7:case"end":return t.stop()}}),t)})))()},getJsonpListing:function(){var e=this;return Object(f.a)(O.a.mark((function t(){var c,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()(e.LISTINGS_URL+e.KEY+"&includes=MainImage");case 2:return c=t.sent,t.next=5,c.json();case 5:return s=t.sent,t.abrupt("return",s.results);case 7:case"end":return t.stop()}}),t)})))()}};var g=function(){var e=Object(s.useState)([{title:"",listing_id:"",url:"/products",price:"",MainImage:{url_fullxfull:""}}]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){N.getJsonpListing().then((function(e){return n(e)}))}),[]),Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("a",{href:"https://www.etsy.com/shop/CANdles5280",children:Object(l.jsx)("h1",{children:"Check out our active listings on Etsy!"})}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsx)("div",{className:"cards__wrapper",children:Object(l.jsx)("ul",{className:"cards__items",children:c.map((function(e,t){return Object(l.jsx)(x,{src:e.MainImage.url_fullxfull,listing:e.title.slice(0,e.title.indexOf("-")),label:"$"+e.price,path:e.url},t)}))})})})]})};c(40);var y=function(){var e=function(){var e=Object(f.a)(O.a.mark((function e(){var t,c,s,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById("subscriber").value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){e.next=15;break}return t={email:document.getElementById("subscriber").value},console.log("Sending this email to the server: ".concat(t.email)),e.next=5,fetch("/subscribers",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 5:return c=e.sent,e.next=8,c.json();case 8:s=e.sent,n=document.getElementById("subscriber"),console.log(s),JSON.stringify(s).includes("MongoError")?(setTimeout((function(){n.value="",n.placeholder="Uh Oh. Try again.",document.getElementById("serverFailure").style.visibility="visible"}),800),setTimeout((function(){return window.location.reload(),!1}),2200)):(setTimeout((function(){n.value="",n.placeholder="Success!",document.getElementById("serverSuccess").style.visibility="visible"}),800),setTimeout((function(){return window.location.reload(),!1}),1800)),e.next=17;break;case 15:setTimeout((function(){document.getElementById("subscriber").value="",document.getElementById("subscriber").placeholder="Uh Oh. Try again.",document.getElementById("serverFailure").style.visibility="visible"}),800),setTimeout((function(){return window.location.reload(),!1}),2200);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"footer-container",children:Object(l.jsxs)("section",{className:"footer-subscription",children:[Object(l.jsx)("p",{className:"footer-subscription-heading",children:"Want more CANdles?"}),Object(l.jsx)("p",{className:"footer-subscription-text",children:"Subscribe and receive awesome CANdles updates!"}),Object(l.jsxs)("div",{className:"input areas",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("input",{id:"subscriber",type:"email",placeholder:"Your email",className:"footer-input"}),Object(l.jsx)("i",{id:"serverSuccess",className:"fas fa-check"}),Object(l.jsx)("i",{id:"serverFailure",className:"fas fa-user-times"})]}),Object(l.jsx)("button",{onClick:e,className:"btn--outline",children:"Subscribe"})]})]})})};var w=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(g,{}),Object(l.jsx)(y,{})]})};c(20);var k=function(e){return Object(l.jsx)("div",{className:"product__li__wrapper",children:Object(l.jsxs)("li",{className:"product__li",children:[Object(l.jsx)("img",{src:e.imageUrl,alt:"product",className:"product__li__img"}),Object(l.jsxs)("div",{className:"product__li__info",children:[Object(l.jsx)("h6",{className:"producer__li__text",children:e.producer}),Object(l.jsxs)("h5",{className:"product__li__text",children:['"',e.product,'"']})]})]})})},C={url:"/product",getProducts:function(){var e=this;return Object(f.a)(O.a.mark((function t(){var c,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.url);case 2:return c=t.sent,t.next=5,c.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})))()}};var S=function(){var e=Object(s.useState)([{imageUrl:"",producer:"",product:""}]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){C.getProducts().then((function(e){return n(e)}))}),[]),Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("h1",{children:"Our Complete Collection of CANdles"}),Object(l.jsx)("div",{className:"product__container",children:Object(l.jsx)("div",{className:"product__wrapper",children:Object(l.jsx)("ul",{className:"product__ul",children:c.map((function(e,t){return Object(l.jsx)(k,{imageUrl:e.imageUrl,producer:e.producer,product:e.product},t)}))})})})]})};var E=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"products",children:Object(l.jsx)("h1",{children:"Products"})}),Object(l.jsx)(S,{})]})};c(41);var I=function(){return Object(l.jsx)("div",{className:"about__container",children:Object(l.jsxs)("div",{className:"about__wrapper",children:[Object(l.jsxs)("article",{className:"about__article",children:[Object(l.jsx)("header",{className:"about__header",children:Object(l.jsx)("h5",{children:"What are 'CANdles?'"})}),Object(l.jsx)("p",{children:"Hand-crafted candles, made from recycled craft beer cans and a mix of soy and recycled wax."})]}),Object(l.jsxs)("article",{className:"about__article",children:[Object(l.jsx)("header",{className:"about__header",children:Object(l.jsx)("h6",{children:"Sustainability"})}),Object(l.jsx)("p",{children:"We use all-natural or recycled products in every CANdle."})]})]})})};var A=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"about",children:Object(l.jsx)("h1",{children:"About Us"})}),Object(l.jsx)(I,{})]})},T=(c(42),function(){var e=Object(f.a)(O.a.mark((function e(){var t,c,s,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("name__input").value,c=document.getElementById("email__input").value,s=document.getElementById("message__textarea").value,""!==t&&""!==c&&""!==s){e.next=7;break}console.log("click"),e.next=14;break;case 7:return e.next=9,fetch("/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:c,message:s})});case 9:return n=e.sent,e.next=12,n.json();case 12:a=e.sent,console.log(a);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());var U=function(){return Object(l.jsx)("div",{className:"contact__container",children:Object(l.jsxs)("div",{className:"contact__wrapper",children:[Object(l.jsx)("h1",{children:"Send us a message!"}),Object(l.jsxs)("div",{className:"contact__form__container",children:[Object(l.jsx)("input",{className:"name__input",id:"name__input",placeholder:"What's your name?"}),Object(l.jsx)("input",{className:"email__input",id:"email__input",type:"email",placeholder:"What's your email?"}),Object(l.jsx)("textarea",{className:"message__textarea",id:"message__textarea",placeholder:"Your message to us:"}),Object(l.jsx)("button",{className:"btn--contact",type:"submit",onClick:T,children:"Send it!"})]})]})})};var B=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"contact",children:Object(l.jsx)("h1",{children:"Contact"})}),Object(l.jsx)(U,{})]})},L=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(b.a,{path:"/products",exact:!0,component:E}),Object(l.jsx)(b.a,{path:"/about",exact:!0,component:A}),Object(l.jsx)(b.a,{path:"/contact",exact:!0,component:B})]})]})})};a.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.03533e33.chunk.js.map