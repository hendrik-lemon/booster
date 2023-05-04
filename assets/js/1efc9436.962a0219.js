"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5163:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294);const r="terminalWindow_wGrl",i="terminalWindowHeader_o9Cs",o="buttons_IGLB",l="dot_fGZE",s="terminalWindowBody_tzdS";function c(e){let{children:t}=e;return a.createElement("div",{className:r},a.createElement("div",{className:i},a.createElement("div",{className:o},a.createElement("span",{className:l,style:{background:"#f25f58"}}),a.createElement("span",{className:l,style:{background:"#fbbe3c"}}),a.createElement("span",{className:l,style:{background:"#58cb42"}}))),a.createElement("div",{className:s},t))}},9139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(5163);const o={},l="Entity",s={unversionedId:"architecture/entity",id:"architecture/entity",title:"Entity",description:"If events are the source of truth of your application, entities are the current state of your application. For example, if you have an application that allows users to create bank accounts, the events would be something like AccountCreated, MoneyDeposited, MoneyWithdrawn, etc. But the entities would be the BankAccount themselves, with the current balance, owner, etc.",source:"@site/docs/03_architecture/05_entity.mdx",sourceDirName:"03_architecture",slug:"/architecture/entity",permalink:"/architecture/entity",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/03_architecture/05_entity.mdx",tags:[],version:"current",lastUpdatedBy:"Yeray Cabello",lastUpdatedAt:1683207581,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"Event handler",permalink:"/architecture/event-handler"},next:{title:"Read model",permalink:"/architecture/read-model"}},c={},d=[{value:"Creating entities",id:"creating-entities",level:2},{value:"Declaring an entity",id:"declaring-an-entity",level:2},{value:"The reduce function",id:"the-reduce-function",level:2},{value:"Reducing multiple events",id:"reducing-multiple-events",level:3},{value:"Eventual Consistency",id:"eventual-consistency",level:3},{value:"Entity ID",id:"entity-id",level:2},{value:"Entities naming convention",id:"entities-naming-convention",level:2}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entity"},"Entity"),(0,r.kt)("p",null,"If events are the ",(0,r.kt)("em",{parentName:"p"},"source of truth")," of your application, entities are the ",(0,r.kt)("em",{parentName:"p"},"current state")," of your application. For example, if you have an application that allows users to create bank accounts, the events would be something like ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountCreated"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MoneyDeposited"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MoneyWithdrawn"),", etc. But the entities would be the ",(0,r.kt)("inlineCode",{parentName:"p"},"BankAccount")," themselves, with the current balance, owner, etc."),(0,r.kt)("p",null,"Entities are created by ",(0,r.kt)("em",{parentName:"p"},"reducing")," the whole event stream. Booster generates entities on the fly, so you don't have to worry about their creation. However, you must define them in order to instruct Booster how to generate them."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Under the hood, Booster stores snapshots of the entities in order to reduce the load on the event store. That way, Booster doesn't have to reduce the whole event stream whenever the current state of an entity is needed.")),(0,r.kt)("h2",{id:"creating-entities"},"Creating entities"),(0,r.kt)("p",null,"The Booster CLI will help you to create new entities. You just need to run the following command and the CLI will generate all the boilerplate for you:"),(0,r.kt)(i.Z,{mdxType:"TerminalWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"boost new:entity Product --fields displayName:string description:string price:Money\n"))),(0,r.kt)("p",null,"This will generate a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"product.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/entities")," directory. You can also create the file manually, but you will need to create the class and decorate it, so we recommend using the CLI."),(0,r.kt)("h2",{id:"declaring-an-entity"},"Declaring an entity"),(0,r.kt)("p",null,"To declare an entity in Booster, you must define a class decorated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Entity")," decorator. Inside of the class, you must define a constructor with all the fields you want to have in your entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/entities/entity-name.ts"',title:'"src/entities/entity-name.ts"'},"@Entity\nexport class EntityName {\n  public constructor(readonly fieldA: SomeType, readonly fieldB: SomeOtherType /* as many fields as needed */) {}\n}\n")),(0,r.kt)("h2",{id:"the-reduce-function"},"The reduce function"),(0,r.kt)("p",null,"In order to tell Booster how to reduce the events, you must define a static method decorated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Reduces")," decorator. This method will be called by the framework every time an event of the specified type is emitted. The reducer method must return a new entity instance with the current state of the entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/entities/entity-name.ts"',title:'"src/entities/entity-name.ts"'},"@Entity\nexport class EntityName {\n  public constructor(readonly fieldA: SomeType, readonly fieldB: SomeOtherType /* as many fields as needed */) {}\n\n  // highlight-start\n  @Reduces(SomeEvent)\n  public static reduceSomeEvent(event: SomeEvent, currentEntityState?: EntityName): EntityName {\n    /* Return a new entity based on the current one */\n  }\n  // highlight-end\n}\n")),(0,r.kt)("p",null,"The reducer method receives two parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event")," - The event object that triggered the reducer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"currentEntity?")," - The current state of the entity instance that the event belongs to if it exists. ",(0,r.kt)("strong",{parentName:"li"},"This parameter is optional")," and will be ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," if the entity doesn't exist yet (For example, when you process a ",(0,r.kt)("inlineCode",{parentName:"li"},"ProductCreated")," event that will generate the first version of a ",(0,r.kt)("inlineCode",{parentName:"li"},"Product")," entity).")),(0,r.kt)("h3",{id:"reducing-multiple-events"},"Reducing multiple events"),(0,r.kt)("p",null,"You can define as many reducer methods as you want, each one for a different event type. For example, if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cart")," entity, you could define a reducer for ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductAdded")," events and another one for ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductRemoved")," events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/entities/cart.ts"',title:'"src/entities/cart.ts"'},"@Entity\nexport class Cart {\n  public constructor(readonly items: Array<CartItem>) {}\n\n  @Reduces(ProductAdded)\n  public static reduceProductAdded(event: ProductAdded, currentCart?: Cart): Cart {\n    const newItems = addToCart(event.item, currentCart)\n    return new Cart(newItems)\n  }\n\n  @Reduces(ProductRemoved)\n  public static reduceProductRemoved(event: ProductRemoved, currentCart?: Cart): Cart {\n    const newItems = removeFromCart(event.item, currentCart)\n    return new Cart(newItems)\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's highly recommended to ",(0,r.kt)("strong",{parentName:"p"},"keep your reducer functions pure"),", which means that you should be able to produce the new entity version by just looking at the event and the current entity state. You should avoid calling third party services, reading or writing to a database, or changing any external state.")),(0,r.kt)("p",null,"There could be a lot of events being reduced concurrently among many entities, but, ",(0,r.kt)("strong",{parentName:"p"},"for a specific entity instance, the events order is preserved"),". This means that while one event is being reduced, all other events of any kind ",(0,r.kt)("em",{parentName:"p"},"that belong to the same entity instance")," will be waiting in a queue until the previous reducer has finished. This is how Booster guarantees that the entity state is consistent."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reducer process gif",src:n(5876).Z,width:"1208",height:"638"})),(0,r.kt)("h3",{id:"eventual-consistency"},"Eventual Consistency"),(0,r.kt)("p",null,"Additionally, due to the event driven and async nature of Booster, your data might not be instantly updated. Booster will consume the commands, generate events, and ",(0,r.kt)("em",{parentName:"p"},"eventually")," generate the entities. Most of the time this is not perceivable, but under huge loads, it could be noticed."),(0,r.kt)("p",null,"This property is called ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Eventual_consistency"},"Eventual Consistency"),", and it is a trade-off to have high availability for extreme situations, where other systems might simply fail."),(0,r.kt)("h2",{id:"entity-id"},"Entity ID"),(0,r.kt)("p",null,"In order to identify each entity instance, you must define an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field on each entity. This field will be used by the framework to identify the entity instance. If the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field matches the value returned by the ",(0,r.kt)("a",{parentName:"p",href:"event#events-and-entities"},(0,r.kt)("inlineCode",{parentName:"a"},"entityID()")," method")," of an Event, the framework will consider that the event belongs to that entity instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/entities/entity-name.ts"',title:'"src/entities/entity-name.ts"'},"@Entity\nexport class EntityName {\n  public constructor(\n    // highlight-next-line\n    readonly id: UUID,\n    readonly fieldA: SomeType,\n    readonly fieldB: SomeOtherType /* as many fields as needed */\n  ) {}\n\n  @Reduces(SomeEvent)\n  public static reduceSomeEvent(event: SomeEvent, currentEntityState?: EntityName): EntityName {\n    /* Return a new entity based on the current one */\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend you to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID")," type for the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field. You can generate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID")," value by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID.generate()")," method already provided by the framework.")),(0,r.kt)("h2",{id:"entities-naming-convention"},"Entities naming convention"),(0,r.kt)("p",null,"Entities are a representation of your application state in a specific moment, so name them as closely to your domain objects as possible. Typical entity names are nouns that might appear when you think about your app. In an e-commerce application, some entities would be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cart"),(0,r.kt)("li",{parentName:"ul"},"Product"),(0,r.kt)("li",{parentName:"ul"},"UserProfile"),(0,r.kt)("li",{parentName:"ul"},"Order"),(0,r.kt)("li",{parentName:"ul"},"Address"),(0,r.kt)("li",{parentName:"ul"},"PaymentMethod"),(0,r.kt)("li",{parentName:"ul"},"Stock")),(0,r.kt)("p",null,"Entities live within the entities directory of the project source: ",(0,r.kt)("inlineCode",{parentName:"p"},"<project-root>/src/entities"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<project-root>\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 commands\n\u2502   \u251c\u2500\u2500 common\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u251c\u2500\u2500 entities <------ put them here\n\u2502   \u251c\u2500\u2500 events\n\u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2514\u2500\u2500 read-models\n")))}p.isMDXComponent=!0},5876:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reducer-faf967cd976ea38d84e14551aa3af383.gif"}}]);