(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[3],{14:function(e,r,a){"use strict";a.d(r,"c",(function(){return t})),a.d(r,"d",(function(){return i})),a.d(r,"a",(function(){return n})),a.d(r,"e",(function(){return c})),a.d(r,"b",(function(){return d}));var t="UPDATE_DRIVER",i="UPDATE_ORDERS",n="UPDATE_ADMIN",c="UPDATE_ORDERS_DATA",d="UPDATE_ADMIN_DATA"},39:function(e,r,a){"use strict";var t=a(4),i=a(67);a(0);r.a=function(){return Object(t.jsx)("div",{className:"flex center middle p-10",children:Object(t.jsx)(i.a,{})})}},59:function(e,r,a){},60:function(e,r,a){},66:function(e,r,a){"use strict";a.r(r);var t=a(4),i=a(0),n=a.n(i),c=a(22),d=a.n(c),s=(a(59),a(40)),o=a(2),u=a(51),l=a(83),p=a(84),_=(a(60),a(39)),v=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(10)]).then(a.bind(null,249))})),h=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(11)]).then(a.bind(null,250))}));var b=function(){var e=Object(u.a)({palette:{secondary:{light:"#ff4081",main:"#f50057",dark:"#c51162",contrastText:"#fff"},background:{default:"#fff",paper:"#fff"}}});return Object(t.jsx)("div",{id:"app",children:Object(t.jsxs)(l.a,{theme:e,children:[Object(t.jsx)(p.a,{}),Object(t.jsx)(s.a,{base:"delivery-react-app",children:Object(t.jsx)("main",{children:Object(t.jsx)(i.Suspense,{fallback:Object(t.jsx)(_.a,{}),children:Object(t.jsxs)(o.c,{children:[Object(t.jsx)(o.a,{path:"/admin",component:v}),Object(t.jsx)(o.a,{path:"/",component:h})]})})})})]})})},f=function(e){e&&e instanceof Function&&a.e(16).then(a.bind(null,239)).then((function(r){var a=r.getCLS,t=r.getFID,i=r.getFCP,n=r.getLCP,c=r.getTTFB;a(e),t(e),i(e),n(e),c(e)}))},y=a(37),g=a(19),j=a(20),m=a(15),O=a(10),D=a(14),k=window.localStorage.getItem("admin");k=k?JSON.parse(k):void 0,console.log(k);var x={admin:k};function w(e){return"Dairy"in e&&1===Object.entries(e).length}function E(e){return!("Dairy"in e)}var I=window.localStorage.getItem("driver"),S={driver:I=I?JSON.parse(I):void 0};function A(e){return"Dairy"in e&&1===Object.entries(e).length}function M(e){return!("Dairy"in e)}var N=Object(g.c)(Object(g.b)({setDriver:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.type){case D.c:var a=r.payload;return window.localStorage.setItem("driver",JSON.stringify(a)),Object(O.a)(Object(O.a)({},e),{},{driver:a});case D.d:var t=r.payload,i=new Map,n=(new Map,new Map);t.forEach((function(e){var r=e.subarea,a=e.area,t=e.hub;if(n.has(t)){var i=n.get(t);if(i.has(a)){var c=i.get(a);c.includes(r)||c.push(r),i.set(a,c),n.set(t,i)}else{var d=[r];i.set(a,d),n.set(t,i)}}else{var s=new Map;s.set(a,[r]),n.set(t,s)}}));var c=[],d=[],s=[],o=[],u={};t.forEach((function(e){var r=e.order_id,a=(e.crate_id,e.customer_id),t=e.customer_name,n=e.phone_number,l=e.address_id,p=e.house_number,_=e.subarea,v=e.area,h=e.hub,b=e.category,f=e.product,y=e.quantity,g=e.package_size,j=e.package_type,O=e.product_package_id,D=e.product_id,k=e.region_id,x=e.location_id,w=e.delivery_person_id,E={product:f,product_id:D,product_package_id:O,package_size:g,quantity:y,total:g*y,unit:j},I={driver_id:e.driver_id,deliver_date:e.deliver_date,delivery_type:e.delivery_type,proof_img:e.proof_img,complete_delivery:e.complete_delivery,order_cancel_reason:e.order_cancel_reason,boxes:e.boxes,milk_packets:e.milk_packets};if(!1===c.includes(b)&&c.push(b),D in u||(u[D]=f),i.has(a)){var S=i.get(a),A=S.products;b in A?A[b].push(E):A[b]=[E],S.products=A,S.delivery=I,S.delivered=I.deliver_date}else{!1===s.includes(v)&&s.push(v),!1===o.includes(_)&&o.push(_),!1===d.includes(h)&&d.push(h);var M={name:t,phone:n,order_id:r,address:{address_id:l,house_number:p,subarea:_,area:v,hub:h,region_id:k,location_id:x},products:Object(m.a)({},b,[E]),delivery_person_id:w,delivery:I,delivered:I.deliver_date};i.set(a,M)}}));var l,p=1,_=Object(j.a)(i);try{for(_.s();!(l=_.n()).done;){var v=l.value,h=v[1].products;A(h)?v[1].onlyDairy=!0:(v[1].onlyDairy=!1,v[1].crateId=p,p++),M(h)?v[1].hasNoDairy=!0:v[1].onlyDairy=!1}}catch(b){_.e(b)}finally{_.f()}return Object(O.a)(Object(O.a)({},e),{},{customers:i,locations:n,areas:s,subareas:o,hubs:d,orders:t});default:return e}},setAdmin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.type){case D.a:var a=r.payload;return window.localStorage.setItem("admin",JSON.stringify(a)),Object(O.a)(Object(O.a)({},e),{},{admin:a});case D.b:return Object(O.a)(Object(O.a)({},e),r.payload);case D.e:var t=r.payload,i=new Map,n=new Map,c=new Map;t.forEach((function(e){var r=e.subarea,a=e.area,t=e.hub;if(c.has(t)){var i=c.get(t);if(i.has(a)){var n=i.get(a);n.includes(r)||n.push(r),i.set(a,n),c.set(t,i)}else{var d=[r];i.set(a,d),c.set(t,i)}}else{var s=new Map;s.set(a,[r]),c.set(t,s)}}));var d=[],s=[],o=[],u=[],l={};t.forEach((function(e){var r=e.order_id,a=e.crate_id,t=e.customer_id,n=e.customer_name,c=e.phone_number,p=e.address_id,_=e.house_number,v=e.subarea,h=e.area,b=e.hub,f=e.category,y=e.product,g=e.quantity,j=e.package_size,O=e.package_type,D=e.product_package_id,k=e.product_id,x=e.region_id,w=e.location_id,E=e.delivery_person_id,I={product:y,product_id:k,product_package_id:D,package_size:j,quantity:g,total:j*g,unit:O},S={driver_id:e.driver_id,deliver_date:e.deliver_date,delivery_type:e.delivery_type,proof_img:e.proof_img,complete_delivery:e.complete_delivery,order_cancel_reason:e.order_cancel_reason,boxes:e.boxes,milk_packets:e.milk_packets};if(!1===d.includes(f)&&d.push(f),k in l||(l[k]=y),i.has(t)){var A=i.get(t),M=A.products;f in M?M[f].push(I):M[f]=[I],A.products=M,A.delivery=S,A.delivered=S.deliver_date}else{!1===o.includes(h)&&o.push(h),!1===u.includes(v)&&u.push(v),!1===s.includes(b)&&s.push(b);var N={name:n,phone:c,order_id:r,crate_id:a,address:{address_id:p,house_number:_,subarea:v,area:h,hub:b,region_id:x,location_id:w},products:Object(m.a)({},f,[I]),delivery_person_id:E,delivery:S,delivered:S.deliver_date};i.set(t,N)}}));var p,_=1,v=Object(j.a)(i);try{for(v.s();!(p=v.n()).done;){var h=p.value,b=h[1].products;w(b)?h[1].onlyDairy=!0:(h[1].onlyDairy=!1,h[1].crateId=_,_++),E(b)?h[1].hasNoDairy=!0:h[1].hasNoDairy=!1}}catch(I){v.e(I)}finally{v.f()}var f,y=Object(j.a)(i);try{for(y.s();!(f=y.n()).done;){var g=f.value,k=g[1].products;w(k)&&(g[1].crateId=_,_++)}}catch(I){y.e(I)}finally{y.f()}return t.forEach((function(e){var r=e.customer_id,a=e.category,t=e.product,c=e.quantity,d=e.package_size,s=e.package_type,o=e.product_id;if("Dairy"!==a){var u={quantity:c,total:d*c,crateId:i.get(r).crateId,crate_id:i.get(r).crate_id};if(n.has(o)){var l=n.get(o),p=l.crates;p.push(u),l.crates=p}else{var _={package_size:d,product_id:o,product:t,unit:s,crates:[u]};n.set(o,_)}}})),Object(O.a)(Object(O.a)({},e),{},{customers:i,locations:c,productsCollection:n,products:l,areas:o,subareas:u,categories:d,hubs:s,orders:t});default:return e}}}));d.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(y.a,{store:N,children:Object(t.jsx)(b,{})})}),document.getElementById("root")),f()}},[[66,4,5]]]);
//# sourceMappingURL=main.3906ef7b.chunk.js.map