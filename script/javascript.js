// assign a class to an HTML element//  


/////-Auto Play Video Hover-/////
const videos = document.querySelectorAll('.clip');
    // Function to play 5 seconds, forward to 30 seconds, and play another 5 seconds
function playAndForward() {
    // Play the video for the first 5 seconds
    video.play();

    // Set a timeout to forward the video after 5 seconds
    setTimeout(() => {
        // Forward to 30 seconds
        video.currentTime = 30;

        // Set another timeout to play the video for the next 5 seconds
        setTimeout(() => {
            // Pause the video after playing for the next 5 seconds
            video.pause();
        }, 5000);
    }, 5000);
}
    videos.forEach(video => {
        video.addEventListener('mouseenter', playAndForward);
    /*        video.addEventListener('mouseenter', () => {
            video.play();
        });  */
  
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });




/*
//Video Source value container//
let videoSource = [
    'sample.mp4',
    'sample2.mp4',
];
var video1 = document.getElementById('video1')
video1.src = videoSource[0];

let videoTitle = [
    '01. Successfull',

];
var title1 = document.getElementById('main-video-title')
title1.textContent = videoTitle[0];


*/





//Copy video source and textcontent
function copy1(){
    
    let titleContainer = document.getElementById('main-video-title1').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video1').src;
    localStorage.setItem('video-container',videoContainer);
    
    }
function copy2(){
    localStorage.clear();
    let titleContainer = document.getElementById('main-video-title2').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video2').src;
    localStorage.setItem('video-container',videoContainer);
    
    }

function copy3(){
 
    let titleContainer = document.getElementById('main-video-title3').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video3').src;
    localStorage.setItem('video-container',videoContainer);
    
    }

function copy4(){
 
    let titleContainer = document.getElementById('main-video-title4').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video4').src;
    localStorage.setItem('video-container',videoContainer);
    
    }

function copy5(){
 
        let titleContainer = document.getElementById('main-video-title5').textContent;
        localStorage.setItem('title-container',titleContainer);
        
        let videoContainer= document.getElementById('video5').src;
        localStorage.setItem('video-container',videoContainer);
        
        }

function copy6(){
 
    let titleContainer = document.getElementById('main-video-title6').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video6').src;
    localStorage.setItem('video-container',videoContainer);
    
    }

function copy7(){
 
    let titleContainer = document.getElementById('main-video-title7').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video7').src;
    localStorage.setItem('video-container',videoContainer);
    
    }

function copy8(){
 
    let titleContainer = document.getElementById('main-video-title8').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video9').src;
    localStorage.setItem('video-container',videoContainer);
    
    }

function copy9(){
 
    let titleContainer = document.getElementById('main-video-title9').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video9').src;
    localStorage.setItem('video-container',videoContainer);
    
    }

function copy10(){
 
    let titleContainer = document.getElementById('main-video-title10').textContent;
    localStorage.setItem('title-container',titleContainer);
    
    let videoContainer= document.getElementById('video10').src;
    localStorage.setItem('video-container',videoContainer);
    
    }
