"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[394],{8439:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=s(5893),t=s(1151),o=s(7004);const c={},i="\ud83d\udc50 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",a={id:"demo-app/configure",title:"\ud83d\udc50 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",description:"\u73b0\u5728\u4f60\u7684\u73af\u5883\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e86\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u4e86\u3002",source:"@site/docs/50-demo-app/3-configure.mdx",sourceDirName:"50-demo-app",slug:"/demo-app/configure",permalink:"/intro-lab-cn/docs/demo-app/configure",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab-cn/blob/main/docs/50-demo-app/3-configure.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 \u542f\u52a8\u5e94\u7528\u7a0b\u5e8f",permalink:"/intro-lab-cn/docs/demo-app/start-app"},next:{title:"\u6a21\u578b\u6821\u9a8c",permalink:"/intro-lab-cn/docs/category/\u6a21\u578b\u6821\u9a8c"}},d={},l=[{value:"\u91cd\u65b0\u52a0\u8f7d\u5ba2\u6237\u7aef",id:"\u91cd\u65b0\u52a0\u8f7d\u5ba2\u6237\u7aef",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",children:"\ud83d\udc50 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u4f60\u7684\u73af\u5883\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e86\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u4e86\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["IDE \u4e2d\u5e94\u8be5\u5df2\u7ecf\u6253\u5f00\u4e86\u4e00\u4e2a\u6587\u4ef6\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u5728\u5de6\u4fa7\u7684\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u67e5\u627e\u5e76\u6253\u5f00\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"server/.env"}),"\u3002\u8fd9\u4e2a\u6587\u4ef6\u5305\u542b\u4e86\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6587\u4ef6\u5e94\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'PORT=5000\nDATABASE_URI="mongodb+srv://user:password@serverurl"\nDATABASE_NAME="library"\nSECRET="secret"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u9700\u8981\u5c06 ",(0,r.jsx)(n.code,{children:"DATABASE_URI"})," \u53c2\u6570\u66f4\u6539\u4e3a\u4f60\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u3002\u8fd9\u4e0e\u5bfc\u5165\u6570\u636e\u65f6\u4f7f\u7528\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u76f8\u540c\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u4e0d\u8bb0\u5f97\u5982\u4f55\u83b7\u53d6\u4f60\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\uff1f\u67e5\u770b ",(0,r.jsx)(n.a,{href:"/docs/importing-data/import-data",children:"\u5bfc\u5165\u56fe\u4e66\u9986\u6570\u636e"})," \u90e8\u5206\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u590d\u5236\u5e76\u7c98\u8d34\u4f60\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u5230 ",(0,r.jsx)(n.code,{children:"DATABASE_URI"})," \u53c2\u6570\u4e2d\u3002\u6587\u4ef6\u5c06\u81ea\u52a8\u4fdd\u5b58\uff0c\u670d\u52a1\u5668\u5c06\u91cd\u65b0\u542f\u52a8\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5e95\u90e8\u7684 ",(0,r.jsx)(n.em,{children:"Terminal"})," \u6807\u7b7e\u4e2d\uff0c\u5bfb\u627e ",(0,r.jsx)(n.code,{children:"Server is running on port: 5000"})," \u884c\u3002\u5982\u679c\u4f60\u770b\u5230\u4e86\uff0c\u5c31\u4e00\u5207\u6b63\u5e38\u4e86\uff01"]}),"\n",(0,r.jsx)(o.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/1-running.png",alt:"\u7ec8\u7aef\u9762\u677f\u7684\u622a\u56fe"}),"\n",(0,r.jsx)(n.h2,{id:"\u91cd\u65b0\u52a0\u8f7d\u5ba2\u6237\u7aef",children:"\u91cd\u65b0\u52a0\u8f7d\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u670d\u52a1\u5668\u6b63\u5728\u8fd0\u884c\uff0c\u4f60\u53ef\u4ee5\u91cd\u65b0\u52a0\u8f7d\u5ba2\u6237\u7aef\u4ee5\u67e5\u770b\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u53f3\u4e0a\u89d2\u7684\u9762\u677f\u4e2d\uff0c\u70b9\u51fb\u5237\u65b0\u56fe\u6807\u4ee5\u91cd\u65b0\u52a0\u8f7d\u5ba2\u6237\u7aef\u3002"}),"\n",(0,r.jsx)(o.Z,{url:"https://github.com/mongodb-developer/library-management-system",src:"img/screenshots/50-demo-app/3-configure/2-reload.png",alt:"\u5237\u65b0\u56fe\u6807\u7684\u622a\u56fe"}),"\n",(0,r.jsx)(n.p,{children:"\u70b9\u51fb\u6b64\u56fe\u6807\u5c06\u91cd\u65b0\u52a0\u8f7d\u5ba2\u6237\u7aef\uff0c\u73b0\u5728\u5e94\u8be5\u5df2\u7ecf\u8fde\u63a5\u5230\u6570\u636e\u5e93\u3002\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u5217\u51fa\u7684\u4e00\u4e9b\u4e66\u7c4d\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7004:(e,n,s)=>{s.d(n,{Z:()=>c});s(7294);var r=s(5893);function t(e){const n=e.url||"http://localhost:3000";return(0,r.jsxs)("div",{className:"browser container",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"column left",children:[(0,r.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,r.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,r.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,r.jsx)("div",{className:"column middle",children:(0,r.jsx)("input",{type:"text",value:n})}),(0,r.jsx)("div",{className:"column right",children:(0,r.jsxs)("div",{style:{float:"right"},children:[(0,r.jsx)("span",{className:"bar"}),(0,r.jsx)("span",{className:"bar"}),(0,r.jsx)("span",{className:"bar"})]})})]}),(0,r.jsx)("div",{className:"content",children:e.children})]})}var o=s(9524);function c(e){return(0,r.jsx)(t,{...e,children:(0,r.jsx)("img",{src:(0,o.Z)(e.src),alt:e.alt})})}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var r=s(7294);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);