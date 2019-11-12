/*
* K·Pay Integration Library - v1.2.11 - Copyright Kiezel 2018
* Last Modified: 2018-10-31
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

/**
  When set to true, you can test the purchasing of your app without having to pay for real.
  When set to true, trial times will always be 30 seconds (only when time trial is enabled here and on the server)
  
  Test purchases only, set to false before releasing or users can get your app for free!
*/
export var KPAY_TEST_MODE = false;

/**
  Default messages shown to the user in different stages of the purchase.
  Only used when the messages are handled by KPay and not overridden by your app
  
  You can change the messages to your liking here. Make sure to check if the changed message still fits the display.

  It is also possible to configure a custom url in your product settings on our website so its shows your personalized purchase page to the customers.
*/
export var KPAY_CODE_AVAILABLE_MSG = "To continue using Minimalist Arcs please visit kzl.io/code and enter this code:";
export var KPAY_PURCHASE_STARTED_MSG = "Please complete the purchase process on kzl.io/code to unlock Minimalist Arcs";


/**
  Configure wether you want the "paid app" popup to be displayed to the user after installing this app.
  This will be required by Fitbit for new paid apps and updates of paid apps after August 1st 2018
  
  You can change the text here. 
  
  If the text does not decently fit the screen anymore after big changes to the length, you also have to 
  modify it in the kpay.gui file so it uses the correct font size and fits decently. 
  
  Small changes can be done here only.
*/
export var KPAY_SHOW_PAID_APP_POPUP = true;
export var KPAY_PAID_APP_POPUP_TEXT = "This is a paid app. After a 1 hour free trial, it requires a one-time payment of $1.19 to keep using it.";

