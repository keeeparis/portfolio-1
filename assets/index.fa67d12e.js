import{j as u,r as c,R as y,a as _,B as g,b as x,c as l}from"./vendor.58f09d7d.js";const w=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};w();const E="modulepreload",f={},R="/portfolio-1/",d=function(s,i){return!i||i.length===0?s():Promise.all(i.map(o=>{if(o=`${R}${o}`,o in f)return;f[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":E,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((m,h)=>{n.addEventListener("load",m),n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())};const t=u.exports.jsx,v=u.exports.jsxs,j=u.exports.Fragment,L=c.exports.lazy(()=>d(()=>import("./App.beec069e.js"),["assets/App.beec069e.js","assets/App.2a76e6dc.css","assets/vendor.58f09d7d.js"])),b=c.exports.lazy(()=>d(()=>import("./Join.1eabca52.js"),["assets/Join.1eabca52.js","assets/vendor.58f09d7d.js"])),a=c.exports.lazy(()=>d(()=>import("./Redirect.7947b2f3.js"),["assets/Redirect.7947b2f3.js","assets/vendor.58f09d7d.js"]));y.render(t(_.StrictMode,{children:t(c.exports.Suspense,{fallback:t("div",{children:"Loading..."}),children:t(g,{basename:"/portfolio-1",children:v(x,{children:[t(l,{path:"/",element:t(L,{})}),t(l,{path:"/join",element:t(b,{})}),t(l,{path:"/rickroll",element:t(a,{link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})}),t(l,{path:"/spotify",element:t(a,{link:"https://open.spotify.com/"})}),t(l,{path:"/ebay",element:t(a,{link:"https://www.ebay.com/"})})]})})})}),document.getElementById("root"));export{j as F,t as a,v as j};
