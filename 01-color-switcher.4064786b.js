!function(){const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e=null,r=!1;t.startBtn.addEventListener("click",(function(n){if(r)return;r=!0,n.currentTarget.setAttribute("disabled","true"),t.stopBtn.removeAttribute("disabled"),e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(n){t.startBtn.removeAttribute("disabled"),n.currentTarget.setAttribute("disabled","true"),clearInterval(e),r=!1}))}();
//# sourceMappingURL=01-color-switcher.4064786b.js.map
