"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5163:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294);const r="terminalWindow_wGrl",o="terminalWindowHeader_o9Cs",i="buttons_IGLB",s="dot_fGZE",l="terminalWindowBody_tzdS";function c(e){let{children:t}=e;return a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement("div",{className:i},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}}))),a.createElement("div",{className:l},t))}},3414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5163);const i={},s="Event",l={unversionedId:"architecture/event",id:"architecture/event",title:"Event",description:"An event is a fact of something that has happened in your application. Every action that takes place on your application should be stored as an event. They are stored in a single collection, forming a set of immutable records of facts that contain the whole story of your application. This collection of events is commonly known as the Event Store.",source:"@site/docs/03_architecture/03_event.mdx",sourceDirName:"03_architecture",slug:"/architecture/event",permalink:"/architecture/event",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/03_architecture/03_event.mdx",tags:[],version:"current",lastUpdatedBy:"Yeray Cabello",lastUpdatedAt:1683207581,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Command",permalink:"/architecture/command"},next:{title:"Event handler",permalink:"/architecture/event-handler"}},c={},d=[{value:"Creating an event",id:"creating-an-event",level:2},{value:"Declaring an event",id:"declaring-an-event",level:2},{value:"Events and entities",id:"events-and-entities",level:2},{value:"Registering events in the event store",id:"registering-events-in-the-event-store",level:2},{value:"Registering events from command handlers",id:"registering-events-from-command-handlers",level:3},{value:"Registering events from event handlers",id:"registering-events-from-event-handlers",level:3},{value:"Events naming convention",id:"events-naming-convention",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"event"},"Event"),(0,r.kt)("p",null,"An event is a fact of something that has happened in your application. Every action that takes place on your application should be stored as an event. They are stored in a single collection, forming a set of ",(0,r.kt)("strong",{parentName:"p"},"immutable records of facts")," that contain the whole story of your application. This collection of events is commonly known as the ",(0,r.kt)("strong",{parentName:"p"},"Event Store"),"."),(0,r.kt)("h2",{id:"creating-an-event"},"Creating an event"),(0,r.kt)("p",null,"The Booster CLI will help you to create new events. You just need to run the following command and the CLI will generate all the boilerplate for you:"),(0,r.kt)(o.Z,{mdxType:"TerminalWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"boost new:event StockMoved --fields productID:string origin:string destination:string quantity:number\n"))),(0,r.kt)("p",null,"This will generate a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"stock-moved.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/events")," directory. You can also create the file manually, but you will need to create the class and decorate it, so we recommend using the CLI."),(0,r.kt)("h2",{id:"declaring-an-event"},"Declaring an event"),(0,r.kt)("p",null,"Events are the cornerstone of Booster because of its event-driven and event-sourced nature. Booster events are TypeScript classes decorated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Event"),". An event class may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/events/event-name.ts"',title:'"src/events/event-name.ts"'},"@Event\nexport class EventName {\n  public constructor(readonly field1: SomeType, readonly field2: SomeOtherType) {}\n}\n")),(0,r.kt)("p",null,"The class name is the name of the event. The event name is used to identify the event in the application. It is also used to generate the GraphQL schema. The class parameter names are the names of the fields of the event and their types are the types of the fields of the event."),(0,r.kt)("h2",{id:"events-and-entities"},"Events and entities"),(0,r.kt)("p",null,"Events and ",(0,r.kt)("a",{parentName:"p",href:"entity"},"Entities")," are closely related. Each event will be aggregated (or ",(0,r.kt)("em",{parentName:"p"},"reduced"),") into an entity. Therefore, Booster needs a way to know which entity is associated with each event. For that reason, it is required to provide an entity ID with each event. You can declare it with a class function named ",(0,r.kt)("inlineCode",{parentName:"p"},"entityID"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/events/cart-paid.ts"',title:'"src/events/cart-paid.ts"'},"@Event\nexport class CartPaid {\n  public constructor(readonly cartID: UUID, readonly paymentID: UUID) {}\n\n  // highlight-start\n  public entityID(): UUID {\n    // returns cartID because we want to associate it with\n    // (and reduce it within) the Cart entity\n    return this.cartID\n  }\n  // highlight-end\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your domain requires a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Singleton"))," entity, where there's only one instance of that entity in your whole application, you can return a constant value.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"entityID")," method always returns the same value for the same event's instance. Otherwise, the result of the entity reduction will be unpredictable.")),(0,r.kt)("h2",{id:"registering-events-in-the-event-store"},"Registering events in the event store"),(0,r.kt)("p",null,"We have shown you how to ",(0,r.kt)("em",{parentName:"p"},"declare")," an event in Booster, but we haven't explained how to store them in the event store. In Booster terminology, creating an instance of an event and storing in the event store is known as ",(0,r.kt)("inlineCode",{parentName:"p"},"registering")," it. You can do that on Booster using the ",(0,r.kt)("inlineCode",{parentName:"p"},"register.events(...)")," function. The ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," object is provided as a parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," method of both ",(0,r.kt)("a",{parentName:"p",href:"command#registering-events"},"commands")," and the ",(0,r.kt)("a",{parentName:"p",href:"event-handler#registering-events"},"event handlers"),". For example:"),(0,r.kt)("h3",{id:"registering-events-from-command-handlers"},"Registering events from command handlers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/move-stock.ts"',title:'"src/commands/move-stock.ts"'},"@Command({\n  authorize: [Admin],\n})\nexport class MoveStock {\n  public constructor(\n    readonly productID: string,\n    readonly origin: string,\n    readonly destination: string,\n    readonly quantity: number\n  ) {}\n\n  public static async handle(command: MoveStock, register: Register): Promise<void> {\n    if (!command.enoughStock(command.origin, command.quantity, command.productID)) {\n      // highlight-next-line\n      register.events(new ErrorEvent(`There is not enough stock for ${command.productID} at ${command.origin}`))\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"registering-events-from-event-handlers"},"Registering events from event handlers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/event-handlers/stock-moved.ts"',title:'"src/event-handlers/stock-moved.ts"'},"@EventHandler(StockMoved)\nexport class HandleAvailability {\n  public static async handle(event: StockMoved, register: Register): Promise<void> {\n      // highlight-next-line\n      register.events(new ProductAvailabilityChanged(event.productID, event.quantity))\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"events-naming-convention"},"Events naming convention"),(0,r.kt)("p",null,"As with commands, you can name events in any way you want, depending on your application's domain. However, we recommend you to choose short sentences written in past tense because events are facts that have happened and can't be changed. Some event names would be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ProductCreated"),(0,r.kt)("li",{parentName:"ul"},"ProductUpdated"),(0,r.kt)("li",{parentName:"ul"},"ProductDeleted"),(0,r.kt)("li",{parentName:"ul"},"CartItemChanged"),(0,r.kt)("li",{parentName:"ul"},"StockMoved")),(0,r.kt)("p",null,"As with other Booster files, events have their own directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<project-root>\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 commands\n\u2502   \u251c\u2500\u2500 common\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u251c\u2500\u2500 entities\n\u2502   \u251c\u2500\u2500 events <------ put them here\n\u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2514\u2500\u2500 read-models\n")))}p.isMDXComponent=!0}}]);