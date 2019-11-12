import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me } from "companion";



/**** BEGIN KPAY IMPORTS - REQUIRED ****/
/*
 * If you want (a lot of) logging from the K·pay library,
 * replace "release" with "debug" in the import path below
 */
import * as kpay from './kpay/release/kpay_companion.js';
import * as kpay_common from '../common/kpay/kpay_common.js';
/**** END KPAY IMPORTS ****/

/**** KPAY INIT - REQUIRED ***/
kpay.initialize();



settingsStorage.onchange = evt => {
  if (evt.key === "theme") {
    // Settings page changed theme
    sendValue(evt.key, evt.newValue);
  }
};

// Settings were changed while the companion was not running
if (me.launchReasons.settingsChanged) {
  //sendValue("auto", settingsStorage.getItem("auto"));
  //sendValue("dawn", settingsStorage.getItem("dawn"));
  //sendValue("dusk", settingsStorage.getItem("dusk"));
  sendValue("theme", settingsStorage.getItem("theme"));
  console.log("theme", settingsStorage.getItem("theme"));
}

function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}

function sendSettingData(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log("No peerSocket connection");
  }
}


// Restore previously saved settings and send to the device
function restoreSettings() {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key && key === "theme") {
      sendValue(key, settingsStorage.getItem(key));
    }
  }
}

// Message socket opens
messaging.peerSocket.onopen = () => {
  restoreSettings();
};