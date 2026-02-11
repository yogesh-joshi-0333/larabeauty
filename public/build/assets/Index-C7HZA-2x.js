import{K as S,m as d,o as c,f as y,w as o,V as T,J as w,a as u,D as f,aE as O,i as $,W as oe,O as A,S as we,a7 as N,Q as E,U as se,M as F,c as h,F as I,G as ve,e as s,t as _,aQ as te,aR as ge,a5 as j,a4 as ee,a0 as H,ab as de,ae as ke,af as W,Y as V,an as me,bB as Ue,Z as Re,a3 as R,a6 as K,d as je,u as l,h as He,g,r as We}from"./app-CSNJZ8QW.js";import{i as Xe,_ as Ye}from"./AppLayout.vue_vue_type_script_setup_true_lang-CGVkiQIe.js";import{_ as z,a as x,b as B,d as C,c as L}from"./CardTitle.vue_vue_type_script_setup_true_lang-CQPMS4r-.js";import{s as Te}from"./index-gWLxAEVL.js";import{s as Ae}from"./index-DTOmWjJh.js";import{s as P}from"./index-CT_EkKp1.js";import{s as Ge}from"./index-DdmMCUNb.js";import{R as Z}from"./index-kE_WQXz6.js";import{f as M}from"./index-DHSVsbhi.js";import{s as _e}from"./index-BJfs9oIq.js";import{s as ze}from"./index-0PaNw4Yi.js";import{s as xe}from"./index-icnh9k8l.js";import{s as D}from"./index-Cb5ZMaSH.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-BRJhPBh6.js";import"./index-IR2fhzqm.js";import"./VisuallyHidden-umFdrykb.js";import"./useForwardExpose-BYPBC0la.js";import"./useForwardPropsEmits-C00OBSGp.js";import"./createLucideIcon-C7hrCKxY.js";import"./index-CSEUMRIG.js";import"./index-CQQAICkn.js";import"./index-C-vQ65pc.js";var qe={root:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},Je=S.extend({name:"accordioncontent",classes:qe}),Qe={name:"BaseAccordionContent",extends:P,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Je,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},X={name:"AccordionContent",extends:Qe,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Ze(t,e,n,i,a,r){return t.asChild?f(t.$slots,"default",{key:1,class:A(t.cx("root")),active:r.$pcAccordionPanel.active,a11yAttrs:r.a11yAttrs}):(c(),y(oe,d({key:0,name:"p-collapsible"},t.ptm("transition",r.ptParams)),{default:o(function(){return[!r.$pcAccordion.lazy||r.$pcAccordionPanel.active?T((c(),y(w(t.as),d({key:0,class:t.cx("root")},r.attrs),{default:o(function(){return[u("div",d({class:t.cx("contentWrapper")},t.ptm("contentWrapper",r.ptParams)),[u("div",d({class:t.cx("content")},t.ptm("content",r.ptParams)),[f(t.$slots,"default")],16)],16)]}),_:3},16,["class"])),[[O,r.$pcAccordion.lazy?!0:r.$pcAccordionPanel.active]]):$("",!0)]}),_:3},16))}X.render=Ze;var et={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},tt=S.extend({name:"accordionheader",classes:et}),nt={name:"BaseAccordionHeader",extends:P,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:tt,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},Y={name:"AccordionHeader",extends:nt,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowDownKey:function(e){var n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest('[data-pc-name="accordionpanel"]')},findHeader:function(e){return E(e,'[data-pc-name="accordionheader"]')},findNextPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?e:e.nextElementSibling;return i?N(i,"data-p-disabled")?this.findNextPanel(i):this.findHeader(i):null},findPrevPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?e:e.previousElementSibling;return i?N(i,"data-p-disabled")?this.findPrevPanel(i):this.findHeader(i):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,n){we(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return d(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return M({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:Ae,ChevronDownIcon:Ge},directives:{ripple:Z}};function rt(t,e,n,i,a,r){var p=se("ripple");return t.asChild?f(t.$slots,"default",{key:1,class:A(t.cx("root")),active:r.$pcAccordionPanel.active,a11yAttrs:r.a11yAttrs,onClick:r.onClick}):T((c(),y(w(t.as),d({key:0,"data-p":r.dataP,class:t.cx("root"),onClick:r.onClick},r.attrs),{default:o(function(){return[f(t.$slots,"default",{active:r.$pcAccordionPanel.active}),f(t.$slots,"toggleicon",{active:r.$pcAccordionPanel.active,class:A(t.cx("toggleicon"))},function(){return[r.$pcAccordionPanel.active?(c(),y(w(r.$pcAccordion.$slots.collapseicon?r.$pcAccordion.$slots.collapseicon:r.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),d({key:0,class:[r.$pcAccordion.collapseIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",r.ptParams)),null,16,["class"])):(c(),y(w(r.$pcAccordion.$slots.expandicon?r.$pcAccordion.$slots.expandicon:r.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),d({key:1,class:[r.$pcAccordion.expandIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",r.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[p]])}Y.render=rt;var at={root:function(e){var n=e.instance,i=e.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":i.disabled}]}},it=S.extend({name:"accordionpanel",classes:at}),ot={name:"BaseAccordionPanel",extends:P,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:it,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},G={name:"AccordionPanel",extends:ot,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function st(t,e,n,i,a,r){return t.asChild?f(t.$slots,"default",{key:1,class:A(t.cx("root")),active:r.active,a11yAttrs:r.a11yAttrs}):(c(),y(w(t.as),d({key:0,class:t.cx("root")},r.attrs),{default:o(function(){return[f(t.$slots,"default")]}),_:3},16,["class"]))}G.render=st;var lt=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,dt={root:"p-accordion p-component"},ct=S.extend({name:"accordion",style:lt,classes:dt}),ut={name:"BaseAccordion",extends:P,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:ct,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},Be={name:"Accordion",extends:ut,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(e):this.d_value===e},updateValue:function(e){var n,i=this.isItemActive(e);this.multiple?i?this.d_value=this.d_value.filter(function(a){return a!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=i?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(i?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getHeaderPT:function(e,n){var i=this;return{root:d({onClick:function(r){return i.onTabClick(r,n)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",n)),toggleicon:d(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",n))}},getContentPT:function(e,n){return{root:d(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",n)),transition:this.getTabPT(e,"transition",n),content:this.getTabPT(e,"content",n)}},getTabPT:function(e,n,i){var a=this.tabs.length,r={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:i,count:a,first:i===0,last:i===a-1,active:this.isItemActive("".concat(i))}};return d(this.ptm("accordiontab.".concat(n),r),this.ptmo(this.getTabProp(e,"pt"),n,r))},onTabClick:function(e,n){this.$emit("tab-click",{originalEvent:e,index:n})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,i){return e.isAccordionTab(i)?n.push(i):i.children&&i.children instanceof Array&&i.children.forEach(function(a){e.isAccordionTab(a)&&n.push(a)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:G,AccordionHeader:Y,AccordionContent:X,ChevronUpIcon:Ae,ChevronRightIcon:Te}};function pt(t,e,n,i,a,r){var p=F("AccordionHeader"),b=F("AccordionContent"),m=F("AccordionPanel");return c(),h("div",d({class:t.cx("root")},t.ptmi("root")),[r.hasAccordionTab?(c(!0),h(I,{key:0},ve(r.tabs,function(v,k){return c(),y(m,{key:r.getKey(v,k),value:"".concat(k),pt:{root:r.getTabPT(v,"root",k)},disabled:r.getTabProp(v,"disabled")},{default:o(function(){return[s(p,{class:A(r.getTabProp(v,"headerClass")),pt:r.getHeaderPT(v,k)},{toggleicon:o(function(U){return[U.active?(c(),y(w(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),d({key:0,class:[t.collapseIcon,U.class],"aria-hidden":"true"},{ref_for:!0},r.getTabPT(v,"headericon",k)),null,16,["class"])):(c(),y(w(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronUpIcon"),d({key:1,class:[t.expandIcon,U.class],"aria-hidden":"true"},{ref_for:!0},r.getTabPT(v,"headericon",k)),null,16,["class"]))]}),default:o(function(){return[v.children&&v.children.headericon?(c(),y(w(v.children.headericon),{key:0,isTabActive:r.isItemActive("".concat(k)),active:r.isItemActive("".concat(k)),index:k},null,8,["isTabActive","active","index"])):$("",!0),v.props&&v.props.header?(c(),h("span",d({key:1,ref_for:!0},r.getTabPT(v,"headertitle",k)),_(v.props.header),17)):$("",!0),v.children&&v.children.header?(c(),y(w(v.children.header),{key:2})):$("",!0)]}),_:2},1032,["class","pt"]),s(b,{pt:r.getContentPT(v,k)},{default:o(function(){return[(c(),y(w(v)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):f(t.$slots,"default",{key:1})],16)}Be.render=pt;var ft=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,ht={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},bt=S.extend({name:"tabs",style:ft,classes:ht}),vt={name:"BaseTabs",extends:P,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:bt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Ce={name:"Tabs",extends:vt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function gt(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root")},t.ptmi("root")),[f(t.$slots,"default")],16)}Ce.render=gt;var mt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},yt=S.extend({name:"tablist",classes:mt}),$t={name:"BaseTabList",extends:P,props:{},style:yt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},Le={name:"TabList",extends:$t,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),i=te(e)-n,a=Math.abs(e.scrollLeft),r=i*.8,p=a-r,b=Math.max(p,0);e.scrollLeft=de(e)?-1*b:b},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),i=te(e)-n,a=Math.abs(e.scrollLeft),r=i*.8,p=a+r,b=e.scrollWidth-i,m=Math.min(p,b);e.scrollLeft=de(e)?-1*m:m},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,i=e.inkbar,a=e.tabs;if(i){var r=E(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(i.style.height=j(r)+"px",i.style.top=ee(r).top-ee(a).top+"px"):(i.style.width=H(r)+"px",i.style.left=ee(r).left-ee(a).left+"px")}},updateButtonState:function(){var e=this.$refs,n=e.list,i=e.content,a=i.scrollTop,r=i.scrollWidth,p=i.scrollHeight,b=i.offsetWidth,m=i.offsetHeight,v=Math.abs(i.scrollLeft),k=[te(i),ge(i)],U=k[0],Oe=k[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=a!==0,this.isNextButtonEnabled=n.offsetHeight>=m&&parseInt(a)!==p-Oe):(this.isPrevButtonEnabled=v!==0,this.isNextButtonEnabled=n.offsetWidth>=b&&parseInt(v)!==r-U)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevButton,i=e.nextButton,a=0;return this.showNavigators&&(a=(n?.offsetWidth||0)+(i?.offsetWidth||0)),a}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return M({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:_e,ChevronRightIcon:Te},directives:{ripple:Z}},Pt=["data-p"],St=["aria-label","tabindex"],wt=["data-p"],kt=["aria-orientation"],Tt=["aria-label","tabindex"];function At(t,e,n,i,a,r){var p=se("ripple");return c(),h("div",d({ref:"list",class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[r.showNavigators&&a.isPrevButtonEnabled?T((c(),h("button",d({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":r.prevButtonAriaLabel,tabindex:r.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return r.onPrevButtonClick&&r.onPrevButtonClick.apply(r,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(c(),y(w(r.templates.previcon||"ChevronLeftIcon"),d({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,St)),[[p]]):$("",!0),u("div",d({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),"data-p":r.dataP},t.ptm("content")),[u("div",d({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":r.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[f(t.$slots,"default"),u("span",d({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,kt)],16,wt),r.showNavigators&&a.isNextButtonEnabled?T((c(),h("button",d({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":r.nextButtonAriaLabel,tabindex:r.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return r.onNextButtonClick&&r.onNextButtonClick.apply(r,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(c(),y(w(r.templates.nexticon||"ChevronRightIcon"),d({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Tt)),[[p]]):$("",!0)],16,Pt)}Le.render=At;var zt={root:function(e){var n=e.instance,i=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":i.disabled}]}},xt=S.extend({name:"tab",classes:zt}),Bt={name:"BaseTab",extends:P,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:xt,provide:function(){return{$pcTab:this,$parentInstance:this}}},ne={name:"Tab",extends:Bt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?e:e.nextElementSibling;return i?N(i,"data-p-disabled")||N(i,"data-pc-section")==="activebar"?this.findNextTab(i):E(i,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?e:e.previousElementSibling;return i?N(i,"data-p-disabled")||N(i,"data-pc-section")==="activebar"?this.findPrevTab(i):E(i,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){we(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ke((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return d(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return M({active:this.active})}},directives:{ripple:Z}};function Ct(t,e,n,i,a,r){var p=se("ripple");return t.asChild?f(t.$slots,"default",{key:1,dataP:r.dataP,class:A(t.cx("root")),active:r.active,a11yAttrs:r.a11yAttrs,onClick:r.onClick}):T((c(),y(w(t.as),d({key:0,class:t.cx("root"),"data-p":r.dataP,onClick:r.onClick},r.attrs),{default:o(function(){return[f(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[p]])}ne.render=Ct;var Lt={root:"p-tabpanels"},It=S.extend({name:"tabpanels",classes:Lt}),Mt={name:"BaseTabPanels",extends:P,props:{},style:It,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Ie={name:"TabPanels",extends:Mt,inheritAttrs:!1};function Dt(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[f(t.$slots,"default")],16)}Ie.render=Dt;var Et={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},Kt=S.extend({name:"tabpanel",classes:Et}),Vt={name:"BaseTabPanel",extends:P,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Kt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},re={name:"TabPanel",extends:Vt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return ke((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Nt(t,e,n,i,a,r){var p,b;return r.$pcTabs?(c(),h(I,{key:1},[t.asChild?f(t.$slots,"default",{key:1,class:A(t.cx("root")),active:r.active,a11yAttrs:r.a11yAttrs}):(c(),h(I,{key:0},[!((p=r.$pcTabs)!==null&&p!==void 0&&p.lazy)||r.active?T((c(),y(w(t.as),d({key:0,class:t.cx("root")},r.attrs),{default:o(function(){return[f(t.$slots,"default")]}),_:3},16,["class"])),[[O,(b=r.$pcTabs)!==null&&b!==void 0&&b.lazy?!0:r.active]]):$("",!0)],64))],64)):f(t.$slots,"default",{key:0})}re.render=Nt;var Ft=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }
    
    .p-stepitem .p-steppanel {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-stepitem .p-steppanel-content-wrapper {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
    }
    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`,Ot={root:function(e){var n=e.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},Ut=S.extend({name:"stepper",style:Ft,classes:Ot}),Rt={name:"BaseStepper",extends:P,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Ut,provide:function(){return{$pcStepper:this,$parentInstance:this}}},Me={name:"Stepper",extends:Rt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function jt(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[t.$slots.start?f(t.$slots,"start",{key:0}):$("",!0),f(t.$slots,"default"),t.$slots.end?f(t.$slots,"end",{key:1}):$("",!0)],16)}Me.render=jt;var Ht={root:"p-steplist"},Wt=S.extend({name:"steplist",classes:Ht}),Xt={name:"BaseStepList",extends:P,style:Wt,provide:function(){return{$pcStepList:this,$parentInstance:this}}},De={name:"StepList",extends:Xt,inheritAttrs:!1};function Yt(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root")},t.ptmi("root")),[f(t.$slots,"default")],16)}De.render=Yt;var Gt={root:"p-steppanels"},_t=S.extend({name:"steppanels",classes:Gt}),qt={name:"BaseStepPanels",extends:P,style:_t,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},Ee={name:"StepPanels",extends:qt,inheritAttrs:!1};function Jt(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root")},t.ptmi("root")),[f(t.$slots,"default")],16)}Ee.render=Jt;var Qt={root:function(e){var n=e.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},Zt=S.extend({name:"step",classes:Qt}),Ke={name:"StepperSeparator",hostName:"Stepper",extends:P,inject:{$pcStepper:{default:null}}};function en(t,e,n,i,a,r){return c(),h("span",d({class:t.cx("separator")},t.ptmo(r.$pcStepper.pt,"separator")),null,16)}Ke.render=en;var tn={name:"BaseStep",extends:P,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:Zt,provide:function(){return{$pcStep:this,$parentInstance:this}}},ae={name:"Step",extends:tn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1,isCompleted:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=W(this.$el,V(this.$pcStepper.$el,'[data-pc-name="step"]')),n=W(E(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),V(this.$pcStepper.$el,'[data-pc-name="step"]')),i=V(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==i-1,this.isCompleted=e<n}},updated:function(){var e=W(this.$el,V(this.$pcStepper.$el,'[data-pc-name="step"]')),n=W(E(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),V(this.$pcStepper.$el,'[data-pc-name="step"]'));this.isCompleted=e<n},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}},dataP:function(){return M({disabled:this.isStepDisabled,readonly:this.$pcStepper.linear,active:this.active,completed:this.isCompleted,vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:Ke}},nn=["id","tabindex","aria-controls","disabled","data-p"],rn=["data-p"],an=["data-p"];function on(t,e,n,i,a,r){var p=F("StepperSeparator");return t.asChild?f(t.$slots,"default",{key:1,class:A(t.cx("root")),active:r.active,value:t.value,a11yAttrs:r.a11yAttrs,activateCallback:r.onStepClick}):(c(),y(w(t.as),d({key:0,class:t.cx("root"),"aria-current":r.active?"step":void 0,role:"presentation","data-p-active":r.active,"data-p-disabled":r.isStepDisabled,"data-p":r.dataP},r.getPTOptions("root")),{default:o(function(){return[u("button",d({id:r.id,class:t.cx("header"),role:"tab",type:"button",tabindex:r.isStepDisabled?-1:void 0,"aria-controls":r.ariaControls,disabled:r.isStepDisabled,onClick:e[0]||(e[0]=function(){return r.onStepClick&&r.onStepClick.apply(r,arguments)}),"data-p":r.dataP},r.getPTOptions("header")),[u("span",d({class:t.cx("number"),"data-p":r.dataP},r.getPTOptions("number")),_(r.activeValue),17,rn),u("span",d({class:t.cx("title"),"data-p":r.dataP},r.getPTOptions("title")),[f(t.$slots,"default")],16,an)],16,nn),a.isSeparatorVisible?(c(),y(p,{key:0,"data-p":r.dataP},null,8,["data-p"])):$("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled","data-p"]))}ae.render=on;var sn={root:function(e){var n=e.instance;return["p-steppanel",{"p-steppanel-active":n.isVertical&&n.active}]},contentWrapper:"p-steppanel-content-wrapper",content:"p-steppanel-content"},ln=S.extend({name:"steppanel",classes:sn}),Ve={name:"StepperSeparator",hostName:"Stepper",extends:P,inject:{$pcStepper:{default:null}}};function dn(t,e,n,i,a,r){return c(),h("span",d({class:t.cx("separator")},t.ptmo(r.$pcStepper.pt,"separator")),null,16)}Ve.render=dn;var cn={name:"BaseStepPanel",extends:P,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:ln,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},ie={name:"StepPanel",extends:cn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var e,n,i=V(this.$pcStepper.$el,'[data-pc-name="step"]'),a=E(this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.$el:(n=this.$pcStepList)===null||n===void 0?void 0:n.$el,'[data-pc-name="step"]'),r=W(a,i);this.isSeparatorVisible=this.isVertical&&r!==i.length-1}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active}})},updateValue:function(e){this.$pcStepper.updateValue(e)}},computed:{active:function(){var e,n,i=this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value;return i===((n=this.$pcStepper)===null||n===void 0?void 0:n.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var e;return this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return M({vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:Ve}},un=["data-p"];function pn(t,e,n,i,a,r){var p=F("StepperSeparator");return r.isVertical?(c(),h(I,{key:0},[t.asChild?f(t.$slots,"default",{key:1,active:r.active,a11yAttrs:r.a11yAttrs,activateCallback:function(m){return r.updateValue(m)}}):(c(),y(oe,d({key:0,name:"p-collapsible"},t.ptm("transition")),{default:o(function(){return[T((c(),y(w(t.as),d({id:r.id,class:t.cx("root"),role:"tabpanel","aria-controls":r.ariaControls,"data-p":r.dataP},r.getPTOptions("root")),{default:o(function(){return[u("div",d({class:t.cx("contentWrapper")},t.ptm("contentWrapper",r.ptParams)),[a.isSeparatorVisible?(c(),y(p,{key:0,"data-p":r.dataP},null,8,["data-p"])):$("",!0),u("div",d({class:t.cx("content"),"data-p":r.dataP},r.getPTOptions("content")),[f(t.$slots,"default",{active:r.active,activateCallback:function(m){return r.updateValue(m)}})],16,un)],16)]}),_:3},16,["id","class","aria-controls","data-p"])),[[O,r.active]])]}),_:3},16))],64)):(c(),h(I,{key:1},[t.asChild?t.asChild&&r.active?f(t.$slots,"default",{key:1,active:r.active,a11yAttrs:r.a11yAttrs,activateCallback:function(m){return r.updateValue(m)}}):$("",!0):T((c(),y(w(t.as),d({key:0,id:r.id,class:t.cx("root"),role:"tabpanel","aria-controls":r.ariaControls},r.getPTOptions("root")),{default:o(function(){return[f(t.$slots,"default",{active:r.active,activateCallback:function(m){return r.updateValue(m)}})]}),_:3},16,["id","class","aria-controls"])),[[O,r.active]])],64))}ie.render=pn;var fn=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,hn={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},bn=S.extend({name:"card",style:fn,classes:hn}),vn={name:"BaseCard",extends:P,style:bn,provide:function(){return{$pcCard:this,$parentInstance:this}}},ce={name:"Card",extends:vn,inheritAttrs:!1};function gn(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(c(),h("div",d({key:0,class:t.cx("header")},t.ptm("header")),[f(t.$slots,"header")],16)):$("",!0),u("div",d({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(c(),h("div",d({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(c(),h("div",d({key:0,class:t.cx("title")},t.ptm("title")),[f(t.$slots,"title")],16)):$("",!0),t.$slots.subtitle?(c(),h("div",d({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[f(t.$slots,"subtitle")],16)):$("",!0)],16)):$("",!0),u("div",d({class:t.cx("content")},t.ptm("content")),[f(t.$slots,"content")],16),t.$slots.footer?(c(),h("div",d({key:1,class:t.cx("footer")},t.ptm("footer")),[f(t.$slots,"footer")],16)):$("",!0)],16)],16)}ce.render=gn;var mn=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        color: dt('fieldset.legend.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,yn={root:function(e){var n=e.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",contentWrapper:"p-fieldset-content-wrapper",content:"p-fieldset-content"},$n=S.extend({name:"fieldset",style:mn,classes:yn}),Pn={name:"BaseFieldset",extends:P,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:$n,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},ue={name:"Fieldset",extends:Pn,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return M({toggleable:this.toggleable})}},directives:{ripple:Z},components:{PlusIcon:xe,MinusIcon:ze}};function q(t){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(t)}function ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function $e(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(n),!0).forEach(function(i){Sn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Sn(t,e,n){return(e=wn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wn(t){var e=kn(t,"string");return q(e)=="symbol"?e:e+""}function kn(t,e){if(q(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(q(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Tn=["data-p"],An=["data-p"],zn=["id"],xn=["id","aria-controls","aria-expanded","aria-label"],Bn=["id","aria-labelledby"];function Cn(t,e,n,i,a,r){var p=se("ripple");return c(),h("fieldset",d({class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[u("legend",d({class:t.cx("legend"),"data-p":r.dataP},t.ptm("legend")),[f(t.$slots,"legend",{toggleCallback:r.toggle},function(){return[t.toggleable?$("",!0):(c(),h("span",d({key:0,id:t.$id+"_header",class:t.cx("legendLabel")},t.ptm("legendLabel")),_(t.legend),17,zn)),t.toggleable?T((c(),h("button",d({key:1,id:t.$id+"_header",type:"button","aria-controls":t.$id+"_content","aria-expanded":!a.d_collapsed,"aria-label":r.buttonAriaLabel,class:t.cx("toggleButton"),onClick:e[0]||(e[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),onKeydown:e[1]||(e[1]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},$e($e({},t.toggleButtonProps),t.ptm("toggleButton"))),[f(t.$slots,t.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed,class:A(t.cx("toggleIcon"))},function(){return[(c(),y(w(a.d_collapsed?"PlusIcon":"MinusIcon"),d({class:t.cx("toggleIcon")},t.ptm("toggleIcon")),null,16,["class"]))]}),u("span",d({class:t.cx("legendLabel")},t.ptm("legendLabel")),_(t.legend),17)],16,xn)),[[p]]):$("",!0)]})],16,An),s(oe,d({name:"p-collapsible"},t.ptm("transition")),{default:o(function(){return[T(u("div",d({id:t.$id+"_content",class:t.cx("contentContainer"),role:"region","aria-labelledby":t.$id+"_header"},t.ptm("contentContainer")),[u("div",d({class:t.cx("contentWrapper")},t.ptm("contentWrapper")),[u("div",d({class:t.cx("content")},t.ptm("content")),[f(t.$slots,"default")],16)],16)],16,Bn),[[O,!a.d_collapsed]])]}),_:3},16)],16,Tn)}ue.render=Cn;var Ln=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,In={root:function(e){var n=e.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},Mn=S.extend({name:"panel",style:Ln,classes:In}),Dn={name:"BasePanel",extends:P,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Mn,provide:function(){return{$pcPanel:this,$parentInstance:this}}},pe={name:"Panel",extends:Dn,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return M({toggleable:this.toggleable})}},components:{PlusIcon:xe,MinusIcon:ze,Button:D},directives:{ripple:Z}},En=["data-p"],Kn=["data-p"],Vn=["id"],Nn=["id","aria-labelledby"];function Fn(t,e,n,i,a,r){var p=F("Button");return c(),h("div",d({class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[u("div",d({class:t.cx("header"),"data-p":r.dataP},t.ptm("header")),[f(t.$slots,"header",{id:t.$id+"_header",class:A(t.cx("title")),collapsed:a.d_collapsed},function(){return[t.header?(c(),h("span",d({key:0,id:t.$id+"_header",class:t.cx("title")},t.ptm("title")),_(t.header),17,Vn)):$("",!0)]}),u("div",d({class:t.cx("headerActions")},t.ptm("headerActions")),[f(t.$slots,"icons"),t.toggleable?f(t.$slots,"togglebutton",{key:0,collapsed:a.d_collapsed,toggleCallback:function(m){return r.toggle(m)},keydownCallback:function(m){return r.onKeyDown(m)}},function(){return[s(p,d({id:t.$id+"_header",class:t.cx("pcToggleButton"),"aria-label":r.buttonAriaLabel,"aria-controls":t.$id+"_content","aria-expanded":!a.d_collapsed,unstyled:t.unstyled,onClick:e[0]||(e[0]=function(b){return r.toggle(b)}),onKeydown:e[1]||(e[1]=function(b){return r.onKeyDown(b)})},t.toggleButtonProps,{pt:t.ptm("pcToggleButton")}),{icon:o(function(b){return[f(t.$slots,t.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed},function(){return[(c(),y(w(a.d_collapsed?"PlusIcon":"MinusIcon"),d({class:b.class},t.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):$("",!0)],16)],16,Kn),s(oe,d({name:"p-collapsible"},t.ptm("transition")),{default:o(function(){return[T(u("div",d({id:t.$id+"_content",class:t.cx("contentContainer"),role:"region","aria-labelledby":t.$id+"_header"},t.ptm("contentContainer")),[u("div",d({class:t.cx("contentWrapper")},t.ptm("contentWrapper")),[u("div",d({class:t.cx("content")},t.ptm("content")),[f(t.$slots,"default")],16),t.$slots.footer?(c(),h("div",d({key:0,class:t.cx("footer")},t.ptm("footer")),[f(t.$slots,"footer")],16)):$("",!0)],16)],16,Nn),[[O,!a.d_collapsed]])]}),_:3},16)],16,En)}pe.render=Fn;var On=`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        min-width: 0;
        min-height: 0;
        border: 0 none;
    }
`,Un={root:function(e){var n=e.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Rn=S.extend({name:"splitter",style:On,classes:Un}),jn={name:"BaseSplitter",extends:P,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:Rn,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function J(t){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(t)}function Pe(t,e,n){return(e=Hn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hn(t){var e=Wn(t,"string");return J(e)=="symbol"?e:e+""}function Wn(t,e){if(J(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(J(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Se(t){return _n(t)||Gn(t)||Yn(t)||Xn()}function Xn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yn(t,e){if(t){if(typeof t=="string")return fe(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(t,e):void 0}}function Gn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _n(t){if(Array.isArray(t))return fe(t)}function fe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var Ne={name:"Splitter",extends:jn,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){this.initializePanels()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(e){return e.type.name==="SplitterPanel"},initializePanels:function(){var e=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var i=Se(this.$el.children).filter(function(r){return r.getAttribute("data-pc-name")==="splitterpanel"}),a=[];this.panels.map(function(r,p){var b=r.props&&Re(r.props.size)?r.props.size:null,m=b??100/e.panels.length;a[p]=m,i[p].style.flexBasis="calc("+m+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),this.panelSizes=a,this.prevSize=parseFloat(a[0]).toFixed(4)}}},onResizeStart:function(e,n,i){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal?te(this.$el):ge(this.$el),i||(this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,i?(this.prevPanelSize=this.horizontal?H(this.prevPanelElement,!0):j(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?H(this.nextPanelElement,!0):j(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?H(this.prevPanelElement,!0):j(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?H(this.nextPanelElement,!0):j(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(e,n,i){var a,r,p;i?this.horizontal?(r=100*(this.prevPanelSize+n)/this.size,p=100*(this.nextPanelSize-n)/this.size):(r=100*(this.prevPanelSize-n)/this.size,p=100*(this.nextPanelSize+n)/this.size):(this.horizontal?de(this.$el)?a=(this.startPos-e.pageX)*100/this.size:a=(e.pageX-this.startPos)*100/this.size:a=(e.pageY-this.startPos)*100/this.size,r=this.prevPanelSize+a,p=this.nextPanelSize-a),this.validateResize(r,p)||(r=Math.min(Math.max(this.prevPanelMinSize,r),100-this.nextPanelMinSize),p=Math.min(Math.max(this.nextPanelMinSize,p),100-this.prevPanelMinSize)),this.prevPanelElement.style.flexBasis="calc("+r+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+p+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=r,this.panelSizes[this.prevPanelIndex+1]=p,this.prevSize=parseFloat(r).toFixed(4),this.$emit("resize",{originalEvent:e,sizes:this.panelSizes})},onResizeEnd:function(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(e,n,i){this.onResizeStart(e,n,!0),this.onResize(e,i,!0)},setTimer:function(e,n,i){var a=this;this.timer||(this.timer=setInterval(function(){a.repeat(e,n,i)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(e,n){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,n,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,n,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,n,this.step),e.preventDefault();break}}},onGutterMouseDown:function(e,n){this.onResizeStart(e,n),this.bindMouseListeners()},onGutterTouchStart:function(e,n){this.onResizeStart(e,n),this.bindTouchListeners(),e.preventDefault()},onGutterTouchMove:function(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd:function(e){this.onResizeEnd(e),this.unbindTouchListeners(),e.preventDefault()},bindMouseListeners:function(){var e=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return e.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){e.onResizeEnd(n),e.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var e=this;this.touchMoveListener||(this.touchMoveListener=function(n){return e.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){e.resizeEnd(n),e.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(e,n){return!(e>100||e<0||n>100||n<0||this.prevPanelMinSize>e||this.nextPanelMinSize>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){Ue(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var e=this,n=this.getStorage(),i=n.getItem(this.stateKey);if(i){this.panelSizes=JSON.parse(i);var a=Se(this.$el.children).filter(function(r){return r.getAttribute("data-pc-name")==="splitterpanel"});return a.forEach(function(r,p){r.style.flexBasis="calc("+e.panelSizes[p]+"% - "+(e.panels.length-1)*e.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var e=this,n=[];return this.$slots.default().forEach(function(i){e.isSplitterPanel(i)?n.push(i):i.children instanceof Array&&i.children.forEach(function(a){e.isSplitterPanel(a)&&n.push(a)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var e;return{context:{nested:(e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState}}},prevPanelMinSize:function(){var e=me(this.panels[this.prevPanelIndex],"minSize");return this.panels[this.prevPanelIndex].props&&e?e:0},nextPanelMinSize:function(){var e=me(this.panels[this.prevPanelIndex+1],"minSize");return this.panels[this.prevPanelIndex+1].props&&e?e:0},dataP:function(){var e;return M(Pe(Pe({},this.layout,this.layout),"nested",((e=this.$parentInstance)===null||e===void 0?void 0:e.nestedState)!=null))}}},qn=["data-p"],Jn=["onMousedown","onTouchstart","onTouchmove","onTouchend","data-p"],Qn=["aria-orientation","aria-valuenow","onKeydown","data-p"];function Zn(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root"),"data-p-resizing":!1,"data-p":r.dataP},t.ptmi("root",r.getPTOptions)),[(c(!0),h(I,null,ve(r.panels,function(p,b){return c(),h(I,{key:b},[(c(),y(w(p),{tabindex:"-1"})),b!==r.panels.length-1?(c(),h("div",d({key:0,ref_for:!0,ref:"gutter",class:t.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(v){return r.onGutterMouseDown(v,b)},onTouchstart:function(v){return r.onGutterTouchStart(v,b)},onTouchmove:function(v){return r.onGutterTouchMove(v,b)},onTouchend:function(v){return r.onGutterTouchEnd(v,b)},"data-p-gutter-resizing":!1,"data-p":r.dataP},{ref_for:!0},t.ptm("gutter")),[u("div",d({class:t.cx("gutterHandle"),tabindex:"0",style:[r.gutterStyle],"aria-orientation":t.layout,"aria-valuenow":a.prevSize,onKeyup:e[0]||(e[0]=function(){return r.onGutterKeyUp&&r.onGutterKeyUp.apply(r,arguments)}),onKeydown:function(v){return r.onGutterKeyDown(v,b)},"data-p":r.dataP},{ref_for:!0},t.ptm("gutterHandle")),null,16,Qn)],16,Jn)):$("",!0)],64)}),128))],16,qn)}Ne.render=Zn;var er={root:function(e){var n=e.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},tr=S.extend({name:"splitterpanel",classes:er}),nr={name:"BaseSplitterPanel",extends:P,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:tr,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},he={name:"SplitterPanel",extends:nr,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var e=this;return this.$slots.default().some(function(n){return e.nestedState=n.type.name==="Splitter"?!0:null,e.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function rr(t,e,n,i,a,r){return c(),h("div",d({ref:"container",class:t.cx("root")},t.ptmi("root",r.getPTOptions)),[f(t.$slots,"default")],16)}he.render=rr;var ar=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,ir={root:function(e){var n=e.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},or={root:function(e){var n=e.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},sr=S.extend({name:"divider",style:ar,classes:or,inlineStyles:ir}),lr={name:"BaseDivider",extends:P,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:sr,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(t)}function le(t,e,n){return(e=dr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dr(t){var e=cr(t,"string");return Q(e)=="symbol"?e:e+""}function cr(t,e){if(Q(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(Q(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var be={name:"Divider",extends:lr,inheritAttrs:!1,computed:{dataP:function(){return M(le(le(le({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},ur=["aria-orientation","data-p"],pr=["data-p"];function fr(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout,"data-p":r.dataP},t.ptmi("root")),[t.$slots.default?(c(),h("div",d({key:0,class:t.cx("content"),"data-p":r.dataP},t.ptm("content")),[f(t.$slots,"default")],16,pr)):$("",!0)],16,ur)}be.render=fr;var hr=`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`,br={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},vr=S.extend({name:"scrollpanel",style:hr,classes:br}),gr={name:"BaseScrollPanel",extends:P,props:{step:{type:Number,default:5}},style:vr,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},Fe={name:"ScrollPanel",extends:gr,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),i=ge(this.$el)-parseInt(n.height,10);e["max-height"]!=="none"&&i===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,i=this.$refs.content.clientWidth,a=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=i/n;var r=this.$refs.content.scrollHeight,p=this.$refs.content.clientHeight,b=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=p/r;var m=Math.max(this.scrollYRatio*100,10);this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&K(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&R(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/n*100+"%;bottom:"+a+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&K(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&R(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+m+"%; top: calc("+e.$refs.content.scrollTop/(r-p)*(100-m)+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+b+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&K(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&K(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&K(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&K(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,n){this.$refs.content[e]+=n,this.moveBar()},setTimer:function(e,n){var i=this;this.clearTimer(),this.timer=setTimeout(function(){i.repeat(e,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var n=this,i=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=i/n.scrollXRatio})},onMouseMoveForYBar:function(e){var n=this,i=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=i/n.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&R(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&R(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&R(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var n=window.requestAnimationFrame||this.timeoutFrame;return n(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>n?n:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){e.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){e.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},mr=["id"],yr=["aria-controls","aria-valuenow"],$r=["aria-controls","aria-valuenow"];function Pr(t,e,n,i,a,r){return c(),h("div",d({class:t.cx("root")},t.ptmi("root")),[u("div",d({class:t.cx("contentContainer")},t.ptm("contentContainer")),[u("div",d({ref:"content",id:r.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),onMouseenter:e[1]||(e[1]=function(){return r.moveBar&&r.moveBar.apply(r,arguments)})},t.ptm("content")),[f(t.$slots,"default")],16,mr)],16),u("div",d({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":r.contentId,"aria-valuenow":a.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return r.onXBarMouseDown&&r.onXBarMouseDown.apply(r,arguments)}),onKeydown:e[3]||(e[3]=function(p){return r.onKeyDown(p)}),onKeyup:e[4]||(e[4]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[5]||(e[5]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[6]||(e[6]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,yr),u("div",d({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":r.contentId,"aria-valuenow":a.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return r.onYBarMouseDown&&r.onYBarMouseDown.apply(r,arguments)}),onKeydown:e[8]||(e[8]=function(p){return r.onKeyDown(p)}),onKeyup:e[9]||(e[9]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[10]||(e[10]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,$r)],16)}Fe.render=Pr;const Sr={class:"px-4 py-6"},wr={class:"space-y-8"},kr={class:"space-y-4 p-4"},Tr={class:"flex gap-2"},Ar={class:"space-y-4 p-4"},zr={class:"flex gap-2"},xr={class:"space-y-4 p-4"},Br={class:"flex gap-2"},Cr={class:"grid gap-4 md:grid-cols-2"},Lr={class:"flex gap-2"},Ir={class:"space-y-4 p-4"},ta=je({__name:"Index",setup(t){const e=[{title:"PrimeVue Demos",href:Xe().url},{title:"Panel"}],n=We("1");return(i,a)=>(c(),h(I,null,[s(l(He),{title:"Panel Components - PrimeVue Demos"}),s(Ye,{breadcrumbs:e},{default:o(()=>[u("div",Sr,[u("div",wr,[s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[1]||(a[1]=[g("Accordion",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[2]||(a[2]=[g(" Expandable panels for displaying content in collapsible sections. ",-1)])]),_:1})]),_:1}),s(l(L),null,{default:o(()=>[s(l(Be),{value:"0"},{default:o(()=>[s(l(G),{value:"0"},{default:o(()=>[s(l(Y),null,{default:o(()=>[...a[3]||(a[3]=[g("What is PrimeVue?",-1)])]),_:1}),s(l(X),null,{default:o(()=>[...a[4]||(a[4]=[u("p",{class:"text-muted-foreground"}," PrimeVue is a rich set of open source UI components for Vue.js. It provides a wide range of components from basic inputs to complex data tables, all with a consistent design and excellent accessibility. ",-1)])]),_:1})]),_:1}),s(l(G),{value:"1"},{default:o(()=>[s(l(Y),null,{default:o(()=>[...a[5]||(a[5]=[g("Why choose PrimeVue?",-1)])]),_:1}),s(l(X),null,{default:o(()=>[...a[6]||(a[6]=[u("p",{class:"text-muted-foreground"}," PrimeVue offers 90+ components, multiple themes, excellent documentation, and is backed by PrimeTek, the company behind other popular UI libraries. ",-1)])]),_:1})]),_:1}),s(l(G),{value:"2"},{default:o(()=>[s(l(Y),null,{default:o(()=>[...a[7]||(a[7]=[g("How to get started?",-1)])]),_:1}),s(l(X),null,{default:o(()=>[...a[8]||(a[8]=[u("p",{class:"text-muted-foreground"}," Install PrimeVue via npm, configure it in your Vue application, and start importing components you need. The documentation provides detailed examples for each component. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[9]||(a[9]=[g("Tabs",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[10]||(a[10]=[g(" Tabbed navigation for organizing content into panels. ",-1)])]),_:1})]),_:1}),s(l(L),null,{default:o(()=>[s(l(Ce),{value:"0"},{default:o(()=>[s(l(Le),null,{default:o(()=>[s(l(ne),{value:"0"},{default:o(()=>[...a[11]||(a[11]=[g("Header I",-1)])]),_:1}),s(l(ne),{value:"1"},{default:o(()=>[...a[12]||(a[12]=[g("Header II",-1)])]),_:1}),s(l(ne),{value:"2"},{default:o(()=>[...a[13]||(a[13]=[g("Header III",-1)])]),_:1})]),_:1}),s(l(Ie),null,{default:o(()=>[s(l(re),{value:"0"},{default:o(()=>[...a[14]||(a[14]=[u("p",{class:"p-4 text-muted-foreground"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1)])]),_:1}),s(l(re),{value:"1"},{default:o(()=>[...a[15]||(a[15]=[u("p",{class:"p-4 text-muted-foreground"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. ",-1)])]),_:1}),s(l(re),{value:"2"},{default:o(()=>[...a[16]||(a[16]=[u("p",{class:"p-4 text-muted-foreground"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti. ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[17]||(a[17]=[g("Stepper",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[18]||(a[18]=[g(" Multi-step workflow component for guided processes. ",-1)])]),_:1})]),_:1}),s(l(L),null,{default:o(()=>[s(l(Me),{value:n.value,"onUpdate:value":a[0]||(a[0]=r=>n.value=r),linear:""},{default:o(()=>[s(l(De),null,{default:o(()=>[s(l(ae),{value:"1"},{default:o(()=>[...a[19]||(a[19]=[g("Personal Info",-1)])]),_:1}),s(l(ae),{value:"2"},{default:o(()=>[...a[20]||(a[20]=[g("Address",-1)])]),_:1}),s(l(ae),{value:"3"},{default:o(()=>[...a[21]||(a[21]=[g("Payment",-1)])]),_:1})]),_:1}),s(l(Ee),null,{default:o(()=>[s(l(ie),{value:"1"},{default:o(({activateCallback:r})=>[u("div",kr,[a[22]||(a[22]=u("p",{class:"text-muted-foreground"},"Enter your personal information",-1)),u("div",Tr,[s(l(D),{label:"Next",icon:"pi pi-arrow-right","icon-pos":"right",onClick:p=>r("2")},null,8,["onClick"])])])]),_:1}),s(l(ie),{value:"2"},{default:o(({activateCallback:r})=>[u("div",Ar,[a[23]||(a[23]=u("p",{class:"text-muted-foreground"},"Enter your address details",-1)),u("div",zr,[s(l(D),{label:"Back",severity:"secondary",onClick:p=>r("1")},null,8,["onClick"]),s(l(D),{label:"Next",icon:"pi pi-arrow-right","icon-pos":"right",onClick:p=>r("3")},null,8,["onClick"])])])]),_:1}),s(l(ie),{value:"3"},{default:o(({activateCallback:r})=>[u("div",xr,[a[24]||(a[24]=u("p",{class:"text-muted-foreground"},"Complete payment information",-1)),u("div",Br,[s(l(D),{label:"Back",severity:"secondary",onClick:p=>r("2")},null,8,["onClick"]),s(l(D),{label:"Complete",icon:"pi pi-check",severity:"success"})])])]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[25]||(a[25]=[g("PrimeVue Card",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[26]||(a[26]=[g(" Content container with header, body, and footer sections. ",-1)])]),_:1})]),_:1}),s(l(L),null,{default:o(()=>[u("div",Cr,[s(l(ce),null,{title:o(()=>[...a[27]||(a[27]=[g("Simple Card",-1)])]),content:o(()=>[...a[28]||(a[28]=[u("p",{class:"text-muted-foreground"}," This is a basic PrimeVue card with a title and content. ",-1)])]),_:1}),s(l(ce),null,{header:o(()=>[...a[29]||(a[29]=[u("div",{class:"h-32 rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-500"},null,-1)])]),title:o(()=>[...a[30]||(a[30]=[g("Card with Header",-1)])]),subtitle:o(()=>[...a[31]||(a[31]=[g("Subtitle text",-1)])]),content:o(()=>[...a[32]||(a[32]=[u("p",{class:"text-muted-foreground"},"Card with custom header image.",-1)])]),footer:o(()=>[u("div",Lr,[s(l(D),{label:"Cancel",severity:"secondary",outlined:""}),s(l(D),{label:"Save"})])]),_:1})])]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[33]||(a[33]=[g("Fieldset",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[34]||(a[34]=[g(" Grouping component with a legend and optional toggle functionality. ",-1)])]),_:1})]),_:1}),s(l(L),{class:"space-y-4"},{default:o(()=>[s(l(ue),{legend:"Basic Fieldset"},{default:o(()=>[...a[35]||(a[35]=[u("p",{class:"text-muted-foreground"}," Content within a fieldset is grouped together with a legend. ",-1)])]),_:1}),s(l(ue),{legend:"Toggleable Fieldset",toggleable:""},{default:o(()=>[...a[36]||(a[36]=[u("p",{class:"text-muted-foreground"}," This fieldset can be collapsed by clicking the legend. ",-1)])]),_:1})]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[37]||(a[37]=[g("Panel",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[38]||(a[38]=[g(" Container with header and optional toggle/header icons. ",-1)])]),_:1})]),_:1}),s(l(L),{class:"space-y-4"},{default:o(()=>[s(l(pe),{header:"Basic Panel"},{default:o(()=>[...a[39]||(a[39]=[u("p",{class:"text-muted-foreground"}," Panel is a container with a header and content area. ",-1)])]),_:1}),s(l(pe),{header:"Toggleable Panel",toggleable:""},{default:o(()=>[...a[40]||(a[40]=[u("p",{class:"text-muted-foreground"}," This panel can be collapsed using the toggle button in the header. ",-1)])]),_:1})]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[41]||(a[41]=[g("Splitter",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[42]||(a[42]=[g(" Resizable split panes for flexible layouts. ",-1)])]),_:1})]),_:1}),s(l(L),null,{default:o(()=>[s(l(Ne),{style:{height:"200px"}},{default:o(()=>[s(l(he),{size:40,"min-size":20},{default:o(()=>[...a[43]||(a[43]=[u("div",{class:"flex h-full items-center justify-center"},"Panel 1",-1)])]),_:1}),s(l(he),{size:60,"min-size":20},{default:o(()=>[...a[44]||(a[44]=[u("div",{class:"flex h-full items-center justify-center"},"Panel 2",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[45]||(a[45]=[g("Divider",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[46]||(a[46]=[g(" Visual separator between content sections. ",-1)])]),_:1})]),_:1}),s(l(L),null,{default:o(()=>[a[48]||(a[48]=u("p",{class:"text-muted-foreground"},"Content above the divider",-1)),s(l(be)),a[49]||(a[49]=u("p",{class:"text-muted-foreground"},"Content below the divider",-1)),s(l(be),{align:"center"},{default:o(()=>[...a[47]||(a[47]=[u("span",{class:"text-sm"},"OR",-1)])]),_:1}),a[50]||(a[50]=u("p",{class:"text-muted-foreground"},"Content with centered text divider",-1))]),_:1})]),_:1}),s(l(z),null,{default:o(()=>[s(l(x),null,{default:o(()=>[s(l(B),null,{default:o(()=>[...a[51]||(a[51]=[g("ScrollPanel",-1)])]),_:1}),s(l(C),null,{default:o(()=>[...a[52]||(a[52]=[g(" Customizable scrollable container with styled scrollbars. ",-1)])]),_:1})]),_:1}),s(l(L),null,{default:o(()=>[s(l(Fe),{style:{width:"100%",height:"200px"}},{default:o(()=>[u("div",Ir,[(c(),h(I,null,ve(10,r=>u("p",{key:r,class:"text-muted-foreground"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ")),64))])]),_:1})]),_:1})]),_:1})])])]),_:1})],64))}});export{ta as default};
