(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a5b5d31"],{"0ad5":function(e,t,a){"use strict";var n=a("b4c0");t["a"]={start:function(e){return Object(n["a"])().get("/benchmark/start",{headers:{zelidauth:e}})},restart:function(e){return Object(n["a"])().get("/benchmark/restart",{headers:{zelidauth:e}})},getStatus:function(){return Object(n["a"])().get("/benchmark/getstatus")},restartNodeBenchmarks:function(e){return Object(n["a"])().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:e}})},signFluxTransaction:function(e,t){return Object(n["a"])().get("/benchmark/signzelnodetransaction/".concat(t),{headers:{zelidauth:e}})},helpSpecific:function(e){return Object(n["a"])().get("/benchmark/help/".concat(e))},help:function(){return Object(n["a"])().get("/benchmark/help")},stop:function(e){return Object(n["a"])().get("/benchmark/stop",{headers:{zelidauth:e}})},getBenchmarks:function(){return Object(n["a"])().get("/benchmark/getbenchmarks")},getInfo:function(){return Object(n["a"])().get("/benchmark/getinfo")},tailBenchmarkDebug:function(e){return Object(n["a"])().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:e}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},"2ca0":function(e,t,a){"use strict";var n=a("23e7"),r=a("e330"),c=a("06cf").f,s=a("50c4"),i=a("577e"),o=a("5a34"),u=a("1d80"),l=a("ab13"),p=a("c430"),d=r("".startsWith),h=r("".slice),f=Math.min,m=l("startsWith"),b=!p&&!m&&!!function(){var e=c(String.prototype,"startsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!b&&!m},{startsWith:function(e){var t=i(u(this));o(e);var a=s(f(arguments.length>1?arguments[1]:void 0,t.length)),n=i(e);return d?d(t,n,a):h(t,a,a+n.length)===n}})},"2f1c":function(e,t,a){},bc8e:function(e,t,a){"use strict";a("2f1c")},e986:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.callResponse.data?a("b-card",[a("app-collapse",{attrs:{accordion:""},model:{value:e.activeHelpNames,callback:function(t){e.activeHelpNames=t},expression:"activeHelpNames"}},e._l(e.helpResponse,(function(t){return a("div",{key:t},[t.startsWith("=")?a("div",[a("br"),a("h2",[e._v(" "+e._s(t.split(" ")[1])+" ")])]):e._e(),t.startsWith("=")?e._e():a("app-collapse-item",{attrs:{title:t},on:{visible:function(a){return e.updateActiveHelpNames(a,t)}}},[a("p",{staticClass:"helpSpecific"},[e._v(" "+e._s(e.currentHelpResponse||"Loading help message...")+" ")]),a("hr")])],1)})),0)],1):e._e()],1)},r=[],c=a("1da1"),s=(a("96cf"),a("d81d"),a("4de4"),a("d3b7"),a("ac1f"),a("1276"),a("2ca0"),a("498a"),a("a15b9"),a("205f")),i=a("b307"),o=a("4b0e"),u=a("746e"),l=a("0ad5"),p={components:{BCard:s["a"],AppCollapse:o["a"],AppCollapseItem:u["a"],ToastificationContent:i["a"]},data:function(){return{callResponse:{status:"",data:""},activeHelpNames:"",currentHelpResponse:""}},computed:{helpResponse:function(){return this.callResponse.data?this.callResponse.data.split("\n").filter((function(e){return""!==e})).map((function(e){return e.startsWith("=")?e:e.split(" ")[0]})):[]}},mounted:function(){this.daemonHelp()},methods:{daemonHelp:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].help();case 2:a=t.sent,"error"===a.data.status?e.$toast({component:i["a"],props:{title:a.data.data.message||a.data.data,icon:"InfoIcon",variant:"danger"}}):(e.callResponse.status=a.data.status,e.callResponse.data=a.data.data);case 4:case"end":return t.stop()}}),t)})))()},updateActiveHelpNames:function(e,t){this.activeHelpNames=t,this.benchmarkHelpSpecific()},benchmarkHelpSpecific:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,r,c,s,o,u,p,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.currentHelpResponse="",console.log(e.activeHelpNames),t.next=4,l["a"].helpSpecific(e.activeHelpNames);case 4:if(a=t.sent,console.log(a),"error"===a.data.status)e.$toast({component:i["a"],props:{title:a.data.data.message||a.data.data,icon:"InfoIcon",variant:"danger"}});else{for(n=a.data.data.split("\n"),r=n.length,c=0,s=0;s<r;s+=1)if(o="","{"===n[s].trim()||"["===n[s].trim()){for(c+=4,u=0;u<c;u+=1)o+=" ";n[s]=o+n[s],c+=4}else if("}"===n[s].trim()||"]"===n[s].trim()){for(c-=4,p=0;p<c;p+=1)o+=" ";n[s]=o+n[s],c-=4}else{for(d=0;d<c;d+=1)o+=" ";n[s]=o+n[s]}e.currentHelpResponse=n.join("\n"),console.log(e.currentHelpResponse)}case 7:case"end":return t.stop()}}),t)})))()}}},d=p,h=(a("bc8e"),a("2877")),f=Object(h["a"])(d,n,r,!1,null,null,null);t["default"]=f.exports}}]);