(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[15],{249:function(e,t,r){"use strict";r.r(t);var a=r(119),n=r(101),c=r(102),l=r(107),i=r(105),s=r(10),d=r(4),o=r(0),j=r.n(o),u=r(37),b=r(241),h=r(256),v=r(198),O=r(235),x=r(190),f=r(191),p=r(253),m=r(228),y=r(229),g=r(242),w=r(39),D=r(121),C=r.n(D),S=r(246),_=r(135),R=r.n(_),A=Object(d.jsx)(R.a,{});function N(e){var t=e.data,r=e.onRowSelect,a=e.onSelectionChange,n=e.deliveryBoys,c=[{name:"Crate",selector:"crateId",sortable:!0,width:"70px"},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Hub",sortable:!0,selector:"address.hub",width:"100px",cell:function(e,t){return e.address.hub}},{name:"Region",sortable:!0,selector:"address.area",width:"140px",cell:function(e,t){return e.address.area}},{name:"Locality",sortable:!0,selector:"address.subarea",width:"150px",cell:function(e,t){return e.address.subarea}},{name:"House",selector:"address.house",width:"200px",cell:function(e,t){return e.address.house_number}},{name:"Gable Top",selector:"gable-top",width:"80px",cell:function(e,t){var r=e.products;if("Dairy"in r){var a=r.Dairy,n=0;return a.forEach((function(e){811===e.product_id&&(n+=e.quantity)})),n||""}return""}},{name:"Paneer",selector:"paneer",width:"80px",cell:function(e,t){var r=e.products;if("Dairy"in r){var a=r.Dairy,n=0;return a.forEach((function(e){225===e.product_id&&(n+=e.total)})),n?n+"g":""}return""}},{name:"Driver",selector:"_driver",cell:function(e,t){var r=e.delivery_person_id;if(r){var a=n.get(r);return a?a.name:""}return""}},{name:"Delivered by",selector:"delivery",cell:function(e,t){var r=e.delivery,a=r.driver_id,c=r.deliver_date;if(a&&c){var l=n.get(a);return l?l.name:"Not Delivered yet"}return""}}];return console.log("Rerendering Table"),Object(d.jsx)("div",{children:Object(d.jsx)(C.a,{striped:!0,noHeader:!0,selectableRows:!0,onSelectedRowsChange:a,dense:!0,selectableRowsComponent:S.a,sortIcon:A,data:t,columns:c,highlightOnHover:!0,pointerOnHover:!0,onRowClicked:function(e,t){r(e)}})})}var k=j.a.memo(N),H=r(125),I=r(183),B=r(227),E=r(153),P=r.n(E),T=r(250),W=r(240),L=r(226),F=r(224),J=r(230);var M=j.a.forwardRef((function(e,t){return Object(d.jsx)(W.a,Object(s.a)({direction:"up",ref:t},e))})),U=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).Review=function(){var e=a.props,t=e.customer,r=e.deliveryBoys;console.log(t);var n=t.delivery,c=n.driver_id,l=n.deliver_date,i=n.delivery_type,s=n.proof_img,o=n.complete_delivery,j=(n.order_cancel_reason,n.boxes),u=n.milk_packets,b=r.get(c);return Object(d.jsx)("div",{className:"pv-10",children:t.delivery.deliver_date?Object(d.jsxs)(J.a,{variant:"outlined",children:[Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(B.a,{variant:"body",children:"Delivered By"}),Object(d.jsx)(B.a,{variant:"h6",children:b.name})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(B.a,{variant:"body",children:"Delivered On"}),Object(d.jsx)(B.a,{variant:"h6",children:new Date(l).toDateString()})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(B.a,{variant:"body",children:"Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"}),Object(d.jsx)(B.a,{variant:"h6",children:function(e){switch(e){case"in_hand":return"In Hand Delivery - \u0915\u0938\u094d\u091f\u092e\u0930 \u0915\u0947 \u0939\u093e\u0925 \u092e\u0947\u0902 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0940";case"doorstep":return"Doorstep Delivery - \u0918\u0930 \u0915\u0947 \u0917\u0947\u091f \u0915\u0947 \u092c\u0939\u093e\u0930 \u0906\u0930\u094d\u0921\u0930 \u0930\u0916\u093e";case"society_guard":return"Handed over to society guard - \u0938\u094b\u0938\u093e\u0907\u091f\u0940 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"tower_guard":return"Handed over to tower guard - \u091f\u093e\u0935\u0930 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"order_cancelled":return"Order Cancelled - \u0906\u0930\u094d\u0921\u0930 \u0915\u0948\u0902\u0938\u093f\u0932";default:return Object(d.jsx)("span",{style:{color:"red"},children:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"})}}(i)})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(B.a,{variant:"body",children:"Delivery Photo"}),s?Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"order",src:s,width:300})}):Object(d.jsx)(B.a,{variant:"h6",children:Object(d.jsx)("span",{style:{color:"red"},children:"No Picture taken"})})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(B.a,{variant:"body",children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"}),Object(d.jsx)(B.a,{variant:"h6",children:function(e){switch(e){case"yes":return"Yes - \u0939\u093e\u0901, \u092e\u0948\u0902\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e";case"no":return"No - \u0928\u0939\u0940\u0902,  \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906 \u0939\u0948";default:return Object(d.jsx)("span",{style:{color:"red"},children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"})}}(o)})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(B.a,{variant:"body",children:"Boxes - \u0915\u093f\u0924\u0928\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(d.jsx)(B.a,{variant:"h6",children:j})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(B.a,{variant:"body",children:"Milk Packets - \u0915\u093f\u0924\u0928\u0947 \u0926\u0942\u0927 \u0915\u0947 \u092a\u0948\u0915\u0947\u091f \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(d.jsx)(B.a,{variant:"h6",children:u})]})]}):Object(d.jsx)(B.a,{variant:"h3",style:{color:"red"},children:"Not Delivered yet"})})},a.state=Object(s.a)({},e),a}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=this.props.customer;return Object(d.jsx)("div",{children:t&&Object(d.jsxs)(T.a,{fullScreen:!0,open:!0,TransitionComponent:M,children:[Object(d.jsx)(F.a,{position:"fixed",color:"default",children:Object(d.jsxs)(L.a,{children:[Object(d.jsx)(I.a,{edge:"start",color:"inherit",onClick:function(){e.props.setSelectedCustomer(!1)},"aria-label":"close",children:Object(d.jsx)(P.a,{})}),Object(d.jsx)(B.a,{variant:"h6",children:t.name})]})}),Object(d.jsxs)("div",{style:{margin:"60px 10px 20px 10px",padding:"30px 10px"},children:[Object(d.jsx)(B.a,{variant:"h4",children:"Delivery Information"}),Object(d.jsx)(y.a,{}),Object(d.jsx)(this.Review,{})]})]})})}}]),r}(j.a.Component),q=Object(u.b)((function(e){var t=e.setAdmin;return Object(s.a)({},t)}))(U),G=r(117);function Y(e){var t=e.setAdmin;return Object(s.a)({},t)}var z=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).hideAddress=function(){return a.setState({hiddenAddress:!0})},a.state={loading:!0,phone:"",selectedArea:"all",selectedSubarea:"all",selectedHub:"all",selectedDriver:"all",showWithoutDairy:!1,hiddenAddress:!1,selectedRow:[]},a}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=!0,r=this.state,a=r.selectedArea,n=r.selectedHub,c=r.selectedSubarea,l=r.selectedDriver,i=r.showWithoutDairy,o=r.phone,j=r.showDelivered,u=this.props,y=u.customers,D=u.locations,C=u.areas,S=u.subareas,_=u.hubs,R=u.deliveryBoys,A=R?Array.from(R.values()):[];if(A=A.sort((function(e,t){return e.name.localeCompare(t.name)})),"all"!==n){var N=D.get(n);C=(C=Array.from(N.keys())).sort((function(e,t){return e.localeCompare(t)}));var k="all"!==a?[N.get(a)]:Array.from(N.values());S=[],k.forEach((function(e){e.forEach((function(e){return S.push(e)}))})),S=S.sort((function(e,t){return e.localeCompare(t)}))}if("all"!==a){var H=new Map;Array.from(D.keys()).forEach((function(e){D.get(e).has(a)&&(H=D.get(e))}));var I=[H.get(a)];S=[],I.forEach((function(e){e.forEach((function(e){return S.push(e)}))})),S=S.sort((function(e,t){return e.localeCompare(t)}))}var B=[];return y&&(t=!1,B=(B=Array.from(y.values())).filter((function(e){return("all"===n||e.address.hub===n)&&(("all"===a||e.address.area===a)&&(("all"===c||e.address.subarea===c)&&(("all"===l||e.delivery_person_id===l)&&(j?!!e.delivery.deliver_date:i?!!e.hasNoDairy:!o||(-1!==e.phone.indexOf(o)||-1!==e.name.toLowerCase().indexOf(o.toLowerCase()))))))}))),Object(d.jsx)("div",{children:t?Object(d.jsx)(w.a,{}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"flex middle",style:{padding:10},children:[Object(d.jsx)("div",{style:{marginRight:20,width:150},children:Object(d.jsx)(p.a,{value:o,label:"Phone or Name",onChange:function(t){return e.setState({phone:t.target.value})}})}),Object(d.jsx)("div",{style:{marginRight:20,width:120},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(h.a,{id:"hub-filter",children:"Hub"}),Object(d.jsxs)(b.a,{labelId:"hub-filter",style:{width:100},value:n,onChange:function(t){var r=t.target.value;e.setState({selectedHub:r,selectedArea:"all",selectedSubarea:"all"})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),_.map((function(e){return Object(d.jsx)(v.a,{value:e,children:e},e)}))]})]})}),Object(d.jsx)("div",{style:{marginRight:20,width:180},children:Object(d.jsx)(O.a,{style:{width:"100%"},children:Object(d.jsx)(g.a,{labelId:"area-filter",options:C,renderInput:function(e){return Object(d.jsx)(p.a,Object(s.a)(Object(s.a)({},e),{},{label:"Area"}))},onChange:function(t,r){console.log(r),e.setState({selectedArea:r||"all",selectedSubarea:"all"})}})})}),Object(d.jsx)("div",{style:{marginRight:20,width:180},children:Object(d.jsx)(O.a,{style:{width:"100%"},children:Object(d.jsx)(g.a,{labelId:"area-filter",options:S,renderInput:function(e){return Object(d.jsx)(p.a,Object(s.a)(Object(s.a)({},e),{},{label:"Sub-Areas"}))},onChange:function(t,r){e.setState({selectedSubarea:r||"all"})}})})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(h.a,{id:"driver-filter",children:"Assigned Driver"}),Object(d.jsxs)(b.a,{labelId:"driver-filter",style:{width:200},value:l||"all",onChange:function(t,r){var a=t.target.value;e.setState({selectedDriver:a})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),A.map((function(e){return Object(d.jsx)(v.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsx)(x.a,{control:Object(d.jsx)(f.a,{checked:j,onChange:function(t,r){return e.setState({showDelivered:r})},color:"primary"}),label:"Only Delivered"})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsx)(x.a,{control:Object(d.jsx)(f.a,{checked:i,onChange:function(t,r){return e.setState({showWithoutDairy:r})},color:"primary"}),label:"Show Customers Without Dairy"})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsx)(m.a,{color:"primary",onClick:function(){e.setState({phone:"",selectedArea:"all",selectedSubarea:"all",selectedHub:"all",selectedDriver:"all",showWithoutDairy:!1})},children:"Clear All Filters"})})]}),Object(d.jsx)(K,{data:B,deliveryBoys:R})]})})}}]),r}(o.Component),K=Object(u.b)(Y,(function(e){return{onUpdateOrdersData:function(t){return e(Object(G.c)(t))}}}))((function(e){var t=e.data,r=e.deliveryBoys,n=e.onUpdateOrdersData,c=Array.from(r.values());c=c.sort((function(e,t){return e.name.localeCompare(t.name)}));var l=Object(o.useState)([]),i=Object(a.a)(l,2),s=i[0],j=i[1],u=Object(o.useState)(!1),x=Object(a.a)(u,2),f=x[0],p=x[1],m=Object(o.useCallback)((function(e){p(e)}),[]),g=Object(o.useCallback)((function(e){e.allSelected,e.selectedCount;var t=e.selectedRows;j(t)}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(y.a,{}),Object(d.jsxs)("div",{className:"flex right middle",children:[Object(d.jsxs)("div",{className:"p-10",children:[t.length," Rows Filtered"]}),Object(d.jsxs)("div",{className:"p-10",children:[s.length," Rows Selected"]}),Object(d.jsx)("div",{className:"p-10",children:Object(d.jsx)("div",{children:Object(d.jsxs)(O.a,{variant:"outlined",children:[Object(d.jsx)(h.a,{id:"driver-filter",children:"Select Driver"}),Object(d.jsxs)(b.a,{labelId:"driver-filter",style:{width:200},disabled:s.length<1,onChange:function(e){var t={order_ids:s.map((function(e){return e.order_id})),driver:e.target.value};Object(H.a)(t).then((function(e){Object(H.b)().then((function(e){var t=e.data;n(t)})),j([])}))},children:[Object(d.jsx)(v.a,{value:"",children:"None"}),c.map((function(e){return Object(d.jsx)(v.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})})})]}),Object(d.jsx)(q,{customer:f,setSelectedCustomer:p}),Object(d.jsx)(k,{data:t,onSelectionChange:g,onRowSelect:m,deliveryBoys:r})]})}));t.default=Object(u.b)(Y)(z)}}]);
//# sourceMappingURL=15.53dc83be.chunk.js.map