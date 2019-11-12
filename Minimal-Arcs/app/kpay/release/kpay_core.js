/*
* K·Pay Integration Library - v1.2.11 - Copyright Kiezel 2018
* Last Modified: 2018-11-09
*
* BECAUSE THE LIBRARY IS LICENSED FREE OF CHARGE, THERE IS NO
* WARRANTY FOR THE LIBRARY, TO THE EXTENT PERMITTED BY APPLICABLE
* LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
* HOLDERS AND/OR OTHER PARTIES PROVIDE THE LIBRARY "AS IS"
* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
* INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE
* RISK AS TO THE QUALITY AND PERFORMANCE OF THE LIBRARY IS WITH YOU.
* SHOULD THE LIBRARY PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL
* NECESSARY SERVICING, REPAIR OR CORRECTION.
*
* IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN
* WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY
* MODIFY AND/OR REDISTRIBUTE THE LIBRARY AS PERMITTED ABOVE, BE
* LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL,
* INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR
* INABILITY TO USE THE LIBRARY (INCLUDING BUT NOT LIMITED TO LOSS
* OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY
* YOU OR THIRD PARTIES OR A FAILURE OF THE LIBRARY TO OPERATE WITH
* ANY OTHER SOFTWARE), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN
* ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
*/ 

/*****************************************************************************************/
/*                 GENERATED CODE BELOW THIS LINE - DO NOT MODIFY!                       */
/*****************************************************************************************/

import * as fs from "fs";
import * as messaging from 'messaging';
import * as kcm from '../../../common/kpay/kpay_common.js';
import * as kcfg from '../kpay_config.js';
import * as kp from './kpay.js';
export var kp0=null,n=!1,t={t:!1,i:!1,u:!1},u=null,s=null,e=null,o=null,f=!1,a=function(){return!1},h=function(){},p=function(){},g=function(){},v=function(){},k=function(){},m=function(){return!1},y=function(n,t,u){return!0};var KPAY_APP_ID = 1150813213;
export function init(){I()?(kp0={sl:!1,it:(new Date).getTime()},v(!0),h(!0),kp11()):(N(),v(!1),h(!1)),messaging.peerSocket.addEventListener("open",k),0===messaging.peerSocket.readyState&&k()}export function useFileTransfer(){n=!0}export function processMessageFromCompanion(n){x(n)?T(n):n&&"start"===n.purchase?startPurchase():n&&"cancel"===n.purchase&&cancelPurchase()}function b(){null!==s&&(clearTimeout(s),s=null)}export function kp1(n){t.u=!1,kp2(n)}export function kp2(n){b(),t.u||(n&&P(),null===s&&(s=setTimeout(function(){kp2(!0)},15e3)))}export function kp3(){b(),t.u=!0}function P(){t.u=!1,e||(e=Math.round(4294967295*Math.random())),A(_(KPAY_APP_ID,e,w(kcfg.KPAY_TEST_MODE,!f)))}function w(u,s){var e=1;return u&&(e|=2),(s||t.i)&&(e|=4),e|=32,n&&(e|=64),e}function A(n){try{if(0===messaging.peerSocket.readyState)return void messaging.peerSocket.send(n)}catch(n){console.error(JSON.stringify(n))}D(n)}function D(n){kp1(!1)}export function startPurchase(){kp0.sl||(kp0.te=!0,t.i=!0,t.u=!1,kp11(),kp1(!0))}export function cancelPurchase(){A(M()),kp0.sl||(kp0.te=!1,t.i=!1,kp11(),kp3(),g(),u=null)}function _(n,t,u){return{isKpayMsg:!0,type:0,appId:n,random:t,flags:u}}function M(){return{isKpayMsg:!0,type:3}}function x(n){return kcm.isKPayMessage(n)&&1===n.type}export function getStatus(){return kp0.sl?"licensed":kp0.ts&&!kp0.te?"trial":"unlicensed"}function T(n){if(y(n,e,w(kcfg.KPAY_TEST_MODE,!f))){var s=n.serverResponse;if("licensed"==s.status)kp0.sl=!0,kp11(),kp5(7,null,!1),t.t=!1,kp3();else if("unlicensed"==s.status){kp0.sl=!1,kp11(),7===u&&(u=null),t.t=!0;var a=Number(s.paymentCode),h=a!=o;o=a,"waitForUser"==s.purchaseStatus?kp5(5,a,h):"inProgress"==s.purchaseStatus&&kp5(6,a,h),kp1(!0)}else m(s)||kp1(!0)}else kp1(!0)}export function kp5(n,s,e){if((u!==n||e)&&(u=n,7!==n||t.t))try{a(n,s)||p(n,s)}catch(n){}}export function kp6(){return u}export function kp7(){u=null}export function setEventHandler(n){a=n}export function kp8(n,t,u){h=n,p=t,g=u}export function kp9(n,t,u){f=!0,v=n,k=t,m=u}export function kp10(n){y=n}function I(){try{var n=fs.statSync("kps");return!(n&&n.size)}catch(n){return!0}}function N(){I()||(kp0=fs.readFileSync("kps","cbor"))}export function kp11(){fs.writeFileSync("kps",kp0,"cbor")}