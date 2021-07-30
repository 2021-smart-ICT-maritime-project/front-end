const video_elem = document.querySelector('video');
if (video_elem.requestFullscreen) {
        video_elem.requestFullscreen();
        } else if (video_elem.mozRequestFullScreen) {
          video_elem.mozRequestFullScreen();
        } else if (video_elem.webkitRequestFullscreen) {
          video_elem.webkitRequestFullscreen();
        }

