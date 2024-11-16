// var play = document.getElementById("1");
// play.addEventListener("click",function(){
//     if (playmusic(1).paused){
//         playmusic(1).play();
//         play.src = "pause2.jpg";
//     if (playmusic(1).played){
//         playmusic.pause();
//         play.src = "playbutton.png";
//     }
    
//     }else if (playmusic(1).played){
//         playmusic(1).pause();
//         play.src = "playbutton.png";
//     }
// })
// var play1 = document.getElementById("buttonPlay2");
// play1.addEventListener("click",()=>{
//     if (playmusic(2).paused){
//         playmusic(2).play();
//         play1.src = "pause2.jpg";
        
//     }else{
//         playmusic(2).pause();
//         play1.src = "playbutton.png";
//     }
   
// })
// var play2 = document.getElementById("buttonPlay3");
// play2.addEventListener("click",function(){
//     if (playmusic(3).paused){
//         playmusic(3).play();
//         play2.src = "pause2.jpg";
        
//     }else{
//         playmusic(3).pause();
//         play2.src = "playbutton.png";
//     }
// })
// var play3 = document.getElementById("buttonPlay4");
// play3.addEventListener("click",function(){
//     if (playmusic(4).paused){
//         playmusic(4).play();
//         play3.src = "pause2.jpg";
        
//     }else{
//         playmusic(4).pause();
//         play3.src = "playbutton.png";
//     }
// })
// var play4 = document.getElementById("buttonPlay5");
// play4.addEventListener("click",function(){
//       if (playmusic(5).paused){
//         playmusic(5).play();
//         play4.src = "pause2.jpg";
        
//     }else{
//         playmusic(5).pause();
//         play4.src = "playbutton.png";
//     }
// })
// var play5 = document.getElementById("buttonPlay6");
// play5.addEventListener("click",function(){
//     if (playmusic(6).paused){
//         playmusic(6).play();
//         play5.src = "pause2.jpg";
        
//     }else{
//         playmusic(6).pause();
//         play5.src = "playbutton.png";
//     }
// })
// var play6 = document.getElementById("buttonPlay7");
// play6.addEventListener("click",function(){
//      if (playmusic(7).paused){
//         playmusic(7).play();
//         play6.src = "pause2.jpg";
        
//     }else{
//         playmusic(7).pause();
//         play6.src = "playbutton.png";
//     }
// })
// var play7 = document.getElementById("buttonPlay8");
// play7.addEventListener("click",function(){
//     if (playmusic(8).paused){
//         playmusic(8).play();
//         play7.src = "pause2.jpg";
        
//     }else{
//         playmusic(2).pause();
//         play7.src = "playbutton.png";
//     }
// })
// var play8 = document.getElementById("buttonPlay9");
// play8.addEventListener("click",function(){
//     if (playmusic(9).paused){
//         playmusic(9).play();
//         play8.src = "pause2.jpg";
        
//     }else{
//         play8.src = "playbutton.png";
//         playmusic(9).pause();
//     }
// })
// var play9 = document.getElementById("buttonPlay10");
// play9.addEventListener("click",function(){
//     if (playmusic(10).paused){
//         playmusic(10).play();
//         play9.src = "pause2.jpg";
        
//     }else{
//         playmusic(10).pause();
//         play9.src = "playbutton.png";
//     }
// })
// function playmusic(name){
//     var audio = new Audio("./songs/"+name+".mp3");
    
//     return audio;
    
// }
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aris - Funk Do Bounce", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ichiss - Whine in Brasil", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: " Hoes No Justsu", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Roddy Rich - The Box", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Under The Influence", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ed Sheren - Shape Of You", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Travis Scott - Fen!", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Melanie Martinez - Play Date", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Xxtentacion Hope", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "MTG QUEM NÃO", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    var playbutn = document.getElementsByClassName("playbutton");
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        
        masterPlay.src = "masterpause.png";
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        playbutn.src = "playbutton.png";
        masterPlay.src = "masterplay.png";
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       
        element.src = "playbutton.png";
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        if (audioElement.paused){
            e.target.src = "pause2.jpg";
            
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            
        }else if (audioElement.played) {
            audioElement.pause();
        }
        
        masterPlay.src = "masterpause.png";
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    
    audioElement.play();
    
    masterPlay.src = "masterpause.png";
    

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    
    masterPlay.src = "masterpause.png";
})