import{r as y,u as C,j as e,n as De,o as _e}from"./index-BPx5NZPS.js";function Se(t){var s,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(s=0;s<r;s++)t[s]&&(n=Se(t[s]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function Ee(){for(var t,s,n=0,a="",r=arguments.length;n<r;n++)(t=arguments[n])&&(s=Se(t))&&(a&&(a+=" "),a+=s);return a}var Le=Object.create,ie=Object.defineProperty,Oe=Object.defineProperties,ze=Object.getOwnPropertyDescriptor,Be=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertyNames,oe=Object.getOwnPropertySymbols,$e=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,xe=(t,s,n)=>s in t?ie(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,$=(t,s)=>{for(var n in s||(s={}))he.call(s,n)&&xe(t,n,s[n]);if(oe)for(var n of oe(s))Ce.call(s,n)&&xe(t,n,s[n]);return t},ce=(t,s)=>Oe(t,Be(s)),Ie=(t,s)=>{var n={};for(var a in t)he.call(t,a)&&s.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&oe)for(var a of oe(t))s.indexOf(a)<0&&Ce.call(t,a)&&(n[a]=t[a]);return n},Me=(t,s)=>function(){return s||(0,t[we(t)[0]])((s={exports:{}}).exports,s),s.exports},Ue=(t,s)=>{for(var n in s)ie(t,n,{get:s[n],enumerable:!0})},qe=(t,s,n,a)=>{if(s&&typeof s=="object"||typeof s=="function")for(let r of we(s))!he.call(t,r)&&r!==n&&ie(t,r,{get:()=>s[r],enumerable:!(a=ze(s,r))||a.enumerable});return t},He=(t,s,n)=>(n=t!=null?Le($e(t)):{},qe(!t||!t.__esModule?ie(n,"default",{value:t,enumerable:!0}):n,t)),Ge=Me({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(t,s){var n=function(){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,h={},i={util:{encode:function l(c){return c instanceof g?new g(c.type,l(c.content),c.alias):Array.isArray(c)?c.map(l):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++r}),l.__id},clone:function l(c,p){p=p||{};var j,f;switch(i.util.type(c)){case"Object":if(f=i.util.objId(c),p[f])return p[f];j={},p[f]=j;for(var b in c)c.hasOwnProperty(b)&&(j[b]=l(c[b],p));return j;case"Array":return f=i.util.objId(c),p[f]?p[f]:(j=[],p[f]=j,c.forEach(function(k,N){j[N]=l(k,p)}),j);default:return c}},getLanguage:function(l){for(;l;){var c=a.exec(l.className);if(c)return c[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,c){l.className=l.className.replace(RegExp(a,"gi"),""),l.classList.add("language-"+c)},isActive:function(l,c,p){for(var j="no-"+c;l;){var f=l.classList;if(f.contains(c))return!0;if(f.contains(j))return!1;l=l.parentElement}return!!p}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(l,c){var p=i.util.clone(i.languages[l]);for(var j in c)p[j]=c[j];return p},insertBefore:function(l,c,p,j){j=j||i.languages;var f=j[l],b={};for(var k in f)if(f.hasOwnProperty(k)){if(k==c)for(var N in p)p.hasOwnProperty(N)&&(b[N]=p[N]);p.hasOwnProperty(k)||(b[k]=f[k])}var I=j[l];return j[l]=b,i.languages.DFS(i.languages,function(w,R){R===I&&w!=l&&(this[w]=b)}),b},DFS:function l(c,p,j,f){f=f||{};var b=i.util.objId;for(var k in c)if(c.hasOwnProperty(k)){p.call(c,k,c[k],j||k);var N=c[k],I=i.util.type(N);I==="Object"&&!f[b(N)]?(f[b(N)]=!0,l(N,p,null,f)):I==="Array"&&!f[b(N)]&&(f[b(N)]=!0,l(N,p,k,f))}}},plugins:{},highlight:function(l,c,p){var j={code:l,grammar:c,language:p};if(i.hooks.run("before-tokenize",j),!j.grammar)throw new Error('The language "'+j.language+'" has no grammar.');return j.tokens=i.tokenize(j.code,j.grammar),i.hooks.run("after-tokenize",j),g.stringify(i.util.encode(j.tokens),j.language)},tokenize:function(l,c){var p=c.rest;if(p){for(var j in p)c[j]=p[j];delete c.rest}var f=new x;return m(f,f.head,l),u(l,f,c,f.head,0),E(f)},hooks:{all:{},add:function(l,c){var p=i.hooks.all;p[l]=p[l]||[],p[l].push(c)},run:function(l,c){var p=i.hooks.all[l];if(!(!p||!p.length))for(var j=0,f;f=p[j++];)f(c)}},Token:g};function g(l,c,p,j){this.type=l,this.content=c,this.alias=p,this.length=(j||"").length|0}g.stringify=function l(c,p){if(typeof c=="string")return c;if(Array.isArray(c)){var j="";return c.forEach(function(I){j+=l(I,p)}),j}var f={type:c.type,content:l(c.content,p),tag:"span",classes:["token",c.type],attributes:{},language:p},b=c.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(f.classes,b):f.classes.push(b)),i.hooks.run("wrap",f);var k="";for(var N in f.attributes)k+=" "+N+'="'+(f.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'"'+k+">"+f.content+"</"+f.tag+">"};function o(l,c,p,j){l.lastIndex=c;var f=l.exec(p);if(f&&j&&f[1]){var b=f[1].length;f.index+=b,f[0]=f[0].slice(b)}return f}function u(l,c,p,j,f,b){for(var k in p)if(!(!p.hasOwnProperty(k)||!p[k])){var N=p[k];N=Array.isArray(N)?N:[N];for(var I=0;I<N.length;++I){if(b&&b.cause==k+","+I)return;var w=N[I],R=w.inside,F=!!w.lookbehind,H=!!w.greedy,M=w.alias;if(H&&!w.pattern.global){var O=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,O+"g")}for(var me=w.pattern||w,T=j.next,z=f;T!==c.tail&&!(b&&z>=b.reach);z+=T.value.length,T=T.next){var Y=T.value;if(c.length>l.length)return;if(!(Y instanceof g)){var ee=1,L;if(H){if(L=o(me,z,l,F),!L||L.index>=l.length)break;var te=L.index,Fe=L.index+L[0].length,G=z;for(G+=T.value.length;te>=G;)T=T.next,G+=T.value.length;if(G-=T.value.length,z=G,T.value instanceof g)continue;for(var X=T;X!==c.tail&&(G<Fe||typeof X.value=="string");X=X.next)ee++,G+=X.value.length;ee--,Y=l.slice(z,G),L.index-=z}else if(L=o(me,0,Y,F),!L)continue;var te=L.index,se=L[0],le=Y.slice(0,te),ge=Y.slice(te+se.length),de=z+Y.length;b&&de>b.reach&&(b.reach=de);var ne=T.prev;le&&(ne=m(c,ne,le),z+=le.length),v(c,ne,ee);var Pe=new g(k,R?i.tokenize(se,R):se,M,se);if(T=m(c,ne,Pe),ge&&m(c,T,ge),ee>1){var ue={cause:k+","+I,reach:de};u(l,c,p,T.prev,z,ue),b&&ue.reach>b.reach&&(b.reach=ue.reach)}}}}}}function x(){var l={value:null,prev:null,next:null},c={value:null,prev:l,next:null};l.next=c,this.head=l,this.tail=c,this.length=0}function m(l,c,p){var j=c.next,f={value:p,prev:c,next:j};return c.next=f,j.prev=f,l.length++,f}function v(l,c,p){for(var j=c.next,f=0;f<p&&j!==l.tail;f++)j=j.next;c.next=j,j.prev=c,l.length-=f}function E(l){for(var c=[],p=l.head.next;p!==l.tail;)c.push(p.value),p=p.next;return c}return i}();s.exports=n,n.default=n}}),d=He(Ge());d.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},d.languages.markup.tag.inside["attr-value"].inside.entity=d.languages.markup.entity,d.languages.markup.doctype.inside["internal-subset"].inside=d.languages.markup,d.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(d.languages.markup.tag,"addInlined",{value:function(t,a){var n={},n=(n["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:d.languages[a]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),a=(n["language-"+a]={pattern:/[\s\S]+/,inside:d.languages[a]},{});a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},d.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(d.languages.markup.tag,"addAttribute",{value:function(t,s){d.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:d.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),d.languages.html=d.languages.markup,d.languages.mathml=d.languages.markup,d.languages.svg=d.languages.markup,d.languages.xml=d.languages.extend("markup",{}),d.languages.ssml=d.languages.xml,d.languages.atom=d.languages.xml,d.languages.rss=d.languages.xml,function(t){var s={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,a="(?:[^\\\\-]|"+n.source+")",a=RegExp(a+"-"+a),r={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:a,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":s,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:n}},"special-escape":s,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":r}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":r}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(d),d.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},d.languages.javascript=d.languages.extend("clike",{"class-name":[d.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),d.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,d.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:d.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:d.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:d.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:d.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:d.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),d.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:d.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),d.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),d.languages.markup&&(d.languages.markup.tag.addInlined("script","javascript"),d.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),d.languages.js=d.languages.javascript,d.languages.actionscript=d.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),d.languages.actionscript["class-name"].alias="function",delete d.languages.actionscript.parameter,delete d.languages.actionscript["literal-property"],d.languages.markup&&d.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:d.languages.markup}}),function(t){var s=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};t.languages.coffeescript=t.languages.extend("javascript",{comment:s,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),t.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:s,interpolation:n}}}),t.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:t.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),t.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete t.languages.coffeescript["template-string"],t.languages.coffee=t.languages.coffeescript}(d),function(t){var s=t.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(s,"addSupport",{value:function(n,a){(n=typeof n=="string"?[n]:n).forEach(function(r){var h=function(m){m.inside||(m.inside={}),m.inside.rest=a},i="doc-comment";if(g=t.languages[r]){var g,o=g[i];if((o=o||(g=t.languages.insertBefore(r,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[i])instanceof RegExp&&(o=g[i]={pattern:o}),Array.isArray(o))for(var u=0,x=o.length;u<x;u++)o[u]instanceof RegExp&&(o[u]={pattern:o[u]}),h(o[u]);else h(o)}})}}),s.addSupport(["java","javascript","php"],s)}(d),function(t){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,s=(t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup);s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(d),function(t){var s=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,s=(t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:s={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+s.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[s,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=s,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:s,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:s,number:n})}(d),function(t){var s=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+n.source+"(?:[ 	]+"+s.source+")?|"+s.source+"(?:[ 	]+"+n.source+")?)",r=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),h=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(g,o){o=(o||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return g});return RegExp(u,o)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+r+"|"+h+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(h),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:s,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml}(d),function(t){var s=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(u){return u=u.replace(/<inner>/g,function(){return s}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,r=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),h=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,i=(t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+h+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+h+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+h+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(x){u!==x&&(t.languages.markdown[u].inside.content.inside[x]=t.languages.markdown[x])})}),t.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function x(m){if(m&&typeof m!="string")for(var v=0,E=m.length;v<E;v++){var l,c=m[v];c.type!=="code"?x(c.content):(l=c.content[1],c=c.content[3],l&&c&&l.type==="code-language"&&c.type==="code-block"&&typeof l.content=="string"&&(l=l.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),l="language-"+(l=(/[a-z][\w-]*/i.exec(l)||[""])[0].toLowerCase()),c.alias?typeof c.alias=="string"?c.alias=[c.alias,l]:c.alias.push(l):c.alias=[l]))}}(u.tokens)}),t.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var x="",m=0,v=u.classes.length;m<v;m++){var E=u.classes[m],E=/language-(.+)/.exec(E);if(E){x=E[1];break}}var l,c=t.languages[x];c?u.content=t.highlight(function(p){return p=p.replace(i,""),p=p.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(j,f){var b;return(f=f.toLowerCase())[0]==="#"?(b=f[1]==="x"?parseInt(f.slice(2),16):Number(f.slice(1)),o(b)):g[f]||j})}(u.content),c,x):x&&x!=="none"&&t.plugins.autoloader&&(l="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=l,t.plugins.autoloader.loadLanguages(x,function(){var p=document.getElementById(l);p&&(p.innerHTML=t.highlight(p.textContent,t.languages[x],x))}))}}),RegExp(t.languages.markup.tag.pattern.source,"gi")),g={amp:"&",lt:"<",gt:">",quot:'"'},o=String.fromCodePoint||String.fromCharCode;t.languages.md=t.languages.markdown}(d),d.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:d.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},d.hooks.add("after-tokenize",function(t){if(t.language==="graphql")for(var s=t.tokens.filter(function(l){return typeof l!="string"&&l.type!=="comment"&&l.type!=="scalar"}),n=0;n<s.length;){var a=s[n++];if(a.type==="keyword"&&a.content==="mutation"){var r=[];if(m(["definition-mutation","punctuation"])&&x(1).content==="("){n+=2;var h=v(/^\($/,/^\)$/);if(h===-1)continue;for(;n<h;n++){var i=x(0);i.type==="variable"&&(E(i,"variable-input"),r.push(i.content))}n=h+1}if(m(["punctuation","property-query"])&&x(0).content==="{"&&(n++,E(x(0),"property-mutation"),0<r.length)){var g=v(/^\{$/,/^\}$/);if(g!==-1)for(var o=n;o<g;o++){var u=s[o];u.type==="variable"&&0<=r.indexOf(u.content)&&E(u,"variable-input")}}}}function x(l){return s[n+l]}function m(l,c){c=c||0;for(var p=0;p<l.length;p++){var j=x(p+c);if(!j||j.type!==l[p])return}return 1}function v(l,c){for(var p=1,j=n;j<s.length;j++){var f=s[j],b=f.content;if(f.type==="punctuation"&&typeof b=="string"){if(l.test(b))p++;else if(c.test(b)&&--p===0)return j}}return-1}function E(l,c){var p=l.alias;p?Array.isArray(p)||(l.alias=p=[p]):l.alias=p=[],p.push(c)}}),d.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(t){var s=t.languages.javascript["template-string"],n=s.pattern.source,a=s.inside.interpolation,r=a.inside["interpolation-punctuation"],h=a.pattern.source;function i(m,v){if(t.languages[m])return{pattern:RegExp("((?:"+v+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:m}}}}function g(m,v,E){return m={code:m,grammar:v,language:E},t.hooks.run("before-tokenize",m),m.tokens=t.tokenize(m.code,m.grammar),t.hooks.run("after-tokenize",m),m.tokens}function o(m,v,E){var p=t.tokenize(m,{interpolation:{pattern:RegExp(h),lookbehind:!0}}),l=0,c={},p=g(p.map(function(f){if(typeof f=="string")return f;for(var b,k,f=f.content;m.indexOf((k=l++,b="___"+E.toUpperCase()+"_"+k+"___"))!==-1;);return c[b]=f,b}).join(""),v,E),j=Object.keys(c);return l=0,function f(b){for(var k=0;k<b.length;k++){if(l>=j.length)return;var N,I,w,R,F,H,M,O=b[k];typeof O=="string"||typeof O.content=="string"?(N=j[l],(M=(H=typeof O=="string"?O:O.content).indexOf(N))!==-1&&(++l,I=H.substring(0,M),F=c[N],w=void 0,(R={})["interpolation-punctuation"]=r,(R=t.tokenize(F,R)).length===3&&((w=[1,1]).push.apply(w,g(R[1],t.languages.javascript,"javascript")),R.splice.apply(R,w)),w=new t.Token("interpolation",R,a.alias,F),R=H.substring(M+N.length),F=[],I&&F.push(I),F.push(w),R&&(f(H=[R]),F.push.apply(F,H)),typeof O=="string"?(b.splice.apply(b,[k,1].concat(F)),k+=F.length-1):O.content=F)):(M=O.content,Array.isArray(M)?f(M):f([M]))}}(p),new t.Token(E,p,"language-"+E,m)}t.languages.javascript["template-string"]=[i("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),i("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),i("svg",/\bsvg/.source),i("markdown",/\b(?:markdown|md)/.source),i("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),i("sql",/\bsql/.source),s].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function x(m){return typeof m=="string"?m:Array.isArray(m)?m.map(x).join(""):x(m.content)}t.hooks.add("after-tokenize",function(m){m.language in u&&function v(E){for(var l=0,c=E.length;l<c;l++){var p,j,f,b=E[l];typeof b!="string"&&(p=b.content,Array.isArray(p)?b.type==="template-string"?(b=p[1],p.length===3&&typeof b!="string"&&b.type==="embedded-code"&&(j=x(b),b=b.alias,b=Array.isArray(b)?b[0]:b,f=t.languages[b])&&(p[1]=o(j,f,b))):v(p):typeof p!="string"&&v([p]))}}(m.tokens)})}(d),function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var s=t.languages.extend("typescript",{});delete s["class-name"],t.languages.typescript["class-name"].inside=s,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:s}}}}),t.languages.ts=t.languages.typescript}(d),function(t){var s=t.languages.javascript,n=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,a="(@(?:arg|argument|param|property)\\s+(?:"+n+"\\s+)?)";t.languages.jsdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp(a+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),t.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(a+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:s,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return n})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+n),lookbehind:!0,inside:{string:s.string,number:s.number,boolean:s.boolean,keyword:t.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:s,alias:"language-javascript"}}}}),t.languages.javadoclike.addSupport("javascript",t.languages.jsdoc)}(d),function(t){t.languages.flow=t.languages.extend("javascript",{}),t.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),t.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete t.languages.flow.parameter,t.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(t.languages.flow.keyword)||(t.languages.flow.keyword=[t.languages.flow.keyword]),t.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(d),d.languages.n4js=d.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),d.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),d.languages.n4jsd=d.languages.n4js,function(t){function s(i,g){return RegExp(i.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),g)}t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),t.languages.insertBefore("javascript","keyword",{imports:{pattern:s(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:s(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:s(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var n=["function","function-variable","method","method-variable","property-access"],a=0;a<n.length;a++){var h=n[a],r=t.languages.javascript[h],h=(r=t.util.type(r)==="RegExp"?t.languages.javascript[h]={pattern:r}:r).inside||{};(r.inside=h)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(d),function(t){var s=t.util.clone(t.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,r=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function h(o,u){return o=o.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return r}),RegExp(o,u)}r=h(r).source,t.languages.jsx=t.languages.extend("markup",s),t.languages.jsx.tag.pattern=h(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=s.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:h(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:h(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);function i(o){for(var u=[],x=0;x<o.length;x++){var m=o[x],v=!1;typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===g(m.content[0].content[1])&&u.pop():m.content[m.content.length-1].content!=="/>"&&u.push({tagName:g(m.content[0].content[1]),openedBraces:0}):0<u.length&&m.type==="punctuation"&&m.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&m.type==="punctuation"&&m.content==="}"?u[u.length-1].openedBraces--:v=!0),(v||typeof m=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(v=g(m),x<o.length-1&&(typeof o[x+1]=="string"||o[x+1].type==="plain-text")&&(v+=g(o[x+1]),o.splice(x+1,1)),0<x&&(typeof o[x-1]=="string"||o[x-1].type==="plain-text")&&(v=g(o[x-1])+v,o.splice(x-1,1),x--),o[x]=new t.Token("plain-text",v,null,v)),m.content&&typeof m.content!="string"&&i(m.content)}}var g=function(o){return o?typeof o=="string"?o:typeof o.content=="string"?o.content:o.content.map(g).join(""):""};t.hooks.add("after-tokenize",function(o){o.language!=="jsx"&&o.language!=="tsx"||i(o.tokens)})}(d),function(t){var s=t.util.clone(t.languages.typescript),s=(t.languages.tsx=t.languages.extend("jsx",s),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"],t.languages.tsx.tag);s.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+s.pattern.source+")",s.pattern.flags),s.lookbehind=!0}(d),d.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},d.languages.swift["string-literal"].forEach(function(t){t.inside.interpolation.inside=d.languages.swift}),function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var s={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:s},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:s},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin}(d),d.languages.c=d.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),d.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),d.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},d.languages.c.string],char:d.languages.c.char,comment:d.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:d.languages.c}}}}),d.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete d.languages.c.boolean,d.languages.objectivec=d.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete d.languages.objectivec["class-name"],d.languages.objc=d.languages.objectivec,d.languages.reason=d.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),d.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete d.languages.reason.function,function(t){for(var s=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)s=s.replace(/<self>/g,function(){return s});s=s.replace(/<self>/g,function(){return/[^\s\S]/.source}),t.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+s),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},t.languages.rust["closure-params"].inside.rest=t.languages.rust,t.languages.rust.attribute.inside.string=t.languages.rust.string}(d),d.languages.go=d.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),d.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete d.languages.go["class-name"],function(t){var s=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return s.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return s.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:s,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])}(d),d.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},d.languages.python["string-interpolation"].inside.interpolation.inside.rest=d.languages.python,d.languages.py=d.languages.python,d.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},d.languages.webmanifest=d.languages.json;var S={};Ue(S,{dracula:()=>We,duotoneDark:()=>Ye,duotoneLight:()=>Ke,github:()=>Je,gruvboxMaterialDark:()=>It,gruvboxMaterialLight:()=>At,jettwaveDark:()=>yt,jettwaveLight:()=>kt,nightOwl:()=>tt,nightOwlLight:()=>nt,oceanicNext:()=>rt,okaidia:()=>it,oneDark:()=>St,oneLight:()=>wt,palenight:()=>lt,shadesOfPurple:()=>ut,synthwave84:()=>ht,ultramin:()=>gt,vsDark:()=>Te,vsLight:()=>jt});var Ve={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},We=Ve,Ze={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Ye=Ze,Qe={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},Ke=Qe,Xe={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},Je=Xe,et={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},tt=et,st={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},nt=st,P={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},at={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:P.keyword}},{types:["attr-value"],style:{color:P.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:P.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:P.primitive}},{types:["boolean"],style:{color:P.boolean}},{types:["tag"],style:{color:P.tag}},{types:["string"],style:{color:P.string}},{types:["punctuation"],style:{color:P.string}},{types:["selector","char","builtin","inserted"],style:{color:P.char}},{types:["function"],style:{color:P.function}},{types:["operator","entity","url","variable"],style:{color:P.variable}},{types:["keyword"],style:{color:P.keyword}},{types:["atrule","class-name"],style:{color:P.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},rt=at,ot={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},it=ot,ct={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},lt=ct,dt={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},ut=dt,pt={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},ht=pt,mt={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},gt=mt,xt={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Te=xt,ft={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},jt=ft,bt={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},yt=bt,vt={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},kt=vt,Nt={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},St=Nt,Et={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},wt=Et,Ct={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},It=Ct,Tt={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},At=Tt,Rt=t=>y.useCallback(s=>{var n=s,{className:a,style:r,line:h}=n,i=Ie(n,["className","style","line"]);const g=ce($({},i),{className:Ee("token-line",a)});return typeof t=="object"&&"plain"in t&&(g.style=t.plain),typeof r=="object"&&(g.style=$($({},g.style||{}),r)),g},[t]),Ft=t=>{const s=y.useCallback(({types:n,empty:a})=>{if(t!=null){{if(n.length===1&&n[0]==="plain")return a!=null?{display:"inline-block"}:void 0;if(n.length===1&&a!=null)return t[n[0]]}return Object.assign(a!=null?{display:"inline-block"}:{},...n.map(r=>t[r]))}},[t]);return y.useCallback(n=>{var a=n,{token:r,className:h,style:i}=a,g=Ie(a,["token","className","style"]);const o=ce($({},g),{className:Ee("token",...r.types,h),children:r.content,style:s(r)});return i!=null&&(o.style=$($({},o.style||{}),i)),o},[s])},Pt=/\r\n|\r|\n/,fe=t=>{t.length===0?t.push({types:["plain"],content:`
`,empty:!0}):t.length===1&&t[0].content===""&&(t[0].content=`
`,t[0].empty=!0)},je=(t,s)=>{const n=t.length;return n>0&&t[n-1]===s?t:t.concat(s)},Dt=t=>{const s=[[]],n=[t],a=[0],r=[t.length];let h=0,i=0,g=[];const o=[g];for(;i>-1;){for(;(h=a[i]++)<r[i];){let u,x=s[i];const v=n[i][h];if(typeof v=="string"?(x=i>0?x:["plain"],u=v):(x=je(x,v.type),v.alias&&(x=je(x,v.alias)),u=v.content),typeof u!="string"){i++,s.push(x),n.push(u),a.push(0),r.push(u.length);continue}const E=u.split(Pt),l=E.length;g.push({types:x,content:E[0]});for(let c=1;c<l;c++)fe(g),o.push(g=[]),g.push({types:x,content:E[c]})}i--,s.pop(),n.pop(),a.pop(),r.pop()}return fe(g),o},be=Dt,_t=({prism:t,code:s,grammar:n,language:a})=>y.useMemo(()=>{if(n==null)return be([s]);const r={code:s,grammar:n,language:a,tokens:[]};return t.hooks.run("before-tokenize",r),r.tokens=t.tokenize(s,n),t.hooks.run("after-tokenize",r),be(r.tokens)},[s,n,a,t]),Lt=(t,s)=>{const{plain:n}=t,a=t.styles.reduce((r,h)=>{const{languages:i,style:g}=h;return i&&!i.includes(s)||h.types.forEach(o=>{const u=$($({},r[o]),g);r[o]=u}),r},{});return a.root=n,a.plain=ce($({},n),{backgroundColor:void 0}),a},Ot=Lt,zt=({children:t,language:s,code:n,theme:a,prism:r})=>{const h=s.toLowerCase(),i=Ot(a,h),g=Rt(i),o=Ft(i),u=r.languages[h],x=_t({prism:r,language:h,code:n,grammar:u});return t({tokens:x,className:`prism-code language-${h}`,style:i!=null?i.root:{},getLineProps:g,getTokenProps:o})},_=t=>y.createElement(zt,ce($({},t),{prism:t.prism||d,theme:t.theme||Te,code:t.code,language:t.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const Bt=`
const [state, setState] = useState(initialState)

// Ejemplos reales:
const [age, setAge] = useState(28)
const [name, setName] = useState("Taylor")
const [isOpen, setIsOpen] = useState(false)
const [todos, setTodos] = useState(() => handleExpensiveFunction())
`,B=({code:t,language:s="typescript"})=>{const{isDarkMode:n}=C();return e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})})},Q=({icon:t,title:s,description:n,isDarkMode:a})=>e.jsxs("div",{className:`tip-card ${a?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:t}),e.jsx("h3",{children:s}),e.jsx("p",{children:n})]}),$t=()=>{const{isDarkMode:t}=C(),[s,n]=y.useState(0),[a,r]=y.useState(0),[h,i]=y.useState([]);function g(){i([]);const u=[];console.log("Antes de setCount:",s),u.push(`Antes de setCount: ${s}`),n(s+1),console.log("Después de setCount:",s),u.push(`Después de setCount: ${s}`),i(u),setTimeout(()=>{console.log("Después de 5 segundos:",s),i(x=>[...x,`Después de 5 segundos: ${s}`])},5e3)}function o(){r(u=>u+1),r(u=>u+1),r(u=>u+1)}return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`useState-header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"useState hook"}),e.jsx("p",{className:"subtitle",children:"El hook fundamental para manejar estado en componentes funcionales de React, podemos llamar useState múltiples veces para diferentes estados."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useState?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useState"})," te permite agregar ",e.jsx("strong",{children:"estado"})," a tus componentes funcionales. El estado es información que puede cambiar durante la vida del componente."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Siempre se llama en el top-level del componente, nunca dentro de loops, condiciones o funciones anidadas."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(B,{language:"typescript",code:Bt})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Anatomía del Hook"}),e.jsxs("ul",{className:"anatomy-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"state"})," - El valor actual del estado"]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"setState (state function)"})," - Función para actualizar el estado"]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"initialState"})," - Valor inicial (cualquier tipo)"]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Array Destructuring"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"useState usa array destructuring de JavaScript ES6:"})}),e.jsx("div",{className:"code-block",children:e.jsx(B,{language:"javascript",code:`// Array destructuring básico
let arr = ["John", "Smith"]
let [firstName, surname] = arr

console.log(firstName) // "John"
console.log(surname)   // "Smith"

// useState funciona igual
const [age, setAge] = useState(28)
//     ↑    ↑         ↑
//   valor función  hook`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Estado Inmutable"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 Nunca mutes el estado directamente"}),e.jsx("div",{className:`code-block error ${t?"dark":"light"}`,children:e.jsx(B,{language:"javascript",code:`// ❌ MAL - Mutación directa
position.x = 5
form.firstName = 'Taylor'
items.push(newItem)
items[0] = 'changed'`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h3",{children:"✅ Siempre crea nuevos valores"}),e.jsx("div",{className:`code-block success ${t?"dark":"light"}`,children:e.jsx(B,{language:"javascript",code:`// ✅ BIEN - Reemplazar con nuevo valor
setPosition({ x: 5, y: 10 })
setForm({ ...form, firstName: 'Taylor' })
setItems([...items, newItem])
setItems(items.map((item, i) => i === 0 ? 'changed' : item))`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Updater Functions"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Cuando el nuevo estado depende del anterior, usa una"," ",e.jsx("strong",{children:"función actualizadora"}),":"]})}),e.jsx("div",{className:"code-block",children:e.jsx(B,{language:"javascript",code:`// ✅ CORRECTO - Updater function
setNumber(n => n + 1)
setNumber(n => n + 1)
setNumber(n => n + 1)
// Result: +3 ✨

// ❌ INCORRECTO - Valor directo
setNumber(number + 1)
setNumber(number + 1)
setNumber(number + 1)
// Result: +1 (todas usan el mismo valor inicial)`})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"Número:"}),e.jsx("span",{className:"value large",children:a})]})}),e.jsx("button",{className:"btn-primary",onClick:o,children:"+3 (usando updater function)"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⏱️ El Estado NO se actualiza inmediatamente"}),e.jsx("div",{className:"code-block",children:e.jsx(B,{language:"javascript",code:`function handleClick() {
  console.log(count)      // 0
  setCount(count + 1)     // Solicita re-render
  console.log(count)      // Todavía 0! 🤔
  
  setTimeout(() => {
    console.log(count)    // También 0! 😮
  }, 5000)
}`})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"Count:"}),e.jsx("span",{className:"value",children:s})]})}),e.jsx("button",{className:"btn-secondary",onClick:g,children:"Probar Demo"}),h.length>0&&e.jsxs("div",{className:`console-output ${t?"dark":"light"}`,children:[e.jsx("div",{className:"console-header",children:"📺 Console Output:"}),h.map((u,x)=>e.jsxs("div",{className:`log-line ${t?"dark":"light"}`,children:["→ ",u]},x))]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 ¿Por qué?"})," React agrupa las actualizaciones de estado para optimizar el rendimiento. El estado se actualiza después de que el componente termina de ejecutarse."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎨 Actualizando Objetos"}),e.jsx("div",{className:"code-block",children:e.jsx(B,{language:"javascript",code:`// ✅ Spread operator - copia y sobrescribe
setPerson({
  ...person,
  firstName: e.target.value
})

