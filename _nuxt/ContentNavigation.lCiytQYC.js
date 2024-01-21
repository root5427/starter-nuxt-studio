import{u as y}from"./asyncData.AY1HYw8Y.js";import{m,P as $,Q as P,R as C,S as p,_ as h,d as T,U as E,V as j,q as L,E as N,H as u}from"./entry.jIEzW39U.js";import{c as b,w as l,e as g,s as d,j as v,u as _}from"./utils.C7Oik8KQ.js";import{u as D}from"./utils.WauBqAM1.js";import{_ as Q}from"./nuxt-link.OKQS_wmc.js";const x=()=>async r=>{const{content:e}=m().public,a=r.params(),o=e.experimental.stripQueryParameters?l(`/query/${`${p(a)}.${e.integrity}`}/${g(a)}.json`):l(`/query/${p(a)}.${e.integrity}.json`);if(d())return(await h(()=>import("./client-db.PWVw0BQn.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.useContentDatabase())).fetch(r);const n=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:v(a),previewToken:_().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};function R(r,...e){const{content:a}=m().public,o=b(x(),{initialParams:typeof r!="string"?r:{},legacy:!0});let n;typeof r=="string"&&(n=$(P(r,...e)));const c=o.params;return o.params=()=>{var i,s,f;const t=c();return n&&(t.where=t.where||[],t.first&&(t.where||[]).length===0?t.where.push({_path:C(n)}):t.where.push({_path:new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(i=t.sort)!=null&&i.length||(t.sort=[{_file:1,$numeric:!0}]),a.locales.length&&((f=(s=t.where)==null?void 0:s.find(w=>w._locale))!=null&&f._locale||(t.where=t.where||[],t.where.push({_locale:a.defaultLocale}))),t},o}const S=async r=>{const{content:e}=m().public;typeof(r==null?void 0:r.params)!="function"&&(r=R(r));const a=r.params(),o=e.experimental.stripQueryParameters?l(`/navigation/${`${p(a)}.${e.integrity}`}/${g(a)}.json`):l(`/navigation/${p(a)}.${e.integrity}.json`);if(d())return(await h(()=>import("./client-db.PWVw0BQn.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.generateNavigation))(a);const n=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:v(a),previewToken:_().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},O=T({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:e}=E(r),a=j(()=>{var n;return typeof((n=e.value)==null?void 0:n.params)=="function"?e.value.params():e.value});if(!a.value&&L("dd-navigation").value){const{navigation:n}=D();return{navigation:n}}const{data:o}=await y(`content-navigation-${p(a.value)}`,()=>S(a.value));return{navigation:o}},render(r){const e=N(),{navigation:a}=r,o=t=>u(Q,{to:t._path},()=>t.title),n=(t,i)=>u("ul",i?{"data-level":i}:null,t.map(s=>s.children?u("li",null,[o(s),n(s.children,i+1)]):u("li",null,o(s)))),c=t=>n(t,0);return e!=null&&e.default?e.default({navigation:a,...this.$attrs}):c(a)}}),I=O;export{I as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.PWVw0BQn.js","./entry.jIEzW39U.js","./utils.C7Oik8KQ.js","./index.1dSrIji7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
