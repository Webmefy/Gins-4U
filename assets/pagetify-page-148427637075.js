function pextReady(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}window.pextStorage={_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),window.PextRespondToVisibility=function(e,t){var n=new IntersectionObserver((function(e,n){var r=e.map((e=>e.isIntersecting)).includes(!0);t(r)}),{root:null,threshold:.01});n.observe(e)},window.PextResponsiveValue=function(e,t){if(!e)return"";const n=e.toString().split("|||");if(3==n.length)switch(t){case"md":e=n[1]||n[0]||n[2];break;case"sm":e=n[2]||n[1]||n[0];break;default:e=n[0]||n[1]||n[2]}else e=n[0];return e},pextReady((function(){var e;(e={init:function(){e.refresh.call(this),e.runtime.call(this)},refresh:function(){e.elements.call(this),e.resetFixedTime.call(this)},elements:function(){var e=this,t="pext-upwx1",n=document.getElementById(t).querySelector(".pe-countdown > .pe-countdown-wrapper");e.el={root:t,countdownWrapper:n,dayWrapper:n.querySelector(".pe-day-number"),hourWrapper:n.querySelector(".pe-hour-number"),minuteWrapper:n.querySelector(".pe-minute-number"),secondWrapper:n.querySelector(".pe-second-number"),sectionWrapper:n.querySelectorAll(".pe-countdown-section")},e.params={hideOnTimeSetting:"false",loopOnTimeoutSetting:"false",redirectOnTimeoutSetting:"false",countdownType:"datetime",redirectUrl:"",targetDaySetting:"3",targetHourSetting:"0",targetMinuteSetting:"0",targetDatetimeSetting:"2024-10-14 15:00",countDownTypeSetting:"datetime",targetTimeSetting:"15:00",numberBackgroundType:"none",sameSize:"false",fixedTimestamp:null},e.checker={inDevelopment:null!=document.querySelector(".pe-all-blue.editing"),hideOnTimeout:"true"==e.params.hideOnTimeSetting,loopOnTimeout:"true"==e.params.loopOnTimeoutSetting,redirectOnTimeout:"true"==e.params.redirectOnTimeoutSetting},e.static={DAY_SECOND:86400,HOUR_SECOND:3600,MINUTE_SECOND:60},e.output={day:0,hour:0,minute:0,second:0}},setFixedTimestamp:function(e){this.params.fixedTimestamp=Date.now()+1e3*e},resetFixedTime:function(){var t=this;try{var n=parseInt(t.params.targetDaySetting)*t.static.DAY_SECOND+parseInt(t.params.targetHourSetting)*t.static.HOUR_SECOND+parseInt(t.params.targetMinuteSetting)*t.static.MINUTE_SECOND;e.setFixedTimestamp.call(t,n)}catch(e){}},getValidDateFormat:function(e){var t,n=e.split(" ");return n&&(t=`${n[0]}T${n[1]}`),t},update:function(){var t=this;switch(t.params.countdownType){case"datetime":case"fixed":var n;if("datetime"==t.params.countDownTypeSetting&&(n=Date.parse(e.getValidDateFormat(t.params.targetDatetimeSetting))),"fixed"==t.params.countDownTypeSetting&&(n=t.params.fixedTimestamp),!n)break;var r=Date.now(),i=parseInt((n-r)/1e3);if(i<0)break;t.output.day=parseInt(i/t.static.DAY_SECOND),t.output.hour=parseInt(i%t.static.DAY_SECOND/t.static.HOUR_SECOND),t.output.minute=parseInt(i%t.static.HOUR_SECOND/t.static.MINUTE_SECOND),t.output.second=i%t.static.MINUTE_SECOND;break;case"daily":try{var a=(r=new Date).getHours()*t.static.HOUR_SECOND+r.getMinutes()*t.static.MINUTE_SECOND+r.getSeconds(),o=t.params.targetTimeSetting.split(":");if((i=parseInt(o[0])*t.static.HOUR_SECOND+parseInt(o[1])*t.static.MINUTE_SECOND-a)<0)break;t.output.hour=parseInt(i/t.static.HOUR_SECOND),t.output.minute=parseInt(i%t.static.HOUR_SECOND/t.static.MINUTE_SECOND),t.output.second=i%t.static.MINUTE_SECOND}catch(e){}}},pad:function(e){return e<10?"0"+e.toString():e.toString()},display:function(){var t=this;0==t.output.day&&0==t.output.hour&&0==t.output.minute&&0==t.output.second&&("fixed"==t.params.countdownType&&t.checker.loopOnTimeout?e.resetFixedTime():!t.checker.inDevelopment&&t.checker.hideOnTimeout&&t.el.countdownWrapper.classList.add("hide"),!t.checker.inDevelopment&&t.checker.redirectOnTimeout&&t.params.redirectUrl&&t.params.redirectUrl.length&&(window.location.href=t.params.redirectUrl)),t.el.dayWrapper.innerHTML=e.pad(t.output.day),t.el.hourWrapper.innerHTML=e.pad(t.output.hour),t.el.minuteWrapper.innerHTML=e.pad(t.output.minute),t.el.secondWrapper.innerHTML=e.pad(t.output.second)},size:function(){var e=this;if("overall"==e.params.numberBackgroundType&&"true"==e.params.sameSize){e.el.countdownWrapper.style.setProperty(`--${e.el.root}-size`,"fit-content");let t=0;for(i=0;i<e.el.sectionWrapper.length;++i)t=Math.max(t,parseInt(e.el.sectionWrapper[i].scrollHeight),parseInt(e.el.sectionWrapper[i].scrollWidth));e.el.countdownWrapper.style.setProperty(`--${e.el.root}-size`,0==t?"fit-content":t+"px")}},runtime:function(){var t=this,n="peCountDown-"+t.el.root;window[n]&&clearInterval(window[n]),window[n]=setInterval((function(){e.size.call(t),e.update.call(t),e.display.call(t)}),1e3)}}).init.apply({}),document.body.style.setProperty("background-color","#FFFFFF","important"),function(){var e=null!=document.querySelector(".pe-all-blue.editing"),t=document.body;r();if(e||!0){var n=document.createElement("div");if(n.classList.add("pe-announcement-bar"),n.innerHTML='\n        <div class="pe-announcement-content">\n          <div class="pe-announcement-message">LIVRAISON GRATUITE Â PARTIR DE 80 CHF\n</div>\n          \n        <i class="material-icons-round pe-annoucement-close" translate="no">close</i>\n      ',t.prepend(n),!e)n.querySelector(".pe-annoucement-close").addEventListener("click",(function(){r()}))}function r(){var e=t.querySelector(".pe-announcement-bar");e&&e.parentNode.removeChild(e)}}(),document.querySelector(".pe-all-blue.editing"),function(){var e=document.querySelector(".pe-back-to-top"),t=null!=document.querySelector(".pe-all-blue.editing");e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),!t&&window.pageYOffset<=100&&(e.style.visibility="hidden",e.style.opacity="0"),t||(window.onscroll=function(){window.pageYOffset<=100?(e.style.visibility="hidden",e.style.opacity="0"):(e.style.visibility="visible",e.style.opacity="1")})}()}));