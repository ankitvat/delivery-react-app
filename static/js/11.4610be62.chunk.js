(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[11],{212:function(t,e,r){"use strict";r.r(e);var c=r(43),n=r(92),s=r(93),a=r(95),i=r(94),o=r(10),d=r(4),l=r(0),u=r(38),h=r(110),b=r.n(h),j=(r(113),r(99)),O=r(39);var m=function(t){Object(a.a)(r,t);var e=Object(i.a)(r);function r(t){var s;return Object(n.a)(this,r),(s=e.call(this,t)).updateState=function(t){s.setState({selectedRows:t.selectedRows})},s.columns=[{name:"Crate",selector:"crateId",sortable:!0,width:"90px"},{name:"Hub",sortable:!0,width:"100px",cell:function(t,e){return t.address.hub}},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Product",selector:"products",sortable:!1,cell:function(t,e){var r=t.products,n=t.phone,s=Object.entries(r),a=[];return s.forEach((function(t){var e=Object(c.a)(t,2),r=e[0],n=e[1];"Dairy"!==r&&n.forEach((function(t){return a.push(t)}))})),Object(d.jsxs)("table",{style:{width:"100%",textAlign:"left"},id:"customer-sheet-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Total"}),Object(d.jsx)("th",{children:"Qty"})]})}),Object(d.jsx)("tbody",{children:a.map((function(t){var e=t.product_id,r=t.total,c=t.unit,s=t.quantity,a=t.product;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:a}),Object(d.jsxs)("td",{className:"fixed-width-column",children:[r," ",c]}),Object(d.jsx)("td",{className:"fixed-width-column",children:s})]},n.toString()+e.toString())}))})]})}}],s.state={loading:!0},s}return Object(s.a)(r,[{key:"render",value:function(){var t=!0,e=this.props,r=e.customers,c=(e.areas,e.subareas,e.categories,e.hubs,e.orders,[]);return r&&(t=!1,c=(c=Array.from(r.values())).filter((function(t){return!1===t.onlyDairy}))),Object(d.jsx)("div",{children:t?Object(d.jsx)(O.a,{}):Object(d.jsx)("div",{id:"customer-sheet-table",children:Object(d.jsx)(b.a,{data:c,columns:this.columns})})})}}]),r}(l.Component);e.default=Object(u.b)((function(t){var e=t.setAdmin;return Object(o.a)({},e)}),(function(t){return{onUpdateOrdersData:function(e){return t(Object(j.c)(e))}}}))(m)}}]);
//# sourceMappingURL=11.4610be62.chunk.js.map