// ✅ Propiedades dinámicas
setPerson({
  ...person,
  [e.target.name]: e.target.value
})

// ✅ Objetos anidados
setPerson({
  ...person,
  artwork: {
    ...person.artwork,
    city: 'New Delhi'
  }
})`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📋 Actualizando Arrays"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"methods-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Operación"}),e.jsx("th",{children:"❌ Evitar (mutan)"}),e.jsx("th",{children:"✅ Preferir (inmutables)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Agregar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"push"}),", ",e.jsx("code",{children:"unshift"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"concat"}),", ",e.jsx("code",{children:"[...arr]"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Eliminar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"pop"}),", ",e.jsx("code",{children:"shift"}),", ",e.jsx("code",{children:"splice"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"slice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Reemplazar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"splice"}),", ",e.jsx("code",{children:"arr[i] = ..."})]}),e.jsx("td",{children:e.jsx("code",{children:"map"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Ordenar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"reverse"}),", ",e.jsx("code",{children:"sort"})]}),e.jsx("td",{children:"Copiar primero, luego ordenar"})]})]})]})}),e.jsx("div",{className:"code-block",children:e.jsx(B,{language:"javascript",code:`// ✅ Agregar
setItems([...items, newItem])
setItems([newItem, ...items]) // Al inicio

