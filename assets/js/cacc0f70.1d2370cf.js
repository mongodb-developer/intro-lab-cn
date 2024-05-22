"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[665],{6907:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=e(5893),i=e(1151);const r={},a="\ud83d\udcd8 \u4ecb\u7ecd",s={id:"optimize-app/intro",title:"\ud83d\udcd8 \u4ecb\u7ecd",description:"\u5982\u679c\u60a8\u4eb2\u81ea\u53c2\u52a0\u4e86MongoDB\u56e2\u961f\u7684\u8fd9\u6b21\u8bfe\u7a0b\uff0c\u60a8\u5df2\u7ecf\u5b66\u4e60\u4e86\u6570\u636e\u5efa\u6a21\u7684\u6982\u5ff5\u548c\u6700\u4f73\u5b9e\u8df5\u3002\u60a8\u5bfc\u5165\u7684\u6570\u636e\u4f7f\u7528\u4e86\u8bfe\u7a0b\u4e2d\u4ecb\u7ecd\u7684\u67b6\u6784\uff0c\u4f46\u4ee3\u7801\u793a\u4f8b\u6b63\u5728\u50cf\u67e5\u8be2\u5173\u7cfb\u6570\u636e\u5e93\u4e00\u6837\u67e5\u8be2\u6570\u636e\u3002\u5728\u8fd9\u4e2a\u7ec3\u4e60\u4e2d\uff0c\u60a8\u5c06\u66f4\u65b0\u4ee3\u7801\u4ee5\u4f7f\u7528\u60a8\u5728\u8bfe\u7a0b\u4e2d\u4e86\u89e3\u5230\u7684\u6570\u636e\u6a21\u578b\u3002",source:"@site/docs/70-optimize-app/1-intro.mdx",sourceDirName:"70-optimize-app",slug:"/optimize-app/intro",permalink:"/intro-lab-cn/docs/optimize-app/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab-cn/blob/main/docs/70-optimize-app/1-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f18\u5316\u5e94\u7528\u7a0b\u5e8f",permalink:"/intro-lab-cn/docs/category/\u4f18\u5316\u5e94\u7528\u7a0b\u5e8f"},next:{title:"\ud83d\udcd8 \u4f7f\u7528\u7684\u6a21\u5f0f",permalink:"/intro-lab-cn/docs/optimize-app/patterns"}},p={},c=[];function d(t){const n={a:"a",admonition:"admonition",h1:"h1",p:"p",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-\u4ecb\u7ecd",children:"\ud83d\udcd8 \u4ecb\u7ecd"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u60a8\u4eb2\u81ea\u53c2\u52a0\u4e86MongoDB\u56e2\u961f\u7684\u8fd9\u6b21\u8bfe\u7a0b\uff0c\u60a8\u5df2\u7ecf\u5b66\u4e60\u4e86\u6570\u636e\u5efa\u6a21\u7684\u6982\u5ff5\u548c\u6700\u4f73\u5b9e\u8df5\u3002\u60a8\u5bfc\u5165\u7684\u6570\u636e\u4f7f\u7528\u4e86\u8bfe\u7a0b\u4e2d\u4ecb\u7ecd\u7684\u67b6\u6784\uff0c\u4f46\u4ee3\u7801\u793a\u4f8b\u6b63\u5728\u50cf\u67e5\u8be2\u5173\u7cfb\u6570\u636e\u5e93\u4e00\u6837\u67e5\u8be2\u6570\u636e\u3002\u5728\u8fd9\u4e2a\u7ec3\u4e60\u4e2d\uff0c\u60a8\u5c06\u66f4\u65b0\u4ee3\u7801\u4ee5\u4f7f\u7528\u60a8\u5728\u8bfe\u7a0b\u4e2d\u4e86\u89e3\u5230\u7684\u6570\u636e\u6a21\u578b\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u6ca1\u6709\u548c\u6211\u4eec\u4e00\u8d77\u53c2\u52a0\u8fd9\u6b21\u8bfe\u7a0b\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5148\u5b8c\u6210MongoDB\u5927\u5b66\u4e0a\u7684",(0,o.jsx)(n.a,{href:"https://learn.mongodb.com/learning-paths/data-modeling-for-mongodb",children:"\u6570\u636e\u5efa\u6a21\u8bfe\u7a0b"}),"\uff0c\u7136\u540e\u518d\u5c1d\u8bd5\u8fd9\u4e2a\u7ec3\u4e60\u3002"]})})]})}function l(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>a});var o=e(7294);const i={},r=o.createContext(i);function a(t){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),o.createElement(r.Provider,{value:n},t.children)}}}]);