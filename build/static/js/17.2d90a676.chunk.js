(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[17],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"readingTime",(function(){return p})),n.d(t,"default",(function(){return c})),n.d(t,"tableOfContents",(function(){return l})),n.d(t,"frontMatter",(function(){return i}));var a=n(34),s=(n(1),n(209)),o=["components"],p={text:"2 min read",minutes:1.85,time:111e3,words:370},r={};function c(e){var t=e.components,n=Object(a.a)(e,o);return Object(s.a)("wrapper",Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"intro-to-raw-react-apis"},"Intro to raw React APIs"),Object(s.a)("h2",{id:"-your-notes"},"\ud83d\udcdd Your Notes"),Object(s.a)("p",null,"Elaborate on your learnings here in ",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/02.md")),Object(s.a)("h2",{id:"background"},"Background"),Object(s.a)("p",null,"React is the most widely used frontend framework in the world and it\u2019s using the\nsame APIs that you\u2019re using when it creates DOM nodes."),Object(s.a)("blockquote",null,Object(s.a)("p",{parentName:"blockquote"},"In fact,\n",Object(s.a)("a",{parentName:"p",href:"https://github.com/facebook/react/blob/48907797294340b6d5d8fecfbcf97edf0691888d/packages/react-dom/src/client/ReactDOMComponent.js#L416"},"here\u2019s where that happens in the React source code"),"\nat the time of this writing.")),Object(s.a)("p",null,"React abstracts away the imperative browser API from you to give you a much more\ndeclarative API to work with."),Object(s.a)("blockquote",null,Object(s.a)("p",{parentName:"blockquote"},"Learn more about the difference between those two concepts here:\n",Object(s.a)("a",{parentName:"p",href:"https://tylermcginnis.com/imperative-vs-declarative-programming/"},"Imperative vs Declarative Programming"))),Object(s.a)("p",null,"One important thing to know about React is that it supports multiple platforms\n(for example, native and web). Each of these platforms has its own code\nnecessary for interacting with that platform, and then there\u2019s shared code\nbetween the platforms."),Object(s.a)("p",null,"With that in mind, you need two JavaScript files to write React applications for\nthe web:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"React: responsible for creating React elements (kinda like\n",Object(s.a)("inlineCode",{parentName:"li"},"document.createElement()"),")"),Object(s.a)("li",{parentName:"ul"},"ReactDOM: responsible for rendering React elements to the DOM (kinda like\n",Object(s.a)("inlineCode",{parentName:"li"},"rootElement.append()"),")")),Object(s.a)("h2",{id:"exercise"},"Exercise"),Object(s.a)("p",null,"Production deploys:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/exercise/02.html"},"Exercise")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/final/02.html"},"Final"))),Object(s.a)("p",null,"Let\u2019s convert this to use React! But don\u2019t worry, we won\u2019t be doing any JSX just\nyet\u2026 You\u2019re going to use raw React APIs here."),Object(s.a)("p",null,'In modern applications you\u2019ll get React and React DOM files from a "package\nregistry" like ',Object(s.a)("a",{parentName:"p",href:"https://npmjs.com"},"npm")," (",Object(s.a)("a",{parentName:"p",href:"https://npm.im/react"},"react")," and\n",Object(s.a)("a",{parentName:"p",href:"https://npm.im/react-dom"},"react-dom"),"). But for these first exercises, we\u2019ll use\nthe script files which are available on ",Object(s.a)("a",{parentName:"p",href:"https://unpkg.com"},"unpkg.com")," and\nregular script tags so you don\u2019t have to bother installing them. So in the\nexercise you\u2019ll be required to add script tags for these files."),Object(s.a)("p",null,"Once you include the script tags, you\u2019ll have two new global variables to use:\n",Object(s.a)("inlineCode",{parentName:"p"},"React")," and ",Object(s.a)("inlineCode",{parentName:"p"},"ReactDOM"),"."),Object(s.a)("p",null,"Here\u2019s a simple example of the API:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> elementProps <span class="token operator">=</span> <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'element-id\'</span><span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token string">\'Hello world!\'</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> elementType <span class="token operator">=</span> <span class="token string">\'h1\'</span>\n<span class="token keyword">const</span> reactElement <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>elementType<span class="token punctuation">,</span> elementProps<span class="token punctuation">)</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>reactElement<span class="token punctuation">,</span> rootElement<span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Alright! Let\u2019s do this!"),Object(s.a)("h2",{id:"extra-credit"},"Extra Credit"),Object(s.a)("h3",{id:"1--nesting-elements"},"1. \ud83d\udcaf nesting elements"),Object(s.a)("p",null,Object(s.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/02.extra-1.html"},"Production deploy")),Object(s.a)("p",null,"See if you can figure out how to write the JavaScript + React code to generate\nthis DOM output:"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("h2",{id:"-feedback"},"\ud83e\udd89 Feedback"),Object(s.a)("p",null,"Fill out\n",Object(s.a)("a",{parentName:"p",href:"https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=02%3A%20Intro%20to%20raw%20React%20APIs&em="},"the feedback form"),"."))}c.isMDXComponent=!0;var l=function(){return[{id:"-your-notes",level:2,title:"\ud83d\udcdd Your Notes",children:[]},{id:"background",level:2,title:"Background",children:[]},{id:"exercise",level:2,title:"Exercise",children:[]},{id:"extra-credit",level:2,title:"Extra Credit",children:[{id:"1--nesting-elements",level:3,title:"1. \ud83d\udcaf nesting elements",children:[]}]},{id:"-feedback",level:2,title:"\ud83e\udd89 Feedback",children:[]}]},i={}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),i=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):r(r({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?s.a.createElement(b,r(r({ref:t},l),{},{components:n})):s.a.createElement(b,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"===typeof e?e:a,p[1]=r;for(var l=2;l<o;l++)p[l]=n[l];return s.a.createElement.apply(null,p)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=17.2d90a676.chunk.js.map