// ✅ Eliminar
setItems(items.filter(item => item.id !== id))

// ✅ Reemplazar/Actualizar
setItems(items.map(item => 
  item.id === id 
    ? { ...item, completed: true } 
    : item
))

// ✅ Ordenar (copiar primero!)
const sorted = [...items].sort((a, b) => 
  a.name.localeCompare(b.name)
)
setItems(sorted)`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Lazy Initial State"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Para cálculos costosos en el estado inicial, pasa una"," ",e.jsx("strong",{children:"función inicializadora"}),":"]})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:`code-block error ${t?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"❌ Se ejecuta en cada render"}),e.jsx(B,{language:"javascript",code:`const [todos, setTodos] = useState(
  createExpensiveTodos()
)`})]}),e.jsxs("div",{className:`code-block success ${t?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"✅ Se ejecuta solo una vez"}),e.jsx(B,{language:"javascript",code:`const [todos, setTodos] = useState(
  () => createExpensiveTodos()
)`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsx(Q,{isDarkMode:t,icon:"🔢",title:"Múltiples Estados",description:"Puedes llamar useState múltiples veces en un componente"}),e.jsx(Q,{isDarkMode:t,icon:"🔒",title:"Inmutabilidad",description:"Siempre crea nuevos valores, nunca modifiques directamente"}),e.jsx(Q,{isDarkMode:t,icon:"⚡",title:"Updater Functions",description:"Úsalas cuando dependas del estado anterior"}),e.jsx(Q,{isDarkMode:t,icon:"🔄",title:"useReducer",description:"Si tienes muchos setState relacionados, considera useReducer"}),e.jsx(Q,{isDarkMode:t,icon:"⏰",title:"Actualización Asíncrona",description:"El estado no se actualiza inmediatamente después de setState"}),e.jsx(Q,{isDarkMode:t,icon:"🎯",title:"Un Estado, Un Propósito",description:"Divide estados complejos en múltiples estados simples"})]})]})]})},U=({code:t,language:s="typescript"})=>{const{isDarkMode:n}=C();return e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})})},Mt=()=>{const{isDarkMode:t}=C(),s=y.useRef(null),n=y.useRef(null),[a,r]=y.useState(0),[h,i]=y.useState(!1);function g(){var m;(m=s.current)==null||m.focus()}function o(){if(h)return;const m=setInterval(()=>{r(v=>v+1)},1e3);n.current=m,i(!0)}function u(){n.current!==null&&(clearInterval(n.current),n.current=null,i(!1))}function x(){u(),r(0)}return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`useState-header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🔗 useRef Hook"}),e.jsx("p",{className:"subtitle",children:"Permite a un componente conservar información que no se usa para el renderizado, y referenciar valores del DOM."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useRef?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useRef"})," te permite ",e.jsx("strong",{children:"referenciar un valor"})," ","que no es necesario para el renderizado. Las refs son perfectas para almacenar información que no afecta a la salida visual de tu componente."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Diferencia clave:"})," A diferencia del estado, las refs son ",e.jsx("strong",{children:"mutables"})," y su cambio no causa re-renderizado."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(U,{language:"typescript",code:`const ref = useRef(initialValue)

// Devuelve un objeto con una propiedad:
ref.current // Valor actual (mutable)`})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Propiedades del Objeto Ref"}),e.jsxs("ul",{className:"anatomy-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"current"})," - Inicialmente contiene el"," ",e.jsx("code",{children:"initialValue"}),". Puedes cambiarlo después."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"Mutable"})," - Puedes modificar"," ",e.jsx("code",{children:"ref.current"})," sin causar re-renderizado."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"Persistente"})," - Se mantiene entre renderizados (a diferencia de variables regulares)."]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⏱️ Ejemplo: Cronómetro con intervalRef"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Al utilizar ref puedes"," ",e.jsx("strong",{children:"almacenar información entre renderizados"})," (a diferencia de las variables regulares, que se reinician en cada renderizado)."]})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"⏱️ Tiempo:"}),e.jsxs("span",{className:"value large",children:[a,"s"]})]})}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn-primary",onClick:o,disabled:h,children:"▶️ Iniciar"}),e.jsx("button",{className:"btn-secondary",onClick:u,disabled:!h,children:"⏸️ Pausar"}),e.jsx("button",{className:"btn-secondary",onClick:x,children:"🔄 Reiniciar"})]})]}),e.jsx("div",{className:"code-block",children:e.jsx(U,{language:"typescript",code:`const intervalRef = useRef<number | null>(null)
const [count, setCount] = useState(0)

function handleStartClick() {
  const intervalId = setInterval(() => {
    setCount((c) => c + 1)
  }, 1000)
  intervalRef.current = intervalId // Guardar ID del interval
}

