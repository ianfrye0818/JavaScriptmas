(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=document.getElementById("item-input"),f=document.getElementById("add-item-button"),d=document.getElementById("shopping-list"),i=JSON.parse(localStorage.getItem("ChristmasList"))||[];function u(){const t=c.value.trim(),o=t.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"'?]/g,"").replace(/\s+/g," ");if(i.some(n=>n.toLowerCase().replace(/\s+/g," ")===o)){alert("Duplicate item");return}i.push(t),m(),l()}function m(){localStorage.setItem("ChristmasList",JSON.stringify(i))}function l(){d.innerHTML=`
  
    ${i.map((t,o)=>`
       <li data-id=${o} class="list-group-item">
       <div class='item'>

            ${t}
            <button id="remove-btn">Remove</button>
        </div>
    </li>
    `).join("")}
  `,c.value=""}function p(t){i.splice(t,1),m(),l()}f.addEventListener("click",u);c.addEventListener("keypress",t=>{t.key==="Enter"&&u()});d.addEventListener("click",t=>{if(console.log(t.target),t.target.id==="remove-btn"){const o=t.target.parentElement.getAttribute("data-id");p(o)}});l();
