import"./index-Dqwmvrit.js";const d=["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1kaDZmNjdkNjBlem92eHZybGUwa2p3czFvdjN1bjk3eno4d2g0aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6ZtjqdcQfuno2WPK/giphy.gif","https://media.giphy.com/media/D28t0Rto3daKI/giphy.gif?cid=790b7611dmdh6f67d60ezovxvrle0kjws1ov3un97zz8wh4j&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/LBAv3HJDl2WwU/giphy.gif?cid=790b7611dmdh6f67d60ezovxvrle0kjws1ov3un97zz8wh4j&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/9w475hDWEPVlu/giphy.gif?cid=790b7611dmdh6f67d60ezovxvrle0kjws1ov3un97zz8wh4j&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/9JrvLb0fnrn7k1ZjhX/giphy.gif?cid=790b7611dmdh6f67d60ezovxvrle0kjws1ov3un97zz8wh4j&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/zgNEQ7Q2tkRFmmdOXF/giphy.gif?cid=790b7611dmdh6f67d60ezovxvrle0kjws1ov3un97zz8wh4j&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/yAhVmsVDyPMGI/giphy.gif?cid=790b7611dmdh6f67d60ezovxvrle0kjws1ov3un97zz8wh4j&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/AqHNXBLBEOEAYKFXtE/giphy.gif?cid=ecf05e47rvcx9zwz7kpbxn0ho34ftqvgcnxwmufg0i5tjkdp&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/P3aaEHlnOuj6M/giphy.gif?cid=ecf05e47rvcx9zwz7kpbxn0ho34ftqvgcnxwmufg0i5tjkdp&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/RH9UkgS6sKozm/giphy.gif?cid=ecf05e47h42tnlz6u341t81an36cbp224d1a5ujruea0m2pf&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/2x9q65qHdYqVW/giphy.gif?cid=ecf05e474945sia04r305x3bpdlbj5a6bl6pkw18lpxrdtdm&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/13lIFCT4YxJSes/giphy.gif?cid=ecf05e474945sia04r305x3bpdlbj5a6bl6pkw18lpxrdtdm&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/3o6wrglt7FjpTnmyEE/giphy.gif?cid=ecf05e474945sia04r305x3bpdlbj5a6bl6pkw18lpxrdtdm&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/Rcmyx7NfyNhSM/giphy.gif?cid=ecf05e474945sia04r305x3bpdlbj5a6bl6pkw18lpxrdtdm&ep=v1_gifs_search&rid=giphy.gif&ct=g","https://media.giphy.com/media/2IfqRSy8jfOVO/giphy.gif?cid=ecf05e474945sia04r305x3bpdlbj5a6bl6pkw18lpxrdtdm&ep=v1_gifs_search&rid=giphy.gif&ct=g"],g=new URLSearchParams(window.location.search).get("day"),c=document.querySelector("#root");a();document.querySelector("#back-to-calendar").addEventListener("click",()=>{window.location.href="index.html"});function h(){const i=d[Math.floor(Math.random()*d.length)],t=document.querySelector("#gif-box"),e=document.createElement("img");e.src=i,t.appendChild(e)}function p(){const i=`
    <h1>Day ${g}</h1>
    <p>Only ${25-g} more days until Christmas!</p>
    <div id='gif-box'></div>
    <button id="back-to-calendar">Back to Calendar</button>
  `;c.innerHTML=i}function a(){p(),h()}
