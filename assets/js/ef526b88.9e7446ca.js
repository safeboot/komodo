"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},a="configuration",l={unversionedId:"deploy-containers/configuration",id:"deploy-containers/configuration",title:"configuration",description:"choose the docker image",source:"@site/docs/deploy-containers/configuration.md",sourceDirName:"deploy-containers",slug:"/deploy-containers/configuration",permalink:"/monitor/deploy-containers/configuration",draft:!1,editUrl:"https://github.com/mbecker20/monitor/tree/main/docsite/docs/deploy-containers/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"deploy containers",permalink:"/monitor/deploy-containers/"},next:{title:"container management",permalink:"/monitor/deploy-containers/lifetime-management"}},s={},c=[{value:"choose the docker image",id:"choose-the-docker-image",level:2},{value:"attaching a monitor build",id:"attaching-a-monitor-build",level:3},{value:"using a custom image",id:"using-a-custom-image",level:3},{value:"configuring the network",id:"configuring-the-network",level:2},{value:"configuring restart behavior",id:"configuring-restart-behavior",level:2},{value:"configuring environment variables",id:"configuring-environment-variables",level:2},{value:"configuring volumes",id:"configuring-volumes",level:2},{value:"extra args",id:"extra-args",level:2},{value:"post image",id:"post-image",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"configuration"),(0,r.kt)("h2",{id:"choose-the-docker-image"},"choose the docker image"),(0,r.kt)("p",null,"There are two options to configure the docker image to deploy. "),(0,r.kt)("h3",{id:"attaching-a-monitor-build"},"attaching a monitor build"),(0,r.kt)("p",null,"If the software you want to deploy is built by monitor, you can attach the build directly to the deployment."),(0,r.kt)("p",null,"By default, monitor will deploy the latest available version of the build, or you can specify a specific version using the version dropdown."),(0,r.kt)("p",null,"Also by default, monitor will use the same docker account that is attached to the build in order to pull the image on the periphery server. If that account is not available on the server, you can specify another available account to use instead, this account just needs to have read access to the docker repository."),(0,r.kt)("h3",{id:"using-a-custom-image"},"using a custom image"),(0,r.kt)("p",null,"You can also manually specify an image name, like ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"mbecker2020/random_image:0.1.1"),"."),(0,r.kt)("p",null,"If the image repository is private, you can select an available docker account to use to pull the image."),(0,r.kt)("h2",{id:"configuring-the-network"},"configuring the network"),(0,r.kt)("p",null,"One feature of docker is that it allows for the creation of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/"},"virtual networks between containers"),". Monitor allows you to specify a docker virtual network to connect the container to, or to use the host system networking to bypass the docker virtual network."),(0,r.kt)("p",null,"The default selection is ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),", which bypasses the docker virtual network layer."),(0,r.kt)("p",null,"If you do select select a network other than host, you can specify port bindings with the GUI. For example, if you are running mongo (which defaults to port 27017), you could use the mapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"27018 : 27017\n")),(0,r.kt)("p",null,"In this case, you would access mongo from outside of the container on port ",(0,r.kt)("inlineCode",{parentName:"p"},"27018"),"."),(0,r.kt)("p",null,"Note that this is not the only affect of using a network other than ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),". For example, containers running on different networks can not communicate, and ones on the same network can not reach other containers on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," even when they are running on the same system. This behavior can be a bit confusing if you are not familiar with it, and it can be bypassed entirely by just using ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," network."),(0,r.kt)("h2",{id:"configuring-restart-behavior"},"configuring restart behavior"),(0,r.kt)("p",null,"Docker, like systemd, has a couple options for handling when a container exits. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/start-containers-automatically/"},"docker restart policies"),". Monitor allows you to select the appropriate restart behavior from these options."),(0,r.kt)("h2",{id:"configuring-environment-variables"},"configuring environment variables"),(0,r.kt)("p",null,"Monitor enables you to easily manage environment variables passed to the container. In the GUI, click the 'edit' button on the 'environment' card, this will bring up the environment menu."),(0,r.kt)("p",null,"You pass environment variables just as you would with a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ENV_VAR_1=some_value\nENV_VAR_2=some_other_value\n")),(0,r.kt)("h2",{id:"configuring-volumes"},"configuring volumes"),(0,r.kt)("p",null,"A docker container's filesystem is segregated from that of the host. However, it is still possible for a container to access system files and directories, this is accomplished by using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/bind-mounts/"},"bind mounts"),"."),(0,r.kt)("p",null,"Say your container needs to read a config file located on the system at ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/ubuntu/config.toml"),". You can specify the bind mount to be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/ubuntu/config.toml : /config/config.toml\n")),(0,r.kt)("p",null,"The first path is the one on the system, the second is the path in the container. Your application would then read the file at ",(0,r.kt)("inlineCode",{parentName:"p"},"/config/config.toml")," in order to load its contents."),(0,r.kt)("p",null,"These can be configured easily with the GUI in the 'volumes' card. You can configure as many bind mounts as you need."),(0,r.kt)("h2",{id:"extra-args"},"extra args"),(0,r.kt)("p",null,"Not all features of docker are mapped directly by monitor, only the most common. You can still specify any custom flags for monitor to include in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command by utilizing 'extra args'. For example, you can enable log rotation using these two extra args:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--log-opt max-size=10M\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--log-opt max-file=3\n")),(0,r.kt)("h2",{id:"post-image"},"post image"),(0,r.kt)("p",null,"Sometimes you need to specify some flags to be passed directly to the application. What is put here is inserted into the docker run command after the image. For example, to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--quiet")," flag to MongoDB, the docker run command would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d --name mongo-db mongo:6.0.3 --quiet\n")),(0,r.kt)("p",null,"In order to achieve this with monitor, just pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--quiet")," to 'post image'."))}m.isMDXComponent=!0}}]);