(this.webpackJsonpstudiomedicodaripecora=this.webpackJsonpstudiomedicodaripecora||[]).push([[0],{65:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var c=s(5),a=s.n(c),r=s(43),n=s.n(r),i=(s(65),s(15)),l=s(10),d=s(9),o=s(22),x=s(36),m=s(35),j=s(18),b=s(31),u=s(27),h=s(50);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/studiomedicodaripecora",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCA1KBxzbfiUGm2qY520o5Iwc84awws5TI",REACT_APP_FIREBASE_APP_ID:"studiomedicodariopecora",REACT_APP_FIREBASE_AUTH_DOMAIN:"localhost",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"",REACT_APP_FIREBASE_PROJECT_ID:"250768691506",REACT_APP_FIREBASE_STORAGE_BUCKET:""}));var p={apiKey:"AIzaSyCA1KBxzbfiUGm2qY520o5Iwc84awws5TI",authDomain:"localhost",projectId:"250768691506",storageBucket:"",messagingSenderId:"",appId:"studiomedicodariopecora"};(function(){Object(h.a)(p)})();var O=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),n=Object(l.a)(r,2),d=n[0],o=n[1],x=Object(c.useState)(!0),m=Object(l.a)(x,2),j=m[0],b=m[1],h=Object(i.g)(),p=(Object(i.h)().state||{from:{pathname:"/"}}).from,O=Object(u.c)();Object(c.useEffect)((function(){var e=Object(u.d)(O,(function(e){e?(a(e),b(!1)):a(null),b(!1)}));return function(){return e}}),[O]);return{user:s,isLoading:j,error:d,signInWithGoogle:function(){b(!0);var e=new u.a;Object(u.f)(O,e).then((function(e){a(e.user),o(null),h.replace(p)})).catch((function(e){o(e.message)})).finally((function(){b(!1)}))},signupWithEmailAndPassword:function(e,t){b(!0),Object(u.b)(O,e,t).then((function(e){a(e.user),o(null),b(!1),h.replace(p)})).catch((function(e){o(e.message)})).finally((function(){b(!1)}))},loginWithEmailAndPassword:function(e,t){b(!0),Object(u.e)(O,e,t).then((function(e){a(e.user),o(null),b(!1),h.replace(p)})).catch((function(e){o(e.message)})).finally((function(){b(!1)}))},logOut:function(){b(!0),Object(u.g)(O).then((function(){a(null),h.push("/")})).catch((function(e){o(e.message)})).finally((function(){b(!1)}))}}},g=s(2),v=Object(c.createContext)(),f=function(e){var t=e.children,s=O(),c=s.user,a=s.error,r=s.isLoading,n=s.loginWithEmailAndPassword,i=s.signInWithGoogle,l=s.signupWithEmailAndPassword,d=s.logOut;return Object(g.jsx)(v.Provider,{value:{user:c,error:a,isLoading:r,loginWithEmailAndPassword:n,signInWithGoogle:i,signupWithEmailAndPassword:l,logOut:d},children:t})},y=function(){return Object(c.useContext)(v)},N=function(){var e={color:"white",backgroundColor:"#4b5563"},t=y().user;return Object(g.jsxs)("div",{className:"md:flex justify-center py-3 items-center space-x-3  hidden",children:[Object(g.jsxs)(d.c,{to:"/home",activeStyle:e,className:"hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center",children:[Object(g.jsx)(m.a,{className:"mr-1 text-xl"}),"Home"]}),Object(g.jsxs)(d.c,{to:"/about",activeStyle:e,className:"hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center",children:[Object(g.jsx)(j.c,{className:"mr-1 text-xl "}),"About"]}),Object(g.jsxs)(d.c,{to:"/services",activeStyle:e,className:"hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center",children:[Object(g.jsx)(b.b,{className:"mr-1 text-xl"}),"Services"]}),Object(g.jsxs)(d.c,{to:"/therapists",activeStyle:e,className:"hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center",children:[Object(g.jsx)(x.b,{className:"mr-1 text-xl"}),"Therapists"]}),(null===t||void 0===t?void 0:t.displayName)||(null===t||void 0===t?void 0:t.email)?Object(g.jsxs)(d.c,{to:"/profile",activeStyle:e,className:"hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center ",children:[Object(g.jsx)(m.b,{className:"mr-1 text-xl"}),"Profile"]}):Object(g.jsxs)(d.c,{to:"/account",activeStyle:e,className:"hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center ",children:[Object(g.jsx)(o.e,{className:"mr-1 text-xl"}),"Account"]})]})},w=s(32),S=s(53),_=function(){return Object(g.jsx)("div",{className:"bg-gray-600 ",children:Object(g.jsxs)("div",{className:"md:w-9/12 w-100 md:px-0 px-3 mx-auto flex justify-between items-center py-1",children:[Object(g.jsxs)("div",{className:"phone-email flex item-center md:space-x-5 space-x-2",children:[Object(g.jsxs)("span",{className:"flex text-sm text-gray-100",children:[Object(g.jsx)(j.d,{className:"mt-1  mr-2 "}),Object(g.jsx)("span",{className:"md:block hidden",children:"0184599900"})]}),Object(g.jsxs)("span",{className:"flex text-sm text-gray-100",children:[Object(g.jsx)(o.c,{className:"mt-1  mr-2 "}),Object(g.jsx)("span",{className:"md:block hidden",children:"contact@example.com"})]})]}),Object(g.jsxs)("div",{className:"contact-icon flex space-x-3 text-sm",children:[Object(g.jsx)(w.a,{className:"cursor-pointer text-gray-200 hover:text-white text-sm"}),Object(g.jsx)(o.b,{className:"cursor-pointer text-gray-200 hover:text-white text-lg"}),Object(g.jsx)(o.d,{className:"cursor-pointer text-gray-200 hover:text-white text-lg"}),Object(g.jsx)(S.a,{className:"cursor-pointer text-gray-200 hover:text-white text-lg"})]})]})})},E=s(54),A=function(){var e={color:"white",backgroundColor:"#4b5563"},t=y().user;return Object(g.jsxs)("div",{className:"px-4 pb-5 transition-all duration-1000 md:hidden",children:[Object(g.jsx)(d.c,{to:"/home",activeStyle:e,className:"hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600  text-gray-100 transition-all flex items-center my-2",children:"Home"}),Object(g.jsx)(d.c,{to:"/about",activeStyle:e,className:"hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center",children:"About"}),Object(g.jsx)(d.c,{to:"/services",activeStyle:e,className:"hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center mt-2",children:"Services"}),Object(g.jsx)(d.c,{to:"/therapists",activeStyle:e,className:"hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center mt-2",children:"Therapists"}),(null===t||void 0===t?void 0:t.displayName)||(null===t||void 0===t?void 0:t.email)?Object(g.jsx)(d.c,{to:"/profile",activeStyle:e,className:"hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center ",children:"Profile"}):Object(g.jsx)(d.c,{to:"/account",activeStyle:e,className:"hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center ",children:"Account"})]})},P=s.p+"static/media/logo-2.cec77211.png",C=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(g.jsxs)("div",{className:"bg-gray-800 text-white",children:[Object(g.jsx)(_,{}),Object(g.jsxs)("div",{className:"md:w-9/12  w-100 md:px-0 px-4 mx-auto flex items-center justify-between py-3",children:[Object(g.jsx)(d.b,{to:"/",children:Object(g.jsx)("img",{src:P,alt:"Studio Medico Dario Pecora",style:{width:"160px"}})}),Object(g.jsx)(N,{}),Object(g.jsx)("button",{onClick:function(){a(!s)},className:"md:hidden block ",children:Object(g.jsx)(E.a,{className:"text-3xl "})})]}),Object(g.jsx)("div",{className:s?"hidden":"block",children:Object(g.jsx)(A,{})})]})},k=function(){return Object(g.jsx)("div",{className:"w-9/12 mx-auto flex  justify-center items-center",style:{height:"660px"},children:Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("h1",{children:Object(g.jsx)(x.a,{className:"text-5xl text-red-300 ml-24"})}),Object(g.jsx)("h1",{className:"mt-5 text-3xl text-gray-600",children:"404 Error!"}),Object(g.jsx)("h1",{className:"mt-5 text-3xl text-gray-600",children:"Page does not exist"})]})})},I=function(){return Object(g.jsxs)("div",{className:"w-9/12 mx-auto grid md:grid-cols-2 grid-cols-1 py-10 items-center",children:[Object(g.jsxs)("div",{className:"py-5 md:px-5 px-3",children:[Object(g.jsx)("h3",{className:"text-gray-300 lg:text-3xl text-xl font-serif",children:"Who we are _______"}),Object(g.jsx)("h1",{className:"lg:text-5xl text-3xl md:mt-5 mt-3 text-gray-500",children:"Welcome to Physio Therapy & Chiroparctor Clinic"}),Object(g.jsx)("p",{className:"text-sm lg:mt-8 mt-3",children:"Established over 30 years ago, Therapy Center of New York (TCNY) offers a broad range of diagnostic, therapy and counseling services for adults, families and children. We have over 25+ psychiatrists, psychologists and social workers available to provide a wide variety of services and meet your specific needs and requirements."}),Object(g.jsxs)(d.b,{to:"/services",className:" w-32 flex items-center mt-5 border transition-all hover:text-gray-100 text-gray-800 px-4 py-3 rounded-sm hover:bg-gray-900",children:["services ",Object(g.jsx)(b.a,{className:"text-xl ml-1"})]})]}),Object(g.jsx)("div",{className:"py-5 overflow-hidden",children:Object(g.jsx)("div",{className:"overflow-hidden",children:Object(g.jsx)("img",{className:"lg:px-40 px-0 about-image overflow-hidden",src:"https://i.ibb.co/MVwVfQn/image-1-1.jpg",alt:"about "})})})]})},T=function(e){var t=e.therapist,s=t.name,c=t.image;return Object(g.jsxs)("div",{className:" text-center p-5 m-3 shadow overflow-hidden",children:[Object(g.jsx)("div",{className:"overflow-hidden border rounded-md",children:Object(g.jsx)("img",{className:"therapist-image  overflow-hidden",src:c,alt:s})}),Object(g.jsx)("h1",{className:"py-3 text-2xl font-serif",children:s})]})},q=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1],r=s.slice(0,4);return Object(c.useEffect)((function(){fetch("therapists.JSON").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(g.jsxs)("div",{className:"md:w-9/12 w-11/12 mx-auto my-16",children:[Object(g.jsx)("h1",{className:"text-gray-300 md:text-5xl text-2xl font-serif ",children:"Therapists___"}),Object(g.jsx)("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-5",children:r.map((function(e){return Object(g.jsx)(T,{therapist:e},e.image)}))})]})},R=function(){return Object(g.jsx)("div",{className:"banner",children:Object(g.jsx)("div",{className:"w-9/12 mx-auto grid py-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1",children:Object(g.jsxs)("div",{className:"mt-10",children:[Object(g.jsx)("h1",{className:"bg-white text-gray-500 px-5 py-3  mt-10 lg:text-5xl md:text-3xl font-bold ",children:"We give solution"}),Object(g.jsx)("h1",{className:"bg-gray-700 text-gray-200 lg:text-5xl md:text-3xl font-bold px-5 py-3 mt-1",children:"to your Pain"}),Object(g.jsx)("p",{className:"mt-10 text-gray-300",children:"Dr. Robert Joe is prepared to suggest remedial and rehabilitative activities, and also to give wholesome, dietary and way of life directing."}),Object(g.jsxs)("button",{className:"flex items-center mt-5 bg-gray-800 text-gray-200 px-4 py-3 rounded-sm hover:bg-gray-900",children:["Learn more ",Object(g.jsx)(b.a,{className:"text-xl ml-1"})]})]})})})},W=function(e){var t=e.service,s=t.name,c=t.image,a=t.id,r=t.description.slice(0,80);return Object(g.jsxs)("div",{className:"p-5 shadow-md my-3 mx-3 overflow-hidden rounded-md",children:[Object(g.jsx)("div",{className:"overflow-hidden",children:Object(g.jsx)("img",{src:c,alt:s,className:"service-image "})}),Object(g.jsx)("h1",{className:"py-5 text-center text-xl text-blue-800 font-medium",children:s}),Object(g.jsxs)("p",{className:"text-sm text-gray-400 text-center pb-4",children:[r,"..."]}),Object(g.jsx)("div",{className:"text-center py-2",children:Object(g.jsx)(d.b,{to:"/service/".concat(a),className:"bg-gray-100  hover:text-gray-800 p-3 rounded-md text-gray-400 ",children:"Get appoinment"})})]})},B=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/Mohammed-Rakib/data/main/services.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),0===s.length?Object(g.jsx)("div",{className:"flex items-center justify-center",style:{minHeight:"700px"},children:Object(g.jsx)("h1",{className:"text-3xl text-red-400",children:"Loading....."})}):Object(g.jsxs)("div",{className:"md:w-9/12 w-11/12 mx-auto",children:[Object(g.jsx)("h1",{className:"py-5 md:text-5xl text-2xl font-semibold text-gray-300 font-serif",children:"Services______"}),Object(g.jsx)("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5",children:s.map((function(e){return Object(g.jsx)(W,{service:e},e.id)}))})]})},D=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(R,{}),Object(g.jsx)(I,{}),Object(g.jsx)(B,{}),Object(g.jsx)(q,{})]})},F=function(){return Object(g.jsx)("div",{className:" bg-gray-800",children:Object(g.jsxs)("div",{className:"w-9/12 mx-auto grid md:grid-cols-3 grid-cols-1 py-4",children:[Object(g.jsx)("div",{children:Object(g.jsx)(d.b,{to:"/",children:Object(g.jsx)("img",{src:P,alt:""})})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-2xl text-white mt-3",children:"Quick Links"}),Object(g.jsx)(d.b,{to:"/about",className:"text-gray-200 text-sm py-2 block",children:"About us"}),Object(g.jsx)(d.b,{to:"/services",className:"text-gray-200 text-sm py-2 block",children:"Services"}),Object(g.jsx)(d.b,{to:"/about",className:"text-gray-200 text-sm py-2",children:"About us"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-2xl text-white mt-3",children:"Get In Touch"}),Object(g.jsx)("p",{className:"text-sm text-gray-300 mt-3",children:"+880181111111"}),Object(g.jsx)("p",{className:"text-sm text-gray-300 mt-3",children:"contact@example.com"})]})]})})},G=s(56),L=s(55),H=s.n(L),U={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},M=function(){var e=a.a.useState(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],r=Object(i.g)(),n=function(){c(!1)};return Object(g.jsxs)("div",{children:[Object(g.jsxs)("button",{onClick:function(){c(!0)},className:"bg-red-200 p-5 rounded-md flex",children:[Object(g.jsx)(j.a,{className:"mt-1 mr-3 text-xl text-green-600"})," Book Appointment"]}),Object(g.jsxs)(H.a,{isOpen:s,onRequestClose:n,style:U,contentLabel:"Example Modal",children:[Object(g.jsx)("h2",{className:"text-2xl py-5 text-green-600 md:px-4",children:"Please fill the form"}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("/")},className:"md:p-5 p-0 ",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username"}),Object(g.jsx)("input",{type:"text",id:"username",name:"username",autoComplete:"off",className:"focus:outline-none border-2 rounded block my-2",required:!0})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"age",children:"Age"}),Object(g.jsx)("input",{type:"number",id:"age",autoComplete:"off",name:"age",className:"focus:outline-none border-2 rounded block my-2",required:!0})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"address",children:"address"}),Object(g.jsx)("input",{type:"text",id:"address",name:"address",autoComplete:"off",className:"focus:outline-none border-2 rounded block my-2",required:!0})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"phone",children:"phone number"}),Object(g.jsx)("input",{type:"number",id:"phone",name:"phone",autoComplete:"off",className:"focus:outline-none border-2 rounded block my-2",required:!0})]}),Object(g.jsxs)("div",{className:"flex justify-between",children:[Object(g.jsx)("input",{type:"submit",value:"Submit",className:"bg-green-400 px-2 py-1 rounded text-gray-100 cursor-pointer"}),Object(g.jsx)("button",{className:"bg-red-400 inline px-2 py-1 rounded text-gray-100",onClick:n,children:"close"})]})]})]})]})},K=function(){var e=Object(i.i)().id,t=Object(c.useState)([]),s=Object(l.a)(t,2),a=s[0],r=s[1];Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/Mohammed-Rakib/data/main/services.json").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var n=a.find((function(t){return t.id===e}));return Object(g.jsxs)("div",{className:"w-9/12 mx-auto py-5",children:[Object(g.jsxs)("div",{className:"grid md:grid-cols-2 grid-cols-1 items-center",children:[Object(g.jsx)("div",{className:"lg:p-5 p-0",children:Object(g.jsx)("img",{src:null===n||void 0===n?void 0:n.image,alt:null===n||void 0===n?void 0:n.description,className:"service-detail-image"})}),Object(g.jsxs)("div",{className:"px-5",children:[Object(g.jsx)("h1",{className:"text-2xl font-medium lg:py-5 text-gray-600 bg-green-200 text-center py-3",children:null===n||void 0===n?void 0:n.name}),Object(g.jsx)("p",{className:"lg:mt-5 mt-1 leading-7  text-gray-400",children:null===n||void 0===n?void 0:n.description}),Object(g.jsxs)("p",{className:"py-5 ",children:["This service will cost",Object(g.jsx)("span",{className:"text-sm",children:" $"}),Object(g.jsx)("span",{className:"text-xl font-semibold",children:null===n||void 0===n?void 0:n.cost})]})]})]}),Object(g.jsxs)("div",{className:"grid md:grid-cols-2 grid-cols-1 items-center",children:[Object(g.jsxs)("div",{className:"lg:p-5 p-0",children:[Object(g.jsx)("h1",{className:"md:my-5 my-3 text-2xl  ",children:"Benefits"}),null===n||void 0===n?void 0:n.benefit.map((function(e){return Object(g.jsxs)("li",{className:"list-none flex py-3",children:[Object(g.jsx)(G.a,{className:"mt-1 mr-5 text-green-400"})," ",e]})}))]}),Object(g.jsx)("div",{className:"px-5 ",children:Object(g.jsx)("div",{children:Object(g.jsx)(M,{})})})]})]})},z=s(23),J=s(37),Y=s(38),V=s(39),Q=s(57),$=function(){var e=y().signInWithGoogle;return Object(g.jsx)("div",{className:"text-center mt-4",children:Object(g.jsxs)("button",{onClick:e,className:" ml-7  flex justify-center text-gray-100 items-center px-4 py-2 rounded bg-purple-400 ",children:[Object(g.jsx)(Q.a,{className:"text-3xl mr-4"})," Continue with Google"]})})},X=function(){var e,t,s,c,a=y().signupWithEmailAndPassword,r=Object(J.a)(),n=r.register,i=r.formState.errors,l=r.handleSubmit;return Object(g.jsx)("div",{className:"signup flex items-center justify-center ",children:Object(g.jsxs)("div",{className:"bg-green-200 md:p-12 px-1 py-8 text-center rounded relative",children:[Object(g.jsxs)("form",{onSubmit:l((function(e){a(e.email,e.password)})),children:[Object(g.jsx)("span",{className:"text-center mx-auto",children:Object(g.jsx)(w.b,{className:" text-green-700 absolute  md:right-40 right-32",style:{fontSize:"90px",top:"-40px"}})}),Object(g.jsx)("h1",{className:"my-4 text-2xl ",children:"Create an account"}),Object(g.jsxs)("p",{children:["Already have an account?"," ",Object(g.jsx)(d.b,{className:"text-sm text-blue-600",to:"/signin",children:"Sign in"})," "]}),Object(g.jsxs)("div",{className:"flex items-center bg-white md:px-3 px-0 rounded my-3",children:[Object(g.jsx)(o.a,{className:"text-xl text-green-500 md:mx-3 mx-1"}),Object(g.jsx)("input",Object(z.a)({type:"text",placeholder:"Username",className:" md:px-4 px-1 py-2 focus:outline-none ",autoComplete:"off"},n("username",{required:!0})))]}),Object(g.jsx)("span",{className:"text-sm text-red-500",children:"required"===(null===(e=i.username)||void 0===e?void 0:e.type)&&"Username name is required"}),Object(g.jsxs)("div",{className:"flex items-center bg-white md:px-3 px-0 rounded my-3",children:[Object(g.jsx)(Y.a,{className:"text-xl text-green-500 md:mx-3 mx-1"}),Object(g.jsx)("input",Object(z.a)({type:"email",placeholder:"Email",className:" md:px-4 px-1 py-2 focus:outline-none"},n("email",{required:!0})))]}),Object(g.jsx)("span",{className:"text-sm text-red-500",children:"required"===(null===(t=i.email)||void 0===t?void 0:t.type)&&"email name is required"}),Object(g.jsxs)("div",{className:"flex items-center bg-white md:px-3 px-0 rounded mt-3",children:[Object(g.jsx)(V.a,{className:"text-xl text-green-500 md:mx-3 mx-1"}),Object(g.jsx)("input",Object(z.a)({type:"password",placeholder:"Password",className:" md:px-4 px-1 py-2 focus:outline-none"},n("password",{required:!0,pattern:/^(?=.{8,})/})))]}),Object(g.jsx)("span",{className:"text-sm text-red-500 block",children:"required"===(null===(s=i.password)||void 0===s?void 0:s.type)&&"password  is required"}),Object(g.jsx)("span",{className:"text-sm text-red-500 block",children:"pattern"===(null===(c=i.password)||void 0===c?void 0:c.type)&&"password must be 8 characters"}),Object(g.jsx)("input",{className:"bg-purple-400 cursor-pointer mt-4 text-white px-5 py-2 rounded",type:"submit"})]}),Object(g.jsx)("p",{className:"text-gray-400 mt-4",children:"----------- or ------------"}),Object(g.jsx)("div",{children:Object(g.jsx)($,{})})]})})},Z=function(){var e,t,s,c,a=y(),r=a.loginWithEmailAndPassword,n=a.error,i=Object(J.a)(),l=i.register,o=i.formState.errors,x=i.handleSubmit;return Object(g.jsx)("div",{className:"signup flex items-center justify-center ",children:Object(g.jsxs)("div",{className:"bg-green-200 md:p-12 px-1 py-8 text-center rounded relative",children:[Object(g.jsxs)("form",{onSubmit:x((function(e){r(e.email,e.password)})),children:[Object(g.jsx)("span",{className:"text-center mx-auto",children:Object(g.jsx)(w.b,{className:" text-green-700 absolute  md:right-40 right-32",style:{fontSize:"90px",top:"-40px"}})}),Object(g.jsx)("h1",{className:"my-4 text-2xl ",children:"Sign In"}),Object(g.jsxs)("p",{children:["Don't have an account?",Object(g.jsx)(d.b,{className:"text-sm text-blue-600",to:"/account",children:"Sign up"})," "]}),Object(g.jsx)("span",{className:"text-sm text-red-500",children:"required"===(null===(e=o.username)||void 0===e?void 0:e.type)&&"Username name is required"}),Object(g.jsxs)("div",{className:"flex items-center bg-white md:px-3 px-0 rounded my-3",children:[Object(g.jsx)(Y.a,{className:"text-xl text-green-500 md:mx-3 mx-1"}),Object(g.jsx)("input",Object(z.a)({type:"email",placeholder:"Email",className:" md:px-4 px-1 py-2 focus:outline-none"},l("email",{required:!0})))]}),Object(g.jsx)("span",{className:"text-sm text-red-500",children:"required"===(null===(t=o.email)||void 0===t?void 0:t.type)&&"email name is required"}),Object(g.jsxs)("div",{className:"flex items-center bg-white md:px-3 px-0 rounded mt-3",children:[Object(g.jsx)(V.a,{className:"text-xl text-green-500 md:mx-3 mx-1"}),Object(g.jsx)("input",Object(z.a)({type:"password",placeholder:"Password",className:" md:px-4 px-1 py-2 focus:outline-none"},l("password",{required:!0,pattern:/^(?=.{8,})/})))]}),Object(g.jsx)("span",{className:"text-sm text-red-500 block",children:"required"===(null===(s=o.password)||void 0===s?void 0:s.type)&&"password  is required"}),Object(g.jsx)("span",{className:"text-sm text-red-500 block",children:"pattern"===(null===(c=o.password)||void 0===c?void 0:c.type)&&"password must be 8 characters"}),Object(g.jsx)("span",{className:"text-sm text-red-500 block",children:n?"user does not exist":""}),Object(g.jsx)("input",{className:"bg-purple-400 cursor-pointer mt-4 text-white px-5 py-2 rounded",type:"submit"})]}),Object(g.jsx)("p",{className:"text-gray-400 mt-4",children:"----------- or ------------"}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)($,{})})]})})},ee=s(58),te=function(){var e=y(),t=e.logOut,s=e.user;return Object(g.jsxs)("div",{className:"w-9/12 mx-auto",style:{minHeight:"670px"},children:[Object(g.jsx)("div",{children:Object(g.jsxs)("h1",{className:"py-20 md:text-3xl text-xl",children:[Object(g.jsx)("span",{className:"block",children:"Welcome"}),Object(g.jsxs)("span",{className:"text-green-500",children:[(null===s||void 0===s?void 0:s.displayName)?null===s||void 0===s?void 0:s.displayName:null===s||void 0===s?void 0:s.email,"!"]})]})}),Object(g.jsxs)("button",{onClick:t,className:"flex items-center bg-red-400 px-5 py-3 rounded text-white",children:[Object(g.jsx)(ee.a,{className:"text-xl mr-2"}),"Sign out"]})]})},se=s(60),ce=["children"],ae=function(e){var t=e.children,s=Object(se.a)(e,ce),c=y(),a=c.user;return c.isLoading?Object(g.jsx)("div",{className:"flex items-center justify-center",style:{minHeight:"700px"},children:Object(g.jsx)("h1",{className:"text-3xl text-red-400",children:"Loading....."})}):Object(g.jsx)(i.b,Object(z.a)(Object(z.a)({},s),{},{render:function(e){var s=e.location;return(null===a||void 0===a?void 0:a.email)||(null===a||void 0===a?void 0:a.displayName)?t:Object(g.jsx)(i.a,{to:{pathname:"/account",state:{from:s}}})}}))},re=function(){return Object(g.jsx)("div",{className:"mb-12",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{className:"flex items-center py-3",children:[Object(g.jsx)(j.b,{className:"mr-5 text-2xl text-green-400"}),"Eliminating or reducing pain"]}),Object(g.jsxs)("li",{className:"flex items-center py-3",children:[Object(g.jsx)(j.b,{className:"mr-5 text-2xl text-green-400"})," Helps in avoiding surgery."]}),Object(g.jsxs)("li",{className:"flex items-center py-3",children:[Object(g.jsx)(j.b,{className:"mr-5 text-2xl text-green-400"})," Improving overall strength and coordination."]}),Object(g.jsxs)("li",{className:"flex items-center py-3",children:[Object(g.jsx)(j.b,{className:"mr-5 text-2xl text-green-400"})," Reducing the dependency on medicines"]}),Object(g.jsxs)("li",{className:"flex items-center py-3",children:[Object(g.jsx)(j.b,{className:"mr-5 text-2xl text-green-400"})," Boosting cardiovascular functioning and lung capacity."]}),Object(g.jsxs)("li",{className:"flex items-center py-3",children:[Object(g.jsx)(j.b,{className:"mr-5 text-2xl text-green-400"})," Managing and preventing sports related injuries."]})]})})},ne=function(){return Object(g.jsx)("div",{className:"md:w-9/12 w-11/12 mx-auto md:p-5 p-2",children:Object(g.jsx)(re,{})})},ie=function(e){var t=e.therapist,s=t.name,c=t.image;return Object(g.jsxs)("div",{className:" text-center p-5 m-3 shadow overflow-hidden",children:[Object(g.jsx)("div",{className:"overflow-hidden border rounded-md",children:Object(g.jsx)("img",{className:"therapist-image  overflow-hidden",src:c,alt:s})}),Object(g.jsx)("h1",{className:"py-3 text-2xl font-serif",children:s})]})},le=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("therapists.JSON").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(g.jsxs)("div",{className:"md:w-9/12 w-11/12 mx-auto my-16",children:[Object(g.jsx)("h1",{className:"text-gray-300 md:text-5xl text-2xl font-serif ",children:"Therapists___"}),Object(g.jsx)("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-5",children:s.map((function(e){return Object(g.jsx)(ie,{therapist:e},e.image)}))})]})};var de=function(){return Object(g.jsxs)(f,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(i.d,{children:[Object(g.jsx)(i.b,{path:"/profile",component:te}),Object(g.jsx)(i.b,{path:"/account",component:X}),Object(g.jsx)(i.b,{path:"/signin",component:Z}),Object(g.jsx)(ae,{path:"/service/:id",children:Object(g.jsx)(K,{})}),Object(g.jsx)(ae,{path:"/services",children:Object(g.jsx)(B,{})}),Object(g.jsx)(ae,{path:"/therapists",children:Object(g.jsx)(le,{})}),Object(g.jsxs)(i.b,{path:"/about",children:[Object(g.jsx)(I,{}),Object(g.jsx)(ne,{})]}),Object(g.jsx)(i.b,{exact:!0,path:"/home",component:D}),Object(g.jsx)(i.b,{exact:!0,path:"/",component:D}),Object(g.jsx)(i.b,{path:"*",component:k})]}),Object(g.jsx)(F,{})]})};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(d.a,{children:Object(g.jsx)(de,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.60cdaf64.chunk.js.map