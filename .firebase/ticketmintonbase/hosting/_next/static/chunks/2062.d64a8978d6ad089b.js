"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2062],{2062:function(a,e,t){t.d(e,{relayEngineTransaction:function(){return l}});var n=t(47275),r=t(49859),s=t(94293),i=t(46510);async function o(a){let{account:e,serializableTransaction:t,transaction:r,gasless:i}=a,o=(0,n.getContract)({address:i.relayerForwarderAddress,chain:r.chain,client:r.client}),l=await (0,s.readContract)({contract:o,method:"function getNonce(address) view returns (uint256)",params:[e.address]}),[u,y]=await (async()=>{var a,n;if(!t.to)throw Error("engine transactions must have a 'to' address");if(!t.gas)throw Error("engine transactions must have a 'gas' value");if(!t.data)throw Error("engine transactions must have a 'data' value");if(i.experimentalChainlessSupport){let a={from:e.address,to:t.to,value:0n,gas:t.gas,nonce:l,data:t.data,chainid:BigInt(r.chain.id)};return[await e.signTypedData({domain:{name:"GSNv2 Forwarder",version:"0.0.1",verifyingContract:o.address},message:a,primaryType:"ForwardRequest",types:{ForwardRequest:d}}),a]}let s={from:e.address,to:t.to,value:0n,gas:t.gas,nonce:l,data:t.data};return[await e.signTypedData({domain:{name:null!==(a=i.domainName)&&void 0!==a?a:"GSNv2 Forwarder",version:null!==(n=i.domainVersion)&&void 0!==n?n:"0.0.1",chainId:r.chain.id,verifyingContract:o.address},message:s,primaryType:"ForwardRequest",types:{ForwardRequest:c}}),s]})();return{message:y,signature:u,messageType:"forward"}}let c=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"}],d=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"},{name:"chainid",type:"uint256"}];async function l(a){let{message:e,messageType:t,signature:n}=await o(a),s=await fetch(a.gasless.relayerUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:(0,r.P)({request:e,type:t,signature:n,forwarderAddress:a.gasless.relayerForwarderAddress})});if(!s.ok)throw Error("Failed to send transaction: ".concat(await s.text()));let i=await s.json();if(!i.result)throw Error("Relay transaction failed: ".concat(i.message));let c=i.result.queueId,d=Date.now()+6e4;for(;Date.now()<d;){let e=await u({options:a,queueId:c});if(e)return{transactionHash:e.transactionHash,chain:a.transaction.chain,client:a.transaction.client};await new Promise(a=>setTimeout(a,1e3))}throw Error("Failed to find relayed transaction after ".concat(6e4,"ms"))}async function u(a){let{options:e,queueId:t}=a,n=e.gasless.relayerUrl.split("/relayer/")[0],r=await fetch("".concat(n,"/transaction/status/").concat(t),{method:"GET"}),s=await r.json();if(!r.ok)return null;let o=s.result;if(!o)return null;switch(o.status){case"errored":throw Error("Transaction errored with reason: ".concat(o.errorMessage));case"cancelled":throw Error("Transaction execution cancelled.");case"mined":return await (0,i.h)({client:e.transaction.client,chain:e.transaction.chain,transactionHash:o.transactionHash});default:return null}}}}]);