function handleStopClick() {
  const intervalId = intervalRef.current
  clearInterval(intervalId) // Usar el ID guardado
  intervalRef.current = null
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ No leas ni escribas refs durante el renderizado"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 Incorrecto: Leer/Escribir durante renderizado"}),e.jsx("div",{className:`code-block error ${t?"dark":"light"}`,children:e.jsx(U,{language:"typescript",code:`function MyComponent() {
  // 🚩 No escribas una ref durante el renderizado
  myRef.current = 123
  
  // 🚩 No leas una ref durante el renderizado
  return <h1>{myOtherRef.current}</h1>
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h3",{children:"✅ Correcto: Usar en efectos o event handlers"}),e.jsx("div",{className:`code-block success ${t?"dark":"light"}`,children:e.jsx(U,{language:"typescript",code:`function MyComponent() {
  useEffect(() => {
    // ✅ Puedes leer o escribir refs en efectos
    myRef.current = 123
  })
  
  function handleClick() {
    // ✅ Puedes leer o escribir refs en event handlers
    doSomething(myOtherRef.current)
  }
  
  return <button onClick={handleClick}>Click</button>
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎨 Manipulación del DOM con ref"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Es particularmente común utilizar una ref para"," ",e.jsx("strong",{children:"manipular el DOM"}),". React tiene soporte incorporado para esto."]})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",style:{width:"100%"},children:e.jsx("input",{ref:s,type:"text",placeholder:"Escribe algo aquí...",style:{width:"100%",padding:"0.75rem",borderRadius:"8px",border:"1px solid rgba(102, 126, 234, 0.3)",background:"rgba(26, 26, 46, 0.5)",color:"#e2e8f0",fontSize:"1rem",fontFamily:"inherit"}})}),e.jsx("button",{className:"btn-primary",onClick:g,children:"🎯 Focus the input"})]}),e.jsx("div",{className:"code-block",children:e.jsx(U,{language:"typescript",code:`import { useRef } from "react"

export default function Form() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Evitar la recreación del contenido de las refs"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Si inicializas una ref con un objeto costoso, se creará en cada renderizado:"})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:`code-block error ${t?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"❌ Se ejecuta en cada render"}),e.jsx(U,{language:"typescript",code:`function Video() {
  const playerRef = useRef(new VideoPlayer())
  // VideoPlayer se crea en CADA renderizado
}`})]}),e.jsxs("div",{className:`code-block success ${t?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"✅ Se ejecuta solo una vez"}),e.jsx(U,{language:"typescript",code:`function Video() {
  const playerRef = useRef(null)
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer()
  }
  // VideoPlayer se crea SOLO la primera vez
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Diferencia: useState vs useRef"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"methods-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Característica"}),e.jsx("th",{children:"useState"}),e.jsx("th",{children:"useRef"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Re-renderizado"})}),e.jsx("td",{children:"✅ Causa re-renderizado"}),e.jsx("td",{children:"❌ NO causa re-renderizado"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Mutabilidad"})}),e.jsx("td",{children:"❌ Inmutable (crear nuevo valor)"}),e.jsx("td",{children:"✅ Mutable (modificar .current)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Lectura/Escritura"})}),e.jsx("td",{children:"❌ No durante renderizado"}),e.jsx("td",{children:"❌ No durante renderizado"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Uso común"})}),e.jsx("td",{children:"UI y datos que afectan renderizado"}),e.jsx("td",{children:"Timers, DOM refs, valores auxiliares"})]})]})]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🐛 Solución de Problemas"}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Pasar ref a componentes personalizados"}),e.jsx("p",{children:"Si intentas pasar una ref a tu propio componente, obtendrás un error:"})]}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h4",{children:"🚫 Esto no funciona"}),e.jsx("div",{className:`code-block error ${t?"dark":"light"}`,children:e.jsx(U,{language:"typescript",code:`const inputRef = useRef(null)

return <MyInput ref={inputRef} />
// ❌ Error: ref no es un prop válido`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h4",{children:"✅ Solución: Pasar como prop normal"}),e.jsx("div",{className:`code-block success ${t?"dark":"light"}`,children:e.jsx(U,{language:"typescript",code:`// En el padre:
const inputRef = useRef(null)
return <MyInput inputRef={inputRef} />

// En MyInput:
export default function MyInput({ value, onChange, inputRef }) {
  return <input value={value} onChange={onChange} ref={inputRef} />
}`})})]}),e.jsxs("div",{className:"info-box",style:{marginTop:"1rem"},children:[e.jsx("strong",{children:"💡 Nota avanzada:"})," Para usar ",e.jsx("code",{children:"ref"})," como prop real, necesitas ",e.jsx("code",{children:"forwardRef"})," (tema avanzado)."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Cuándo Usar"}),e.jsx("p",{children:"Para valores que NO afectan la UI: timers, IDs, elementos DOM"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🚫"}),e.jsx("h3",{children:"No en Renderizado"}),e.jsx("p",{children:"No leas ni escribas ref.current durante el renderizado"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"Persistencia"}),e.jsx("p",{children:"Los valores se mantienen entre renderizados sin causar cambios"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"✏️"}),e.jsx("h3",{children:"Mutable"}),e.jsx("p",{children:"Puedes cambiar .current directamente sin setState"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎨"}),e.jsx("h3",{children:"DOM Manipulation"}),e.jsx("p",{children:"Ideal para focus(), scroll(), mediciones, animaciones"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Inicialización Lazy"}),e.jsx("p",{children:"Usa verificación null para objetos costosos"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})},q=({code:t,language:s="typescript"})=>{const{isDarkMode:n}=C();return e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})})},Ut=y.createContext("dark"),qt=y.createContext(null),Ht=()=>{const{isDarkMode:t}=C(),[s,n]=y.useState("dark"),[a,r]=y.useState(null);return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`useState-header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🌐 useContext Hook"}),e.jsx("p",{className:"subtitle",children:"Te permite leer y suscribirte a un contexto desde tu componente."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useContext?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useContext"})," te permite leer información de un contexto creado previamente con ",e.jsx("code",{children:"createContext"}),". Es ideal para compartir datos entre componentes sin pasar props manualmente."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," React rerenderiza automáticamente todos los hijos que usen un contexto particular cuando su valor cambia."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(q,{language:"typescript",code:`const value = useContext(SomeContext)

// SomeContext: el contexto que creaste previamente con createContext
// Devuelve: el valor del contexto para el componente que lo llama`})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Parámetros"}),e.jsx("ul",{className:"anatomy-list",children:e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"SomeContext"})," - El contexto que creaste previamente con ",e.jsx("code",{children:"createContext"})]})}),e.jsx("h3",{style:{marginTop:"1.5rem"},children:"Retorna"}),e.jsxs("p",{style:{marginTop:"0.5rem"},children:["El valor del contexto para el componente que lo llama, determinado por el ",e.jsx("code",{children:"value"})," del Provider más cercano en el árbol."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Cuidado"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"Punto importante sobre Providers"}),e.jsxs("p",{children:["La llamada de ",e.jsx("code",{children:"useContext()"})," en un componente no es afectada por los proveedores devueltos desde el mismo componente. El"," ",e.jsx("code",{children:"<Context.Provider>"})," correspondiente debe estar"," ",e.jsx("strong",{children:"por encima"})," del componente que hace la llamada."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📖 Ejemplo Básico"}),e.jsx("div",{className:"code-block",children:e.jsx(q,{language:"typescript",code:`import { createContext, useContext } from "react"

const ThemeContext = createContext(null)

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = "panel-" + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext)
  const className = "button-" + theme
  return <button className={className}>{children}</button>
}`})}),e.jsx(Ut.Provider,{value:s,children:e.jsxs("div",{className:"demo-card",children:[e.jsxs("div",{style:{padding:"1.5rem",borderRadius:"12px",background:s==="dark"?"rgba(30, 30, 40, 0.8)":"rgba(240, 240, 245, 0.8)",marginBottom:"1rem"},children:[e.jsxs("h3",{style:{margin:"0 0 1rem 0",color:s==="dark"?"#ffa07a":"#762d20"},children:["Theme: ",s]}),e.jsx("p",{style:{margin:0,color:s==="dark"?"#d1d5db":"#374151"},children:"Este panel usa el tema del contexto"})]}),e.jsx("button",{className:"btn-primary",onClick:()=>n(s==="dark"?"light":"dark"),children:"Cambiar tema"})]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Actualizar datos del contexto"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para actualizar el contexto, necesitas combinarlo con el estado. Pasa el estado y su función actualizadora a través del contexto."})}),e.jsx("div",{className:"code-block",children:e.jsx(q,{language:"typescript",code:`function MyPage() {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button
        onClick={() => {
          setTheme("light")
        }}
      >
        Cambiar a tema claro
      </Button>
    </ThemeContext.Provider>
  )
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Actualizar un objeto"}),e.jsx("div",{className:"code-block",children:e.jsx(q,{language:"typescript",code:`import { createContext, useContext, useState } from "react"

const CurrentUserContext = createContext(null)

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  )
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  if (currentUser !== null) {
    return <p>Iniciaste sesión como {currentUser.name}.</p>
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Advika" })
      }}
    >
      Iniciar sesión como Advika
    </Button>
  )
}`})}),e.jsx(qt.Provider,{value:{currentUser:a,setCurrentUser:r},children:e.jsx("div",{className:"demo-card",children:a!==null?e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{fontSize:"1.25rem",marginBottom:"1rem"},children:["✅ Iniciaste sesión como ",e.jsx("strong",{children:a.name})]}),e.jsx("button",{className:"btn-secondary",onClick:()=>r(null),children:"Cerrar sesión"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"No has iniciado sesión"}),e.jsx("button",{className:"btn-primary",onClick:()=>r({name:"Advika"}),children:"Iniciar sesión como Advika"})]})})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎛️ Múltiples contextos"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Puedes tener múltiples contextos en tu aplicación. Es común extraerlos en un único componente Provider."})}),e.jsx("div",{className:"code-block",children:e.jsx(q,{language:"typescript",code:`import { createContext, useContext, useReducer } from "react"

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

const initialTasks = [
  { id: 0, text: "El Camino del Filósofo", done: true },
  { id: 1, text: "Visitar el templo", done: false },
  { id: 2, text: "Beber té matcha", done: false },
]`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Best Practice:"})," En aplicaciones más grandes, es común combinar el contexto con un reducer para extraer la lógica relacionada con algún estado fuera de los componentes."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🌳 Sobreescribir contexto para una parte del árbol"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Puedes anidar providers del mismo contexto para sobreescribir su valor en una parte específica del árbol de componentes."})}),e.jsx("div",{className:"code-block",children:e.jsx(q,{language:"typescript",code:`import { createContext, useContext } from "react"

const ThemeContext = createContext(null)

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Bienvenido">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
      <ThemeContext.Provider value="light">
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  )
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📊 Encabezados anidados automáticamente"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:'Puedes "acumular" información cuando anidas proveedores de contexto. Esto es útil para cosas como niveles de encabezado automáticos.'})}),e.jsx("div",{className:"code-block",children:e.jsx(q,{language:"typescript",code:`<section className="section">
  <LevelContext.Provider value={level + 1}>
    {children}
  </LevelContext.Provider>
</section>

