/*
* K·Pay Integration Library - v1.2.11 - Copyright Kiezel 2018
* Last Modified: 2017-10-19
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

import * as kc from './kpay_core.js';

var KPAY_SECRET = [88, 211, 209, 7, 239, 147, 60, 228, 138, 175, 131, 37, 203, 84, 61, 99];
function ln() {
    console.log("KPay_msg_validation - kpay_msg_validation initialize called!"), kc.kp10(un);
}

function rn(n) {
    return new Uint8Array([ 255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24 ]);
}

function un(n, e, t) {
    var a = n.serverResponse;
    console.log("KPay - _validateMessage()"), console.log("KPay - validation input - reponse.status: " + a.status), 
    console.log("KPay - validation input - random: " + e), console.log("KPay - validation input - flags: " + t), 
    console.log("KPay - validation input - trial duration in seconds: " + (i ? a.trialDurationInSeconds : "n/a"));
    var r = 0, i = "trial" === a.status, l = "licensed" === a.status;
    i ? r = 1 : l && (r = 2);
    var d = new Uint8Array(i ? 29 : 25), rb = rn(e), fb = rn(t), tb = null;
    i && (tb = rn(Number(a.trialDurationInSeconds)));
    var c = 0, s = new Pn();
    
	d[c++] = KPAY_SECRET[9];
	d[c++] = KPAY_SECRET[4];
	d[c++] = rb[0];
	d[c++] = KPAY_SECRET[7];
	d[c++] = KPAY_SECRET[3];
	d[c++] = KPAY_SECRET[10];
	d[c++] = KPAY_SECRET[15];
	d[c++] = r;
	d[c++] = rb[3];
	d[c++] = KPAY_SECRET[1];
	d[c++] = fb[0];
	d[c++] = fb[1];
	d[c++] = KPAY_SECRET[13];
	if (i) {
		d[c++] = tb[0];
		d[c++] = tb[2];
	}
	d[c++] = fb[3];
	d[c++] = KPAY_SECRET[12];
	if (i) {
		d[c++] = tb[1];
	}
	d[c++] = KPAY_SECRET[8];
	d[c++] = KPAY_SECRET[11];
	d[c++] = fb[2];
	d[c++] = KPAY_SECRET[6];
	d[c++] = rb[2];
	d[c++] = KPAY_SECRET[14];
	if (i) {
		d[c++] = tb[3];
	}
	d[c++] = KPAY_SECRET[5];
	d[c++] = KPAY_SECRET[2];
	d[c++] = KPAY_SECRET[0];
	d[c++] = rb[1];
    s.update(d);
    var o = s.o();
    return console.log("KPay - _validateMessage(); generated: " + o + "; received: " + a.checksum), 
    o === a.checksum;
}

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
var fn = "0123456789abcdef".split(""), hn = [ -2147483648, 8388608, 32768, 128 ], dn = [ 24, 16, 8, 0 ], yn = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], gn = [];

function Pn() {
    gn[0] = gn[16] = gn[1] = gn[2] = gn[3] = gn[4] = gn[5] = gn[6] = gn[7] = gn[8] = gn[9] = gn[10] = gn[11] = gn[12] = gn[13] = gn[14] = gn[15] = 0, 
    this.l = gn, this.u = 1779033703, this.h = 3144134277, this.g = 1013904242, this.P = 2773480762, 
    this.p = 1359893119, this.m = 2600822924, this._ = 528734635, this.K = 1541459225, 
    this.v = this.start = this.k = 0, this.S = this.C = !1, this.M = !0;
}

Pn.prototype.update = function(n) {
    if (!this.S) {
        for (var e = (n = new Uint8Array(n)).length, t, a = 0, i, s = this.l; a < e; ) {
            for (this.C && (this.C = !1, s[0] = this.v, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), 
            i = this.start; a < e && i < 64; ++a) s[i >> 2] |= n[a] << dn[3 & i++];
            this.T = i, this.k += i - this.start, i >= 64 ? (this.v = s[16], this.start = i - 64, 
            this.hash(), this.C = !0) : this.start = i;
        }
        return this;
    }
}, Pn.prototype.A = function() {
    if (!this.S) {
        this.S = !0;
        var n = this.l, i = this.T;
        n[16] = this.v, n[i >> 2] |= hn[3 & i], this.v = n[16], i >= 56 && (this.C || this.hash(), 
        n[0] = this.v, n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), 
        n[15] = this.k << 3, this.hash();
    }
}, Pn.prototype.hash = function() {
    var n = this.u, e = this.h, c = this.g, d = this.P, t = this.p, a = this.m, s = this._, o = this.K, u = this.l, f, h, y, g, P, p, m, _, K, v, k;
    for (f = 16; f < 64; ++f) h = ((P = u[f - 15]) >>> 7 | P << 25) ^ (P >>> 18 | P << 14) ^ P >>> 3, 
    y = ((P = u[f - 2]) >>> 17 | P << 15) ^ (P >>> 19 | P << 13) ^ P >>> 10, u[f] = u[f - 16] + h + u[f - 7] + y << 0;
    for (k = e & c, f = 0; f < 64; f += 4) this.M ? (_ = 704751109, o = (P = u[0] - 210244248) - 1521486534 << 0, 
    d = P + 143694565 << 0, this.M = !1) : (h = (n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10), 
    g = (_ = n & e) ^ n & c ^ k, o = d + (P = o + (y = (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)) + (m = t & a ^ ~t & s) + yn[f] + u[f]) << 0, 
    d = P + (p = h + g) << 0), h = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), 
    g = (K = d & n) ^ d & e ^ _, s = c + (P = s + (y = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + (m = o & t ^ ~o & a) + yn[f + 1] + u[f + 1]) << 0, 
    h = ((c = P + (p = h + g) << 0) >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), 
    g = (v = c & d) ^ c & n ^ K, a = e + (P = a + (y = (s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7)) + (m = s & o ^ ~s & t) + yn[f + 2] + u[f + 2]) << 0, 
    h = ((e = P + (p = h + g) << 0) >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10), 
    g = (k = e & c) ^ e & d ^ v, t = n + (P = t + (y = (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (m = a & s ^ ~a & o) + yn[f + 3] + u[f + 3]) << 0, 
    n = P + (p = h + g) << 0;
    this.u = this.u + n << 0, this.h = this.h + e << 0, this.g = this.g + c << 0, this.P = this.P + d << 0, 
    this.p = this.p + t << 0, this.m = this.m + a << 0, this._ = this._ + s << 0, this.K = this.K + o << 0;
}, Pn.prototype.o = function() {
    this.A();
    var n = this.u, e = this.h, t = this.g, a = this.P, s = this.p, o = this.m, u = this._, f = this.K;
    return fn[n >> 28 & 15] + fn[n >> 24 & 15] + fn[n >> 20 & 15] + fn[n >> 16 & 15] + fn[n >> 12 & 15] + fn[n >> 8 & 15] + fn[n >> 4 & 15] + fn[15 & n] + fn[e >> 28 & 15] + fn[e >> 24 & 15] + fn[e >> 20 & 15] + fn[e >> 16 & 15] + fn[e >> 12 & 15] + fn[e >> 8 & 15] + fn[e >> 4 & 15] + fn[15 & e] + fn[t >> 28 & 15] + fn[t >> 24 & 15] + fn[t >> 20 & 15] + fn[t >> 16 & 15] + fn[t >> 12 & 15] + fn[t >> 8 & 15] + fn[t >> 4 & 15] + fn[15 & t] + fn[a >> 28 & 15] + fn[a >> 24 & 15] + fn[a >> 20 & 15] + fn[a >> 16 & 15] + fn[a >> 12 & 15] + fn[a >> 8 & 15] + fn[a >> 4 & 15] + fn[15 & a] + fn[s >> 28 & 15] + fn[s >> 24 & 15] + fn[s >> 20 & 15] + fn[s >> 16 & 15] + fn[s >> 12 & 15] + fn[s >> 8 & 15] + fn[s >> 4 & 15] + fn[15 & s] + fn[o >> 28 & 15] + fn[o >> 24 & 15] + fn[o >> 20 & 15] + fn[o >> 16 & 15] + fn[o >> 12 & 15] + fn[o >> 8 & 15] + fn[o >> 4 & 15] + fn[15 & o] + fn[u >> 28 & 15] + fn[u >> 24 & 15] + fn[u >> 20 & 15] + fn[u >> 16 & 15] + fn[u >> 12 & 15] + fn[u >> 8 & 15] + fn[u >> 4 & 15] + fn[15 & u] + fn[f >> 28 & 15] + fn[f >> 24 & 15] + fn[f >> 20 & 15] + fn[f >> 16 & 15] + fn[f >> 12 & 15] + fn[f >> 8 & 15] + fn[f >> 4 & 15] + fn[15 & f];
}, ln();

