import{K as q,as as re,at as De,av as Te,a0 as te,au as D,ac as be,S as P,Y as X,Q as K,m,aW as T,U as $,o as c,c as d,a as x,V as U,f as v,O,J as M,i as I,t as H,M as C,w as p,e as h,W as Y,D as S,F as L,G as V,g as A,Z as k,aJ as Q,L as F,aL as ae,ay as Ve,n as He,p as ze,a9 as Re,aa as Be,aX as Ne,aY as _e,ae as R,a7 as J,aZ as oe,aE as pe,d as je,X as Ge,u as b,h as Ue,r as ne}from"./app-CSNJZ8QW.js";import{i as We,_ as Ze}from"./AppLayout.vue_vue_type_script_setup_true_lang-CGVkiQIe.js";import{_ as B,a as N,b as _,d as j,c as G}from"./CardTitle.vue_vue_type_script_setup_true_lang-CQPMS4r-.js";import{O as qe}from"./index-CQT7-QQ1.js";import{s as Ie}from"./index-C0K7Fq_-.js";import{s as E}from"./index-CT_EkKp1.js";import{R as ee}from"./index-kE_WQXz6.js";import{f as ge}from"./index-DHSVsbhi.js";import{s as Ye}from"./index-BzIZTrEF.js";import{s as Xe}from"./index-BMvu3bWZ.js";import{s as ve}from"./index-DCXcy1j1.js";import{s as ue}from"./index-C8g6ud3J.js";import{s as se}from"./index-gWLxAEVL.js";import{s as ye}from"./index-DdmMCUNb.js";import{s as le}from"./index-Cb5ZMaSH.js";import{s as Je}from"./index-CkK1fokY.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-BRJhPBh6.js";import"./index-IR2fhzqm.js";import"./VisuallyHidden-umFdrykb.js";import"./useForwardExpose-BYPBC0la.js";import"./useForwardPropsEmits-C00OBSGp.js";import"./createLucideIcon-C7hrCKxY.js";import"./index-CSEUMRIG.js";import"./index-CQQAICkn.js";import"./index-C-vQ65pc.js";import"./index-UrAY3UHo.js";import"./index-C9mT4Feg.js";import"./index-6WkSBqz6.js";var Qe=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,$e={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},et=q.extend({name:"menu",style:Qe,classes:$e}),tt={name:"BaseMenu",extends:E,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:et,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ke={name:"Menuitem",hostName:"Menu",extends:E,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?T(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:m({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:m({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:m({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return ge({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:ee}},nt=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],it=["data-p"],rt=["href","target"],at=["data-p"],st=["data-p"];function ot(t,e,n,r,s,i){var l=$("ripple");return i.visible()?(c(),d("li",m({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[x("div",m({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(u){return i.onItemClick(u)}),onMousemove:e[1]||(e[1]=function(u){return i.onItemMouseMove(u)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(c(),v(M(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):I("",!0):U((c(),d("a",m({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(c(),v(M(n.templates.itemicon),{key:0,item:n.item,class:O(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(c(),d("span",m({key:1,class:[t.cx("itemIcon"),n.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,at)):I("",!0),x("span",m({class:t.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),H(i.label()),17,st)],16,rt)),[[l]])],16,it)],16,nt)):I("",!0)}ke.render=ot;function me(t){return ct(t)||mt(t)||lt(t)||ut()}function ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(t,e){if(t){if(typeof t=="string")return ie(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(t,e):void 0}}function mt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ct(t){if(Array.isArray(t))return ie(t)}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var xe={name:"Menu",extends:tt,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&D.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(P(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)P(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(X(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=K(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),r=n&&K(n,'a[data-pc-section="itemlink"]');this.popup&&P(this.target),r?r.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=X(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),r=me(n).findIndex(function(s){return s.id===e});return r>-1?r+1:0},findPrevOptionIndex:function(e){var n=X(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),r=me(n).findIndex(function(s){return s.id===e});return r>-1?r-1:0},changeFocusedOptionIndex:function(e){var n=X(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),r=e>=n.length?n.length-1:e<0?0:e;r>-1&&(this.focusedOptionIndex=n[r].getAttribute("id"))},toggle:function(e,n){this.overlayVisible?this.hide():this.show(e,n)},show:function(e,n){this.overlayVisible=!0,this.target=n??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){be(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&D.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&P(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&D.clear(e)},alignOverlay:function(){Te(this.container,this.target);var e=te(this.target);e>te(this.container)&&(this.container.style.minWidth=te(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var r=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&r&&s?e.hide():!e.popup&&r&&s&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new De(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!re()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){qe.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return ge({popup:this.popup})}},components:{PVMenuitem:ke,Portal:Ie}},dt=["id","data-p"],ft=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],ht=["id"];function bt(t,e,n,r,s,i){var l=C("PVMenuitem"),u=C("Portal");return c(),v(u,{appendTo:t.appendTo,disabled:!t.popup},{default:p(function(){return[h(Y,m({name:"p-anchored-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:p(function(){return[!t.popup||s.overlayVisible?(c(),d("div",m({key:0,ref:i.containerRef,id:t.$id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},t.ptmi("root")),[t.$slots.start?(c(),d("div",m({key:0,class:t.cx("start")},t.ptm("start")),[S(t.$slots,"start")],16)):I("",!0),x("ul",m({ref:i.listRef,id:t.$id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(c(!0),d(L,null,V(t.model,function(a,o){return c(),d(L,{key:i.label(a)+o.toString()},[a.items&&i.visible(a)&&!a.separator?(c(),d(L,{key:0},[a.items?(c(),d("li",m({key:0,id:t.$id+"_"+o,class:[t.cx("submenuLabel"),a.class],role:"none"},{ref_for:!0},t.ptm("submenuLabel")),[S(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:a},function(){return[A(H(i.label(a)),1)]})],16,ht)):I("",!0),(c(!0),d(L,null,V(a.items,function(f,g){return c(),d(L,{key:f.label+o+"_"+g},[i.visible(f)&&!f.separator?(c(),v(l,{key:0,id:t.$id+"_"+o+"_"+g,item:f,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(f)&&f.separator?(c(),d("li",m({key:"separator"+o+g,class:[t.cx("separator"),a.class],style:f.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):I("",!0)],64)}),128))],64)):i.visible(a)&&a.separator?(c(),d("li",m({key:"separator"+o.toString(),class:[t.cx("separator"),a.class],style:a.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):(c(),v(l,{key:i.label(a)+o.toString(),id:t.$id+"_"+o,item:a,index:o,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ft),t.$slots.end?(c(),d("div",m({key:1,class:t.cx("end")},t.ptm("end")),[S(t.$slots,"end")],16)):I("",!0)],16,dt)):I("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}xe.render=bt;var pt=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`,It={submenu:function(e){var n=e.instance,r=e.processedItem;return{display:n.isItemActive(r)?"flex":"none"}}},gt={root:function(e){var n=e.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var n=e.instance,r=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":n.isItemActive(r),"p-focus":n.isItemFocused(r),"p-disabled":n.isItemDisabled(r)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},vt=q.extend({name:"menubar",style:pt,classes:gt,inlineStyles:It}),yt={name:"BaseMenubar",extends:E,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:vt,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},Pe={name:"MenubarSub",hostName:"Menubar",extends:E,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,r){return e&&e.item?T(e.item[n],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,r){return this.ptm(r,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return k(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,n){return{action:m({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:m({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:m({class:this.cx("itemLabel")},this.getPTOptions(e,n,"itemLabel")),submenuicon:m({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&e.getItemProp(n,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length}},components:{AngleRightIcon:ve,AngleDownIcon:Xe},directives:{ripple:ee}},kt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],xt=["onClick","onMouseenter","onMousemove"],Pt=["href","target"],Lt=["id"],wt=["id"];function Kt(t,e,n,r,s,i){var l=C("MenubarSub",!0),u=$("ripple");return c(),d("ul",m({class:n.level===0?t.cx("rootList"):t.cx("submenu")},n.level===0?t.ptm("rootList"):t.ptm("submenu")),[(c(!0),d(L,null,V(n.items,function(a,o){return c(),d(L,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(c(),d("li",m({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[t.cx("item",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-setsize":i.getAriaSetSize,"aria-posinset":i.getAriaPosInset(o)},{ref_for:!0},i.getPTOptions(a,o,"item"),{"data-p-active":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[x("div",m({class:t.cx("itemContent"),onClick:function(g){return i.onItemClick(g,a)},onMouseenter:function(g){return i.onItemMouseEnter(g,a)},onMousemove:function(g){return i.onItemMouseMove(g,a)}},{ref_for:!0},i.getPTOptions(a,o,"itemContent")),[n.templates.item?(c(),v(M(n.templates.item),{key:1,item:a.item,root:n.root,hasSubmenu:i.getItemProp(a,"items"),label:i.getItemLabel(a),props:i.getMenuItemProps(a,o)},null,8,["item","root","hasSubmenu","label","props"])):U((c(),d("a",m({key:0,href:i.getItemProp(a,"url"),class:t.cx("itemLink"),target:i.getItemProp(a,"target"),tabindex:"-1"},{ref_for:!0},i.getPTOptions(a,o,"itemLink")),[n.templates.itemicon?(c(),v(M(n.templates.itemicon),{key:0,item:a.item,class:O(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(a,"icon")?(c(),d("span",m({key:1,class:[t.cx("itemIcon"),i.getItemProp(a,"icon")]},{ref_for:!0},i.getPTOptions(a,o,"itemIcon")),null,16)):I("",!0),x("span",m({id:i.getItemLabelId(a),class:t.cx("itemLabel")},{ref_for:!0},i.getPTOptions(a,o,"itemLabel")),H(i.getItemLabel(a)),17,Lt),i.getItemProp(a,"items")?(c(),d(L,{key:2},[n.templates.submenuicon?(c(),v(M(n.templates.submenuicon),{key:0,root:n.root,active:i.isItemActive(a),class:O(t.cx("submenuIcon"))},null,8,["root","active","class"])):(c(),v(M(n.root?"AngleDownIcon":"AngleRightIcon"),m({key:1,class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions(a,o,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,Pt)),[[u]])],16,xt),i.isItemVisible(a)&&i.isItemGroup(a)?(c(),v(l,{key:0,id:i.getItemId(a)+"_list",menuId:n.menuId,role:"menu",style:Ve(t.sx("submenu",!0,{processedItem:a})),focusedItemId:n.focusedItemId,items:a.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,"aria-labelledby":i.getItemLabelId(a),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(f){return t.$emit("item-click",f)}),onItemMouseenter:e[1]||(e[1]=function(f){return t.$emit("item-mouseenter",f)}),onItemMousemove:e[2]||(e[2]=function(f){return t.$emit("item-mousemove",f)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):I("",!0)],16,kt)):I("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(c(),d("li",m({key:1,id:i.getItemId(a),class:[t.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,wt)):I("",!0)],64)}),128))],16)}Pe.render=Kt;var Le={name:"Menubar",extends:yt,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){k(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&D.clear(this.container),this.container=null},methods:{getItemProp:function(e,n){return e?T(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return k(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&k(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,D.clear(this.menubar),this.hide()):(this.mobileActive=!0,D.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){P(this.menubar)},hide:function(e,n){var r=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){P(r.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&P(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ae(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var r=e.processedItem,s=e.isFocus;if(!F(r)){var i=r.index,l=r.key,u=r.level,a=r.parentKey,o=r.items,f=k(o),g=this.activeItemPath.filter(function(w){return w.parentKey!==a&&w.parentKey!==l});f&&g.push(r),this.focusedItemInfo={index:i,level:u,parentKey:a},f&&(this.dirty=!0),s&&P(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=g)}},onItemClick:function(e){var n=e.originalEvent,r=e.processedItem,s=this.isProccessedItemGroup(r),i=F(r.parent),l=this.isSelected(r);if(l){var u=r.index,a=r.key,o=r.level,f=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(w){return a!==w.key&&a.startsWith(w.key)}),this.focusedItemInfo={index:u,level:o,parentKey:f},this.dirty=!i,P(this.menubar)}else if(s)this.onItemChange(e);else{var g=i?r:this.activeItemPath.find(function(w){return w.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,g?g.index:-1),this.mobileActive=!1,P(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],r=n?F(n.parent):null;if(r){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var n=this,r=this.visibleItems[this.focusedItemInfo.index],s=F(r.parent);if(s){var i=this.isProccessedItemGroup(r);if(i){this.onItemChange({originalEvent:e,processedItem:r}),this.focusedItemInfo={index:-1,parentKey:r.key};var l=this.findLastItemIndex();this.changeFocusedItemIndex(e,l)}}else{var u=this.activeItemPath.find(function(o){return o.key===r.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:u?u.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==n.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey:function(e){var n=this,r=this.visibleItems[this.focusedItemInfo.index],s=r?this.activeItemPath.find(function(l){return l.key===r.parentKey}):null;if(s)this.onItemChange({originalEvent:e,processedItem:s}),this.activeItemPath=this.activeItemPath.filter(function(l){return l.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],r=n?this.activeItemPath.find(function(l){return l.key===n.parentKey}):null;if(r){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=K(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=n&&K(n,'a[data-pc-section="itemlink"]');r?r.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(s);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);!r&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var r=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));r&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){re()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return Q(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var n=this,r=e>0?Q(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l){return r.isItemMatched(l)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(l){return r.isItemMatched(l)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(l){return r.isItemMatched(l)}),s!==-1&&(i=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,r=K(this.menubar,'li[id="'.concat(n,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(u,a){var o=(i!==""?i+"_":"")+a,f={item:u,index:a,level:r,key:o,parent:s,parentKey:i};f.items=n.createProcessedItems(u.items,r+1,f,o),l.push(f)}),l},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(k(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:Pe,BarsIcon:Ye}};function W(t){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(t)}function ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function de(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ce(Object(n),!0).forEach(function(r){Mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mt(t,e,n){return(e=Ct(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ct(t){var e=At(t,"string");return W(e)=="symbol"?e:e+""}function At(t,e){if(W(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(W(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ot=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Et(t,e,n,r,s,i){var l=C("BarsIcon"),u=C("MenubarSub");return c(),d("div",m({ref:i.containerRef,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(c(),d("div",m({key:0,class:t.cx("start")},t.ptm("start")),[S(t.$slots,"start")],16)):I("",!0),S(t.$slots,t.$slots.button?"button":"menubutton",{id:t.$id,class:O(t.cx("button")),toggleCallback:function(o){return i.menuButtonClick(o)}},function(){var a;return[t.model&&t.model.length>0?(c(),d("a",m({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":t.$id,"aria-label":(a=t.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(o){return i.menuButtonClick(o)}),onKeydown:e[1]||(e[1]=function(o){return i.menuButtonKeydown(o)})},de(de({},t.buttonProps),t.ptm("button"))),[S(t.$slots,t.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[h(l,He(ze(t.ptm("buttonicon"))),null,16)]})],16,Ot)):I("",!0)]}),h(u,{ref:i.menubarRef,id:t.$id+"_list",role:"menubar",items:i.processedItems,templates:t.$slots,root:!0,mobileActive:s.mobileActive,tabindex:"0","aria-activedescendant":s.focused?i.focusedItemId:void 0,menuId:t.$id,focusedItemId:s.focused?i.focusedItemId:void 0,activeItemPath:s.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(c(),d("div",m({key:1,class:t.cx("end")},t.ptm("end")),[S(t.$slots,"end")],16)):I("",!0)],16)}Le.render=Et;var St=`
    .p-contextmenu {
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        min-width: 12.5rem;
    }

    .p-contextmenu-root-list,
    .p-contextmenu-submenu {
        margin: 0;
        padding: dt('contextmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('contextmenu.list.gap');
    }

    .p-contextmenu-submenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        z-index: 1;
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
    }

    .p-contextmenu-item {
        position: relative;
    }

    .p-contextmenu-item-content {
        transition:
            background dt('contextmenu.transition.duration'),
            color dt('contextmenu.transition.duration');
        border-radius: dt('contextmenu.item.border.radius');
        color: dt('contextmenu.item.color');
    }

    .p-contextmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('contextmenu.item.padding');
        gap: dt('contextmenu.item.gap');
        user-select: none;
    }

    .p-contextmenu-item-label {
        line-height: 1;
    }

    .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.color');
    }

    .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('contextmenu.submenu.icon.size');
        width: dt('contextmenu.submenu.icon.size');
        height: dt('contextmenu.submenu.icon.size');
    }

    .p-contextmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content {
        color: dt('contextmenu.item.active.color');
        background: dt('contextmenu.item.active.background');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.active.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.active.color');
    }

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('contextmenu.separator.border.color');
    }

    .p-contextmenu-mobile .p-contextmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,Ft={root:function(e){var n=e.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":n.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(e){var n=e.instance,r=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":n.isItemActive(r),"p-focus":n.isItemFocused(r),"p-disabled":n.isItemDisabled(r)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},Dt=q.extend({name:"contextmenu",style:St,classes:Ft}),Tt={name:"BaseContextMenu",extends:E,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Dt,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},we={name:"ContextMenuSub",hostName:"ContextMenu",extends:E,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,r){return e&&e.item?T(e.item[n],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,r){return this.ptm(e,{context:{item:n.item,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n),index:r}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return k(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(r){return n.isItemVisible(r)&&n.getItemProp(r,"separator")}).length+1},onEnter:function(){_e(this.$refs.container,this.level)},getMenuItemProps:function(e,n){return{action:m({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,n)),icon:m({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,n)),label:m({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n)),submenuicon:m({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,n))}}},components:{AngleRightIcon:ve},directives:{ripple:ee}},Vt=["tabindex"],Ht=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],zt=["onClick","onMouseenter","onMousemove"],Rt=["href","target"],Bt=["id"],Nt=["id"];function _t(t,e,n,r,s,i){var l=C("AngleRightIcon"),u=C("ContextMenuSub",!0),a=$("ripple");return c(),v(Y,m({name:"p-anchored-overlay",onEnter:i.onEnter},t.ptm("menu.transition")),{default:p(function(){return[n.root||n.visible?(c(),d("ul",m({key:0,ref:"container",tabindex:n.tabindex},t.ptm("rootList")),[(c(!0),d(L,null,V(n.items,function(o,f){return c(),d(L,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(c(),d("li",m({key:0,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[t.cx("item",{processedItem:o}),i.getItemProp(o,"class")],role:"menuitem","aria-label":i.getItemLabel(o),"aria-disabled":i.isItemDisabled(o)||void 0,"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-haspopup":i.isItemGroup(o)&&!i.getItemProp(o,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(f)},{ref_for:!0},i.getPTOptions("item",o,f),{"data-p-active":i.isItemActive(o),"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[x("div",m({class:t.cx("itemContent"),onClick:function(w){return i.onItemClick(w,o)},onMouseenter:function(w){return i.onItemMouseEnter(w,o)},onMousemove:function(w){return i.onItemMouseMove(w,o)}},{ref_for:!0},i.getPTOptions("itemContent",o,f)),[n.templates.item?(c(),v(M(n.templates.item),{key:1,item:o.item,hasSubmenu:i.getItemProp(o,"items"),label:i.getItemLabel(o),props:i.getMenuItemProps(o,f)},null,8,["item","hasSubmenu","label","props"])):U((c(),d("a",m({key:0,href:i.getItemProp(o,"url"),class:t.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1"},{ref_for:!0},i.getPTOptions("itemLink",o,f)),[n.templates.itemicon?(c(),v(M(n.templates.itemicon),{key:0,item:o.item,class:O(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(c(),d("span",m({key:1,class:[t.cx("itemIcon"),i.getItemProp(o,"icon")]},{ref_for:!0},i.getPTOptions("itemIcon",o,f)),null,16)):I("",!0),x("span",m({id:i.getItemLabelId(o),class:t.cx("itemLabel")},{ref_for:!0},i.getPTOptions("itemLabel",o,f)),H(i.getItemLabel(o)),17,Bt),i.getItemProp(o,"items")?(c(),d(L,{key:2},[n.templates.submenuicon?(c(),v(M(n.templates.submenuicon),{key:0,active:i.isItemActive(o),class:O(t.cx("submenuIcon"))},null,8,["active","class"])):(c(),v(l,m({key:1,class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions("submenuicon",o,f)),null,16,["class"]))],64)):I("",!0)],16,Rt)),[[a]])],16,zt),i.isItemVisible(o)&&i.isItemGroup(o)?(c(),v(u,m({key:0,id:i.getItemId(o)+"_list",role:"menu",class:t.cx("submenu"),menuId:n.menuId,focusedItemId:n.focusedItemId,items:o.items,templates:n.templates,activeItemPath:n.activeItemPath,level:n.level+1,visible:i.isItemActive(o)&&i.isItemGroup(o),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(g){return t.$emit("item-click",g)}),onItemMouseenter:e[1]||(e[1]=function(g){return t.$emit("item-mouseenter",g)}),onItemMousemove:e[2]||(e[2]=function(g){return t.$emit("item-mousemove",g)}),"aria-labelledby":i.getItemLabelId(o)},{ref_for:!0},t.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):I("",!0)],16,Ht)):I("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(c(),d("li",m({key:1,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[t.cx("separator"),i.getItemProp(o,"class")],role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,Nt)):I("",!0)],64)}),128))],16,Vt)):I("",!0)]}),_:1},16,["onEnter"])}we.render=_t;var Ke={name:"ContextMenu",extends:Tt,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){k(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&D.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,n){return e?T(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return k(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&k(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},P(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ae(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var r=e.processedItem,s=e.isFocus;if(!F(r)){var i=r.index,l=r.key,u=r.level,a=r.parentKey,o=r.items,f=k(o),g=this.activeItemPath.filter(function(w){return w.parentKey!==a&&w.parentKey!==l});f&&(g.push(r),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:u,parentKey:a},s&&P(this.list),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=g)}},onItemClick:function(e){var n=e.processedItem,r=this.isProccessedItemGroup(n),s=this.isSelected(n);if(s){var i=n.index,l=n.key,u=n.level,a=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(o){return l!==o.key&&l.startsWith(o.key)}),this.focusedItemInfo={index:i,level:u,parentKey:a},P(this.list)}else r?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);!r&&this.onItemChange({originalEvent:e,processedItem:n})}this.popup&&this.hide(),e.preventDefault()}else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowLeftKey:function(e){var n=this,r=this.visibleItems[this.focusedItemInfo.index],s=this.activeItemPath.find(function(l){return l.key===r.parentKey}),i=F(r.parent);i||(this.focusedItemInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(l){return l.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);r&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=K(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),r=n&&K(n,'[data-pc-section="itemlink"]');r?r.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(s);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);!r&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},onEnter:function(e){be(e,{position:"absolute"}),this.position(),this.autoZIndex&&D.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),P(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&D.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,n=this.pageY+1,r=this.container.offsetParent?this.container.offsetWidth:Re(this.container),s=this.container.offsetParent?this.container.offsetHeight:Be(this.container),i=Ne(),l=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+r-u>i.width&&(e-=r),n+s-l>i.height&&(n-=s),e<u&&(e=u),n<l&&(n=l),this.container.style.left=e+"px",this.container.style.top=n+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var r=e.container&&!e.container.contains(n.target),s=e.visible?!(e.target&&(e.target===n.target||e.target.contains(n.target))):!0;r&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!re()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(n){n.button===2&&e.show(n)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return Q(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var n=this,r=e>0?Q(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l){return r.isItemMatched(l)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(l){return r.isItemMatched(l)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(l){return r.isItemMatched(l)}),s!==-1&&(i=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemIdx,r=K(this.list,'li[id="'.concat(n,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(u,a){var o=(i!==""?i+"_":"")+a,f={item:u,index:a,level:r,key:o,parent:s,parentKey:i};f.items=n.createProcessedItems(u.items,r+1,f,o),l.push(f)}),l},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(k(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:we,Portal:Ie}};function jt(t,e,n,r,s,i){var l=C("ContextMenuSub"),u=C("Portal");return c(),v(u,{appendTo:t.appendTo},{default:p(function(){return[h(Y,m({name:"p-anchored-overlay",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:p(function(){return[s.visible?(c(),d("div",m({key:0,ref:i.containerRef,class:t.cx("root")},t.ptmi("root")),[h(l,{ref:i.listRef,id:t.$id+"_list",class:O(t.cx("rootList")),role:"menubar",root:!0,tabindex:t.tabindex,"aria-orientation":"vertical","aria-activedescendant":s.focused?i.focusedItemIdx:void 0,menuId:t.$id,focusedItemId:s.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:t.$slots,activeItemPath:s.activeItemPath,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,level:0,visible:s.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):I("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}Ke.render=jt;var Gt=`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,Ut={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(e){var n=e.instance;return["p-breadcrumb-item",{"p-disabled":n.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},Wt=q.extend({name:"breadcrumb",style:Gt,classes:Ut}),Zt={name:"BaseBreadcrumb",extends:E,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:Wt,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},Me={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:E,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,n=e.to,r=e.url,s=typeof window<"u"?window.location.pathname:"";return n===s||r===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:m({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(r){return e.onClick(r)}},this.ptm("itemLink",this.ptmOptions)),icon:m({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:m({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},qt=["href","target","aria-current"];function Yt(t,e,n,r,s,i){return i.visible()?(c(),d("li",m({key:0,class:[t.cx("item"),n.item.class]},t.ptm("item",i.ptmOptions)),[n.templates.item?(c(),v(M(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(c(),d("a",m({key:0,href:n.item.url||"#",class:t.cx("itemLink"),target:n.item.target,"aria-current":i.isCurrentUrl(),onClick:e[0]||(e[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},t.ptm("itemLink",i.ptmOptions)),[n.templates&&n.templates.itemicon?(c(),v(M(n.templates.itemicon),{key:0,item:n.item,class:O(t.cx("itemIcon",i.ptmOptions))},null,8,["item","class"])):n.item.icon?(c(),d("span",m({key:1,class:[t.cx("itemIcon"),n.item.icon]},t.ptm("itemIcon",i.ptmOptions)),null,16)):I("",!0),n.item.label?(c(),d("span",m({key:2,class:t.cx("itemLabel")},t.ptm("itemLabel",i.ptmOptions)),H(i.label()),17)):I("",!0)],16,qt))],16)):I("",!0)}Me.render=Yt;var Ce={name:"Breadcrumb",extends:Zt,inheritAttrs:!1,components:{BreadcrumbItem:Me,ChevronRightIcon:se}};function Xt(t,e,n,r,s,i){var l=C("BreadcrumbItem"),u=C("ChevronRightIcon");return c(),d("nav",m({class:t.cx("root")},t.ptmi("root")),[x("ol",m({class:t.cx("list")},t.ptm("list")),[t.home?(c(),v(l,m({key:0,item:t.home,class:t.cx("homeItem"),templates:t.$slots,pt:t.pt,unstyled:t.unstyled},t.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):I("",!0),(c(!0),d(L,null,V(t.model,function(a,o){return c(),d(L,{key:a.label+"_"+o},[t.home||o!==0?(c(),d("li",m({key:0,class:t.cx("separator")},{ref_for:!0},t.ptm("separator")),[S(t.$slots,"separator",{},function(){return[h(u,m({"aria-hidden":"true",class:t.cx("separatorIcon")},{ref_for:!0},t.ptm("separatorIcon")),null,16,["class"])]})],16)):I("",!0),h(l,{item:a,index:o,templates:t.$slots,pt:t.pt,unstyled:t.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}Ce.render=Xt;var Jt=`
    .p-panelmenu {
        display: flex;
        flex-direction: column;
        gap: dt('panelmenu.gap');
    }

    .p-panelmenu-panel {
        background: dt('panelmenu.panel.background');
        border-width: dt('panelmenu.panel.border.width');
        border-style: solid;
        border-color: dt('panelmenu.panel.border.color');
        color: dt('panelmenu.panel.color');
        border-radius: dt('panelmenu.panel.border.radius');
        padding: dt('panelmenu.panel.padding');
    }

    .p-panelmenu-panel:first-child {
        border-width: dt('panelmenu.panel.first.border.width');
        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');
        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');
    }

    .p-panelmenu-panel:last-child {
        border-width: dt('panelmenu.panel.last.border.width');
        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');
        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');
    }

    .p-panelmenu-header {
        outline: 0 none;
    }

    .p-panelmenu-header-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        outline-color: transparent;
        color: dt('panelmenu.item.color');
    }

    .p-panelmenu-header-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .p-panelmenu-header-icon,
    .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.color');
    }

    .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.color');
    }

    .p-panelmenu-submenu-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-submenu {
        margin: 0;
        padding: 0 0 0 dt('panelmenu.submenu.indent');
        outline: 0;
        list-style: none;
    }

    .p-panelmenu-submenu:dir(rtl) {
        padding: 0 dt('panelmenu.submenu.indent') 0 0;
    }

    .p-panelmenu-item-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu-item-label {
        line-height: 1;
    }

    .p-panelmenu-item-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        color: dt('panelmenu.item.color');
        outline-color: transparent;
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panelmenu-content-wrapper {
        min-height: 0;
    }
`,Qt={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var n=e.instance,r=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":n.isItemActive(r)&&!!r.items,"p-disabled":n.isItemDisabled(r)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",contentWrapper:"p-panelmenu-content-wrapper",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var n=e.instance,r=e.processedItem;return["p-panelmenu-item",{"p-focus":n.isItemFocused(r),"p-disabled":n.isItemDisabled(r)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},$t=q.extend({name:"panelmenu",style:Jt,classes:Qt}),en={name:"BasePanelMenu",extends:E,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:$t,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},Ae={name:"PanelMenuSub",hostName:"PanelMenu",extends:E,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,r){return e&&e.item?T(e.item[n],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,r){return this.ptm(e,{context:{item:n.item,index:r,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return k(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-toggle",{processedItem:n,expanded:!this.isItemActive(n)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(r){return n.isItemVisible(r)&&n.getItemProp(r,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:m({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,n)),icon:m({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,n)),label:m({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n)),submenuicon:m({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,n))}}},components:{ChevronRightIcon:se,ChevronDownIcon:ye},directives:{ripple:ee}},tn=["tabindex"],nn=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],rn=["onClick","onMousemove"],an=["href","target"];function sn(t,e,n,r,s,i){var l=C("PanelMenuSub",!0),u=$("ripple");return c(),d("ul",{class:O(t.cx("submenu")),tabindex:n.tabindex},[(c(!0),d(L,null,V(n.items,function(a,o){return c(),d(L,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(c(),d("li",m({key:0,id:i.getItemId(a),class:[t.cx("item",{processedItem:a}),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"treeitem","aria-label":i.getItemLabel(a),"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(o)},{ref_for:!0},i.getPTOptions("item",a,o),{"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[x("div",m({class:t.cx("itemContent"),onClick:function(g){return i.onItemClick(g,a)},onMousemove:function(g){return i.onItemMouseMove(g,a)}},{ref_for:!0},i.getPTOptions("itemContent",a,o)),[n.templates.item?(c(),v(M(n.templates.item),{key:1,item:a.item,root:!1,active:i.isItemActive(a),hasSubmenu:i.isItemGroup(a),label:i.getItemLabel(a),props:i.getMenuItemProps(a,o)},null,8,["item","active","hasSubmenu","label","props"])):U((c(),d("a",m({key:0,href:i.getItemProp(a,"url"),class:t.cx("itemLink"),target:i.getItemProp(a,"target"),tabindex:"-1"},{ref_for:!0},i.getPTOptions("itemLink",a,o)),[i.isItemGroup(a)?(c(),d(L,{key:0},[n.templates.submenuicon?(c(),v(M(n.templates.submenuicon),m({key:0,class:t.cx("submenuIcon"),active:i.isItemActive(a)},{ref_for:!0},i.getPTOptions("submenuIcon",a,o)),null,16,["class","active"])):(c(),v(M(i.isItemActive(a)?"ChevronDownIcon":"ChevronRightIcon"),m({key:1,class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions("submenuIcon",a,o)),null,16,["class"]))],64)):I("",!0),n.templates.itemicon?(c(),v(M(n.templates.itemicon),{key:1,item:a.item,class:O(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(a,"icon")?(c(),d("span",m({key:2,class:[t.cx("itemIcon"),i.getItemProp(a,"icon")]},{ref_for:!0},i.getPTOptions("itemIcon",a,o)),null,16)):I("",!0),x("span",m({class:t.cx("itemLabel")},{ref_for:!0},i.getPTOptions("itemLabel",a,o)),H(i.getItemLabel(a)),17)],16,an)),[[u]])],16,rn),h(Y,m({name:"p-collapsible"},{ref_for:!0},t.ptm("transition")),{default:p(function(){return[U(x("div",m({class:t.cx("contentContainer")},{ref_for:!0},t.ptm("contentContainer")),[x("div",m({class:t.cx("contentWrapper")},{ref_for:!0},t.ptm("contentWrapper")),[i.isItemVisible(a)&&i.isItemGroup(a)?(c(),v(l,m({key:0,id:i.getItemId(a)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:a.items,level:n.level+1,templates:n.templates,activeItemPath:n.activeItemPath,onItemToggle:i.onItemToggle,onItemMousemove:e[0]||(e[0]=function(f){return t.$emit("item-mousemove",f)}),pt:t.pt,unstyled:t.unstyled},{ref_for:!0},t.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):I("",!0)],16)],16),[[pe,i.isItemActive(a)]])]}),_:2},1040)],16,nn)):I("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(c(),d("li",m({key:1,style:i.getItemProp(a,"style"),class:[t.cx("separator"),i.getItemProp(a,"class")],role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,tn)}Ae.render=sn;function on(t,e){return cn(t)||mn(t,e)||ln(t,e)||un()}function un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(t,e){if(t){if(typeof t=="string")return fe(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(t,e):void 0}}function fe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function mn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,l,u=[],a=!0,o=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);a=!0);}catch(f){o=!0,s=f}finally{try{if(!a&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(o)throw s}}return u}}function cn(t){if(Array.isArray(t))return t}var Oe={name:"PanelMenuList",hostName:"PanelMenu",extends:E,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},created:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,n){return e&&e.item?T(e.item[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.parentKey})},isItemGroup:function(e){return k(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ae(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var n=k(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:n,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var n=k(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:n,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var n=this;if(k(this.focusedItem)){var r=this.activeItemPath.some(function(s){return s.key===n.focusedItem.key});r?this.activeItemPath=this.activeItemPath.filter(function(s){return s.key!==n.focusedItem.key}):this.focusedItem=k(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var n=this;if(k(this.focusedItem)){var r=this.isItemGroup(this.focusedItem);if(r){var s=this.activeItemPath.some(function(i){return i.key===n.focusedItem.key});s?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==n.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(k(this.focusedItem)){var n=K(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=n&&(K(n,'[data-pc-section="itemlink"]')||K(n,"a,button"));r?r.click():n&&n.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var n=e.processedItem,r=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:n.item,expanded:r}):(this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==n.parentKey}),r&&this.activeItemPath.push(n)),this.focusedItem=n,P(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,n){var r=e.currentTarget.closest('[data-pc-section="panel"]');return r&&r.contains(n)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(n){return e.isValidItem(n)})},findLastItem:function(){var e=this;return oe(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItem:function(e){var n=this,r=this.visibleItems.findIndex(function(i){return i.key===e.key}),s=r<this.visibleItems.length-1?this.visibleItems.slice(r+1).find(function(i){return n.isValidItem(i)}):void 0;return s||e},findPrevItem:function(e){var n=this,r=this.visibleItems.findIndex(function(i){return i.key===e.key}),s=r>0?oe(this.visibleItems.slice(0,r),function(i){return n.isValidItem(i)}):void 0;return s||e},searchItems:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var s=null,i=!1;if(k(this.focusedItem)){var l=this.visibleItems.findIndex(function(u){return u.key===r.focusedItem.key});s=this.visibleItems.slice(l).find(function(u){return r.isItemMatched(u)}),s=F(s)?this.visibleItems.slice(0,l).find(function(u){return r.isItemMatched(u)}):s}else s=this.visibleItems.find(function(u){return r.isItemMatched(u)});return k(s)&&(i=!0),F(s)&&F(this.focusedItem)&&(s=this.findFirstItem()),k(s)&&this.changeFocusedItem({originalEvent:e,processedItem:s,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItem:function(e){var n=e.originalEvent,r=e.processedItem,s=e.focusOnNext,i=e.selfCheck,l=e.allowHeaderFocus,u=l===void 0?!0:l;k(this.focusedItem)&&this.focusedItem.key!==r.key?(this.focusedItem=r,this.scrollInView()):u&&this.$emit("header-focus",{originalEvent:n,focusOnNext:s,selfCheck:i})},scrollInView:function(){var e=K(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var n=this;this.activeItemPath=Object.entries(e||{}).reduce(function(r,s){var i=on(s,2),l=i[0],u=i[1];if(u){var a=n.findProcessedItemByItemKey(l);a&&r.push(a)}return r},[])},findProcessedItemByItemKey:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||r===0&&this.processedItems,!n)return null;for(var s=0;s<n.length;s++){var i=n[s];if(this.getItemProp(i,"key")===e)return i;var l=this.findProcessedItemByItemKey(e,i.items,r+1);if(l)return l}},createProcessedItems:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(u,a){var o=(i!==""?i+"_":"")+a,f={item:u,index:a,level:r,key:o,parent:s,parentKey:i};f.items=n.createProcessedItems(u.items,r+1,f,o),l.push(f)}),l},flatItems:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(s){n.isVisibleItem(s)&&(r.push(s),n.flatItems(s.items,r))}),r}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return k(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:Ae}};function dn(t,e,n,r,s,i){var l=C("PanelMenuSub");return c(),v(l,m({id:n.panelId+"_list",class:t.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":s.focused?i.focusedItemId:void 0,panelId:n.panelId,focusedItemId:s.focused?i.focusedItemId:void 0,items:i.processedItems,templates:n.templates,activeItemPath:s.activeItemPath,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,onItemMousemove:i.onItemMouseMove,pt:t.pt,unstyled:t.unstyled},t.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}Oe.render=dn;function Z(t){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(t)}function he(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function fn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?he(Object(n),!0).forEach(function(r){hn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function hn(t,e,n){return(e=bn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bn(t){var e=pn(t,"string");return Z(e)=="symbol"?e:e+""}function pn(t,e){if(Z(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(Z(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ee={name:"PanelMenu",extends:en,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(e,n){return e?T(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,r){return this.ptm(e,{context:{index:r,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(n){return R(e,n)}):R(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return R(e,this.activeItem)},isItemGroup:function(e){return k(e.items)},getPanelId:function(e){return"".concat(this.$id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,n){if(this.isItemDisabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),this.changeActiveItem(e,n),P(e.currentTarget)},onHeaderKeyDown:function(e,n){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,n);break}},onHeaderArrowDownKey:function(e){var n=J(e.currentTarget,"data-p-active")===!0?K(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;n?P(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var n=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),r=J(n,"data-p-active")===!0?K(n.nextElementSibling,'[data-pc-section="rootlist"]'):null;r?P(r):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,n){var r=K(e.currentTarget,'[data-pc-section="headerlink"]');r?r.click():this.onHeaderClick(e,n),e.preventDefault()},findNextHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?e:e.nextElementSibling,s=K(r,'[data-pc-section="header"]');return s?J(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?e:e.previousElementSibling,s=K(r,'[data-pc-section="header"]');return s?J(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var n=e.originalEvent,r=e.focusOnNext,s=e.selfCheck,i=n.currentTarget.closest('[data-pc-section="panel"]'),l=s?K(i,'[data-pc-section="header"]'):r?this.findNextHeader(i):this.findPrevHeader(i);l?this.changeFocusedHeader(n,l):r?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)},changeActiveItem:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(n)){var s=this.isItemActive(n),i=s?"panel-close":"panel-open";this.activeItem=r?n:this.activeItem&&R(n,this.activeItem)?null:n,this.multiple&&(this.activeItems.some(function(l){return R(n,l)})?this.activeItems=this.activeItems.filter(function(l){return!R(n,l)}):this.activeItems.push(n)),this.changeExpandedKeys({item:n,expanded:!s}),this.$emit(i,{originalEvent:e,item:n})}},changeExpandedKeys:function(e){var n=e.item,r=e.expanded,s=r===void 0?!1:r;if(this.expandedKeys){var i=fn({},this.expandedKeys);s?i[n.key]=!0:delete i[n.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(e,n){n&&P(n)},getMenuItemProps:function(e,n){return{icon:m({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,n)),label:m({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,n))}}},components:{PanelMenuList:Oe,ChevronRightIcon:se,ChevronDownIcon:ye}},In=["id"],gn=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],vn=["href"],yn=["id","aria-labelledby"];function kn(t,e,n,r,s,i){var l=C("PanelMenuList");return c(),d("div",m({id:t.$id,class:t.cx("root")},t.ptmi("root")),[(c(!0),d(L,null,V(t.model,function(u,a){return c(),d(L,{key:i.getPanelKey(a)},[i.isItemVisible(u)?(c(),d("div",m({key:0,style:i.getItemProp(u,"style"),class:[t.cx("panel"),i.getItemProp(u,"class")]},{ref_for:!0},t.ptm("panel")),[x("div",m({id:i.getHeaderId(a),class:[t.cx("header",{item:u}),i.getItemProp(u,"headerClass")],tabindex:i.isItemDisabled(u)?-1:t.tabindex,role:"button","aria-label":i.getItemLabel(u),"aria-expanded":i.isItemActive(u),"aria-controls":i.getContentId(a),"aria-disabled":i.isItemDisabled(u),onClick:function(f){return i.onHeaderClick(f,u)},onKeydown:function(f){return i.onHeaderKeyDown(f,u)}},{ref_for:!0},i.getPTOptions("header",u,a),{"data-p-active":i.isItemActive(u),"data-p-disabled":i.isItemDisabled(u)}),[x("div",m({class:t.cx("headerContent")},{ref_for:!0},i.getPTOptions("headerContent",u,a)),[t.$slots.item?(c(),v(M(t.$slots.item),{key:1,item:u,root:!0,active:i.isItemActive(u),hasSubmenu:i.isItemGroup(u),label:i.getItemLabel(u),props:i.getMenuItemProps(u,a)},null,8,["item","active","hasSubmenu","label","props"])):(c(),d("a",m({key:0,href:i.getItemProp(u,"url"),class:t.cx("headerLink"),tabindex:-1},{ref_for:!0},i.getPTOptions("headerLink",u,a)),[i.getItemProp(u,"items")?S(t.$slots,"submenuicon",{key:0,active:i.isItemActive(u)},function(){return[(c(),v(M(i.isItemActive(u)?"ChevronDownIcon":"ChevronRightIcon"),m({class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions("submenuIcon",u,a)),null,16,["class"]))]}):I("",!0),t.$slots.headericon?(c(),v(M(t.$slots.headericon),{key:1,item:u,class:O([t.cx("headerIcon"),i.getItemProp(u,"icon")])},null,8,["item","class"])):i.getItemProp(u,"icon")?(c(),d("span",m({key:2,class:[t.cx("headerIcon"),i.getItemProp(u,"icon")]},{ref_for:!0},i.getPTOptions("headerIcon",u,a)),null,16)):I("",!0),x("span",m({class:t.cx("headerLabel")},{ref_for:!0},i.getPTOptions("headerLabel",u,a)),H(i.getItemLabel(u)),17)],16,vn))],16)],16,gn),h(Y,m({name:"p-collapsible"},{ref_for:!0},t.ptm("transition")),{default:p(function(){return[U(x("div",m({id:i.getContentId(a),class:t.cx("contentContainer"),role:"region","aria-labelledby":i.getHeaderId(a)},{ref_for:!0},t.ptm("contentContainer")),[x("div",m({class:t.cx("contentWrapper")},{ref_for:!0},t.ptm("contentWrapper")),[i.getItemProp(u,"items")?(c(),d("div",m({key:0,class:t.cx("content")},{ref_for:!0},t.ptm("content")),[h(l,{panelId:i.getPanelId(a),items:i.getItemProp(u,"items"),templates:t.$slots,expandedKeys:t.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,pt:t.pt,unstyled:t.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):I("",!0)],16)],16,yn),[[pe,i.isItemActive(u)]])]}),_:2},1040)],16)):I("",!0)],64)}),128))],16,In)}Ee.render=kn;const xn={class:"px-4 py-6"},Pn={class:"space-y-8"},Qn=je({__name:"Index",setup(t){const e=[{title:"PrimeVue Demos",href:We().url},{title:"Menu"}],n=Ge(),r=ne(),s=ne(),i=ne(),l=[{label:"Options",items:[{label:"Refresh",icon:"pi pi-refresh",command:()=>n.add({severity:"success",summary:"Refreshed",life:2e3})},{label:"Export",icon:"pi pi-upload"}]},{label:"Account",items:[{label:"Settings",icon:"pi pi-cog"},{label:"Logout",icon:"pi pi-sign-out"}]}],u=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",shortcut:"Ctrl+N"},{label:"Open",icon:"pi pi-folder-open",shortcut:"Ctrl+O"},{separator:!0},{label:"Save",icon:"pi pi-save",shortcut:"Ctrl+S"},{label:"Save As...",icon:"pi pi-save"}]},{label:"Edit",icon:"pi pi-pencil",items:[{label:"Undo",icon:"pi pi-undo",shortcut:"Ctrl+Z"},{label:"Redo",icon:"pi pi-replay",shortcut:"Ctrl+Y"},{separator:!0},{label:"Cut",icon:"pi pi-scissors",shortcut:"Ctrl+X"},{label:"Copy",icon:"pi pi-copy",shortcut:"Ctrl+C"},{label:"Paste",icon:"pi pi-clipboard",shortcut:"Ctrl+V"}]},{label:"View",icon:"pi pi-eye",items:[{label:"Zoom In",icon:"pi pi-search-plus"},{label:"Zoom Out",icon:"pi pi-search-minus"}]},{label:"Help",icon:"pi pi-question-circle"}],a=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{separator:!0},{label:"Quit",icon:"pi pi-times"}]},{label:"Edit",icon:"pi pi-pencil",items:[{label:"Cut",icon:"pi pi-scissors"},{label:"Copy",icon:"pi pi-copy"},{label:"Paste",icon:"pi pi-clipboard"}]}],o=[{label:"Copy",icon:"pi pi-copy"},{label:"Cut",icon:"pi pi-scissors"},{label:"Paste",icon:"pi pi-clipboard"},{separator:!0},{label:"Delete",icon:"pi pi-trash"}],f=[{label:"Home",icon:"pi pi-home"},{label:"Electronics"},{label:"Computers"},{label:"Laptops"}],g=[{label:"Files",icon:"pi pi-file",items:[{label:"Documents",icon:"pi pi-file-pdf"},{label:"Images",icon:"pi pi-image"},{label:"Videos",icon:"pi pi-video"}]},{label:"Users",icon:"pi pi-users",items:[{label:"Add User",icon:"pi pi-user-plus"},{label:"Remove User",icon:"pi pi-user-minus"},{label:"Search Users",icon:"pi pi-search"}]},{label:"Settings",icon:"pi pi-cog",items:[{label:"General",icon:"pi pi-sliders-h"},{label:"Security",icon:"pi pi-shield"},{label:"Notifications",icon:"pi pi-bell"}]}],w=z=>{r.value.toggle(z)},Se=z=>{s.value.toggle(z)},Fe=z=>{i.value.show(z)};return(z,y)=>(c(),d(L,null,[h(b(Ue),{title:"Menu Components - PrimeVue Demos"}),h(Ze,{breadcrumbs:e},{default:p(()=>[x("div",xn,[h(b(Je)),x("div",Pn,[h(b(B),null,{default:p(()=>[h(b(N),null,{default:p(()=>[h(b(_),null,{default:p(()=>[...y[0]||(y[0]=[A("Menubar",-1)])]),_:1}),h(b(j),null,{default:p(()=>[...y[1]||(y[1]=[A(" Horizontal menu bar with dropdown submenus. ",-1)])]),_:1})]),_:1}),h(b(G),null,{default:p(()=>[h(b(Le),{model:u})]),_:1})]),_:1}),h(b(B),null,{default:p(()=>[h(b(N),null,{default:p(()=>[h(b(_),null,{default:p(()=>[...y[2]||(y[2]=[A("Menu",-1)])]),_:1}),h(b(j),null,{default:p(()=>[...y[3]||(y[3]=[A(" Popup menu triggered by a button click. ",-1)])]),_:1})]),_:1}),h(b(G),null,{default:p(()=>[h(b(le),{type:"button",label:"Toggle Menu",icon:"pi pi-bars",onClick:w}),h(b(xe),{ref_key:"menuRef",ref:r,model:l,popup:!0},null,512)]),_:1})]),_:1}),h(b(B),null,{default:p(()=>[h(b(N),null,{default:p(()=>[h(b(_),null,{default:p(()=>[...y[4]||(y[4]=[A("TieredMenu",-1)])]),_:1}),h(b(j),null,{default:p(()=>[...y[5]||(y[5]=[A(" Menu with nested submenus appearing on hover. ",-1)])]),_:1})]),_:1}),h(b(G),{class:"space-y-4"},{default:p(()=>[h(b(le),{type:"button",label:"Toggle Menu",icon:"pi pi-bars",onClick:Se}),h(b(ue),{ref_key:"tieredMenuRef",ref:s,model:a,popup:!0},null,512),x("div",null,[y[6]||(y[6]=x("label",{class:"text-sm font-medium"},"Inline",-1)),h(b(ue),{model:a})])]),_:1})]),_:1}),h(b(B),null,{default:p(()=>[h(b(N),null,{default:p(()=>[h(b(_),null,{default:p(()=>[...y[7]||(y[7]=[A("ContextMenu",-1)])]),_:1}),h(b(j),null,{default:p(()=>[...y[8]||(y[8]=[A(" Menu triggered by right-click on a target element. ",-1)])]),_:1})]),_:1}),h(b(G),null,{default:p(()=>[x("div",{class:"flex h-40 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed",onContextmenu:Fe},[...y[9]||(y[9]=[x("p",{class:"text-muted-foreground"},"Right-click here to open context menu",-1)])],32),h(b(Ke),{ref_key:"contextMenuRef",ref:i,model:o},null,512)]),_:1})]),_:1}),h(b(B),null,{default:p(()=>[h(b(N),null,{default:p(()=>[h(b(_),null,{default:p(()=>[...y[10]||(y[10]=[A("Breadcrumb",-1)])]),_:1}),h(b(j),null,{default:p(()=>[...y[11]||(y[11]=[A(" Navigation component showing the current location path. ",-1)])]),_:1})]),_:1}),h(b(G),null,{default:p(()=>[h(b(Ce),{model:f,home:{icon:"pi pi-home",url:"/"}})]),_:1})]),_:1}),h(b(B),null,{default:p(()=>[h(b(N),null,{default:p(()=>[h(b(_),null,{default:p(()=>[...y[12]||(y[12]=[A("PanelMenu",-1)])]),_:1}),h(b(j),null,{default:p(()=>[...y[13]||(y[13]=[A(" Vertical accordion-style menu with expandable panels. ",-1)])]),_:1})]),_:1}),h(b(G),null,{default:p(()=>[h(b(Ee),{model:g,class:"w-full md:w-80"})]),_:1})]),_:1})])])]),_:1})],64))}});export{Qn as default};
