(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),r=n.n(i),l=(n(14),n(1)),s=n(2),c=n(3),h=n(5),u=n(4),d=n(6),m=(n(15),["You take your life in your own hands, and what happens? A terrible thing, no one to blame.","You can\u2019t fall if you don\u2019t climb. But there\u2019s no joy in living your whole life on the ground.","If you look at what you have in life, you\u2019ll always have more. If you look at what you don\u2019t have in life, you\u2019ll never have enough.","If you want to lift yourself up, lift up someone else.","I attribute my success to this: I never gave or took any excuse.","The battles that count aren\u2019t the ones for gold medals. The struggles within yourself\u2013the invisible battles inside all of us\u2013that\u2019s where it\u2019s at.","If you hear a voice within you say \u201cyou cannot paint,\u201d then by all means paint and that voice will be silenced.","Change your thoughts and you change your world."]),p=["Erica Jong","Unknown","Oprah Winfrey","Booker T. Washington","Florence Nightingale","Jesse Owens","Vincent Van Gogh","Norman Vincent Peale"],w=["one","two","three"],f=["text-one","text-two","text-three"],y=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",{id:"text",className:"text-center col-xs-12 col-md-12 "+f[this.props.index.colorIndex]},'"',m[this.props.index.randomIndex]),a.a.createElement("p",{id:"author",className:"text-right col-xs-12 col-md-12 "+f[this.props.index.colorIndex]},"--",p[this.props.index.randomIndex]),a.a.createElement("p",{id:"tweet",className:"col-xs-12 col-md-2 "+w[this.props.index.colorIndex]+" text-center"},a.a.createElement("a",{id:"tweet-quote",href:"#twitter.com/intent/tweet",target:"_blank"},a.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),"tweet it")),a.a.createElement("p",{id:"button",className:"col-xs-12 col-md-3 col-md-offset-7"},a.a.createElement("button",{id:"new-quote",className:w[this.props.index.colorIndex],onClick:this.props.handleChange},"New quote")))}}]),t}(a.a.Component),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={randomIndex:0,colorIndex:0},n.newQuote=n.newQuote.bind(Object(l.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"newQuote",value:function(){this.setState({randomIndex:Math.floor(8*Math.random()),colorIndex:Math.floor(3*Math.random())})}},{key:"render",value:function(){return a.a.createElement("div",{id:"app-container",className:"row "+w[this.state.colorIndex]},a.a.createElement("div",{id:"quote-box",className:"col-xs-9 col-md-6 col-md-offset-3 row well "},a.a.createElement(y,{index:this.state,handleChange:this.newQuote})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16),n(17);r.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.855a61f2.chunk.js.map