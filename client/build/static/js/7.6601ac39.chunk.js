(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,a,t){},132:function(e,a,t){},147:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(22),l=t(10),m=t(30),s=(t(113),t(28)),i=Object(r.b)(null,function(e){return{clearItem:function(a){return e(Object(s.c)(a))},addItem:function(a){return e(Object(s.a)(a))},removeItem:function(a){return e(Object(s.d)(a))}}})(function(e){var a=e.cartItem,t=e.clearItem,n=e.addItem,r=e.removeItem,l=a.name,m=a.quantity,s=a.price,i=a.imageUrl;return c.a.createElement("div",{className:"checkout-item"},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:i,alt:"item"})),c.a.createElement("span",{className:"name"},l),c.a.createElement("span",{className:"quantity"},c.a.createElement("div",{className:"arrow",onClick:function(){return n(a)}},"\u2795"),c.a.createElement("span",{className:"value"},m),c.a.createElement("div",{className:"arrow",onClick:function(){return r(a)}},"\u2796")),c.a.createElement("span",{className:"price"},s),c.a.createElement("div",{onClick:function(){return t(a)},className:"remove-button"},"\u2718"))}),o=t(114),u=t.n(o),d=t(115),p=t.n(d),E=function(e){var a=e.price,t=100*a;return c.a.createElement(u.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(a),amount:t,panelLabel:"Pay Now",token:function(e){p()({url:"payment",method:"post",data:{amount:t,token:e}}).then(function(e){alert("succesful payment")}).catch(function(e){console.log("Payment Error: ",e),alert("There was an issue with your payment! Please make sure you use the provided credit card.")})},stripeKey:"pk_test_i7bJE84QP11alRDH8lY2Twkw00Jl1wYTZb"})},v=(t(132),t(51),Object(l.b)({cartItems:m.b,total:m.d}));a.default=Object(r.b)(v)(function(e){var a=e.cartItems,t=e.total;return c.a.createElement("div",{className:"checkout-page"},c.a.createElement("div",{className:"checkout-header"},c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Product")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Description")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Quantity")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Price")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Remove"))),a.map(function(e){return c.a.createElement(i,{key:e.id,cartItem:e})}),c.a.createElement("div",{className:"total"},c.a.createElement("span",null,"TOTAL: $",t),c.a.createElement("div",{className:"test-warning"}),c.a.createElement(E,{price:t})))})}}]);
//# sourceMappingURL=7.6601ac39.chunk.js.map