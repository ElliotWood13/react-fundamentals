(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[30],{188:function(e,t,n){"use strict";n.r(t),t.default="\x3c!-- Intro to raw React APIs --\x3e\n\x3c!-- \ud83d\udcaf nesting elements --\x3e\n\x3c!-- http://localhost:3000/isolated/final/02.extra-1.html --\x3e\n\n<body>\n  <div id=\"root\"></div>\n  <script src=\"https://unpkg.com/react@17.0.0/umd/react.development.js\"><\/script>\n  <script src=\"https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js\"><\/script>\n  <script type=\"module\">\n    const rootElement = document.getElementById('root')\n    const element = React.createElement('div', {\n      className: 'container',\n      children: [\n        React.createElement('span', null, 'Hello'),\n        ' ',\n        React.createElement('span', null, 'World'),\n      ],\n    })\n    ReactDOM.render(element, rootElement)\n  <\/script>\n</body>\n"}}]);
//# sourceMappingURL=30.2ca6823c.chunk.js.map