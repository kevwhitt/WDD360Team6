export function qs(t){return document.querySelector(t)}export function getLocalStorage(t){return JSON.parse(localStorage.getItem(t))}var n=[];export function setLocalStorage(t,e){var r=localStorage.getItem(t);if(r==null)n.push(e),localStorage.setItem(t,JSON.stringify(n));else{var o=JSON.parse(localStorage.getItem(t));o.push(e),localStorage.setItem(t,JSON.stringify(o))}}export function setClick(t,e){qs(t).addEventListener("touchend",r=>{r.preventDefault(),e()}),qs(t).addEventListener("click",e)}export function getParam(t){const e=window.location.search,r=new URLSearchParams(e);return r.get(t)}