// En el componente Heading:
const level = useContext(LevelContext)
switch (level) {
  case 0:
    throw Error('¡El encabezado debe estar dentro de un Section!')
  case 1:
    return <h1>{children}</h1>
  case 2:
    return <h2>{children}</h2>
  case 3:
    return <h3>{children}</h3>
  // ...
}`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Patrón útil:"})," Cada vez que el provider se anida, el nivel aumenta +1, permitiendo control automático sobre elementos como el tamaño de texto."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Optimizar rerenderizados"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Cuando pasas objetos y funciones a través del contexto, puedes causar rerenderizados innecesarios. Usa ",e.jsx("code",{children:"useMemo"})," y"," ",e.jsx("code",{children:"useCallback"})," para optimizar."]})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Crea nuevo objeto cada render"}),e.jsx(q,{language:"typescript",code:`function MyApp() {
  const [user, setUser] = useState(null)
  
  // ❌ Nuevo objeto en cada render
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <Page />
    </UserContext.Provider>
  )
}`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Memoiza el valor del contexto"}),e.jsx(q,{language:"typescript",code:`function MyApp() {
  const [user, setUser] = useState(null)
  
  // ✅ Mismo objeto entre renders
  const value = useMemo(() => ({
    user,
    setUser
  }), [user])
  
  return (
    <UserContext.Provider value={value}>
      <Page />
    </UserContext.Provider>
  )
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Cuándo Usar"}),e.jsx("p",{children:"Para compartir datos entre muchos componentes sin pasar props"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🌳"}),e.jsx("h3",{children:"Provider Arriba"}),e.jsx("p",{children:"El Provider debe estar por encima del componente que lo consume"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"Auto Rerender"}),e.jsx("p",{children:"React rerenderiza automáticamente cuando el contexto cambia"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"📦"}),e.jsx("h3",{children:"Múltiples Contextos"}),e.jsx("p",{children:"Puedes usar varios contextos diferentes en una app"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Optimización"}),e.jsx("p",{children:"Usa useMemo/useCallback para valores complejos"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎛️"}),e.jsx("h3",{children:"Con Reducer"}),e.jsx("p",{children:"Combina con useReducer para lógica de estado compleja"})]})]})]})]})},A=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})}),Gt=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,id:"useCallback",children:[e.jsxs("header",{className:`useState-header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"⚡ useCallback Hook"}),e.jsx("p",{className:"subtitle",children:"permite almacenar la definición de una función entre renderizados subsecuentes. optimización de rendimiento."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(A,{language:"typescript",isDarkMode:t,code:"const cachedFn = useCallback(fn, dependencies)"})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{language:"typescript",isDarkMode:t,code:`import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 parametros"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"fn:"})," La función que deseas guardar en caché, si no cambia si las dependencias no han cambiado."]})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"dependencias:"})," La lista de todos los valores reactivos dentro de la función fn. Los valores reactivos incluyen props, estado y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente."]})}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Almacenar una función con useCallback solo es beneficioso en unos pocos casos:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Al enviarla como prop al componente envuelto en memo."}),e.jsx("li",{children:"La función que estás enviando se usa más tarde como una dependencia de algún Hook. Por ejemplo, cuando otra función envuelta en useCallback depende de ella, o cuando dependes de dicha función desde useEffect."})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," No existe ningún beneficio en envolver una función en useCallback en otros casos. Aunque tampoco afecta negativamente hacerlo."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Ejemplo 1"}),e.jsx("h3",{children:"Omitir rerenderizados con useCallback y memo"}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`import { useState } from "react"
import ProductPage from "./ProductPage.js"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`import { useCallback } from "react"
import ShippingForm from "./ShippingForm.js"

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      })
    },
    [productId, referrer]
  )

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url, data) {
  // Imagina que esto envía una petición...
  console.log("POST /" + url)
  console.log(data)
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`import { memo, useState } from "react"

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // No hace nada por 1 ms para emular un componente lento
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

export default ShippingForm`})}),e.jsx(Vt,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Ejemplo 2"}),e.jsx("h3",{children:"Siempre rerenderizar un componente"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"para que puedas ver lo que sucede cuando un componente de React que estás renderizando es realmente lento. Intenta incrementar el contador y cambiar el tema."})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`import { useState } from "react"
import ProductPage from "./ProductPage.js"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`import ShippingForm from "./ShippingForm.js"

export default function ProductPage({ productId, referrer, theme }) {
  function handleSubmit(orderDetails) {
    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    })
  }

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url, data) {
  // Imagina que esto envía una petición...
  console.log("POST /" + url)
  console.log(data)
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`import { memo, useState } from "react"

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // No hace nada por 1 ms para emular un componente lento
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

export default ShippingForm`})}),e.jsx(Yt,{}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," Generalmente, el código sin memoización funciona bien. Si tus interacciones son lo suficientemente rápidas, no necesitas de la memoización."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Actualizar estado desde un callback en caché"}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
  // ...`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Por lo general es mejor que tus funciones almacenadas tengan el menor número de dependencias posibles."})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []); // ✅ No se necesita la dependencia \`todos\`
  // ...`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Prevenir que un Efecto se dispare frecuentemente"}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
        return () => connection.disconnect();
  }, [createOptions]); // 🔴 Problema: Esta dependencia cambia en cada renderizado
  // ...`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para solventar esto"})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Solo cambia cuando createOptions cambia
  // ...`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Mejor práctica:"})," Esto asegura que la función createOptions sea la misma entre renderizados subsecuentes, siempre que roomId sea el mismo. Sin embargo, es aún mejor eliminar la necesidad de una dependencia de la función."]}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() { // ✅ No es necesario usar useCallback ni dependencias de función
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }

    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia
  // ...`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔧 Optimizar un Hook personalizado"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Si estás escribiendo un Hook personalizado, es recomendable envolver cualquier función que el Hook devuelva con useCallback Esto asegura que los consumidores de tu Hook puedan optimizar su propio código cuando sea necesario. :"})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`function useRouter() {
  const { dispatch } = useContext(RouterStateContext)

  const navigate = useCallback(
    (url) => {
      dispatch({ type: "navigate", url })
    },
    [dispatch]
  )

  const goBack = useCallback(() => {
    dispatch({ type: "back" })
  }, [dispatch])

  return {
    navigate,
    goBack,
  }
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔧 Solución de problemas"}),e.jsx("h3",{children:"No te olvides de las dependencias"}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:`function ProductPage({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"si el problema persiste revisa las dependencias manualmenta"})}),e.jsx("div",{className:"code-block",children:e.jsx(A,{isDarkMode:t,language:"typescript",code:"console.log([productId, referrer])"})})]})]})};function Vt(){const[t,s]=y.useState(!1);return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:n=>s(n.target.checked)}),"Modo Oscuro"]}),e.jsx("hr",{}),e.jsx(Wt,{referrer:"wizard_of_oz",productId:123,theme:t?"dark":"light"})]})}function Wt({productId:t,referrer:s,theme:n}){const a=y.useCallback(r=>{Ae("/product/"+t+"/buy",{referrer:s,orderDetails:r})},[t,s]);return e.jsx("div",{className:n,children:e.jsx(Zt,{onSubmit:a})})}const Zt=y.memo(function({onSubmit:s}){const[n,a]=y.useState(1);console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");const r=performance.now();for(;performance.now()-r<1;);function h(i){i.preventDefault();const g=new FormData(i.target),o={...Object.fromEntries(g),count:n};s(o)}return e.jsxs("form",{onSubmit:h,children:[e.jsx("p",{children:e.jsxs("b",{children:["Nota: ¡",e.jsx("code",{children:"ShippingForm"})," está artificialmente ralentizado!"]})}),e.jsxs("label",{children:["Número de items:",e.jsx("button",{type:"button",onClick:()=>a(n-1),children:"–"}),n,e.jsx("button",{type:"button",onClick:()=>a(n+1),children:"+"})]}),e.jsxs("label",{children:["Calle:",e.jsx("input",{name:"street"})]}),e.jsxs("label",{children:["Ciudad:",e.jsx("input",{name:"city"})]}),e.jsxs("label",{children:["Código postal:",e.jsx("input",{name:"zipCode"})]}),e.jsx("button",{type:"submit",children:"Enviar"})]})});function Yt(){const[t,s]=y.useState(!1);return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:n=>s(n.target.checked)}),"Modo Oscuro"]}),e.jsx("hr",{}),e.jsx(Qt,{referrer:"wizard_of_oz",productId:123,theme:t?"dark":"light"})]})}function Qt({productId:t,referrer:s,theme:n}){function a(r){Ae("/product/"+t+"/buy",{referrer:s,orderDetails:r})}return e.jsx("div",{className:n,children:e.jsx(Kt,{onSubmit:a})})}const Kt=y.memo(function({onSubmit:s}){const[n,a]=y.useState(1);console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");const r=performance.now();for(;performance.now()-r<1;);function h(i){i.preventDefault();const g=new FormData(i.target),o={...Object.fromEntries(g),count:n};s(o)}return e.jsxs("form",{onSubmit:h,children:[e.jsx("p",{children:e.jsxs("b",{children:["Nota: ¡",e.jsx("code",{children:"ShippingForm"})," está artificialmente ralentizado!"]})}),e.jsxs("label",{children:["Número de items:",e.jsx("button",{type:"button",onClick:()=>a(n-1),children:"–"}),n,e.jsx("button",{type:"button",onClick:()=>a(n+1),children:"+"})]}),e.jsxs("label",{children:["Calle:",e.jsx("input",{name:"street"})]}),e.jsxs("label",{children:["Ciudad:",e.jsx("input",{name:"city"})]}),e.jsxs("label",{children:["Código postal:",e.jsx("input",{name:"zipCode"})]}),e.jsx("button",{type:"submit",children:"Enviar"})]})});function Ae(t,s){console.log("POST /"+t),console.log(s)}const V=({code:t,language:s="typescript"})=>{const{isDarkMode:n}=C();return e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})})},Xt=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,id:"useEffect",children:[e.jsxs("header",{className:`useState-header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🔄 useEffect Hook"}),e.jsx("p",{className:"subtitle",children:"permite sincronizar un componente con un sistema externo."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:`useEffect(() => {
  const connection = createConnection(serverUrl, roomId)
  connection.connect()
  return () => {
    connection.disconnect()
  }
}, [serverUrl, roomId])
// ...`})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"configuración:"})," La función con la lógica de tu Efecto."]})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"dependencias opcionales:"})," La lista de todos los valores reactivos referenciados dentro del código de configuración. Los valores reactivos incluyen props, estados, y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente."]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 USO"}),e.jsx("h3",{children:"Conexión a un sistema externo"}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Estos sistemas no están controlados por React"}),e.jsxs("ul",{children:[e.jsx("li",{children:"código de configuración"}),e.jsx("li",{children:"código de limpieza"}),e.jsx("li",{children:"dependencias"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Este te permite mantener tu componente sincronizado"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Un temporizador gestionado con setInterval() y clearInterval()."}),e.jsx("li",{children:"Una suscripción de eventos usando window.addEventListener() y window.removeEventListener()."}),e.jsx("li",{children:"Una biblioteca de animación de terceros con una API como animation.start() y animation.reset()."}),e.jsx("li",{children:"Controlar un cuadro de diálogo modal"}),e.jsx("li",{children:"Monitorear visibilidad de un elemento por ejemplo para gestionar un IntersectionObserver"}),e.jsx("li",{children:"Controlar un widget que no sea de React"})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," Si no estas conectado a ningún sistema externo, probablemente no necesites un efecto."]}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Los valores reactivos incluyen props y todas las variables y funciones declaradas directamente dentro de su componente."})}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:`function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234")

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, []) // 🔴 React Hook useEffect tiene dependencias faltantes: 'roomId' y 'serverUrl'
  // ...
}`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:'Para eliminar una dependencia, tienes que "demostrar" al linter que no necesita ser una dependencia.'})}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:`const serverUrl = "https://localhost:1234" // Ya no es un valor reactivo

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, [roomId]) // ✅ Todas las dependencias declaradas
  // ...
}`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," Un efecto con dependencias vacías no se vuelve a ejecutar cuando cambian las props o el estado del componente."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Actualización del estado basado en el estado anterior de un efecto"}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:`function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1) // Quieres incrementar el contador cada segundo...
    }, 1000)
    return () => clearInterval(intervalId)
  }, [count]) // 🚩 ... pero al especificar \`count\` como dependencia siempre reinician el intervalo.
  // ...
}`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Como count es un valor reactivo debe especificarce en deps mejor pasar el actulizador de estado asi no es necesario count in deps"})}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:"setCount((c) => c + 1) // ✅ Pasar un actualizador de estado"})}),e.jsx(Jt,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🗑️ Eliminación de dependencias de objetos innecesarios"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Evita utilizar como dependencia un objeto creado durante el renderizado. En su lugar, crea el objeto dentro del Efecto"})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Nota:"})," Este esta aun en experimental : Eliminación de dependencias de funciones innecesarias, hará que tu Efecto se vuelva a ejecutar después de cada rerenderizado"]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📖 Lectura de las últimas props y el estado desde un Efecto"}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:`function Page({ url, shoppingCart }) {
  useEffect(() => {
    logVisit(url, shoppingCart.length)
  }, [url, shoppingCart]) // ✅ Todas las dependencias declaradas
  // ...
}`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:'Sin embargo, a veces querrá leer las últimas props y estados de un efecto sin "reaccionar" a ellos.'})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"¿Qué pasa si quieres registrar una nueva visita a la página después de cada cambio de url, pero no si sólo cambia el shoppingCart?"})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para hacer esto usa useEffectEvent, y mueve el código que lea al shoppingCart dentro de tal Hook:"})}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:`function Page({ url, shoppingCart }) {
  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, shoppingCart.length)
  })

  useEffect(() => {
    onVisit(url)
  }, [url]) // ✅ Todas las dependencias declaradas
  // ...
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💻 Mostrar contenidos diferentes en el servidor y en el cliente"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"En raras ocasiones, es posible que necesites mostrar un contenido diferente en el cliente. Por ejemplo, si su aplicación lee algunos datos del localStorage, no puede hacerlo en el servidor. Así es como típicamente se implementaría esto:"})}),e.jsx("div",{className:"code-block",children:e.jsx(V,{language:"typescript",code:`function MyComponent() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (didMount) {
    // ... devolver JSX sólo para clientes ...
  }  else {
    // ... devolver el JSX inicial ...
  }
}`})}),e.jsx(es,{})]})]})};function Jt(){const[t,s]=y.useState(0),[n,a]=y.useState(!1);return y.useEffect(()=>{if(!n)return;const r=setInterval(()=>{s(h=>h+1)},1e3);return()=>clearInterval(r)},[n]),e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva - Contador"}),e.jsxs("div",{children:[e.jsxs("h3",{children:["Count: ",t]}),e.jsx("button",{onClick:()=>a(!n),children:n?"Pausar":"Iniciar"}),e.jsx("button",{onClick:()=>s(0),children:"Reset"})]})]})}function es(){const[t,s]=y.useState(!1);return y.useEffect(()=>{s(!0)},[]),e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva - SSR"}),e.jsxs("div",{children:[t?e.jsx("p",{children:"✅ Renderizado en el cliente (puede acceder a localStorage)"}):e.jsx("p",{children:"⏳ Renderizado inicial (servidor o primera carga)"}),e.jsx("p",{children:e.jsxs("small",{children:["Estado: ",t?"Montado":"No montado"]})})]})]})}const ts=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🎯 useEffectEvent Hook"}),e.jsx("p",{className:"subtitle",children:"Extrae lógica no reactiva de tus efectos en una función reutilizable."})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Experimental:"})," Este hook está en desarrollo y no está disponible en versiones estables de React."]}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"useEffectEvent"})," te permite extraer lógica no reactiva de tus efectos en una función reutilizable que puede acceder a las últimas props y state sin causar re-renderizados."]})})]})]})},ye=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})}),ss=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,id:"useId",children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🆔 useId Hook"}),e.jsx("p",{className:"subtitle",children:"generar IDs únicos que se pueden pasar a los atributos de accesibilidad."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(ye,{language:"typescript",code:"const id = useId()"})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Advertencia:"})," useId no debe usarse para generar keys en una lista."]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Advertencia:"})," useId currently cannot be used in async Server Components."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Uso"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Atributos de accesibilidad HTML como aria-describedby te permiten especificar que dos etiquetas están relacionadas entre sí. Por ejemplo, puedes especificar que un determinado elemento"})}),e.jsx("h3",{children:"Ejemplo"}),e.jsx("div",{className:"code-block",children:e.jsx(ye,{language:"typescript",code:`import { useId } from "react"

function PasswordField() {
  const passwordHintId = useId()
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  )
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  )
}`})}),e.jsx(ns,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Atención"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"useId requiere un árbol de componentes idéntico en el servidor y el cliente cuando utilizas renderizado en el servidor. Si los árboles que se renderizan en el servidor y el cliente no coinciden exactamente, los IDs generados no coincidirán."})})]})]})};function ve(){const t=y.useId();return e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("label",{children:["Password:",e.jsx("input",{type:"password","aria-describedby":t,style:{marginLeft:"0.5rem",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"}})]}),e.jsx("p",{id:t,style:{fontSize:"0.875rem",color:"#666"},children:"The password should contain at least 18 characters"})]})}function ns(){return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsx("h2",{children:"Choose password"}),e.jsx(ve,{}),e.jsx("h2",{children:"Confirm password"}),e.jsx(ve,{})]})}const J=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})}),Re=y.forwardRef((t,s)=>{const n=y.useRef(null);return y.useImperativeHandle(s,()=>({focus(){var a;(a=n.current)==null||a.focus()},scrollIntoView(){var a;(a=n.current)==null||a.scrollIntoView()}}),[]),e.jsx("input",{...t,ref:n})});Re.displayName="MyInput";const as=()=>{const{isDarkMode:t}=C(),s=y.useRef(null);function n(){var r;(r=s.current)==null||r.focus()}function a(){var r;(r=s.current)==null||r.scrollIntoView()}return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🎯 useImperativeHandle Hook"}),e.jsx("p",{className:"subtitle",children:"Te permite personalizar el identificador expuesto como una ref."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useImperativeHandle?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useImperativeHandle"})," te permite"," ",e.jsx("strong",{children:"personalizar el identificador ref"})," que se expone a los componentes padres. En lugar de exponer todo el nodo DOM, puedes exponer solo métodos específicos."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Llama a useImperativeHandle en el nivel superior de tu componente para personalizar el identificador ref que se expone."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(J,{isDarkMode:t,language:"typescript",code:`useImperativeHandle(ref, createHandle, dependencies?)

// Parámetros:
// - ref: La ref que recibiste como prop
// - createHandle: identificador ref que quieres exponer
// - dependencies: valores reactivos`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📋 Exponer un identificador ref personalizado"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para exponer un nodo DOM al elemento padre, pasa la prop ref al nodo y personaliza qué métodos exponer:"})}),e.jsx("div",{className:"code-block",children:e.jsx(J,{isDarkMode:t,language:"typescript",code:`import { useRef, useImperativeHandle } from "react"

function MyInput({ ref, ...props }) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input {...props} ref={inputRef} />
}

