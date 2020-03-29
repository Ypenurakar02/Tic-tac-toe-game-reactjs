(this["webpackJsonptic-tac-toe-game"]=this["webpackJsonptic-tac-toe-game"]||[]).push([[0],[,function(e,t,a){e.exports={game:"_2sZl1jqqeCzC80L04qifiS",gameInfo:"_1IXd-ZbVEWL5rKa1p4rWcM",gameBoard:"_3s5U8VW36CEOLTxNsCFnEd",playerStatus:"OwTLA0czALeHPJqLxMQa",playerStatusX:"_3O7QxPDoQSLnRBw0-ao267",playerStatusO:"_3t8dBnyi0z34OOJRiQpnXB",resetButton:"_2Z7vLncWbUNZhBmf7sjWlC"}},function(e,t,a){e.exports={square:"_2e0WrkzkRXceGvYvY73Fdg",playerX:"_3z6n_9U1dtpUddsHyrZ3w5",playerO:"_2qJPnxna0Y22UnyPJkzhL8","square--green":"_3Y7v3fTPOZO-Nj6cj_wWvI","kbd-navigation":"_3Msm6i4mOkAqAnhFJnbmRn"}},,,function(e,t,a){e.exports={App:"_1o-FpbQrR11SDFN-G7O4U3","App-logo":"_3JCPttIlaO1n9gbarj-AYQ","App-logo-spin":"RvI1Jd7nZvV5oabR4RbAY",AppHeader:"_1k1HgGYk0_KpeP2A9VTe30",fontPrimary:"_22Qjbdh8_7XTYSVeuqpTyF",header:"hwRc6f9WKlpNo0-FJMnLB"}},,,,,function(e,t,a){e.exports={Modal:"_1GCRtvCs3nN8PCEZl6x_cr"}},function(e,t,a){e.exports={Backdrop:"_3JyJ9DTQh1GEAUCljcI-cT"}},function(e,t,a){e.exports={board:"_2NWyfvGE-OUoIkNwZCdnR7",boardRow:"jMUyhlOWP6HXIlaRjHvRH"}},,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),l=(a(22),a(5)),c=a.n(l),i=a(14),u=a(15),m=a(8),d=a(9),h=a(13),p=a(16),v=a(10),f=a.n(v),y=function(e){return e.children},E=a(11),g=a.n(E),O=function(e){return e.show?r.a.createElement("div",{className:g.a.Backdrop,onClick:e.modalClosed}):null},x=function(e){return r.a.createElement(y,null,r.a.createElement(O,{show:e.show,modalClosed:e.modalClose}),r.a.createElement("div",{className:f.a.Modal,style:{transform:e.show?"traslateY(0)":"traslateY(-100vh)",opacity:e.show?"1":"0",zIndex:e.show?"500":"-1"}},e.children))},N=function(e){return r.a.createElement(y,null,r.a.createElement("h3",null,"Game Over"),r.a.createElement("p",null,e.message))},k=a(2),w=a.n(k),_=function(e){var t=e.value,a=null===t?w.a.square:"X"===t?[w.a.square,w.a.playerX].join(" "):[w.a.square,w.a.playerO].join(" ");return r.a.createElement("button",{onClick:e.clicked,className:a}," ",t," ")},b=a(12),q=a.n(b),C=function(e){var t=function(t){return r.a.createElement(_,{key:t,value:(e.squares||[])[t],clicked:function(){return e.clicked(t)}})};return function(e,a){for(var n=[],s=0,o=0;o<e;o++){for(var l=[],c=0;c<a;c++)l.push(t(s++));n.push(r.a.createElement("div",{key:o,className:q.a.boardRow},l))}return n}(3,3)},j=a(1),I=a.n(j),S={history:[{squares:Array(9).fill(null)}],xIsNext:!0,totalSteps:0,gameOver:!1},R=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state=S,e.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(u.a)(t[a],3),r=n[0],s=n[1],o=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[o])return e[r]}return null},e.clickHandler=function(t){var a=Object(i.a)((e.state.history||[])[0].squares);a[t]=e.state.xIsNext?"X":"O";var n=e.state.totalSteps+1,r=e.calculateWinner(a),s=e.getStatus(r,n);(e.state.history||[])[0].squares[t]||e.setState({history:[{squares:a}],xIsNext:!e.state.xIsNext,totalSteps:n,gameOver:s})},e.getStatus=function(e,t){var a=!1;return e?a="Winner is ".concat(e,"!"):9===t&&(a="It's a tie!"),a},e.whosNext=function(){return"It's your turn "+(e.state.xIsNext?"X":"O")},e.resetGame=function(){e.setState(S)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.xIsNext?I.a.playerStatusX:I.a.playerStatusO;return e=[I.a.playerStatus,e].join(" "),r.a.createElement(y,null,r.a.createElement(x,{show:this.state.gameOver,modalClose:this.resetGame},r.a.createElement(N,{message:this.state.gameOver})),r.a.createElement("div",{className:I.a.game},r.a.createElement("div",{className:e},this.whosNext()),r.a.createElement("div",{className:I.a.gameBoard},r.a.createElement(C,{squares:(this.state.history||[])[0].squares,clicked:this.clickHandler})),r.a.createElement("button",{className:I.a.resetButton,onClick:this.resetGame},"Restart")))}}]),a}(n.Component);var A=function(){return r.a.createElement("div",{className:c.a.App},r.a.createElement("div",{className:c.a.header},r.a.createElement("h1",{className:c.a.fontPrimary},"Tic Tac Toe")),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.e007d687.chunk.js.map