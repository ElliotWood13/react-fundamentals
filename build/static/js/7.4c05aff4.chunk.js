(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[7],{211:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t),n.d(t,"install",(function(){return H}));var o=n(13),r=n(10),i=n(6),c=n(2),a=(n(211),n(212),n(1)),l=n(21),u=n.n(l),s=n(68),d=n(69),b=n(4),f=function(e){var t=e.children,n=e.type,o=void 0===n?"reach-portal":n,r=Object(a.useRef)(null),i=Object(a.useRef)(null),c=Object(b.q)();return Object(b.s)((function(){if(r.current){var e=r.current.ownerDocument;return i.current=null==e?void 0:e.createElement(o),e.body.appendChild(i.current),c(),function(){i.current&&i.current.ownerDocument&&i.current.ownerDocument.body.removeChild(i.current)}}}),[o,c]),i.current?Object(l.createPortal)(t,i.current):Object(a.createElement)("span",{ref:r})};n(17);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}var v=Object(a.forwardRef)((function(e,t){var n=e.as,o=void 0===n?"span":n,r=e.style,i=void 0===r?{}:r,c=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["as","style"]);return Object(a.createElement)(o,p({ref:t,style:p({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},i)},c))}));var m,g=["bottom","height","left","right","top","width"],O=new Map,h=function e(){var t=[];O.forEach((function(e,n){var o,r,i=n.getBoundingClientRect();o=i,r=e.rect,void 0===o&&(o={}),void 0===r&&(r={}),g.some((function(e){return o[e]!==r[e]}))&&(e.rect=i,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),m=window.requestAnimationFrame(e)};var j=function(e,t){return{observe:function(){var n=0===O.size;O.has(e)?O.get(e).callbacks.push(t):O.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),n&&h()},unobserve:function(){var n=O.get(e);if(n){var o=n.callbacks.indexOf(t);o>=0&&n.callbacks.splice(o,1),n.callbacks.length||O.delete(e),O.size||cancelAnimationFrame(m)}}}};function w(e,t,n){var o,r,i;Object(b.h)(t)?o=t:(o=null==(i=null==t?void 0:t.observe)||i,r=null==t?void 0:t.onChange);Object(b.i)(n)&&(r=n);var c=Object(a.useState)(e.current),l=c[0],u=c[1],s=Object(a.useRef)(!1),d=Object(a.useRef)(!1),f=Object(a.useState)(null),p=f[0],v=f[1],m=Object(a.useRef)(r),g=Object(a.useCallback)((function(e){m.current&&m.current(e)}),[]);return Object(b.s)((function(){m.current=r,e.current!==l&&u(e.current)})),Object(b.s)((function(){l&&!s.current&&(s.current=!0,v(l.getBoundingClientRect()))}),[l]),Object(b.s)((function(){var t,n=l;return d.current||(d.current=!0,n=e.current),n?(t=j(n,(function(e){g(e),v(e)})),o&&t.observe(),r):r;function r(){t&&t.unobserve()}}),[o,l,e,g]),p}var y,E,M,x,L,T;function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},S.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var R,k;!function(e){e.Idle="IDLE",e.Focused="FOCUSED",e.Visible="VISIBLE",e.LeavingVisible="LEAVING_VISIBLE",e.Dismissed="DISMISSED"}(R||(R={})),function(e){e.Blur="BLUR",e.Focus="FOCUS",e.GlobalMouseMove="GLOBAL_MOUSE_MOVE",e.MouseDown="MOUSE_DOWN",e.MouseEnter="MOUSE_ENTER",e.MouseLeave="MOUSE_LEAVE",e.MouseMove="MOUSE_MOVE",e.Rest="REST",e.SelectWithKeyboard="SELECT_WITH_KEYBOARD",e.TimeComplete="TIME_COMPLETE"}(k||(k={}));var C,_,I={initial:R.Idle,states:(T={},T[R.Idle]={enter:V,on:(y={},y[k.MouseEnter]=R.Focused,y[k.Focus]=R.Visible,y)},T[R.Focused]={enter:function(){window.clearTimeout(C),C=window.setTimeout((function(){W({type:k.Rest})}),100)},leave:function(){window.clearTimeout(C)},on:(E={},E[k.MouseMove]=R.Focused,E[k.MouseLeave]=R.Idle,E[k.MouseDown]=R.Dismissed,E[k.Blur]=R.Idle,E[k.Rest]=R.Visible,E)},T[R.Visible]={on:(M={},M[k.Focus]=R.Focused,M[k.MouseEnter]=R.Focused,M[k.MouseLeave]=R.LeavingVisible,M[k.Blur]=R.LeavingVisible,M[k.MouseDown]=R.Dismissed,M[k.SelectWithKeyboard]=R.Dismissed,M[k.GlobalMouseMove]=R.LeavingVisible,M)},T[R.LeavingVisible]={enter:function(){window.clearTimeout(_),_=window.setTimeout((function(){return W({type:k.TimeComplete})}),500)},leave:function(){window.clearTimeout(_),V()},on:(x={},x[k.MouseEnter]=R.Visible,x[k.Focus]=R.Visible,x[k.TimeComplete]=R.Idle,x)},T[R.Dismissed]={leave:function(){V()},on:(L={},L[k.MouseLeave]=R.Idle,L[k.Blur]=R.Idle,L)},T)},F={value:I.initial,context:{id:null}},P=[];function V(){F.context.id=null}function B(e){var t=void 0===e?{}:e,n=t.id,o=t.onPointerEnter,r=t.onPointerMove,i=t.onPointerLeave,c=t.onPointerDown,l=t.onMouseEnter,u=t.onMouseMove,s=t.onMouseLeave,f=t.onMouseDown,p=t.onFocus,v=t.onBlur,m=t.onKeyDown,g=t.disabled,O=t.ref,h=t.DEBUG_STYLE,j=String(Object(d.a)(n)),y=Object(a.useState)(!!h||z(j,!0)),E=y[0],M=y[1],x=Object(a.useRef)(null),L=Object(b.r)(O,x),T=w(x,{observe:E});function S(e,t){return"undefined"!==typeof window&&"PointerEvent"in window?e:Object(b.v)(e,t)}function D(e){return function(t){"mouse"===t.pointerType&&e(t)}}function C(){W({type:k.MouseEnter,id:j})}function _(){W({type:k.MouseMove,id:j})}function I(){W({type:k.MouseLeave})}function V(){F.context.id===j&&W({type:k.MouseDown})}return Object(a.useEffect)((function(){return e=function(){M(z(j))},P.push(e),function(){P.splice(P.indexOf(e),1)};var e}),[j]),Object(b.m)("tooltip"),Object(a.useEffect)((function(){var e=Object(b.g)(x.current);function t(e){"Escape"!==e.key&&"Esc"!==e.key||F.value!==R.Visible||W({type:k.SelectWithKeyboard})}return e.addEventListener("keydown",t),function(){return e.removeEventListener("keydown",t)}}),[]),function(e){var t=e.disabled,n=e.isVisible,o=e.ref;Object(a.useEffect)((function(){if("undefined"!==typeof window&&"PointerEvent"in window&&t&&n){var e=Object(b.g)(o.current);return e.addEventListener("mousemove",r),function(){e.removeEventListener("mousemove",r)}}function r(e){n&&(e.target instanceof Element&&e.target.closest("[data-reach-tooltip-trigger][data-state='tooltip-visible']")||W({type:k.GlobalMouseMove}))}}),[t,n])}({disabled:g,isVisible:E,ref:x}),[{"aria-describedby":E?Object(b.j)("tooltip",j):void 0,"data-state":E?"tooltip-visible":"tooltip-hidden","data-reach-tooltip-trigger":"",ref:L,onPointerEnter:Object(b.v)(o,D(C)),onPointerMove:Object(b.v)(r,D(_)),onPointerLeave:Object(b.v)(i,D(I)),onPointerDown:Object(b.v)(c,D(V)),onMouseEnter:S(l,C),onMouseMove:S(u,_),onMouseLeave:S(s,I),onMouseDown:S(f,V),onFocus:Object(b.v)(p,(function(){window.__REACH_DISABLE_TOOLTIPS||W({type:k.Focus,id:j})})),onBlur:Object(b.v)(v,(function(){F.context.id===j&&W({type:k.Blur})})),onKeyDown:Object(b.v)(m,(function(e){"Enter"!==e.key&&" "!==e.key||W({type:k.SelectWithKeyboard})}))},{id:j,triggerRect:T,isVisible:E},E]}var q=Object(b.d)((function(e,t){var n=e.children,o=e.label,r=e.ariaLabel,i=e.id,c=e.DEBUG_STYLE,l=D(e,["children","label","ariaLabel","id","DEBUG_STYLE"]),u=a.Children.only(n),s=B({id:i,onPointerEnter:u.props.onPointerEnter,onPointerMove:u.props.onPointerMove,onPointerLeave:u.props.onPointerLeave,onPointerDown:u.props.onPointerDown,onMouseEnter:u.props.onMouseEnter,onMouseMove:u.props.onMouseMove,onMouseLeave:u.props.onMouseLeave,onMouseDown:u.props.onMouseDown,onFocus:u.props.onFocus,onBlur:u.props.onBlur,onKeyDown:u.props.onKeyDown,disabled:u.props.disabled,ref:u.ref,DEBUG_STYLE:c}),d=s[0],b=s[1];return Object(a.createElement)(a.Fragment,null,Object(a.cloneElement)(u,d),Object(a.createElement)(N,S({ref:t,label:o,"aria-label":r},b,l)))}));var N=Object(b.d)((function(e,t){var n=e.label,o=e.ariaLabel,r=e.isVisible,i=e.id,c=D(e,["label","ariaLabel","isVisible","id"]);return r?Object(a.createElement)(f,null,Object(a.createElement)(U,S({ref:t,label:n,"aria-label":o,isVisible:r},c,{id:Object(b.j)("tooltip",String(i))}))):null}));var U=Object(b.d)((function(e,t){var n=e.ariaLabel,o=e["aria-label"],r=e.as,i=void 0===r?"div":r,c=e.id,l=e.isVisible,u=e.label,s=e.position,d=void 0===s?G:s,f=e.style,p=e.triggerRect,m=D(e,["ariaLabel","aria-label","as","id","isVisible","label","position","style","triggerRect"]),g=null!=(o||n),O=Object(a.useRef)(null),h=Object(b.r)(t,O),j=w(O,{observe:l});return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(i,S({role:g?void 0:"tooltip"},m,{ref:h,"data-reach-tooltip":"",id:g?void 0:c,style:S({},f,A(d,p,j))}),u),g&&Object(a.createElement)(v,{role:"tooltip",id:c},o||n))}));function A(e,t,n){return!n?{visibility:"hidden"}:e(t,n)}var G=function(e,t,n){void 0===n&&(n=8);var o=Object(b.e)(),r=o.width,i=o.height;if(!e||!t)return{};var c={top:e.top-t.height<0,right:r<e.left+t.width,bottom:i<e.bottom+t.height+n,left:e.left-t.width<0},a=c.bottom&&!c.top;return{left:c.right&&!c.left?e.right-t.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px",top:a?e.top-n-t.height+window.pageYOffset+"px":e.top+n+e.height+window.pageYOffset+"px"}};function W(e){var t=function(e,t){var n=I.states[e.value],o=n&&n.on&&n.on[t.type];if(!o)return S({},e,{changed:!1});n&&n.leave&&n.leave(e.context,t);t.type;var r=D(t,["type"]),i=S({},F.context,r),c="string"===typeof o?o:o.target,a=I.states[c];a&&a.enter&&a.enter(e.context,t);return{value:c,context:i,changed:!0}}(F,e),n=t.value,o=t.context;t.changed&&(F={value:n,context:o},P.forEach((function(e){return e(F)})))}function z(e,t){return F.context.id===e&&(t?F.value===R.Visible:F.value===R.Visible||F.value===R.LeavingVisible)}var K=n(9),Y="#3f51b5",J=function(e){return"__react_workshop_app_".concat(e,"__")};function H(){var e=n(213),t=e.keys()[0];function o(){var e=a.useRef(null),t=a.useState(!1),n=Object(i.a)(t,2),o=n[0],l=n[1],u=re(J("devtools_persist"),!1),d=Object(i.a)(u,2),b=d[0],f=d[1],p=re(J("devtools_tab_index"),0),v=Object(i.a)(p,2),m=v[0],g=v[1],O=b||o;return a.useEffect((function(){function t(t){var n,o;l(null!=(n=null==(o=e.current)?void 0:o.contains(t.target))&&n)}return document.addEventListener("mousemove",t),function(){document.removeEventListener("mousemove",t)}}),[]),a.useEffect((function(){if(o){for(var e=Array.from(document.querySelectorAll("iframe")),t=0,n=e;t<n.length;t++){n[t].style.pointerEvents="none"}return function(){var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){t.value.style.pointerEvents=""}}catch(o){n.e(o)}finally{n.f()}}}}),[o]),Object(c.c)("div",{css:{position:"fixed",zIndex:20,bottom:-15,left:0,right:0,width:O?"100%":0,transition:"all 0.3s",label:{margin:0,color:"rgb(216, 221, 227)"},"input, select":{background:"rgb(20, 36, 55)",border:"2px solid rgb(28, 46, 68)",borderRadius:5,color:"white",fontWeight:600,padding:"5px","::placeholder":{color:"rgba(255,255,255,0.3)"},":focus":{outlineColor:Y,borderColor:Y,outline:"1px"}},button:{cursor:"pointer"},"button:not([data-reach-tab])":{borderRadius:5,background:Y,":hover":{background:"#364495"},border:0,color:"#f1f2f7"},"[data-reach-tab]":{border:0,":focus":{outline:"none"}},"[data-reach-tab][data-selected]":{background:"rgb(11, 21, 33)",borderBottom:"3px solid white",marginBottom:-3}}},Object(c.c)("div",{ref:e,css:[{background:"rgb(11, 21, 33)",opacity:"0.6",color:"white",boxSizing:"content-box",height:"60px",width:"68px",transition:"all 0.3s",overflow:"auto"},O?{height:"50vh",width:"100%",opacity:"1"}:null]},Object(c.c)(q,{label:"Toggle Persist DevTools"},Object(c.c)("button",{css:{display:"flex",alignItems:"center",fontSize:"1.2rem",border:"none",padding:"10px 20px",background:"none",marginTop:O?-40:0,marginLeft:O?20:0,position:"absolute",backgroundColor:"rgb(11,21,33) !important",overflow:"hidden",svg:{width:20,marginRight:8,color:b?"white":"rgba(255,255,255,0.7)"},"::before":{content:'""',position:"absolute",height:4,width:"100%",left:0,top:0,background:b?"#ffc107":"transparent"}},onClick:function(){return f((function(e){return!e}))}},Object(c.c)(s.b,null),O?"Workshop DevTools":null)),O?Object(c.c)(K.e,{css:{padding:20},index:m,onChange:function(e){return g(e)}},Object(c.c)(K.b,{css:{marginBottom:20}},Object(c.c)(K.a,null,"Controls"),Object(c.c)(K.a,null,"Request Failures")),Object(c.c)("div",{css:{border:"1px solid rgb(28,46,68)",margin:"0px -20px 20px -20px"}}),Object(c.c)(K.d,{css:{height:"100%"}},Object(c.c)(K.c,null,Object(c.c)(X,null)),Object(c.c)(K.c,null,Object(c.c)(ne,null)))):null),O?Object(c.c)(c.a,{styles:{"#root":{marginBottom:"50vh"}}}):null)}t&&e(t),o.displayName="DevTools";var l=document.getElementById("dev-tools");l&&u.a.unmountComponentAtNode(l),l||((l=document.createElement("div")).id="dev-tools",document.body.appendChild(l)),u.a.render(Object(c.c)(o,null),l)}function X(){return Object(c.c)("div",{css:{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"repeat(auto-fill, minmax(40px, 40px) )",gridGap:"0.5rem",marginRight:"1.5rem"}},Object(c.c)($,null),Object(c.c)(Z,null),Object(c.c)(ee,null),Object(c.c)(te,null),Object(c.c)(Q,null))}function Q(){return Object(c.c)("button",{onClick:function(){for(var e=[],t=0;t<window.localStorage.length;t++){var n=window.localStorage.key(t);"string"===typeof n&&n.startsWith("__react_workshop_app")&&e.push(n)}for(var o=0,r=e;o<r.length;o++){var i=r[o];window.localStorage.removeItem(i)}window.location.assign(window.location.toString())}},"Purge Database")}function Z(){var e=re(J("failure_rate"),0),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.c)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(c.c)("label",{htmlFor:"failureRate"},"Request Failure Percentage: "),Object(c.c)("input",{css:{marginLeft:6},value:100*n,type:"number",min:"0",max:"100",step:"10",onChange:function(e){return o(Number(e.currentTarget.value)/100)},id:"failureRate"}))}function $(){var e=re(J("dev-tools"),!1),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.c)("div",{css:{width:"100%",display:"flex",alignItems:"center"}},Object(c.c)("input",{css:{marginRight:6},checked:n,type:"checkbox",onChange:function(e){return o(e.currentTarget.checked)},id:"enableDevTools"}),Object(c.c)("label",{htmlFor:"enableDevTools"},"Enable DevTools by default"))}function ee(){var e=re(J("min_request_time"),400),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.c)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(c.c)("label",{htmlFor:"minTime"},"Request min time (ms): "),Object(c.c)("input",{css:{marginLeft:6},value:n,type:"number",step:"100",min:"0",max:6e4,onChange:function(e){return o(Number(e.currentTarget.value))},id:"minTime"}))}function te(){var e=re(J("variable_request_time"),400),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.c)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(c.c)("label",{htmlFor:"varTime"},"Request variable time (ms): "),Object(c.c)("input",{css:{marginLeft:6},value:n,type:"number",step:"100",min:"0",max:6e4,onChange:function(e){return o(Number(e.currentTarget.value))},id:"varTime"}))}function ne(){var e=re(J("request_fail_config"),[]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.c)("div",{css:{display:"flex",width:"100%"}},Object(c.c)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.requestMethod,i=t.urlMatch;r((function(e){return[].concat(Object(o.a)(e),[{requestMethod:n.value,urlMatch:i.value}])})),n.value="",i.value=""},css:{display:"grid",gridTemplateRows:"repeat(auto-fill, minmax(50px, 60px) )",maxWidth:300,width:"100%",marginRight:"1rem",gridGap:10}},Object(c.c)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(c.c)("label",{htmlFor:"requestMethod"},"Method:"),Object(c.c)("select",{id:"requestMethod",required:!0},Object(c.c)("option",{value:""},"Select"),Object(c.c)("option",{value:"ALL"},"ALL"),Object(c.c)("option",{value:"GET"},"GET"),Object(c.c)("option",{value:"POST"},"POST"),Object(c.c)("option",{value:"PUT"},"PUT"),Object(c.c)("option",{value:"DELETE"},"DELETE"))),Object(c.c)("div",{css:{width:"100%"}},Object(c.c)("label",{css:{display:"block"},htmlFor:"urlMatch"},"URL Match:"),Object(c.c)("input",{autoComplete:"off",css:{width:"100%",marginTop:4},id:"urlMatch",required:!0,placeholder:"/api/list-items/:listItemId"})),Object(c.c)("div",null,Object(c.c)("button",{css:{padding:"6px 16px"},type:"submit"},"+ Add"))),Object(c.c)("ul",{css:{listStyle:"none",margin:0,padding:0,width:"100%",paddingBottom:"2rem"}},n.map((function(e,t){var n=e.requestMethod,i=e.urlMatch;return Object(c.c)("li",{key:t,css:{padding:"6px 10px",borderRadius:5,margin:"5px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgb(20,36,55)"}},Object(c.c)("div",{css:{display:"flex",flexWrap:"wrap"}},Object(c.c)("strong",{css:{minWidth:70}},n,":"),Object(c.c)("span",{css:{marginLeft:10,whiteSpace:"pre"}},i)),Object(c.c)("button",{css:{opacity:.6,":hover":{opacity:1},fontSize:13,background:"rgb(11, 20, 33) !important"},onClick:function(){return function(e){r((function(t){return[].concat(Object(o.a)(t.slice(0,e)),Object(o.a)(t.slice(e+1)))}))}(t)}},"Remove"))}))))}X.displayName="ControlsPanel",Q.displayName="ClearLocalStorage",Z.displayName="FailureRate",$.displayName="EnableDevTools",ee.displayName="RequestMinTime",te.displayName="RequestVarTime",ne.displayName="RequestFailUI";var oe=function(e){var t=e.key,n=e.state,o=e.serialize;return"".concat(t,": ").concat(o(n))};function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.serialize,r=void 0===o?JSON.stringify:o,c=n.deserialize,l=void 0===c?JSON.parse:c,u=a.useState((function(){var n=window.localStorage.getItem(e);return n?l(n):t instanceof Function?t():t})),s=Object(i.a)(u,2),d=s[0],b=s[1];a.useDebugValue({key:e,state:d,serialize:r},oe);var f=a.useRef(e);return a.useEffect((function(){var t=f.current;t!==e&&window.localStorage.removeItem(t),f.current=e,window.localStorage.setItem(e,r(d))}),[e,d,r]),[d,b]}}}]);
//# sourceMappingURL=7.4c05aff4.chunk.js.map