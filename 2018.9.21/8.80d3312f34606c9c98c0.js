webpackJsonp([8],{1677:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return{isloading:e.loading.effects["myapphome/query"],myapphome:e.myapphome}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(178),r=l(d),m=a(179),u=l(m),c=a(82),i=l(c),f=a(11),o=l(f),s=a(182),p=l(s),_=a(60),E=l(_),g=a(26),y=l(g),v=a(1),h=l(v),C=a(6),N=l(C),b=a(2),k=l(b),x=a(3),j=l(x);a(335),a(336),a(89),a(33),a(230),a(71);var T=a(0),I=l(T),L=a(5),z=(l(L),a(34)),S=a(21),M=a(7),G=l(M),P=a(20),F=(l(P),a(43)),O=a(91),q=(l(O),a(719)),w=(l(q),a(723)),H=l(w),A=a(1707),W=l(A),B=function(e){function t(){var e,a,l,n;(0,h.default)(this,t);for(var d=arguments.length,r=Array(d),m=0;m<d;m++)r[m]=arguments[m];return a=l=(0,k.default)(this,(e=t.__proto__||(0,y.default)(t)).call.apply(e,[this].concat(r))),l.onChangePage=function(e,t){(0,l.props.dispatch)({type:"myapphome/query",payload:{page:e,pageSize:t}})},n=a,(0,k.default)(l,n)}return(0,j.default)(t,e),(0,N.default)(t,[{key:"componentWillMount",value:function(){this.onChangePage(1,10)}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.isloading),a=e.myapphome,l=a.myitems,n=(a.pageSize,a.page),d=a.totalItems,m=(0,F.myprofilemenus)(),c=I.default.createElement("div",{className:W.default.pageHeaderContent},I.default.createElement("div",{className:W.default.avatar},I.default.createElement(E.default,{size:"small"})),I.default.createElement("div",{className:W.default.content},I.default.createElement("div",{className:W.default.contentTitle},"\u60a8\u597d\uff0c Myapp\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01"),I.default.createElement("div",null))),f=I.default.createElement("div",{className:W.default.extraContent},I.default.createElement("div",{className:W.default.statItem},I.default.createElement("p",null,"\u793e\u7fa4\u603b\u6570"),I.default.createElement("p",null,"56")),I.default.createElement("div",{className:W.default.statItem},I.default.createElement("p",null,"\u4f1a\u5458\u603b\u6570"),I.default.createElement("p",null,"2233")),I.default.createElement("div",{className:W.default.statItem},I.default.createElement("p",null,"\u8ba2\u5355\u603b\u6570"),I.default.createElement("p",null,"2,223")));return I.default.createElement(H.default,{content:c,extraContent:f},I.default.createElement(r.default,{gutter:24},I.default.createElement(u.default,{xl:16,lg:24,md:24,sm:24,xs:24},I.default.createElement(i.default,{className:W.default.projectList,style:{marginBottom:24},title:"\u6211\u7684\u793e\u7fa4",bordered:!1,extra:I.default.createElement(p.default,{size:"small",onChange:this.onChangePage,defaultCurrent:n,total:d}),loading:t,bodyStyle:{padding:0}},I.default.createElement(i.default.Grid,{className:W.default.projectGrid,key:"createtribeid"},I.default.createElement(S.Link,{to:"/myappadd"},I.default.createElement(i.default,{bodyStyle:{padding:0},bordered:!1},I.default.createElement(i.default.Meta,{title:I.default.createElement("div",{className:W.default.cardTitle},I.default.createElement(E.default,{size:"large",style:{backgroundColor:"white",verticalAlign:"middle"}},I.default.createElement(o.default,{type:"plus-circle-o",style:{fontSize:40,color:"#1890ff"}})),I.default.createElement("span",{className:W.default.titlename},"\u65b0\u5efa")),description:"\u65b0\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684\u793e\u7fa4"}),I.default.createElement("div",{className:W.default.projectItemContent},I.default.createElement("span",{className:W.default.datetime},"\u7b49\u5f85\u60a8\u7684\u521b\u5efa"))))),l.map(function(e){return I.default.createElement(i.default.Grid,{className:W.default.projectGrid,key:e._id},I.default.createElement(S.Link,{to:"/appmg/"+e._id+"/tribemanage/tribehome"},I.default.createElement(i.default,{bodyStyle:{padding:0},bordered:!1},I.default.createElement(i.default.Meta,{title:I.default.createElement("div",{className:W.default.cardTitle},I.default.createElement(E.default,{size:"large",src:e.logo}),I.default.createElement("span",{className:W.default.titlename},e.name)),description:e.intro}),I.default.createElement("div",{className:W.default.projectItemContent},I.default.createElement("span",{className:W.default.datetime},(0,G.default)(e.createat).fromNow())))))}))),I.default.createElement(u.default,{xl:8,lg:24,md:24,sm:24,xs:24},I.default.createElement(i.default,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a"},I.default.createElement("div",{className:W.default.members},I.default.createElement(r.default,{gutter:48},m.map(function(e){return I.default.createElement(u.default,{xl:12,lg:8,md:8,sm:12,xs:12,key:"members-item-"+e.path},I.default.createElement(S.Link,{to:"/myprofile/"+e.path},I.default.createElement(E.default,{size:"small",icon:e.icon,style:{backgroundColor:"#1890ff",verticalAlign:"middle"}}),I.default.createElement("span",{className:W.default.member},e.name)))})))))))}}]),t}(T.Component);B.propTypes={},t.default=(0,z.connect)(n)(B),e.exports=t.default},1707:function(e,t){e.exports={activitiesList:"activitiesList___25CVl",username:"username___3jCtE",event:"event___21C-O",pageHeaderContent:"pageHeaderContent___zOlNW",avatar:"avatar___32uur",content:"content___30qd5",contentTitle:"contentTitle___klV9k",extraContent:"extraContent___Th6kN",statItem:"statItem___2a3eP",members:"members___7CENS",member:"member___RhQWT",projectList:"projectList___16OIw",cardTitle:"cardTitle___xFscx",titlename:"titlename___2PX8F",projectGrid:"projectGrid___1L2e6",projectItemContent:"projectItemContent___1F_TQ",datetime:"datetime___2X8h6",enterlink:"enterlink___2Dqng",item:"item___it0mh",link:"link___2sZnO",cover:"cover___2eMFJ",title:"title___2HFLr",activeCard:"activeCard___2YdK2"}}});