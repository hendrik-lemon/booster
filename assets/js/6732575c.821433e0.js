"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={},i="Extending Booster with Rockets!",s={unversionedId:"going-deep/rockets",id:"going-deep/rockets",title:"Extending Booster with Rockets!",description:"You can extend Booster by creating rockets. A rocket is just a node package that implements the public Booster rocket interfaces. You can use them for many things:",source:"@site/docs/10_going-deep/rockets.mdx",sourceDirName:"10_going-deep",slug:"/going-deep/rockets",permalink:"/going-deep/rockets",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deep/rockets.mdx",tags:[],version:"current",lastUpdatedBy:"Juan Sagasti",lastUpdatedAt:1677850956,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{}},l={},c=[{value:"Create your own Rocket",id:"create-your-own-rocket",level:3},{value:"Naming recommendations",id:"naming-recommendations",level:3},{value:"How to publish a Rocket",id:"how-to-publish-a-rocket",level:3},{value:"Booster Rockets list",id:"booster-rockets-list",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extending-booster-with-rockets"},"Extending Booster with Rockets!"),(0,o.kt)("p",null,"You can extend Booster by creating rockets. A rocket is just a node package that implements the public Booster rocket interfaces. You can use them for many things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extend your infrastructure (Currently supported in AWS, and under experimental support in Azure and Local): You can write a rocket that adds provider resources to your application stack."),(0,o.kt)("li",{parentName:"ol"},"Runtime extensions (Not yet implemented): Add new annotations and interfaces, which combined with infrastructure extensions, could implement new abstractions on top of highly requested use cases."),(0,o.kt)("li",{parentName:"ol"},"Deploy and init hooks (Not yet implemented): Run custom scripts before or after deployment, or before a Booster application is loaded.")),(0,o.kt)("p",null,"This extension mechanism is very new, but we're planning to port most of the functionality as rockets. This has two benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Composability: You can use the default rockets or configure your application to suit your needs without adding anything extra."),(0,o.kt)("li",{parentName:"ul"},"Easier to manage feature sets in different providers: It would be really hard for the core team and contributors to implement and test every new feature in every supported provider, so by providing functionality like rockets, you'll have access to the most advanced features for your provider faster, and the rockets library can be built on-demand for each provider.")),(0,o.kt)("h3",{id:"create-your-own-rocket"},"Create your own Rocket"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently Rockets work in AWS.\nIn Azure and Local, Rockets are under experimental support. We are working on porting them to other providers.")),(0,o.kt)("p",null,"A rocket is nothing more than an npm package that extends your current Booster architecture. The structure is simple, and it mainly has 2 methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"mountStack")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"unmountStack"),". We'll explain what they are shortly."),(0,o.kt)("p",null,"Rockets are usually composed of many packages, so we recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org"},"Lerna")," for development and publishing."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Infrastructure Rocket")," interfaces are provider-dependant, so ",(0,o.kt)("em",{parentName:"p"},"Infrastructure Rockets")," must import the corresponding booster infrastructure package for their chosen provider. For AWS, that's ",(0,o.kt)("inlineCode",{parentName:"p"},"@boostercloud/framework-provider-aws-infrastructure"),". Notice that, as the only thing we use of that package is the ",(0,o.kt)("inlineCode",{parentName:"p"},"InfrastructureRocket")," interface, you can import it as a dev dependency to avoid including that big package in your deployed lambdas."),(0,o.kt)("p",null,"So let's start by creating a new package and adding this dependency:`"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir rocket-your-rocket-name-aws-infrastructure\ncd rocket-your-rocket-name-aws-infrastructure\nnpm init\n...\nnpm install --save @boostercloud/framework-provider-aws-infrastructure\n")),(0,o.kt)("p",null,"The basic structure of an ",(0,o.kt)("em",{parentName:"p"},"Infrastructure Rocket")," project is quite simple as you can see here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"rocket-your-rocket-name-aws-infrastructure\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 your-main-class.ts\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<your-main-class>.ts"),"  can be named as you want and this is where we define the mountStack and unmount methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class YourMainClass {\n  public static mountStack(params: YourRocketParams, stack: Stack, config: BoosterConfig): void {\n    /* CDK code to expand your Booster infrastructure */\n  }\n  public static unmountStack?(params: YourRocketParams, utils: RocketUtils): void {\n    /* Optional code that runs before removing the stack */\n  }\n}\n")),(0,o.kt)("p",null,"Let's look in more detail these two special functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"mountStack"),": Whenever we are deploying our Booster application (",(0,o.kt)("inlineCode",{parentName:"p"},"boost deploy"),") this method will also be run.  It receives three params:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": The parameters required by your ",(0,o.kt)("em",{parentName:"li"},"Infrastructure Rocket")," initializator, you will receive them from your Booster app's ",(0,o.kt)("inlineCode",{parentName:"li"},"config.ts")," file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stack"),": An initialized AWS CDK stack that you can use to add new resources. Check out ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/latest/guide/stacks.html#stack_api"},"the Stack API in the official CDK documentation"),". This is the same stack instance that Booster uses to deploy its resources, so your resources will automatically be deployed along with the Booster's ones on the same stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config"),": It includes properties of the Booster project (e.g. project name) that come in handy for your rocket."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"unmountStack"),": It will run when you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"boost nuke")," command. When you nuke your Booster application, all the resources added by your rocket are automatically destroyed along with the application stack, but there are some situations where you might or need to specify any additional step in the deletion process. The ",(0,o.kt)("inlineCode",{parentName:"p"},"unmountStack")," function will run the code you intend for this purpose. For instance, in AWS, before destroying your stack (where you have some S3 buckets) you need to first empty them in order to delete them. You can accomplish this action in the ",(0,o.kt)("inlineCode",{parentName:"p"},"unmountStack")," method."))),(0,o.kt)("p",null,"We also have an index.ts file to export these two functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface InfrastructureRocket {\n  mountStack: (stack: Stack, config: BoosterConfig) => void\n  unmountStack?: (utils: RocketUtils) => void\n}\n")),(0,o.kt)("p",null,"You'll have to implement a default exported function that accepts a parameters object and returns an initialized ",(0,o.kt)("inlineCode",{parentName:"p"},"InfrastructureRocket")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const YourRocketInitializator = (params: YourRocketParams): InfrastructureRocket => ({\n  mountStack: SomePrivateObject.mountStack.bind(null, params),\n  unmountStack: SomePrivateObject.unmountStack.bind(null, params),\n})\n\nexport default YourRocketInitializator\n")),(0,o.kt)("p",null,"Notice that ",(0,o.kt)("em",{parentName:"p"},"Infrastructure Rockets")," should not be included in the Booster application code to avoid including the CDK and other unused dependencies in the lambdas, as there are some strict restrictions on code size on most platforms. That's why ",(0,o.kt)("em",{parentName:"p"},"Infrastructure Rockets")," are dynamically loaded by Booster passing the package names as strings in the application config file:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"src/config/production.ts:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Booster.configure('development', (config: BoosterConfig): void => {\n  config.appName = 'my-store'\n  config.providerPackage = '@boostercloud/framework-provider-aws'\n  config.rockets = [\n    {\n      packageName: 'rocket-your-rocket-name-aws-infrastructure', // The name of your infrastructure rocket package\n      parameters: {\n        // An arbitrary object with the parameters required by your infrastructure rocket initializator\n        hello: 'world',\n      },\n    },\n  ]\n})\n")),(0,o.kt)("h3",{id:"naming-recommendations"},"Naming recommendations"),(0,o.kt)("p",null,"There are no restrictions on how you name your rocket packages, but we propose the following naming convention to make it easier to find your extensions in the vast npm library and find related packages (code and infrastructure extensions cannot be distributed in the same package)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rocket-{rocket-name}-{provider}"),": A rocket that adds runtime functionality or init scripts. This code will be deployed along with your application code to the lambdas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rocket-{rocket-name}-{provider}-infrastructure"),": A rocket that provides infrastructure extensions or implements deploy hooks. This code will only be used on developer's or CI/CD systems machines and won't be deployed to lambda with the rest of the application code.")),(0,o.kt)("p",null,"Notice that some functionalities, for instance an S3 uploader, might require both runtime and infrastructure extensions. In these cases, the convention is to use the same name ",(0,o.kt)("inlineCode",{parentName:"p"},"rocket-name")," and add the suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"-infrastructure")," to the infrastructure rocket. It's recommended, but not required, to manage these dependent packages in a monorepo and ensure that the versions match on each release."),(0,o.kt)("p",null,"If you want to support the same functionality in several providers, it could be handy to also have a package named ",(0,o.kt)("inlineCode",{parentName:"p"},"rocket-{rocket-name}-{provider}-core")," where you can have cross-provider code that you can use from all the provider-specific implementations. For instance, a file uploader rocket that supports both AWS and Azure could have an structure like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-core"),": Defines abstract decorators and interfaces to handle uploaded files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-aws"),": Implements the API calls to S3 to get the uploaded files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-aws-infrastructure"),": Adds a dedicated S3 bucket."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-azure"),": Implements the API calls to Azure Storage to get the uploaded files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-azure-infrastructure"),": Configures file storage.")),(0,o.kt)("h3",{id:"how-to-publish-a-rocket"},"How to publish a Rocket"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upload your rocket to a git repository."),(0,o.kt)("li",{parentName:"ol"},"Run :",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"    > lerna bootstrap\n")),"This will bootstrap the packages, install all their dependencies and link any cross-dependencies."),(0,o.kt)("li",{parentName:"ol"},"Ensure you have the option ",(0,o.kt)("inlineCode",{parentName:"li"},"publishConfig.access")," set to ",(0,o.kt)("inlineCode",{parentName:"li"},"public")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file of every package."),(0,o.kt)("li",{parentName:"ol"},"Make sure you are logged into NPM by running:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"     > npm login\n"))),(0,o.kt)("li",{parentName:"ol"},"Run :",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"    > lerna publish\n")),"Creates a new release of the packages that have been updated. It will update all the packages in git and npm, and it will prompt for a new version of the rocket package."),(0,o.kt)("li",{parentName:"ol"},"If the previous step finished successfully, the package will be available in NPM.")),(0,o.kt)("h3",{id:"booster-rockets-list"},"Booster Rockets list"),(0,o.kt)("p",null,"Here you can check out the official Booster Rockets developed at this time:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/boostercloud/rocket-auth-aws-infrastructure"},"Authentication Booster Rocket for AWS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/boostercloud/rocket-backup-aws-infrastructure"},"Backup Booster Rocket for AWS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/boostercloud/rocket-static-sites-aws-infrastructure"},"Static Sites Booster Rocket for AWS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/boostercloud/rocket-webhook"},"Webhook Booster Rocket for Azure and Local"))))}p.isMDXComponent=!0}}]);