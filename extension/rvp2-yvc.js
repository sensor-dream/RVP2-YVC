/**
 * @Author: sensor-dream
 * @Email: sensor-dream@sensor-dream.ru
 * @Copyright © sensor-dream. All rights reserved. Contacts: sensor-dream@sensor-dream.ru
 * @Copyright © sensor-dream. All rights reserved. Contacts: sensor-dream@sensor-dream.ru
 * @Copyright © Sensor-Dream Boxed System (SDBS). Contacts: sensor-dream@sensor-dream.ru
 * @License: http://www.apache.org/licenses/LICENSE-2.0
 * @Site: https://github.com/sensor-dream/RVP2-YVC
 * @File: rvp2-yvc.js
 * @Creation date file: 10.02.2021, 04:15:27
 */

document.addEventListener("DOMNodeInserted", (event) => {

    console.info('Init extension - rvp2-yvc@sensor-dream.ru. Check of listening html collections')

  let elements = [
    'video-player2 video-player2_dynamic'
  ];

  for (let element of elements) {
    let obj = document.getElementsByClassName(element);
    if (obj.length > 0) {
      for (let i = 0, len = obj.length; i < len; i++) {
        console.info('Check is OK, found classes : ' + element + ' and the element with these classes removed.');
        obj[i].remove();
      }
    }
  }

}, false);
