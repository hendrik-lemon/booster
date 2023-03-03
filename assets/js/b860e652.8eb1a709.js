"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7294),r=n(6010),o=n(3438),i=n(9960),s=n(3919),l=n(5999);const c="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},n)}function m(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",p),title:i},i))}function k(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:n,title:t.label,description:null==r?void 0:r.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return a.createElement(g,e);const i=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},1398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(2991);const i={},s="Extending Booster with Rockets!",l={unversionedId:"going-deeper/rockets",id:"going-deeper/rockets",title:"Extending Booster with Rockets!",description:"You can extend Booster by creating rockets. A rocket is just a node package that implements the public Booster rocket interfaces. You can use them for many things:",source:"@site/docs/10_going-deeper/rockets.mdx",sourceDirName:"10_going-deeper",slug:"/going-deeper/rockets",permalink:"/going-deeper/rockets",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/rockets.mdx",tags:[],version:"current",lastUpdatedBy:"Juan Sagasti",lastUpdatedAt:1677850956,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Create custom providers",permalink:"/going-deeper/custom-providers"},next:{title:"File Uploads Rocket",permalink:"/going-deeper/rockets/rocket-file-uploads"}},c={},u=[{value:"Create your own Rocket",id:"create-your-own-rocket",level:3},{value:"Naming recommendations",id:"naming-recommendations",level:3},{value:"How to publish a Rocket",id:"how-to-publish-a-rocket",level:3},{value:"Booster Rockets list",id:"booster-rockets-list",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extending-booster-with-rockets"},"Extending Booster with Rockets!"),(0,r.kt)("p",null,"You can extend Booster by creating rockets. A rocket is just a node package that implements the public Booster rocket interfaces. You can use them for many things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extend your infrastructure: You can write a rocket that adds provider resources to your application stack."),(0,r.kt)("li",{parentName:"ol"},"Runtime extensions (Not yet implemented): Add new annotations and interfaces, which combined with infrastructure extensions, could implement new abstractions on top of highly requested use cases."),(0,r.kt)("li",{parentName:"ol"},"Deploy and init hooks (Not yet implemented): Run custom scripts before or after deployment, or before a Booster application is loaded.")),(0,r.kt)("p",null,"This extension mechanism is very new, but we're planning to port most of the functionality as rockets. This has two benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Composability: You can use the default rockets or configure your application to suit your needs without adding anything extra."),(0,r.kt)("li",{parentName:"ul"},"Easier to manage feature sets in different providers: It would be really hard for the core team and contributors to implement and test every new feature in every supported provider, so by providing functionality like rockets, you'll have access to the most advanced features for your provider faster, and the rockets library can be built on-demand for each provider.")),(0,r.kt)("h3",{id:"create-your-own-rocket"},"Create your own Rocket"),(0,r.kt)("p",null,"A rocket is nothing more than an npm package that extends your current Booster architecture. The structure is simple, and it mainly has 2 methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"mountStack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unmountStack"),". We'll explain what they are shortly."),(0,r.kt)("p",null,"Rockets are usually composed of many packages, so we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://lerna.js.org"},"Lerna")," for development and publishing."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Infrastructure Rocket")," interfaces are provider-dependant, so ",(0,r.kt)("em",{parentName:"p"},"Infrastructure Rockets")," must import the corresponding booster infrastructure package for their chosen provider. For AWS, that's ",(0,r.kt)("inlineCode",{parentName:"p"},"@boostercloud/framework-provider-aws-infrastructure"),". Notice that, as the only thing we use of that package is the ",(0,r.kt)("inlineCode",{parentName:"p"},"InfrastructureRocket")," interface, you can import it as a dev dependency to avoid including that big package in your deployed lambdas."),(0,r.kt)("p",null,"So let's start by creating a new package and adding this dependency:`"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir rocket-your-rocket-name-aws-infrastructure\ncd rocket-your-rocket-name-aws-infrastructure\nnpm init\n...\nnpm install --save @boostercloud/framework-provider-aws-infrastructure\n")),(0,r.kt)("p",null,"The basic structure of an ",(0,r.kt)("em",{parentName:"p"},"Infrastructure Rocket")," project is quite simple as you can see here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"rocket-your-rocket-name-aws-infrastructure\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 your-main-class.ts\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<your-main-class>.ts"),"  can be named as you want and this is where we define the mountStack and unmount methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class YourMainClass {\n  public static mountStack(params: YourRocketParams, stack: Stack, config: BoosterConfig): void {\n    /* CDK code to expand your Booster infrastructure */\n  }\n  public static unmountStack?(params: YourRocketParams, utils: RocketUtils): void {\n    /* Optional code that runs before removing the stack */\n  }\n}\n")),(0,r.kt)("p",null,"Let's look in more detail these two special functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"mountStack"),": Whenever we are deploying our Booster application (",(0,r.kt)("inlineCode",{parentName:"p"},"boost deploy"),") this method will also be run.  It receives three params:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params"),": The parameters required by your ",(0,r.kt)("em",{parentName:"li"},"Infrastructure Rocket")," initializator, you will receive them from your Booster app's ",(0,r.kt)("inlineCode",{parentName:"li"},"config.ts")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stack"),": An initialized AWS CDK stack that you can use to add new resources. Check out ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/latest/guide/stacks.html#stack_api"},"the Stack API in the official CDK documentation"),". This is the same stack instance that Booster uses to deploy its resources, so your resources will automatically be deployed along with the Booster's ones on the same stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),": It includes properties of the Booster project (e.g. project name) that come in handy for your rocket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"unmountStack"),": It will run when you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"boost nuke")," command. When you nuke your Booster application, all the resources added by your rocket are automatically destroyed along with the application stack, but there are some situations where you might or need to specify any additional step in the deletion process. The ",(0,r.kt)("inlineCode",{parentName:"p"},"unmountStack")," function will run the code you intend for this purpose. For instance, in AWS, before destroying your stack (where you have some S3 buckets) you need to first empty them in order to delete them. You can accomplish this action in the ",(0,r.kt)("inlineCode",{parentName:"p"},"unmountStack")," method."))),(0,r.kt)("p",null,"We also have an index.ts file to export these two functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface InfrastructureRocket {\n  mountStack: (stack: Stack, config: BoosterConfig) => void\n  unmountStack?: (utils: RocketUtils) => void\n}\n")),(0,r.kt)("p",null,"You'll have to implement a default exported function that accepts a parameters object and returns an initialized ",(0,r.kt)("inlineCode",{parentName:"p"},"InfrastructureRocket")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const YourRocketInitializator = (params: YourRocketParams): InfrastructureRocket => ({\n  mountStack: SomePrivateObject.mountStack.bind(null, params),\n  unmountStack: SomePrivateObject.unmountStack.bind(null, params),\n})\n\nexport default YourRocketInitializator\n")),(0,r.kt)("p",null,"Notice that ",(0,r.kt)("em",{parentName:"p"},"Infrastructure Rockets")," should not be included in the Booster application code to avoid including the CDK and other unused dependencies in the lambdas, as there are some strict restrictions on code size on most platforms. That's why ",(0,r.kt)("em",{parentName:"p"},"Infrastructure Rockets")," are dynamically loaded by Booster passing the package names as strings in the application config file:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/config/production.ts:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Booster.configure('development', (config: BoosterConfig): void => {\n  config.appName = 'my-store'\n  config.providerPackage = '@boostercloud/framework-provider-aws'\n  config.rockets = [\n    {\n      packageName: 'rocket-your-rocket-name-aws-infrastructure', // The name of your infrastructure rocket package\n      parameters: {\n        // An arbitrary object with the parameters required by your infrastructure rocket initializator\n        hello: 'world',\n      },\n    },\n  ]\n})\n")),(0,r.kt)("h3",{id:"naming-recommendations"},"Naming recommendations"),(0,r.kt)("p",null,"There are no restrictions on how you name your rocket packages, but we propose the following naming convention to make it easier to find your extensions in the vast npm library and find related packages (code and infrastructure extensions cannot be distributed in the same package)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocket-{rocket-name}-{provider}"),": A rocket that adds runtime functionality or init scripts. This code will be deployed along with your application code to the lambdas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocket-{rocket-name}-{provider}-infrastructure"),": A rocket that provides infrastructure extensions or implements deploy hooks. This code will only be used on developer's or CI/CD systems machines and won't be deployed to lambda with the rest of the application code.")),(0,r.kt)("p",null,"Notice that some functionalities, for instance an S3 uploader, might require both runtime and infrastructure extensions. In these cases, the convention is to use the same name ",(0,r.kt)("inlineCode",{parentName:"p"},"rocket-name")," and add the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"-infrastructure")," to the infrastructure rocket. It's recommended, but not required, to manage these dependent packages in a monorepo and ensure that the versions match on each release."),(0,r.kt)("p",null,"If you want to support the same functionality in several providers, it could be handy to also have a package named ",(0,r.kt)("inlineCode",{parentName:"p"},"rocket-{rocket-name}-{provider}-core")," where you can have cross-provider code that you can use from all the provider-specific implementations. For instance, a file uploader rocket that supports both AWS and Azure could have an structure like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-core"),": Defines abstract decorators and interfaces to handle uploaded files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-aws"),": Implements the API calls to S3 to get the uploaded files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-aws-infrastructure"),": Adds a dedicated S3 bucket."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-azure"),": Implements the API calls to Azure Storage to get the uploaded files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-azure-infrastructure"),": Configures file storage.")),(0,r.kt)("h3",{id:"how-to-publish-a-rocket"},"How to publish a Rocket"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upload your rocket to a git repository."),(0,r.kt)("li",{parentName:"ol"},"Run :",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    > lerna bootstrap\n")),"This will bootstrap the packages, install all their dependencies and link any cross-dependencies."),(0,r.kt)("li",{parentName:"ol"},"Ensure you have the option ",(0,r.kt)("inlineCode",{parentName:"li"},"publishConfig.access")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file of every package."),(0,r.kt)("li",{parentName:"ol"},"Make sure you are logged into NPM by running:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"     > npm login\n"))),(0,r.kt)("li",{parentName:"ol"},"Run :",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    > lerna publish\n")),"Creates a new release of the packages that have been updated. It will update all the packages in git and npm, and it will prompt for a new version of the rocket package."),(0,r.kt)("li",{parentName:"ol"},"If the previous step finished successfully, the package will be available in NPM.")),(0,r.kt)("h3",{id:"booster-rockets-list"},"Booster Rockets list"),(0,r.kt)("p",null,"Here you can check out the official Booster Rockets developed at this time:"),(0,r.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);