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

var D = null, x = null, z = null, E = null, I = null, N = null, O = null, R = null;

function U() {
    console.log("KPay_dialogs - kpay_dialogs initialize called!"), me.permissions.granted("access_internet") || (console.log("KPay - ERROR: internet permission not enabled!"), 
    Y('This app requires the "Internet" permission to be granted')), kc.kp8(J, W, G);
}

function J(n) {
    console.log("KPay_dialogs - _mainLibInitialized()"), n && kcfg.KPAY_SHOW_PAID_APP_POPUP && (console.log("KPay_dialogs - Fresh install detected; showing paid app popup..."), 
    H());
}

function L(n) {
    return document.getElementById(n);
}

function q(n, e) {
    n && (n.style.display = e ? "inline" : "none");
}

function H() {
    var n = L("paidAppPopup");
    L("paidAppPopupText").getElementById("#copy/text").text = kcfg.KPAY_PAID_APP_POPUP_TEXT, 
    L("btnPaidAppOk").onclick = function(e) {
        q(n, !1);
    }, L("btnPaidAppAlreadyPaid").onclick = function(e) {
        var t = L("alreadyPaidPopup");
        L("btnAlreadyPaidOk").onclick = function(n) {
            q(t, !1);
        }, q(t, !0), q(n, !1);
    }, q(n, !0);
}

function W(n, e) {
    switch (console.log("KPay_dialogs - _handleEvent(e == " + n + ", extraData == " + e + ")"), 
    n) {
      case 5:
        j(kcfg.KPAY_CODE_AVAILABLE_MSG, e);
        break;

      case 6:
        j(kcfg.KPAY_PURCHASE_STARTED_MSG, e);
        break;

      case 7:
        B();
    }
}

function Y(n) {
    console.log("KPay_dialogs - _showError() - message == " + n), D || (D = L("kpay_errorDialog"), 
    x = L("kpay_errorMessage")), x.text = n, Q(), q(D, !0), X();
}

function j(n, e) {
    console.log("KPay_dialogs - _showTrialEnded() - message == " + n + "; code == " + e), 
    z || (z = L("kpay_trialEndedDialog"), E = L("kpay_trialEndedMessage"), I = L("kpay_trialEndedCode")), 
    I.text = Z(e), E.text = n, Q(), q(z, !0), X();
}

function B() {
    console.log("KPay_dialogs - _showPurchaseSuccess()"), R || (R = L("kpay_purchaseSuccessDialog")), 
    Q(), q(R, !0), z && q(z, !1), X("celebration-long"), setTimeout(G, 5e3);
}

function G() {
    console.log("KPay_dialogs - _hideAlert()"), V(), D && q(D, !1), z && q(z, !1), R && q(R, !1);
}

function Q() {
    N || (N = L("kpay_timeInDialog"), O = function() {
        var n = new Date(), e = ("0" + n.getHours()).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2);
        N.text = e;
    }, clock.addEventListener("tick", function() {
        N && "inline" == N.style.display && O();
    })), N && (O(), q(N, !0));
}

function V() {
    N && q(N, !1);
}

function X(n) {
    display.poke(), vibration.start(n || "nudge-max");
}

function Z(n) {
    for (var e = ""; n > 0; ) e = String.fromCharCode(16 + n % 10) + e, n = n / 10 | 0;
    return e;
}

U();

