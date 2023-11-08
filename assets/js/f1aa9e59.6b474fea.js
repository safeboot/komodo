"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[477],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return r?t.createElement(g,a(a({ref:n},u),{},{components:r})):t.createElement(g,a({ref:n},u))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4032:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(7294);function i(){return t.createElement("div",{style:{opacity:.7,backgroundColor:"rgb(175, 175, 175)",height:"3px",width:"100%",margin:"75px 0px"}})}},7441:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var t=r(7462),i=(r(7294),r(3905)),s=r(4032);const a={},o="types",p={unversionedId:"api/types",id:"api/types",title:"types",description:"these types are used across the monitor api, defined using typescript. they are referenced throughout the api docs.",source:"@site/docs/api/types.mdx",sourceDirName:"api",slug:"/api/types",permalink:"/monitor/api/types",draft:!1,editUrl:"https://github.com/mbecker20/monitor/tree/main/docsite/docs/api/types.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"index",permalink:"/monitor/api"},next:{title:"authenticating requests",permalink:"/monitor/api/authenticating-requests"}},l={},u=[{value:"build",id:"build",level:2},{value:"deployment",id:"deployment",level:2},{value:"server",id:"server",level:2},{value:"update",id:"update",level:2},{value:"operation",id:"operation",level:2},{value:"permission level",id:"permission-level",level:2},{value:"timelength",id:"timelength",level:2}],d={toc:u},c="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"types"},"types"),(0,i.kt)("p",null,"these types are used across the monitor api, defined using ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript"),". they are referenced throughout the api docs."),(0,i.kt)(s.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"build"},"build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Build {\n  _id?: {\n    $oid: string;\n  };\n  name: string;\n  description?: string;\n  permissions?: {\n    [user_id: string]: PermissionLevel;\n  };\n  skip_secret_interp?: boolean;\n  server_id?: string;\n  aws_config?: {\n    region?: string;\n    instance_type?: string;\n    ami_name?: string;\n    volume_gb?: number;\n    subnet_id?: string;\n    security_group_ids?: string[];\n    key_pair_name?: string;\n    assign_public_ip?: boolean;\n  };\n  version: {\n    major: number;\n    minor: number;\n    patch: number;\n  };\n  repo?: string;\n  branch?: string;\n  github_account?: string;\n  pre_build?: {\n    path?: string;\n    command?: string;\n  };\n  docker_build_args?: {\n    build_path: string;\n    dockerfile_path?: string;\n    build_args?: Array<{\n      variable: string;\n      value: string;\n    }>;\n    extra_args?: string[];\n    use_buildx?: boolean;\n  };\n  docker_account?: string;\n  docker_organization?: string;\n  last_built_at?: string;\n  created_at?: string;\n  updated_at?: string;\n}\n")),(0,i.kt)(s.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"deployment"},"deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Deployment {\n  _id?: {\n    $oid: string;\n  };\n  name: string;\n  description?: string;\n  server_id: string;\n  permissions?: PermissionLevel;\n  skip_secret_interp?: boolean;\n  docker_run_args: {\n    image: string;\n    ports?: Array<{\n      local: string;\n      container: string;\n    }>;\n    volumes?: Array<{\n      local: string;\n      container: string;\n    }>;\n    environment?: Array<{\n      variable: string;\n      value: string;\n    }>;\n    network?: string;\n    restart?: "no" | "on-failure" | "always" | "unless-stopped";\n    post_image?: string;\n    container_user?: string;\n    extra_args?: string[];\n    docker_account?: string;\n  };\n  build_id?: string;\n  build_version?: {\n    major: number;\n    minor: number;\n    patch: number;\n  };\n  repo?: string;\n  branch?: string;\n  github_account?: string;\n  on_clone?: {\n    path?: string;\n    command?: string;\n  };\n  on_pull?: {\n    path?: string;\n    command?: string;\n  };\n  repo_mount?: {\n    local: string;\n    container: string;\n  };\n  created_at?: string;\n  updated_at?: string;\n}\n')),(0,i.kt)(s.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"server"},"server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Server {\n  _id?: string;\n  name: string;\n  description?: string;\n  address: string;\n  permissions?: {\n    [user_id: string]: PermissionLevel;\n  };\n  enabled: boolean;\n  to_notify?: string[];\n  auto_prune?: boolean;\n  cpu_alert?: number;\n  mem_alert?: number;\n  disk_alert?: number;\n  stats_interval?: Timelength;\n  region?: string;\n  instance_id?: string;\n  created_at?: string;\n  updated_at?: string;\n}\n")),(0,i.kt)(s.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"update"},"update"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Update {\n  _id?: string;\n  target: {\n    type: "System" | "Build" | "Deployment" | "Server" | "Procedure" | "Group";\n    id?: string;\n  };\n  operation: Operation;\n  logs: Array<{\n    stage: string;\n    command: string;\n    stdout: string;\n    stderr: string;\n    success: boolean;\n    start_ts: string;\n    end_ts: string;\n  }>;\n  start_ts: string;\n  end_ts?: string;\n  status: "queued" | "in_progress" | "complete";\n  success: boolean;\n  operator: string;\n  version?: {\n    major: number;\n    minor: number;\n    patch: number;\n  };\n}\n')),(0,i.kt)(s.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"operation"},"operation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'enum Operation {\n  None = "none",\n  CreateServer = "create_server",\n  UpdateServer = "update_server",\n  DeleteServer = "delete_server",\n  PruneImagesServer = "prune_images_server",\n  PruneContainersServer = "prune_containers_server",\n  PruneNetworksServer = "prune_networks_server",\n  RenameServer = "rename_server",\n  CreateBuild = "create_build",\n  UpdateBuild = "update_build",\n  DeleteBuild = "delete_build",\n  BuildBuild = "build_build",\n  CreateDeployment = "create_deployment",\n  UpdateDeployment = "update_deployment",\n  DeleteDeployment = "delete_deployment",\n  DeployContainer = "deploy_container",\n  StopContainer = "stop_container",\n  StartContainer = "start_container",\n  RemoveContainer = "remove_container",\n  PullDeployment = "pull_deployment",\n  RecloneDeployment = "reclone_deployment",\n  RenameDeployment = "rename_deployment",\n  CreateProcedure = "create_procedure",\n  UpdateProcedure = "update_procedure",\n  DeleteProcedure = "delete_procedure",\n  CreateGroup = "create_group",\n  UpdateGroup = "update_group",\n  DeleteGroup = "delete_group",\n  ModifyUserEnabled = "modify_user_enabled",\n  ModifyUserCreateServerPermissions = "modify_user_create_server_permissions",\n  ModifyUserCreateBuildPermissions = "modify_user_create_build_permissions",\n  ModifyUserPermissions = "modify_user_permissions",\n  AutoBuild = "auto_build",\n  AutoPull = "auto_pull",\n}\n')),(0,i.kt)(s.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"permission-level"},"permission level"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'enum PermissionLevel {\n  None = "none",\n  Read = "read",\n  Execute = "execute",\n  Update = "update",\n}\n')),(0,i.kt)(s.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"timelength"},"timelength"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'enum Timelength {\n  OneSecond = "1-sec",\n  FiveSeconds = "5-sec",\n  TenSeconds = "10-sec",\n  FifteenSeconds = "15-sec",\n  ThirtySeconds = "30-sec",\n  OneMinute = "1-min",\n  TwoMinutes = "2-min",\n  FiveMinutes = "5-min",\n  TenMinutes = "10-min",\n  FifteenMinutes = "15-min",\n  ThirtyMinutes = "30-min",\n  OneHour = "1-hr",\n  TwoHours = "2-hr",\n  SixHours = "6-hr",\n  EightHours = "8-hr",\n  TwelveHours = "12-hr",\n  OneDay = "1-day",\n  ThreeDay = "3-day",\n  OneWeek = "1-wk",\n  TwoWeeks = "2-wk",\n  ThirtyDays = "30-day",\n}\n')))}m.isMDXComponent=!0}}]);