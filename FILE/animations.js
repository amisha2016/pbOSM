// A bounce easing method (from https://github.com/DmitryBaranovskiy/raphael).
      function bounce(t) {
        var s = 7.5625, p = 2.75, l;
        if (t < (1 / p)) {
          l = s * t * t;
        } else {
          if (t < (2 / p)) {
            t -= (1.5 / p);
            l = s * t * t + 0.75;
          } else {
            if (t < (2.5 / p)) {
              t -= (2.25 / p);
              l = s * t * t + 0.9375;
            } else {
              t -= (2.625 / p);
              l = s * t * t + 0.984375;
            }
          }
        }
        return l;
      }

      // An elastic easing method (from https://github.com/DmitryBaranovskiy/raphael).
      function elastic(t) {
        return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
      }

      function onClick(id, callback) {
        document.getElementById(id).addEventListener('click', callback);
      }

      onClick('rotate-left', function() {
        view.animate({
          rotation: view.getRotation() + Math.PI / 2
        });
      });

      onClick('rotate-right', function() {
        view.animate({
          rotation: view.getRotation() - Math.PI / 2
        });
      });

      onClick('pan-to-main_gate', function() {
        view.animate({
          center: main_gate,
          duration: 2000
        });
      });

      onClick('pan-to-boyshostel', function() {
        view.animate({
          center: boyshostel,
          duration: 2000
        });
      });

      onClick('elastic-to-auditorium', function() {
        view.animate({
          center: auditorium,
          duration: 2000,
          easing: elastic
        });
      });

      onClick('bounce-to-workshop', function() {
        view.animate({
          center: workshop,
          duration: 2000,
          easing: bounce
        });
      });

      onClick('spin-to-mba_block', function() {
        view.animate({
          center: mba_block,
          rotation: 2 * Math.PI,
          duration: 2000
        });
      });

      function flyTo(location, done) {
        var duration = 2000;
        var zoom = view.getZoom();
        var parts = 2;
        var called = false;
        function callback(complete) {
          --parts;
          if (called) {
            return;
          }
          if (parts === 0 || !complete) {
            called = true;
            done(complete);
          }
        }
  view.animate({
          center: location,
          duration: duration
        }, callback);
        view.animate({
          zoom: zoom - 1,
          duration: duration / 2
        }, {
          zoom: zoom,
          duration: duration / 2
        }, callback);
      }

      onClick('fly-to-pg_block', function() {
        flyTo(pg_block, function() {});
      });
      onClick('pan-to-sports', function() {
        view.animate({
          center: sports,
          duration: 2000
        });
      });
      onClick('pan-to-library', function() {
        view.animate({
          center: library,
          duration: 2000
        });
      });

      function tour() {
        var locations = [main_gate, pg_block, mba_block, auditorium, library, workshop,sports, boyshostel];
        var index = -1;
        function next(more) {
          if (more) {
            ++index;
            if (index < locations.length) {
              var delay = index === 0 ? 0 : 4000;
              setTimeout(function() {
                flyTo(locations[index], next);
              }, delay);
            } else {
              alert('Tour complete');
            }
          } else {
            alert('Tour cancelled');
          }
        }
        next(true);
      }

      onClick('tour', tour);


