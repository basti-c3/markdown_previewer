(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),o=n(7),r=n.n(o),s=(n(18),n(8)),c=n(9),u=n(4),l=n(13),d=n(12),h=(n(19),n(10)),p=n(11),j=n(1),f=window.marked;f.setOptions({breaks:!0});var b=new f.Renderer;b.link=function(e,t,n){return'<a target="_blank" href="'.concat(e,'">').concat(n)+"</a>"};function w(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header"}),Object(j.jsx)(m,{}),Object(j.jsx)(h.a,{icon:p.a})]})}var m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={input:'# Welcome to my React Markdown Previewer\n## I Hope you like it!\nYou may ask yourself what this website is for? Well, you can **easily** transform normally written text into a structured Documents with headings:\n# of\n## all\n### sizes\n#### you can\n##### possibly\n###### imagine\nYou can write **bold** or *italic*, you can integrate [links to cat photos](https://visualhunt.com/photos/cat/), or even put in the photos yourself:\n![cute cat photo](https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg)\nThere is tons of other stuff, like printing code: `function(example) {...}` or a little larger:\n```\nfunction(expample) {\n  if (this.example == "funny") {\n    return "Awesome!"\n  } else {\n    return ":(";\n  }\n}\n```\nPretty ~~lame~~ funny, right?\nNot just Code comes in blocks, you can quote stuff in blocks too.\n>As easy as this!\n\nIf you happen to be making a list what you like about this editor, you can do that like this:\n- Nice colors\n- Easy handling\n- funny construction manual\n- no ads left and right\n'},i.ChangeInput=i.ChangeInput.bind(Object(u.a)(i)),i}return Object(c.a)(n,[{key:"ChangeInput",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsxs)("div",{id:"editor-window",class:"window",children:[Object(j.jsx)("div",{class:"header",children:"Editor"}),Object(j.jsx)("textarea",{id:"editor",type:"text",value:this.state.input,onChange:this.ChangeInput})]}),Object(j.jsx)(y,{text:this.state.input})]})}}]),n}(a.a.Component),y=function(e){return Object(j.jsxs)("div",{id:"preview-window",class:"window",children:[Object(j.jsx)("div",{class:"header",children:"Preview"}),Object(j.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:f(e.text,{renderer:b})}})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),g()}},[[26,1,2]]]);
//# sourceMappingURL=main.1e8fabb6.chunk.js.map