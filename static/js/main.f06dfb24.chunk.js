(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),i=(a(14),a(3)),c=a(4),s=a(6),u=a(5),d=a(7);var h=function(t){return function(e){return function(a){return o.a.createPortal(r.a.createElement(e,a),t)}}}(document.getElementById("alert-list"))(function(t){return r.a.createElement("div",{className:"alert"},t.alert)}),v=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(l)))).state={value:"",disabled:!0,alertList:[]},a.handleChange=function(t){a.setState({value:t.target.value}),t.target.value.length>0?a.setState({disabled:!1}):a.setState({disabled:!0})},a.addAlert=function(){a.textInput.focus();var t=a.state.alertList.concat(r.a.createElement(h,{alert:a.state.value,key:new Date}));a.setState({value:"",disabled:!0,alertList:t})},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.textInput.focus()}},{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,this.state.alertList,r.a.createElement("h1",null,"Alerts App"),r.a.createElement("input",{ref:function(e){return t.textInput=e},onChange:this.handleChange,value:this.state.value}),r.a.createElement("button",{onClick:this.addAlert,disabled:this.state.disabled},"ADD ALERT"))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f06dfb24.chunk.js.map