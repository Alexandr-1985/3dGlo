(()=>{"use strict";(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),l=t.querySelector(".close-btn"),n=t.querySelectorAll("ul>li>a"),r=document.querySelector("a[href='#service-block']");console.dir(r.getAttribute),console.log(r.getAttribute("href"));const o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",(()=>{o()})),l.addEventListener("click",(e=>{e.preventDefault(),o()}));const c=e=>{let t;t=e.getAttribute("href"),document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})};r.addEventListener("click",(e=>{e.preventDefault(),c(r)})),n.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),o(),c(e)}))}))})(),(e=>{const t=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let r=e=>e<10?"0"+e:e;const o=setInterval((()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=r(c.hours),l.textContent=r(c.minutes),n.textContent=r(c.seconds),c.timeRemaining<=0&&(clearInterval(o),t.textContent="00",t.style.color="red",l.textContent="00",l.style.color="red",n.textContent="00",n.style.color="red")}),1e3)})("28 december 2021"),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),l=e.querySelector(".popup-close");let n,r=0;t.forEach((e=>{e.addEventListener("click",(()=>{o()}))})),l.addEventListener("click",(()=>{e.style.display="none"}));const o=()=>{(e.style.display="none")&&(e.style.display="block",e.style.transform="translateX(0)",document.documentElement.offsetWidth>=768&&c())},c=()=>{n=requestAnimationFrame(c),r+=5,r<=100?e.style.transform=`translateX(${100-r}%)`:(cancelAnimationFrame(n),e.style.display="block",r=0)}})(),(()=>{const e=document.querySelectorAll(".calc-item:not(:first-child)"),t=document.querySelectorAll("form input[type=text]"),l=document.querySelectorAll("form input[type=email]"),n=document.querySelectorAll("form input[type=tel]"),r=[...t,...document.querySelectorAll("form input[placeholder='Ваше сообщение']")];e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))})),r.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яA-Z.\s\-]/gi,"")})),e.addEventListener("blur",(()=>{e.value=e.value.replace(/\s+/g," ").replace(/^\s+/,"").replace(/\s+$/,"").replace(/(^\S|\s\S)(\S+)/g,((e,t,l)=>t.toUpperCase()+l.toLowerCase()))}))})),l.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\w0-9\.@!_~*']+/gi,"")}))})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\()\-]/g,"")}))}))})()})();