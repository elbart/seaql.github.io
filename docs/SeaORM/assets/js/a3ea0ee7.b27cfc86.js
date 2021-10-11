(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2924],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6217:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],u={},c="Update",p={unversionedId:"basic-crud/update",id:"basic-crud/update",isDocsHomePage:!1,title:"Update",description:"Update One",source:"@site/docs/04-basic-crud/03-update.md",sourceDirName:"04-basic-crud",slug:"/basic-crud/update",permalink:"/SeaORM/docs/basic-crud/update",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/04-basic-crud/03-update.md",version:"current",lastUpdatedBy:"nickschmitt",lastUpdatedAt:1633041096,formattedLastUpdatedAt:"10/1/2021",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Insert",permalink:"/SeaORM/docs/basic-crud/insert"},next:{title:"Save",permalink:"/SeaORM/docs/basic-crud/save"}},l=[{value:"Update One",id:"update-one",children:[]},{value:"Update Many",id:"update-many",children:[]}],d={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update"},"Update"),(0,i.kt)("h2",{id:"update-one"},"Update One"),(0,i.kt)("p",null,"You will get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," from find result. If you want to save the model back into the database, you need to convert it into an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," ",(0,i.kt)("em",{parentName:"p"},"first"),". The generated query will only include the ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;\n\n// Into ActiveModel\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\n// Update name attribute\npear.name = Set("Sweet pear".to_owned());\n\n// Update corresponding row in database using primary key value\nlet pear: fruit::ActiveModel = pear.update(db).await?;\n')),(0,i.kt)("h2",{id:"update-many"},"Update Many"),(0,i.kt)("p",null,"You can also update multiple rows in the database without finding each ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Bulk set attributes using ActiveModel\nlet pear: fruit::ActiveModel = Fruit::update_many()\n    .set(pear)\n    .filter(fruit::Column::Id.eq(1))\n    .exec(db)\n    .await?;\n\n// UPDATE `fruit` SET `cake_id` = NULL WHERE `fruit`.`name` LIKE '%Apple%'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(Value::Null))\n    .filter(fruit::Column::Name.contains(\"Apple\"))\n    .exec(db)\n    .await?;\n")))}s.isMDXComponent=!0}}]);