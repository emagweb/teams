(this["webpackJsonpvacancies-with-pagination"]=this["webpackJsonpvacancies-with-pagination"]||[]).push([[0],{25:function(e,s,c){},51:function(e,s,c){"use strict";c.r(s);var t=c(2),a=c.n(t),n=c(19),i=c.n(n),l=(c(25),c(9)),r=c(20),j=c(3),o=c(8),b=c.n(o),d=c(0),h="https://emagweb.github.io/sdev/icons/",m="https://skillicons.dev/icons?i=",u=function(){var e=function(){window.scrollTo({top:0,behavior:"smooth"})},s=Object(t.useState)([]),c=Object(j.a)(s,2),a=c[0],n=c[1],i=Object(t.useState)(1),o=Object(j.a)(i,2),u=o[0],x=o[1],O=Object(t.useState)(1),p=Object(j.a)(O,2),v=p[0],f=p[1],N=Object(t.useState)(-1),g=Object(j.a)(N,2),y=g[0],k=g[1],_=Object(t.useState)(!0),w=Object(j.a)(_,2),S=w[0],C=w[1],E=Object(t.useState)(!1),B=Object(j.a)(E,2),F=B[0],I=B[1];function J(){return function(e){e(a()),b.a.get("https://backoffice.pogovorimo.com.ua/api/v1/applicant/?page=".concat(u)).then((function(s){e(s.data.results),n(s.data.results)}))}}return Object(t.useEffect)((function(){var e=function(){var e=Object(r.a)(Object(l.a)().mark((function e(){var s;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://backoffice.pogovorimo.com.ua/api/v1/applicant/?page=".concat(u));case 2:s=e.sent,n(s.data.results),f(s.data.total_pages),x(s.data.current_page);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[u]),Object(d.jsx)("section",{className:"page",children:Object(d.jsxs)("div",{className:"features",children:[Object(d.jsx)("div",{className:"feature-row",children:S?a.map((function(e,s){return Object(d.jsxs)("div",{className:"feature",onClick:function(){k(e.id),C(!S),I(!F)},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"feature-title",children:e.position.length>21?e.position.slice(0,21)+" ...":e.position}),Object(d.jsxs)("div",{className:"flex-row",children:[Object(d.jsx)("img",{className:"flex-pic",src:h+(e.business_area[0]?e.business_area:"software")+".svg",alt:e.business_area}),Object(d.jsxs)("div",{className:"flex-right",children:[Object(d.jsx)("p",{className:"bg-yellow",children:e.general_experience+" years"}),Object(d.jsxs)("p",{className:"salary",children:["$",e.salary,"/hour"]})]})]}),Object(d.jsxs)("div",{className:"skills-icons",children:[Object(d.jsx)("h3",{className:"dark",children:"Expert In"}),Object(d.jsx)("p",{className:"skillsets",children:Object(d.jsx)("img",{src:m+e.technologies.slice(0,6),className:"skill-icon",alt:"skills"})})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"feature-desc",children:Object(d.jsx)("p",{className:"dark m-20",children:e.summary})})})]},s)})):Object(d.jsx)(d.Fragment,{})}),S?Object(d.jsxs)("div",{className:"flex-center",children:[Object(d.jsx)("button",{className:u>1?"":"noactive",onClick:function(){return u>1?(x(u-1),J(),e()):x(u)},children:"Prev"}),function(){for(var s=[],c=function(c){s.push(Object(d.jsx)("span",{className:"v-pages",children:Object(d.jsx)("button",{className:u!==c?"":"noactive",onClick:function(){return u!==c?(x(c),J(),e()):x(u)},children:c<10?"0".concat(c):c},c)}))},t=1;t<=v;t++)c(t);return s}(),Object(d.jsx)("button",{className:u<v?"":"noactive",onClick:function(){return u<v?(x(u+1),J(),e()):x(u)},children:"Next"})]}):Object(d.jsx)(d.Fragment,{}),F?a.filter((function(e){return e.id===y})).map((function(e){return Object(d.jsxs)("div",{className:"features",children:[Object(d.jsx)("h3",{className:"single_v_title",children:e.position}),Object(d.jsxs)("div",{className:"single_v_row",children:[Object(d.jsx)("img",{className:"single_v_pic",src:h+(e.business_area[0]?e.business_area:"software")+".svg",alt:e.business_area}),Object(d.jsx)("div",{className:"single_v_right",children:Object(d.jsx)("p",{className:"single_v_text",children:e.summary})})]}),Object(d.jsxs)("div",{className:"vacancy-overview",children:[Object(d.jsxs)("div",{className:"vacancy-box blue",children:[Object(d.jsxs)("div",{className:"vacancy-left",children:[Object(d.jsx)("p",{children:"Category"}),Object(d.jsx)("p",{children:"Experience"}),Object(d.jsx)("p",{children:"Salary"})]}),Object(d.jsxs)("div",{className:"vacancy-right",children:[Object(d.jsx)("p",{children:e.business_area}),Object(d.jsx)("p",{children:e.general_experience+" years"}),Object(d.jsxs)("p",{children:["$",e.salary,"/hour"]})]})]}),Object(d.jsx)("div",{className:"vacancy-box white",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"vacancy-title",children:"Use technologies"}),Object(d.jsx)("img",{src:m+e.technologies+"&perline=6",className:"skill-icon",alt:"skills"})]})})]}),Object(d.jsxs)("div",{className:"timeline",children:[Object(d.jsx)("h3",{className:"timeline-name",children:"Work Experience"}),e.work_experience.map((function(e,s){return Object(d.jsxs)("div",{className:"timeline-row",children:[Object(d.jsxs)("h4",{className:"timeline-date",children:[Object(d.jsx)("span",{children:e.begin})," - ",Object(d.jsx)("span",{children:e.end})]}),Object(d.jsxs)("div",{className:"timeline-content",children:[Object(d.jsx)("h4",{className:"timeline-title",children:Object(d.jsx)("span",{style:{color:"#fff"},children:e.position})}),Object(d.jsx)("p",{className:"timeline-text",children:e.description})]})]},s)}))]}),Object(d.jsxs)("div",{className:"flex-center",style:{marginTop:80},children:[Object(d.jsx)("button",{className:"button-get",onClick:function(){C(!0),I(!1)},children:"Back to find employee"}),Object(d.jsx)("a",{className:"button-get yellow",href:"https://upcod.typeform.com/to/BqR60b20",children:"Get this employee"})]})]})})):Object(d.jsx)(d.Fragment,{})]})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.ee2c1f76.chunk.js.map