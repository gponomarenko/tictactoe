(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),s=a(1),i=(a(10),a(11),a(2)),m=a.n(i),u=function(e){var t=e.value,a=e.chooseField;return c.a.createElement("div",{className:m()({field:!0,"o-style":"O"===t,"x-style":"X"===t}),onClick:a})},o=(a(12),function(e){var t=e.submitPlayers,a=e.name1,n=e.name2,r=e.setName1,l=e.setName2;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"players",onSubmit:t},c.a.createElement("label",{htmlFor:"id-1st"},c.a.createElement("h3",{className:"players__title"},"Input 1st player's name:")),c.a.createElement("input",{className:"players__input",type:"text",name:"name1",placeholder:"1st player name",id:"id-1st",value:a,onChange:function(e){r(e.target.value)},required:!0}),c.a.createElement("label",{htmlFor:"id-2d"},c.a.createElement("h3",{className:"players__title"},"Input 2d player's name:")),c.a.createElement("input",{className:"players__input",type:"text",name:"name2",id:"id-2d",placeholder:"2d player name",value:n,onChange:function(e){l(e.target.value)},required:!0}),c.a.createElement("button",{className:"players__submit",type:"submit",name:"submitPlayers"},"Start game")))}),f=(a(13),function(e){var t=e.active,a=e.submitPlayers,n=e.name1,r=e.name2,l=e.setName1,s=e.setName2;return c.a.createElement("div",{className:m()({modal:!0,active:!0===t,"non-active":!t})},c.a.createElement("div",{className:m()({modal__content:!0,active:!0===t,"non-active":!t})},c.a.createElement(o,{submitPlayers:a,name1:n,name2:r,setName1:l,setName2:s})))}),b=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],E=(a(14),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"gridline vertical first"}),c.a.createElement("div",{className:"gridline vertical second"}),c.a.createElement("div",{className:"gridline horizontal first"}),c.a.createElement("div",{className:"gridline horizontal second"}))}),d=(a(15),function(e){var t=e.winStyle;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:m()({winline:t&&"cs-0"!==t,winStyle:t})}))});var O=function(){var e=Object(n.useState)(Array(9).fill(null)),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("O"),i=Object(s.a)(l,2),m=i[0],o=i[1],O=Object(n.useState)(null),v=Object(s.a)(O,2),p=v[0],j=v[1],N=Object(n.useState)([]),y=Object(s.a)(N,2),h=y[0],_=y[1],S=Object(n.useState)(null),g=Object(s.a)(S,2),w=g[0],k=g[1],P=Object(n.useState)(!0),F=Object(s.a)(P,2),X=F[0],x=F[1],A=Object(n.useState)(""),C=Object(s.a)(A,2),I=C[0],T=C[1],q=Object(n.useState)(""),z=Object(s.a)(q,2),D=z[0],J=z[1],B=Object(n.useState)(null),G=Object(s.a)(B,2),W=G[0],H=G[1],K=Object(n.useState)(null),L=Object(s.a)(K,2),M=L[0],Q=L[1],R=Object(n.useState)(0),U=Object(s.a)(R,2),V=U[0],Y=U[1],Z=Object(n.useState)(0),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(0),ne=Object(s.a)(ae,2),ce=ne[0],re=ne[1],le=Object(n.useState)(!1),se=Object(s.a)(le,2),ie=se[0],me=se[1],ue=Object(n.useCallback)((function(){b.forEach((function(e){var t=a[e[0]];if(t){var n=!0;e.forEach((function(e){a[e]!==t&&(n=!1)})),n&&(_(e),j(m),re((function(e){return e+1})))}}))}),[a,m]);return Object(n.useEffect)((function(){ue(),function(){var e=!0;a.forEach((function(t){t||(e=!1)})),e&&(j("Tie"),_([0]),re((function(e){return e+1})))}()}),[a]),Object(n.useEffect)((function(){if(!p&&!h.length)switch(m){case"X":o("O");break;case"O":o("X")}}),[a]),Object(n.useEffect)((function(){if(p&&h.length){switch(p){case"X":Y((function(e){return e+1}));break;case"O":te((function(e){return e+1}));break;case"Tie":Y((function(e){return e+.5})),te((function(e){return e+.5}))}!function(){var e="cs-".concat(h.join(""));h&&k(e)}()}}),[p,h]),Object(n.useEffect)((function(){if(w&&p){switch(p){case"Tie":alert("Draw! Winner was not defined");break;case"X":alert("Player ".concat(W," won!"));break;case"O":alert("Player ".concat(M," won!"))}o("O"),me(!0)}}),[w]),Object(n.useEffect)((function(){return ie&&(r(Array(9).fill(null)),j(null),_([]),k(null)),function(){me(!1)}})),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"frame left"},w&&c.a.createElement(d,{winStyle:w}),c.a.createElement("div",{className:"board win"},c.a.createElement(E,null),a.map((function(e,t){return c.a.createElement(u,{key:t,value:e,chooseField:function(){!function(e){r(a.map((function(t,a){return a!==e||t?t:m})))}(t)}})})))),c.a.createElement("div",{className:"frame right"},c.a.createElement("p",{className:"frame__score"},"Score"),W?c.a.createElement("p",{className:"frame__score"},"".concat(W&&W,":\n              ").concat(V&&V)):c.a.createElement("p",{className:"frame__score"},"Player: 0"),M?c.a.createElement("p",{className:"frame__score"},"".concat(M&&M,":\n              ").concat(ee&&ee)):c.a.createElement("p",{className:"frame__score"},"Player2: 0"),ce>0&&c.a.createElement("p",{className:"frame__score"},"Games: ".concat(ce))),c.a.createElement(f,{active:X,setActive:x,submitPlayers:function(e){e.preventDefault(),H(I),Q(D),T(""),J(""),x(!1)},name1:I,name2:D,setName1:T,setName2:J})))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.36d43dda.chunk.js.map