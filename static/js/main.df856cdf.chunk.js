(this["webpackJsonpsimple-react-tools"]=this["webpackJsonpsimple-react-tools"]||[]).push([[0],{58:function(e,t,a){e.exports=a(68)},63:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=a(32),l=a(33),u=a(13),m=a(40),s=a(39),d=(a(63),a(99)),b=a(103),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={count:0},n.increment=n.increment.bind(Object(u.a)(n)),n.decrement=n.decrement.bind(Object(u.a)(n)),n.reset=n.reset.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"increment",value:function(){var e=this;this.setState((function(){return{count:e.state.count+1}}))}},{key:"decrement",value:function(){var e=this;this.setState((function(){return{count:e.state.count-1}}))}},{key:"reset",value:function(){this.setState((function(){return{count:0}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"counter"},r.a.createElement(b.a,{className:"counter__container",border:1,borderColor:"primary.main",borderRadius:16},r.a.createElement("h1",null,"Simple counter:"),r.a.createElement("h2",null,this.state.count),r.a.createElement(d.a,{className:"counterButtons",variant:"contained",color:"primary",onClick:this.increment},"INC (+)"),r.a.createElement(d.a,{className:"counterButtons",variant:"contained",color:"primary",onClick:this.decrement},"DEC (-)"),r.a.createElement(d.a,{className:"counterButtons",variant:"contained",color:"primary",onClick:this.reset},"RESET (0)")))}}]),a}(r.a.Component),f=a(29),E=a(41),p=(a(67),a(101)),v=a(104),C=a(105),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({formData:Object(E.a)({},n.state.formData,Object(f.a)({},e.target.name,e.target.value))})},n.onCheckBoxHandler=function(e){n.setState({formData:Object(E.a)({},n.state.formData,Object(f.a)({},e.target.name,e.target.checked))})},n.onSubmitHandler=function(e){e.preventDefault(),n.setState({clickHandler:!0})},n.onAgainSubmitHandler=function(e){n.setState({clickHandler:!n.state.clickHandler})},n.state={formData:{userName:"",userEmail:"",userMessage:"",checkbox:!1},clickHandler:!1},n.onChangeHandler=n.onChangeHandler.bind(Object(u.a)(n)),n.onCheckBoxHandler=n.onCheckBoxHandler.bind(Object(u.a)(n)),n.onSubmitHandler=n.onSubmitHandler.bind(Object(u.a)(n)),n.onAgainSubmitHandler=n.onAgainSubmitHandler.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return this.state.clickHandler?r.a.createElement(b.a,{className:"form__container",border:1,borderColor:"primary.main",borderRadius:16},r.a.createElement("h1",null,"Thanks for submit!"),r.a.createElement(d.a,{onClick:this.onAgainSubmitHandler,type:"submit",value:"submit",variant:"outlined",color:"primary"},"Send another one?")):r.a.createElement(b.a,{className:"form__container",border:1,borderColor:"primary.main",borderRadius:16},r.a.createElement("h1",null,"Simple form"),r.a.createElement("form",{className:"form__box",onSubmit:this.onSubmitHandler},r.a.createElement(p.a,{onChange:this.onChangeHandler,className:"form__input",id:"outlined-basic",label:"Your name",variant:"outlined",name:"userName"}),r.a.createElement(p.a,{onChange:this.onChangeHandler,className:"form__input",id:"outlined-basic",label:"Your email",variant:"outlined",name:"userEmail"}),r.a.createElement(p.a,{onChange:this.onChangeHandler,className:"form__input",id:"outlined-basic",label:"Your message",variant:"outlined",multiline:!0,rows:8,name:"userMessage"}),r.a.createElement(C.a,{name:"checkbox",control:r.a.createElement(v.a,{color:"primary"}),label:"Are you fine?",labelPlacement:"end",onChange:this.onCheckBoxHandler}),r.a.createElement(d.a,{name:"isChecked?",type:"submit",value:"submit",variant:"outlined",color:"primary"},"Submit")))}}]),a}(r.a.Component);var H=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(k,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.df856cdf.chunk.js.map