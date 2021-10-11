(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1823],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||o;return n?i.createElement(d,a(a({ref:t},s),{},{components:n})):i.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},954:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],l={},p="One to One",u={unversionedId:"relation/one-to-one",id:"relation/one-to-one",isDocsHomePage:!1,title:"One to One",description:"A one-to-one relation is the most basic type of database relation. Let say a Cake entity has at most one Fruit topping.",source:"@site/docs/05-relation/01-one-to-one.md",sourceDirName:"05-relation",slug:"/relation/one-to-one",permalink:"/SeaORM/docs/relation/one-to-one",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/05-relation/01-one-to-one.md",version:"current",lastUpdatedBy:"nickschmitt",lastUpdatedAt:1633041096,formattedLastUpdatedAt:"10/1/2021",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raw SQL",permalink:"/SeaORM/docs/basic-crud/raw-sql"},next:{title:"One to Many",permalink:"/SeaORM/docs/relation/one-to-many"}},s=[{value:"Defining the Relation",id:"defining-the-relation",children:[]},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",children:[]}],c={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"one-to-one"},"One to One"),(0,o.kt)("p",null,"A one-to-one relation is the most basic type of database relation. Let say a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,o.kt)("inlineCode",{parentName:"p"},"Fruit")," topping."),(0,o.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,o.kt)("p",null,"On the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cake")," entity, to define the relation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a new variant ",(0,o.kt)("inlineCode",{parentName:"li"},"Fruit")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Relation")," enum."),(0,o.kt)("li",{parentName:"ol"},"Define it with ",(0,o.kt)("inlineCode",{parentName:"li"},"Entity::has_one()"),"."),(0,o.kt)("li",{parentName:"ol"},"Implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"Related<Entity>")," trait.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{2,8,13} title="entity/cake.rs"',"{2,8,13}":!0,title:'"entity/cake.rs"'},"pub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_one(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,o.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,o.kt)("p",null,"On the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fruit")," entity, its ",(0,o.kt)("inlineCode",{parentName:"p"},"cake_id")," attribute is referencing the primary key of ",(0,o.kt)("inlineCode",{parentName:"p"},"Cake")," entity."),(0,o.kt)("p",null,"To define the inverse relation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a new enum variant ",(0,o.kt)("inlineCode",{parentName:"li"},"Relation::Cake")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Fruit")," entity."),(0,o.kt)("li",{parentName:"ol"},"Write the definition of it with the ",(0,o.kt)("inlineCode",{parentName:"li"},"Entity::belongs_to()")," method, we always define the inverse relation using this method."),(0,o.kt)("li",{parentName:"ol"},"Implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"Related<cake::Entity>")," trait.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")))}f.isMDXComponent=!0}}]);