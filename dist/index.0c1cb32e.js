var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequire4cc0;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,l.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequire4cc0=l);var r=l.register;r("giU2u",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return o},set:function(e){return o=e},enumerable:!0,configurable:!0});var o,l=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)l.set(t[o],{baseUrl:e,path:t[o+1]})}}),r("c7QfB",function(e,t){e.exports=new URL("slider-photo-1.481828be.png",import.meta.url).toString()}),r("3kOsJ",function(e,t){e.exports=new URL("slider-photo-2.c8c4b8cf.png",import.meta.url).toString()}),r("eKslW",function(e,t){e.exports=new URL("slider-photo-3.84ae315e.png",import.meta.url).toString()}),l("giU2u").register(new URL("",import.meta.url).toString(),JSON.parse('["ehesI","index.0c1cb32e.js","bCmkW","slider-photo-1.481828be.png","cqIk5","slider-photo-2.c8c4b8cf.png","7Pz4r","slider-photo-3.84ae315e.png"]'));const c=[l("c7QfB"),l("3kOsJ"),l("eKslW")],s=document.querySelector(".slider__item"),n=document.querySelector(".slider__arrow-left"),u=document.querySelector(".slider__arrow-right");let i=0;n.addEventListener("click",()=>{--i<0&&(i=c.length-1),s.src=c[i]}),u.addEventListener("click",()=>{++i>=c.length&&(i=0),s.src=c[i]});const a=document.querySelector(".burger__close"),d=document.querySelector(".top-bar__open"),g=document.querySelector(".burger"),m=document.querySelector(".burger__logo"),_=document.querySelector(".top-bar__hire"),b=document.querySelector(".page__body");d.addEventListener("click",()=>{g.style.display="block",b.style.overflow="hidden"}),a.addEventListener("click",()=>{g.style.display="none",b.style.overflow="auto"}),g.addEventListener("click",e=>{e.target&&(g.style.display="none",m.style.display="block",_.style.display="block",b.style.overflow="auto")});const f=document.querySelectorAll(".switcher"),h=document.querySelector(".header"),p=document.querySelector(".header__button"),y=document.querySelector(".top-bar__hire"),S=document.querySelectorAll(".services__button"),L=document.querySelectorAll(".services__number"),q=document.querySelectorAll(".reviews__img"),v=document.querySelectorAll(".reviews__icon"),E=document.querySelector(".vision"),w=document.querySelector(".vision__button"),A=document.querySelector(".contactUs"),H=document.querySelector(".contactUs__button"),k=document.querySelectorAll(".contactUs__form_input"),R=document.querySelectorAll(".page__menu"),U=document.querySelector(".footer");function x(){h.classList.toggle("blue-theme"),p.classList.toggle("blue-theme"),y.classList.toggle("blue-theme"),s.classList.toggle("blue-theme"),g.classList.toggle("blue-theme"),S.forEach(e=>e.classList.toggle("blue-theme")),L.forEach(e=>e.classList.toggle("blue-theme")),q.forEach(e=>e.classList.toggle("blue-theme")),v.forEach(e=>e.classList.toggle("blue-theme")),E.classList.toggle("blue-theme"),w.classList.toggle("blue-theme"),A.classList.toggle("blue-theme"),H.classList.toggle("blue-theme"),k.forEach(e=>e.classList.toggle("blue-theme")),R.forEach(e=>e.classList.toggle("blue-theme")),U.classList.toggle("blue-theme");let e=h.classList.contains("blue-theme");localStorage.setItem("theme",e?"blue":"default")}window.addEventListener("load",()=>{"blue"===localStorage.getItem("theme")&&x()}),f.forEach(e=>{e.addEventListener("click",x)});
//# sourceMappingURL=index.0c1cb32e.js.map
