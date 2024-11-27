"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3511],{3511:(v,s,a)=>{a.r(s),a.d(s,{ion_checkbox:()=>c});var p=a(467),e=a(4261),l=a(4920),h=a(333),d=a(9483);const c=class{constructor(i){(0,e.r)(this,i),this.ionChange=(0,e.d)(this,"ionChange",7),this.ionFocus=(0,e.d)(this,"ionFocus",7),this.ionBlur=(0,e.d)(this,"ionBlur",7),this.inputId="ion-cb-"+b++,this.inheritedAttributes={},this.setChecked=t=>{const n=this.checked=t;this.ionChange.emit({checked:n,value:this.value})},this.toggleChecked=t=>{t.preventDefault(),this.setFocus(),this.setChecked(!this.checked),this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.onClick=t=>{this.disabled||this.toggleChecked(t)},this.color=void 0,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.labelPlacement="start",this.justify=void 0,this.alignment=void 0}componentWillLoad(){this.inheritedAttributes=Object.assign({},(0,l.i)(this.el))}setFocus(){var i=this;return(0,p.A)(function*(){i.focusEl&&i.focusEl.focus()})()}render(){const{color:i,checked:t,disabled:n,el:k,getSVGPath:y,indeterminate:m,inheritedAttributes:_,inputId:j,justify:g,labelPlacement:C,name:E,value:M,alignment:u}=this,w=(0,d.b)(this),z=y(w,m);return(0,l.d)(!0,k,E,t?M:"",n),(0,e.h)(e.f,{key:"6dc787e1100521d08c4900104e1a3e2f594e919f","aria-checked":m?"mixed":`${t}`,class:(0,h.c)(i,{[w]:!0,"in-item":(0,h.h)("ion-item",k),"checkbox-checked":t,"checkbox-disabled":n,"checkbox-indeterminate":m,interactive:!0,[`checkbox-justify-${g}`]:void 0!==g,[`checkbox-alignment-${u}`]:void 0!==u,[`checkbox-label-placement-${C}`]:!0}),onClick:this.onClick},(0,e.h)("label",{key:"68222fb736a5ec3f2e488649b0e2ce0417dcb224",class:"checkbox-wrapper"},(0,e.h)("input",Object.assign({key:"f12962d7e9b19c744cfdbdeccc67ae7f5d080281",type:"checkbox",checked:!!t||void 0,disabled:n,id:j,onChange:this.toggleChecked,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:P=>this.focusEl=P},_)),(0,e.h)("div",{key:"c72df2699414b1e5a41a1bc267bc634f0c93dcff",class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":""===k.textContent},part:"label"},(0,e.h)("slot",{key:"a2a80285178a7e0e3b536fc9ca26b8b444aa4307"})),(0,e.h)("div",{key:"c2b05e0d1fe8df5dcd72858220b5ff51ecaee4cc",class:"native-wrapper"},(0,e.h)("svg",{key:"ee24913fded72258ebd9713654a6dba92a18fcf7",class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},z))))}getSVGPath(i,t){let n=(0,e.h)("path",t?{d:"M6 12L18 12",part:"mark"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8",part:"mark"});return"md"===i&&(n=(0,e.h)("path",t?{d:"M2 12H22",part:"mark"}:{d:"M1.73,12.91 8.1,19.28 22.79,4.59",part:"mark"})),n}get el(){return(0,e.i)(this)}};let b=0;c.style={ios:":host{--checkbox-background-checked:var(--ion-color-primary, #0054e9);--border-color-checked:var(--ion-color-primary, #0054e9);--checkmark-color:var(--ion-color-primary-contrast, #fff);--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper,:host(.in-item:not(.checkbox-label-placement-stacked):not([slot])) .native-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-justify-space-between),:host(.checkbox-justify-start),:host(.checkbox-justify-end),:host(.checkbox-alignment-start),:host(.checkbox-alignment-center){display:block}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:0.125rem;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--size:min(1.375rem, 55.836px);--checkmark-width:1.5px}:host(.checkbox-disabled){opacity:0.3}",md:":host{--checkbox-background-checked:var(--ion-color-primary, #0054e9);--border-color-checked:var(--ion-color-primary, #0054e9);--checkmark-color:var(--ion-color-primary-contrast, #fff);--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper,:host(.in-item:not(.checkbox-label-placement-stacked):not([slot])) .native-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-justify-space-between),:host(.checkbox-justify-start),:host(.checkbox-justify-end),:host(.checkbox-alignment-start),:host(.checkbox-alignment-center){display:block}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--checkmark-width:3;--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled) .label-text-wrapper{opacity:0.38}:host(.checkbox-disabled) .native-wrapper{opacity:0.63}"}},333:(v,s,a)=>{a.d(s,{c:()=>l,g:()=>d,h:()=>e,o:()=>x});var p=a(467);const e=(r,o)=>null!==o.closest(r),l=(r,o)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},o):o,d=r=>{const o={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c):[])(r).forEach(c=>o[c]=!0),o},f=/^[a-z][a-z0-9+\-.]*:/,x=function(){var r=(0,p.A)(function*(o,c,b,i){if(null!=o&&"#"!==o[0]&&!f.test(o)){const t=document.querySelector("ion-router");if(t)return null!=c&&c.preventDefault(),t.push(o,b,i)}return!1});return function(c,b,i,t){return r.apply(this,arguments)}}()}}]);