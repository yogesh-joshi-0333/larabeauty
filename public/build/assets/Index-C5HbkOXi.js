import{K as O,o as u,c,D as y,m as d,t as V,f as G,O as D,J as Q,i as _,M as X,e as n,a as s,F,G as Y,H as se,au as I,aT as pe,w as o,W as ue,a6 as de,a_ as ce,a$ as W,d as me,u as r,h as fe,g as m,r as M}from"./app-CSNJZ8QW.js";import{i as ve,_ as be}from"./AppLayout.vue_vue_type_script_setup_true_lang-CGVkiQIe.js";import{_ as k,a as $,b as S,d as w,c as P}from"./CardTitle.vue_vue_type_script_setup_true_lang-CQPMS4r-.js";import{s as B}from"./index-CT_EkKp1.js";import{f as N}from"./index-DHSVsbhi.js";import{s as g}from"./index-C-vQ65pc.js";import{s as x}from"./index-s5u4Y-gh.js";import{s as z}from"./index-DGSRqsEm.js";import{s as Z}from"./index-BfVmJGTS.js";import{s as ge}from"./index-Dr3OJPMO.js";import{s as ye}from"./index-DTOmWjJh.js";import{s as U}from"./index-Cb5ZMaSH.js";import{u as he,b as ke}from"./index-Dp3dxHgT.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-BRJhPBh6.js";import"./index-IR2fhzqm.js";import"./VisuallyHidden-umFdrykb.js";import"./useForwardExpose-BYPBC0la.js";import"./useForwardPropsEmits-C00OBSGp.js";import"./createLucideIcon-C7hrCKxY.js";import"./index-CSEUMRIG.js";import"./index-6WkSBqz6.js";import"./index-BFQGDkum.js";import"./index-DaY8m5Oa.js";import"./index-CQQAICkn.js";import"./index-kE_WQXz6.js";var $e=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,Se={root:function(t){var a=t.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},we=O.extend({name:"avatar",style:$e,classes:Se}),Pe={name:"BaseAvatar",extends:B,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:we,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function J(e,t,a){return(t=xe(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function xe(e){var t=ze(e,"string");return A(t)=="symbol"?t:t+""}function ze(e,t){if(A(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var p=a.call(e,t);if(A(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var v={name:"Avatar",extends:Pe,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return N(J(J({},this.shape,this.shape),this.size,this.size))}}},Le=["aria-labelledby","aria-label","data-p"],Oe=["data-p"],Be=["data-p"],_e=["src","alt","data-p"];function Ie(e,t,a,p,f,l){return u(),c("div",d({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":l.dataP}),[y(e.$slots,"default",{},function(){return[e.label?(u(),c("span",d({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":l.dataP}),V(e.label),17,Oe)):e.$slots.icon?(u(),G(Q(e.$slots.icon),{key:1,class:D(e.cx("icon"))},null,8,["class"])):e.icon?(u(),c("span",d({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":l.dataP}),null,16,Be)):e.image?(u(),c("img",d({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return l.onError&&l.onError.apply(l,arguments)})},e.ptm("image"),{"data-p":l.dataP}),null,16,_e)):_("",!0)]})],16,Le)}v.render=Ie;var Ae={root:"p-avatar-group p-component"},Ce=O.extend({name:"avatargroup",classes:Ae}),Ee={name:"BaseAvatarGroup",extends:B,style:Ce,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},ee={name:"AvatarGroup",extends:Ee,inheritAttrs:!1};function Te(e,t,a,p,f,l){return u(),c("div",d({class:e.cx("root")},e.ptmi("root")),[y(e.$slots,"default")],16)}ee.render=Te;var je=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,Me={root:"p-overlaybadge"},Ge=O.extend({name:"overlaybadge",style:je,classes:Me}),Ve={name:"OverlayBadge",extends:g,style:Ge,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},K={name:"OverlayBadge",extends:Ve,inheritAttrs:!1,components:{Badge:g}};function De(e,t,a,p,f,l){var b=X("Badge");return u(),c("div",d({class:e.cx("root")},e.ptmi("root")),[y(e.$slots,"default"),n(b,d(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}K.render=De;var Ne=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,Ue={root:{position:"relative"}},Ke={root:function(t){var a=t.props;return["p-skeleton p-component",{"p-skeleton-circle":a.shape==="circle","p-skeleton-animation-none":a.animation==="none"}]}},Re=O.extend({name:"skeleton",style:Ne,classes:Ke,inlineStyles:Ue}),Xe={name:"BaseSkeleton",extends:B,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Re,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function Fe(e,t,a){return(t=We(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function We(e){var t=Ze(e,"string");return C(t)=="symbol"?t:t+""}function Ze(e,t){if(C(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var p=a.call(e,t);if(C(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L={name:"Skeleton",extends:Xe,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return N(Fe({},this.shape,this.shape))}}},Je=["data-p"];function qe(e,t,a,p,f,l){return u(),c("div",d({class:e.cx("root"),style:[e.sx("root"),l.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":l.dataP}),null,16,Je)}L.render=qe;var He=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,Qe={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ye=O.extend({name:"progressspinner",style:He,classes:Qe}),et={name:"BaseProgressSpinner",extends:B,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Ye,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},R={name:"ProgressSpinner",extends:et,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},tt=["fill","stroke-width"];function nt(e,t,a,p,f,l){return u(),c("div",d({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(u(),c("svg",d({class:e.cx("spin"),viewBox:"25 25 50 50",style:l.svgStyle},e.ptm("spin")),[s("circle",d({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,tt)],16))],16)}R.render=nt;var rt=`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`,at={root:function(t){var a=t.props;return["p-metergroup p-component",{"p-metergroup-horizontal":a.orientation==="horizontal","p-metergroup-vertical":a.orientation==="vertical"}]},meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:function(t){var a=t.props;return["p-metergroup-label-list",{"p-metergroup-label-list-vertical":a.labelOrientation==="vertical","p-metergroup-label-list-horizontal":a.labelOrientation==="horizontal"}]},label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},it=O.extend({name:"metergroup",style:rt,classes:at}),ot={name:"MeterGroup",extends:B,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:it,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function lt(e,t,a){return(t=st(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function st(e){var t=pt(e,"string");return E(t)=="symbol"?t:t+""}function pt(e,t){if(E(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var p=a.call(e,t);if(E(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var te={name:"MeterGroupLabel",hostName:"MeterGroup",extends:B,inheritAttrs:!1,inject:["$pcMeterGroup"],props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},computed:{dataP:function(){return N(lt({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},ut=["data-p"];function dt(e,t,a,p,f,l){return u(),c("ol",d({class:e.cx("labelList"),"data-p":l.dataP},e.ptm("labelList")),[(u(!0),c(F,null,Y(a.value,function(b,h){return u(),c("li",d({key:h+"_label",class:e.cx("label")},{ref_for:!0},e.ptm("label")),[y(e.$slots,"icon",{value:b,class:D(e.cx("labelIcon"))},function(){return[b.icon?(u(),c("i",d({key:0,class:[b.icon,e.cx("labelIcon")],style:{color:b.color}},{ref_for:!0},e.ptm("labelIcon")),null,16)):(u(),c("span",d({key:1,class:e.cx("labelMarker"),style:{backgroundColor:b.color}},{ref_for:!0},e.ptm("labelMarker")),null,16))]}),s("span",d({class:e.cx("labelText")},{ref_for:!0},e.ptm("labelText")),V(b.label)+" ("+V(e.$parentInstance.percentValue(b.value))+")",17)],16)}),128))],16,ut)}te.render=dt;function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function ct(e,t,a){return(t=mt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function mt(e){var t=ft(e,"string");return T(t)=="symbol"?t:t+""}function ft(e,t){if(T(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var p=a.call(e,t);if(T(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ne={name:"MeterGroup",extends:ot,inheritAttrs:!1,methods:{getPTOptions:function(t,a,p){return this.ptm(t,{context:{value:a,index:p}})},percent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=(t-this.min)/(this.max-this.min)*100;return Math.max(0,Math.min(100,a))},roundedPercent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.round(this.percent(t))},percentValue:function(t){return this.roundedPercent(t)+"%"},meterCalculatedStyles:function(t){return{backgroundColor:t.color,width:this.orientation==="horizontal"&&this.percent(t.value)+"%",height:this.orientation==="vertical"&&this.percent(t.value)+"%"}}},computed:{totalPercent:function(){return this.roundedPercent(this.value.reduce(function(t,a){return t+a.value},0))},percentages:function(){var t=0,a=[];return this.value.forEach(function(p){t+=p.value,a.push(t)}),a},dataP:function(){return N(ct({},this.orientation,this.orientation))}},components:{MeterGroupLabel:te}},vt=["aria-valuemin","aria-valuemax","aria-valuenow","data-p"],bt=["data-p"],gt=["data-p"];function yt(e,t,a,p,f,l){var b=X("MeterGroupLabel");return u(),c("div",d({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":l.totalPercent,"data-p":l.dataP},e.ptmi("root")),[e.labelPosition==="start"?y(e.$slots,"label",{key:0,value:e.value,totalPercent:l.totalPercent,percentages:l.percentages},function(){return[n(b,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):_("",!0),y(e.$slots,"start",{value:e.value,totalPercent:l.totalPercent,percentages:l.percentages}),s("div",d({class:e.cx("meters"),"data-p":l.dataP},e.ptm("meters")),[(u(!0),c(F,null,Y(e.value,function(h,i){return y(e.$slots,"meter",{key:i,value:h,index:i,class:D(e.cx("meter")),orientation:e.orientation,size:l.percentValue(h.value),totalPercent:l.totalPercent},function(){return[l.roundedPercent(h.value)?(u(),c("span",d({key:0,class:e.cx("meter"),style:l.meterCalculatedStyles(h),"data-p":l.dataP},{ref_for:!0},l.getPTOptions("meter",h,i)),null,16,gt)):_("",!0)]})}),128))],16,bt),y(e.$slots,"end",{value:e.value,totalPercent:l.totalPercent,percentages:l.percentages}),e.labelPosition==="end"?y(e.$slots,"label",{key:1,value:e.value,totalPercent:l.totalPercent,percentages:l.percentages},function(){return[n(b,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):_("",!0)],16,vt)}ne.render=yt;var ht=`
    .p-inplace-display {
        display: inline-block;
        cursor: pointer;
        border: 1px solid transparent;
        padding: dt('inplace.padding');
        border-radius: dt('inplace.border.radius');
        transition:
            background dt('inplace.transition.duration'),
            color dt('inplace.transition.duration'),
            outline-color dt('inplace.transition.duration'),
            box-shadow dt('inplace.transition.duration');
        outline-color: transparent;
    }

    .p-inplace-display:not(.p-disabled):hover {
        background: dt('inplace.display.hover.background');
        color: dt('inplace.display.hover.color');
    }

    .p-inplace-display:focus-visible {
        box-shadow: dt('inplace.focus.ring.shadow');
        outline: dt('inplace.focus.ring.width') dt('inplace.focus.ring.style') dt('inplace.focus.ring.color');
        outline-offset: dt('inplace.focus.ring.offset');
    }

    .p-inplace-content {
        display: block;
    }
`,kt={root:"p-inplace p-component",display:function(t){var a=t.props;return["p-inplace-display",{"p-disabled":a.disabled}]},content:"p-inplace-content"},$t=O.extend({name:"inplace",style:ht,classes:kt}),St={name:"BaseInplace",extends:B,props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},displayProps:{type:null,default:null}},style:$t,provide:function(){return{$pcInplace:this,$parentInstance:this}}},re={name:"Inplace",extends:St,inheritAttrs:!1,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(t){this.d_active=t}},methods:{open:function(t){this.disabled||(this.d_active=!0,this.$emit("open",t),this.$emit("update:active",!0))},close:function(t){var a=this;this.d_active=!1,this.$emit("close",t),this.$emit("update:active",!1),setTimeout(function(){a.$refs.display.focus()},0)}}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),a.push.apply(a,p)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?q(Object(a),!0).forEach(function(p){wt(e,p,a[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach(function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(a,p))})}return e}function wt(e,t,a){return(t=Pt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Pt(e){var t=xt(e,"string");return j(t)=="symbol"?t:t+""}function xt(e,t){if(j(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var p=a.call(e,t);if(j(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zt=["tabindex","data-p-disabled"];function Lt(e,t,a,p,f,l){return u(),c("div",d({class:e.cx("root"),"aria-live":"polite"},e.ptmi("root")),[f.d_active?(u(),c("div",d({key:1,class:e.cx("content")},e.ptm("content")),[y(e.$slots,"content",{closeCallback:l.close})],16)):(u(),c("div",d({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:t[0]||(t[0]=function(){return l.open&&l.open.apply(l,arguments)}),onKeydown:t[1]||(t[1]=se(function(){return l.open&&l.open.apply(l,arguments)},["enter"])),"data-p-disabled":e.disabled},H(H({},e.displayProps),e.ptm("display"))),[y(e.$slots,"display")],16,zt))],16)}re.render=Lt;var Ot=`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 300ms;
    }

    .p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 300ms;
    }
`,Bt={root:function(t){var a=t.props;return["p-scrolltop",{"p-scrolltop-sticky":a.target!=="window"}]},icon:"p-scrolltop-icon"},_t=O.extend({name:"scrolltop",style:Ot,classes:Bt}),It={name:"BaseScrollTop",extends:B,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:_t,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},ae={name:"ScrollTop",extends:It,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(I.clear(this.container),this.overlay=null)},methods:{onClick:function(){var t=this.target==="window"?window:this.$el.parentElement;t.scroll({top:0,behavior:this.behavior})},checkVisibility:function(t){t>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var t=this;this.scrollListener=function(){t.checkVisibility(t.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var t=this;this.scrollListener=function(){t.checkVisibility(pe())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(t){I.set("overlay",t,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(t){I.clear(t)},containerRef:function(t){this.container=t?t.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:ye,Button:U}};function At(e,t,a,p,f,l){var b=X("Button");return u(),G(ue,d({name:"p-scrolltop",appear:"",onEnter:l.onEnter,onAfterLeave:l.onAfterLeave},e.ptm("transition")),{default:o(function(){return[f.visible?(u(),G(b,d({key:0,ref:l.containerRef,class:e.cx("root"),onClick:l.onClick,"aria-label":l.scrollTopAriaLabel,unstyled:e.unstyled},e.buttonProps,{pt:e.ptm("root")}),{icon:o(function(h){return[y(e.$slots,"icon",{class:D(e.cx("icon"))},function(){return[(u(),G(Q(e.icon?"span":"ChevronUpIcon"),d({class:[e.cx("icon"),e.icon,h.class]},e.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):_("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}ae.render=At;var Ct=`
    .p-blockui {
        position: relative;
    }

    .p-blockui-mask {
        border-radius: dt('blockui.border.radius');
    }

    .p-blockui-mask.p-overlay-mask {
        position: absolute;
    }

    .p-blockui-mask-document.p-overlay-mask {
        position: fixed;
    }
`,Et={root:"p-blockui"},Tt=O.extend({name:"blockui",style:Ct,classes:Et}),jt={name:"BaseBlockUI",extends:B,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:Tt,provide:function(){return{$pcBlockUI:this,$parentInstance:this}}},ie={name:"BlockUI",extends:jt,inheritAttrs:!1,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(t){t===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var t="p-blockui-mask p-overlay-mask p-overlay-mask-enter-active";this.fullScreen?(t+=" p-blockui-mask-document",this.mask=W("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),ke(),document.activeElement.blur()):(this.mask=W("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&I.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var t=this;if(this.mask){!this.isUnstyled&&de(this.mask,"p-overlay-mask-leave-active");var a=function(){clearTimeout(p),t.mask.removeEventListener("animationend",a),t.mask.removeEventListener("webkitAnimationEnd",a)},p=setTimeout(function(){t.removeMask()},300);ce(this.mask)>0&&(this.mask.addEventListener("animationend",a),this.mask.addEventListener("webkitAnimationEnd",a))}else this.removeMask()},removeMask:function(){if(I.clear(this.mask),this.fullScreen)document.body.removeChild(this.mask),he();else{var t;(t=this.$refs.container)===null||t===void 0||t.removeChild(this.mask)}this.isBlocked=!1,this.$emit("unblock")}}},Mt=["aria-busy"];function Gt(e,t,a,p,f,l){return u(),c("div",d({ref:"container",class:e.cx("root"),"aria-busy":f.isBlocked},e.ptmi("root")),[y(e.$slots,"default")],16,Mt)}ie.render=Gt;const Vt={class:"px-4 py-6"},Dt={class:"space-y-8"},Nt={class:"space-y-2"},Ut={class:"flex flex-wrap items-center gap-4"},Kt={class:"space-y-2"},Rt={class:"flex flex-wrap items-center gap-4"},Xt={class:"space-y-2"},Ft={class:"flex flex-wrap items-center gap-4"},Wt={class:"space-y-2"},Zt={class:"space-y-2"},Jt={class:"flex flex-wrap items-center gap-4"},qt={class:"space-y-2"},Ht={class:"flex flex-wrap items-center gap-4"},Qt={class:"space-y-2"},Yt={class:"flex flex-wrap items-center gap-8"},en={class:"flex flex-wrap gap-2"},tn={class:"flex flex-wrap gap-2"},nn={class:"flex flex-wrap gap-2"},rn={class:"flex flex-wrap gap-2"},an={class:"mt-4 flex flex-wrap gap-2"},on={class:"space-y-2"},ln={class:"flex items-center gap-4"},sn={class:"flex-1 space-y-2"},pn={class:"grid grid-cols-3 gap-4"},un={class:"space-y-2"},dn={class:"space-y-2"},cn={class:"space-y-2"},mn={class:"flex items-center gap-4"},fn={class:"cursor-pointer text-primary hover:underline"},vn={class:"inline-flex items-center gap-2"},Nn=me({__name:"Index",setup(e){const t=[{title:"PrimeVue Demos",href:ve().url},{title:"Misc"}],a=M(!1),p=M("Click to Edit"),f=M(50),l=M([{label:"Apps",value:25,color:"#6366f1"},{label:"Messages",value:15,color:"#22c55e"},{label:"Media",value:20,color:"#f59e0b"},{label:"System",value:10,color:"#ef4444"}]),b=()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)};return(h,i)=>(u(),c(F,null,[n(r(fe),{title:"Misc Components - PrimeVue Demos"}),n(be,{breadcrumbs:t},{default:o(()=>[s("div",Vt,[s("div",Dt,[n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[1]||(i[1]=[m("Avatar",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[2]||(i[2]=[m(" Avatar component for displaying user images, icons, or labels. ",-1)])]),_:1})]),_:1}),n(r(P),{class:"space-y-6"},{default:o(()=>[s("div",Nt,[i[3]||(i[3]=s("label",{class:"text-sm font-medium"},"Labels",-1)),s("div",Ut,[n(r(v),{label:"P"}),n(r(v),{label:"V",shape:"circle"}),n(r(v),{label:"U",size:"large"}),n(r(v),{label:"X",size:"xlarge",shape:"circle"})])]),s("div",Kt,[i[4]||(i[4]=s("label",{class:"text-sm font-medium"},"Icons",-1)),s("div",Rt,[n(r(v),{icon:"pi pi-user"}),n(r(v),{icon:"pi pi-user",shape:"circle"}),n(r(v),{icon:"pi pi-user",size:"large"}),n(r(v),{icon:"pi pi-user",size:"xlarge",shape:"circle"})])]),s("div",Xt,[i[5]||(i[5]=s("label",{class:"text-sm font-medium"},"Images",-1)),s("div",Ft,[n(r(v),{image:"https://i.pravatar.cc/150?img=1",shape:"circle"}),n(r(v),{image:"https://i.pravatar.cc/150?img=2",size:"large",shape:"circle"}),n(r(v),{image:"https://i.pravatar.cc/150?img=3",size:"xlarge",shape:"circle"})])]),s("div",Wt,[i[6]||(i[6]=s("label",{class:"text-sm font-medium"},"Avatar Group",-1)),n(r(ee),null,{default:o(()=>[n(r(v),{image:"https://i.pravatar.cc/150?img=4",shape:"circle"}),n(r(v),{image:"https://i.pravatar.cc/150?img=5",shape:"circle"}),n(r(v),{image:"https://i.pravatar.cc/150?img=6",shape:"circle"}),n(r(v),{image:"https://i.pravatar.cc/150?img=7",shape:"circle"}),n(r(v),{label:"+2",shape:"circle"})]),_:1})])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[7]||(i[7]=[m("Badge",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[8]||(i[8]=[m(" Small status indicators and notification badges. ",-1)])]),_:1})]),_:1}),n(r(P),{class:"space-y-6"},{default:o(()=>[s("div",Zt,[i[9]||(i[9]=s("label",{class:"text-sm font-medium"},"Severities",-1)),s("div",Jt,[n(r(g),{value:"2"}),n(r(g),{value:"8",severity:"secondary"}),n(r(g),{value:"4",severity:"success"}),n(r(g),{value:"12",severity:"info"}),n(r(g),{value:"3",severity:"warn"}),n(r(g),{value:"5",severity:"danger"}),n(r(g),{value:"9",severity:"contrast"})])]),s("div",qt,[i[10]||(i[10]=s("label",{class:"text-sm font-medium"},"Sizes",-1)),s("div",Ht,[n(r(g),{value:"2",size:"small"}),n(r(g),{value:"5"}),n(r(g),{value:"8",size:"large"}),n(r(g),{value:"12",size:"xlarge"})])]),s("div",Qt,[i[13]||(i[13]=s("label",{class:"text-sm font-medium"},"Overlay Badge",-1)),s("div",Yt,[n(r(K),{value:"2"},{default:o(()=>[...i[11]||(i[11]=[s("i",{class:"pi pi-bell text-2xl"},null,-1)])]),_:1}),n(r(K),{value:"4",severity:"danger"},{default:o(()=>[...i[12]||(i[12]=[s("i",{class:"pi pi-envelope text-2xl"},null,-1)])]),_:1})])])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[14]||(i[14]=[m("Chip",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[15]||(i[15]=[m(" Compact element for displaying entities like tags and categories. ",-1)])]),_:1})]),_:1}),n(r(P),{class:"space-y-4"},{default:o(()=>[s("div",en,[n(r(x),{label:"Action"}),n(r(x),{label:"Comedy"}),n(r(x),{label:"Mystery"}),n(r(x),{label:"Thriller",removable:""})]),s("div",tn,[n(r(x),{label:"Amy Elsner",image:"https://i.pravatar.cc/150?img=1"}),n(r(x),{label:"Asiya Javayant",image:"https://i.pravatar.cc/150?img=2"}),n(r(x),{label:"Onyama Limba",image:"https://i.pravatar.cc/150?img=3",removable:""})]),s("div",nn,[n(r(x),{label:"Apple",icon:"pi pi-apple"}),n(r(x),{label:"Facebook",icon:"pi pi-facebook"}),n(r(x),{label:"Google",icon:"pi pi-google"})])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[16]||(i[16]=[m("Tag",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[17]||(i[17]=[m(" Tag component for categorizing content with severity levels. ",-1)])]),_:1})]),_:1}),n(r(P),null,{default:o(()=>[s("div",rn,[n(r(z),{value:"Primary"}),n(r(z),{value:"Secondary",severity:"secondary"}),n(r(z),{value:"Success",severity:"success"}),n(r(z),{value:"Info",severity:"info"}),n(r(z),{value:"Warning",severity:"warn"}),n(r(z),{value:"Danger",severity:"danger"}),n(r(z),{value:"Contrast",severity:"contrast"})]),s("div",an,[n(r(z),{value:"New",icon:"pi pi-check"}),n(r(z),{value:"Sale",icon:"pi pi-percentage",severity:"success"}),n(r(z),{value:"Featured",icon:"pi pi-star",severity:"warn",rounded:""})])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[18]||(i[18]=[m("Skeleton",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[19]||(i[19]=[m(" Placeholder animation for loading content. ",-1)])]),_:1})]),_:1}),n(r(P),{class:"space-y-6"},{default:o(()=>[s("div",on,[n(r(L),{width:"100%",height:"2rem"}),n(r(L),{width:"75%",height:"1rem"}),n(r(L),{width:"50%",height:"1rem"})]),s("div",ln,[n(r(L),{shape:"circle",size:"4rem"}),s("div",sn,[n(r(L),{width:"100%",height:"1rem"}),n(r(L),{width:"75%",height:"1rem"})])]),s("div",pn,[n(r(L),{height:"8rem"}),n(r(L),{height:"8rem"}),n(r(L),{height:"8rem"})])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[20]||(i[20]=[m("Progress",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[21]||(i[21]=[m(" ProgressBar and ProgressSpinner components for loading states. ",-1)])]),_:1})]),_:1}),n(r(P),{class:"space-y-6"},{default:o(()=>[s("div",un,[i[22]||(i[22]=s("label",{class:"text-sm font-medium"},"ProgressBar",-1)),n(r(Z),{value:f.value},null,8,["value"])]),s("div",dn,[i[23]||(i[23]=s("label",{class:"text-sm font-medium"},"Indeterminate",-1)),n(r(Z),{mode:"indeterminate",style:{height:"6px"}})]),s("div",cn,[i[24]||(i[24]=s("label",{class:"text-sm font-medium"},"ProgressSpinner",-1)),s("div",mn,[n(r(R),{style:{width:"50px",height:"50px"},"stroke-width":"4"}),n(r(R),{style:{width:"50px",height:"50px"},"stroke-width":"8"})])])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[25]||(i[25]=[m("MeterGroup",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[26]||(i[26]=[m(" Group of horizontal meters for showing usage or distribution. ",-1)])]),_:1})]),_:1}),n(r(P),null,{default:o(()=>[n(r(ne),{value:l.value},null,8,["value"])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[27]||(i[27]=[m("Inplace",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[28]||(i[28]=[m(" Component for inline editing with display and edit modes. ",-1)])]),_:1})]),_:1}),n(r(P),{class:"space-y-4"},{default:o(()=>[n(r(re),null,{display:o(()=>[s("span",fn,V(p.value||"Click to Edit"),1)]),content:o(({closeCallback:oe})=>[s("span",vn,[n(r(ge),{modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=le=>p.value=le),"auto-focus":""},null,8,["modelValue"]),n(r(U),{icon:"pi pi-check",text:"",onClick:oe},null,8,["onClick"])])]),_:1})]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[29]||(i[29]=[m("BlockUI",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[30]||(i[30]=[m(" Overlay component for blocking user interaction during loading. ",-1)])]),_:1})]),_:1}),n(r(P),null,{default:o(()=>[n(r(U),{label:"Block Panel",onClick:b}),n(r(ie),{blocked:a.value,class:"mt-4"},{default:o(()=>[...i[31]||(i[31]=[s("div",{class:"rounded-lg border p-6"},[s("h4",{class:"mb-2 font-medium"},"Panel Content"),s("p",{class:"text-muted-foreground"}," This panel will be blocked for 3 seconds when you click the button. ")],-1)])]),_:1},8,["blocked"])]),_:1})]),_:1}),n(r(k),null,{default:o(()=>[n(r($),null,{default:o(()=>[n(r(S),null,{default:o(()=>[...i[32]||(i[32]=[m("ScrollTop",-1)])]),_:1}),n(r(w),null,{default:o(()=>[...i[33]||(i[33]=[m(" Button to scroll back to top of the page or container. ",-1)])]),_:1})]),_:1}),n(r(P),null,{default:o(()=>[i[34]||(i[34]=s("p",{class:"text-muted-foreground"}," Scroll down the page to see the ScrollTop button appear in the bottom-right corner. ",-1)),n(r(ae))]),_:1})]),_:1})])])]),_:1})],64))}});export{Nn as default};
