(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(2),o=c(13),r=c.n(o),n=c(4),s=(c(19),c(20),function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{src:t.cover,alt:"cover"}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})}),l=c(10),p=(c(21),c(6)),u=c(5),d=function(e){var t=e.currentSong,c=e.isPlaying,o=e.setIsPlaying,r=Object(i.useState)({currentTime:0,duration:0}),s=Object(n.a)(r,2),d=s[0],h=s[1],j=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},b=function(e){var t=e.target.currentTime,c=e.target.duration;h({currentTime:t,duration:c})},m=Object(i.useRef)(null);return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:j(d.currentTime)}),Object(a.jsx)("input",{onChange:function(e){m.current.currentTime=e.target.value,h(Object(l.a)(Object(l.a)({},d),{},{currentTime:e.target.value}))},min:0,max:d.duration,value:d.currentTime,type:"range"}),Object(a.jsx)("p",{children:j(d.duration)})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(p.a,{className:"skip-back",size:"2x",icon:u.a}),Object(a.jsx)(p.a,{onClick:function(){c?(m.current.pause(),o(!c)):(m.current.play(),o(!c))},className:"play",size:"2x",icon:c?u.c:u.d}),Object(a.jsx)(p.a,{className:"skip-forward",size:"2x",icon:u.b})]}),Object(a.jsx)("audio",{onLoadedMetadata:b,onTimeUpdate:b,ref:m,src:t.audio})]})},h=c(3);var j=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(h.v4)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(h.v4)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(h.v4)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(h.v4)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(h.v4)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(h.v4)(),active:!1}]};var b=function(){var e=Object(i.useState)(j()),t=Object(n.a)(e,2),c=t[0],o=(t[1],Object(i.useState)(c[0])),r=Object(n.a)(o,2),l=r[0],p=(r[1],Object(i.useState)(!1)),u=Object(n.a)(p,2),h=u[0],b=u[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(s,{currentSong:l}),Object(a.jsx)(d,{setIsPlaying:b,isPlaying:h,currentSong:l})]})};r.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d44b0f45.chunk.js.map