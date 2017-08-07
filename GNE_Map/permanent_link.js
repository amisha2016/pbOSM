  if (window.location.hash !== '') {
        // try to restore center, zoom-level and rotation from the URL
        var hash = window.location.hash.replace('#map=', '');
        var parts = hash.split('/');
        if (parts.length === 4) {
          zoom = parseInt(parts[0], 10);
          center = [
            parseFloat(parts[1]),
            parseFloat(parts[2])
          ];
          rotation = parseFloat(parts[3]);
        }
      }
var shouldUpdate = true;
      var view = map.getView();
      var updatePermalink = function() {
        if (!shouldUpdate) {
          // do not update the URL when the view was changed in the 'popstate' handler
          shouldUpdate = true;
          return;
        }

var center = view.getCenter();
        var hash = '#map=' +
            view.getZoom() + '/' +
            Math.round(center[0] * 100) / 100 + '/' +
            Math.round(center[1] * 100) / 100 + '/' +
            view.getRotation();
        var state = {
          zoom: view.getZoom(),
          center: view.getCenter(),
          rotation: view.getRotation()
        };
        window.history.pushState(state, 'map', hash);
      };

 map.on('moveend', updatePermalink);

 window.addEventListener('popstate', function(event) {
        if (event.state === null) {
          return;
        }
        map.getView().setCenter(event.state.center);
        map.getView().setZoom(event.state.zoom);
        map.getView().setRotation(event.state.rotation);
        shouldUpdate = false;
      });

