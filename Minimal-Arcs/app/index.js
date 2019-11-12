import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import * as messaging from "messaging";



/**** BEGIN KPAY IMPORTS - REQUIRED ****/
/*
 * If you want (a lot of) logging from the KPay library,
 * replace "release" with "debug" in the import paths for
 * ALL KPAY IMPORTS below
 *    ==> DO NOT MIX RELEASE AND DEBUG IMPORTS!
 */
// required imports
import * as kpay from './kpay/release/kpay.js';
import * as kpay_common from '../common/kpay/kpay_common.js';

/* Choose which type of "companion => phone communications" you want to use:
 *   - file transfer: is more reliable, uses more memory
 *          ==> import './kpay/release/kpay_filetransfer.js';
 *   - normal messaging: less reliable then file transfer, might cause frustration with the user if messaging fails, but uses less memory
 *          ==> import './kpay/release/kpay_messaging.js';
 * If you do not run into memory issues with your app or clockface, we recommend you use the file transfer communications
 */
import './kpay/release/kpay_filetransfer.js';
//import './kpay/release/kpay_messaging.js';

// optional imports, remove if not needed to save memory
import './kpay/release/kpay_dialogs.js';			// remove if you handle KPay dialogs yourself

// remove this is you want to choose yourself when the purchase starts,
// leave it in if you want the purchase to start automatically (either after a long trial or immediately at startup of the app)
// If you want the purchase to start immediately after install, just set the trial time to 0 in the product settings in your kpay account
import './kpay/release/kpay_time_trial.js';

/*
 * Removing the import below can save up to 8.5kb of extra memory.
 *
 * BEWARE: Only do this when you really need that extra memory and cannot get it by optimizing your own code!
 * Removing this import will disable the message checksum validation, which means the KPay lib
 * can no longer detect if the messages received from the KPay server are tampered with.
 * Eventhough the risk of your app being cracked are very small, removing this import makes it a possibility!
 */
import './kpay/release/kpay_msg_validation.js';			// remove if you need extra memory and are willing to take the risk described above
/**** END KPAY IMPORTS ****/

/**** KPAY INIT - REQUIRED ***/
kpay.initialize();



// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
const digitalClock = document.getElementById("digitalClock");
let triggerRect = document.getElementById("triggerRect");
let digitalClockIsVisible = false;

const arcSeconds = document.getElementById("arcSeconds");
const arcMinutes = document.getElementById("arcMinutes");
const arcHours = document.getElementById("arcHours");

const arcSecondsUnderlay = document.getElementById("arcSecondsUnderlay");
const arcMinutesUnderlay = document.getElementById("arcMinutesUnderlay");
const arcHoursUnderlay = document.getElementById("arcHoursUnderlay");

const arcSecondsStart = document.getElementById("arcSecondsStart");
const arcSecondsEnd = document.getElementById("arcSecondsEnd");
const arcMinutesStart = document.getElementById("arcMinutesStart");
const arcMinutesEnd = document.getElementById("arcMinutesEnd");
const arcHoursStart = document.getElementById("arcHoursStart");
const arcHoursEnd = document.getElementById("arcHoursEnd");

const underlays = [
  {
    element: arcSecondsUnderlay,
    parent: arcSeconds
  },
  {
    element: arcMinutesUnderlay,
    parent: arcMinutes
  },
  {
    element: arcHoursUnderlay,
    parent: arcHours
  }
];

let root = document.getElementById('root');
const screenHeight = root.height;
const screenWidth = root.width;
if(screenHeight < 260) digitalClock.style.fontSize = 22;
const arcThickness = 16;
const arcStartAngle = 0;

console.log("screenHeight: " + screenHeight);
console.log("screenWidth: " + screenWidth);

const arcs = [
  {
    element: arcSeconds,
    padding: screenHeight > 260 ? 16 : 8,
    multiplierToAngle: 6
  },    
  {
    element: arcMinutes,
    padding: screenHeight > 260 ? 48 : 40,
    multiplierToAngle: 6
  },    
  {
    element: arcHours,
    padding: screenHeight > 260 ? 80 : 72,
    multiplierToAngle: 30
  }
];

