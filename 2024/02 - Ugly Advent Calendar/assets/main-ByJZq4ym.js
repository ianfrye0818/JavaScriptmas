import"./index-Dqwmvrit.js";const c=document.getElementById("calendar");for(let e=1;e<=24;e++){let a=document.createElement("ul"),t=document.createElement("li");t.classList.add("calendar-box"),t.dataset.day=e;let d=document.createElement("p");d.innerHTML=e,d.classList.add("day-number");const n=document.createElement("i");n.classList.add("fas","fa-gift"),n.classList.add("icon");let l=document.createElement("p");l.innerHTML="Open me!",l.classList.add("event"),t.appendChild(d),t.appendChild(n),t.appendChild(l),a.appendChild(t),c.appendChild(a)}document.querySelectorAll(".calendar-box").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.day;window.location.href=`day-detail.html?day=${a}`})});