(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,function(e,t,n){},,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),l=n(1);n(3);var i=function(e){var t=e.value,n=e.chooseSquare;return c.a.createElement("div",{className:"square",onClick:n},t)};var u=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",null,c.a.createElement("input",{type:"text",name:"player1",placeholder:"1st player name"}),c.a.createElement("input",{type:"text",name:"player2",placeholder:"2st player name"}),c.a.createElement("button",{type:"submit"},"Confirm")))};n(10);var s=function(e){var t=e.active,n=e.setActive;return c.a.createElement("div",{className:t?"modal active":"modal",onClick:function(){return n(!1)}},c.a.createElement("div",{className:t?"modal__content active":"modal__content",onClick:function(){return n(!1)}},"input players here",c.a.createElement(u,null)))},m=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],f=c.a.createContext("players");var p=function(){var e=Object(a.useState)(Array(9).fill("")),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("O"),u=Object(l.a)(o,2),p=u[0],v=u[1],E=Object(a.useState)({winner:"none",state:"none"}),b=Object(l.a)(E,2),d=b[0],y=b[1],O=Object(a.useState)(!0),h=Object(l.a)(O,2),j=h[0],N=h[1],w=Object(a.useState)(["",""]),k=Object(l.a)(w,2),C=k[0],S=k[1];Object(a.useEffect)((function(){g(),A(),v("X"===p?"O":"X")}),[n]),Object(a.useEffect)((function(){"none"!==d.state&&alert("Game Finished! Winning player: ".concat(d.winner))}),[d]);var g=function(){m.forEach((function(e){var t=n[e[0]];if(""!==t){var a=!0;e.forEach((function(e){n[e]!==t&&(a=!1,console.log("pattern is not found"))})),a&&(y({winner:p,state:"won"}),console.log("".concat(p," won!")))}}))},A=function(){var e=!0;n.forEach((function(t){""===t&&(e=!1)})),e&&(y({winner:"No One",state:"Tie"}),console.log("Tie!"))};return c.a.createElement(f.Provider,{value:C,setPlayers:S},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"frame"},c.a.createElement("div",{className:"board"},n.map((function(e,t,a){return c.a.createElement(i,{key:t,value:n[t],chooseSquare:function(){var e;e=t,r(n.map((function(t,n){return n===e&&""===t?p:t})))}})})))),c.a.createElement("div",{className:"frame"},c.a.createElement("button",{className:"button",type:"button",onClick:function(){r(Array(9).fill(""))}},"Clear board"),c.a.createElement("button",{className:"button",type:"button",onClick:function(){return N(!0)}},"Input new players")),c.a.createElement(s,{active:j,setActive:N})))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.bf6a3783.chunk.js.map