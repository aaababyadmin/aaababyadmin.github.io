webpackJsonp([4],{1668:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{mainapp:e.mainapp,loading:e.transferaaab.loading}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(26),r=n(l),u=a(1),d=n(u),c=a(6),i=n(c),f=a(2),m=n(f),s=a(3),p=n(s),g=a(0),y=n(g),h=a(5),v=(n(h),a(34)),E=a(20),b=n(E),k=a(177),_=a(1695),q=function(e){function t(){return(0,d.default)(this,t),(0,m.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.mainapp,a=e.dispatch,n=e.loading,o={dispatch:a,mainapp:t,loading:n};return y.default.createElement(k.MyWalletToolsPageHeaderLayout,{title:b.default.get("comm.transferaaab")},y.default.createElement(_.TransferAaab,o))}}]),t}(g.PureComponent);t.default=(0,v.connect)(o)(q),e.exports=t.default},1681:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getScatterEosClient=void 0;var n=a(333),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.getScatterEosClient=function(e,t){var a={protocol:t.endpoint.protocol,blockchain:t.network.network,host:t.endpoint.url,port:t.endpoint.port,chainId:t.network.chainId},n={broadcast:!0,sign:!0,chainId:t.network.chainId},l=t.endpoint.protocol;return e.eos(a,o.default,n,l)}},1682:function(e,t,a){"use strict";a(17),a(1683)},1683:function(e,t){},1695:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TransferAaab=void 0;var n=a(1696),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.TransferAaab=o.default},1696:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(82),l=n(o),r=a(139),u=n(r),d=a(46),c=n(d),i=a(716),f=n(i),m=a(11),s=n(m),p=a(334),g=n(p),y=a(4),h=n(y),v=a(331),E=n(v),b=a(26),k=n(b),_=a(1),q=n(_),w=a(6),A=n(w),T=a(2),x=n(T),C=a(3),M=n(C),O=a(112),S=n(O),F=a(113),L=n(F),P=a(332),I=n(P);a(89),a(180),a(70),a(1682),a(33),a(717),a(228),a(138),a(715);var j=a(0),N=n(j),H=a(5),R=(n(H),a(21)),V=a(20),z=n(V),D=a(330),J=a(1681),W=a(90),B=I.default.Item,G=(L.default.TextArea,S.default.Option,function(e){function t(){var e,a,n,o;(0,q.default)(this,t);for(var l=arguments.length,r=Array(l),u=0;u<l;u++)r[u]=arguments[u];return a=n=(0,x.default)(this,(e=t.__proto__||(0,k.default)(t)).call.apply(e,[this].concat(r))),n.formLayout={labelCol:{span:7},wrapperCol:{span:13}},n.TransferEosAction=function(e){var t=n.props,a=t.mainapp,o=t.dispatch,l=a.scatter,r=a.activeNetwork,u=a.eosAccount,d=a.eosAuthority,c=(0,J.getScatterEosClient)(l,r),i={authorization:[u+"@"+d]};console.log("create account eosClient:",c),console.log("create account permissionoptions:",i),console.log("create account payload:",e),o({type:"transferaaab/updatedata",payload:{loading:!0}});var f=z.default.get("comm.nowtokenname");c.contract(W.contractname).then(function(t){t.transfer({from:u,to:e.toname,quantity:Number(e.quantity).toFixed(4).toString()+" "+f,memo:e.memo},i).then(function(e){(0,D.msgSuccess)(e.transaction_id),o({type:"transferaaab/updatedata",payload:{loading:!1}}),o(R.routerRedux.push({pathname:"/mywallettools"}))},function(e){(0,D.msgError)((0,E.default)(e)),o({type:"transferaaab/updatedata",payload:{loading:!1}}),o(R.routerRedux.push({pathname:"/mywallettools"}))})})},n.OnHandleSave=function(){var e=n.props,t=e.mainapp,a=e.form,o=(e.dispatch,t.scatter,t.activeNetwork,t.eosAccount);t.eosAuthority;a.validateFields(function(e,a){if(!e){if(!t||!o)return void(0,D.msgError)(z.default.get("comm.needeoslogin"));if(""==o)return void(0,D.msgError)(z.default.get("comm.needeoslogin"));console.log("values:",a);var l=(0,h.default)({},a),r=z.default.get("comm.nowtokenname"),u=N.default.createElement("div",null,N.default.createElement("p",null,N.default.createElement("b",null,z.default.get("comm.transferaaab"))),N.default.createElement("p",null,z.default.get("comm.fromname"),": ",t.eosAccount),N.default.createElement("p",null,z.default.get("comm.toname"),": ",l.toname),N.default.createElement("p",null,z.default.get("comm.quantity"),": ",Number(l.quantity).toFixed(4).toString()+" "+r),N.default.createElement("p",null,z.default.get("comm.memo"),": ",l.memo));g.default.confirm({title:z.default.get("comm.actionyesno"),content:u,okText:z.default.get("comm.ok"),cancelText:z.default.get("comm.cancel"),onOk:function(){return n.TransferEosAction(l)}})}})},o=a,(0,x.default)(n,o)}return(0,M.default)(t,e),(0,A.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.mainapp),a=e.loading,n=e.form.getFieldDecorator;return N.default.createElement(l.default,{title:N.default.createElement("div",null,N.default.createElement(s.default,{type:"plus-circle-o"})," ",z.default.get("comm.transferaaab"))},N.default.createElement(u.default,{spinning:a},N.default.createElement(I.default,{style:{marginTop:8}},N.default.createElement(B,(0,h.default)({key:"fromname",label:z.default.get("comm.fromname"),hasFeedback:!0},this.formLayout),n("fromname",{initialValue:t&&t.eosAccount,rules:[{required:!0,message:z.default.get("comm.required")}]})(N.default.createElement(L.default,{disabled:!0}))),N.default.createElement(B,(0,h.default)({key:"toname",label:z.default.get("comm.toname"),hasFeedback:!0},this.formLayout),n("toname",{rules:[{required:!0,message:z.default.get("comm.required")}]})(N.default.createElement(L.default,null))),N.default.createElement(B,(0,h.default)({key:"quantity",label:z.default.get("comm.quantity")},this.formLayout),n("quantity",{initialValue:1,rules:[{type:"number",min:1e-4,max:99999,required:!0,message:z.default.get("comm.required")}]})(N.default.createElement(f.default,{style:{width:250}}))," ",z.default.get("comm.nowtokenname")),N.default.createElement(B,(0,h.default)({key:"memo",label:z.default.get("comm.memo"),hasFeedback:!0},this.formLayout),n("memo",{rules:[{required:!0,message:z.default.get("comm.required")}]})(N.default.createElement(L.default,null))),N.default.createElement(B,(0,h.default)({},this.formLayout,{style:{marginTop:32}}),N.default.createElement(c.default,{type:"primary",onClick:this.OnHandleSave,loading:a},z.default.get("comm.ok"))))))}}]),t}(j.PureComponent));t.default=I.default.create()(G),e.exports=t.default}});