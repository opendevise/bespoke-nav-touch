!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.bespoke=e()}}(function(){return function e(n,t,r){function o(f,u){if(!t[f]){if(!n[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);throw new Error("Cannot find module '"+f+"'")}var d=t[f]={exports:{}};n[f][0].call(d.exports,function(e){var t=n[f][1][e];return o(t?t:e)},d,d.exports,e,n,t,r)}return t[f].exports}for(var i="function"==typeof require&&require,f=0;f<r.length;f++)o(r[f]);return o}({1:[function(e,n,t){var r=function(e,n){var t=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),r=[].filter.call("string"==typeof e.slides?t.querySelectorAll(e.slides):e.slides||t.children,function(e){return"SCRIPT"!==e.nodeName}),o=r[0],i={},f=function(e,n){r[e]&&(a("deactivate",c(o,n)),o=r[e],a("activate",c(o,n)))},u=function(e,n){return arguments.length?void(a("slide",c(r[e],n))&&f(e,n)):r.indexOf(o)},l=function(e,n){var t=r.indexOf(o)+e;a(e>0?"next":"prev",c(o,n))&&f(t,n)},d=function(e,n){return(i[e]||(i[e]=[])).push(n),s.bind(null,e,n)},s=function(e,n){i[e]=(i[e]||[]).filter(function(e){return e!==n})},a=function(e,n){return(i[e]||[]).reduce(function(e,t){return e&&t(n)!==!1},!0)},c=function(e,n){return n=n||{},n.index=r.indexOf(e),n.slide=e,n},p={on:d,off:s,fire:a,slide:u,next:l.bind(null,1),prev:l.bind(null,-1),parent:t,slides:r};return(n||[]).forEach(function(e){e(p)}),f(0),p};n.exports={from:r}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var t=n;t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.classes=e()}}(function(){return function e(n,t,r){function o(f,u){if(!t[f]){if(!n[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);throw new Error("Cannot find module '"+f+"'")}var d=t[f]={exports:{}};n[f][0].call(d.exports,function(e){var t=n[f][1][e];return o(t?t:e)},d,d.exports,e,n,t,r)}return t[f].exports}for(var i="function"==typeof require&&require,f=0;f<r.length;f++)o(r[f]);return o}({1:[function(e,n,t){n.exports=function(){return function(e){var n=function(e,n){e.classList.add("bespoke-"+n)},t=function(e,n){e.className=e.className.replace(new RegExp("bespoke-"+n+"(\\s|$)","g")," ").trim()},r=function(r,o){var i=e.slides[e.slide()],f=o-e.slide(),u=f>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(t.bind(null,r)),r!==i&&["inactive",u,u+"-"+Math.abs(f)].map(n.bind(null,r))};n(e.parent,"parent"),e.slides.map(function(e){n(e,"slide")}),e.on("activate",function(o){e.slides.map(r),n(o.slide,"active"),t(o.slide,"inactive")})}}},{}]},{},[1])(1)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.navtouch=e()}}(function(){return function e(n,t,r){function o(f,u){if(!t[f]){if(!n[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);var d=new Error("Cannot find module '"+f+"'");throw d.code="MODULE_NOT_FOUND",d}var s=t[f]={exports:{}};n[f][0].call(s.exports,function(e){var t=n[f][1][e];return o(t?t:e)},s,s.exports,e,n,t,r)}return t[f].exports}for(var i="function"==typeof require&&require,f=0;f<r.length;f++)o(r[f]);return o}({1:[function(e,n,t){n.exports=function(e){return function(n){var t=e||{},r="touchstart",o="touchmove",i="addEventListener",f="removeEventListener",u=n.parent,l=null,d=null,s="page"+("y"===t.axis?"Y":"X"),a="number"==typeof t.threshold?t.threshold:50/window.devicePixelRatio,c=function(e){l=1===e.touches.length?e.touches[0][s]:null},p=function(e){return null!==l?void 0===l?e.preventDefault():void(Math.abs(d=e.touches[0][s]-l)>a&&((d>0?n.prev:n.next)(),l=e.preventDefault())):void 0};n.on("destroy",function(){u[f](r,c),u[f](o,p)}),u[i](r,c),u[i](o,p)}}},{}]},{},[1])(1)}),bespoke.from(".deck",[bespoke.plugins.classes(),bespoke.plugins.navtouch()]);