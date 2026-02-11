import{K as D,o as y,c as k,a,m as v,D as C,Z as E,U as Z,V as J,O as q,i as Q,t as h,ae as I,a1 as L,M as X,F as P,G as A,f as tt,N as et,w as d,d as nt,e as i,u as r,h as ot,g as m,r as w}from"./app-CSNJZ8QW.js";import{i as lt,d as it,_ as at}from"./AppLayout.vue_vue_type_script_setup_true_lang-CGVkiQIe.js";import{_ as S,a as V,b as x,d as B,c as O}from"./CardTitle.vue_vue_type_script_setup_true_lang-CQPMS4r-.js";import{s as M}from"./index-j6TC26Dj.js";import{s as rt}from"./index-JRrGAoN-.js";import{s as F}from"./index-DaY8m5Oa.js";import{f as K}from"./index-DHSVsbhi.js";import{R as Y}from"./index-kE_WQXz6.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-BRJhPBh6.js";import"./index-IR2fhzqm.js";import"./VisuallyHidden-umFdrykb.js";import"./useForwardExpose-BYPBC0la.js";import"./useForwardPropsEmits-C00OBSGp.js";import"./createLucideIcon-C7hrCKxY.js";import"./index-CSEUMRIG.js";import"./index-UrAY3UHo.js";import"./index-0PaNw4Yi.js";import"./index-BFQGDkum.js";import"./index-CT_EkKp1.js";var st=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,dt={root:{position:"relative"}},ut={root:function(e){var n=e.instance,s=e.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":n.checked,"p-disabled":s.disabled,"p-invalid":n.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},gt=D.extend({name:"toggleswitch",style:st,classes:ut,inlineStyles:dt}),ct={name:"BaseToggleSwitch",extends:F,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:gt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},j={name:"ToggleSwitch",extends:ct,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var n=this.checked?this.falseValue:this.trueValue;this.writeValue(n,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var n,s;this.$emit("blur",e),(n=(s=this.formField).onBlur)===null||n===void 0||n.call(s,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return K({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},pt=["data-p-checked","data-p-disabled","data-p"],bt=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],ht=["data-p"],ft=["data-p"];function mt(t,e,n,s,p,o){return y(),k("div",v({class:t.cx("root"),style:t.sx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-disabled":t.disabled,"data-p":o.dataP}),[a("input",v({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":o.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:e[2]||(e[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,bt),a("div",v({class:t.cx("slider")},o.getPTOptions("slider"),{"data-p":o.dataP}),[a("div",v({class:t.cx("handle")},o.getPTOptions("handle"),{"data-p":o.dataP}),[C(t.$slots,"handle",{checked:o.checked})],16,ft)],16,ht)],16,pt)}j.render=mt;var vt=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,yt={root:function(e){var n=e.instance,s=e.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-fluid":s.fluid,"p-togglebutton-sm p-inputfield-sm":s.size==="small","p-togglebutton-lg p-inputfield-lg":s.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},wt=D.extend({name:"togglebutton",style:vt,classes:yt}),kt={name:"BaseToggleButton",extends:F,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:wt,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(t)}function St(t,e,n){return(e=Vt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vt(t){var e=xt(t,"string");return T(e)=="symbol"?e:e+""}function xt(t,e){if(T(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(T(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var R={name:"ToggleButton",extends:kt,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit("change",e))},onBlur:function(e){var n,s;(n=(s=this.formField).onBlur)===null||n===void 0||n.call(s,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return E(this.onLabel)&&E(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return K(St({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:Y}},Bt=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],Ot=["data-p"];function Tt(t,e,n,s,p,o){var c=Z("ripple");return J((y(),k("button",v({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:e[0]||(e[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":t.disabled,"data-p":o.dataP}),[a("span",v({class:t.cx("content")},o.getPTOptions("content"),{"data-p":o.dataP}),[C(t.$slots,"default",{},function(){return[C(t.$slots,"icon",{value:t.d_value,class:q(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(y(),k("span",v({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},o.getPTOptions("icon")),null,16)):Q("",!0)]}),a("span",v({class:t.cx("label")},o.getPTOptions("label")),h(o.label),17)]})],16,Ot)],16,Bt)),[[c]])}R.render=Tt;var Lt=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,Pt={root:function(e){var n=e.props,s=e.instance;return["p-selectbutton p-component",{"p-invalid":s.$invalid,"p-selectbutton-fluid":n.fluid}]}},_t=D.extend({name:"selectbutton",style:Lt,classes:Pt}),Ct={name:"BaseSelectButton",extends:F,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:_t,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function $t(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=H(t))||e){n&&(t=n);var s=0,p=function(){};return{s:p,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(f){throw f},f:p}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,c=!0,g=!1;return{s:function(){n=n.call(t)},n:function(){var f=n.next();return c=f.done,f},e:function(f){g=!0,o=f},f:function(){try{c||n.return==null||n.return()}finally{if(g)throw o}}}}function zt(t){return jt(t)||At(t)||H(t)||It()}function It(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(t,e){if(t){if(typeof t=="string")return N(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}function At(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jt(t){if(Array.isArray(t))return N(t)}function N(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}var _={name:"SelectButton",extends:Ct,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(e){return this.optionLabel?L(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?L(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?L(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?L(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var n=this.isSelected(e);return this.multiple?n&&this.d_value.length===1:n},onOptionSelect:function(e,n,s){var p=this;if(!(this.disabled||this.isOptionDisabled(n)||this.isOptionReadonly(n))){var o=this.isSelected(n),c=this.getOptionValue(n),g;if(this.multiple)if(o){if(g=this.d_value.filter(function(b){return!I(b,c,p.equalityKey)}),!this.allowEmpty&&g.length===0)return}else g=this.d_value?[].concat(zt(this.d_value),[c]):[c];else{if(o&&!this.allowEmpty)return;g=o?null:c}this.writeValue(g,e),this.$emit("change",{originalEvent:e,value:g})}},isSelected:function(e){var n=!1,s=this.getOptionValue(e);if(this.multiple){if(this.d_value){var p=$t(this.d_value),o;try{for(p.s();!(o=p.n()).done;){var c=o.value;if(I(c,s,this.equalityKey)){n=!0;break}}}catch(g){p.e(g)}finally{p.f()}}}else n=I(this.d_value,s,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return K({invalid:this.$invalid})}},directives:{ripple:Y},components:{ToggleButton:R}},Nt=["aria-labelledby","data-p"];function Dt(t,e,n,s,p,o){var c=X("ToggleButton");return y(),k("div",v({class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root"),{"data-p":o.dataP}),[(y(!0),k(P,null,A(t.options,function(g,b){return y(),tt(c,{key:o.getOptionRenderKey(g),modelValue:o.isSelected(g),onLabel:o.getOptionLabel(g),offLabel:o.getOptionLabel(g),disabled:t.disabled||o.isOptionDisabled(g),unstyled:t.unstyled,size:t.size,readonly:o.isOptionReadonly(g),onChange:function($){return o.onOptionSelect($,g,b)},pt:t.ptm("pcToggleButton")},et({_:2},[t.$slots.option?{name:"default",fn:d(function(){return[C(t.$slots,"option",{option:g,index:b},function(){return[a("span",v({ref_for:!0},t.ptm("pcToggleButton").label),h(o.getOptionLabel(g)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,Nt)}_.render=Dt;const Ft={class:"px-4 py-6"},Kt={class:"space-y-8"},Rt={class:"space-y-4"},Ut={class:"flex items-center gap-2"},Et={class:"text-xs text-muted-foreground"},Mt={class:"space-y-2"},qt={class:"flex flex-wrap gap-4"},Yt=["for"],Ht={class:"text-xs text-muted-foreground"},Wt={class:"flex flex-wrap gap-4"},Gt=["for"],Zt={class:"text-xs text-muted-foreground"},Jt={class:"flex items-center gap-4"},Qt={class:"text-sm"},Xt={class:"flex items-center gap-4"},te={class:"text-xs text-muted-foreground"},ee={class:"space-y-2"},ne={class:"text-xs text-muted-foreground"},oe={class:"space-y-2"},le={class:"text-xs text-muted-foreground"},ie={class:"space-y-2"},Oe=nt({__name:"Toggles",setup(t){const e=[{title:"PrimeVue Demos",href:lt().url},{title:"Form",href:it().url},{title:"Toggle Components"}],n=w(!1),s=w([]),p=w(""),o=w(!1),c=w(!1),g=w("One"),b=w([]),f=w("left"),$=["Cheese","Mushroom","Pepper","Onion"],W=[{name:"New York",key:"NY"},{name:"Rome",key:"RM"},{name:"London",key:"LDN"},{name:"Paris",key:"PRS"}],U=["One","Two","Three"],G=[{icon:"pi pi-align-left",value:"left"},{icon:"pi pi-align-center",value:"center"},{icon:"pi pi-align-right",value:"right"},{icon:"pi pi-align-justify",value:"justify"}];return(ae,l)=>(y(),k(P,null,[i(r(ot),{title:"Toggle Components - PrimeVue Demos"}),i(at,{breadcrumbs:e},{default:d(()=>[a("div",Ft,[a("div",Kt,[i(r(S),null,{default:d(()=>[i(r(V),null,{default:d(()=>[i(r(x),null,{default:d(()=>[...l[9]||(l[9]=[m("Checkbox",-1)])]),_:1}),i(r(B),null,{default:d(()=>[...l[10]||(l[10]=[m(" Boolean selection component for single or multiple choices. ",-1)])]),_:1})]),_:1}),i(r(O),{class:"space-y-6"},{default:d(()=>[a("div",Rt,[a("div",Ut,[i(r(M),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),"input-id":"basic",binary:""},null,8,["modelValue"]),l[11]||(l[11]=a("label",{for:"basic",class:"text-sm"},"Accept terms and conditions",-1))]),a("p",Et,"Checked: "+h(n.value),1)]),a("div",Mt,[l[12]||(l[12]=a("label",{class:"text-sm font-medium"},"Multiple Selection",-1)),a("div",qt,[(y(),k(P,null,A($,u=>a("div",{key:u,class:"flex items-center gap-2"},[i(r(M),{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=z=>s.value=z),"input-id":u,value:u},null,8,["modelValue","input-id","value"]),a("label",{for:u,class:"text-sm"},h(u),9,Yt)])),64))]),a("p",Ht," Selected: "+h(s.value.join(", ")||"None"),1)])]),_:1})]),_:1}),i(r(S),null,{default:d(()=>[i(r(V),null,{default:d(()=>[i(r(x),null,{default:d(()=>[...l[13]||(l[13]=[m("RadioButton",-1)])]),_:1}),i(r(B),null,{default:d(()=>[...l[14]||(l[14]=[m(" Single selection from a list of options. ",-1)])]),_:1})]),_:1}),i(r(O),{class:"space-y-4"},{default:d(()=>[a("div",Wt,[(y(),k(P,null,A(W,u=>a("div",{key:u.key,class:"flex items-center gap-2"},[i(r(rt),{modelValue:p.value,"onUpdate:modelValue":l[2]||(l[2]=z=>p.value=z),"input-id":u.key,value:u.name},null,8,["modelValue","input-id","value"]),a("label",{for:u.key,class:"text-sm"},h(u.name),9,Gt)])),64))]),a("p",Zt," Selected: "+h(p.value||"None"),1)]),_:1})]),_:1}),i(r(S),null,{default:d(()=>[i(r(V),null,{default:d(()=>[i(r(x),null,{default:d(()=>[...l[15]||(l[15]=[m("ToggleSwitch",-1)])]),_:1}),i(r(B),null,{default:d(()=>[...l[16]||(l[16]=[m(" Switch component for binary options. ",-1)])]),_:1})]),_:1}),i(r(O),{class:"space-y-6"},{default:d(()=>[a("div",Jt,[i(r(j),{modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=u=>o.value=u)},null,8,["modelValue"]),a("span",Qt,h(o.value?"On":"Off"),1)]),a("div",Xt,[i(r(j),{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=u=>o.value=u),disabled:""},null,8,["modelValue"]),l[17]||(l[17]=a("span",{class:"text-sm text-muted-foreground"},"Disabled",-1))])]),_:1})]),_:1}),i(r(S),null,{default:d(()=>[i(r(V),null,{default:d(()=>[i(r(x),null,{default:d(()=>[...l[18]||(l[18]=[m("ToggleButton",-1)])]),_:1}),i(r(B),null,{default:d(()=>[...l[19]||(l[19]=[m(" Button that toggles between two states. ",-1)])]),_:1})]),_:1}),i(r(O),{class:"space-y-4"},{default:d(()=>[i(r(R),{modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]=u=>c.value=u),"on-label":"Yes","off-label":"No","on-icon":"pi pi-check","off-icon":"pi pi-times"},null,8,["modelValue"]),a("p",te,"Value: "+h(c.value),1)]),_:1})]),_:1}),i(r(S),null,{default:d(()=>[i(r(V),null,{default:d(()=>[i(r(x),null,{default:d(()=>[...l[20]||(l[20]=[m("SelectButton",-1)])]),_:1}),i(r(B),null,{default:d(()=>[...l[21]||(l[21]=[m(" Button group for single or multiple selection. ",-1)])]),_:1})]),_:1}),i(r(O),{class:"space-y-6"},{default:d(()=>[a("div",ee,[l[22]||(l[22]=a("label",{class:"text-sm font-medium"},"Single Selection",-1)),i(r(_),{modelValue:g.value,"onUpdate:modelValue":l[6]||(l[6]=u=>g.value=u),options:U},null,8,["modelValue"]),a("p",ne,"Selected: "+h(g.value),1)]),a("div",oe,[l[23]||(l[23]=a("label",{class:"text-sm font-medium"},"Multiple Selection",-1)),i(r(_),{modelValue:b.value,"onUpdate:modelValue":l[7]||(l[7]=u=>b.value=u),options:U,multiple:""},null,8,["modelValue"]),a("p",le," Selected: "+h(b.value.join(", ")||"None"),1)]),a("div",ie,[l[24]||(l[24]=a("label",{class:"text-sm font-medium"},"With Icons",-1)),i(r(_),{modelValue:f.value,"onUpdate:modelValue":l[8]||(l[8]=u=>f.value=u),options:G,"option-label":"icon","option-value":"value","data-key":"value"},{option:d(({option:u})=>[a("i",{class:q(u.icon)},null,2)]),_:1},8,["modelValue"])])]),_:1})]),_:1})])])]),_:1})],64))}});export{Oe as default};
