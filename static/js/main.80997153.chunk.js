(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),i=n.n(a),j=n(8),s=n(7),r=n(2),u=(n(13),n(14),n(0)),b=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],j=Object(c.useState)(e.obj.value),s=Object(r.a)(j,2),b=s[0],d=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{className:"list",children:["\ud83d\udc49 ",e.obj.value]}),Object(u.jsx)("button",{type:"button",className:"edit",onClick:function(){i(!0)},children:"Edit"})," ",Object(u.jsx)("button",{type:"button",className:"delete",onClick:function(){return e.handleDelete(e.obj.id)},children:"Delete"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("textarea",{value:b,className:"editTask",onChange:function(e){d(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"button",className:"saveTask",onClick:function(){""!==b&&(e.handleUpdate(e.obj.id,b),i(!1))},children:"Save"})]})]})},d=(n(16),function(e){var t=e.item,n=e.handleDelete,c=e.handleUpdate;return Object(u.jsx)("div",{id:"myList",children:t.map((function(e){return Object(u.jsx)(b,{obj:e,handleDelete:n,handleUpdate:c},e.id)}))})});var o=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),b=Object(r.a)(i,2),o=b[0],l=b[1],O=0;return Object(u.jsxs)("div",{id:"main",children:[Object(u.jsx)("h1",{children:"TODO LIST"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{id:"task",value:o,onChange:function(e){l(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"button",id:"btn",onClick:function(){if(""!==o){var e={id:(n.filter((function(e){return e.id>O?O=e.id:O})),++O),value:o},t=[].concat(Object(s.a)(n),[e]);a(t),l("")}},children:"Add"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)(d,{item:n,handleDelete:function(e){var t=n.filter((function(t){return t.id!==e?t:void 0}));a(t)},handleUpdate:function(e,t){var c=n.map((function(n){if(n.id===e){var c=Object(j.a)({},n);return c.value=t,c}return n}));a(c)}})]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,j=t.getTTFB;n(e),c(e),a(e),i(e),j(e)}))};i.a.render(Object(u.jsx)(o,{}),document.getElementById("root")),l()}},[[17,1,2]]]);
//# sourceMappingURL=main.80997153.chunk.js.map