this.Element&&function(a){a.matches=a.matches||a.matchesSelector||a.webkitMatchesSelector||a.msMatchesSelector||function(a){for(var b=this,c=(b.parentNode||b.document).querySelectorAll(a),d=-1;c[++d]&&c[d]!==b;);return!!c[d]}}(Element.prototype),this.Element&&function(a){a.closest=a.closest||function(a){for(var b=this;b.matches&&!b.matches(a);)b=b.parentNode;return b.matches?b:null}}(Element.prototype),tb=function(){function a(a,b){var d=this;if(d.length=0,!a||a instanceof c.Selector)return d;if(a instanceof c)return[].push.call(d,a),d;switch(typeof a){case"string":c.dom(a+"[data-tb]",b||document.window).forEach(function(a){a.tb&&Object.keys(a.tb).forEach(function(b){[].push.call(d,a.tb[b])})});break;case"object":if(a instanceof c)return[].push.call(d,a),d;a instanceof RegExp?c.dom("[data-tb]",b||document.window).forEach(function(b){Object.keys(b.tb).forEach(function(e){var f=b.tb[e];f instanceof c&&f.namespace&&f.namespace.match(a)&&[].push.call(d,f)})}):a.nodeType&&a.tb?Object.keys(a.tb).forEach(function(b){[].push.call(d,a.tb[b])}):(a.constructor===Array||a.length&&a[0]&&!(a instanceof Array))&&[].forEach.call(a,function(a){var b=c(a);[].forEach.call(b,function(a){-1===[].indexOf.call(d,a)&&[].push.call(d,a)})});break;case"function":c.dom("[data-tb]",b||document.window).map(function(b){Object.keys(b.tb).forEach(function(e){var f=b.tb[e];f instanceof c&&f instanceof a&&[].push.call(d,f)})})}return d}function b(){}function c(){function d(a,b){for(var c in a.handlers)if(a.handlers.hasOwnProperty(c)){b.handlers[c]||(b.handlers[c]=[]);for(var d=0,e=a.handlers[c].length;d<e;d++)b.handlers[c].push(a.handlers[c][d])}}var e=this;if(!(e instanceof c))return new a(arguments[0]?arguments[0]:void 0,arguments[1]?arguments[1]:void 0);var f,g,h="string"==typeof arguments[0],i=(h&&"/"===arguments[0].substr(0,1),h?"/"+arguments[0].replace(/\./g,"/").replace(/^\//,"")+".js":""),j=h?c.namespace(arguments[0].replace(/^\//),"").get():arguments[0];if(h&&!j)return g=new c(b,arguments[1]||{},arguments[2]||!1),c.require(i).then(function(a){return function(){var b=new c(a[0],a[1]||{},a[2]||!1);if(g){for(var e in g)["handlers","target"].indexOf(e)===-1&&g.hasOwnProperty(e)&&(b[e]=g[e]);d(g,b)}}}([].slice.call(arguments))),g;if("function"==typeof j){if(j.prototype.__tb__||(Object.defineProperty(j.prototype,"__tb__",{value:"V7",enumerable:!0}),Object.setPrototypeOf(j.prototype,c.prototype)),f=new j(arguments[1]||{},arguments[2]),f.namespace||f instanceof b||(f.namespace="string"==typeof arguments[0]?arguments[0]:arguments[0].namespace||c.getId()),f.target=f.target||arguments[2]||!1,f.target||arguments[2]&&(!arguments[2].nodeType&&arguments[2][0]&&arguments[2][0].nodeType&&(arguments[2]=arguments[2][0]),f.target=arguments[2]),f.target&&f.target.nodeType&&!(f instanceof b)){f.target.tb=f.target.tb||{},f.target.tb[f.namespace]=f;var k=c.dom(f.target);if("head"!==f.target.nodeName&&k.parents().toArray().indexOf(document.head)===-1&&f.namespace&&k.addClass(f.namespace.replace(/\./g,"-").toLowerCase()),f.target&&f.target.nodeType){var l=f.target.getAttribute("data-tb");l&&l.length&&-1===l.split(" ").indexOf(f.namespace)?f.target.setAttribute("data-tb",l+" "+f.namespace):f.target.setAttribute("data-tb",f.namespace)}}if(f.handlers)for(var m in f.handlers)f.handlers.hasOwnProperty(m)&&("function"==typeof f.handlers[m]?f.handlers[m]=[f.handlers[m]]:f.handlers[m]instanceof Array||delete f.handlers[m]);else f.handlers={};if(!(f instanceof b)){f["tb.Require"]||f.trigger("init");for(var n in f)"string"==typeof n&&n.indexOf(".")>-1&&("tb.Require"===n?f["tb.Require"]=c.require(f["tb.Require"]).then(function(a){f.trigger("init")}):f[n]=new c(n,f[n],f))}return f}}function d(b,d,e){var f,g=c("");return b instanceof a&&[].forEach.call([].map.call(b,function(a,c){if(b.hasOwnProperty(c))return b[c]}),function(a,b){f=a[d].apply(a,[].slice.call(e)),[].forEach.call(f,function(a){[].indexOf.call(g,a)===-1&&[].push.call(g,a)})}),g}function e(a){var b=[][a];return-1<["pop","push","unshift","shift","splice"].indexOf(a)?function(){var a=this,d=b.apply(a,arguments);return d?d instanceof Array?c(d):d:a}:function(){var a=this,c=b.apply(a.toArray(),arguments);return c instanceof Array?a.flush().add(c):c}}var f;return b.prototype={namespace:"Nop"},f=c,c.Selector=a,c.prototype=function(){return{set:function(b,d){var e=this;return e instanceof a?([].forEach.call(e,function(a){a.set(b,d)}),e):(e instanceof c&&(e[b]=d),e)},get:function(b,d){var e=this;return e instanceof a?e[0][b]:e instanceof c?e[b]:d},trigger:function(d,e,f){var g,h=this;if(!c.stop()){if(g=d instanceof c.Event?d:new c.Event(d,e,f),g.__stopped__)return h;if(h instanceof a&&h.length)[].forEach.call(h,function(a){a&&a instanceof c&&!g.__immediateStopped__&&a.trigger(g)});else if(h instanceof c){if(h instanceof b&&"init"!==g.name)return h.one("init",function(){var a=this;a.trigger(g)}),h;if(h.handlers[g.name]&&g.bubble.indexOf("l")>-1){var i=[];h.handlers[g.name].map(function(a){g.bubble.indexOf("l")>-1&&!g.__immediateStopped__&&a&&(setTimeout(function(){try{a.apply(h,[g])}catch(b){console.error(b)}},0),a.once||i.push(a))}),i.length?h.handlers[g.name]=i:(h.handlers[g.name]=null,delete h.handlers[g.name])}if(g.__stopped__)return h;setTimeout(function(){g.bubble.indexOf("u")>-1&&h.parent().trigger(new c.Event(g.name,g.data,"lu")),g.bubble.indexOf("d")>-1&&[].forEach.call(h.children(),function(a){a.trigger(new c.Event(g.name,g.data,"ld"))})},0)}return h}},on:function(b,e,f){var g,h=this;return h instanceof a?d(h,"on",arguments):h instanceof c&&(g=-1<b.indexOf(" ")?b.split(" "):[b],e.once=!!e.once||!!f,g.forEach(function(a){h.handlers||(h.handlers={}),h.handlers[a]||(h.handlers[a]=[]),h.handlers[a].push(e)})),h},one:function(a,b){var c=this;return c.on(a,b,!0),c},off:function(b,e){var f,g,h=this;return"undefined"==typeof b?h:(h instanceof a?d(h,"off",arguments):h instanceof c&&(g=-1<b.indexOf(" ")?b.split(" "):[b],g.forEach(function(a){if(h.handlers[a])if("undefined"!=typeof e)for(f=h.handlers[a].indexOf(e);f>-1;)h.handlers[a].splice(f,1),f=h.handlers[a].indexOf(e),0===h.handlers[a].length&&(h.handlers[a]=null,delete h.handlers[a]);else h.handlers[a]=null,delete h.handlers[a]})),h)},parents:function(b){var e=this,f=c();return e instanceof a?f=d(e,"parents",arguments):e instanceof c&&e.target&&(e.target.nodeType?c.dom(e.target).parents("[data-tb]").not("html").forEach(function(a){a&&a.tb&&Object.keys(a.tb).forEach(function(b){[].push.call(f,a.tb[b])})}):e.target instanceof c&&([].push.call(f,e.target),e.target.parent()[0]&&[].push.call(f,e.target.parent()[0]))),b?f.filter(b):f},parent:function(b){var e=this,f=c();if(e instanceof a)f=d(e,"parent",arguments);else if(e instanceof c&&e.target)if(e.target.nodeType){var g=e.parents().toArray(),h=!!g[0]&&g[0];if(!h)return f;Object.keys(h.target.tb||{}).forEach(function(a){[].push.call(f,h.target.tb[a])})}else e.target instanceof c&&[].push.call(f,e.target);return b?f.filter(b):f},descendants:function(b,e){var f=this,g=c();return f instanceof a?g=d(this,"descendants",arguments):f instanceof c&&f.target.nodeType&&!e?c.dom("[data-tb]",f.target).forEach(function(a){Object.keys(a.tb).forEach(function(b){[].push.call(g,a.tb[b])})}):f instanceof c&&e&&Object.keys(f).forEach(function(a){if("target"!==a&&f[a]instanceof c){[].push.call(g,f[a]);for(var b=c.dom().toArray.call(f[a].descendants("",!0)),d=0,e=b.length;d<e;d++)[].push.call(g,b[d])}}),b?g.filter(b):g},children:function(b,e){var f=this,g=c(),e="undefined"!=typeof module||e;if(f instanceof a)g=d(f,"children",arguments);else if(f instanceof c&&f.target.nodeType&&!e){var h=c.getId(),i=c.dom("[data-tb]",f.target),j='[data-tempid="'+h+'"] [data-tb] *';c.dom(f.target).attr("data-tempid",h),i.not(j).forEach(function(a){Object.keys(a.tb).forEach(function(b){[].push.call(g,a.tb[b])})}),c.dom(f.target).removeAttr("data-tempid")}else if(e)for(var k in f)f.hasOwnProperty(k)&&f[k]instanceof c&&[].push.call(g,f[k]);return b?g.filter(b):g},next:function(b){var e,f,g=this,h=c("");return g instanceof a?h=d(this,"next",arguments):(e=g.parent().children(),f=[].indexOf.call(e,g),e.length>f+1&&[].push.call(h,e[f+1])),b?h.filter(b):h},prev:function(b){var e,f,g=this,h=c("");return g instanceof a?h=d(this,"prev",arguments):(e=this.parent().children(),f=[].indexOf.call(e,this),f&&[].push.call(h,e[f-1])),b?h.filter(b):h},first:function(b){var e,f=this,g=c("");return f instanceof a?g=d(this,"first",arguments):(e=this.parent().children(),[].push.call(g,e[0])),b?g.filter(b):g},last:function(b){var e,f=this,g=c("");return f instanceof a?g=d(this,"last",arguments):(e=this.parent().children(),[].push.call(g,e[e.length-1])),b?g.filter(b):g},toArray:function(){var a=this;return Array.from(a)},filter:function(b){var d=this,e=c(b),f=c();return b?(d instanceof a?[].forEach.call(d,function(a){-1<[].indexOf.call(e,a)&&[].push.call(f,a)}):d instanceof c&&-1<[].indexOf.call(e,d)&&[].push.call(f,d),f):d},not:function(a){var b=this,d=c(a).toArray(),e=c();return[].forEach.call(b,function(a){d.indexOf(a)===-1&&[].push.call(e,a)}),e},add:function(a){var b=this,d=c(a).toArray(),e=b.toArray();return c(e.concat(d))},flush:function(){var b=this;if(b instanceof a)for(;b.length;)b.pop();return b}}}(),a.prototype={concat:e("concat"),every:e("every"),forEach:e("forEach"),indexOf:e("indexOf"),map:e("map"),pop:e("pop"),push:e("push"),reduce:e("reduce"),reduceRight:e("reduceRight"),reverse:e("reverse"),shift:e("shift"),slice:e("slice"),some:e("some"),splice:e("splice"),unshift:e("unshift")},Object.keys(c.prototype).forEach(function(b){a.prototype[b]=c.prototype[b]}),a.prototype.unique=function(){var a=this,b=[];return[].forEach.call(a,function(a){b.indexOf(a)===-1&&b.push(a)}),c.dom(b)},c.plugin=function(a){return function(b,c){var d=a;d[b]?console.warn("tb.plugin(): Cannot overload existing tb method (",b,")"):d[b]=c}}(f.prototype),c}(),tb.Event=function(a,b,c){var d=this;d.bubble=c||"l",d.data=b||{},d.name=a||"",d.__stopped__=d.__immediateStopped__=!1},tb.Event.prototype={stopPropagation:function(){return this.__stopped__=!0,this},stopImmediatePropagation:function(){return this.stopPropagation(),this.__immediateStopped__=!0,this}},"undefined"!=typeof module?module.exports=tb:!function(){function a(){tb.attach(document.body)}document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),a()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),a())})}(),tb.debug=!1,"undefined"==typeof module&&(tb.dom=function(){function a(a,b,c,d){a.attachEvent?a.attachEvent("on"+b,c,d):a.addEventListener(b,c,d)}function b(a,b,c,d){a.detachEvent?a.detachEvent("on"+b,c,d):a.removeEventListener(b,c,d)}function c(a){var b=document.createElement("template");return b.innerHTML=a,b.content.childNodes?b.content.childNodes:b.childNodes}function d(a){var b=[][a];return-1<["push","unshift"].indexOf(a)?function(){return b.apply(this,arguments),this.unique()}:function(){var a=b.apply(this,arguments);return a instanceof Array&&a[0]&&a[0].nodeType?tb.dom(a).unique():a}}function e(a){var b,c=this;return"string"!=typeof a&&a.length?[].forEach.call(a,function(a){b=tb.dom(a).toArray(),b.forEach(function(a){[].indexOf.call(c,a)===-1&&[].push.call(c,a)})}):(b=tb.dom(a).toArray(),b.forEach(function(a){[].indexOf.call(c,a)===-1&&[].push.call(c,a)})),c.unique()}function f(a){var b=this;if(!a||"string"!=typeof a)return console.warn("method addClass: missing or wrong pClassNames"),b;var c=a.split(" ").filter(function(a){return!!a});return b.forEach(function(a){var b=(a.getAttribute("class")||"").split(" ").filter(function(a){return!!a});c.forEach(function(a){b.indexOf(a)===-1&&b.push(a)}),a.setAttribute("class",b.join(" "))}),b}function g(a){var b,c=this;return c.forEach(function(c){b=tb.dom(a),[].forEach.call(b,function(a){a.nodeType&&c.appendChild(a)})}),c}function h(a){var b=this;return a=tb.dom(a),a[0]&&(a=a[0],b.forEach(function(b){a.appendChild(b)})),b}function i(a,b){var c,d=this,e={};return"object"==typeof a?(Object.keys(a).forEach(function(b){d.forEach(function(c){tb.dom(c).attr(b,a[b])})}),d):arguments.length?void 0===b&&d.length>0?d[0].getAttribute(a):(c=d.toArray(),c.forEach(function(c){c.setAttribute(a,b)}),d):([].forEach.call(d[0].attributes,function(a){e[a.name]=a.value}),e)}function j(a){var b=this,c=tb.dom();return b.forEach(function(b){var d=void 0!==a&&tb.dom(a);[].forEach.call(b.children,function(a){-1===[].indexOf.call(c,a)&&(!d||-1<[].indexOf.call(d,a))&&c.push(a)})}),c}function k(){var a=this;return a.forEach(function(a){var b=document.createTreeWalker(a,128);for(a.normalize();b.nextNode();)setTimeout(function(a){return function(){a.remove()}}(b.currentNode),0)}),a}function l(a){var b,c=this,d=[],e=!!a&&tb.dom(a);return c.forEach(function(a){d=d.concat(tb.dom(a.querySelectorAll("*")).toArray())}),d=tb.dom(d).unique().toArray(),e&&(b=d.filter(function(a){return-1<[].indexOf.call(e,a)})),tb.dom(e?b:d)}function m(){var a=this;return a.forEach(function(a){a.innerHTML=""}),a}function n(a){var b,c=this,d=tb.dom(a);return"undefined"===a?c:("string"==typeof a?b=[].filter.call(c,function(a){return-1<d.indexOf(a)}):a instanceof Function&&(b=[].filter.call(c,a)),tb.dom(b))}function o(a){var b=this,c=!!b[0]&&b[0];if(c)return c.className.split(" ").indexOf(a)>-1}function p(){var a=this;return a.forEach(function(a){a.style.prevDisplay=["","none"].indexOf(a.style.display)===-1?a.style.display:"",a.style.display="none"}),a}function q(a){var b=this;return"undefined"==typeof a?b[0]?b[0].innerHTML:"":("string"==typeof a&&b.forEach(function(b){b.innerHTML=a}),b)}function r(a){var b=this,c=!!tb.dom(a)[0]&&tb.dom(a)[0];if(c)return b.forEach(function(b){b.nodeType&&c.parentElement.insertBefore(b.cloneNode(!0),a)}),b}function s(a){var b=this,c=!!tb.dom(a)[0]&&tb.dom(a)[0],d=c.nextSibling||!1;if(c)return b.forEach(function(a){a.nodeType&&(d?c.parentElement.insertBefore(a.cloneNode(!0),d):c.parentElement.appendChild(a.cloneNode(!0)))}),b}function t(a){var b=this,c=tb.dom(),d=void 0!==a&&document.querySelectorAll(a);return d?(b.forEach(function(a){-1===[].indexOf.call(d,a)&&c.add(a)}),c):b}function u(a,c,d){var e=this,f=a.indexOf(" ")>-1?a.split(" "):[a],g="boolean"==typeof d&&d;return e.forEach(function(a){a.nodeType&&(c?f.forEach(function(d){b(a,d,c,g)}):f.forEach(function(b){a["on"+b]=null,a.removeAttribute("on"+b)}))}),e}function v(c,d,e){var f,g=this,h=c.indexOf(" ")>-1?c.split(" "):[c],i="boolean"==typeof e&&e;return d.once&&(f=function(a,c){return function(c){g.forEach(function(a){a.nodeType&&h.forEach(function(c){b(a,c,f,i)})}),a.apply(c,arguments)}}(d,e),f.that=g,f.remove=function(){g.forEach(function(a){a.nodeType&&h.forEach(function(c){b(a,c,f,i)})})}),g.forEach(function(b){b.nodeType&&h.forEach(function(c){a(b,c,f||d,i)})}),f?f:g}function w(a,b,c){var d=this;return b.once=!0,d.on(a,b,c)}function x(a){var b,c=this,d=tb.dom(),e=void 0!==a&&tb.dom(a);return c.forEach(function(a){for(b=a.parentNode;b&&b.tagName&&"HTML"!==b.tagName;)[].indexOf.call(d,b)===-1&&(!e||-1<[].indexOf.call(e,b))&&d.push(b),b=b.parentNode}),d}function y(a){var b=this,c=tb.dom(),d=void 0!==a&&tb.dom(a);return b.forEach(function(a){var b=a.parentNode;-1===[].indexOf.call(c,b)&&(!d||-1<[].indexOf.call(d,b))&&[].push.call(c,b)}),c}function z(a){var b=this;return b.forEach(function(a,c){b[c]=a.parentNode.removeChild(a)}),b}function A(a){var b,c,d=this,e=a&&a.match(L);return d.forEach(function(a){if(c=0,e&&a.nodeType&&1===a.nodeType)for(;b=e[c++];)a.removeAttribute(b)}),d}function B(a){var b=this,c=a.split(" ").filter(function(a){return!!a});return b.forEach(function(a){var b=(a.getAttribute("class")||"").split(" ").filter(function(a){return!!a});c.forEach(function(c){for(;b.indexOf(c)>-1;)b.splice(b.indexOf(c),1);b.length?tb.dom(a).attr("class",b.join(" ")):tb.dom(a).removeAttr("class")})}),b}function C(){var a=this;return a.forEach(function(a){a.style.display=a.style.prevDisplay}),a}function D(){var a=this;return Array.from(a)}function E(a){var b,c=this;return c.forEach(function(c){b=tb.dom(c),b[b.hasClass(a)?"removeClass":"addClass"](a)}),c}function F(a,b,c,d){var e,f="boolean"!=typeof c||c,g="boolean"!=typeof d||d,h=this,i=a.split(" ");return h.forEach(function(a){a.nodeType&&i.forEach(function(c){"createEvent"in document?(e=document.createEvent("HTMLEvents"),tb.extend(e.data,b),e.initEvent(c,f,g),a.dispatchEvent(e)):(e=document.createEventObject(),tb.extend(e.data,b),e.eventType=c,a.fireEvent("on"+e.pThisEventName,e))})}),h}function G(){var a=this,b=[];return[].forEach.call(a,function(a){b.indexOf(a)===-1&&b.push(a)}),tb.dom(b)}function H(a){function b(a){return 1===a.nodeType&&e.indexOf(a.tagName.toLowerCase())>-1&&f.indexOf(a.type)===-1}var c,d=this,e="input select textarea".split(" "),f="button file image reset submit".split(" "),g={select:function(a){var b,c=this,d="select-multiple"===c.type;return arguments.length?(a=a.constructor!==Array?[a]:a,a=d||a.constructor!==Array?a:[a[0]],[].forEach.call(c.options,function(b){var c,d=a.indexOf(b.value);d+1?(c=a[d],b.selected=!!c):b.selected=!1}),a.forEach(function(a){tb.dom('option[value="'+a+'"]',c).selected=!0}),c):(b=[],[].forEach.call(c.selectedOptions,function(a){if(a.selected&&!(a.disabled||a.parentNode.disabled&&"optgroup"===a.parentNode.nodeName)){var c=a.value;b.push(c)}}),d?b:b[0]?b[0]:"")},"default":function(a){var b,c=this;if("radio"===c.type){var d=c.name,e='[type="radio"][name="'+d+'"]',f=tb.dom(c).parents("form").descendants(e);return b="",f.forEach(function(c){var d;"undefined"!=typeof a?(d=c.value===a,c.checked=!!d,b=c.checked?c.value:b):c.checked===!0&&(b=c.value)}),b}return"checkbox"===c.type?("undefined"!=typeof a?(c.checked=!!a,b=c.checked):(b=!1,c.checked===!0&&(b=!0)),b):arguments.length?(null==a?a="":"number"==typeof H&&(a+=""),void(c.value=a)):(b=c.value,"string"==typeof b?b:null==b?"":b)}};return arguments.length?(d.forEach(function(d){b(d)&&(c=g[d.tagName.toLowerCase()]?g[d.tagName.toLowerCase()].call(d,a):g["default"].call(d,a))}),d):(d.some(function(a){return!!b(a)&&(c=g[a.tagName.toLowerCase()]?g[a.tagName.toLowerCase()].call(a):g["default"].call(a),!0)}),c)}function I(a){function b(){}var c,d=this,e=d[0]||void 0;if(!e)return d;if("object"==typeof a&&e){var f=tb.dom(e).values();return void Object.keys(a).forEach(function(b){f.hasOwnProperty(b)&&(f[b]=a[b])})}return e.values=e.values?e.values:tb.observable({}),b.prototype={observe:function(a,b){e.values.observe(a,b)},encodeURIComponents:function(a){var b={},c=this;return Object.keys(this).forEach(function(d){var e=c[d];"string"==typeof e&&(!a||a.indexOf(d)>-1)?b[d]=encodeURIComponent(e):b[d]=e}),b}},c=new b,Object.defineProperty(d,"values",{enumerable:!0,configurable:!0,set:function(a){e.values.enableNotify(!1),Object.keys(a).forEach(function(b){d.values[b]=a[b]}),e.values.enableNotify().notify()},get:function(a,b){return function(){var d=tb.dom("input[name],select[name],textarea[name]",a);return d.forEach(function(a){var d=tb.dom(a).attr("name");c.hasOwnProperty(d)||Object.defineProperty(c,d,{enumerable:!0,get:function(){return tb.dom(a).val()},set:function(d){var e=tb.dom(a).val(d);return b(c),e}})}),a.values(c),c}}(e,e.values)}),d.values}var J,K,L=/\S+/g,M=tb.Selector;return J=function(a,b){var d,e,f=this;if(!a)return f;if(a.nodeType)return void([].indexOf.call(f,a)===-1&&[].push.call(f,a));if(a.__tbSelector__)return a;if(a instanceof M&&a[0])return void[].forEach.call(a,function(a){a.target&&a.target.nodeType&&[].indexOf.call(f,a.target)===-1&&[].push.call(f,a.target)});if(a instanceof Array||a.__tbSelector__||a instanceof HTMLCollection||a instanceof NodeList)return void[].forEach.call(a,function(a){tb.dom(a).forEach(function(a){[].indexOf.call(f,a)===-1&&[].push.call(f,a)})});if("string"==typeof a){var g=c(a);return 1===g.length&&g[0].nodeType&&3===g[0].nodeType?(d=b&&b.nodeType?b:document,void a.split(",").forEach(function(a){e=d.querySelectorAll(a.trim()),e[0]&&[].forEach.call(e,function(a){[].indexOf.call(f,a)===-1&&[].push.call(f,a)})})):tb.dom(g)}},J.prototype={__tbSelector__:!0,length:0,concat:d("concat"),every:d("every"),forEach:d("forEach"),indexOf:d("indexOf"),map:d("map"),pop:d("pop"),push:d("push"),reduce:d("reduce"),reduceRight:d("reduceRight"),reverse:d("reverse"),shift:d("shift"),slice:d("slice"),some:d("some"),splice:d("splice"),unshift:d("unshift"),add:e,addClass:f,append:g,appendTo:h,attr:i,children:j,clean:k,descendants:l,empty:m,hasClass:o,hide:p,html:q,insertBefore:r,insertAfter:s,filter:n,not:t,off:u,on:v,one:w,parent:y,parents:x,remove:z,removeAttr:A,removeClass:B,show:C,toArray:D,toggleClass:E,trigger:F,unique:G,val:H,values:I},K=function(a,b){return new J(a,b)},K.innerProto=J.prototype,K}(),tb.dom.plugin=function(a,b){var c=tb.dom.innerProto;c[a]?console.warn("tb.dom.plugin(): Cannot overload existing tb method (",a,")"):c[a]=b}),tb.nop=function(){},tb.observable=function(a){var b=a,c=!0,d=function(a,e){function f(){if(c)return d.lastChanged=(new Date).getTime(),d.notify()}if("undefined"==typeof a)return b;if(b.constructor===Object)if("string"==typeof a){if("undefined"==typeof e)return tb.namespace(a,b).get();a.indexOf(".")>-1?tb.namespace(a,b).set(e):b[a]=e,f()}else"object"==typeof a&&"undefined"==typeof e?(b=a,f()):console.warn("tb.observable() set value: parameter 1 should be a string or object if observed data is an object!");else{if("undefined"==typeof a)return b;b=a,f()}return d};return d.lastChanged=(new Date).getTime(),d.notifiers=[],d.notify=function(){return d.notifiers.forEach(function(a,c){"function"==typeof a?(a(b),a.once&&d.notifiers.splice(c,1)):d.notifiers.splice(c,1)}),d},d.enableNotify=function(a){return c=a!==!1,d},d.observe=function(a,b){return a.once=b||!1,d.notifiers.push(a),d},d},tb.namespace=function(){function a(a,b){var c=this;c.namespace=a,c.target=b,c.namespaceArray=a.indexOf(".")?a.split("."):[a],c.forceCreation=!1}function b(a,b){var c=this;return!a[b[0]]&&this.forceCreation&&(a[b[0]]={}),b.length<2?(c.forceCreation&&"undefined"!=typeof c.value&&(a[b[0]]=c.value),a.hasOwnProperty(b[0])?a[b[0]]:void 0):a.hasOwnProperty(b[0])?(a=a[b[0]],b.shift(),c._walk(a,b)):void 0}function c(){var a=this;return a.forceCreation=!1,a._walk(a.target?a.target:window,a.namespaceArray)}function d(a){var b=this;return"function"==typeof a&&a.prototype!==Function.prototype&&(a.prototype.namespace=b.namespace),b.value=a,b.forceCreation=!0,b._walk(b.target?b.target:window,b.namespaceArray)}return a.prototype={get:c,set:d,_walk:b},function(b,c){return new a(b,c)}}(),tb.attach=function(a){var b=a||document.body,c=tb.dom(b.querySelectorAll("[data-tb]")).toArray();b.getAttribute("data-tb")&&(c=[b].concat(c)),c.forEach(function(a){var b=a.getAttribute("data-tb").split(" ");b.forEach(function(b){a.tb=a.tb||{},a.tb[b]||new tb(b,null,a)})})},tb.status={loadCount:tb.observable(0)},tb.idle=function(a){var b=function(){if(0===tb.status.loadCount()){var c=function(){0===tb.status.loadCount()?tb.status.loadCount.lastChanged===c.lastChanged?"function"==typeof a&&a():(c.lastChanged=tb.status.loadCount.lastChanged,setTimeout(c,100)):tb.status.loadCount.observe(b,!0)};c.lastChanged=0,setTimeout(c,100)}else tb.status.loadCount.observe(b,!0)};tb.status.loadCount.observe(b,!0)},tb.getId=function(){return"id-"+(new Date).getTime()+"-"+Math.random().toString().replace(/\./,"")},tb.extend=function(a){function b(b){c.hasOwnProperty(b)&&c[b]instanceof Object&&c[b].constructor===Object?a[b]=tb.extend(a[b]instanceof Object?a[b]:{},c[b]):c.hasOwnProperty(b)&&c[b]instanceof Object&&c[b].constructor===Array?a[b]=Array.from(c[b]):a[b]=c[b]}for(var c;arguments[1];)c=arguments[1],Object.keys(c).forEach(b),[].splice.call(arguments,1,1);return a},tb.parse=function(a,b){var c=Array.prototype.slice.call(arguments);if(!c.length)return void console.error("no arguments give to parse");if(1===c.length)return c[1];if(c.length>2){for(;c.length>1;)c[0]=tb.parse(c[0],c[1]),c.splice(1,1);return c[0]}if("string"==typeof a){var d=a.match(/\{[^\{\}]*\}/g);d&&d.forEach(function(c){var d=c.substr(1,c.length-2),e=tb.namespace(d,b).get();"undefined"!=typeof e&&(a=a.replace(c,e))})}else if(a.constructor)switch(a.constructor){case Object:Object.keys(a).forEach(function(c){a.hasOwnProperty(c)&&(a[c]=tb.parse(a[c],b))});break;case Array:a.forEach(function(c,d){a[d]=tb.parse(a[d],b)})}return a},tb.Promise=function(){"use strict";function a(a){if(a=a||tb.nop,"object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._deferredState=0,this._state=0,this._value=null,this._deferreds=null,a!==tb.nop&&p(a,this)}function b(b,c){if(!(this instanceof a))return i(this,b,c);var d=new a(tb.nop);return j(this,new o(b,c,d)),d}function c(a){return this.then(null,a)}function d(a,b){var c=arguments.length?this.then.apply(this,arguments):this;c.then(null,function(a){setTimeout(function(){throw a},0)})}function e(b){var c=this;return this.then(function(d){return a.resolve(b(c._value)).then(function(){return c._value})},function(d){return a.resolve(b(c._value)).then(function(){throw c._value})})}function f(a){try{return a.then}catch(b){return q=b,r}}function g(a,b){try{return a(b)}catch(c){return q=c,r}}function h(a,b,c){try{a(b,c)}catch(d){return q=d,r}}function i(a,b,c){return new a.constructor(function(d,e){var f=new tb.Promise(tb.nop);f.then(d,e),j(a,new o(b,c,f))})}function j(b,c){for(;3===b._state;)b=b._value;return a._onHandle&&a._onHandle(b),0===b._state?0===b._deferredState?(b._deferredState=1,void(b._deferreds=c)):1===b._deferredState?(b._deferredState=2,void(b._deferreds=[b._deferreds,c])):void b._deferreds.push(c):void k(b,c)}function k(a,b){setTimeout(function(){var c=1===a._state?b.onFulfilled:b.onRejected;if(null===c)return void(1===a._state?l(b.promise,a._value):m(b.promise,a._value));var d=g(c,a._value);d===r?m(b.promise,q):l(b.promise,d)},0)}function l(b,c){if(c===b)return m(b,new TypeError("A promise cannot be resolved with itself."));if(c&&("object"==typeof c||"function"==typeof c)){var d=f(c);if(d===r)return m(b,q);if(d===b.then&&c instanceof a)return b._state=3,b._value=c,void n(b);if("function"==typeof d)return void p(d.bind(c),b)}b._state=1,b._value=c,n(b)}function m(b,c){b._state=2,b._value=c,a._onReject&&a._onReject(b,c),n(b)}function n(a){if(1===a._deferredState&&(j(a,a._deferreds),a._deferreds=null),2===a._deferredState){for(var b=0;b<a._deferreds.length;b++)j(a,a._deferreds[b]);a._deferreds=null}}function o(a,b,c){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.promise=c}function p(a,b){var c=!1,d=h(a,function(a){c||(c=!0,l(b,a))},function(a){c||(c=!0,m(b,a))});c||d!==r||(c=!0,m(b,q))}var q=null,r={};return a._onHandle=null,a._onReject=null,a.prototype={then:b,"catch":c,"finally":e,done:d},a.resolve=function(a){var b=new tb.Promise(function(a,b){});return l(b,a),b},a.reject=function(a){var b=new tb.Promise(function(a,b){});return m(b,a),b},a.all=function(b){var c=b.length,d=tb.observable(c),e=new a,f=new Array(c);return b.forEach(function(a,b){a.then&&"function"==typeof a.then||(a=tb.Promise.resolve(a)),a.then(function(a){f[b]=a})["catch"](function(a){0===e._state&&m(e,a._value)})["finally"](function(a){d(d()-1)})}),d.observe(function(a){0===a&&(d=null,0===e._state&&l(e,f))}),e},a.race=function(b){var c=new tb.Promise;return b.forEach(function(b,d,e){b.constructor!==a&&(e[d]=a.resolve(b)),e[d].then(function(a){0===c._state&&l(c,a)})["catch"](function(a){0===c._state&&m(c,a)})}),c},a}(),tb.Require=function(a){return tb.require(a)},tb.Require.prototype={},tb.require=function(a,b){function c(a){var b,c,d=require("fs"),f=e(a);return c=new tb.Promise(function(c,e){var g=a;if("js"===f)try{require(g),c("done.")}catch(h){c('error reading file using require("'+g+'"")')}else if(d.existsSync(g))try{b=d.readFileSync(g,"utf8"),c(b)}catch(h){c("error: could not read file ["+g+"]")}else c("error: file not found ["+g+"]")})["finally"](function(b){tb.require.repo[f][a]=b})}function d(a){var b,c,d={css:{tag:"link",attributes:{type:"text/css",rel:"stylesheet",href:"{src}"}},js:{tag:"script",attributes:{type:"text/javascript",src:"{src}"}}},f=e(a),g=a;if(tb.require.cacheBust,d[f])return tb.status.loadCount(tb.status.loadCount()+1),c=new tb.Promise(function(c,e){var g;b=d[f],g=document.createElement(b.tag),g.async=!0,g.onreadystatechange=g.onload=function(){var a=g.readyState;a&&!/loaded|complete/.test(a)||c("1")},Object.keys(b.attributes).forEach(function(c){g.setAttribute(c,tb.parse(b.attributes[c],{src:a}))}),document.getElementsByTagName("head")[0].appendChild(g)})["finally"](function(){tb.status.loadCount(tb.status.loadCount()-1),tb.require.repo[f][a]="done"});var h=function(b){if("json"===f&&b.text)try{tb.require.repo[f][a]=JSON.parse(b.text)}catch(c){console.error("result parsing, valid JSON expected in:",b)}else tb.require.repo[f][a]=b.text},i={url:g};return tb.request(i)["finally"](h)}function e(a){return a.split("?")[0].split(".").pop()}var f,g=[];if(!a){var h="tb.require: no files given.";return console.warn(h),tb.Promise.reject(h)}return"string"==typeof a&&(a=[a]),a.forEach(function(a){var b=e(a);if(a.split("/").pop().indexOf(".")===-1){var f="tb.require: no file type given for ";return console.warn(f,a),tb.Promise.reject(f+a)}tb.require.repo[b]||(tb.require.repo[b]={}),tb.require.repo[b][a]||(tb.require.repo[b][a]="undefined"==typeof module?d(a):c(a)),g.push(tb.require.repo[b][a])}),f=tb.Promise.all(g),b&&f["finally"](function(a){b.call(a)}),f},tb.require.repo={},tb.require.cacheBust=!0,tb.require.loadcount=0,tb.require.get=function(a){return tb.require.repo[a.split("?")[0].split(".").pop()][a]||void 0},"undefined"==typeof module&&(tb.request=function(){function a(a){var b,c,d;if("undefined"!=typeof ActiveXObject)for(var e=0;e<l.length;++e)try{c=new ActiveXObject(l[e]),b={connection:c,identifier:a},d=function(a){return function(c){var d=new ActiveXObject(a);return b={connection:d,identifier:c}}}(l[e])}catch(f){}try{c=new XMLHttpRequest,b={connection:c,identifier:a},d=function(a){var c=new XMLHttpRequest;return b={connection:c,identifier:a}}}catch(f){}finally{return b}}function b(a,b,d,e,f){var g=window.setInterval(function(d){return function(){a.connection.readyState!==d&&(d=a.connection.readyState),4===d&&(a.aborttimer&&window.clearTimeout(a.aborttimer),window.clearInterval(g),c(a,b,e,f))}}(0),k);return g}function c(a,b,c,f){var g,h;try{g=a.connection.status}catch(i){g=13030}if(g>=200&&g<400){h=d(a,f);try{b(h)}catch(i){tb.debug}}else h=d(a,tb.extend({},f)),c(h);e(a)}function d(a,b){var c={tId:a.identifier,status:a.connection.status,statusText:a.connection.statusText,responseHeaders:{},requestHeaders:b.headers,text:a.connection.responseText,xml:a.connection.responseXML,options:b};if(a.connection.getAllResponseHeaders().split("\r\n").forEach(function(a){var b=a.split(":")[0],d=a.substr(a.indexOf(":")+1);a&&(c.responseHeaders[b]=d)}),b.dataType&&"json"===b.dataType.toLowerCase())try{c.data=JSON.parse(a.connection.responseText)}catch(d){console.warn("expected JSON, could not parse: "+a.connection.responseText)}return c}function e(a){g(a),a.connection&&(a.connection=null),a=null}function f(a){tb.status.loadCount(tb.status.loadCount()+1),h.push(a),j++,i="loading"}function g(a){tb.status.loadCount(tb.status.loadCount()-1),h.indexOf(a)&&(j--,h.splice(h.indexOf(a)),0===j&&(i="complete"))}var h=[],i="complete",j=0,k=30,l=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];return function(c){var g,h="tb"+tb.getId(),i=a(h),j=!!c.method&&c.method.toUpperCase()||"GET",k=c.url,l="",m=c.success||tb.nop,n=c.error||tb.nop,o=c["finally"]||tb.nop,p=c.statechange||tb.nop,q=c.cachable||!0,r=c.headers=c.headers||{},s=c.timeout||!1,t="undefined"==typeof c.async||c.async!==!1;if(f(),c.type&&"json"===c.type.toLowerCase()&&(r["Content-Type"]="application/json;charset=UTF-8"),"undefined"!=typeof c.params)switch(g=r&&r["Content-Type"]?r["Content-Type"]:"application/x-www-form-urlencoded"){
case"application/json;charset=UTF-8":l=JSON.stringify(c.params);break;default:Object.keys(c.params).forEach(function(a){l+=(l.length>0?"&":"")+a+"="+c.params[a]})}if(q===!1&&(k+=(k.indexOf("?")<0?"?":"&")+"tbUid="+h),i){var u=new tb.Promise(function(a,f){"GET"!==j&&"DELETE"!==j||""===l||(k=k+(k.indexOf("?")<0?"?":"&")+l),i.src=k,i.connection.open(j,k,t),t===!0&&(i.poll=b(i,a,p,f,c)),Object.keys(r).forEach(function(a){"Content-Type"!==a&&i.connection.setRequestHeader(a,r[a])}),s&&(i.timeoutTimer=window.setTimeout(function(a,b){var c="function"==typeof a.cb&&a.cb;return function(){"function"==typeof c&&c(),b.connection.abort(),window.clearInterval(b.poll)}}(s,i),s.ms)),i.abort=function(a){return function(){window.clearInterval(a.poll),a.connection&&a.connection.abort(),e(a)}}(i),("POST"===j||"PUT"===j)&&""!==l?(i.connection.setRequestHeader("Content-Type",g),i.connection.send(l)):i.connection.send(null),t===!1&&(tb.request.dec(),i.connection.status>=200&&i.connection.status<300?a(d(i,tb.extend({},c))):f(d(i,tb.extend({},c))))});return u.then(function(a){m(a)})["catch"](function(a){n(a)})["finally"](function(a){o(a)}),u}return!1}}()),tb.stop=function(a){var b=a;return function(a){return b=a?a:b}}(!1),"undefined"==typeof module&&(tb.CRUD=function(a){var b=this;b.data=tb.observable({}),b.config={},tb.extend(b.config,{create:{url:"",method:"POST",success:function(a){b.data(a)}},read:{url:"",method:"GET",success:function(a){b.data(a)}},update:{url:"",method:"PUT",success:function(a){b.data(a)}},"delete":{url:"",method:"DELETE",success:function(a){b.data(a)}}},a)},tb.CRUD.prototype=function(){return{create:function(a){var b=tb.extend({},this.config.create);return a=a||{},b.url?void tb.request(tb.extend(b,{url:a?tb.parse(this.config.create.url,a):this.config.create.url},{params:a})):void console.error("no create url given!")},read:function(a){var b=tb.extend({},this.config.read);return a=a||{},b.url?void tb.request(tb.extend(b,{url:a?tb.parse(this.config.read.url,a):this.config.read.url},{params:a})):void console.error("no read url given!")},update:function(a){var b=tb.extend({},this.config.update);return a=a||{},b.url?void tb.request(tb.extend(b,{url:a?tb.parse(this.config.update.url,a):this.config.update.url},{params:a})):void console.error("no update url given!")},"delete":function(a){var b=tb.extend({},this.config["delete"]);return a=a||{},b.url?void tb.request(tb.extend(b,{url:a?tb.parse(this.config["delete"].url,a):this.config["delete"].url},{params:a})):void console.error("no delete url given!")}}}());