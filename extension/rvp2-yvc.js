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

/**
 * To test and debug unsigned extensions, enter - about:debugging in the query string.
 */
(function(d) {

  console.info('Init extension - rvp2-yvc@sensor-dream.ru. Check of player-mediator is OK.');


  let chk = function(b) {

    Array('entity-template__media', 'entity-template__information', 'divider', 'ratings-list ratings-list_with-stars ratings-list_with-pscore').forEach(e => {
      let c = b[0].getElementsByClassName(e);
      if (c.length > 0) {
        c[0].remove();
        console.info('Child element with class ' + e + ', removed.');
      }
    });

    if (b[0].getElementsByClassName('rvp2-yvc-sensor-dream-ru').length == 0) {
      b[0].insertAdjacentHTML("afterbegin", '<div class="related__header typo typo_text_l typo_line_m typo_type_bold rvp2-yvc-sensor-dream-ru">Modified - rvp2-yvc@sensor-dream.ru</div>');
      console.info('Added a message from the rvp2-yvc@sensor-dream.ru addon');
    }
  }

  d.addEventListener("DOMNodeInserted", (event) => {
    let a = d.getElementsByClassName('entity-template player-mediator i-bem');
    a.length > 0 && chk(a);
  }, false);

})(document);
