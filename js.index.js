const $video =document.querySelector ('#video')
const $play =document.querySelector ('#play')
const $pause =document.querySelector ('#pause')
const $backward =document.querySelector ('#backward')
const $forward =document.querySelector ('#forward')


$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)


function handleplay (){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
console.log('You clicked play')

}
function handlepause (){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('You clicked pause')

}
$backward.addEventListener ('click', handlebackward)
$video.currentTime = $video.currentTime - 10
function handlebackward (){
    $video.currentTime = $video.currentTime - 10
    console.log('for going backward 10 seconds', $video.currentTime)
} 

$forward.addEventListener ('click', handleforward)
function handleforward (){
    $video.currentTime = $video.currentTime + 10 
    console.log('for going forward 10 seconds', $video.currentTime)
} 
const $progress = document.querySelector('#progress')
$video.addEventListener ('loadedmetadata', handleloaded)
$video.addEventListener ('timeupdate', handletimeupdate)

function handleloaded(){
    $progress.max = $video.duration
    console.log('video loaded', $video.duration)
}
function handletimeupdate(){
    $progress.value = $video.currentTime
    console.log('current time', $video.currentTime)
}
$progress.addEventListener ('input', handleinput)
function handleinput (){
    $video.currentTime = $progress.value
    console.log($progress.value)
}