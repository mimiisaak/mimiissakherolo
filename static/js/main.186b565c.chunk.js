(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{52:function(e,t,c){},72:function(e,t,c){},76:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(16),i=c.n(r),s=(c(52),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))}),l=c(17),o=c(3),j=c(22),d=c.n(j),u=c(28),b=c(4),h=c(13),O=c.n(h),p=c(14),f=(c(40),c(72),c(41),c(12)),x=c(21),v=c(15),m="ADD CITY",y="REMOVE_CITY",g="FAVORITECIRY",w={arr:[],defultCity:{Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"}}};function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(v.a)(Object(v.a)({},e),{},{arr:e.arr.concat(t.paylaod)});case y:return Object(v.a)(Object(v.a)({},e),{},{arr:Object(x.a)(e.arr.filter((function(e){return e.Key!==t.Key})))});case g:return Object(v.a)(Object(v.a)({},e),{},{defultCity:t.obj});default:return e}}var C=c(26),T=c(18),k=Object(f.createStore)(S,Object(C.composeWithDevTools)(Object(f.applyMiddleware)(T.a))),N=c(1);c(76);var D=c(43),L=Object(f.createStore)(S,Object(C.composeWithDevTools)(Object(f.applyMiddleware)(T.a)));t.default=L;i.a.render(Object(N.jsx)(D.a,{store:L,children:Object(N.jsx)("div",{children:Object(N.jsxs)(l.a,{children:[Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)("div",{className:"router",children:Object(N.jsxs)("div",{className:"topnav",children:[Object(N.jsxs)("div",{children:[" ",Object(N.jsx)(l.b,{to:"/",children:Object(N.jsx)("button",{className:"home",children:"Home"})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(l.b,{to:"/Favorites",children:Object(N.jsx)("button",{className:"favorites",children:"Favorites"})})})]})})}),Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",component:function(){var e="dyLmdjfyIQ6T7aWsSLPm63T9Z3CKKAzG",t=Object(n.useState)(210841),c=Object(b.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)({}),s=Object(b.a)(i,2),l=(s[0],s[1],Object(n.useState)("tel aviv")),o=Object(b.a)(l,2),j=o[0],h=o[1],f=Object(n.useState)(""),x=Object(b.a)(f,2),v=x[0],g=x[1],w=Object(n.useState)([]),S=Object(b.a)(w,2),C=S[0],T=S[1],D=Object(n.useState)([{id:0,LocalizedName:""}]),L=Object(b.a)(D,2),K=(L[0],L[1],Object(n.useState)([])),F=Object(b.a)(K,2),I=F[0],z=F[1],A=Object(n.useState)([]),M=Object(b.a)(A,2),W=M[0],E=M[1],V=Object(n.useState)([{}]),R=Object(b.a)(V,2),Y=R[0],B=R[1],G=Object(n.useState)([]),P=Object(b.a)(G,2),q=(P[0],P[1],Object(n.useState)(1)),J=Object(b.a)(q,2),Z=J[0],H=J[1];function Q(e){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(d.a.mark((function t(c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O.a.get("https://dataservice.accuweather.com/currentconditions/v1/"+c+"?apikey="+e+"&details=true&language=en").then((function(e){return e.data})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(e){return X.apply(this,arguments)}function X(){return(X=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q(t).then((function(e){return z(e)})),$(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(t){(function(t){return O.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+t+"?apikey="+e+"&language=en&details=false&metric=false").then((function(e){return e.data}))})(t).then((function(e){return E(e.DailyForecasts)}))}function ee(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(e=new Date(e)).getDay()]}function te(){var e=k.getState().arr.find((function(e){return e.Key==Y.Key}));H(null!=e?0:1)}function ce(e){k.dispatch({type:m,paylaod:e}),H(Z-1)}function ne(){var e;k.dispatch((e=Y.Key,{type:y,Key:e}))}return Object(n.useEffect)((function(){B(k.getState().defultCity),r(k.getState().defultCity.Key),_(k.getState().defultCity.Key)}),[]),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"hello",updateBackground:!0}),Object(N.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(N.jsx)("div",{children:Object(N.jsxs)(p.a,{"aria-label":"Cities",children:[Object(N.jsx)(p.b,{className:"city-search-input",onChange:function(e){h(e.target.value)}}),void O.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+e+"&q="+j+"&language=en").then((function(e){return e.data})).then((function(e){return T(e)})),C&&Object(N.jsx)(p.e,{className:"shadow-popup",children:C.length>0?Object(N.jsx)(p.c,{children:C.map((function(e,t){return Object(N.jsx)(p.d,{value:e.LocalizedName,label:"search city..",onClick:function(t){return Object(N.jsxs)("div",{children:[r(e.Key),",",h(e.LocalizedName),",",g(e.Country.LocalizedName),",",B(e),","]})}},t)}))}):Object(N.jsx)("span",{style:{display:"block",margin:8},children:"No results found"})})]})}),Object(N.jsx)("button",{onClick:function(e){return Object(N.jsxs)("div",{children:[" ",_(a),",",te()]})},children:"\u05d7\u05e4\u05e9"}),Z?Object(N.jsx)("button",{id:"button",onClick:function(e){ce(Y)},children:"\u05d4\u05d5\u05e1\u05e4\u05d4 \u05dc\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd"}):Object(N.jsx)("button",{id:"button",onClick:function(e){ne()},children:" \u05d4\u05e1\u05e8\u05d4 \u05de\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd"}),Object(N.jsx)("div",{children:Object(N.jsx)("div",{class:"page-content page-container",id:"page-content",children:Object(N.jsx)("div",{class:"padding",children:Object(N.jsx)("div",{class:"row container d-flex justify-content-center",children:Object(N.jsx)("div",{class:"col-lg-8 grid-margin stretch-card",children:Object(N.jsxs)("div",{class:"card card-weather",children:[Object(N.jsxs)("div",{class:"card-body",children:[Object(N.jsxs)("div",{class:"weather-date-location",children:[I.map((function(e){return Object(N.jsx)("h3",{children:ee(e.LocalObservationDateTime)})})),Object(N.jsxs)("p",{class:"text-gray",children:[" ",Object(N.jsx)("span",{class:"weather-date",children:I.map((function(e){return function(e){var t=new Date(e);return t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()}(e.LocalObservationDateTime)}))})," ",Object(N.jsxs)("span",{class:"weather-location",children:[Y.LocalizedName,",",v]})," "]})]}),Object(N.jsx)("div",{class:"weather-data d-flex",children:Object(N.jsxs)("div",{class:"mr-auto",children:[Object(N.jsxs)("h4",{class:"display-3",children:[I.map((function(e){return e.Temperature.Metric.Value}))," ",Object(N.jsx)("span",{class:"symbol",children:"\xb0"}),"C"]}),Object(N.jsxs)("p",{children:[" ",I.length>0?Object(N.jsxs)("div",{children:[" ",Object(N.jsx)("h3",{children:I.map((function(e){return e.WeatherText}))})]}):"erroeee"," "]})]})})]}),Object(N.jsx)("div",{class:"card-body p-0",children:I.length>0?Object(N.jsx)("div",{class:"d-flex weakly-weather",children:W.map((function(e){return Object(N.jsxs)("div",{class:"weakly-weather-item",children:[Object(N.jsx)("p",{class:"mb-1",children:ee(e.Date)}),Object(N.jsx)("i",{class:"mdi mdi-weather-partlycloudy"}),Object(N.jsxs)("p",{class:"mb-0",children:[" ",e.Temperature.Minimum.Value]})]})}))}):"erroeee"})]})})})})})})]})}}),Object(N.jsx)(o.a,{exact:!0,path:"/favorites",component:function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),i=Object(b.a)(r,2),s=i[0],o=i[1],j=Object(n.useState)(k.getState().arr),d=Object(b.a)(j,2),u=d[0];function h(e){(function(e){return console.log(e),O.a.get("https://dataservice.accuweather.com/currentconditions/v1/"+e+"?apikey=DgrqDkN3UnwGDADZfmGjjOATui3tFMjK&language=en&details=false").then((function(e){return e.data}))})(e).then((function(e){return o(e)})),console.log(s);var t=s.map((function(e){return e.WeatherText}));return console.log(t),t}function p(e){k.dispatch(function(e){return{type:g,obj:e}}(e))}return d[1],Object(n.useEffect)((function(){u.map((function(e){return a((function(t){return[].concat(Object(x.a)(t),[(e.Key,h(e.keys))])}))})),console.log(c)}),[]),Object(N.jsx)("div",{children:Object(N.jsx)("div",{class:"container d-flex justify-content-center",children:Object(N.jsx)("div",{class:"weather",children:Object(N.jsx)("div",{class:"row",children:u.length>0?u.map((function(e){return Object(N.jsx)("div",{children:Object(N.jsx)("div",{class:" col-md-6",children:Object(N.jsxs)("div",{class:"card",children:[" ",Object(N.jsx)("span",{class:"icon",children:Object(N.jsx)("img",{class:"img-fluid",src:"https://img.icons8.com/emoji/96/000000/sun-emoji.png"})}),Object(N.jsx)("div",{class:"title",children:Object(N.jsx)("p",{children:e.LocalizedName})}),Object(N.jsxs)("div",{class:"temp",children:[h(e.Key),Object(N.jsx)("sup",{children:"\xb0"})]}),Object(N.jsx)("div",{class:"row",children:Object(N.jsxs)("div",{class:"link-to-home-page",children:[" ",Object(N.jsx)(l.b,{to:"/",children:Object(N.jsx)("button",{className:"btn",onClick:function(t){return p(e)},children:"Watching the weather of the favorite"})})]})})]})})})})):Object(N.jsx)("h2",{children:" No favorites"})})})})})}})]})]})})}),document.getElementById("root")),s()}},[[80,1,2]]]);
//# sourceMappingURL=main.186b565c.chunk.js.map