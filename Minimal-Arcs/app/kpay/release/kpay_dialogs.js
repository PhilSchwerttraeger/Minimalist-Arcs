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

import document from "document";
import { vibration } from "haptics";
import { display } from "display";
import clock from "clock";
import { me } from "appbit";
import * as kc from './kpay_core.js';
import * as kcfg from '../kpay_config.js';
import * as kp from './kpay.js';
import * as kcm from '../../../common/kpay/kpay_common.js';

var S=null,U=null,E=null,K=null,O=null,C=null,F=null,q=null;function J(){me.permissions.granted("access_internet")||H('This app requires the "Internet" permission to be granted'),kc.kp8(Y,G,R)}function Y(n){n&&kcfg.KPAY_SHOW_PAID_APP_POPUP&&B()}function j(n){return document.getElementById(n)}function z(n,t){n&&(n.style.display=t?"inline":"none")}function B(){var n=j("paidAppPopup");j("paidAppPopupText").getElementById("#copy/text").text=kcfg.KPAY_PAID_APP_POPUP_TEXT,j("btnPaidAppOk").onclick=function(t){z(n,!1)},j("btnPaidAppAlreadyPaid").onclick=function(t){var u=j("alreadyPaidPopup");j("btnAlreadyPaidOk").onclick=function(n){z(u,!1)},z(u,!0),z(n,!1)},z(n,!0)}function G(n,t){switch(n){case 5:L(kcfg.KPAY_CODE_AVAILABLE_MSG,t);break;case 6:L(kcfg.KPAY_PURCHASE_STARTED_MSG,t);break;case 7:Q()}}function H(n){S||(S=j("kpay_errorDialog"),U=j("kpay_errorMessage")),U.text=n,V(),z(S,!0),X()}function L(n,t){E||(E=j("kpay_trialEndedDialog"),K=j("kpay_trialEndedMessage"),O=j("kpay_trialEndedCode")),O.text=Z(t),K.text=n,V(),z(E,!0),X()}function Q(){q||(q=j("kpay_purchaseSuccessDialog")),V(),z(q,!0),E&&z(E,!1),X("celebration-long"),setTimeout(R,5e3)}function R(){W(),S&&z(S,!1),E&&z(E,!1),q&&z(q,!1)}function V(){C||(C=j("kpay_timeInDialog"),F=function(){var n=new Date,t=("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2);C.text=t},clock.addEventListener("tick",function(){C&&"inline"==C.style.display&&F()})),C&&(F(),z(C,!0))}function W(){C&&z(C,!1)}function X(n){display.poke(),vibration.start(n||"nudge-max")}function Z(n){for(var t="";n>0;)t=String.fromCharCode(16+n%10)+t,n=n/10|0;return t}J();