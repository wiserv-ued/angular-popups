/*! angular-popup@0.0.1 | https://github.com/aui/angular-popup */
!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";n(10),n(7),n(8),n(9),n(12),t.exports={}},function(t,e,n){"use strict";function o(t){var e=document.createElement("popup");return document.body.appendChild(e),e.appendChild(t[0]),s(e)}var i=n(2),s=i.element,c=n(11),u=n(3),a=function(){};u.createPopup=function(t,e){return u.directive(t,function(){var t={template:e.template,restrict:"AE",transclude:!0,replace:!0,scope:{ngIf:"=",ngShow:"=",ngHide:"=",close:"&",closeAction:"@","for":"@",align:"@",fixed:"@",modal:"@",duration:"@"},controller:["$scope",function(t){this.closeAction=["esc","timeout"],this.close=function(e){t.close(),e&&t.$apply()}}],link:function(t,n,u,r){function l(t){var e=d(u["for"]);i.isUndefined(t)||(i.isObject(t)&&(e=t),t?(n.css("visibility","hidden"),setTimeout(function(){n.css("visibility","visible"),g[p(u.modal)?"showModal":"show"](e),v(t)},0)):(g.close(),v(t)))}function d(t){return document.getElementById(t)}function p(t){return"string"==typeof t}function f(t){var e=t.target,n=e.nodeName,o=/^input|textarea$/i,i=c.current===g,s=o.test(n)&&"button"!==e.type,u=t.keyCode;i&&!s&&27===u&&r.close(t)}function h(t){n[0].contains(t.target)||r.close(t)}function m(){u.duration&&(m.timer=setTimeout(function(){r.close(!0)},Number(u.duration)))}function v(t){r.closeAction.forEach(function(e){switch(e){case"esc":t?b.on("keydown",f):b.off("keydown",f);break;case"timeout":t?m():clearTimeout(m.timer);break;case"outerchick":t?b.on("ontouchend",h).on("click",h):b.off("ontouchend",h).off("click",h);break;case"click":t?n.on(e,r.close):n.off(e,r.close)}})}var g=new c({node:n[0],fixed:p(u.fixed),align:u.align,showElement:a,hideElement:a,removeElement:a}),$=o(n),b=s(document);u.closeAction&&(r.closeAction=u.closeAction.split(/\s+/)),u.ngIf&&t.$watch("ngIf",l),u.ngShow&&t.$watch("ngShow",l),u.ngHide&&t.$watch("ngHide",function(t){l(!t)}),n.one("$destroy",function(){l(!1),g.remove(),$.remove()}),(e.link||function(){}).apply(this,arguments)}};return i.extend(t.scope,e.scope),t})},t.exports=u},function(t,e){t.exports=angular},function(t,e,n){t.exports=n(2).module("angular-popup",[])},,,,function(t,e,n){"use strict";var o=n(1);o.createPopup("bubble",{template:'<div class="ui-popup"><div class="ui-bubble"><div ng-transclude class="ui-bubble-content"></div></div></div>',link:function(t,e,n,o){n.closeAction||(o.closeAction=["esc","timeout","outerchick"])}})},function(t,e,n){"use strict";function o(t,e){c.directive(t,function(){return i.extend({require:"^dialog",restrict:"AE",transclude:!0,link:function(t,e,n,o){t.$dialogId="ui-dialog"+t.$parent.$id,t.$close=o.close},replace:!0},e)})}var i=n(2),s=i.element,c=n(1),u='<div class="ui-dialog"><div class="ui-dialog-header"></div><div class="ui-dialog-body"></div><div class="ui-dialog-footer"></div></div>',a='<div class="ui-dialog-title" id="{{$dialogId}}-title" ng-transclude></div>',r='<button class="ui-dialog-close" aria-label="Close" type="button"><span aria-hidden="true">&times;</span></button>',l='<div class="ui-dialog-content" id="{{$dialogId}}-content" ng-transclude></div>',d='<span class="ui-dialog-statusbar" ng-transclude></span>',p='<span class="ui-dialog-buttons" ng-transclude></span>';c.createPopup("dialog",{template:'<div class="ui-popup" aria-labelledby="{{$dialogId}}-title" aria-describedby="{{$dialogId}}-content" ng-transclude></div>',link:function(t,e,n,o){function i(t){var e=document.createElement("div");return e.innerHTML=t,e.firstChild}function c(t,e){e&&t.appendChild(e)}var a=e[0],l=i(u);t.$dialogId="ui-dialog"+t.$id;var d=function(t){var e="dialog",n=e+"-"+t,o=e+"\\:"+t,i="["+n+"]",s="["+o+"]",c=".ui-dialog-"+t;return a.querySelector([n,o,i,s,c].join(","))},p=function(t){return l.querySelector(".ui-dialog-"+t)},f=n.close?i(r):null,h=d("title"),m=d("content"),v=d("statusbar"),g=d("buttons"),$=p("header"),b=p("body"),_=p("footer");c($,f),c($,h),c(b,m),c(_,v),c(_,g),h||s($).remove(),v||g||s(_).remove(),f&&f.addEventListener("click",o.close,!1),c(a,l)}}),o("dialogTitle",{template:a}),o("dialogContent",{template:l}),o("dialogStatusbar",{template:d}),o("dialogButtons",{template:p})},function(t,e,n){"use strict";var o=n(1);o.createPopup("notice",{template:'<div class="ui-popup"><div class="ui-notice" ng-transclude></div></div>'})},function(t,e,n){"use strict";var o=n(1);o.createPopup("popup",{template:'<div class="ui-popup"><div ng-transclude></div></div>'})},function(t,e){"use strict";function n(t){this.options=Object.create(n.defaults),Object.keys(t||{}).forEach(function(e){var n=t[e];"undefined"!=typeof n&&(this.options[e]=n)},this);var e=this.options.node||document.createElement("div");e.style.position="absolute",e.setAttribute("tabindex","-1"),document.body.appendChild(e),this.options.hideElement(e),this.node=e,this.destroyed=!1}function o(t){return document.documentElement["client"+t]}function i(t){var e={Left:"pageXOffset",Top:"pageYOffset"};return window[e[t]]}function s(t){t.parentNode.removeChild(t)}function c(t){t.style.display="block"}function u(t){t.style.display="none"}function a(t,e){return t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function r(t,e){a(t,e)||(t.className+=" "+e)}function l(t,e){if(a(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}function d(t,e,n){t.addEventListener(e,n,!1)}function p(t,e,n){t.removeEventListener(e,n)}function f(){try{var t=document.activeElement,e=t.contentDocument,n=e&&e.activeElement||t;return n}catch(o){}}n.defaults={node:null,fixed:!1,autofocus:!0,align:"bottom left",className:"ui-popup",showElement:c,hideElement:u,removeElement:s},n.prototype={constructor:n,destroyed:!0,open:!1,returnValue:"",show:function(t){if(this.destroyed)return this;var e=this.node;return this.__activeElement=f(),this.open=!0,this.anchor=t,r(e,this.options.className),r(e,this.__name("show")),e.setAttribute("role",this.modal?"alertdialog":"dialog"),this.__show||(this.focus=this.focus.bind(this),this.reset=this.reset.bind(this),this.__show=!0),this.modal&&(r(e,this.__name("modal")),d(document,"focusin",this.focus)),this.options.showElement(e),d(window,"resize",this.reset),this.reset().focus(),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(t){if(!this.destroyed&&this.open){var e=this.node;void 0!==t&&(this.returnValue=t),l(e,this.__name("show")),l(e,this.__name("modal")),this.options.hideElement(e),this.open=!1,this.blur(),p(document,"focusin",this.focus),p(window,"resize",this.reset)}return this},remove:function(){if(this.destroyed)return this;this.open&&this.close(),n.current===this&&(n.current=null),this.options.removeElement(this.node);for(var t in this)delete this[t];return this},reset:function(){if(this.open){var t=this.anchor;return"string"==typeof t&&(t=this.anchor=document.querySelector(t)),this.node.style.position=this.options.fixed?"fixed":"absolute",t?this.__anchor(t):this.__center(),this}},focus:function(){var t=this.node,e=n.current,o=this.zIndex=n.zIndex++;if(e&&e!==this&&e.blur(!1),!t.contains(f())){var i=t.querySelector("[autofocus]");!this.__autofocus&&i?this.__autofocus=!0:i=t,this.__focus(i)}return t.style.zIndex=o,n.current=this,r(t,this.__name("focus")),this},blur:function(){var t=this.__activeElement,e=f(),n=arguments[0],o=this.node;return n!==!1&&o.contains(e)&&this.__focus(t),this.__autofocus=!1,l(o,this.__name("focus")),this},__name:function(t){return this.options.className+"-"+t},__focus:function(t){try{this.options.autofocus&&!/^iframe$/i.test(t.nodeName)&&t.focus()}catch(e){}},__center:function(){var t=this.node,e=this.options.fixed,n=e?0:i("Left"),s=e?0:i("Top"),c=o("Width"),u=o("Height"),a=t.offsetWidth,r=t.offsetHeight,l=(c-a)/2+n,d=382*(u-r)/1e3+s,p=t.style;p.left=Math.max(parseInt(l),n)+"px",p.top=Math.max(parseInt(d),s)+"px"},__anchor:function(t){function e(){if(n){var e=window,o=document.documentElement,i=t.getBoundingClientRect();return{top:i.top+e.pageYOffset-o.clientTop,left:i.left+e.pageXOffset-o.clientLeft}}return{left:t.pageX,top:t.pageY}}var n=t.parentNode&&t,s=this.node;if(this.__anchorClass&&(l(s,this.__anchorClass),l(s,this.__name("anchor"))),n&&t.offsetLeft*t.offsetTop<0)return this.__center();var c=this,u=this.options,a=u.fixed,d=o("Width"),p=o("Height"),f=i("Left"),h=i("Top"),m=s.offsetWidth,v=s.offsetHeight,g=t.offsetWidth||0,$=t.offsetHeight||0,b=e(),_=b.left,y=b.top,x=a?_-f:_,k=a?y-h:y,w=a?0:f,E=a?0:h,P=w+d-m,I=E+p-v,C={},A=u.align.split(" "),N=this.__name(""),T={top:"bottom",bottom:"top",left:"right",right:"left"},H={top:"top",bottom:"top",left:"left",right:"left"},L=[{top:k-v,bottom:k+$,left:x-m,right:x+g},{top:k,bottom:k-v+$,left:x,right:x-m+g}],O={left:x+g/2-m/2,top:k+$/2-v/2},S={left:[w,P],top:[E,I]};A.forEach(function(t,e){L[e][t]>S[H[t]][1]&&(t=A[e]=T[t]),L[e][t]<S[H[t]][0]&&(A[e]=T[t])}),A[1]||(H[A[1]]="left"===H[A[0]]?"top":"left",L[1][A[1]]=O[H[A[1]]]),n&&(N+=A.join("-"),c.__anchorClass=N,r(s,N),r(s,this.__name("anchor"))),C[H[A[0]]]=parseInt(L[0][A[0]]),C[H[A[1]]]=parseInt(L[1][A[1]]),s.style.left=C.left+"px",s.style.top=C.top+"px"}},n.zIndex=1024,n.current=null,t.exports=n},function(t,e,n){"use strict";function o(t){var e=document.createElement("div");return e.innerHTML=t,e.firstChild}var i=n(2),s=n(3);s.provider("Popup",function(){var t=this,e=!1,n=function(){},s={title:"Message",okValue:"Ok",cancelValue:"Cancel"},c={open:!0,title:null,content:null,duration:null,okValue:null,cancelValue:null,ok:null,cancel:null,notice:!1,$destroy:n,$ok:function(){this.ok&&this.ok()!==!1&&(this.open=!1,this.$destroy())},$cancel:function(){this.cancel&&this.cancel()!==!1&&(this.open=!1,this.$destroy())},$close:function(){this.cancel?this.$cancel():this.$ok()}},u={close:function(){c.$close()}},a='<dialog ng-if="$$Popup.open && !$$Popup.notice" modal fixed close="$$Popup.$close()"><div dialog-title ng-bind="$$Popup.title"></div><div dialog-content ng-bind="$$Popup.content"></div><div dialog-buttons><button ng-if="$$Popup.ok" autofocus ng-click="$$Popup.$ok()">{{$$Popup.okValue}}</button><button ng-if="$$Popup.cancel" ng-click="$$Popup.$cancel()">{{$$Popup.cancelValue}}</button></dialog>',r='<notice ng-if="$$Popup.open && $$Popup.notice" fixed duration="{{$$Popup.duration}}" close="$$Popup.$close()">{{$$Popup.content}}</notice>';i.extend(this,s),this.$get=["$compile","$rootScope",function(s,l){function d(n){if(!e){var d=o(a);document.body.appendChild(d),s(d)(l);var p=o(r);document.body.appendChild(p),s(p)(l),e=!0}var f=Object.create(c);return f=i.extend(f,t,n),f.$destroy=function(){delete l.$$Popup},l.$$Popup=f,u}return{alert:function(t,e){return d({content:t,ok:e||n})},confirm:function(t,e,o){return d({content:t,ok:e||n,cancel:o||n})},notice:function(t,e,o){return d({content:t,duration:e||2e3,ok:o||n,notice:!0})}}}]})}]);
//# sourceMappingURL=angular-popup-nocss.js.map