export default MyInput`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎮 Demo Interactiva"}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",style:{width:"100%"},children:e.jsx(Re,{ref:s,type:"text",placeholder:"Input con métodos personalizados...",style:{width:"100%",padding:"0.75rem",borderRadius:"8px",border:"1px solid rgba(102, 126, 234, 0.3)",background:"rgba(26, 26, 46, 0.5)",color:"#e2e8f0",fontSize:"1rem",fontFamily:"inherit"}})}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn-primary",onClick:n,children:"🎯 Focus"}),e.jsx("button",{className:"btn-secondary",onClick:a,children:"📜 Scroll Into View"})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📝 Ejemplo Completo"}),e.jsx("div",{className:"code-block",children:e.jsx(J,{isDarkMode:t,language:"typescript",code:`import { useRef, useImperativeHandle } from "react"

function MyInput({ ref }) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input ref={inputRef} />
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ No sobreutilizar las refs"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 Cuándo NO usar refs"}),e.jsxs("p",{children:["Solo debes usar las refs para ",e.jsx("strong",{children:"comportamientos imperativos"})," ","que no puedes expresar como props:"]}),e.jsxs("ul",{style:{marginTop:"1rem",paddingLeft:"1.5rem"},children:[e.jsx("li",{children:"✅ Desplazarse a un nodo"}),e.jsx("li",{children:"✅ Enfocar un nodo"}),e.jsx("li",{children:"✅ Activar una animación"}),e.jsx("li",{children:"✅ Seleccionar texto"})]})]}),e.jsxs("div",{className:"card",style:{marginTop:"1.5rem"},children:[e.jsx("h3",{children:"💡 Mejor Práctica: Usa Props cuando sea posible"}),e.jsx("p",{children:"Si puedes expresar algo como una prop, no deberías usar una ref."})]}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Mal: Usar ref para estado"}),e.jsx(J,{isDarkMode:t,language:"typescript",code:`// No hagas esto:
<Modal ref={modalRef} />

// Y luego:
modalRef.current.open()
modalRef.current.close()`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Bien: Usar props"}),e.jsx(J,{isDarkMode:t,language:"typescript",code:`// Mejor:
<Modal isOpen={isOpen} />

// Y controlar con estado:
const [isOpen, setIsOpen] = useState(false)`})]})]}),e.jsxs("div",{className:"info-box",style:{marginTop:"1rem"},children:[e.jsx("strong",{children:"💡 Consejo:"})," En vez de exponer un identificador imperativo como ",e.jsx("code",{children:"{ open, close }"})," del componente Modal, es mejor tomar ",e.jsx("code",{children:"isOpen"})," como una prop, algo como"," ",e.jsx("code",{children:"<Modal isOpen={isOpen} />"}),". Efectos puede ayudarte a exponer comportamientos imperativos via props."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Comportamientos Imperativos"}),e.jsx("p",{children:"Usa solo para acciones que no se pueden expresar como props"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔒"}),e.jsx("h3",{children:"Encapsulación"}),e.jsx("p",{children:"Expón solo los métodos necesarios, no todo el DOM"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"📦"}),e.jsx("h3",{children:"Dependencies"}),e.jsx("p",{children:"Pasa array de dependencias para optimizar"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🚫"}),e.jsx("h3",{children:"Evita Sobreuso"}),e.jsx("p",{children:"Prefiere props sobre refs siempre que sea posible"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"forwardRef"}),e.jsx("p",{children:"Necesario para pasar refs a componentes personalizados"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Casos de Uso"}),e.jsx("p",{children:"Focus, scroll, animaciones, selección de texto"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})},ae=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})}),rs=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,id:"useInsertionEffect",children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"💉 useInsertionEffect Hook"}),e.jsx("p",{className:"subtitle",children:"⚠️ Hook especializado para bibliotecas CSS-en-JS"}),e.jsx("p",{className:"subtitle",children:"permite insertar elementos en el DOM antes de que se dispare cualquier Efecto de diseño (layout)."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(ae,{language:"typescript",code:"useInsertionEffect(setup, dependencies?)"})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Parámetros"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"setup:"})," función con la lógica de efectos. Puede devolver opcionalmente una función de limpieza."]})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"dependencies:"})," opcional. Lista de valores reactivos referenciados dentro de setup."]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📤 Devuelve"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"undefined"})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Advertencias"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Solo se ejecuta en el cliente, no en el servidor"}),e.jsx("li",{children:"No puedes actualizar estado desde dentro"}),e.jsx("li",{children:"Las referencias aún no se han adjuntado cuando se ejecuta"}),e.jsx("li",{children:"Puede ejecutarse antes o después de que el DOM se actualice"}),e.jsx("li",{children:"Dispara limpieza y setup un componente a la vez (intercalado)"})]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Uso"}),e.jsx("h3",{children:"Inyección de estilos dinámicos desde bibliotecas CSS-en-JS"}),e.jsx("div",{className:"code-block",children:e.jsx(ae,{language:"typescript",code:`import { useInsertionEffect } from 'react'

// Dentro de tu biblioteca CSS-en-JS
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inyecta las etiquetas <style> aquí ...
  })
  return rule
}`})}),e.jsx("h3",{children:"Ejemplo completo:"}),e.jsx("div",{className:"code-block",children:e.jsx(ae,{language:"typescript",code:`// En tu biblioteca CSS-en-JS
let isInserted = new Set()

function useCSS(rule) {
  useInsertionEffect(() => {
    if (!isInserted.has(rule)) {
      isInserted.add(rule)
      document.head.appendChild(getStyleForRule(rule))
    }
  })
  return rule
}

function Button() {
  const className = useCSS('...')
  return <div className={className} />
}`})}),e.jsx("h3",{children:"Con SSR (Server-Side Rendering):"}),e.jsx("div",{className:"code-block",children:e.jsx(ae,{language:"typescript",code:`let collectedRulesSet = new Set()

function useCSS(rule) {
  if (typeof window === 'undefined') {
    collectedRulesSet.add(rule)
  }
  useInsertionEffect(() => {
    // inyectar en cliente
  })
  return rule
}`})}),e.jsx(os,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"✅ Buenas prácticas"}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:e.jsx("strong",{children:"✅ Usar solo en bibliotecas CSS-en-JS"})}),e.jsx("p",{children:e.jsx("strong",{children:"✅ Inyectar estilos antes de efectos de layout"})}),e.jsx("p",{children:e.jsx("strong",{children:"✅ Combinar con estilos estáticos y en línea cuando sea posible"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:e.jsx("strong",{children:"❌ No usar en componentes normales (usar useEffect o useLayoutEffect)"})}),e.jsx("p",{children:e.jsx("strong",{children:"❌ No inyectar estilos durante el renderizado directo"})}),e.jsx("p",{children:e.jsx("strong",{children:"❌ No actualizar estado dentro de useInsertionEffect"})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🤔 ¿Por qué es mejor que useEffect o useLayoutEffect?"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Asegura que las etiquetas ",e.jsx("code",{children:"<style>"})," estén añadidas antes de que otros efectos se ejecuten, evitando cálculos de layout incorrectos por estilos desactualizados."]})})]})]})};function os(){const[t,s]=y.useState("blue");return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva - CSS-in-JS"}),e.jsxs("div",{children:[e.jsx("button",{className:`demo-button-${t}`,onClick:()=>s("blue"),children:"Azul"}),e.jsx("button",{className:`demo-button-${t}`,onClick:()=>s("red"),children:"Rojo"}),e.jsx("button",{className:`demo-button-${t}`,onClick:()=>s("green"),children:"Verde"}),e.jsx("p",{children:e.jsx("small",{children:"Los estilos se inyectan dinámicamente usando useInsertionEffect"})})]})]})}const K=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})}),is=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,id:"useLayoutEffect",children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"📐 useLayoutEffect Hook"}),e.jsx("p",{className:"subtitle",children:"Este se acciona antes que el navegador vuelva a pintar la pantalla para ejecutar las medidas del layout."})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Atención:"})," useLayoutEffect puede afectar el desempeño. Se prefiere el uso de useEffect cuando sea posible."]})}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(K,{isDarkMode:t,language:"typescript",code:"useLayoutEffect(setup, dependencies?)"})}),e.jsx("div",{className:"code-block",children:e.jsx(K,{isDarkMode:t,language:"typescript",code:`import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);`})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"opcional dependencies:"})," La lista de todos los valores reactivos referenciados dentro del código de setup. Los valores reactivos incluyen props, estados, y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente."]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Caso de uso"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"A veces, eso no es suficiente. Imagina un tooltip que aparece junto a algún elemento cuando pasas con el ratón por encima de él. Si hay suficiente espacio, el tooltip debe aparecer arriba del elemento, pero si no tiene suficiente espacio para encajar, debe aparecer debajo. Esto significa que para renderizar el tooltip en la posición final correcta, necesitas saber su altura (quiere decir, si cabe en la parte superior)."})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Ejemplo claro"}),e.jsx("div",{className:"code-block",children:e.jsx(K,{isDarkMode:t,language:"typescript",code:`import ButtonWithTooltip from "./ButtonWithTooltip.js"

