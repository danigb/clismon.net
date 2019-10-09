/*
 * jQuery Address Plugin v1.3
 * http://www.asual.com/jquery/address/
 *
 * Copyright (c) 2009-2010 Rostislav Hristov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2010-09-26 17:58:16 +0300 (Sun, 26 Sep 2010)
 */
!function(t){t.address=function(){var e,r,n=function(e){t(t.address).trigger(t.extend(t.Event(e),function(){for(var e={},r=t.address.parameterNames(),n=0,a=r.length;a>n;n++)e[r[n]]=t.address.parameter(r[n]);return{value:t.address.value(),path:t.address.path(),pathNames:t.address.pathNames(),parameterNames:r,parameters:e,queryString:t.address.queryString()}}.call(t.address)))},a=function(e,r,n){return t(t.address).bind(e,r,n),t.address},i=function(){return X.pushState&&typeof M.state!==_},s=function(){return"/"+Y.pathname.replace(new RegExp(M.state),"")+Y.search+(o()?"#"+o():"")},o=function(){var t=Y.href.indexOf("#");return-1!=t?h(Y.href.substr(t+1),B):""},c=function(){return i()?s():o()},u=function(){try{return void 0!==top.document?top:window}catch(t){return window}},l=function(){return"javascript"},d=function(t,e){return M.strict&&(t=e?"/"!=t.substr(0,1)?"/"+t:t:""==t?"/":t),t},h=function(t,e){return M.crawlable&&e?(""!=t?"!":"")+t:t.replace(/^\!/,"")},f=function(t,e){return parseInt(t.css(e),10)},p=function(t){for(var e,r,n=0,a=t.childNodes.length;a>n;n++)t.childNodes[n].src&&(e=String(t.childNodes[n].src)),r=p(t.childNodes[n]),r&&(e=r);return e},v=function(){if(!se){var t=c(),e=he!=t;H&&523>P?ie!=X.length&&(ie=X.length,typeof de[ie-1]!=_&&(he=de[ie-1]),g(B)):e&&(Q&&7>P?Y.reload():(Q&&8>P&&M.history&&te(y,50),he=t,g(B)))}},g=function(t){n(A),n(t?F:L),te(m,10)},m=function(){if("null"!==M.tracker&&null!==M.tracker){var e=t.isFunction(M.tracker)?M.tracker:K[M.tracker],r=(Y.pathname+Y.search+(t.address&&!i()?t.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");t.isFunction(e)?e(r):t.isFunction(K.urchinTracker)?K.urchinTracker(r):typeof K.pageTracker!=_&&t.isFunction(K.pageTracker._trackPageview)?K.pageTracker._trackPageview(r):typeof K._gaq!=_&&t.isFunction(K._gaq.push)&&K._gaq.push(["_trackPageview",r])}},y=function(){var t=l()+":"+B+";document.open();document.writeln('<html><head><title>"+V.title+"</title><script>var "+U+' = "'+c()+(V.domain!=Y.host?'";document.domain="'+V.domain:"")+"\";</script></head></html>');document.close();";7>P?e.src=t:e.contentWindow.location.replace(t)},b=function(){if(re&&-1!=ne){var t,e=re.substr(ne+1).split("&");for(fe=0;fe<e.length;fe++)t=e[fe].split("="),/^(autoUpdate|crawlable|history|strict|wrap)$/.test(t[0])&&(M[t[0]]=isNaN(t[1])?/^(true|yes)$/i.test(t[1]):0!==parseInt(t[1],10)),/^(state|tracker)$/.test(t[0])&&(M[t[0]]=t[1]);re=null}he=c()},w=function(){if(!oe){oe=z,b();var a=t("body").ajaxComplete(function(){x.call(this),N.call(this)}).trigger("ajaxComplete");if(M.wrap){{t("body > *").wrapAll('<div style="padding:'+(f(a,"marginTop")+f(a,"paddingTop"))+"px "+(f(a,"marginRight")+f(a,"paddingRight"))+"px "+(f(a,"marginBottom")+f(a,"paddingBottom"))+"px "+(f(a,"marginLeft")+f(a,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+U+'" style="height:100%; overflow:auto;'+(H?window.statusbar.visible&&!/chrome/i.test(ee)?"":" resize:both;":"")+'" />')}t("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"}),H&&t('<style type="text/css" />').appendTo("head").text("#"+U+"::-webkit-resizer { background-color: #fff; }")}if(Q&&8>P){var s=V.getElementsByTagName("frameset")[0];e=V.createElement((s?"":"i")+"frame"),s?(s.insertAdjacentElement("beforeEnd",e),s[s.cols?"cols":"rows"]+=",0",e.noResize=z,e.frameBorder=e.frameSpacing=0):(e.style.display="none",e.style.width=e.style.height=0,e.tabIndex=-1,V.body.insertAdjacentElement("afterBegin",e)),te(function(){t(e).bind("load",function(){{var t=e.contentWindow;t.location.href}he=typeof t[U]!=_?t[U]:"",he!=c()&&(g(B),Y.hash=h(he,z))}),typeof e.contentWindow[U]==_&&y()},50)}else H&&(418>P&&(t(V.body).append('<form id="'+U+'" style="position:absolute;top:-9999px;" method="get"></form>'),r=V.getElementById(U)),typeof Y[U]==_&&(Y[U]={}),typeof Y[U][Y.pathname]!=_&&(de=Y[U][Y.pathname].split(",")));te(function(){n("init"),g(B)},1),i()||(Q&&P>7||!Q&&"on"+q in K?K.addEventListener?K.addEventListener(q,v,!1):K.attachEvent&&K.attachEvent("on"+q,v):Z(v,50))}},x=function(){var e,r=t("a"),n=r.size(),a=1,i=-1;te(function(){++i!=n&&(e=t(r.get(i)),e.is("[rel*=address:]")&&e.address(),te(arguments.callee,a))},a)},E=function(){he!=c()&&(he=c(),g(B))},k=function(){K.removeEventListener?K.removeEventListener(q,v,!1):K.detachEvent&&K.detachEvent("on"+q,v)},N=function(){var e=Y.pathname.replace(/\/$/,""),r="_escaped_fragment_";-1!=t("body").html().indexOf(r)&&t("a[href]:not([href^=http]), , a[href*="+document.domain+"]",this).each(function(){var n=t(this).attr("href").replace(/^http:/,"").replace(new RegExp(e+"/?$"),"");(""==n||-1!=n.indexOf(r))&&t(this).attr("href","#"+this.decode(n.replace(new RegExp("/(.*)\\?"+r+"=(.*)$"),"!$2")))})},S=function(t){return encodeURIComponent(t).replace(/%20/g,"+")},$=function(t){return t.split("#")[0].split("?")[0]},j=function(t){var e=$(t),r=e.replace(/\/{2,9}/g,"/").split("/");return("/"==e.substr(0,1)||0===e.length)&&r.splice(0,1),"/"==e.substr(e.length-1,1)&&r.splice(r.length-1,1),r},O=function(t){var e=t.split("?");return e.slice(1,e.length).join("?").split("#")[0]},I=function(t,e){if(e=O(e)){params=e.split("&");var r=[];for(fe=0;fe<params.length;fe++){var n=params[fe].split("=");n[0]==t&&r.push(n.slice(1).join("="))}if(0!==r.length)return 1!=r.length?r:r[0]}},R=function(e){var r=O(e),n=[];if(r&&-1!=r.indexOf("="))for(var a=r.split("&"),i=0;i<a.length;i++){var s=a[i].split("=")[0];-1==t.inArray(s,n)&&n.push(s)}return n},T=function(t){var e=t.split("#");return e.slice(1,e.length).join("#")},U="jQueryAddress",_="undefined",q="hashchange",C="init",A="change",F="internalChange",L="externalChange",z=!0,B=!1,M={autoUpdate:z,crawlable:B,history:z,strict:z,wrap:B},W=t.browser,P=parseFloat(t.browser.version),D=W.mozilla,Q=W.msie,G=W.opera,H=W.webkit,J=B,K=u(),V=K.document,X=K.history,Y=K.location,Z=setInterval,te=setTimeout,ee=navigator.userAgent,re=p(document),ne=re?re.indexOf("?"):-1,ae=V.title,ie=X.length,se=B,oe=B,ce=z,ue=z,le=B,de=[],he=c();if(Q&&(P=parseFloat(ee.substr(ee.indexOf("MSIE")+4)),V.documentMode&&V.documentMode!=P&&(P=8!=V.documentMode?7:8),t(document).bind("propertychange",function(){V.title!=ae&&-1!=V.title.indexOf("#"+c())&&(V.title=ae)})),J=D&&P>=1||Q&&P>=6||G&&P>=9.5||H&&P>=312){for(var fe=1;ie>fe;fe++)de.push("");if(de.push(he),G&&(history.navigationMode="compatible"),"complete"==document.readyState)var pe=setInterval(function(){t.address&&(w(),clearInterval(pe))},50);else b(),t(w);var ve=s();typeof M.state!==_&&(X.pushState?"/#/"==ve.substr(0,3)&&Y.replace(M.state.replace(/^\/$/,"")+ve.substr(2)):"/"!=ve&&ve.replace(/^\/#/,"")!=o()&&Y.replace(M.state.replace(/^\/$/,"")+"/#"+ve)),t(window).bind("popstate",E).bind("unload",k)}else!J&&""!=o()||H&&418>P&&""!=o()&&""!=Y.search?Y.replace(Y.href.substr(0,Y.href.indexOf("#"))):m();return{bind:function(t,e,r){return a(t,e,r)},init:function(t){return a(C,t)},change:function(t){return a(A,t)},internalChange:function(t){return a(F,t)},externalChange:function(t){return a(L,t)},baseURL:function(){var t=Y.href;return-1!=t.indexOf("#")&&(t=t.substr(0,t.indexOf("#"))),/\/$/.test(t)&&(t=t.substr(0,t.length-1)),t},autoUpdate:function(t){return void 0!==t?(M.autoUpdate=t,this):M.autoUpdate},crawlable:function(t){return void 0!==t?(M.crawlable=t,this):M.crawlable},history:function(t){return void 0!==t?(M.history=t,this):M.history},state:function(t){return void 0!==t?(M.state=t,this):M.state},strict:function(t){return void 0!==t?(M.strict=t,this):M.strict},tracker:function(t){return void 0!==t?(M.tracker=t,this):M.tracker},wrap:function(t){return void 0!==t?(M.wrap=t,this):M.wrap},update:function(){return le=z,this.value(he),le=B,this},encode:function(e){var r=j(e),n=R(e),a=O(e),i=T(e),s=e.substr(0,1),o=e.substr(e.length-1),c="";return t.each(r,function(t,e){c+="/"+S(e)}),""!==a&&(c+="?",0===n.length?c+=a:(t.each(n,function(r,n){var a=I(n,e);"string"!=typeof a?t.each(a,function(t,e){c+=S(n)+"="+S(e)+"&"}):c+=S(n)+"="+S(a)+"&"}),c=c.substr(0,c.length-1))),""!==i&&(c+="#"+S(i)),"/"!=s&&"/"==c.substr(0,1)&&(c=c.substr(1)),/#|&|\?/.test(o)&&(c+=o),c},decode:function(t){return decodeURIComponent(t.replace(/\+/g,"%20"))},title:function(t){return void 0!==t?(te(function(){ae=V.title=t,ue&&e&&e.contentWindow&&e.contentWindow.document&&(e.contentWindow.document.title=t,ue=B),!ce&&D&&Y.replace(-1!=Y.href.indexOf("#")?Y.href:Y.href+"#"),ce=B},50),this):V.title},value:function(t){if(void 0!==t){if(t=d(this.encode(t),z),"/"==t&&(t=""),he==t&&!le)return;if(ce=z,he=t,M.autoUpdate||le)if(g(z),i())X[M.history?"pushState":"replaceState"]({},"",M.state.replace(/\/$/,"")+(""==he?"/":he));else{if(se=z,de[X.length]=he,H)if(M.history)if(Y[U][Y.pathname]=de.toString(),ie=X.length+1,418>P)""==Y.search&&(r.action="#"+h(he,z),r.submit());else if(523>P||""==he){var e=V.createEvent("MouseEvents");e.initEvent("click",z,z);var n=V.createElement("a");n.href="#"+h(he,z),n.dispatchEvent(e)}else Y.hash="#"+h(he,z);else Y.replace("#"+h(he,z));else he!=c()&&(M.history?Y.hash="#"+h(he,z):Y.replace("#"+h(he,z)));Q&&8>P&&M.history&&te(y,50),H?te(function(){se=B},1):se=B}return this}return J?d(this.decode(he),B):null},path:function(t){if(void 0!==t){var e=this.queryString(),r=this.hash();return this.value(t+(e?"?"+e:"")+(r?"#"+r:"")),this}return $(this.value())},pathNames:function(){return j(this.value())},queryString:function(t){if(void 0!==t){var e=this.hash();return this.value(this.path()+(t?"?"+t:"")+(e?"#"+e:"")),this}return O(this.value())},parameter:function(e,r,n){var a,i;if(void 0!==r){var s=this.parameterNames();for(i=[],a=0;a<s.length;a++){var o=s[a],c=this.parameter(o);"string"==typeof c&&(c=[c]),o==e&&(c=null===r||""===r?[]:n?c.concat([r]):[r]);for(var u=0;u<c.length;u++)i.push(o+"="+c[u])}return-1==t.inArray(e,s)&&null!==r&&""!==r&&i.push(e+"="+r),this.queryString(i.join("&")),this}return I(e,this.value())},parameterNames:function(){return R(this.value())},hash:function(t){return void 0!==t?(this.value(this.value().split("#")[0]+(t?"#"+t:"")),this):T(this.value())}}}(),t.fn.address=function(e){if(!t(this).attr("address")){var r=function(r){if(t(this).is("a")){var n=e?e.call(this):/address:/.test(t(this).attr("rel"))?t(this).attr("rel").split("address:")[1].split(" ")[0]:"undefined"!=typeof t.address.state()&&"/"!=t.address.state()?t(this).attr("href").replace(new RegExp("^(.*"+t.address.state()+"|\\.)"),""):t(this).attr("href").replace(/^(#\!?|\.)/,"");t.address.value(n),r.preventDefault()}};t(this).click(r).live("click",r).submit(function(r){if(t(this).is("form")){var n=e?e.call(this):t(this).attr("action")+"?"+t.address.decode(t(this).serialize());t.address.value(n),r.preventDefault()}}).attr("address",!0)}return this}}(jQuery);