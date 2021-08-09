(this["webpackJsonplotr-quote-game"]=this["webpackJsonplotr-quote-game"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(15),a=n.n(r),s=(n(21),n(6)),i=function(e){return fetch("https://the-one-api.dev/v2/character/".concat(e,"/quote"),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer Qdwh7zeW6AgFOOGNGAr4"}}).then((function(e){return e.json()}))},o=n(2),l=n(8),h=(n(22),n(0)),j=function(){return Object(h.jsxs)("nav",{children:[Object(h.jsx)(l.c,{exact:!0,to:"/",className:"nav-link home",children:"Home"}),Object(h.jsx)(l.c,{exact:!0,to:"/trivia",className:"nav-link trivia",children:"Quote Trivia"}),Object(h.jsx)(l.c,{exact:!0,to:"/heroes",className:"nav-link heroes",children:"Heroes"})]})},d=(n(32),n(33),function(e){var t=e.name,n=e.validateAnswer;return Object(h.jsx)("button",{className:"card",id:t,onClick:function(e){return n(e.target.id)},children:t})}),u=(n(34),function(e){var t=e.data,n=e.validateAnswer,c=t.map((function(e){return Object(h.jsx)(d,{name:e.name,id:e._id,race:e.race,gender:e.gender,realm:e.realm,birthday:e.birth,validateAnswer:n},e._id)}));return Object(h.jsx)("div",{className:"options-container",children:c})}),b=n(9),O=n.n(b),m=function(e){var t=e.allCharacters,n=Object(c.useState)({}),r=Object(s.a)(n,2),a=r[0],o=r[1],l=Object(c.useState)([]),j=Object(s.a)(l,2),d=j[0],b=j[1],O=Object(c.useState)(""),m=Object(s.a)(O,2),f=m[0],x=m[1],g=Object(c.useState)(!1),v=Object(s.a)(g,2),p=v[0],N=v[1],w=Object(c.useState)(""),y=Object(s.a)(w,2),A=y[0],k=y[1],T=Object(c.useState)(""),G=Object(s.a)(T,2),S=G[0],q=G[1];Object(c.useEffect)((function(){if(N(!0),t.length){var e=t[Math.floor(Math.random()*t.length)];o(e)}}),[t]),Object(c.useEffect)((function(){a&&i(a._id).then((function(e){return b(e.docs)})).catch((function(e){q("trouble loading character...")})).finally((function(){return N(!1)}))}),[a]),Object(c.useEffect)((function(){d.length&&!f&&x(d[0].dialog)}),[d,f]);return Object(h.jsxs)("div",{className:"quote-container",children:[S&&Object(h.jsx)("h2",{className:"error-msg",children:S}),p&&Object(h.jsx)("h2",{className:"load-msg",children:"loading quote..."}),d.length&&Object(h.jsxs)("div",{children:[!A&&Object(h.jsx)("h2",{className:"who",children:"Who said the words..."}),A&&Object(h.jsx)("h2",{className:"response",children:A}),Object(h.jsx)("h2",{className:"quote-text",children:f}),Object(h.jsx)("div",{className:"character-guesses",children:Object(h.jsx)(u,{data:t,validateAnswer:function(e){e===a.name?k("Well done, that's correct"):k("Actually, that was ".concat(a.name)),setTimeout((function(){window.location.reload()}),3e3)}})})]})]})};u.propTypes={allCharacters:O.a.array};n(35);var f=function(e){var t=e.name,n=e.race,c=e.gender,r=e.realm,a=e.birth;return t?Object(h.jsx)(l.b,{to:"/heroes/".concat(t),children:Object(h.jsxs)("div",{className:"character",id:t,children:[Object(h.jsx)("p",{className:"name",children:t}),n&&Object(h.jsxs)("p",{children:["race: ",n]}),c&&Object(h.jsxs)("p",{children:["gender: ",c]}),r&&Object(h.jsxs)("p",{children:["realm: ",r]}),a&&Object(h.jsxs)("p",{children:["birth: ",a]})]})}):Object(h.jsx)("h2",{children:"We are having trouble fetching that information"})},x=(n(36),function(e){var t=e.characters,n=t.map((function(e){return t.length?Object(h.jsx)(f,{id:e._id,name:e.name,race:e.race,gender:e.gender,realm:e.realm,birthday:e.birth},e._id):Object(h.jsx)("h2",{className:"error-msg",children:"trouble loading characters..."})}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"click-here",children:"Click a hero to see all their words"}),Object(h.jsx)("div",{className:"characters-container",children:n})]})}),g=(n(37),function(e){var t=e.dialog,n=e.id;return Object(h.jsx)("div",{className:"quote-card",children:Object(h.jsx)("h2",{children:t})},n)}),v=(n(38),function(e){var t=e.hero,n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],o=r[1],l=Object(c.useState)([]),j=Object(s.a)(l,2),d=j[0],u=j[1];if(Object(c.useEffect)((function(){a.length||i(t._id).then((function(e){return o(e.docs)}))}),[a,t._id]),t||u("We are having trouble loading quotes"),a.length){var b=a.map((function(e){return Object(h.jsx)(g,{dialog:e.dialog,id:e._id})}));return Object(h.jsxs)("div",{children:[d&&Object(h.jsx)("h2",{className:"error-msg",children:d}),Object(h.jsxs)("h2",{className:"words-of",children:["The words of ",t.name]}),Object(h.jsx)("div",{className:"quote-cards-container",children:b}),";"]})}return Object(h.jsx)("h2",{children:"Trouble loading quotes..."})}),p=(n(39),function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Th\xe9oden,Faramir,\xc9owyn",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer Qdwh7zeW6AgFOOGNGAr4"}}).then((function(e){return e.json()})).then((function(e){return r(e.docs)})).catch((function(e){return console.log(e)}))}),[]),Object(h.jsxs)("main",{children:[Object(h.jsx)(j,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(h.jsxs)("div",{className:"entry-container",children:[Object(h.jsxs)("h2",{children:[Object(h.jsx)("span",{children:Object(h.jsx)("img",{src:"https://img.icons8.com/color/48/000000/european-dragon.png",alt:"dragon-icon"})}),"Welcome to Trivia at the Green Dragon",Object(h.jsx)("span",{children:Object(h.jsx)("img",{src:"https://img.icons8.com/color/48/000000/european-dragon.png",alt:"dragon-icon"})})]}),Object(h.jsx)("h3",{className:"entry-text",children:"Test your memory and honor our heros of the Third Age"}),Object(h.jsx)("h3",{className:"entry-text",children:"best of luck to you!"}),Object(h.jsx)(l.b,{className:"link entry-text begin",to:"/trivia",children:"...Begin..."}),Object(h.jsx)(l.b,{to:"/heroes",className:" link practice-text",children:"Click Here to pratice..."})]})}}),Object(h.jsx)(o.a,{exact:!0,path:"/trivia",render:function(){return Object(h.jsx)(m,{allCharacters:n})}}),Object(h.jsx)(o.a,{exact:!0,path:"/heroes",render:function(){return Object(h.jsx)(x,{characters:n})}}),Object(h.jsx)(o.a,{path:"/heroes/:name",render:function(e){var t=e.match,c=n.find((function(e){return e.name===t.params.name}));return Object(h.jsx)(v,{hero:c})}})]})]})}),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},w=Object(h.jsxs)(l.a,{children:[" ",Object(h.jsx)(p,{})," "]});a.a.render(w,document.getElementById("root")),N()}},[[40,1,2]]]);
//# sourceMappingURL=main.401f63cd.chunk.js.map