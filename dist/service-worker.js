if(!self.define){let o,i={};const l=(l,r)=>(l=new URL(l+".js",r).href,i[l]||new Promise((i=>{if("document"in self){const o=document.createElement("script");o.src=l,o.onload=i,document.head.appendChild(o)}else o=l,importScripts(l),i()})).then((()=>{let o=i[l];if(!o)throw new Error(`Module ${l} didn’t register its module`);return o})));self.define=(r,e)=>{const n=o||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const t=o=>l(o,n),u={module:{uri:n},exports:s,require:t};i[n]=Promise.all(r.map((o=>u[o]||t(o)))).then((o=>(e(...o),s)))}}define(["./workbox-6567b62a"],(function(o){"use strict";o.setCacheNameDetails({prefix:"portfolio"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/portfolio/css/357.e8cc7273.css",revision:null},{url:"/portfolio/css/740.5811f48e.css",revision:null},{url:"/portfolio/css/app.18f06966.css",revision:null},{url:"/portfolio/img/MainAfter.b964c480.webp",revision:null},{url:"/portfolio/img/brain.42cbe111.jpg",revision:null},{url:"/portfolio/img/galleryPage1.8ca2d162.png",revision:null},{url:"/portfolio/img/galleryPage2.55d2ac8c.png",revision:null},{url:"/portfolio/img/journalSuivi1.ff4fea58.png",revision:null},{url:"/portfolio/img/logo.4d6033c9.svg",revision:null},{url:"/portfolio/img/startingPage1.ac381cde.png",revision:null},{url:"/portfolio/img/waitingPage1.09ddc641.png",revision:null},{url:"/portfolio/img/waitingPage2.0c3f9285.png",revision:null},{url:"/portfolio/img/waitingPage3.0c744dad.png",revision:null},{url:"/portfolio/index.html",revision:"c5c21488fe3154ab3030d6ef2fc5b736"},{url:"/portfolio/js/357.490cd21b.js",revision:null},{url:"/portfolio/js/706.4dca15ca.js",revision:null},{url:"/portfolio/js/740.e47c5e4e.js",revision:null},{url:"/portfolio/js/782.fd495487.js",revision:null},{url:"/portfolio/js/about.4ae0a822.js",revision:null},{url:"/portfolio/js/app.7956334f.js",revision:null},{url:"/portfolio/js/chunk-vendors.226da040.js",revision:null},{url:"/portfolio/manifest.json",revision:"1770c2524b653c4741436956a1f7f256"},{url:"/portfolio/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
