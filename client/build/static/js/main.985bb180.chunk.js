(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),s=(n(58),n(59),n(33)),i=n(6),l=n(53),u=n(12),j=n(16),d=n(9),b=n(68),h=n(69),O=n(74),p=n(51),x=n(70),g=n(71),m=n(78),v=n(49),f=n(50),k=n(47),w=n.n(k),y=new(function(){function e(){Object(v.a)(this,e)}return Object(f.a)(e,[{key:"getProfile",value:function(){return w()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return w()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),S=function(e){return fetch("/api/users/me",{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}})},I=function(e,t){return fetch("/api/users",{method:"PUT",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)})},C=function(e,t){return fetch("/api/users/books/".concat(e),{method:"DELETE",headers:{authorization:"Bearer ".concat(t)}})},T=function(e){var t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_books",JSON.stringify(n)),!0},B=n(1),E=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(d.a)(c,2),s=o[0],i=o[1],v=Object(r.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),f=Object(d.a)(v,2),k=f[0],w=f[1];Object(r.useEffect)((function(){return function(){var e;(e=k).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var S=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,r,c,o;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,c=r.items,o=c.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),a(o),i(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var r,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.find((function(e){return e.bookId===t})),a=y.loggedIn()?y.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,I(r,a);case 7:if(e.sent.ok){e.next=10;break}throw new Error("something went wrong!");case 10:w([].concat(Object(l.a)(k),[r.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{fluid:!0,className:"text-light bg-dark",children:Object(B.jsxs)(h.a,{children:[Object(B.jsx)("h1",{children:"Search for Books!"}),Object(B.jsx)(O.a,{onSubmit:S,children:Object(B.jsxs)(O.a.Row,{children:[Object(B.jsx)(p.a,{xs:12,md:8,children:Object(B.jsx)(O.a.Control,{name:"searchInput",value:s,onChange:function(e){return i(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})}),Object(B.jsx)(p.a,{xs:12,md:4,children:Object(B.jsx)(x.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})}),Object(B.jsxs)(h.a,{children:[Object(B.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results:"):"Search for a book to begin"}),Object(B.jsx)(g.a,{children:n.map((function(e){return Object(B.jsxs)(m.a,{border:"dark",children:[e.image?Object(B.jsx)(m.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(B.jsxs)(m.a.Body,{children:[Object(B.jsx)(m.a.Title,{children:e.title}),Object(B.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(B.jsx)(m.a.Text,{children:e.description}),y.loggedIn()&&Object(B.jsx)(x.a,{disabled:null===k||void 0===k?void 0:k.some((function(t){return t===e.bookId})),className:"btn-block btn-info",onClick:function(){return C(e.bookId)},children:null!==k&&void 0!==k&&k.some((function(t){return t===e.bookId}))?"This book has already been saved!":"Save this Book!"})]})]},e.bookId)}))})]})]})},F=function(){var e=Object(r.useState)({}),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object.keys(n).length;Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){var t,n,r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=y.loggedIn()?y.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,S(t);case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,a(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]);var o=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,r,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=y.loggedIn()?y.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,C(t,n);case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:c=e.sent,a(c),T(t),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}();return c?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.a,{fluid:!0,className:"text-light bg-dark",children:Object(B.jsx)(h.a,{children:Object(B.jsx)("h1",{children:"Viewing saved books!"})})}),Object(B.jsxs)(h.a,{children:[Object(B.jsx)("h2",{children:n.savedBooks.length?"Viewing ".concat(n.savedBooks.length," saved ").concat(1===n.savedBooks.length?"book":"books",":"):"You have no saved books!"}),Object(B.jsx)(g.a,{children:n.savedBooks.map((function(e){return Object(B.jsxs)(m.a,{border:"dark",children:[e.image?Object(B.jsx)(m.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(B.jsxs)(m.a.Body,{children:[Object(B.jsx)(m.a.Title,{children:e.title}),Object(B.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(B.jsx)(m.a.Text,{children:e.description}),Object(B.jsx)(x.a,{className:"btn-block btn-danger",onClick:function(){return o(e.bookId)},children:"Delete this Book!"})]})]},e.bookId)}))})]})]}):Object(B.jsx)("h2",{children:"LOADING..."})},L=n(76),N=n(75),P=n(73),q=n(77),_=n(30),D=n(31),J=n(72),G=function(){var e=Object(r.useState)({username:"",email:"",password:""}),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),o=Object(d.a)(c,1)[0],s=Object(r.useState)(!1),i=Object(d.a)(s,2),l=i[0],b=i[1],h=function(e){var t=e.target,r=t.name,c=t.value;a(Object(D.a)(Object(D.a)({},n),{},Object(_.a)({},r,c)))},p=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var r,c,o,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,i=n,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:c=e.sent,o=c.token,s=c.user,console.log(s),y.login(o),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),b(!0);case 22:a({username:"",email:"",password:""});case 23:case"end":return e.stop()}var i}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(O.a,{noValidate:!0,validated:o,onSubmit:p,children:[Object(B.jsx)(J.a,{dismissible:!0,onClose:function(){return b(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(B.jsxs)(O.a.Group,{children:[Object(B.jsx)(O.a.Label,{htmlFor:"username",children:"Username"}),Object(B.jsx)(O.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:n.username,required:!0}),Object(B.jsx)(O.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(B.jsxs)(O.a.Group,{children:[Object(B.jsx)(O.a.Label,{htmlFor:"email",children:"Email"}),Object(B.jsx)(O.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:n.email,required:!0}),Object(B.jsx)(O.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(B.jsxs)(O.a.Group,{children:[Object(B.jsx)(O.a.Label,{htmlFor:"password",children:"Password"}),Object(B.jsx)(O.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(B.jsx)(O.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(B.jsx)(x.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},V=function(){var e=Object(r.useState)({email:"",password:""}),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),o=Object(d.a)(c,1)[0],s=Object(r.useState)(!1),i=Object(d.a)(s,2),l=i[0],b=i[1],h=function(e){var t=e.target,r=t.name,c=t.value;a(Object(D.a)(Object(D.a)({},n),{},Object(_.a)({},r,c)))},p=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var r,c,o,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,i=n,fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:c=e.sent,o=c.token,s=c.user,console.log(s),y.login(o),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),b(!0);case 22:a({username:"",email:"",password:""});case 23:case"end":return e.stop()}var i}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(O.a,{noValidate:!0,validated:o,onSubmit:p,children:[Object(B.jsx)(J.a,{dismissible:!0,onClose:function(){return b(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(B.jsxs)(O.a.Group,{children:[Object(B.jsx)(O.a.Label,{htmlFor:"email",children:"Email"}),Object(B.jsx)(O.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:h,value:n.email,required:!0}),Object(B.jsx)(O.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(B.jsxs)(O.a.Group,{children:[Object(B.jsx)(O.a.Label,{htmlFor:"password",children:"Password"}),Object(B.jsx)(O.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(B.jsx)(O.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(B.jsx)(x.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},Y=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(L.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(B.jsxs)(h.a,{fluid:!0,children:[Object(B.jsx)(L.a.Brand,{as:s.b,to:"/",children:"Google Books Search"}),Object(B.jsx)(L.a.Toggle,{"aria-controls":"navbar"}),Object(B.jsx)(L.a.Collapse,{id:"navbar",children:Object(B.jsxs)(N.a,{className:"ml-auto",children:[Object(B.jsx)(N.a.Link,{as:s.b,to:"/",children:"Search For Books"}),y.loggedIn()?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(N.a.Link,{as:s.b,to:"/saved",children:"See Your Books"}),Object(B.jsx)(N.a.Link,{onClick:y.logout,children:"Logout"})]}):Object(B.jsx)(N.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(B.jsx)(P.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(B.jsxs)(q.a.Container,{defaultActiveKey:"login",children:[Object(B.jsx)(P.a.Header,{closeButton:!0,children:Object(B.jsx)(P.a.Title,{id:"signup-modal",children:Object(B.jsxs)(N.a,{variant:"pills",children:[Object(B.jsx)(N.a.Item,{children:Object(B.jsx)(N.a.Link,{eventKey:"login",children:"Login"})}),Object(B.jsx)(N.a.Item,{children:Object(B.jsx)(N.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(B.jsx)(P.a.Body,{children:Object(B.jsxs)(q.a.Content,{children:[Object(B.jsx)(q.a.Pane,{eventKey:"login",children:Object(B.jsx)(V,{handleModalClose:function(){return a(!1)}})}),Object(B.jsx)(q.a.Pane,{eventKey:"signup",children:Object(B.jsx)(G,{handleModalClose:function(){return a(!1)}})})]})})]})})]})};var z=function(){return Object(B.jsx)(s.a,{children:Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Y,{}),Object(B.jsxs)(i.c,{children:[Object(B.jsx)(i.a,{path:"/",element:Object(B.jsx)(E,{})}),Object(B.jsx)(i.a,{path:"/saved",element:Object(B.jsx)(F,{})}),Object(B.jsx)(i.a,{path:"*",element:Object(B.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})};o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(z,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.985bb180.chunk.js.map