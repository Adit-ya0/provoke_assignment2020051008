
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'key': 'AIzaSyDmdyBSh9N4y8PaaDY_huVeRLXfOIaH9UA',
        },
    });
}

function loadtheVideo() {
    const videoId = document.getElementById('videoIdInput').value;
    if (videoId.trim() !== '') {
        if (player) {
            player.loadVideoById(videoId);
        } else {
            setTimeout(() => {
                loadtheVideo();
            }, 1000);
        }
    } else {
        alert('Please enter a valid YouTube Video ID.');
    }
}