export default function App() {
  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            Este tooltip no encaja arriba del botón.
            <br />
            Es por esto que se muestra debajo del botón!
          </div>
        }
      >
        Pasa el ratón por encima (tooltip arriba)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>Este tooltip encaja arriba del botón</div>}
      >
        Pasa el ratón por encima (tooltip debajo)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>Este tooltip encaja arriba del botón</div>}
      >
        Pasa el ratón por encima (tooltip debajo)
      </ButtonWithTooltip>
    </div>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(K,{isDarkMode:t,language:"typescript",code:`import { useState, useRef } from "react"
import Tooltip from "./Tooltip.js"

export default function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState(null)
  const buttonRef = useRef(null)
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(K,{isDarkMode:t,language:"typescript",code:`import { useRef, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"
import TooltipContainer from "./TooltipContainer.js"

export default function Tooltip({ children, targetRect }) {
  const ref = useRef(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
    console.log("Altura del tooltip medida: " + height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight
    if (tooltipY < 0) {
      // No encaja arriba, entonces colócalo debajo
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(K,{isDarkMode:t,language:"typescript",code:`export default function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: \`translate3d(\${x}px, \${y}px, 0)\`,
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}`})}),e.jsx(ds,{})]})]})};function pe({tooltipContent:t,children:s}){const[n,a]=y.useState(null),r=y.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("button",{ref:r,className:"demo-button",onPointerEnter:()=>{if(r.current){const h=r.current.getBoundingClientRect();a({left:h.left,top:h.top,right:h.right,bottom:h.bottom})}},onPointerLeave:()=>{a(null)},children:s}),n!==null&&e.jsx(cs,{targetRect:n,children:t})]})}function cs({children:t,targetRect:s}){const n=y.useRef(null),[a,r]=y.useState(0);y.useLayoutEffect(()=>{if(n.current){const{height:g}=n.current.getBoundingClientRect();r(g),console.log("Altura del tooltip medida: "+g)}},[]);let h=0,i=0;return s!==null&&(h=s.left,i=s.top-a,i<0&&(i=s.bottom)),De.createPortal(e.jsx(ls,{x:h,y:i,contentRef:n,children:t}),document.body)}function ls({children:t,x:s,y:n,contentRef:a}){return e.jsx("div",{style:{position:"absolute",pointerEvents:"none",left:0,top:0,transform:`translate3d(${s}px, ${n}px, 0)`},children:e.jsx("div",{ref:a,className:"tooltip",children:t})})}function ds(){return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsxs("div",{children:[e.jsx(pe,{tooltipContent:e.jsxs("div",{children:["Este tooltip no encaja arriba del botón.",e.jsx("br",{}),"Es por esto que se muestra debajo del botón!"]}),children:"Pasa el ratón por encima (tooltip arriba)"}),e.jsx("div",{style:{height:50}}),e.jsx(pe,{tooltipContent:e.jsx("div",{children:"Este tooltip encaja arriba del botón"}),children:"Pasa el ratón por encima (tooltip debajo)"}),e.jsx("div",{style:{height:50}}),e.jsx(pe,{tooltipContent:e.jsx("div",{children:"Este tooltip encaja arriba del botón"}),children:"Pasa el ratón por encima (tooltip debajo)"})]})]})}const re=({code:t,language:s="typescript"})=>{const{isDarkMode:n}=C();return e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})})},us=(t,s)=>{console.time("filter array");const n=t.filter(a=>s==="all"?!0:a.includes(s));return console.timeEnd("filter array"),n},ps=()=>{const{isDarkMode:t}=C(),[s]=y.useState(["Learn React","Build app","Deploy","Celebrate"]),[n,a]=y.useState("all"),[r,h]=y.useState(0),i=y.useMemo(()=>us(s,n),[s,n]);return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`useState-header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"💾 useMemo Hook"}),e.jsx("p",{className:"subtitle",children:"Guardar en caché el resultado de un cálculo entre renderizados."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useMemo?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useMemo"})," te permite memoizar (guardar en caché) el resultado de un cálculo costoso entre renderizados, evitando recalcularlo innecesariamente."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Úsalo solo para cálculos costosos. La mayoría de cálculos son muy rápidos y no requieren memoización."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(re,{language:"typescript",code:`const cachedValue = useMemo(calculateValue, dependencies)

import { useMemo } from "react"

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
  // ...
}`})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Parámetros"}),e.jsxs("ul",{className:"anatomy-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"calculateValue"})," - La función que calcula el valor que deseas memoizar. Debe ser pura y no recibir argumentos."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"dependencies"})," - La lista de todos los valores reactivos a los que se hace referencia dentro del código calculateValue. Los valores reactivos incluyen props, estado y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente."]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🚀 Evitar recálculos costosos"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Por lo general, esto no es un problema porque la mayoría de los cálculos son muy rápidos. Sin embargo, si estás filtrando o transformando un array grande, o estás realizando algún cálculo costoso, es posible que desees omitir hacerlo nuevamente si los datos no han cambiado."})}),e.jsxs("div",{className:"demo-card",children:[e.jsxs("div",{className:"demo-display",children:[e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"Tab activo:"}),e.jsx("span",{className:"value",children:n})]}),e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"Contador:"}),e.jsx("span",{className:"value",children:r})]})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1rem"},children:[e.jsx("button",{className:"btn-primary",onClick:()=>a("all"),children:"All"}),e.jsx("button",{className:"btn-secondary",onClick:()=>a("React"),children:"React"}),e.jsxs("button",{className:"btn-secondary",onClick:()=>h(r+1),children:["Increment (",r,")"]})]}),e.jsxs("div",{style:{padding:"1rem",borderRadius:"8px",background:"rgba(102, 126, 234, 0.1)"},children:[e.jsx("strong",{children:"Filtered Todos:"}),e.jsx("ul",{children:i.map((g,o)=>e.jsx("li",{children:g},o))}),e.jsx("p",{style:{fontSize:"0.9rem",marginTop:"0.5rem"},children:'Abre la consola y ve que solo se recalcula cuando cambia "tab"'})]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," Al incrementar el contador, el cálculo NO se ejecuta de nuevo porque ",e.jsx("code",{children:"todos"})," y ",e.jsx("code",{children:"tab"})," no cambiaron."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⏱️ ¿Cómo saber si un cálculo es costoso?"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Puedes medir el tiempo dedicado a una pieza de código:"})}),e.jsx("div",{className:"code-block",children:e.jsx(re,{language:"typescript",code:`console.time("filter array")
const visibleTodos = filterTodos(todos, tab)
console.timeEnd("filter array")`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Regla general:"})," Si el cálculo toma más de 1ms, podría tener sentido memoizarlo."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Evitando que un efecto se ejecute con frecuencia"}),e.jsx("div",{className:"code-block",children:e.jsx(re,{language:"typescript",code:`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = useMemo(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // ✅ Solo cambia cuando options cambia
  // ...
}`})}),e.jsxs("div",{className:"success-card",children:[e.jsx("h3",{children:"✅ Alternativa mejor: Pasar objeto directamente"}),e.jsx("div",{className:"code-block",children:e.jsx(re,{language:"typescript",code:`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = { // ✅ ¡No necesitas useMemo o dependencias de objetos!
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    }

    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia
  // ...
}`})})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Best Practice:"})," Cuando sea posible, es mejor mover objetos y funciones dentro del efecto para evitar tener que incluirlos como dependencias."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Diferencia: useMemo vs useCallback"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"methods-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Característica"}),e.jsx("th",{children:"useMemo"}),e.jsx("th",{children:"useCallback"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"¿Qué cachea?"})}),e.jsx("td",{children:"El resultado de una función"}),e.jsx("td",{children:"La función misma"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Sintaxis"})}),e.jsx("td",{children:e.jsx("code",{children:"useMemo(() => fn(), deps)"})}),e.jsx("td",{children:e.jsx("code",{children:"useCallback(fn, deps)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Cuándo usar"})}),e.jsx("td",{children:"Cálculos costosos"}),e.jsx("td",{children:"Pasar funciones a componentes memoizados"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Equivalencia"})}),e.jsx("td",{children:e.jsx("code",{children:"useMemo(() => fn, deps)"})}),e.jsx("td",{children:e.jsx("code",{children:"useCallback(fn, deps)"})})]})]})]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"⏱️"}),e.jsx("h3",{children:"Mide primero"}),e.jsx("p",{children:"No uses useMemo prematuramente. Mide el rendimiento antes de optimizar"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Cálculos costosos"}),e.jsx("p",{children:"Úsalo solo para cálculos que toman más de 1ms"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"📦"}),e.jsx("h3",{children:"Objetos y arrays"}),e.jsx("p",{children:"Ideal para evitar crear nuevos objetos en cada render"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"Con useEffect"}),e.jsx("p",{children:"Útil para memoizar dependencias de efectos"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🚫"}),e.jsx("h3",{children:"No abuses"}),e.jsx("p",{children:"La mayoría de cálculos son rápidos y no necesitan memoización"})]}),e.jsxs("div",{className:`tip-card ${t?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎨"}),e.jsx("h3",{children:"Arrays grandes"}),e.jsx("p",{children:"Perfecto para filtrar o transformar grandes cantidades de datos"})]})]})]})]})},D=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})}),hs=[{id:0,text:"Visitar Kafka Museum",done:!0},{id:1,text:"Ver show de marionetas",done:!1},{id:2,text:"Foto del muro de Lennon",done:!1}];let ms=3;function gs(t,s){switch(s.type){case"added":return[...t,{id:s.id,text:s.text,done:!1}];case"changed":return t.map(n=>n.id===s.task.id?s.task:n);case"deleted":return t.filter(n=>n.id!==s.id);default:throw Error("Unknown action: "+s.type)}}const xs=()=>{const{isDarkMode:t}=C(),[s,n]=y.useReducer(gs,hs),[a,r]=y.useState([]);function h(){const o={type:"added",id:ms++,text:"Nueva tarea de ejemplo"};r([]),r([`✅ Despachando acción: ${JSON.stringify(o)}`]),n(o),setTimeout(()=>{r(u=>[...u,`📦 Estado actualizado con ${s.length+1} tareas`])},100)}function i(o){n({type:"changed",task:{...o,done:!o.done}})}function g(o){n({type:"deleted",id:o})}return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🔄 useReducer Hook"}),e.jsx("p",{className:"subtitle",children:"Para componentes con muchas actualizaciones de estado, consolida toda la lógica en una única función reducer."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useReducer?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useReducer"})," te permite consolidar toda la"," ",e.jsx("strong",{children:"lógica de actualización de estado"})," fuera del componente en una única función llamada ",e.jsx("strong",{children:"reducer"}),"."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Los componentes con muchas actualizaciones de estado distribuidas en varios controladores de eventos pueden beneficiarse de useReducer."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`const [state, dispatch] = useReducer(reducer, initialState)

// Parámetros:
// - reducer: función que contiene la lógica de actualización
// - initialState: estado inicial

// Devuelve:
// - state: el estado actual
// - dispatch: función para despachar acciones`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔀 De useState a useReducer"}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Antes: múltiples useState"}),e.jsx(D,{isDarkMode:t,language:"typescript",code:`const [tasks, setTasks] = useState(initialTasks)

function handleAddTask(text) {
  setTasks([...tasks, {
    id: nextId++,
    text: text,
    done: false
  }])
}

function handleChangeTask(task) {
  setTasks(tasks.map(t => 
    t.id === task.id ? task : t
  ))
}

function handleDeleteTask(taskId) {
  setTasks(tasks.filter(t => t.id !== taskId))
}`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Después: un useReducer"}),e.jsx(D,{isDarkMode:t,language:"typescript",code:`const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  })
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  })
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  })
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚙️ Función Reducer"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["El reducer recibe el ",e.jsx("strong",{children:"estado actual"})," y una"," ",e.jsx("strong",{children:"acción"}),", y devuelve el ",e.jsx("strong",{children:"nuevo estado"}),":"]})}),e.jsx("div",{className:"code-block",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎮 Demo Interactiva: Itinerario en Praga"}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{style:{width:"100%"},children:[e.jsxs("h3",{style:{color:"#667eea",marginBottom:"1rem"},children:["📋 Tareas (",s.length,")"]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:s.map(o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",background:"rgba(102, 126, 234, 0.1)",borderRadius:"8px",border:"1px solid rgba(102, 126, 234, 0.3)"},children:[e.jsx("input",{type:"checkbox",checked:o.done,onChange:()=>i(o),style:{cursor:"pointer",width:"18px",height:"18px"}}),e.jsx("span",{style:{flex:1,textDecoration:o.done?"line-through":"none",opacity:o.done?.6:1,color:"#e2e8f0"},children:o.text}),e.jsx("button",{onClick:()=>g(o.id),className:"btn-secondary",style:{padding:"0.5rem 1rem",fontSize:"0.875rem"},children:"🗑️"})]},o.id))})]})}),e.jsx("button",{className:"btn-primary",onClick:h,children:"➕ Agregar Tarea"}),a.length>0&&e.jsxs("div",{className:"console-output",children:[e.jsx("div",{className:"console-header",children:"📺 Console Output:"}),a.map((o,u)=>e.jsxs("div",{className:"log-line",children:["→ ",o]},u))]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Estado es de Solo Lectura"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 No mutes el estado directamente"}),e.jsx("div",{className:"code-block error",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 MAL: mutando el objeto directamente
      state.age = state.age + 1
      return state
    }
  }
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h3",{children:"✅ Siempre devuelve nuevos objetos"}),e.jsx("div",{className:"code-block success",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ BIEN: devolviendo nuevo objeto
      return {
        ...state,
        age: state.age + 1
      }
    }
  }
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Evitar Recrear el Estado Inicial"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"React guarda el estado inicial una vez y lo ignora en renderizados siguientes:"})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Se ejecuta en cada render (ineficiente)"}),e.jsx(D,{isDarkMode:t,language:"typescript",code:`function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer, 
    createInitialState(username)
  )
  // createInitialState se llama en cada render
}`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Se ejecuta solo una vez"}),e.jsx(D,{isDarkMode:t,language:"typescript",code:`function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer,
    username,
    createInitialState
  )
  // Pasa la función, no el resultado de llamarla
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🐛 Solución de Problemas"}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"1️⃣ El registro me da el valor de estado antiguo"}),e.jsx("p",{children:"El estado no se actualiza inmediatamente después de dispatch. Si necesitas el siguiente estado, calcúlalo manualmente:"})]}),e.jsx("div",{className:"code-block",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function handleClick() {
  console.log(state.age)  // 42

  dispatch({ type: 'incremented_age' })
  console.log(state.age)  // Todavía 42!

  setTimeout(() => {
    console.log(state.age) // También 42!
  }, 5000)
}

// ✅ Solución: calcular manualmente
const action = { type: 'incremented_age' }
dispatch(action)

const nextState = reducer(state, action)
console.log(state)     // { age: 42 }
console.log(nextState) // { age: 43 }`})})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"2️⃣ Despaché una acción pero la pantalla no se actualiza"}),e.jsxs("p",{children:["React ignora tu actualización si el siguiente estado es igual al anterior (comparación ",e.jsx("code",{children:"Object.is"}),"). Esto ocurre cuando mutas directamente:"]})]}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h4",{children:"🚫 Objeto mutado"}),e.jsx("div",{className:"code-block error",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 MAL: mutando objeto existente
      state.age++
      return state
    }
    case 'changed_name': {
      // 🚩 MAL: mutando objeto existente
      state.name = action.nextName
      return state
    }
  }
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h4",{children:"✅ Nuevo objeto creado"}),e.jsx("div",{className:"code-block success",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ BIEN: creando nuevo objeto
      return {
        ...state,
        age: state.age + 1
      }
    }
    case 'changed_name': {
      // ✅ BIEN: creando nuevo objeto
      return {
        ...state,
        name: action.nextName
      }
    }
  }
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"3️⃣ Array mutado"}),e.jsx("p",{children:"Los arrays también deben ser reemplazados, no mutados:"})]}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h4",{children:"🚫 Array mutado con push"}),e.jsx("div",{className:"code-block error",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'added_todo': {
      // 🚩 MAL: mutando el array
      state.todos.push({ 
        id: nextId++, 
        text: action.text 
      })
      return state
    }
  }
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h4",{children:"✅ Nuevo array creado"}),e.jsx("div",{className:"code-block success",children:e.jsx(D,{isDarkMode:t,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'added_todo': {
      // ✅ BIEN: reemplazando con nuevo estado
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId++, text: action.text }
        ]
      }
    }
  }
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Cuándo Usar"}),e.jsx("p",{children:"Ideal cuando tienes múltiples actualizaciones de estado relacionadas"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔒"}),e.jsx("h3",{children:"Inmutabilidad"}),e.jsx("p",{children:"Siempre devuelve nuevos objetos/arrays, nunca mutes"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"📦"}),e.jsx("h3",{children:"Acciones Descriptivas"}),e.jsx("p",{children:"Usa nombres claros para los tipos de acción"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🧪"}),e.jsx("h3",{children:"Fácil de Testear"}),e.jsx("p",{children:"Los reducers son funciones puras, fáciles de testear"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Estado Inicial Lazy"}),e.jsx("p",{children:"Pasa la función, no el resultado de llamarla"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"De useState a useReducer"}),e.jsx("p",{children:"Si useState se vuelve complejo, considera migrar a useReducer"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})},ke=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"🔄 useSyncExternalStore Hook"}),e.jsx("p",{className:"subtitle",children:"Te permite suscribirte a una fuente de almacenamiento de datos (store) externa."})]}),e.jsxs("section",{className:"section",children:[e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"useSyncExternalStore"})," te permite suscribirte a stores externos como bibliotecas de gestión de estado de terceros o APIs del navegador que exponen valores mutables."]})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Nota:"})," La mayoría de componentes de React solo leen datos de props, estado y contexto. Este hook es útil para integraciones con fuentes de datos externas."]})]})]})},W=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})}),fs=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,id:"useTransition",children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"⚡ useTransition Hook"}),e.jsx("p",{className:"subtitle",children:"renderizar una parte de la interfaz de usuario en segundo plano."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"transicion pendiente - marcar una actualizacion - no recibe parámetro."})}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:"const [isPending, startTransition] = useTransition()"})}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:`function TabContainer() {
  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState("about")

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab)
    })
  }
  // ...
}`})}),e.jsx("div",{className:"card",children:e.jsx("p",{children:'The function (update some state) passed to startTransition is called an "Action".'})}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:`      onClick={() => {
        startTransition(async () => {
          await submitAction();
        });
      }}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Ejemplo 1"}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:`import { useState, useTransition } from "react"
