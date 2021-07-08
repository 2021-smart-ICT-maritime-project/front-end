// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {   
        videoID : "L5kEcs5ug4s",
        playerVars : {
            autoplay:0,
            loop:true,
            playlist : 'L5kEcs5ug4s',
            start:0,
            end:19,
            controls:0,
        },

    events: {
      'onReady': function(event){
          event.target.mute()
      },
    }
  });
}