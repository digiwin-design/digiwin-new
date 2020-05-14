var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('video', {
		height: '100%',
		width: '100%',
		videoId: '7PUDjGWVwoY',
		playerVars: {
	        controls: 0,
	        showinfo: 0,
	        modestbranding: 1,
	        rel:0,
	        wmode: 'transparent'
		},
		events: {
		'onReady': onPlayerReady
		}
	});

function onPlayerReady(event) {
	event.target.playVideo();
}

}