import { updateQuantity } from "./api"
import Item from "./Item"
import Total from "./Total"

export default function App({}) {
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const updateQuantityAction = async (newQuantity) => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity)
      startTransition(() => {
        setQuantity(savedQuantity)
      })
    })
  }

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:`import { startTransition } from "react"

export default function Item({ action }) {
  function handleChange(event) {
    // To expose an action prop, await the callback in startTransition.
    startTransition(async () => {
      await action(event.target.value)
    })
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input type="number" onChange={handleChange} defaultValue={1} min={1} />
    </div>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:`const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function Total({ quantity, isPending }) {
  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : \`\${intl.format(quantity * 9999)}\`}
      </span>
    </div>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:`export async function updateQuantity(newQuantity) {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity)
    }, 2000)
  })
}`})}),e.jsx(js,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🚀 Construir un enrutador preparado para Suspense"}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"This is recommended for three reasons:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Transitions are interruptible"}),e.jsx("li",{children:"Transitions prevent unwanted loading indicators"}),e.jsx("li",{children:"Transitions wait for all pending actions"})]}),e.jsx("p",{children:"Here is a simplified router example using Transitions for navigations."})]}),e.jsx("div",{className:"code-block",children:e.jsx(W,{language:"typescript",code:`import { Suspense, useState, useTransition } from "react"
import IndexPage from "./IndexPage.js"
import ArtistPage from "./ArtistPage.js"
import Layout from "./Layout.js"

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  )
}

function Router() {
  const [page, setPage] = useState("/")
  const [isPending, startTransition] = useTransition()

  function navigate(url) {
    startTransition(() => {
      setPage(url)
    })
  }

  let content
  if (page === "/") {
    content = <IndexPage navigate={navigate} />
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    )
  }
  return <Layout isPending={isPending}>{content}</Layout>
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>
}`})})]})]})};function js(){const[t,s]=y.useState(1),[n,a]=y.useTransition(),r=async h=>{a(async()=>{const i=await ks(h);a(()=>{s(i)})})};return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Checkout"}),e.jsx(bs,{action:r}),e.jsx("hr",{}),e.jsx(vs,{quantity:t,isPending:n})]})]})}function bs({action:t}){function s(n){const a=parseInt(n.target.value);!isNaN(a)&&a>0&&t(a)}return e.jsxs("div",{className:"item",children:[e.jsx("span",{children:"Eras Tour Tickets"}),e.jsx("label",{htmlFor:"quantity",children:"Quantity: "}),e.jsx("input",{id:"quantity",type:"number",onChange:s,defaultValue:1,min:1})]})}const ys=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function vs({quantity:t,isPending:s}){return e.jsxs("div",{className:"total",children:[e.jsx("span",{children:"Total:"}),e.jsx("span",{children:s?"🌀 Updating...":`${ys.format(t*9999)}`})]})}async function ks(t){return new Promise(s=>{setTimeout(()=>{s(t)},2e3)})}const Z=({code:t,language:s="typescript",isDarkMode:n})=>e.jsx(_,{theme:n?S.nightOwl:S.github,code:t,language:s,children:({className:a,style:r,tokens:h,getLineProps:i,getTokenProps:g})=>e.jsx("pre",{className:a,style:r,children:h.map((o,u)=>e.jsx("div",{...i({line:o}),children:o.map((x,m)=>e.jsx("span",{...g({token:x})},m))},u))})});async function Ns(t,s){const n=s.get("itemID");return await new Promise(a=>setTimeout(a,1e3)),n==="1"?{success:!0,cartSize:12}:{success:!1,message:"The item is sold out."}}function Ne({itemID:t,itemTitle:s}){const[n,a,r]=y.useActionState(Ns,{});return e.jsxs("form",{action:a,className:"form-demo",children:[e.jsx("h3",{children:s}),e.jsx("input",{type:"hidden",name:"itemID",value:t}),e.jsx("button",{type:"submit",className:"btn-primary",disabled:r,children:r?"Loading...":"Add to Cart"}),(n==null?void 0:n.success)&&e.jsxs("div",{className:"toast",children:["Added to cart! Your cart now has ",n.cartSize," items."]}),(n==null?void 0:n.success)===!1&&e.jsxs("div",{className:"error",children:["Failed to add to cart: ",n.message]})]})}const Ss=()=>{const{isDarkMode:t}=C();return e.jsxs("div",{className:`useState-container ${t?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${t?"dark":"light"}`,children:[e.jsx("h1",{children:"📋 useActionState Hook"}),e.jsx("p",{className:"subtitle",children:"Permite actualizar el estado basado en el resultado de un formulario en action."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useActionState?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useActionState"})," permite manejar el estado de un formulario de forma automática. Devuelve una función para enviar el formulario (formAction), el estado actual (state) y si la acción está pendiente (isPending)."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Se usa en el cliente y puede mostrar la respuesta del servidor incluso antes de que la página termine de hidratarse."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`const [state, formAction, isPending] = useActionState(fn, initialState, permalink?)

// Retorna:
// - state: el estado más reciente del formulario
// - formAction: función para enviar el formulario
// - isPending: booleano que indica si la acción está en curso`})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Parámetros"}),e.jsxs("ul",{className:"anatomy-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"fn"})," - Función que se llama al enviar el formulario. Recibe el estado previo y los datos del formulario."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"initialState"})," - Valor inicial del estado del formulario (se ignora después de la primera acción)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"permalink (opcional)"})," - URL única de la página que modifica el formulario."]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📝 onSubmit vs action"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Ambos métodos son válidos y siguen siendo usados. La diferencia es cómo y dónde quieres manejar el formulario:"})}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"methods-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Método"}),e.jsx("th",{children:"Dónde se ejecuta"}),e.jsx("th",{children:"Caso de uso real"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSubmit"})}),e.jsx("td",{children:"Cliente (navegador)"}),e.jsx("td",{children:"Login/Registro con validaciones, formularios complejos con React Hook Form"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"action"})," (cliente)"]}),e.jsx("td",{children:"Cliente (navegador)"}),e.jsx("td",{children:"Filtrar/buscar productos ya cargados, toggle favoritos locales"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"action"})," (servidor)"]}),e.jsx("td",{children:"Servidor"}),e.jsx("td",{children:"Crear posts en blog, guardar en DB, checkout/pagos, upload de archivos"})]})]})]})}),e.jsx("h3",{style:{marginTop:"2rem",color:"#667eea"},children:"Ejemplo 1: onSubmit - Login con validaciones"}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`// ✅ Caso REAL: Login con validaciones por campo
import { useForm } from 'react-hook-form'

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error('Credenciales inválidas')
      // Redirigir al dashboard
    } catch (error) {
      alert(error.message)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register('email', { 
          required: 'Email requerido',
          pattern: { value: /^\\S+@\\S+$/i, message: 'Email inválido' }
        })} 
      />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input 
        type="password"
        {...register('password', { 
          required: 'Password requerido',
          minLength: { value: 8, message: 'Mínimo 8 caracteres' }
        })} 
      />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Iniciar sesión</button>
    </form>
  )
}`})}),e.jsx("h3",{style:{marginTop:"2rem",color:"#667eea"},children:"Ejemplo 2: action (cliente) - Buscar productos locales"}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`// ✅ Caso REAL: Filtrar productos que ya tienes cargados (sin servidor)
import { useActionState } from 'react'

// Productos ya cargados desde la API inicial
const products = [
  { id: 1, name: 'iPhone 15', category: 'electronics', price: 999 },
  { id: 2, name: 'MacBook Pro', category: 'electronics', price: 2499 },
  { id: 3, name: 'Camiseta Nike', category: 'clothing', price: 29 }
]

function searchProducts(prevState, formData) {
  const query = formData.get('search')
  const category = formData.get('category')
  
  // Filtrar en el cliente (datos ya cargados)
  const results = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) && 
    (!category || p.category === category)
  )
  
  return { results, count: results.length }
}

function SearchForm() {
  const [state, formAction] = useActionState(searchProducts, { results: [] })
  
  return (
    <div>
      <form action={formAction}>
        <input name="search" placeholder="Buscar productos..." />
        <select name="category">
          <option value="">Todas las categorías</option>
          <option value="electronics">Electrónica</option>
          <option value="clothing">Ropa</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      
      <p>Encontrados: {state.count} productos</p>
      {state.results.map(p => (
        <div key={p.id}>
          {p.name} - \${p.price}
        </div>
      ))}
    </div>
  )
}`})}),e.jsx("h3",{style:{marginTop:"2rem",color:"#667eea"},children:"Ejemplo 3: action (servidor) - Crear post en blog"}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`// ✅ Caso REAL: Guardar post en base de datos (Next.js)
// actions.ts
"use server"
import { db } from '@/lib/db'

export async function createPost(prevState, formData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Validar en servidor
  if (!title || title.length < 5) {
    return { error: 'Título muy corto (mínimo 5 caracteres)' }
  }
  
  // Guardar en PostgreSQL/MongoDB
  const post = await db.posts.create({
    data: { 
      title, 
      content, 
      userId: session.user.id,
      createdAt: new Date()
    }
  })
  
  return { success: true, postId: post.id }
}

// CreatePostForm.tsx
import { useActionState } from 'react'
import { createPost } from './actions'

function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(createPost, {})
  
  return (
    <form action={formAction}>
      <input 
        name="title" 
        placeholder="Título del post" 
        required 
      />
      <textarea 
        name="content" 
        placeholder="Escribe tu contenido..." 
        required 
      />
      
      <button type="submit" disabled={isPending}>
        {isPending ? 'Guardando...' : 'Publicar Post'}
      </button>
      
      {state.error && <p style={{color: 'red'}}>{state.error}</p>}
      {state.success && <p>✅ Post creado con ID: {state.postId}</p>}
    </form>
  )
}`})}),e.jsxs("div",{className:"info-box",style:{marginTop:"1.5rem"},children:[e.jsx("strong",{children:"💡 Resumen de casos reales:"}),e.jsxs("ul",{style:{marginTop:"0.5rem",paddingLeft:"1.5rem"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"onSubmit"})," → Login, registro, formularios con validaciones complejas (React Hook Form)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"action (cliente)"})," → Filtrar/buscar datos ya cargados, toggle favoritos sin servidor"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"action (servidor)"})," → Crear posts, guardar en DB, checkout, upload archivos (Next.js)"]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎮 Demo Interactiva"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Cuando un form action se invoca, ",e.jsx("code",{children:"formAction"})," es la nueva función que llamas, ",e.jsx("code",{children:"state"})," contiene la respuesta del servidor, y ",e.jsx("code",{children:"isPending"})," indica si está en proceso."]})}),e.jsx(Ne,{itemID:"1",itemTitle:"JavaScript: The Definitive Guide"}),e.jsx(Ne,{itemID:"2",itemTitle:"JavaScript: The Good Parts"})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💻 Ejemplo: Mensaje Simple"}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`import { useActionState } from "react"
import { addToCart } from "./actions.js"

function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction, isPending] = useActionState(addToCart, null)
  
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`"use server"

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID")
  
  if (itemID === "1") {
    return "Added to cart"
  } else {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    return "Couldn't add to cart: the item is sold out."
  }
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Ejemplo: Estado con Objeto"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Puedes devolver un objeto más complejo con múltiples propiedades:"})}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`function AddToCartForm({ itemID, itemTitle }) {
  const [formState, formAction] = useActionState(addToCart, {})
  
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      
      {formState?.success && (
        <div className="toast">
          Added to cart! Your cart now has {formState.cartSize} items.
        </div>
      )}
      
      {formState?.success === false && (
        <div className="error">
          Failed to add to cart: {formState.message}
        </div>
      )}
    </form>
  )
}`})}),e.jsx("div",{className:"code-block",children:e.jsx(Z,{language:"typescript",code:`"use server"

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID")
  
  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    }
  } else {
    return {
      success: false,
      message: "The item is sold out.",
    }
  }
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"Estado Automático"}),e.jsx("p",{children:"Maneja estado del formulario sin useState manual"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⏳"}),e.jsx("h3",{children:"isPending"}),e.jsx("p",{children:"Indica visualmente cuando la acción está en progreso"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🌐"}),e.jsx("h3",{children:"Server Actions"}),e.jsx("p",{children:"Funciona perfectamente con acciones del servidor"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Pre-hidratación"}),e.jsx("p",{children:"Muestra respuestas antes de que cargue el JavaScript"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"📋"}),e.jsx("h3",{children:"FormData"}),e.jsx("p",{children:"Recibe automáticamente los datos del formulario"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Estado Previo"}),e.jsx("p",{children:"Accede al estado anterior en cada invocación"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})},Es={UseState:$t,UseRef:Mt,UseContext:Ht,UseCallback:Gt,UseEffect:Xt,UseEffectEvent:ts,UseId:ss,UseImperativeHandle:as,UseInsertionEffect:rs,UseLayoutEffect:is,UseMemo:ps,UseReducer:xs,UseSyncExternalStore:ke,UseSyncExternalStoreWithSelector:ke,UseTransition:fs,UseActionState:Ss};function Cs(){const t=_e.useLoaderData(),s=Es[t.content];return s?e.jsx("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center"},children:e.jsx(s,{})}):e.jsx("div",{children:"Post no encontrado"})}export{Cs as component};
