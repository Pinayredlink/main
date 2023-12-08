


 

//body
const body = document.body;

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

//video-container
const videoContainer = document.createElement('div');
videoContainer.classList.add('video-card-container');
body.appendChild(videoContainer);

//list-title
const listTitle = document.createElement('div');
listTitle.classList.add('list-title');
const h1 = document.createElement('h1');
h1.textContent = 'Latest Video';
listTitle.appendChild(h1); // created inside list-title div
videoContainer.appendChild(listTitle); // created inside video-card-container

//video-list
const videoList = document.createElement('div');
videoList.classList.add('video-list');
videoContainer.appendChild(videoList);

//
    

    
    


//function to create video cards
function createVideoCards(startIndex, endIndex) {
    //videoContainer.innerHTML = ''; // Clear existing video cards

    const videoUrl = generateVideoUrl().slice(startIndex - 1, endIndex);

    for (let i = 0; i < totalVideos; i++) {
        const video = videoData[i];

        const aElement = document.createElement('a');
        aElement.className = 'video-link';
        
        
        aElement.href = videoAds[i].adS;
        
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



//Page Buttons
const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
body.appendChild(buttonContainer);


document.addEventListener('DOMContentLoaded', function () {
    // Check if there is a visit count stored in localStorage
    let visitCount = localStorage.getItem('visitCount');

    // If not, initialize it to 0
    if (visitCount === null) {
        visitCount = 0;
    } else {
        // If yes, increment the count
        visitCount = parseInt(visitCount);
        visitCount++;
    }

    // Update the visit count in the HTML
    document.getElementById('visitCount').innerText = visitCount;

    // Update the visit count in localStorage
    localStorage.setItem('visitCount', visitCount.toString());
});
/*
//Next Button Container
const nextContainer = document.createElement('div');
nextContainer.className = 'next';
buttonContainer.appendChild(nextContainer);
const next = document.createElement('a');
next.href = "/assets/pages/page2.html";
next.textContent ='Next';
nextContainer.appendChild(next);

//Page Sets

const setContainer = document.createElement('div');
setContainer.className = 'sets';
buttonContainer.appendChild(setContainer);

//Previous Button Container
const prevContainer = document.createElement('div');
prevContainer.className = 'prev';
buttonContainer.appendChild(prevContainer);
const prev = document.createElement('a');
prev.href = "/assets/pages/page2.html";
prev.textContent ='Prev';
prevContainer.appendChild(prev);

*/

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


