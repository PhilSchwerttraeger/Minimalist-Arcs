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
function on(){kc.kp10(an)}function fn(n){return new Uint8Array([255&n,(65280&n)>>8,(16711680&n)>>16,(4278190080&n)>>24])}function an(n,t,u){var s=n.serverResponse,r=0,i="trial"===s.status,l="licensed"===s.status;i?r=1:l&&(r=2);var d=new Uint8Array(i?29:25),rb=fn(t),fb=fn(u),tb=null;i&&(tb=fn(Number(s.trialDurationInSeconds)));var c=0,e=new vn;
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
return e.update(d),e.s()===s.checksum}/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
var hn="0123456789abcdef".split(""),ln=[-2147483648,8388608,32768,128],pn=[24,16,8,0],dn=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],gn=[];function vn(){gn[0]=gn[16]=gn[1]=gn[2]=gn[3]=gn[4]=gn[5]=gn[6]=gn[7]=gn[8]=gn[9]=gn[10]=gn[11]=gn[12]=gn[13]=gn[14]=gn[15]=0,this.o=gn,this.h=1779033703,this.l=3144134277,this.p=1013904242,this.g=2773480762,this.v=1359893119,this.k=2600822924,this.m=528734635,this.P=1541459225,this.A=this.start=this.D=0,this._=this.M=!1,this.T=!0}vn.prototype.update=function(n){if(!this._){for(var t=(n=new Uint8Array(n)).length,u,s=0,i,e=this.o;s<t;){for(this.M&&(this.M=!1,e[0]=this.A,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),i=this.start;s<t&&i<64;++s)e[i>>2]|=n[s]<<pn[3&i++];this.I=i,this.D+=i-this.start,i>=64?(this.A=e[16],this.start=i-64,this.hash(),this.M=!0):this.start=i}return this}},vn.prototype.N=function(){if(!this._){this._=!0;var n=this.o,i=this.I;n[16]=this.A,n[i>>2]|=ln[3&i],this.A=n[16],i>=56&&(this.M||this.hash(),n[0]=this.A,n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),n[15]=this.D<<3,this.hash()}},vn.prototype.hash=function(){var n=this.h,t=this.l,c=this.p,d=this.g,u=this.v,s=this.k,e=this.m,o=this.P,f=this.o,a,h,p,g,v,k,m,y,b,P,w;for(a=16;a<64;++a)h=((v=f[a-15])>>>7|v<<25)^(v>>>18|v<<14)^v>>>3,p=((v=f[a-2])>>>17|v<<15)^(v>>>19|v<<13)^v>>>10,f[a]=f[a-16]+h+f[a-7]+p<<0;for(w=t&c,a=0;a<64;a+=4)this.T?(y=704751109,o=(v=f[0]-210244248)-1521486534<<0,d=v+143694565<<0,this.T=!1):(h=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(y=n&t)^n&c^w,o=d+(v=o+(p=(u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(m=u&s^~u&e)+dn[a]+f[a])<<0,d=v+(k=h+g)<<0),h=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),g=(b=d&n)^d&t^y,e=c+(v=e+(p=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+(m=o&u^~o&s)+dn[a+1]+f[a+1])<<0,h=((c=v+(k=h+g)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),g=(P=c&d)^c&n^b,s=t+(v=s+(p=(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7))+(m=e&o^~e&u)+dn[a+2]+f[a+2])<<0,h=((t=v+(k=h+g)<<0)>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(w=t&c)^t&d^P,u=n+(v=u+(p=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(m=s&e^~s&o)+dn[a+3]+f[a+3])<<0,n=v+(k=h+g)<<0;this.h=this.h+n<<0,this.l=this.l+t<<0,this.p=this.p+c<<0,this.g=this.g+d<<0,this.v=this.v+u<<0,this.k=this.k+s<<0,this.m=this.m+e<<0,this.P=this.P+o<<0},vn.prototype.s=function(){this.N();var n=this.h,t=this.l,u=this.p,s=this.g,e=this.v,o=this.k,f=this.m,a=this.P;return hn[n>>28&15]+hn[n>>24&15]+hn[n>>20&15]+hn[n>>16&15]+hn[n>>12&15]+hn[n>>8&15]+hn[n>>4&15]+hn[15&n]+hn[t>>28&15]+hn[t>>24&15]+hn[t>>20&15]+hn[t>>16&15]+hn[t>>12&15]+hn[t>>8&15]+hn[t>>4&15]+hn[15&t]+hn[u>>28&15]+hn[u>>24&15]+hn[u>>20&15]+hn[u>>16&15]+hn[u>>12&15]+hn[u>>8&15]+hn[u>>4&15]+hn[15&u]+hn[s>>28&15]+hn[s>>24&15]+hn[s>>20&15]+hn[s>>16&15]+hn[s>>12&15]+hn[s>>8&15]+hn[s>>4&15]+hn[15&s]+hn[e>>28&15]+hn[e>>24&15]+hn[e>>20&15]+hn[e>>16&15]+hn[e>>12&15]+hn[e>>8&15]+hn[e>>4&15]+hn[15&e]+hn[o>>28&15]+hn[o>>24&15]+hn[o>>20&15]+hn[o>>16&15]+hn[o>>12&15]+hn[o>>8&15]+hn[o>>4&15]+hn[15&o]+hn[f>>28&15]+hn[f>>24&15]+hn[f>>20&15]+hn[f>>16&15]+hn[f>>12&15]+hn[f>>8&15]+hn[f>>4&15]+hn[15&f]+hn[a>>28&15]+hn[a>>24&15]+hn[a>>20&15]+hn[a>>16&15]+hn[a>>12&15]+hn[a>>8&15]+hn[a>>4&15]+hn[15&a]},on();