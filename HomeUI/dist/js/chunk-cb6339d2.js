(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb6339d2"],{6076:function(e,t,n){"use strict";n("99af");var a=n("b4c0");t["a"]={help:function(){return Object(a["a"])().get("/daemon/help")},helpSpecific:function(e){return Object(a["a"])().get("/daemon/help/".concat(e))},getInfo:function(){return Object(a["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(a["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(e,t){return Object(a["a"])().get("/daemon/getrawtransaction/".concat(e,"/").concat(t))},listZelNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(a["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(a["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(a["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(a["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(a["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(a["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(e){return Object(a["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark:function(e){return Object(a["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo:function(){return Object(a["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(a["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(a["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(e,t){return Object(a["a"])().get("/daemon/validateaddress/".concat(t),{headers:{zelidauth:e}})},getWalletInfo:function(e){return Object(a["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listZelNodeConf:function(e){return Object(a["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start:function(e){return Object(a["a"])().get("/daemon/start",{headers:{zelidauth:e}})},restart:function(e){return Object(a["a"])().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon:function(e){return Object(a["a"])().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon:function(e,t){return Object(a["a"])().get("/daemon/rescanblockchain/".concat(t),{headers:{zelidauth:e}})},getBlock:function(e,t){return Object(a["a"])().get("/daemon/getblock/".concat(e,"/").concat(t))},tailDaemonDebug:function(e){return Object(a["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},"84f5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",[e.callResponse.data?n("b-form-textarea",{attrs:{plaintext:"","no-resize":"",rows:"30",value:e.callResponse.data}}):e._e()],1)},o=[],r=n("1da1"),c=(n("96cf"),n("e9c4"),n("205f")),u=n("9c7d"),i=n("b307"),s=n("6076"),d={components:{BCard:c["a"],BFormTextarea:u["a"],ToastificationContent:i["a"]},data:function(){return{callResponse:{status:"",data:""}}},mounted:function(){this.daemonGetBlockchainInfo()},methods:{daemonGetBlockchainInfo:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].getBlockchainInfo();case 2:n=t.sent,"error"===n.data.status?e.$toast({component:i["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}}):(e.callResponse.status=n.data.status,e.callResponse.data=JSON.stringify(n.data.data,null,4));case 4:case"end":return t.stop()}}),t)})))()}}},l=d,f=n("2877"),g=Object(f["a"])(l,a,o,!1,null,null,null);t["default"]=g.exports}}]);