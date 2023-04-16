"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[18],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const i={},a="core setup",c={unversionedId:"core-setup",id:"core-setup",title:"core setup",description:"setting up monitor core is fairly simple. there are some requirements to run monitor core:",source:"@site/docs/core-setup.md",sourceDirName:".",slug:"/core-setup",permalink:"/monitor/core-setup",draft:!1,editUrl:"https://github.com/mbecker20/monitor/tree/main/docsite/docs/core-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"what is monitor?",permalink:"/monitor/intro"},next:{title:"connecting servers",permalink:"/monitor/connecting-servers"}},l={},s=[{value:"1. create the configuration file",id:"1-create-the-configuration-file",level:2},{value:"2. start monitor core",id:"2-start-monitor-core",level:2},{value:"first login",id:"first-login",level:2},{value:"https",id:"https",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"core-setup"},"core setup"),(0,n.kt)("p",null,"setting up monitor core is fairly simple. there are some requirements to run monitor core:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a valid configuration file"),(0,n.kt)("li",{parentName:"ul"},"an instance of MongoDB to which monitor core can connect"),(0,n.kt)("li",{parentName:"ul"},"docker must be installed on the host")),(0,n.kt)("h2",{id:"1-create-the-configuration-file"},"1. create the configuration file"),(0,n.kt)("p",null,"create a configuration file on the system, for example at ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.monitor/core.config.toml"),", and copy the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mbecker20/monitor/blob/main/config_example/core.config.example.toml"},"example config"),". fill in all the necessary information before continuing."),(0,n.kt)("h2",{id:"2-start-monitor-core"},"2. start monitor core"),(0,n.kt)("p",null,"monitor core is distributed via dockerhub under the public repo ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/mbecker2020/monitor-core"},"mbecker2020/monitor_core"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d --name monitor-core \\\n    -v $HOME/.monitor/core.config.toml:/config/config.toml \\\n    -p 9000:9000 \\\n    mbecker2020/monitor-core\n")),(0,n.kt)("h2",{id:"first-login"},"first login"),(0,n.kt)("p",null,"monitor core should now be accessible on the specified port, so navigating to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<address>:<port>")," will display the login page. "),(0,n.kt)("p",null,"the first user to log in will be auto enabled and made admin. any additional users to create accounts will be disabled by default."),(0,n.kt)("h2",{id:"https"},"https"),(0,n.kt)("p",null,"monitor core itself only supports http, so a reverse proxy should be used for https"))}m.isMDXComponent=!0}}]);