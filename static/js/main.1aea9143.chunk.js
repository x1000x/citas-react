(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(8),r=a.n(i),l=(a(15),a(9)),o=a(3),j=a(5),b=a(7),h=a(18),u=function(e){var t=e.crearCita,a=Object(n.useState)({mascota:"","prop\xedetario":"",fecha:"",hora:"",sintomas:""}),s=Object(o.a)(a,2),i=s[0],r=s[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),m=u[0],d=u[1],O=function(e){r(Object(b.a)(Object(b.a)({},i),{},Object(j.a)({},e.target.name,e.target.value)))},p=i.mascota,x=i.prop\u00edetario,f=i.fecha,g=i.hora,v=i.sintomas;return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)("h2",{children:"crear cita"}),m?Object(c.jsx)("p",{className:"alerta-error ",children:" Todos los campos son obligatorios"}):null,Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==p.trim()&&""!==x.trim()&&""!==f.trim()&&""!==g.trim()&&""!==v.trim()?(d(!1),i.id=Object(h.a)(),t(i),r({mascota:"","prop\xedetario":"",fecha:"",hora:"",sintomas:""})):d(!0)},children:[Object(c.jsx)("label",{children:"Nombre Mascota"}),Object(c.jsx)("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:O,value:p}),Object(c.jsx)("label",{children:"Nombre Due\xf1o"}),Object(c.jsx)("input",{type:"text",name:"prop\xedetario",className:"u-full-width",placeholder:"Nombre Due\xf1o de la Mascota",onChange:O,value:x}),Object(c.jsx)("label",{children:"Fecha"}),Object(c.jsx)("input",{type:"date",name:"fecha",className:"u-full-width",onChange:O,value:f}),Object(c.jsx)("label",{children:"Hora"}),Object(c.jsx)("input",{type:"time",name:"hora",className:"u-full-width",onChange:O,value:g}),Object(c.jsx)("label",{children:"Sintomas"}),Object(c.jsx)("textarea",{className:"u-full-width",name:"sintomas",onChange:O,value:v,children:" "}),Object(c.jsx)("button",{type:"submit",className:"u-full-width button-primary",children:"Agregar Cita"})]})]})},m=function(e){var t=e.cita,a=e.eliminarCita;return Object(c.jsxs)("div",{className:"cita",children:[Object(c.jsxs)("p",{children:["Mascota: ",Object(c.jsx)("span",{children:t.mascota})]}),Object(c.jsxs)("p",{children:["Due\xf1o: ",Object(c.jsx)("span",{children:t.prop\u00edetario})]}),Object(c.jsxs)("p",{children:["Fecha: ",Object(c.jsx)("span",{children:t.fecha})]}),Object(c.jsxs)("p",{children:["Hora: ",Object(c.jsx)("span",{children:t.hora})]}),Object(c.jsxs)("p",{children:["Sintomas: ",Object(c.jsx)("span",{children:t.sintomas})]}),Object(c.jsx)("button",{className:"button eliminar u-full-width",onClick:function(){return a(t.id)},children:"Eliminar"})]})};var d=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var t=Object(n.useState)(e),a=Object(o.a)(t,2),s=a[0],i=a[1];Object(n.useEffect)((function(){e?localStorage.setItem("citas",JSON.stringify(s)):localStorage.setItem("citas",JSON.stringify([]))}),[s]);var r=function(e){var t=s.filter((function(t){return t.id!==e}));i(t)},j=0===s.length?"No hay Citas":"Administra tus citas";return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)("h1",{children:"Administrador de Pacientes "}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:" row",children:[Object(c.jsx)("div",{className:"one-half column",children:Object(c.jsx)(u,{crearCita:function(e){i([].concat(Object(l.a)(s),[e]))}})}),Object(c.jsxs)("div",{className:"one-half column",children:[Object(c.jsx)("h2",{children:j}),s.map((function(e){return Object(c.jsx)(m,{cita:e,eliminarCita:r},e.id)}))]})]})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.1aea9143.chunk.js.map