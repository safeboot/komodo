"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},a="configuration",l={unversionedId:"build-images/configuration",id:"build-images/configuration",title:"configuration",description:"monitor just needs a bit of information in order to build your image.",source:"@site/docs/build-images/configuration.md",sourceDirName:"build-images",slug:"/build-images/configuration",permalink:"/monitor/build-images/configuration",draft:!1,editUrl:"https://github.com/mbecker20/monitor/tree/main/docsite/docs/build-images/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"building images",permalink:"/monitor/build-images"},next:{title:"pre build command",permalink:"/monitor/build-images/pre-build"}},u={},c=[{value:"repo configuration",id:"repo-configuration",level:3},{value:"docker build configuration",id:"docker-build-configuration",level:3},{value:"adding build args",id:"adding-build-args",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"configuration"),(0,i.kt)("p",null,"monitor just needs a bit of information in order to build your image."),(0,i.kt)("h3",{id:"repo-configuration"},"repo configuration"),(0,i.kt)("p",null,"To specify the github repo to build, just give it the name of the repo and the branch under ",(0,i.kt)("em",{parentName:"p"},"repo config"),". The name is given like ",(0,i.kt)("inlineCode",{parentName:"p"},"mbecker20/monitor"),", it includes the username / organization that owns the repo."),(0,i.kt)("p",null,"Many repos are private, in this case a Github access token is required in the periphery.config.toml of the building server. these are specified in the config like ",(0,i.kt)("inlineCode",{parentName:"p"},'username = "access_token"'),". An account which has access to the repo and is available on the periphery server can be selected to use via the ",(0,i.kt)("em",{parentName:"p"},"github account")," dropdown menu."),(0,i.kt)("h3",{id:"docker-build-configuration"},"docker build configuration"),(0,i.kt)("p",null,"In order to docker build, monitor just needs to know the build directory and the path of the Dockerfile relative to the repo, you can configure these in the ",(0,i.kt)("em",{parentName:"p"},"build config")," section."),(0,i.kt)("p",null,"If the build directory is the root of the repository, you pass the build path as ",(0,i.kt)("inlineCode",{parentName:"p"},"."),'. If the build directory is some folder of the repo, just pass the name of the the folder. Do not pass the preceding "/". for example ',(0,i.kt)("inlineCode",{parentName:"p"},"build/directory")),(0,i.kt)("p",null,"The dockerfile's path is given relative to the build directory. So if your build directory is ",(0,i.kt)("inlineCode",{parentName:"p"},"build/directory")," and the dockerfile is in ",(0,i.kt)("inlineCode",{parentName:"p"},"build/directory/Dockerfile.example"),", you give the dockerfile path simply as ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile.example"),"."),(0,i.kt)("p",null,"Just as with private repos, you will need to select a docker account to use with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker push"),". "),(0,i.kt)("h3",{id:"adding-build-args"},"adding build args"),(0,i.kt)("p",null,"The Dockerfile may make use of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#arg"},"build args"),". Build args can be passed using the gui by pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," button. They are passed in the menu just like in the would in a .env file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BUILD_ARG1=some_value\nBUILD_ARG2=some_other_value\n")),(0,i.kt)("p",null,"Note that these values are visible in the final image using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker history"),", so shouldn't be used to pass build time secrets. Use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#run---mounttypesecret"},"secret mounts")," for this instead."))}p.isMDXComponent=!0}}]);