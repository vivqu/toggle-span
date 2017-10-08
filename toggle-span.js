(
  function() {
  'use strict';
  var addToggleSpanEventListener = (toggleSpan) => {
    toggleSpan.addEventListener('open-span', openToggleSpan);
    toggleSpan.addEventListener('link-hover', onMouseOver);
    toggleSpan.addEventListener('remove-link-hover', onMouseOut);
  };
  var removeToggleSpanEventListener = (toggleSpan) => {
    toggleSpan.removeEventListener('open-span', openToggleSpan);
    toggleSpan.removeEventListener('link-hover', onMouseOver);
    toggleSpan.removeEventListener('remove-link-hover', onMouseOut);
  };
  var openToggleSpan = (e) => {
    var openId = e.target.opensId;
    if (openId != null) {
      var toggleSpanArray = document.getElementsByTagName('toggle-span');
      for (i = 0; i < toggleSpanArray.length; i++) {
        var toggleSpan = toggleSpanArray[i];
        var didOpen = toggleSpan.shouldOpenWithId(openId);
        if (didOpen) {
          addToggleSpanEventListener(toggleSpan);
        }
        var didClose = toggleSpan.shouldCloseWithId(openId);
        if (didClose) {
          removeToggleSpanEventListener(toggleSpan);
        }
      }
    }
  };
  var allToggleSpansForId = (openId) => {
    var closeSpans = document.querySelectorAll('toggle-span[did-open][closed-by-id="' + openId + '"]');
    var openSpans = document.querySelectorAll('toggle-span[no-link][closed-by-id="' + openId + '"]');
    var openSpans = document.querySelectorAll('toggle-span[closed-by-id="' + openId + '"]');
    var allSpans = [];
    for (i = 0; i < closeSpans.length; i++) {
      allSpans.push(closeSpans[i]);
    }
    for (i = 0; i < openSpans.length; i++) {
      allSpans.push(openSpans[i]);
    }
    return allSpans;
  };
  var onMouseOver = (e) => {
    var currentSpan = e.target;
    var openId = currentSpan.opensId;
    var toggleSpans = allToggleSpansForId(openId);
    for (i = 0; i < toggleSpans.length; i++) {
      var toggleSpan = toggleSpans[i];
      toggleSpan.setHighlightState(true);
    }
  };
  var onMouseOut = (e) => {
    var currentSpan = e.target;
    var openId = currentSpan.opensId;
    var toggleSpans = allToggleSpansForId(openId);
    for (i = 0; i < toggleSpans.length; i++) {
      var toggleSpan = toggleSpans[i];
      toggleSpan.setHighlightState(false);
    }
  };

  var toggleSpanArray = document.querySelectorAll("toggle-span[did-open]:not([no-link])");
  var i = 0;
  for (; i < toggleSpanArray.length; i++) {
    var toggleSpan = toggleSpanArray[i];
    addToggleSpanEventListener(toggleSpan);
  };
})();
