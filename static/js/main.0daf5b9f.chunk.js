(this["webpackJsonpsome-pic"]=this["webpackJsonpsome-pic"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(19),a=n.n(i),s=n(9),o=(n(26),n(2)),u=(n(27),n(21)),j=n(17),l=n(7),b=n(1),d=r.a.createContext();function m(e){var t=e.children,n=Object(c.useState)([]),r=Object(l.a)(n,2),i=r[0],a=r[1],s=Object(c.useState)([]),o=Object(l.a)(s,2),m=o[0],O=o[1];Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);return Object(b.jsx)(d.Provider,{value:{allPhotos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{isFavorite:!t.isFavorite}):t}));a(t)},cartItems:m,addToCart:function(e){O((function(t){return[].concat(Object(u.a)(t),[e])}))},removeFromCart:function(e){O((function(t){return t.filter((function(t){return t.id!==e}))}))},emptyCart:function(){O([])}},children:t})}var O=function(){var e=Object(c.useContext)(d).cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line";return Object(b.jsxs)("header",{children:[Object(b.jsx)("h2",{className:"heading",children:Object(b.jsx)(s.b,{to:"/",children:"Pic Some"})}),Object(b.jsx)(s.b,{to:"/cart",children:Object(b.jsx)("i",{className:"".concat(e," ri-fw ri-2x cartsize")})})]})};var f=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useRef)(null);function a(){r(!0)}function s(){r(!1)}return Object(c.useEffect)((function(){var e=i.current;return e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",s),function(){e.removeEventListener("mouseenter",a),e.removeEventListener("mouseleave",s)}}),[]),[n,i]};var h=function(e){var t=e.item,n=f(),r=Object(l.a)(n,2),i=r[0],a=r[1],s=Object(c.useContext)(d).removeFromCart,o=i?"ri-delete-bin-fill":"ri-delete-bin-line";return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsx)("i",{className:o,onClick:function(){return s(t.id)},ref:a}),Object(b.jsx)("img",{src:t.url,width:"130px"}),Object(b.jsx)("p",{children:"$5.99"})]})};var v=function(){var e=Object(c.useContext)(d),t=e.cartItems,n=e.emptyCart,r=Object(c.useState)("Place Order"),i=Object(l.a)(r,2),a=i[0],s=i[1],o=(49.99*t.length).toLocaleString("en-IN",{style:"currency",currency:"INR"}),u=t.map((function(e){return Object(b.jsx)(h,{item:e},e.id)}));return Object(b.jsxs)("main",{className:"cart-page",children:[Object(b.jsx)("h1",{children:"Check out"}),u,Object(b.jsxs)("p",{className:"total-cost",children:["Total: ",o]}),Object(b.jsx)("div",{className:"order-button",children:Object(b.jsx)("button",{onClick:function(){s("Ordering..."),setTimeout((function(){s("Place Order"),n()}),3e3)},children:a})})]})};var x=function(e){var t=e.className,n=e.img,r=Object(c.useContext)(d),i=r.toggleFavorite,a=r.addToCart,s=r.cartItems,o=r.removeFromCart,u=f(),j=Object(l.a)(u,2),m=j[0],O=j[1];return Object(b.jsxs)("div",{className:"".concat(t," image-container"),ref:O,children:[Object(b.jsx)("img",{src:n.url,className:"image-grid"}),n.isFavorite?Object(b.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return i(n.id)}}):m?Object(b.jsx)("i",{className:"ri-heart-line favorite",onClick:function(){return i(n.id)}}):void 0,s.some((function(e){return e.id===n.id}))?Object(b.jsx)("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return o(n.id)}}):m?Object(b.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return a(n)}}):void 0]})};function g(e){return e%5===0?"big":e%6===0?"wide":void 0}var p=function(){var e=Object(c.useContext)(d).allPhotos.map((function(e,t){return Object(b.jsx)(x,{img:e,className:g(t)},e.id)}));return Object(b.jsx)("main",{className:"photos",children:e})};var C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{})}),Object(b.jsx)(o.a,{path:"/cart",children:Object(b.jsx)(v,{})})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(m,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(C,{})})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.0daf5b9f.chunk.js.map