(function(){var g=jQuery;g.fn.extend({gandalf:function(e){var l,m,n;e=g.extend(!0,{},{attribute:"validators",validators:{required:function(){return function(a,c){var b;b=!(0<g.trim(a).length)?"This field is required.":null;return c(b)}},length:function(a){null==a&&(a=1);return function(c,b){var d;d=!(g.trim(c).length>=a)?"Must be at least "+a+" character"+(1<a?"s":"")+" long.":null;return b(d)}},email:function(a){null==a&&(a=/^\S+@\S+\.\S+$/);return function(c,b){var d;d=a.test(c)?null:"Invalid email.";
return b(d)}}}},e);if(null==e.callback||"function"!==typeof e.callback)throw"gandalf.js expects a callback";if(0===this.length)return e.callback([]),this;m=[];n=l=0;this.each(function(){var a,c,b,d,f;c=(null!=(a=g(this).data(e.attribute))?a.split(" "):void 0)||[];f=[];b=0;for(d=c.length;b<d;b++)(a=c[b])&&f.push(n++);return f});return this.each(function(){var a,c,b,d,f,h,j,k;a=g(this);c=(null!=(f=a.data(e.attribute))?f.split(" "):void 0)||[];f=[];h=0;for(k=c.length;h<k;h++)if(d=c[h]){b=d.match(/([\w\-\_]+)\[(.*)\]/);
d=b[1];if(null==e.validators[d])throw"gandalf.js couldn't find any validators with name '"+d+"'";b=b[2].length&&(null!=(j=b[2])?j.split(","):void 0)||[];f.push(e.validators[d].apply(a,b))}k=[];j=0;for(h=f.length;j<h;j++)c=f[j],k.push(c(a.val(),function(b){l++;m.push({input:a,error:b});if(l===n)return e.callback(m)}));return k})}})}).call(this);