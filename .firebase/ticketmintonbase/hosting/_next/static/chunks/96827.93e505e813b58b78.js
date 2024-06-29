"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96827],{96827:function(i,o,e){e.d(o,{onSessionProposal:function(){return l}});var n=e(41879),a=e(34535);async function l(i){var o,e;let{wallet:l,walletConnectClient:t,event:v,chains:r,onConnect:c}=i,u=l.getAccount();if(!u)throw Error("No account connected to provided wallet");let p=null===(e=v.verifyContext)||void 0===e?void 0:null===(o=e.verified)||void 0===o?void 0:o.origin;p&&await d({origin:p,walletConnectClient:t});let m=await s({account:u,walletConnectClient:t,sessionProposal:v,chains:r});await (0,a.Aj)(m),l.subscribe("disconnect",()=>{(0,n.$b)({session:m,walletConnectClient:t})}),null==c||c(m)}async function d(i){let{walletConnectClient:o,origin:e}=i;for(let i of(await (0,a.Rx)()))i.origin===e&&await (0,n.$b)({session:i,walletConnectClient:o})}async function s(i){var o,e,n,a,l,d,s,t,v,r,c,u,p,m,f,w,h,N,g,b,k,y,C,E,q;let{account:_,walletConnectClient:x,sessionProposal:A,chains:P}=i;if(!(null===(o=A.params.requiredNamespaces)||void 0===o?void 0:o.eip155)&&!(null===(e=A.params.optionalNamespaces)||void 0===e?void 0:e.eip155))throw Error("No EIP155 namespace found in Wallet Connect session proposal");let S={chains:[...Array.from(new Set([...null!==(g=null===(l=A.params.requiredNamespaces)||void 0===l?void 0:null===(a=l.eip155)||void 0===a?void 0:null===(n=a.chains)||void 0===n?void 0:n.map(i=>"".concat(i,":").concat(_.address)))&&void 0!==g?g:[],...null!==(b=null===(t=A.params.optionalNamespaces)||void 0===t?void 0:null===(s=t.eip155)||void 0===s?void 0:null===(d=s.chains)||void 0===d?void 0:d.map(i=>"".concat(i,":").concat(_.address)))&&void 0!==b?b:[],...null!==(k=null==P?void 0:P.map(i=>"eip155:".concat(i.id,":").concat(_.address)))&&void 0!==k?k:[]]))],methods:[...null!==(y=null===(r=A.params.requiredNamespaces)||void 0===r?void 0:null===(v=r.eip155)||void 0===v?void 0:v.methods)&&void 0!==y?y:[],...null!==(C=null===(u=A.params.optionalNamespaces)||void 0===u?void 0:null===(c=u.eip155)||void 0===c?void 0:c.methods)&&void 0!==C?C:[]],events:[...null!==(E=null===(m=A.params.requiredNamespaces)||void 0===m?void 0:null===(p=m.eip155)||void 0===p?void 0:p.events)&&void 0!==E?E:[],...null!==(q=null===(w=A.params.optionalNamespaces)||void 0===w?void 0:null===(f=w.eip155)||void 0===f?void 0:f.events)&&void 0!==q?q:[]]},$=await x.approve({id:A.id,namespaces:{eip155:{accounts:S.chains,methods:S.methods,events:S.events}}});return{topic:(await $.acknowledged()).topic,origin:(null===(N=A.verifyContext)||void 0===N?void 0:null===(h=N.verified)||void 0===h?void 0:h.origin)||"Unknown origin"}}}}]);