const makeRoundedEdges = (startElement, endElement, parentElement, timeBase) => {  
  startElement.cx = screenWidth / 2;
  startElement.cy = parentElement.padding + arcThickness/2;
  startElement.r = arcThickness/2;

  const rotationAngle = ((180 + timeBase * parentElement.multiplierToAngle) * Math.PI / 180);
  const y = screenHeight/2 - startElement.cy;
  const x = 0;
  endElement.cx = (x * Math.cos(rotationAngle) - y * Math.sin(rotationAngle)) + screenWidth/2;
  endElement.cy = (y * Math.cos(rotationAngle) + x * Math.sin(rotationAngle)) + screenHeight/2;
  endElement.fill = "white";
  endElement.r = arcThickness/2;
}

const colorizeArcs = (colorSeconds, colorMinutes, colorHours, colorFont) => {
  arcSeconds.style.fill = colorSeconds;
  arcMinutes.style.fill = colorMinutes;
  arcHours.style.fill = colorHours;  
  arcSecondsStart.style.fill = colorSeconds;
  arcSecondsEnd.style.fill = colorSeconds;
  arcMinutesStart.style.fill = colorMinutes;
  arcMinutesEnd.style.fill = colorMinutes;
  arcHoursStart.style.fill = colorHours;
  arcHoursEnd.style.fill = colorHours;
  digitalClock.style.fill = colorFont;
}

  
// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  
  if (preferences.clockDisplay === "12h") {
    // 12h format
    let displayHours = hours % 12 || 12;;
    digitalClock.text = `${util.zeroPad(displayHours)}:${util.zeroPad(minutes)}`;
  } else {
    // 24h format
    digitalClock.text = `${util.zeroPad(hours)}:${util.zeroPad(minutes)}`;
  }
  
  hours = hours % 12 || 12;


  // use to test full circles
  const offset = 0;
  
  arcs[0].timeValue = seconds + offset;
  arcs[1].timeValue = minutes + offset;
  arcs[2].timeValue = hours + offset;
  
  // Colored Arcs
  arcs.map(arc => {
    arc.element.sweepAngle = arc.timeValue * arc.multiplierToAngle;
    arc.element.y = arc.padding;
    arc.element.height = screenHeight - 2 * arc.padding;
    arc.element.x = (( screenWidth - screenHeight ) / 2 ) + arc.padding;
    arc.element.width = arc.element.height;
    arc.element.arcWidth = arcThickness;
    arc.element.startAngle = arcStartAngle;
  })
  
  // Grey Underlays  
  underlays.map(underlay => {
    underlay.element.x = underlay.parent.x;  
    underlay.element.y = underlay.parent.y;
    underlay.element.height = underlay.parent.height;
    underlay.element.width = underlay.parent.width;
    underlay.element.sweepAngle = 360;
    underlay.element.arcWidth = arcThickness;
    underlay.element.startAngle = arcStartAngle;
  });
  
  // Rounded Edges
  makeRoundedEdges(arcSecondsStart, arcSecondsEnd, arcs[0], seconds);
  makeRoundedEdges(arcMinutesStart, arcMinutesEnd, arcs[1], minutes);
  makeRoundedEdges(arcHoursStart, arcHoursEnd, arcs[2], hours);  

  triggerRect.onclick = (e) => {
    digitalClockIsVisible = !digitalClockIsVisible;
    digitalClockIsVisible ? digitalClock.animate("enable") : digitalClock.animate("disable");
    digitalClockIsVisible ? digitalClock.animate("enable") : digitalClock.animate("disable");
  }
  
  digitalClock.onclick = (e) => {
    digitalClockIsVisible = !digitalClockIsVisible;
    digitalClockIsVisible ? digitalClock.animate("enable") : digitalClock.animate("disable");
    digitalClockIsVisible ? digitalClock.animate("enable") : digitalClock.animate("disable");
  }
  
  
  messaging.peerSocket.onmessage = function(evt) {
    const theme = evt.data.value.values[0].id;
    console.log(theme);
    
    if(evt.data.key === "theme"){
      if(theme === "ElegantGrey") {
        colorizeArcs("#444444", "#595959", "#707070", "#898989");
      } 
      if(theme === "PowerfulRed") {
        colorizeArcs("#961313", "#AD0606", "#C10505", "#D62828");
      } 
      if(theme === "MatrixGreen") {
        colorizeArcs("#0A5600", "#176D0E", "#24840B", "#2BA50D");
      } 
      if(theme === "DeepBlue") {
        colorizeArcs("#15477C", "#195493", "#1D63AD", "#3C84D1");
      } 
      if(theme === "PlayfulPink") {
        colorizeArcs("#9B1448", "#A53860", "#ED4E7D", "#FF598A");
      } 
      if(theme === "PlainWhite") {
        colorizeArcs("white", "white", "white", "white");
      } 
    }
  }
}
