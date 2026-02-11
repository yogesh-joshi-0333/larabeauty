import{K as E,a1 as B,o as v,c as f,F as C,G as D,m as y,a,D as g,i as P,al as q,am as G,M as Q,f as I,N as j,w as s,O as T,g as w,t as m,d as X,e as l,u as d,h as Y,ay as Z,r as k}from"./app-Db8zX_yn.js";import{i as ee,e as te,_ as ne}from"./AppLayout.vue_vue_type_script_setup_true_lang-DmOCtUN8.js";import{_ as O,a as x,b as z,d as F,c as L}from"./CardTitle.vue_vue_type_script_setup_true_lang-Ce0Vj_yL.js";import{s as H}from"./index-C1RYmeoo.js";import{f as ae}from"./index-8-Thnr2-.js";import{s as R}from"./index-CLw1Njpe.js";import{s as U}from"./index-DPhp-Xfj.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-T8NULR0F.js";import"./index-LKDOPZ3B.js";import"./VisuallyHidden-BydJVJPG.js";import"./useForwardExpose-8VbITG52.js";import"./useForwardPropsEmits-C0f3O4xG.js";import"./createLucideIcon-DIk780oZ.js";import"./index-CSEUMRIG.js";import"./index-CgM3A8Bn.js";import"./index-DmGExtZg.js";import"./index-CG8NYNO2.js";import"./index-oSUFl59z.js";import"./index-DlfP0eqz.js";import"./index-j9a35rv4.js";import"./index-Bpkia4y_.js";import"./index-DGvWr7HX.js";import"./index-BXvZyL_f.js";import"./index-SE5yVp5p.js";import"./index-DXO6Ba3t.js";import"./index-h_-YfEpO.js";import"./index-BG86LKz2.js";import"./index-CIRIVhVT.js";import"./index-Dtk4Zjw3.js";import"./index-DUArpv0b.js";import"./index-CBiIcPZE.js";import"./index-Bi-mSKGe.js";var ie=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,re={root:function(t){var i=t.props;return["p-timeline p-component","p-timeline-"+i.align,"p-timeline-"+i.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},oe=E.extend({name:"timeline",style:ie,classes:re}),se={name:"BaseTimeline",extends:H,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:oe,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function W(e,t,i){return(t=le(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function le(e){var t=de(e,"string");return _(t)=="symbol"?t:t+""}function de(e,t){if(_(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var h=i.call(e,t);if(_(h)!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var A={name:"Timeline",extends:se,inheritAttrs:!1,methods:{getKey:function(t,i){return this.dataKey?B(t,this.dataKey):i},getPTOptions:function(t,i){return this.ptm(t,{context:{index:i,count:this.value.length}})}},computed:{dataP:function(){return ae(W(W({},this.layout,this.layout),this.align,this.align))}}},pe=["data-p"],ue=["data-p"],ce=["data-p"],me=["data-p"],ge=["data-p"],ve=["data-p"],fe=["data-p"];function ye(e,t,i,h,u,o){return v(),f("div",y({class:e.cx("root")},e.ptmi("root"),{"data-p":o.dataP}),[(v(!0),f(C,null,D(e.value,function(c,n){return v(),f("div",y({key:o.getKey(c,n),class:e.cx("event")},{ref_for:!0},o.getPTOptions("event",n),{"data-p":o.dataP}),[a("div",y({class:e.cx("eventOpposite",{index:n})},{ref_for:!0},o.getPTOptions("eventOpposite",n),{"data-p":o.dataP}),[g(e.$slots,"opposite",{item:c,index:n})],16,ce),a("div",y({class:e.cx("eventSeparator")},{ref_for:!0},o.getPTOptions("eventSeparator",n),{"data-p":o.dataP}),[g(e.$slots,"marker",{item:c,index:n},function(){return[a("div",y({class:e.cx("eventMarker")},{ref_for:!0},o.getPTOptions("eventMarker",n),{"data-p":o.dataP}),null,16,ge)]}),n!==e.value.length-1?g(e.$slots,"connector",{key:0,item:c,index:n},function(){return[a("div",y({class:e.cx("eventConnector")},{ref_for:!0},o.getPTOptions("eventConnector",n),{"data-p":o.dataP}),null,16,ve)]}):P("",!0)],16,me),a("div",y({class:e.cx("eventContent")},{ref_for:!0},o.getPTOptions("eventContent",n),{"data-p":o.dataP}),[g(e.$slots,"content",{item:c,index:n})],16,fe)],16,ue)}),128))],16,pe)}A.render=ye;var he=`
    .p-dataview {
        position: relative;
        display: block;
        border-color: dt('dataview.border.color');
        border-width: dt('dataview.border.width');
        border-style: solid;
        border-radius: dt('dataview.border.radius');
        padding: dt('dataview.padding');
    }

    .p-dataview-header {
        background: dt('dataview.header.background');
        color: dt('dataview.header.color');
        border-color: dt('dataview.header.border.color');
        border-width: dt('dataview.header.border.width');
        border-style: solid;
        padding: dt('dataview.header.padding');
        border-radius: dt('dataview.header.border.radius');
    }

    .p-dataview-content {
        background: dt('dataview.content.background');
        border-color: dt('dataview.content.border.color');
        border-width: dt('dataview.content.border.width');
        border-style: solid;
        color: dt('dataview.content.color');
        padding: dt('dataview.content.padding');
        border-radius: dt('dataview.content.border.radius');
    }

    .p-dataview-footer {
        background: dt('dataview.footer.background');
        color: dt('dataview.footer.color');
        border-color: dt('dataview.footer.border.color');
        border-width: dt('dataview.footer.border.width');
        border-style: solid;
        padding: dt('dataview.footer.padding');
        border-radius: dt('dataview.footer.border.radius');
    }

    .p-dataview-paginator-top {
        border-width: dt('dataview.paginator.top.border.width');
        border-color: dt('dataview.paginator.top.border.color');
        border-style: solid;
    }

    .p-dataview-paginator-bottom {
        border-width: dt('dataview.paginator.bottom.border.width');
        border-color: dt('dataview.paginator.bottom.border.color');
        border-style: solid;
    }

    .p-dataview-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
`,be={root:function(t){var i=t.props;return["p-dataview p-component",{"p-dataview-list":i.layout==="list","p-dataview-grid":i.layout==="grid"}]},header:"p-dataview-header",pcPaginator:function(t){var i=t.position;return"p-dataview-paginator-"+i},content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},we=E.extend({name:"dataview",style:he,classes:be}),ke={name:"BaseDataView",extends:H,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},style:we,provide:function(){return{$pcDataView:this,$parentInstance:this}}};function Pe(e){return _e(e)||Te(e)||Ce(e)||Se()}function Se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(e,t){if(e){if(typeof e=="string")return N(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?N(e,t):void 0}}function Te(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _e(e){if(Array.isArray(e))return N(e)}function N(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,h=Array(t);i<t;i++)h[i]=e[i];return h}var J={name:"DataView",extends:ke,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(t){this.d_first=t},rows:function(t){this.d_rows=t},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(t,i){return this.dataKey?B(t,this.dataKey):i},onPage:function(t){this.d_first=t.first,this.d_rows=t.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",t)},sort:function(){var t=this;if(this.value){var i=Pe(this.value),h=q();return i.sort(function(u,o){var c=B(u,t.sortField),n=B(o,t.sortField);return G(c,n,t.sortOrder,h)}),i}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var t=this.value;if(t&&t.length&&this.sortField&&(t=this.sort()),this.paginator){var i=this.lazy?0:this.d_first;return t.slice(i,i+this.d_rows)}else return t}else return null}},components:{DVPaginator:R}};function $e(e,t,i,h,u,o){var c=Q("DVPaginator");return v(),f("div",y({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(v(),f("div",y({key:0,class:e.cx("header")},e.ptm("header")),[g(e.$slots,"header")],16)):P("",!0),o.paginatorTop?(v(),I(c,{key:1,rows:u.d_rows,first:u.d_first,totalRecords:o.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:T(e.cx("pcPaginator",{position:"top"})),alwaysShow:e.alwaysShowPaginator,onPage:t[0]||(t[0]=function(n){return o.onPage(n)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},j({_:2},[e.$slots.paginatorcontainer?{name:"container",fn:s(function(n){return[g(e.$slots,"paginatorcontainer",{first:n.first,last:n.last,rows:n.rows,page:n.page,pageCount:n.pageCount,pageLinks:n.pageLinks,totalRecords:n.totalRecords,firstPageCallback:n.firstPageCallback,lastPageCallback:n.lastPageCallback,prevPageCallback:n.prevPageCallback,nextPageCallback:n.nextPageCallback,rowChangeCallback:n.rowChangeCallback,changePageCallback:n.changePageCallback})]}),key:"0"}:void 0,e.$slots.paginatorstart?{name:"start",fn:s(function(){return[g(e.$slots,"paginatorstart")]}),key:"1"}:void 0,e.$slots.paginatorend?{name:"end",fn:s(function(){return[g(e.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):P("",!0),a("div",y({class:e.cx("content")},e.ptm("content")),[o.empty?(v(),f("div",y({key:1,class:e.cx("emptyMessage")},e.ptm("emptyMessage")),[g(e.$slots,"empty",{layout:e.layout},function(){return[w(m(o.emptyMessageText),1)]})],16)):(v(),f(C,{key:0},[e.$slots.list&&e.layout==="list"?g(e.$slots,"list",{key:0,items:o.items}):P("",!0),e.$slots.grid&&e.layout==="grid"?g(e.$slots,"grid",{key:1,items:o.items}):P("",!0)],64))],16),o.paginatorBottom?(v(),I(c,{key:2,rows:u.d_rows,first:u.d_first,totalRecords:o.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:T(e.cx("pcPaginator",{position:"bottom"})),alwaysShow:e.alwaysShowPaginator,onPage:t[1]||(t[1]=function(n){return o.onPage(n)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},j({_:2},[e.$slots.paginatorcontainer?{name:"container",fn:s(function(n){return[g(e.$slots,"paginatorcontainer",{first:n.first,last:n.last,rows:n.rows,page:n.page,pageCount:n.pageCount,pageLinks:n.pageLinks,totalRecords:n.totalRecords,firstPageCallback:n.firstPageCallback,lastPageCallback:n.lastPageCallback,prevPageCallback:n.prevPageCallback,nextPageCallback:n.nextPageCallback,rowChangeCallback:n.rowChangeCallback,changePageCallback:n.changePageCallback})]}),key:"0"}:void 0,e.$slots.paginatorstart?{name:"start",fn:s(function(){return[g(e.$slots,"paginatorstart")]}),key:"1"}:void 0,e.$slots.paginatorend?{name:"end",fn:s(function(){return[g(e.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):P("",!0),e.$slots.footer?(v(),f("div",y({key:3,class:e.cx("footer")},e.ptm("footer")),[g(e.$slots,"footer")],16)):P("",!0)],16)}J.render=$e;const Oe={class:"px-4 py-6"},xe={class:"space-y-8"},ze={class:"space-y-2"},Le={class:"text-sm"},Be={class:"text-xs text-muted-foreground"},Re={class:"space-y-2"},Ae={class:"text-xs text-muted-foreground"},Ke={class:"mt-1 text-xs"},Fe={class:"space-y-2"},De={class:"text-sm"},Ne={class:"space-y-2"},Me={class:"text-xs text-muted-foreground"},Ve={class:"space-y-2"},Ie={class:"space-y-2"},je={class:"flex justify-end"},Ue={class:"flex gap-1 rounded-lg border p-1"},We={class:"flex flex-col divide-y"},Ee={class:"flex-1"},He={class:"font-medium"},Je={class:"text-sm text-muted-foreground"},qe={class:"font-semibold"},Ge={class:"grid grid-cols-2 gap-4 p-4 md:grid-cols-3"},Qe={class:"mb-2 font-medium"},Xe={class:"mb-2 text-sm text-muted-foreground"},Ye={class:"flex items-center justify-between"},Ze={class:"font-semibold"},Bt=X({__name:"Misc",setup(e){const t=[{title:"PrimeVue Demos",href:ee().url},{title:"Data",href:te().url},{title:"Misc Data Components"}],i=k([{status:"Ordered",date:"15/10/2025 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Processing",date:"15/10/2025 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2025 16:15",icon:"pi pi-truck",color:"#FF9800"},{status:"Delivered",date:"16/10/2025 10:00",icon:"pi pi-check",color:"#4CAF50"}]),h=k([{status:"Ordered",date:"15/10/2025",icon:"pi pi-shopping-cart",color:"#9C27B0",description:"Order placed successfully"},{status:"Processing",date:"15/10/2025",icon:"pi pi-cog",color:"#673AB7",description:"Order is being processed"},{status:"Shipped",date:"15/10/2025",icon:"pi pi-truck",color:"#FF9800",description:"Package dispatched"},{status:"Delivered",date:"16/10/2025",icon:"pi pi-check",color:"#4CAF50",description:"Package delivered"}]),u=k(0),o=k(10),c=k(120),n=k([{id:"1",name:"Bamboo Watch",category:"Accessories",price:65,inventoryStatus:"INSTOCK",rating:5},{id:"2",name:"Black Watch",category:"Accessories",price:72,inventoryStatus:"INSTOCK",rating:4},{id:"3",name:"Blue Band",category:"Fitness",price:79,inventoryStatus:"LOWSTOCK",rating:3},{id:"4",name:"Blue T-Shirt",category:"Clothing",price:29,inventoryStatus:"INSTOCK",rating:5},{id:"5",name:"Bracelet",category:"Accessories",price:15,inventoryStatus:"OUTOFSTOCK",rating:4},{id:"6",name:"Brown Purse",category:"Accessories",price:120,inventoryStatus:"INSTOCK",rating:4}]),S=k("list"),M=$=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format($),V=$=>{switch($){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}};return($,r)=>(v(),f(C,null,[l(d(Y),{title:"Misc Data Components - PrimeVue Demos"}),l(ne,{breadcrumbs:t},{default:s(()=>[a("div",Oe,[a("div",xe,[l(d(O),null,{default:s(()=>[l(d(x),null,{default:s(()=>[l(d(z),null,{default:s(()=>[...r[6]||(r[6]=[w("Timeline",-1)])]),_:1}),l(d(F),null,{default:s(()=>[...r[7]||(r[7]=[w(" Component for displaying a sequence of events in chronological order. ",-1)])]),_:1})]),_:1}),l(d(L),{class:"space-y-8"},{default:s(()=>[a("div",ze,[r[8]||(r[8]=a("label",{class:"text-sm font-medium"},"Basic",-1)),l(d(A),{value:i.value},{content:s(({item:p})=>[a("div",Le,m(p.status),1),a("div",Be,m(p.date),1)]),_:1},8,["value"])]),a("div",Re,[r[9]||(r[9]=a("label",{class:"text-sm font-medium"},"With Custom Markers",-1)),l(d(A),{value:h.value,align:"alternate"},{marker:s(({item:p})=>[a("span",{class:"flex h-8 w-8 items-center justify-center rounded-full text-white shadow",style:Z({backgroundColor:p.color})},[a("i",{class:T(p.icon)},null,2)],4)]),content:s(({item:p})=>[l(d(O),{class:"mt-2"},{default:s(()=>[l(d(x),{class:"p-3"},{default:s(()=>[l(d(z),{class:"text-sm"},{default:s(()=>[w(m(p.status),1)]),_:2},1024)]),_:2},1024),l(d(L),{class:"p-3 pt-0"},{default:s(()=>[a("p",Ae,m(p.description),1),a("p",Ke,m(p.date),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["value"])]),a("div",Fe,[r[10]||(r[10]=a("label",{class:"text-sm font-medium"},"Horizontal",-1)),l(d(A),{value:i.value,layout:"horizontal",align:"top"},{content:s(({item:p})=>[a("div",De,m(p.status),1)]),_:1},8,["value"])])]),_:1})]),_:1}),l(d(O),null,{default:s(()=>[l(d(x),null,{default:s(()=>[l(d(z),null,{default:s(()=>[...r[11]||(r[11]=[w("Paginator",-1)])]),_:1}),l(d(F),null,{default:s(()=>[...r[12]||(r[12]=[w(" Standalone pagination component for navigating through data. ",-1)])]),_:1})]),_:1}),l(d(L),{class:"space-y-6"},{default:s(()=>[a("div",Ne,[r[13]||(r[13]=a("label",{class:"text-sm font-medium"},"Basic",-1)),l(d(R),{first:u.value,"onUpdate:first":r[0]||(r[0]=p=>u.value=p),rows:o.value,"total-records":c.value},null,8,["first","rows","total-records"]),a("p",Me," Showing "+m(u.value+1)+" to "+m(Math.min(u.value+o.value,c.value))+" of "+m(c.value),1)]),a("div",Ve,[r[14]||(r[14]=a("label",{class:"text-sm font-medium"},"With Rows Per Page",-1)),l(d(R),{first:u.value,"onUpdate:first":r[1]||(r[1]=p=>u.value=p),rows:o.value,"onUpdate:rows":r[2]||(r[2]=p=>o.value=p),"total-records":c.value,"rows-per-page-options":[10,20,30]},null,8,["first","rows","total-records"])]),a("div",Ie,[r[15]||(r[15]=a("label",{class:"text-sm font-medium"},"With Jump To Page",-1)),l(d(R),{first:u.value,"onUpdate:first":r[3]||(r[3]=p=>u.value=p),rows:o.value,"total-records":c.value,template:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown"},null,8,["first","rows","total-records"])])]),_:1})]),_:1}),l(d(O),null,{default:s(()=>[l(d(x),null,{default:s(()=>[l(d(z),null,{default:s(()=>[...r[16]||(r[16]=[w("DataView",-1)])]),_:1}),l(d(F),null,{default:s(()=>[...r[17]||(r[17]=[w(" Component for displaying data in list or grid layout. ",-1)])]),_:1})]),_:1}),l(d(L),null,{default:s(()=>[l(d(J),{value:n.value,layout:S.value},{header:s(()=>[a("div",je,[a("div",Ue,[a("button",{type:"button",class:T(["rounded p-2",{"bg-muted":S.value==="list"}]),onClick:r[4]||(r[4]=p=>S.value="list")},[...r[18]||(r[18]=[a("i",{class:"pi pi-list"},null,-1)])],2),a("button",{type:"button",class:T(["rounded p-2",{"bg-muted":S.value==="grid"}]),onClick:r[5]||(r[5]=p=>S.value="grid")},[...r[19]||(r[19]=[a("i",{class:"pi pi-th-large"},null,-1)])],2)])])]),list:s(({items:p})=>[a("div",We,[(v(!0),f(C,null,D(p,(b,K)=>(v(),f("div",{key:K,class:"flex items-center gap-4 p-4"},[a("div",Ee,[a("div",He,m(b.name),1),a("div",Je,m(b.category),1)]),l(d(U),{value:b.inventoryStatus,severity:V(b.inventoryStatus)},null,8,["value","severity"]),a("div",qe,m(M(b.price)),1)]))),128))])]),grid:s(({items:p})=>[a("div",Ge,[(v(!0),f(C,null,D(p,(b,K)=>(v(),f("div",{key:K,class:"rounded-lg border p-4"},[a("div",Qe,m(b.name),1),a("div",Xe,m(b.category),1),a("div",Ye,[a("span",Ze,m(M(b.price)),1),l(d(U),{value:b.inventoryStatus,severity:V(b.inventoryStatus)},null,8,["value","severity"])])]))),128))])]),_:1},8,["value","layout"])]),_:1})]),_:1})])])]),_:1})],64))}});export{Bt as default};
