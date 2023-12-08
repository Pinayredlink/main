//body
let body = document.body;

//header
const header = document.createElement('div');
header.classList.add('header');
body.appendChild(header);//add header div to body
//logo
const logo = document.createElement('img');
logo.id = 'logo';
logo.src = 'assets/logo/prl.png';
logo.height = '56';
logo.width = '256';
header.appendChild(logo);



//main Container
const mainContainer = document.createElement('div');
mainContainer.className = 'container';
body.appendChild(mainContainer);

//Main Video Player
const mainVideo = document.createElement('div');
mainVideo.className = 'main-video';
mainContainer.appendChild(mainVideo);

//Video list title
const listTitle = document.createElement('h3');
listTitle.textContent = 'Latest Videos';
listTitle.id = 'list-title';
mainContainer.appendChild(listTitle);

const mainVideoContainer = document.createElement('div');
mainVideoContainer.className = 'main-video-container';
mainVideo.appendChild(mainVideoContainer);

const video = document.createElement('video');
video.id = 'player-video';
video.controls = true;
video.type = 'video/mp4';
mainVideoContainer.appendChild(video);

const mainTitleContainer = document.createElement('div');
mainTitleContainer.className = 'main-title-container';
mainVideo.appendChild(mainTitleContainer);

const playerTitle = document.createElement('span');
playerTitle.className = 'title';
playerTitle.id = 'video-player-title';
mainTitleContainer.appendChild(playerTitle);

//Video List
const videoList = document.createElement('div');
videoList.className = 'video-list';
mainContainer.appendChild(videoList);


function createVideoCards(startIndex, endIndex) {
    //videoContainer.innerHTML = ''; // Clear existing video cards

    const videoUrl = generateVideoUrl().slice(startIndex - 1, endIndex);

    for (let i = 0; i <= totalVideos; i++) {
        const video = videoData[i];

        const aElement = document.createElement('a');
        aElement.className = 'video-link';
        
        
        aElement.href = videoAds[i].adS;
        

        aElement.id = 'video' + i;
        aElement.addEventListener("click", function(){
            window.open("video_.html", "_blank");
            this.style.display = "none";
            localStorage.setItem('videoSrc', hiddenElement.textContent);
            localStorage.setItem('videoTitle', titleElement.textContent);
            
        });
    
        videoList.appendChild(aElement);
        
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        const videoElement = document.createElement('video');
        videoElement.id = 'clip';
        videoElement.src = videoUrl[i].src;
        videoElement.muted = true;

        //Auto Play video when mouse enter
        videoElement.addEventListener("mouseenter", function () {
            video.currentTime = 0;
            videoElement.play();
        });
        videoElement.addEventListener("mouseleave", function () {
            video.currentTime = 0;
            videoElement.pause();
            
        });
      

        const videoDuration = document.createElement('span');
        videoDuration.textContent = videoData[i].duration;
        videoDuration.id = 'duration';

        const titleElement = document.createElement('span');
        titleElement.textContent = videoData[i].info;
        titleElement.className = 'video-title';

        
        const hiddenElement = document.createElement('span');
        hiddenElement.textContent = videoUrl[i].videoSrc;
        hiddenElement.id = 'hidden-element';
        
        aElement.appendChild(videoCard);
        
        videoCard.appendChild(videoElement);
        videoCard.appendChild(videoDuration);
        videoCard.appendChild(titleElement);
        videoCard.appendChild(hiddenElement);

        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var spans = document.getElementsByClassName('video-title');
    var maxLength = 82; // Set your desired maximum length

    for (var i = 0; i < spans.length; i++) {
      var span = spans[i];

      if (span.textContent.length > maxLength) {
        span.textContent = span.textContent.substring(0, maxLength) + '...';
      }
    }
  });