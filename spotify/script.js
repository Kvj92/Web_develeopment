console.log("WELCOME TO SPOTIFY");
let audioElement = new Audio('song/1.mp3');
let songindex=0;
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Believer - Imagine Dragons",filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"Bad Lair - Imagine Dragons",filePath: "song/2.mp3", coverPath:"cover/3.jpg"},
    {songName:"Demons - Imagine Dragons",filePath:"song/3.mp3", coverPath:"cover/2.jpg"},
    {songName:"Radioactive - Imagine Dragons",filePath:"song/4.mp3", coverPath:"cover/4.jpg"},
    {songName:"Thunder - Imagine Dragons",filePath:"song/5.mp3", coverPath:"cover/5.jpg"},
    {songName:"Whatever it takes - Imagine Dragons",filePath:"song/6.mp3", coverPath:"cover/6.jpg"},
]

songItem.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

gif.style.opacity =0;


//audioElement.play();
// pause and play
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
    }    

    
})
// time bar progress
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    // seekbar update
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        songindex = parseInt(e.target.id);
        console.log(songindex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=5){
        songindex = 0;
    }
    else{
        songindex+=1;
    }
        
        audioElement.src = `song/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        console.log(masterSongName);
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})

document.getElementById('prev').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else{
        songindex-=1;
    }
        audioElement.src = `song/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        console.log(masterSongName);
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})

document.getElementById('last').addEventListener('click', ()=>{
        songindex = 5;
        audioElement.src = `song/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        console.log(masterSongName);
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})

document.getElementById('first').addEventListener('click', ()=>{
        songindex =0;
        audioElement.src = `song/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        console.log(masterSongName);
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})
