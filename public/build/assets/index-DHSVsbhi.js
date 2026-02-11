import{K as l,L as u}from"./app-CSNJZ8QW.js";import{s as b}from"./index-CT_EkKp1.js";function y(...n){if(n){let e=[];for(let t=0;t<n.length;t++){let r=n[t];if(!r)continue;let i=typeof r;if(i==="string"||i==="number")e.push(r);else if(i==="object"){let s=Array.isArray(r)?[y(...r)]:Object.entries(r).map(([a,f])=>f?a:void 0);e=s.length?e.concat(s.filter(a=>!!a)):e}}return e.join(" ").trim()}}var m=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,d=l.extend({name:"baseicon",css:m});function o(n){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(n)}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?c(Object(t),!0).forEach(function(r){g(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function g(n,e,t){return(e=v(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function v(n){var e=O(n,"string");return o(e)=="symbol"?e:e+""}function O(n,e){if(o(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var w={name:"BaseIcon",extends:b,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:d,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=u(this.label);return p(p({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}};export{y as f,w as s};
