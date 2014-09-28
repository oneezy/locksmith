function UrlMatcher(t,e){function r(t){return isDefined(t)?this.type.decode(t):$UrlMatcherFactory.$$getDefaultValue(this)}function n(e,n,i){if(!/^\w+(-+\w+)*$/.test(e))throw new Error("Invalid parameter name '"+e+"' in pattern '"+t+"'");if(h[e])throw new Error("Duplicate parameter name '"+e+"' in pattern '"+t+"'");h[e]=extend({type:n||new Type,$value:r},i)}function i(t,e,r){var n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;var i=r?"?":"";return n+i+"("+e+")"+i}function o(t){if(!e.params||!e.params[t])return{};var r=e.params[t];return isObject(r)?r:{value:r}}e=angular.isObject(e)?e:{};var a,s=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,u="^",c=0,p=this.segments=[],h=this.params={};this.source=t;for(var f,l,y,d,g;(a=s.exec(t))&&(f=a[2]||a[3],l=a[4]||("*"==a[1]?".*":"[^/]*"),y=t.substring(c,a.index),d=this.$types[l]||new Type({pattern:new RegExp(l)}),g=o(f),!(y.indexOf("?")>=0));)u+=i(y,d.$subPattern(),isDefined(g.value)),n(f,d,g),p.push(y),c=s.lastIndex;y=t.substring(c);var v=y.indexOf("?");if(v>=0){var m=this.sourceSearch=y.substring(v);y=y.substring(0,v),this.sourcePath=t.substring(0,c+v),forEach(m.substring(1).split(/[&?]/),function(t){n(t,null,o(t))})}else this.sourcePath=t,this.sourceSearch="";u+=i(y)+(e.strict===!1?"/?":"")+"$",p.push(y),this.regexp=new RegExp(u,e.caseInsensitive?"i":void 0),this.prefix=p[0]}function Type(t){extend(this,t)}function $UrlMatcherFactory(){function t(){return{strict:o,caseInsensitive:i}}function e(t){return isFunction(t)||isArray(t)&&isFunction(t[t.length-1])}function r(){forEach(s,function(t){if(UrlMatcher.prototype.$types[t.name])throw new Error("A type named '"+t.name+"' has already been defined.");var r=new Type(e(t.def)?n.invoke(t.def):t.def);UrlMatcher.prototype.$types[t.name]=r})}var n,i=!1,o=!0,a=!0,s=[],u={"int":{decode:function(t){return parseInt(t,10)},is:function(t){return isDefined(t)?this.decode(t.toString())===t:!1},pattern:/\d+/},bool:{encode:function(t){return t?1:0},decode:function(t){return 0===parseInt(t,10)?!1:!0},is:function(t){return t===!0||t===!1},pattern:/0|1/},string:{pattern:/[^\/]*/},date:{equals:function(t,e){return t.toISOString()===e.toISOString()},decode:function(t){return new Date(t)},encode:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/}};$UrlMatcherFactory.$$getDefaultValue=function(t){if(!e(t.value))return t.value;if(!n)throw new Error("Injectable functions cannot be called at configuration time");return n.invoke(t.value)},this.caseInsensitive=function(t){i=t},this.strictMode=function(t){o=t},this.compile=function(e,r){return new UrlMatcher(e,extend(t(),r))},this.isMatcher=function(t){if(!isObject(t))return!1;var e=!0;return forEach(UrlMatcher.prototype,function(r,n){isFunction(r)&&(e=e&&isDefined(t[n])&&isFunction(t[n]))}),e},this.type=function(t,e){return isDefined(e)?(s.push({name:t,def:e}),a||r(),this):UrlMatcher.prototype.$types[t]},this.$get=["$injector",function(t){return n=t,a=!1,UrlMatcher.prototype.$types={},r(),forEach(u,function(t,e){UrlMatcher.prototype.$types[e]||(UrlMatcher.prototype.$types[e]=new Type(t))}),this}]}UrlMatcher.prototype.concat=function(t,e){return new UrlMatcher(this.sourcePath+t+this.sourceSearch,e)},UrlMatcher.prototype.toString=function(){return this.source},UrlMatcher.prototype.exec=function(t,e){var r=this.regexp.exec(t);if(!r)return null;e=e||{};var n,i,o,a=this.parameters(),s=a.length,u=this.segments.length-1,c={};if(u!==r.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(n=0;u>n;n++)o=a[n],i=this.params[o],c[o]=i.$value(r[n+1]);for(;s>n;n++)o=a[n],i=this.params[o],c[o]=i.$value(e[o]);return c},UrlMatcher.prototype.parameters=function(t){return isDefined(t)?this.params[t]||null:objectKeys(this.params)},UrlMatcher.prototype.validates=function(t){var e,r,n=!0,i=this;return forEach(t,function(t,o){i.params[o]&&(r=i.params[o],e=!t&&isDefined(r.value),n=n&&(e||r.type.is(t)))}),n},UrlMatcher.prototype.format=function(t){var e=this.segments,r=this.parameters();if(!t)return e.join("").replace("//","/");var n,i,o,a,s,u,c=e.length-1,p=r.length,h=e[0];if(!this.validates(t))return null;for(n=0;c>n;n++)a=r[n],o=t[a],s=this.params[a],(isDefined(o)||"/"!==e[n]&&"/"!==e[n+1])&&(null!=o&&(h+=encodeURIComponent(s.type.encode(o))),h+=e[n+1]);for(;p>n;n++)a=r[n],o=t[a],null!=o&&(u=isArray(o),u&&(o=o.map(encodeURIComponent).join("&"+a+"=")),h+=(i?"&":"?")+a+"="+(u?o:encodeURIComponent(o)),i=!0);return h},UrlMatcher.prototype.$types={},Type.prototype.is=function(){return!0},Type.prototype.encode=function(t){return t},Type.prototype.decode=function(t){return t},Type.prototype.equals=function(t,e){return t==e},Type.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},Type.prototype.pattern=/.*/,angular.module("ui.router.util").provider("$urlMatcherFactory",$UrlMatcherFactory);