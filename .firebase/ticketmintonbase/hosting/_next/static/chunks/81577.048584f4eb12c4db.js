"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81577],{81577:function(t,n,e){e.d(n,{getNFT:function(){return s}});var r=e(84508),o=e(66978),i=e(94293);let c=[{type:"uint256",name:"id"}],a=[{type:"uint256"}];async function u(t){return(0,i.readContract)({contract:t.contract,method:["0xbd85b039",c,a],params:[t.id]})}let l=[{type:"uint256",name:"tokenId"}],d=[{type:"string"}];async function f(t){return(0,i.readContract)({contract:t.contract,method:["0x0e89341c",l,d],params:[t.tokenId]})}async function s(t){let[n,e]=await Promise.all([f({contract:t.contract,tokenId:t.tokenId}),u({contract:t.contract,id:t.tokenId}).catch(()=>0n)]);return(0,o.r)(await (0,r.d)({client:t.contract.client,tokenId:t.tokenId,tokenUri:n}).catch(()=>({id:t.tokenId,type:"ERC1155",uri:n})),{tokenId:t.tokenId,tokenUri:n,type:"ERC1155",owner:null,supply:e})}},33779:function(t,n,e){e.d(n,{I:function(){return i},S:function(){return o}});var r=e(39347);function o(t){return!!t.startsWith("data:application/json;base64")}function i(t){let[,n]=t.split(",");return(0,r.Vy)(n)}},84508:function(t,n,e){e.d(n,{d:function(){return i}});var r=e(33779),o=e(14520);async function i(t){let{client:n,tokenId:i,tokenUri:c}=t;if((0,r.S)(c))try{return JSON.parse((0,r.I)(c))}catch(t){throw console.error("Failed to fetch base64 encoded NFT",{tokenId:i,tokenUri:c},t),t}let{download:a}=await Promise.resolve().then(e.bind(e,57293));try{if(!c.includes("{id}"))return await (await a({client:n,uri:c})).json()}catch(t){throw console.error("Failed to fetch non-dynamic NFT",{tokenId:i,tokenUri:c},t),t}try{try{return await (await a({client:n,uri:c.replace("{id}",(0,o.eC)(i,{size:32}).slice(2))})).json()}catch(t){return await (await a({client:n,uri:c.replace("{id}",i.toString())})).json()}}catch(t){throw console.error("Failed to fetch dynamic NFT",{tokenId:i,tokenUri:c},t),t}}},66978:function(t,n,e){e.d(n,{r:function(){return r}});function r(t,n){var e,r;switch(n.type){case"ERC721":return{metadata:t,owner:null!==(e=null==n?void 0:n.owner)&&void 0!==e?e:null,id:n.tokenId,tokenURI:n.tokenUri,type:n.type};case"ERC1155":return{metadata:t,owner:null!==(r=null==n?void 0:n.owner)&&void 0!==r?r:null,id:n.tokenId,tokenURI:n.tokenUri,type:n.type,supply:n.supply};default:throw Error("Invalid NFT type")}}},39347:function(t,n,e){e.d(n,{AY:function(){return c},Hv:function(){return l},KT:function(){return d},Vy:function(){return u},lq:function(){return i}});var r=e(69059);function o(t){if(!i(t))throw TypeError("Expected `Uint8Array`, got `".concat(typeof t,"`"))}function i(t){return!!t&&(t.constructor===Uint8Array||"[object Uint8Array]"===Object.prototype.toString.call(t))}function c(t,n){if(o(t),o(n),t===n)return!0;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}function a(t){if("string"!=typeof t)throw TypeError("Expected `string`, got `".concat(typeof t,"`"))}function u(t){var n;return a(t),o((a(t),n=Uint8Array.from(globalThis.atob(t.replaceAll("-","+").replaceAll("_","/")),t=>t.codePointAt(0)))),(0,r.h)().decode(n)}function l(t,n){if(0===t.length)return new Uint8Array(0);let e=null!=n?n:t.reduce((t,n)=>t+n.length,0),r=new Uint8Array(e),i=0;for(let n of t)o(n),r.set(n,i),i+=n.length;return r}function d(t,n){o(t),o(n);let e=Math.min(t.length,n.length);for(let r=0;r<e;r++){let e=t[r]-n[r];if(0!==e)return Math.sign(e)}return Math.sign(t.length-n.length)}}}]);