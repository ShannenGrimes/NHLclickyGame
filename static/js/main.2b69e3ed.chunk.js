(this["webpackJsonpgh-pages"]=this["webpackJsonpgh-pages"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/images/brassard.jpg","clicked":false},{"id":2,"image":"./assets/images/carter.jpg","clicked":false},{"id":3,"image":"./assets/images/crosby.jpg","clicked":false},{"id":4,"image":"./assets/images/foligno.jpg","clicked":false},{"id":5,"image":"./assets/images/green.jpg","clicked":false},{"id":6,"image":"./assets/images/letang.jpg","clicked":false},{"id":7,"image":"./assets/images/lundqvist.jpg","clicked":false},{"id":8,"image":"./assets/images/oshie.jpg","clicked":false},{"id":9,"image":"./assets/images/seabrook.jpg","clicked":false},{"id":10,"image":"./assets/images/sequin.jpg","clicked":false},{"id":11,"image":"./assets/images/wennberg.jpg","clicked":false},{"id":12,"image":"./assets/images/zetterberg.jpg","clicked":false}]')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(2),n=a.n(i),r=(a(14),a(3)),o=a(4),l=a(7),m=a(5),g=a(8),d=(a(15),function(e){return c.a.createElement("div",{onClick:function(){return e.setClicked(e.id)},className:"card col-md-3"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),u=(a(16),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(17),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),f=a(6),k=(a(18),0),p=0,S="Click on a hockey player to gain points! Click on the same one twice and you lose!",b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={matches:f,correctGuesses:k,bestScore:p,clickMessage:S},a.setClicked=function(e){var t=a.state.matches,s=t.filter((function(t){return t.id===e}));if(s[0].clicked){console.log("Correct Guesses: "+k),console.log("Best Score: "+p),k=0,S="Sorry! You already chose this one.";for(var c=0;c<t.length;c++)t[c].clicked=!1;a.setState({clickMessage:S}),a.setState({correctGuesses:k}),a.setState({matches:t})}else if(k<11)s[0].clicked=!0,k++,S="Congrats! You haven't chosen this before! Choose another",k>p&&(p=k,a.setState({bestScore:p})),t.sort((function(e,t){return.5-Math.random()})),a.setState({matches:t}),a.setState({correctGuesses:k}),a.setState({clickMessage:S});else{s[0].clicked=!0,k=0,S="You are fabulous! Play Again!",p=12,a.setState({bestScore:p});for(var i=0;i<t.length;i++)t[i].clicked=!1;t.sort((function(e,t){return.5-Math.random()})),a.setState({matches:t}),a.setState({correctGuesses:k}),a.setState({clickMessage:S})}},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(h,null,"NHL Hocky Match-up"),c.a.createElement("h3",{className:"scoreSummary"},this.state.clickMessage),c.a.createElement("h3",{className:"scoreSummary card-header"},"Correct Guesses: ",this.state.correctGuesses,c.a.createElement("br",null),"Best Score: ",this.state.bestScore),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.matches.map((function(t){return c.a.createElement(d,{setClicked:e.setClicked,id:t.id,key:t.id,image:t.image})})))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2b69e3ed.chunk.js.map