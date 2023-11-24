import{a as f,S as u,i as c}from"./assets/vendor-de59dc79.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const p=t=>['<option data-placeholder="true"></option>',...t.map(({id:r,name:l})=>`<option value=${r}>${l}</option>`)].join(""),h=({url:t,breeds:[r]})=>{const{id:l,name:i,description:e,temperament:o}=r;return`<img src=${t} alt=${i} height="380"/><div><h2>${i}</h2><p>${e}</p><p>${o}</p></div>`},m="live_Id2MBArVFPzA7WO4yuLCpdsnvzEt5N7fl0uDnipf1ZLtwi2Bxa6A8279Yd2vBbD9",g=" https://api.thecatapi.com/v1",d=f.create({baseURL:g,headers:{"x-api-key":m}}),b=()=>d("/breeds").then(t=>t.data),y=t=>d(`/images/search?breed_ids=${t}`).then(r=>r.data[0]),n={breedSelectRef:document.querySelector(".breed-select"),catInfoRef:document.querySelector(".cat-info"),loaderRef:document.querySelector(".loader"),errorRef:document.querySelector(".error")},s=({bool:t,element:r})=>{t?r.classList.replace("hidden","visible"):r.classList.replace("visible","hidden")},R=()=>{s({bool:!0,element:n.loaderRef}),b().then(t=>{n.breedSelectRef.innerHTML=p(t),new u({select:n.breedSelectRef,settings:{placeholderText:"Choose a breed"}}),s({bool:!0,element:n.breedSelectRef})}).catch(t=>c.error({title:"Oops!",message:"Something went wrong! Try reloading the page!",position:"topRight"})).finally(()=>s({bool:!1,element:n.loaderRef}))},S=({target:{value:t}})=>{s({bool:!0,element:n.loaderRef}),n.catInfoRef.innerHTML="",y(t).then(r=>n.catInfoRef.innerHTML=h(r)).catch(r=>c.error({title:"Oops!",message:"Something went wrong! Try reloading the page!",position:"topRight"})).finally(()=>s({bool:!1,element:n.loaderRef}))};R();n.breedSelectRef.addEventListener("change",S);
//# sourceMappingURL=commonHelpers.js.map
