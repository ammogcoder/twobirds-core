this.Element&&function(t){t.matches=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.msMatchesSelector||function(t){for(var e=(this.parentNode||this.document).querySelectorAll(t),n=-1;e[++n]&&e[n]!==this;);return!!e[n]}}(Element.prototype),this.Element&&function(t){t.closest=t.closest||function(t){for(var e=this;e.matches&&!e.matches(t);)e=e.parentNode;return e.matches?e:null}}(Element.prototype),tb=function(){var t;function e(t,e){var n=this;if(n.length=0,!t||t instanceof r.Selector)return n;if(t instanceof r)return[].push.call(n,t),n;switch(typeof t){case"string":r.dom(t+"[data-tb]",e||window).forEach(function(t){t.tb&&Object.keys(t.tb).forEach(function(e){[].push.call(n,t.tb[e])})});break;case"object":if(t instanceof r)return[].push.call(n,t),n;t instanceof RegExp?r.dom("[data-tb]",e||window).forEach(function(e){Object.keys(e.tb).forEach(function(o){var i=e.tb[o];i instanceof r&&i.namespace&&i.namespace.match(t)&&[].push.call(n,i)})}):t.nodeType&&t.tb?Object.keys(t.tb).forEach(function(e){[].push.call(n,t.tb[e])}):(t.constructor===Array||t.length&&t[0]&&!(t instanceof Array))&&[].forEach.call(t,function(t){var e=r(t);[].forEach.call(e,function(t){-1===[].indexOf.call(n,t)&&[].push.call(n,t)})});break;case"function":r.dom("[data-tb]",e||window).map(function(e){Object.keys(e.tb).forEach(function(o){var i=e.tb[o];i&&i instanceof r&&i instanceof t&&[].push.call(n,i)})})}return n}function n(){}function r(){if(!(this instanceof r))return new e(arguments[0]?arguments[0]:void 0,arguments[1]?arguments[1]:void 0);var t,o,i=Array.from(arguments),a="string"==typeof i[0],c=(a&&i[0].substr(0,1),a?"/"+i[0].replace(/\./g,"/").replace(/^\//,"")+".js":""),s=a?r.namespace(i[0].replace(/^\//),"").get():i[0];if(a&&!s)return o=new r(n,i[1]||{},i[2]||!1),r.require(c).then(function(t){return function(){var e=new r(t[0],t[1]||{},t[2]||!1);if(o){for(var n in o)-1===["handlers","target"].indexOf(n)&&o.hasOwnProperty(n)&&(e[n]=o[n]);!function(t,e){for(var n in t.handlers){e.handlers[n]||(e.handlers[n]=[]);for(var r=0,o=t.handlers[n].length;r<o;r++)e.handlers[n].push(t.handlers[n][r])}}(o,e)}}}(i)),o;if("function"==typeof s){if(s.__tb__||(Object.setPrototypeOf(s.prototype,r.prototype),s.__tb__="V8"),(t=new s(i[1]||{},i[2])).namespace||t instanceof n||(t.namespace="string"==typeof i[0]?i[0]:i[0].namespace||r.getId()),t.target=t.target||i[2]||!1,t.target||i[2]&&(!i[2].nodeType&&i[2][0]&&i[2][0].nodeType&&(i[2]=i[2][0]),t.target=i[2]),t.target&&t.target.nodeType&&!(t instanceof n)){t.target.tb=t.target.tb||{},t.target.tb[t.namespace]=t;var u=r.dom(t.target);if("head"!==t.target.nodeName&&-1===u.parents().toArray().indexOf(document.head)&&t.namespace&&t.namespace.replace(/\./g,"-").toUpperCase()!==t.target.tagName&&u.addClass(t.namespace.replace(/\./g,"-").toLowerCase()),t.target&&t.target.nodeType){var f=t.target.getAttribute("data-tb");f&&f.length&&-1===f.split(" ").indexOf(t.namespace)?t.target.setAttribute("data-tb",f+" "+t.namespace):t.target.setAttribute("data-tb",t.namespace)}}if(t.handlers)for(var l in t.handlers)"function"==typeof t.handlers[l]?t.handlers[l]=[t.handlers[l]]:t.handlers[l]instanceof Array||delete t.handlers[l];else t.handlers=[];if(!(t instanceof n)){t.on("ready",function(e){t.parent().trigger("ready")},!0);var d=!!t.parent()[0]&&t.parent()[0],h=function(t){t.stopImmediatePropagation()};h.once=!0,d&&(d.handlers?d.handlers.ready||(d.handlers.ready=[]):d.handlers={ready:[]},d.handlers.ready.unshift(h)),t.trigger("init"),t.trigger("ready")}return t}}function o(t,n,o){var i=Array.from(t),a=Array.from(o),c=r();return t instanceof e&&i.forEach(function(t){var r=t[n](...a);r instanceof e&&Array.from(r).forEach(function(t){-1===[].indexOf.call(c,t)&&[].push.call(c,t)})}),c}function i(t){var e=[][t];return-1<["pop","push","unshift","shift","splice"].indexOf(t)?function(){var t=e.apply(this,arguments);return t?t instanceof Array?r(t):t:this}:function(){var t=e.apply(this.toArray(),arguments);return t instanceof Array?this.flush().add(t):t}}n.prototype={namespace:"Nop"},r.extend=function(t){var e;function n(n){e.hasOwnProperty(n)&&e[n]instanceof Object&&e[n].constructor===Object?t[n]=r.extend(t[n]instanceof Object?t[n]:{},e[n]):e.hasOwnProperty(n)&&e[n]instanceof Object&&e[n].constructor===Array?t[n]=Array.from(e[n]):t[n]=e[n]}for(;arguments[1];)e=arguments[1],Object.keys(e).forEach(n),[].splice.call(arguments,1,1);return t},r.parse=function(t,e){var n=Array.prototype.slice.call(arguments);if(n.length){if(1===n.length)return n[1];if(n.length>2){for(;n.length>1;)n[0]=r.parse(n[0],n[1]),n.splice(1,1);return n[0]}if("string"==typeof t){var o=t.match(/\{[^\{\}]*\}/g);o&&o.forEach(function(n){var o=n.substr(1,n.length-2),i=r.namespace(o,e).get();void 0!==i&&(t=t.replace(n,i))})}else if(t.constructor)switch(t.constructor){case Object:Object.keys(t).forEach(function(n){t.hasOwnProperty(n)&&(t[n]=r.parse(t[n],e))});break;case Array:t.forEach(function(n,o){t[o]=r.parse(t[o],e)})}return t}console.error("no arguments give to parse")},r.debounce=function(t,e){var n;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(r,o)},e)}},r.store=function(){function t(t){var e=this,n=Symbol("observable"),o=Symbol("onChange"),i=t||{};e[n]=r.observable(!1),e[o]=r.debounce(function(){e[n](r.extend({},e))},0),r.extend(e,i)}function e(e,n,o){var i=new t(o);return Object.defineProperty(e,n,{enumerable:!0,writeable:!0,get:function(){return i},set:function(t){for(var e in i)delete i[e];return r.extend(i,t),i}}),e[n]}return t.methods={observe:function(t,e){this[Object.getOwnPropertySymbols(this)[0]].observe(t,e)},bind:function(t){var e=this;!function t(n){if(n.nodeType&&3===n.nodeType){var o=n.nodeValue.match(/\{[^\{\}]*\}/g);if(o){var i=(a=n.nodeValue,function(t){var e,c=!1;o.forEach(function(e){i.values[e]!==t[e]&&(i.values[e]=t[e],c=!0)}),c&&(e=a,n.nodeValue=r.parse(e,i.values))});i.values={},(o=Array.from(o).map(t=>t.substr(1,t.length-2))).forEach(function(t){i.values[t]=""}),e[Object.getOwnPropertySymbols(e)[0]].observe(i)}}var a;n.nodeType&&1===n.nodeType&&(Array.from(n.attributes).forEach(function(t){var o,i=t.value.match(/\{[^\{\}]*\}/g);if(i){var a=(o=t.value,function(e){var c,s=!1;i.forEach(function(t){a.values[t]!==e[t]&&(a.values[t]=e[t],s=!0)}),s&&(c=o,r.dom(n).attr(t.nodeName,r.parse(c,a.values)))});a.values={},(i=Array.from(i).map(t=>t.substr(1,t.length-2))).forEach(function(t){a.values[t]=""}),e[Object.getOwnPropertySymbols(e)[0]].observe(a)}}),Array.from(n.childNodes).forEach(function(e){t(e)}),e[Object.getOwnPropertySymbols(e)[0]].notify())}(t)}},t.prototype=new Proxy(t.methods,{get:function(e,n,o){if(t.methods[n])return t.methods[n];if(n in o==!1&&n in e==!1){var i=new r.Store;Object.defineProperty(o,n,{enumerable:!0,get:function(){return i},set:function(e){if(e&&"object"==typeof e&&e.constructor&&e.constructor===Object)if(i instanceof t){for(var n in i)delete i[n];r.extend(i,e)}else i=new t(e);else i=e;return setTimeout(function(){Object.getOwnPropertySymbols(o)[1]&&o[Object.getOwnPropertySymbols(o)[1]]()},0),i}})}return o[n]},set:function(e,n,o,i){var a=Array.from(arguments);if("object"==typeof o&&o.constructor===Object&&o.constructor.prototype===Object.prototype)if(i[n]instanceof t){for(var c in i[n])delete i[n][c];r.extend(t,o)}else a[0]=i,a[2]=new t(o);return setTimeout(function(){Object.getOwnPropertySymbols(i)[1]&&i[Object.getOwnPropertySymbols(i)[1]]()},0),Reflect.set(...a)}}),r.Store=t,e.Store=t,e}(),r.observable=function(t){var e=t,n=!0,o=function(t,i){function a(){if(n)return o.lastChanged=(new Date).getTime(),o.notify()}if(void 0===t)return e;if(e.constructor===Object)if("string"==typeof t){if(void 0===i)return r.namespace(t,e).get();t.indexOf(".")>-1?r.namespace(t,e).set(i):e[t]=i,a()}else"object"==typeof t&&void 0===i?(e=t,a()):console.warn("tb.observable() set value: parameter 1 should be a string or object if observed data is an object!");else{if(void 0===t)return e;e=t,a()}return o};return o.lastChanged=(new Date).getTime(),o.notifiers=[],o.notify=function(){return o.notifiers.forEach(function(t,n){"function"==typeof t?(t(e),t.once&&o.notifiers.splice(n,1)):o.notifiers.splice(n,1)}),o},o.enableNotify=function(t){return n=!1!==t,o},o.observe=function(t,e){return"function"==typeof t&&(t.once=e||!1,o.notifiers.push(t)),o},o},t=r,r.Selector=e,r.methods={trigger:function(t,o,i){var a,c=this;if(!r.stop()){if((a=t instanceof r.Event?t:new r.Event(t,o,i)).__stopped__||a.__immediateStopped__)return c;if(c instanceof e&&c.length)[].forEach.call(c,function(t){t&&t instanceof r&&!a.__immediateStopped__&&t.trigger(a)});else if(c instanceof r){if(c instanceof n&&"init"!==a.name)return c.one("init",function(){this.trigger(a)}),c;if(c instanceof r&&c.handlers&&c.handlers[a.name]&&a.bubble.indexOf("l")>-1&&(c.handlers[a.name]=c.handlers[a.name].reduce(function(t,e){if(a.bubble.indexOf("l")>-1&&e){try{a.__immediateStopped__?t.push(e):e.apply(c,[a])}catch(t){console.error(t)}e.once||a.__immediateStopped__||t.push(e)}return t},[]),c.handlers[a.name].length||delete c.handlers[a.name]),a.__stopped__)return c;setTimeout(function(){a.bubble.indexOf("u")>-1&&c.parent().trigger(new r.Event(a.name,a.data,"lu")),a.bubble.indexOf("d")>-1&&[].forEach.call(c.children(),function(t){t.trigger(new r.Event(a.name,a.data,"ld"))})},0)}return c}},on:function(t,n,i){var a,c=this;return c instanceof e?o(c,"on",Array.from(arguments)):c instanceof r&&(a=-1<t.indexOf(" ")?t.split(" "):[t],n.once=!!n.once||!!i,a.forEach(function(t){Reflect.get(c,"handlers")||(c.handlers={}),Reflect.get(c.handlers,t)?c.handlers[t].push(n):c.handlers[t]=[n]})),c},one:function(t,e){return this.on(t,e,!0),this},off:function(t,n){var i,a=this;return void 0===t?a:(a instanceof e?o(a,"off",arguments):a instanceof r&&(-1<t.indexOf(" ")?t.split(" "):[t]).forEach(function(t){if(a.handlers[t])if(void 0!==n)for(i=a.handlers[t].indexOf(n);i>-1;)a.handlers[t].splice(i,1),i=a.handlers[t].indexOf(n),0===a.handlers[t].length&&(a.handlers[t]=null,delete a.handlers[t]);else a.handlers[t]=null,delete a.handlers[t]}),a)},parents:function(t){var n=r();return this instanceof e?n=o(this,"parents",arguments):this instanceof r&&this.target&&(this.target.nodeType?r.dom(this.target).parents("[data-tb]").not("html").forEach(function(t){t&&t.tb&&Object.keys(t.tb).forEach(function(e){[].push.call(n,t.tb[e])})}):this.target instanceof r&&([].push.call(n,this.target),this.target.parent()[0]&&[].push.call(n,this.target.parent()[0]))),t?n.filter(t):n},parent:function(t){var n=r();if(this instanceof e)n=o(this,"parent",arguments);else if(this instanceof r&&this.target)if(this.target.nodeType){var i=this.parents().toArray(),a=!!i[0]&&i[0];if(!a)return n;Object.keys(a.target.tb||{}).forEach(function(t){[].push.call(n,a.target.tb[t])})}else this.target instanceof r&&[].push.call(n,this.target);return t?n.filter(t):n},descendants:function(t,n){var i=this,a=r();return i instanceof e?a=o(this,"descendants",arguments):i instanceof r&&i.target.nodeType&&!n?r.dom("[data-tb]",i.target).forEach(function(t){Object.keys(t.tb).forEach(function(e){[].push.call(a,t.tb[e])})}):i instanceof r&&n&&Object.keys(i).forEach(function(t){if("target"!==t&&i[t]instanceof r){[].push.call(a,i[t]);for(var e=r.dom().toArray.call(i[t].descendants("",!0)),n=0,o=e.length;n<o;n++)[].push.call(a,e[n])}}),t?a.filter(t):a},children:function(t,n){var i=r(),a=Array.from(arguments);if(n="undefined"!=typeof module||n,this instanceof e)i=o(this,"children",a);else if(this instanceof r&&this.target.nodeType&&!n){var c=r.getId(),s=r.dom("[data-tb]",this.target),u='[data-tempid="'+c+'"] [data-tb] [data-tb]';r.dom(this.target).attr("data-tempid",c),s.not(u).forEach(function(t,e,n){t.tb&&Object.keys(t.tb).forEach(function(e){[].push.call(i,t.tb[e])})}),r.dom(this.target).removeAttr("data-tempid")}else if(n)for(var f in this)this.hasOwnProperty(f)&&this[f]instanceof r&&[].push.call(i,this[f]);return t?i.filter(t):i},next:function(t){var n,i,a=r();return this instanceof e?a=o(this,"next",arguments):(n=this.parent().children(),i=[].indexOf.call(n,this),n.length>i+1&&[].push.call(a,n[i+1])),t?a.filter(t):a},prev:function(t){var n,i,a=r();return this instanceof e?a=o(this,"prev",arguments):(n=this.parent().children(),(i=[].indexOf.call(n,this))&&[].push.call(a,n[i-1])),t?a.filter(t):a},first:function(t){var n,i=r();return this instanceof e?i=o(this,"first",arguments):(n=this.parent().children(),[].push.call(i,n[0])),t?i.filter(t):i},last:function(t){var n,i=r();return this instanceof e?i=o(this,"last",arguments):(n=this.parent().children(),[].push.call(i,n[n.length-1])),t?i.filter(t):i},toArray:function(){return Array.from(this)},filter:function(t){var n=r(t),o=r();return t?(this instanceof e?[].forEach.call(this,function(t){-1<[].indexOf.call(n,t)&&[].push.call(o,t)}):this instanceof r&&-1<[].indexOf.call(n,this)&&[].push.call(o,this),o):this},not:function(t){var e=Array.from(r(t)),n=r();return[].forEach.call(this,function(t){-1===e.indexOf(t)&&[].push.call(n,t)}),n},add:function(t){var e=r(t).toArray();return r(this.toArray().concat(e))},flush:function(){if(this instanceof e)for(;this.length;)this.pop();return this}};var a,c=new Proxy(r.Store.methods,{get:function(t,e,n){var o=Array.from(arguments);if(!Reflect.get(...o)){var i=new r.Store;Object.defineProperty(n,e,{enumerable:!0,get:function(){return i},set:function(t){if("object"==typeof t&&t.__proto__===Object.prototype)if(i instanceof r.Store){for(var e in i)delete i[e];r.extend(i,t)}else i=new r.Store(t);else i=t;return setTimeout(function(){Object.getOwnPropertySymbols(n)[1]&&n[Object.getOwnPropertySymbols(n)[1]]()},0),i}})}return Reflect.get(...o)},set:function(t,e,n,o){var i,a=Array.from(arguments);if("handlers"!==e&&"object"==typeof n)if(o[e]instanceof r.Store&&n.__proto__===Object.prototype){for(var c in o[e])delete o[e][c];r.extend(o[e],n)}else a[0]=o;return i=Reflect.set(...a),setTimeout(function(){Object.getOwnPropertySymbols(o)[1]&&o[Object.getOwnPropertySymbols(o)[1]]()},0),i}});return Object.setPrototypeOf(r.methods,c),r.prototype=r.methods,r.status={loadCount:r.observable(0)},r.idle=function(t){var e=function(){if(0===r.status.loadCount()){var n=function(){0===r.status.loadCount()?r.status.loadCount.lastChanged===n.lastChanged?"function"==typeof t&&t():(n.lastChanged=r.status.loadCount.lastChanged,setTimeout(n,100)):r.status.loadCount.observe(e,!0)};n.lastChanged=0,setTimeout(n,100)}else r.status.loadCount.observe(e,!0)};r.status.loadCount.observe(e,!0)},e.prototype={concat:i("concat"),every:i("every"),forEach:i("forEach"),indexOf:i("indexOf"),map:i("map"),pop:i("pop"),push:i("push"),reduce:i("reduce"),reduceRight:i("reduceRight"),reverse:i("reverse"),shift:i("shift"),slice:i("slice"),some:i("some"),splice:i("splice"),unshift:i("unshift")},r.extend(e.prototype,r.methods),e.prototype.unique=function(){var t=[];return[].forEach.call(this,function(e){-1===t.indexOf(e)&&t.push(e)}),r.dom(t)},r.plugin=(a=t.prototype,function(t,e){var n=a;n[t]?console.warn("tb.plugin(): Cannot overload existing tb method (",t,")"):n[t]=e}),r}(),"undefined"!=typeof module?module.exports=tb:function(){function t(){tb.attach(document.head),tb.attach(document.body)}document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),t()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),t())})}(),tb.Event=function(t,e,n){this.bubble=n||"l",this.data=e||{},this.name=t||"",this.__stopped__=this.__immediateStopped__=!1},tb.Event.prototype={stopPropagation:function(){return this.__stopped__=!0,this},stopImmediatePropagation:function(){return this.__stopped__=!0,this.__immediateStopped__=!0,this}},tb.debug=!1,"undefined"==typeof module&&(tb.dom=function(){var t,e,n=/\S+/g,r=tb.Selector;function o(t,e,n,r){t.detachEvent?t.detachEvent("on"+e,n,r):t.removeEventListener(e,n,r)}function i(t){var e=[][t];return-1<["push","unshift"].indexOf(t)?function(){return e.apply(this,arguments),this.unique()}:function(){var t=e.apply(this,arguments);return t instanceof Array&&t[0]&&t[0].nodeType?tb.dom(t).unique():t}}return(t=function(t,e){var n,o,i=this;if(!t)return i;if(t.nodeType)-1===[].indexOf.call(i,t)&&[].push.call(i,t);else{if(t.__tbSelector__)return t;if(t instanceof r&&t[0])[].forEach.call(t,function(t){t.target&&t.target.nodeType&&-1===[].indexOf.call(i,t.target)&&[].push.call(i,t.target)});else if(t instanceof Array||t.__tbSelector__||t instanceof HTMLCollection||t instanceof NodeList)[].forEach.call(t,function(t){tb.dom(t).forEach(function(t){-1===[].indexOf.call(i,t)&&[].push.call(i,t)})});else if("string"==typeof t){var a,c,s=(a=t,(c=document.createElement("template")).innerHTML=a,c.content.childNodes?c.content.childNodes:c.childNodes);if(1!==s.length||!s[0].nodeType||3!==s[0].nodeType)return tb.dom(s);n=e&&e.nodeType?e:document,t.split(",").forEach(function(t){(o=n.querySelectorAll(t.trim()))[0]&&[].forEach.call(o,function(t){-1===[].indexOf.call(i,t)&&[].push.call(i,t)})})}}}).arrayMethods={__tbSelector__:!0,length:0,concat:i("concat"),every:i("every"),forEach:i("forEach"),indexOf:i("indexOf"),map:i("map"),pop:i("pop"),push:i("push"),reduce:i("reduce"),reduceRight:i("reduceRight"),reverse:i("reverse"),shift:i("shift"),slice:i("slice"),some:i("some"),splice:i("splice"),unshift:i("unshift")},t.methods=function(){return{add:function(t){var e=this;return"string"!=typeof t&&t.length?[].forEach.call(t,function(t){tb.dom(t).toArray().forEach(function(t){-1===[].indexOf.call(e,t)&&[].push.call(e,t)})}):tb.dom(t).toArray().forEach(function(t){-1===[].indexOf.call(e,t)&&[].push.call(e,t)}),e.unique()},addClass:function(t){if(!t||"string"!=typeof t)return console.warn("method addClass: missing or wrong pClassNames"),this;var e=t.split(" ").filter(function(t){return!!t});return this.forEach(function(t){var n=(t.getAttribute("class")||"").split(" ").filter(function(t){return!!t});e.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),t.setAttribute("class",n.join(" "))}),this},append:function(t){var e;return this.forEach(function(n){e=tb.dom(t),[].forEach.call(e,function(t){t.nodeType&&n.appendChild(t)})}),this},appendTo:function(t){return(t=tb.dom(t))[0]&&(t=t[0],this.forEach(function(e){t.appendChild(e)})),this},attr:function(t,e){var n=this,r={};return"object"==typeof t?(Object.keys(t).forEach(function(e){n.forEach(function(n){tb.dom(n).attr(e,t[e])})}),n):arguments.length?void 0===e&&n.length>0?n[0].getAttribute(t):(n.toArray().forEach(function(n){n.setAttribute(t,e)}),n):([].forEach.call(n[0].attributes,function(t){r[t.name]=t.value}),r)},children:function(t){var e=tb.dom();return this.forEach(function(n){var r=void 0!==t&&tb.dom(t);[].forEach.call(n.children,function(t){-1===[].indexOf.call(e,t)&&(!r||-1<[].indexOf.call(r,t))&&e.push(t)})}),e},clean:function(){return this.forEach(function(t){var e=document.createTreeWalker(t,128);for(t.normalize();e.nextNode();)setTimeout(function(t){return function(){t.remove()}}(e.currentNode),0)}),this},descendants:function(t){var e,n=[],r=!!t&&tb.dom(t);return this.forEach(function(t){n=n.concat(tb.dom(t.querySelectorAll("*")).toArray())}),n=tb.dom(n).unique().toArray(),r&&(e=n.filter(function(t){return-1<[].indexOf.call(r,t)})),tb.dom(r?e:n)},empty:function(){return this.forEach(function(t){t.innerHTML=""}),this},filter:function(t){var e,n=tb.dom(t);return"undefined"===t?this:("string"==typeof t?e=[].filter.call(this,function(t){return-1<n.indexOf(t)}):t instanceof Function&&(e=[].filter.call(this,t)),tb.dom(e))},first:function(){var t=tb.dom();return tb.dom.length&&t.push(this[0]),t},hasClass:function(t){var e=!!this[0]&&this[0];if(e)return e.className.split(" ").indexOf(t)>-1},hide:function(){return this.forEach(function(t){var e=window.getComputedStyle(t).getPropertyValue("display");t.style.prevDisplay=e&&"none"!==e?e:"inline",t.style.display="none"}),this},html:function(t){return void 0===t?this[0]?this[0].innerHTML:"":("string"==typeof t&&this.forEach(function(e){e.innerHTML=t}),this)},insertBefore:function(t){var e=!!tb.dom(t)[0]&&tb.dom(t)[0];if(e)return this.forEach(function(n){n.nodeType&&e.parentElement.insertBefore(n.cloneNode(!0),t)}),this},insertAfter:function(t){var e=!!tb.dom(t)[0]&&tb.dom(t)[0],n=e.nextSibling||!1;if(e)return this.forEach(function(t){t.nodeType&&(n?e.parentElement.insertBefore(t.cloneNode(!0),n):e.parentElement.appendChild(t.cloneNode(!0)))}),this},last:function(){var t=tb.dom();return tb.dom.length&&t.push(this.pop()),t},next:function(){var t=tb.dom();return tb.dom.length&&this[0].nextSibling&&t.push(this[0].nextSibling),t},not:function(t){var e=this,n=void 0!==t&&document.querySelectorAll(t);return n?(n.forEach(function(t){var n=[].indexOf.call(e,t);n>-1&&[].splice.apply(e,[n,1])}),e):e},off:function(t,e,n){var r=t.indexOf(" ")>-1?t.split(" "):[t],i="boolean"==typeof n&&n;return this.forEach(function(t){t.nodeType&&(e?r.forEach(function(n){o(t,n,e,i)}):r.forEach(function(e){t["on"+e]=null,t.removeAttribute("on"+e)}))}),this},on:function(t,e,n){var r,i=this,a=t.indexOf(" ")>-1?t.split(" "):[t],c="boolean"==typeof n&&n;return e.once&&((r=function(t,e){return function(e){i.forEach(function(t){t.nodeType&&a.forEach(function(e){o(t,e,r,c)})}),t.apply(e,arguments)}}(e)).that=i,r.remove=function(){i.forEach(function(t){t.nodeType&&a.forEach(function(e){o(t,e,r,c)})})}),i.forEach(function(t){t.nodeType&&a.forEach(function(n){!function(t,e,n,r){t.attachEvent?t.attachEvent("on"+e,n,r):t.addEventListener(e,n,r)}(t,n,r||e,c)})}),r||i},one:function(t,e,n){return e.once=!0,this.on(t,e,n)},parent:function(t){var e=tb.dom(),n=void 0!==t&&tb.dom(t);return this.forEach(function(t){var r=t.parentNode;-1===[].indexOf.call(e,r)&&(!n||-1<[].indexOf.call(n,r))&&[].push.call(e,r)}),e},parents:function(t){var e,n=tb.dom(),r=void 0!==t&&tb.dom(t);return this.forEach(function(t){for(e=t.parentNode;e&&e.tagName&&"HTML"!==e.tagName;)-1===[].indexOf.call(n,e)&&(!r||-1<[].indexOf.call(r,e))&&n.push(e),e=e.parentNode}),n},previous:function(){var t=tb.dom();return tb.dom.length&&this[0].previousSibling&&t.push(this[0].previousSibling),t},remove:function(t){var e=this;return e.forEach(function(t,n){e[n]=t.parentNode.removeChild(t)}),e},removeAttr:function(t){var e,r,o=t&&t.match(n);return this.forEach(function(t){if(r=0,o&&t.nodeType&&1===t.nodeType)for(;e=o[r++];)t.removeAttribute(e)}),this},removeClass:function(t){var e=t.split(" ").filter(function(t){return!!t});return this.forEach(function(t){var n=(t.getAttribute("class")||"").split(" ").filter(function(t){return!!t});e.forEach(function(e){for(;n.indexOf(e)>-1;)n.splice(n.indexOf(e),1);n.length?tb.dom(t).attr("class",n.join(" ")):tb.dom(t).removeAttr("class")})}),this},show:function(){return this.forEach(function(t){t.style.display=t.style.prevDisplay?t.style.prevDisplay:"block"}),this},toArray:function(){return Array.from(this)},toggleClass:function(t){var e;return this.forEach(function(n){(e=tb.dom(n))[e.hasClass(t)?"removeClass":"addClass"](t)}),this},trigger:function(t,e,n,r){var o,i="boolean"!=typeof n||n,a="boolean"!=typeof r||r,c=t.split(" ");return this.forEach(function(t){t.nodeType&&c.forEach(function(n){"createEvent"in document?(o=document.createEvent("HTMLEvents"),tb.extend(o.data,e),o.initEvent(n,i,a),t.dispatchEvent(o)):(o=document.createEventObject(),tb.extend(o.data,e),o.eventType=n,t.fireEvent("on"+o.pThisEventName,o))})}),this},unique:function(){var t=[];return[].forEach.call(this,function(e){-1===t.indexOf(e)&&t.push(e)}),tb.dom(t)},val:function(t){var e,n="input select textarea".split(" "),r="button file image reset submit".split(" ");function o(t){return 1===t.nodeType&&n.indexOf(t.tagName.toLowerCase())>-1&&-1===r.indexOf(t.type)}var i={select:function(t){var e,n=this,r="select-multiple"===n.type;if(!arguments.length)return e=[],[].forEach.call(n.selectedOptions,function(t){if(t.selected&&!(t.disabled||t.parentNode.disabled&&"optgroup"===t.parentNode.nodeName)){var n=t.value;e.push(n)}}),r?e:e[0]?e[0]:"";t=t.constructor!==Array?[t]:t,t=r||t.constructor!==Array?t:[t[0]],[].forEach.call(n.options,function(e){var n,r=t.indexOf(e.value);r+1?(n=t[r],e.selected=!!n):e.selected=!1}),t.forEach(function(t){tb.dom('option[value="'+t+'"]',n).selected=!0})},default:function(t){var e;if("radio"===this.type){var n='[type="radio"][name="'+this.name+'"]',r=tb.dom(this).parents("form").descendants(n);return e="",r.forEach(function(n){var r;void 0!==t?(r=n.value===t,n.checked=!!r,e=n.checked?n.value:e):!0===n.checked&&(e=n.value)}),e}return"checkbox"===this.type?(void 0!==t?(this.checked=!!t,e=this.checked):(e=!1,!0===this.checked&&(e=!0)),e):arguments.length?(null==t&&(t=""),void(this.value=t)):"string"==typeof(e=this.value)?e:null==e?"":e}};return arguments.length?(this.forEach(function(n){o(n)&&(e=i[n.tagName.toLowerCase()]?i[n.tagName.toLowerCase()].call(n,t):i.default.call(n,t))}),this):(this.some(function(t){return!!o(t)&&(e=i[t.tagName.toLowerCase()]?i[t.tagName.toLowerCase()].call(t):i.default.call(t),!0)}),e)},values:function(t){var e,n=this,r=n[0]||void 0;if(!r)return n;if("object"!=typeof t||!r)return r.getValues||(r.getValues=tb.observable({}),tb.dom("input,select,textarea",r).on("keyup change select",tb.debounce(function(){r.getValues(tb.extend({},tb.dom(r).values()))},5))),r.values=r.values?r.values:tb.observable({}),i.prototype={bind:function(t,e){r.getValues.observe(function(){tb.extend(t,r.getValues()),setTimeout(function(){Object.getOwnPropertySymbols(t)[1]&&t[Object.getOwnPropertySymbols(t)[1]]()},0)},e),r.getValues.notify()},observe:function(t,e){r.values.observe(t,e)}},e=new i,Object.defineProperty(n,"values",{enumerable:!0,configurable:!0,set:function(t){r.values.enableNotify(!1),Object.keys(t).forEach(function(e){n.values[e]=t[e]}),r.values.enableNotify().notify()},get:function(t,n){return function(){return tb.dom("input[name],select[name],textarea[name]",t).forEach(function(t){var r=tb.dom(t).attr("name");e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return tb.dom(t).val()},set:function(r){var o=tb.dom(t).val(r);return n(e),o}})}),t.values(e),e}}(r,r.values)}),n.values;var o=tb.dom(r).values();function i(){}Object.keys(t).forEach(function(e){o.hasOwnProperty(e)&&(o[e]=t[e])})}}}(),t.prototype=tb.extend(t.methods,t.arrayMethods),(e=function(e,n){return new t(e,n)}).innerProto=t.prototype,e}(),tb.dom.plugin=function(t,e){var n=tb.dom.innerProto;n[t]?console.warn("tb.dom.plugin(): Cannot overload existing tb method (",t,")"):n[t]=e}),tb.nop=function(){},tb.namespace=function(){function t(t,e){this.namespace=t,this.target=e,this.namespaceArray=t.indexOf(".")?t.split("."):[t],this.forceCreation=!1}return t.prototype={get:function(){return this.forceCreation=!1,this._walk(this.target?this.target:window,this.namespaceArray)},set:function(t){"function"==typeof t&&t.prototype!==Function.prototype&&(t.prototype.namespace=this.namespace);return this.value=t,this.forceCreation=!0,this._walk(this.target?this.target:window,this.namespaceArray)},_walk:function(t,e){!t[e[0]]&&this.forceCreation&&(t[e[0]]={});return e.length<2?(this.forceCreation&&void 0!==this.value&&(t[e[0]]=this.value),t.hasOwnProperty(e[0])?t[e[0]]:void 0):t.hasOwnProperty(e[0])?(t=t[e[0]],e.shift(),this._walk(t,e)):void 0}},function(e,n){return new t(e,n)}}(),tb.attach=function(t){var e=t||document.body,n=tb.dom(e.querySelectorAll("[data-tb]")).toArray();e.getAttribute("data-tb")&&(n=[e].concat(n)),n.forEach(function(t){t.getAttribute("data-tb").split(" ").forEach(function(e){t.tb=t.tb||{},t.tb[e]||new tb(e,null,t)})})},tb.getId=function(){return"id-"+(new Date).getTime()+"-"+Math.random().toString().replace(/\./,"")},tb.Promise=function(){"use strict";var t=null,e={};function n(t){if(t=t||tb.nop,"object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._deferredState=0,this._state=0,this._value=null,this._deferreds=null,t!==tb.nop&&s(t,this)}return n._onHandle=null,n._onReject=null,n.prototype={then:function(t,e){if(!(this instanceof n))return function(t,e,n){return new t.constructor(function(o,i){var a=new tb.Promise(tb.nop);a.then(o,i),r(t,new c(e,n,a))})}(this,t,e);var o=new n(tb.nop);return r(this,new c(t,e,o)),o},catch:function(t){return this.then(null,t)},finally:function(t){var e=this;return this.then(function(r){return n.resolve(t(e._value)).then(function(){return e._value})},function(r){return n.resolve(t(e._value)).then(function(){throw e._value})})},done:function(t,e){(arguments.length?this.then.apply(this,arguments):this).then(null,function(t){setTimeout(function(){throw t},0)})}},n.resolve=function(t){var e=new tb.Promise(function(t,e){});return o(e,t),e},n.reject=function(t){var e=new tb.Promise(function(t,e){});return i(e,t),e},n.all=function(t){var e=t.length,r=tb.observable(e),a=new n,c=new Array(e);return t.forEach(function(t,e){t.then&&"function"==typeof t.then||(t=tb.Promise.resolve(t)),t.then(function(t){c[e]=t}).catch(function(t){0===a._state&&i(a,t._value)}).finally(function(t){r(r()-1)})}),r.observe(function(t){0===t&&(r=null,0===a._state&&o(a,c))}),a},n.race=function(t){var e=new tb.Promise;return t.forEach(function(t,r,a){t.constructor!==n&&(a[r]=n.resolve(t)),a[r].then(function(t){0===e._state&&o(e,t)}).catch(function(t){0===e._state&&i(e,t)})}),e},n;function r(r,a){for(;3===r._state;)r=r._value;if(n._onHandle&&n._onHandle(r),0===r._state)return 0===r._deferredState?(r._deferredState=1,void(r._deferreds=a)):1===r._deferredState?(r._deferredState=2,void(r._deferreds=[r._deferreds,a])):void r._deferreds.push(a);!function(n,r){setTimeout(function(){var a=1===n._state?r.onFulfilled:r.onRejected;if(null!==a){var c=function(n,r){try{return n(r)}catch(n){return t=n,e}}(a,n._value);c===e?i(r.promise,t):o(r.promise,c)}else 1===n._state?o(r.promise,n._value):i(r.promise,n._value)},0)}(r,a)}function o(r,o){if(o===r)return i(r,new TypeError("A promise cannot be resolved with itself."));if(o&&("object"==typeof o||"function"==typeof o)){var c=function(n){try{return n.then}catch(n){return t=n,e}}(o);if(c===e)return i(r,t);if(c===r.then&&o instanceof n)return r._state=3,r._value=o,void a(r);if("function"==typeof c)return void s(c.bind(o),r)}r._state=1,r._value=o,a(r)}function i(t,e){t._state=2,t._value=e,n._onReject&&n._onReject(t,e),a(t)}function a(t){if(1===t._deferredState&&(r(t,t._deferreds),t._deferreds=null),2===t._deferredState){for(var e=0;e<t._deferreds.length;e++)r(t,t._deferreds[e]);t._deferreds=null}}function c(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function s(n,r){var a=!1,c=function(n,r,o){try{n(r,o)}catch(n){return t=n,e}}(n,function(t){a||(a=!0,o(r,t))},function(t){a||(a=!0,i(r,t))});a||c!==e||(a=!0,i(r,t))}}(),tb.Require=function(t){return tb.require(t)},tb.Require.prototype={},tb.require=function(t,e){var n,r=[];if(!t){var o="tb.require: no files given.";return console.warn(o),tb.Promise.reject(o)}return"string"==typeof t&&(t=[t]),t.forEach(function(t){var e=i(t);if(-1===t.split("/").pop().indexOf(".")){var n="tb.require: no file type given for ";return console.warn(n,t),tb.Promise.reject(n+t)}tb.require.repo[e]||(tb.require.repo[e]={}),tb.require.repo[e][t]||(tb.require.repo[e][t]="undefined"==typeof module?function(t){var e,n={css:{tag:"link",attributes:{type:"text/css",rel:"stylesheet",href:"{src}"}},js:{tag:"script",attributes:{type:"text/javascript",src:"{src}"}}},r=i(t),o=t;tb.require.cacheBust;if(n[r])return tb.status.loadCount(tb.status.loadCount()+1),new tb.Promise(function(o,i){var a;e=n[r],(a=document.createElement(e.tag)).async=!0,a.onreadystatechange=a.onload=function(){var t=a.readyState;t&&!/loaded|complete/.test(t)||o("1")},Object.keys(e.attributes).forEach(function(n){a.setAttribute(n,tb.parse(e.attributes[n],{src:t}))}),document.getElementsByTagName("head")[0].appendChild(a)}).finally(function(){tb.status.loadCount(tb.status.loadCount()-1),tb.require.repo[r][t]="done"});var a={url:o};return tb.request(a).finally(function(e){if("json"===r&&e.text)try{tb.require.repo[r][t]=JSON.parse(e.text)}catch(t){console.error("invalid JSON: ",e)}else tb.require.repo[r][t]=e.text})}(t):function(t){var e=require("fs"),n=i(t);return new tb.Promise(function(r,o){var i=t;if("js"===n)try{require(i),r("done.")}catch(t){r('error reading file using require("'+i+'"")')}else if(e.existsSync(i))try{r(e.readFileSync(i,"utf8"))}catch(t){r("error: could not read file ["+i+"]")}else r("error: file not found ["+i+"]")}).finally(function(e){tb.require.repo[n][t]=e})}(t)),r.push(tb.require.repo[e][t])}),n=tb.Promise.all(r),e&&n.finally(function(t){e.call(t)}),n;function i(t){return t.split("?")[0].split(".").pop()}},tb.require.repo={},tb.require.cacheBust=!0,tb.require.loadcount=0,tb.require.get=function(t){return tb.require.repo[t.split("?")[0].split(".").pop()][t]||void 0},tb.webSocket=function(){function t(t){var e=this;e.config=t,e.socket=e.config.protocols?new WebSocket(e.config.url,e.config.protocols):new WebSocket(e.config.url),e.socket.onopen=function(t){e.trigger("open",t)},e.socket.onerror=function(t){e.trigger("error",t)},e.socket.onmessage=function(t){e.trigger("message",t.data)},e.socket.onclose=function(t){e.trigger("close",t)}}return t.prototype={send:function(t){this.socket.send(t)},close:function(){this.socket.close()}},function(e,n){return new tb(t,{url:e,protocols:n})}}(),"undefined"==typeof module&&(tb.request=function(){var t=[],e=0,n=30,r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];function o(t,e,r,o,c){var s,u=window.setInterval((s=0,function(){t.connection.readyState!==s&&(s=t.connection.readyState),4===s&&(t.aborttimer&&window.clearTimeout(t.aborttimer),window.clearInterval(u),function(t,e,n,r){var o,c;try{o=t.connection.status}catch(t){o=13030}if(o>=200&&o<400){c=i(t,r);try{e(c)}catch(t){tb.debug}}else c=i(t,tb.extend({},r)),n(c);a(t)}(t,e,o,c))}),n);return u}function i(t,e){var n={tId:t.identifier,status:t.connection.status,statusText:t.connection.statusText,responseHeaders:{},requestHeaders:e.headers,text:t.connection.responseText,xml:t.connection.responseXML,options:e};if(t.connection.getAllResponseHeaders().split("\r\n").forEach(function(t){var e=t.split(":")[0],r=t.substr(t.indexOf(":")+1);t&&(n.responseHeaders[e]=r)}),e.dataType&&"json"===e.dataType.toLowerCase())try{n.data=JSON.parse(t.connection.responseText)}catch(e){console.warn("expected JSON, could not parse: "+t.connection.responseText)}return n}function a(n){!function(n){tb.status.loadCount(tb.status.loadCount()-1),t.indexOf(n)&&(e--,t.splice(t.indexOf(n)),0===e&&"complete")}(n),n.connection&&(n.connection=null),n=null}return function(n){var c,s,u="tb"+tb.getId(),f=function(t){var e,n;if("undefined"!=typeof ActiveXObject)for(var o=0;o<r.length;++o)try{n=new ActiveXObject(r[o]),e={connection:n,identifier:t},void r[o]}catch(t){}try{n=new XMLHttpRequest,e={connection:n,identifier:t}}catch(t){}finally{return e}}(u),l=!!n.method&&n.method.toUpperCase()||"GET",d=n.url,h="",p=n.success||tb.nop,b=n.error||tb.nop,v=n.finally||tb.nop,m=(n.statechange||tb.nop,n.cachable||!0),y=n.headers=n.headers||{},g=n.timeout||!1,E=void 0===n.async||!1!==n.async;if(tb.status.loadCount(tb.status.loadCount()+1),t.push(s),e++,"loading",n.type&&"json"===n.type.toLowerCase()&&(y["Content-Type"]="application/json;charset=UTF-8"),void 0!==n.params)switch(c=y&&y["Content-Type"]?y["Content-Type"]:"application/x-www-form-urlencoded"){case"application/json;charset=UTF-8":h=JSON.stringify(n.params);break;default:Object.keys(n.params).forEach(function(t){h+=(h.length>0?"&":"")+t+"="+n.params[t]})}if(!1===m&&(d+=(d.indexOf("?")<0?"?":"&")+"tbUid="+u),f){var O=new tb.Promise(function(t,e){var r,s,u;"GET"!==l&&"DELETE"!==l||""===h||(d=d+(d.indexOf("?")<0?"?":"&")+h),f.src=d,f.connection.open(l,d,E),!0===E&&(f.poll=o(f,t,0,e,n)),Object.keys(y).forEach(function(t){"Content-Type"!==t&&f.connection.setRequestHeader(t,y[t])}),g&&(f.timeoutTimer=window.setTimeout((s=f,u="function"==typeof(r=g).cb&&r.cb,function(){"function"==typeof u&&u(),s.connection.abort(),window.clearInterval(s.poll)}),g.ms)),f.abort=function(t){return function(){window.clearInterval(t.poll),t.connection&&t.connection.abort(),a(t)}}(f),("POST"===l||"PUT"===l)&&""!==h?(f.connection.setRequestHeader("Content-Type",c),f.connection.send(h)):f.connection.send(null),!1===E&&(tb.request.dec(),f.connection.status>=200&&f.connection.status<300?t(i(f,tb.extend({},n))):e(i(f,tb.extend({},n))))});return O.then(function(t){p(t)}).catch(function(t){b(t)}).finally(function(t){v(t)}),O}return!1}}()),tb.stop=function(t){var e=!1;return function(t){return e=t||e}}(),"undefined"==typeof module&&(tb.CRUD=function(t){var e=this;e.data=tb.observable({}),e.config={},tb.extend(e.config,{create:{url:"",method:"POST",success:function(t){e.data(t)}},read:{url:"",method:"GET",success:function(t){e.data(t)}},update:{url:"",method:"PUT",success:function(t){e.data(t)}},delete:{url:"",method:"DELETE",success:function(t){e.data(t)}}},t)},tb.CRUD.prototype=function(){return{create:function(t){var e=tb.extend({},this.config.create);t=t||{},e.url?tb.request(tb.extend(e,{url:t?tb.parse(this.config.create.url,t):this.config.create.url},{params:t})):console.error("no create url given!")},read:function(t){var e=tb.extend({},this.config.read);t=t||{},e.url?tb.request(tb.extend(e,{url:t?tb.parse(this.config.read.url,t):this.config.read.url},{params:t})):console.error("no read url given!")},update:function(t){var e=tb.extend({},this.config.update);t=t||{},e.url?tb.request(tb.extend(e,{url:t?tb.parse(this.config.update.url,t):this.config.update.url},{params:t})):console.error("no update url given!")},delete:function(t){var e=tb.extend({},this.config.delete);t=t||{},e.url?tb.request(tb.extend(e,{url:t?tb.parse(this.config.delete.url,t):this.config.delete.url},{params:t})):console.error("no delete url given!")}}}());class Tb extends tb{constructor(t,e){super(t,e);var n=Symbol("observable"),r=Symbol("onChange");this[n]=tb.observable(!1),this[r]=tb.debounce(function(){this[n](tb.extend({},this))},0)}}