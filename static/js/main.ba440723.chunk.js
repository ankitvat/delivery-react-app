(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[2],{14:function(e,r,a){"use strict";a.d(r,"c",(function(){return t})),a.d(r,"d",(function(){return i})),a.d(r,"a",(function(){return n})),a.d(r,"e",(function(){return c})),a.d(r,"b",(function(){return d}));var t="UPDATE_DRIVER",i="UPDATE_ORDERS",n="UPDATE_ADMIN",c="UPDATE_ORDERS_DATA",d="UPDATE_ADMIN_DATA"},42:function(e,r,a){"use strict";var t=a(4),i=a(70);a(0);r.a=function(){return Object(t.jsx)("div",{className:"flex center middle p-10",children:Object(t.jsx)(i.a,{})})}},62:function(e,r,a){},63:function(e,r,a){},69:function(e,r,a){"use strict";a.r(r);var t=a(4),i=a(0),n=a.n(i),c=a(22),d=a.n(c),s=(a(62),a(43)),o=a(2),u=a(54),l=a(86),p=a(87),_=(a(63),a(42)),v=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(6),a.e(10)]).then(a.bind(null,279))})),h=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(11)]).then(a.bind(null,280))}));var y=function(){var e=Object(u.a)({palette:{secondary:{light:"#ff4081",main:"#f50057",dark:"#c51162",contrastText:"#fff"},background:{default:"#fff",paper:"#fff"}}});return Object(t.jsx)("div",{id:"app",children:Object(t.jsxs)(l.a,{theme:e,children:[Object(t.jsx)(p.a,{}),Object(t.jsx)(s.a,{base:"delivery-react-app",children:Object(t.jsx)("main",{children:Object(t.jsx)(i.Suspense,{fallback:Object(t.jsx)(_.a,{}),children:Object(t.jsxs)(o.c,{children:[Object(t.jsx)(o.a,{path:"/admin",component:v}),Object(t.jsx)(o.a,{path:"/",component:h})]})})})})]})})},b=function(e){e&&e instanceof Function&&a.e(18).then(a.bind(null,267)).then((function(r){var a=r.getCLS,t=r.getFID,i=r.getFCP,n=r.getLCP,c=r.getTTFB;a(e),t(e),i(e),n(e),c(e)}))},f=a(39),g=a(19),j=a(20),m=a(15),O=a(10),k=(a(44),a(14)),D=window.localStorage.getItem("admin");D=D?JSON.parse(D):void 0,console.log(D);var x={admin:D};function w(e){return"Dairy"in e&&1===Object.entries(e).length}function E(e){return!("Dairy"in e)}var I=window.localStorage.getItem("driver"),M={driver:I=I?JSON.parse(I):void 0};function S(e){return"Dairy"in e&&1===Object.entries(e).length}function A(e){return!("Dairy"in e)}var T=Object(g.c)(Object(g.b)({setDriver:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.type){case k.c:var a=r.payload;return window.localStorage.setItem("driver",JSON.stringify(a)),Object(O.a)(Object(O.a)({},e),{},{driver:a});case k.d:var t=r.payload,i=new Map,n=(new Map,new Map);t.forEach((function(e){var r=e.subarea,a=e.area,t=e.hub;if(n.has(t)){var i=n.get(t);if(i.has(a)){var c=i.get(a);c.includes(r)||c.push(r),i.set(a,c),n.set(t,i)}else{var d=[r];i.set(a,d),n.set(t,i)}}else{var s=new Map;s.set(a,[r]),n.set(t,s)}}));var c=[],d=[],s=[],o=[],u={};t.forEach((function(e){var r=e.order_id,a=e.crate_id,t=e.customer_id,n=e.customer_name,l=e.phone_number,p=e.address_id,_=e.house_number,v=e.subarea,h=e.area,y=e.hub,b=e.category,f=e.product,g=e.quantity,j=e.package_size,O=e.package_type,k=e.product_package_id,D=e.product_id,x=e.region_id,w=e.location_id,E=e.delivery_person_id,I={product:f,product_id:D,product_package_id:k,package_size:j,quantity:g,total:j*g,unit:O},M={driver_id:e.driver_id,deliver_date:e.deliver_date,delivery_type:e.delivery_type,proof_img:e.proof_img,complete_delivery:e.complete_delivery,order_cancel_reason:e.order_cancel_reason,boxes:e.boxes,milk_packets:e.milk_packets};if(!1===c.includes(b)&&c.push(b),D in u||(u[D]=f),i.has(t)){var S=i.get(t),A=S.products;b in A?A[b].push(I):A[b]=[I],S.products=A,S.delivery=M,S.delivered=M.deliver_date}else{!1===s.includes(h)&&s.push(h),!1===o.includes(v)&&o.push(v),!1===d.includes(y)&&d.push(y);var T={name:n,phone:l,order_id:r,crate_id:a,address:{address_id:p,house_number:_,subarea:v,area:h,hub:y,region_id:x,location_id:w},products:Object(m.a)({},b,[I]),delivery_person_id:E,delivery:M,delivered:M.deliver_date};i.set(t,T)}}));var l,p=Object(j.a)(i);try{for(p.s();!(l=p.n()).done;){var _=l.value,v=_[1].products;S(v)?_[1].onlyDairy=!0:_[1].onlyDairy=!1,A(v)?_[1].hasNoDairy=!0:_[1].onlyDairy=!1}}catch(h){p.e(h)}finally{p.f()}return Object(O.a)(Object(O.a)({},e),{},{customers:i,locations:n,areas:s,subareas:o,hubs:d,orders:t});default:return e}},setAdmin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.type){case k.a:var a=r.payload;return window.localStorage.setItem("admin",JSON.stringify(a)),Object(O.a)(Object(O.a)({},e),{},{admin:a});case k.b:return Object(O.a)(Object(O.a)({},e),r.payload);case k.e:var t=r.payload,i=new Map,n=new Map,c=new Map;t.forEach((function(e){var r=e.subarea,a=e.area,t=e.hub;if(c.has(t)){var i=c.get(t);if(i.has(a)){var n=i.get(a);n.includes(r)||n.push(r),i.set(a,n),c.set(t,i)}else{var d=[r];i.set(a,d),c.set(t,i)}}else{var s=new Map;s.set(a,[r]),c.set(t,s)}}));var d=[],s=[],o=[],u=[],l={};t.forEach((function(e){var r=e.order_id,a=e.crate_id,t=e.order_staus,n=e.order_type,c=e.TIMESTAMP,p=e.customer_id,_=e.customer_name,v=e.phone_number,h=e.address_id,y=e.house_number,b=e.subarea,f=e.area,g=e.hub,j=e.category,O=e.product,k=e.quantity,D=e.package_size,x=e.package_type,w=e.product_package_id,E=e.product_id,I=e.region_id,M=e.location_id,S=e.delivery_person_id,A={product:O,product_id:E,product_package_id:w,package_size:D,quantity:k,category:j,total:D*k,unit:x},T={driver_id:e.driver_id,deliver_date:e.deliver_date,delivery_type:e.delivery_type,proof_img:e.proof_img,complete_delivery:e.complete_delivery,order_cancel_reason:e.order_cancel_reason,boxes:e.boxes,milk_packets:e.milk_packets};if(!1===d.includes(j)&&d.push(j),E in l||(l[E]=O),i.has(p)){var P=i.get(p),N=P.products;j in N?N[j].push(A):N[j]=[A],P.products=N,P.delivery=T,P.delivered=T.deliver_date}else{!1===o.includes(f)&&o.push(f),!1===u.includes(b)&&u.push(b),!1===s.includes(g)&&s.push(g);var z={name:_,phone:v,order_id:r,crate_id:a,order_staus:t,order_type:n,TIMESTAMP:c,address:{address_id:h,house_number:y,subarea:b,area:f,hub:g,region_id:I,location_id:M},products:Object(m.a)({},j,[A]),fnvProducts:[],delivery_person_id:S,delivery:T,delivered:T.deliver_date};i.set(p,z)}}));var p,_=1,v=Object(j.a)(i);try{for(v.s();!(p=v.n()).done;){var h=p.value,y=h[1].products;w(y)?h[1].onlyDairy=!0:(h[1].onlyDairy=!1,h[1].crateId=_,_++),E(y)?h[1].hasNoDairy=!0:h[1].hasNoDairy=!1}}catch(I){v.e(I)}finally{v.f()}var b,f=Object(j.a)(i);try{for(f.s();!(b=f.n()).done;){var g=b.value,D=g[1].products;w(D)&&(g[1].crateId=_,_++)}}catch(I){f.e(I)}finally{f.f()}return t.forEach((function(e){var r=e.customer_id,a=e.category,t=e.product,c=e.quantity,d=e.package_size,s=e.package_type,o=e.product_id,u={quantity:c,total:d*c,crateId:i.get(r).crateId,crate_id:i.get(r).crate_id};if(n.has(o)){var l=n.get(o),p=l.crates;p.push(u),l.crates=p}else{var _={package_size:d,product_id:o,product:t,category:a,unit:s,crates:[u]};n.set(o,_)}})),Object(O.a)(Object(O.a)({},e),{},{customers:i,locations:c,productsCollection:n,products:l,areas:o,subareas:u,categories:d,hubs:s,orders:t});default:return e}}}));d.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(f.a,{store:T,children:Object(t.jsx)(y,{})})}),document.getElementById("root")),b()}},[[69,3,4]]]);
//# sourceMappingURL=main.ba440723.chunk.js.map