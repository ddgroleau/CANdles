(this.webpackJsonpcandles=this.webpackJsonpcandles||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(21),r=n.n(s),a=n(11),i=n(9),l=(n(27),n(0)),o=["btn--primary","btn--outline"],u=["btn--medium","btn--large"],d=function(e){var t=e.children,n=e.type,c=e.onClick,s=e.page,r=e.buttonStyle,a=e.buttonSize,i=o.includes(r)?r:o[0],d=u.includes(a)?a:u[0];return Object(l.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"btn-mobile",children:Object(l.jsx)("button",{className:"btn ".concat(i," ").concat(d),onClick:c,type:n,children:t})})};n(29);var j=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),o=Object(a.a)(r,2),u=(o[0],o[1]),d=function(){return s(!1)},j=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(c.useEffect)((function(){j()}),[]),window.addEventListener("resize",j),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)(i.b,{to:"/",className:"navbar-logo",onClick:d,children:"CANdles"}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(l.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"https://www.instagram.com/can_dles5280/",className:"nav-links",onClick:d,children:Object(l.jsx)("i",{className:"fab fa-instagram fa-2x"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"https://www.etsy.com/shop/CANdles5280",className:"nav-links",onClick:d,children:Object(l.jsx)("i",{className:"fab fa-etsy fa-2x"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/",className:"nav-links",onClick:d,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/products",className:"nav-links",onClick:d,children:"Products"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/about",className:"nav-links",onClick:d,children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/contact",className:"nav-links",onClick:d,children:"Contact"})})]})]})})})},b=n(2),m=(n(10),n(38),n.p+"static/media/video-2.f09ca1bd.mp4");var x=function(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("video",{src:m,autoPlay:!0,loop:!0,muted:!0,playsinline:!0}),Object(l.jsx)("h1",{children:"CANdles"}),Object(l.jsx)("p",{children:"Earth-friendly wax + recycled craft beer cans."}),Object(l.jsxs)("div",{className:"home-btns",children:[Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",page:"https://www.etsy.com/shop/CANdles5280",children:"ETSY"}),Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",page:"/contact",children:"CONTACT"})]})]})};n(19);var h=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)("a",{className:"cards__item__link",href:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{src:e.src,alt:"cards",className:"cards__item__img"})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.listing})})]})})})},p=n(3),O=n.n(p),f=n(7),v=n(18),_=n.n(v),g=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/etsy");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N={getUser:function(){return Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.t0=document.getElementById("user"),e.next=6,t.USER_URL;case 6:return e.t1=e.sent,e.next=9,t.KEY;case 9:e.t2=e.sent,e.t3=e.t1+e.t2,e.t0.setAttribute.call(e.t0,"src",e.t3);case 12:case"end":return e.stop()}}),e)})))()},getListings:function(){return Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.t0=document.getElementById("listings"),e.next=6,t.LISTINGS_URL;case 6:return e.t1=e.sent,e.next=9,t.KEY;case 9:e.t2=e.sent,e.t3=e.t1+e.t2,e.t0.setAttribute.call(e.t0,"src",e.t3);case 12:case"end":return e.stop()}}),e)})))()},getJsonpUser:function(){return Object(f.a)(O.a.mark((function e(){var t,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.t0=_.a,e.next=6,t.user_URL;case 6:return e.t1=e.sent,e.next=9,t.KEY;case 9:return e.t2=e.sent,e.t3=e.t1+e.t2,e.t4=e.t3+"&includes=MainImage",e.next=14,(0,e.t0)(e.t4);case 14:return n=e.sent,e.next=17,n.json();case 17:return c=e.sent,e.abrupt("return",c.results);case 19:case"end":return e.stop()}}),e)})))()},getJsonpListing:function(e){return Object(f.a)(O.a.mark((function t(){var n,c,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return n=t.sent,t.t0=_.a,t.next=6,n.LISTINGS_URL;case 6:return t.t1=t.sent,t.next=9,n.KEY;case 9:return t.t2=t.sent,t.t3=t.t1+t.t2,t.t4=t.t3+"&includes=MainImage",t.t5={signal:e.signal},t.next=15,(0,t.t0)(t.t4,t.t5);case 15:return c=t.sent,t.next=18,c.json();case 18:return s=t.sent,t.abrupt("return",s.results);case 20:case"end":return t.stop()}}),t)})))()}};var y=function(){var e=Object(c.useState)([{title:"",listing_id:"",url:"/products",price:"",MainImage:{url_fullxfull:""}}]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=new AbortController;return N.getJsonpListing(e).then((function(e){return s(e)})),function(){e.abort()}}),[]),Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("a",{href:"https://www.etsy.com/shop/CANdles5280",children:Object(l.jsx)("h1",{children:"Check out our active listings on Etsy!"})}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsx)("div",{className:"cards__wrapper",children:Object(l.jsx)("ul",{className:"cards__items",children:n.map((function(e,t){return Object(l.jsx)(h,{src:e.MainImage.url_fullxfull,listing:e.title.slice(0,e.title.indexOf("-")),label:"$"+e.price,path:e.url},t)}))})})})]})};n(40);var w=function(){var e=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById("subscriber").value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){e.next=15;break}return t={email:document.getElementById("subscriber").value},console.log("Sending this email to the server: ".concat(t.email)),e.next=5,fetch("/subscribers",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,s=document.getElementById("subscriber"),console.log(c),JSON.stringify(c).includes("MongoError")?(setTimeout((function(){s.value="",s.placeholder="Uh Oh. Try again.",document.getElementById("serverFailure").style.visibility="visible"}),800),setTimeout((function(){return window.location.reload(),!1}),2200)):(setTimeout((function(){s.value="",s.placeholder="Success!",document.getElementById("serverSuccess").style.visibility="visible"}),800),setTimeout((function(){return window.location.reload(),!1}),1800)),e.next=17;break;case 15:setTimeout((function(){document.getElementById("subscriber").value="",document.getElementById("subscriber").placeholder="Uh Oh. Try again.",document.getElementById("serverFailure").style.visibility="visible"}),800),setTimeout((function(){return window.location.reload(),!1}),2200);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"footer-container",children:Object(l.jsxs)("section",{className:"footer-subscription",children:[Object(l.jsx)("p",{className:"footer-subscription-heading",children:"Want more CANdles?"}),Object(l.jsx)("p",{className:"footer-subscription-text",children:"Subscribe and receive awesome CANdles updates!"}),Object(l.jsxs)("div",{className:"input areas",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("input",{id:"subscriber",type:"email",placeholder:"Your email",className:"footer-input"}),Object(l.jsx)("i",{id:"serverSuccess",className:"fas fa-check"}),Object(l.jsx)("i",{id:"serverFailure",className:"fas fa-user-times"})]}),Object(l.jsx)("button",{onClick:e,className:"btn--outline",children:"Subscribe"})]})]})})};var k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(y,{}),Object(l.jsx)(w,{})]})};n(20);var C=function(e){return Object(l.jsx)("div",{className:"product__li__wrapper",children:Object(l.jsxs)("li",{className:"product__li",children:[Object(l.jsx)("img",{src:e.imageUrl,alt:"product",className:"product__li__img"}),Object(l.jsxs)("div",{className:"product__li__info",children:[Object(l.jsx)("h6",{className:"producer__li__text",children:e.producer}),Object(l.jsxs)("h5",{className:"product__li__text",children:['"',e.product,'"']})]})]})})},S={url:"/product",getProducts:function(e){var t=this;return Object(f.a)(O.a.mark((function n(){var c,s;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t.url,{signal:e.signal});case 2:return c=n.sent,n.next=5,c.json();case 5:return s=n.sent,console.log(s),n.abrupt("return",s);case 8:case"end":return n.stop()}}),n)})))()}};var E=function(){var e=Object(c.useState)([{imageUrl:"",producer:"",product:""}]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=new AbortController;return S.getProducts(e).then((function(e){return s(e)})),function(){e.abort()}}),[]),Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("h1",{children:"Our Complete Collection of CANdles"}),Object(l.jsx)("div",{className:"product__container",children:Object(l.jsx)("div",{className:"product__wrapper",children:Object(l.jsx)("ul",{className:"product__ul",children:n.map((function(e,t){return Object(l.jsx)(C,{imageUrl:e.imageUrl,producer:e.producer,product:e.product},t)}))})})})]})};var I=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"products",children:Object(l.jsx)("h1",{children:"Products"})}),Object(l.jsx)(E,{})]})};n(41);var A=function(){return Object(l.jsx)("div",{className:"about__container",children:Object(l.jsxs)("div",{className:"about__wrapper",children:[Object(l.jsxs)("article",{className:"about__article",children:[Object(l.jsx)("header",{className:"about__header",children:Object(l.jsx)("h5",{children:"What are 'CANdles?'"})}),Object(l.jsx)("p",{children:"Hand-crafted candles, made from recycled craft beer cans and a mix of soy and recycled wax."})]}),Object(l.jsxs)("article",{className:"about__article",children:[Object(l.jsx)("header",{className:"about__header",children:Object(l.jsx)("h6",{children:"Sustainability"})}),Object(l.jsx)("p",{children:"We use all-natural or recycled products in every CANdle."})]})]})})};var T=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"about",children:Object(l.jsx)("h1",{children:"About Us"})}),Object(l.jsx)(A,{})]})},B=(n(42),function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,c,s,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("name__input").value,n=document.getElementById("email__input").value,c=document.getElementById("message__textarea").value,(s=document.getElementById("serverMessage")).style.visibility="visible",""!==t&&""!==n&&""!==c){e.next=9;break}s.innerText="Please fill all fields.",e.next=18;break;case 9:return s.innerText="Sending your message...",e.next=12,fetch("/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,message:c})});case 12:return r=e.sent,e.next=15,r.json();case 15:a=e.sent,console.log(a),JSON.stringify(a).includes("success")&&(s.innerText="Message Sent!");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());var U=function(){return Object(l.jsx)("div",{className:"contact__container",children:Object(l.jsxs)("div",{className:"contact__wrapper",children:[Object(l.jsx)("h1",{children:"Send us a message!"}),Object(l.jsxs)("div",{className:"contact__form__container",children:[Object(l.jsx)("input",{className:"name__input",id:"name__input",placeholder:"What's your name?"}),Object(l.jsx)("input",{className:"email__input",id:"email__input",type:"email",placeholder:"What's your email?"}),Object(l.jsx)("textarea",{className:"message__textarea",id:"message__textarea",placeholder:"Your message to us:"}),Object(l.jsx)("button",{className:"btn--contact",type:"submit",onClick:B,children:"Send it!"}),Object(l.jsx)("p",{id:"serverMessage",className:"serverMessage"})]})]})})};var F=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"contact",children:Object(l.jsx)("h1",{children:"Contact"})}),Object(l.jsx)(U,{})]})},L=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/",exact:!0,component:k}),Object(l.jsx)(b.a,{path:"/products",exact:!0,component:I}),Object(l.jsx)(b.a,{path:"/about",exact:!0,component:T}),Object(l.jsx)(b.a,{path:"/contact",exact:!0,component:F})]})]})})};r.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c2ce0d01.chunk.js.map