"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[223],{7517:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const o={},r="\ud83d\udcd8 \u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c\u53ca\u5176\u91cd\u8981\u6027",l={id:"schema-validation/what-is-schema-validation",title:"\ud83d\udcd8 \u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c\u53ca\u5176\u91cd\u8981\u6027",description:"\u6a21\u578b\u6821\u9a8c\u662f MongoDB \u4e2d\u7684\u4e00\u9879\u529f\u80fd\uff0c\u5b83\u5141\u8bb8\u4f60\u5bf9\u96c6\u5408\u4e2d\u6587\u6863\u7684\u7ed3\u6784\u65bd\u52a0\u7279\u5b9a\u89c4\u5219\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u786e\u4fdd\u5b58\u50a8\u5728 MongoDB \u96c6\u5408\u4e2d\u7684\u6240\u6709\u6587\u6863\u90fd\u9075\u5faa\u9884\u5b9a\u4e49\u7684\u6a21\u5f0f\uff0c\u8fd9\u5bf9\u4e8e\u4fdd\u6301\u6570\u636e\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\u7279\u522b\u6709\u7528\u3002",source:"@site/docs/60-schema-validation/1-what-is-schema-validation.mdx",sourceDirName:"60-schema-validation",slug:"/schema-validation/what-is-schema-validation",permalink:"/intro-lab-cn/docs/schema-validation/what-is-schema-validation",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/intro-lab-cn/blob/main/docs/60-schema-validation/1-what-is-schema-validation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b\u6821\u9a8c",permalink:"/intro-lab-cn/docs/category/\u6a21\u578b\u6821\u9a8c"},next:{title:"\ud83d\udc50 \u4e3a users \u96c6\u5408\u542f\u7528\u9a8c\u8bc1",permalink:"/intro-lab-cn/docs/schema-validation/validate-users"}},a={},c=[{value:"\u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c\uff1f",id:"\u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6a21\u578b\u6821\u9a8c\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6a21\u578b\u6821\u9a8c",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"-\u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c\u53ca\u5176\u91cd\u8981\u6027",children:"\ud83d\udcd8 \u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c\u53ca\u5176\u91cd\u8981\u6027"}),"\n",(0,s.jsx)(e.p,{children:"\u6a21\u578b\u6821\u9a8c\u662f MongoDB \u4e2d\u7684\u4e00\u9879\u529f\u80fd\uff0c\u5b83\u5141\u8bb8\u4f60\u5bf9\u96c6\u5408\u4e2d\u6587\u6863\u7684\u7ed3\u6784\u65bd\u52a0\u7279\u5b9a\u89c4\u5219\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u786e\u4fdd\u5b58\u50a8\u5728 MongoDB \u96c6\u5408\u4e2d\u7684\u6240\u6709\u6587\u6863\u90fd\u9075\u5faa\u9884\u5b9a\u4e49\u7684\u6a21\u5f0f\uff0c\u8fd9\u5bf9\u4e8e\u4fdd\u6301\u6570\u636e\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\u7279\u522b\u6709\u7528\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c",children:"\u4ec0\u4e48\u662f\u6a21\u578b\u6821\u9a8c\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 MongoDB \u4e2d\uff0c\u6a21\u578b\u6821\u9a8c\u6d89\u53ca\u4f7f\u7528 JSON Schema \u5b9a\u4e49\u6821\u9a8c\u89c4\u5219\uff0c\u8fd9\u662f\u4e00\u79cd\u7528\u4e8e\u6821\u9a8c JSON \u6587\u6863\u7ed3\u6784\u548c\u5185\u5bb9\u7684\u5f3a\u5927\u5de5\u5177\u3002\u8fd9\u4e9b\u89c4\u5219\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5b57\u6bb5\u7c7b\u578b\uff1a"})," \u786e\u4fdd\u67d0\u4e9b\u5b57\u6bb5\u662f\u7279\u5b9a\u7684\u6570\u636e\u7c7b\u578b\uff08\u4f8b\u5982\uff0c\u5b57\u7b26\u4e32\u3001\u6574\u6570\u3001\u6570\u7ec4\uff09\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5fc5\u9700\u5b57\u6bb5\uff1a"})," \u786e\u4fdd\u67d0\u4e9b\u5b57\u6bb5\u5728\u6240\u6709\u6587\u6863\u4e2d\u90fd\u5fc5\u987b\u5b58\u5728\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6570\u503c\u8303\u56f4\uff1a"})," \u786e\u4fdd\u6570\u503c\u5b57\u6bb5\u5728\u7279\u5b9a\u8303\u56f4\u5185\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5b57\u7b26\u4e32\u6a21\u5f0f\uff1a"})," \u786e\u4fdd\u5b57\u7b26\u4e32\u5b57\u6bb5\u5339\u914d\u67d0\u4e9b\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6a21\u578b\u6821\u9a8c",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6a21\u578b\u6821\u9a8c\uff1f"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6570\u636e\u5b8c\u6574\u6027\uff1a"})," \u901a\u8fc7\u5f3a\u5236\u6267\u884c\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u9632\u6b62\u65e0\u6548\u6570\u636e\u63d2\u5165\u5230\u96c6\u5408\u4e2d\uff0c\u4ece\u800c\u4fdd\u6301\u6570\u636e\u96c6\u7684\u5b8c\u6574\u6027\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u4e00\u81f4\u6027\uff1a"})," \u6a21\u578b\u6821\u9a8c\u786e\u4fdd\u6240\u6709\u6587\u6863\u9075\u5faa\u4e00\u81f4\u7684\u7ed3\u6784\uff0c\u4f7f\u67e5\u8be2\u548c\u7ba1\u7406\u6570\u636e\u66f4\u52a0\u5bb9\u6613\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u9519\u8bef\u9884\u9632\uff1a"})," \u5728\u6570\u636e\u5e93\u7ea7\u522b\u6355\u6349\u6a21\u5f0f\u8fdd\u89c4\u884c\u4e3a\uff0c\u6709\u52a9\u4e8e\u5728\u6570\u636e\u8f93\u5165\u8fc7\u7a0b\u7684\u65e9\u671f\u8bc6\u522b\u9519\u8bef\uff0c\u51cf\u5c11\u4ee5\u540e\u7684\u6570\u636e\u76f8\u5173\u95ee\u9898\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7b80\u5316\u5e94\u7528\u903b\u8f91\uff1a"})," \u7531\u4e8e\u7531\u6570\u636e\u5e93\u5904\u7406\u6a21\u578b\u6821\u9a8c\uff0c\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u591a\u5730\u5173\u6ce8\u4e1a\u52a1\u903b\u8f91\uff0c\u800c\u4e0d\u662f\u6570\u636e\u6821\u9a8c\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u589e\u5f3a\u534f\u4f5c\uff1a"})," \u5bf9\u4e8e\u4f7f\u7528\u5171\u4eab\u6570\u636e\u5e93\u7684\u56e2\u961f\uff0c\u6a21\u578b\u6821\u9a8c\u6709\u52a9\u4e8e\u786e\u4fdd\u6240\u6709\u56e2\u961f\u6210\u5458\u9075\u5faa\u76f8\u540c\u7684\u6570\u636e\u7ed3\u6784\u89c4\u8303\uff0c\u51cf\u5c11\u8bef\u89e3\u548c\u9519\u8bef\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u63a2\u7d22 ",(0,s.jsx)(e.code,{children:"users"})," \u548c ",(0,s.jsx)(e.code,{children:"authors"})," \u96c6\u5408\u7684 JSON \u6a21\u5f0f\uff0c\u8fd0\u884c\u811a\u672c\u5c06\u6a21\u5f0f\u5e94\u7528\u4e8e\u96c6\u5408\uff0c\u5e76\u901a\u8fc7\u63d2\u5165\u4e0d\u7b26\u5408\u6a21\u5f0f\u7684\u6587\u6863\u6765\u6d4b\u8bd5\u6a21\u578b\u6821\u9a8c\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>r});var s=i(7294);const t={},o=s.createContext(t);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);