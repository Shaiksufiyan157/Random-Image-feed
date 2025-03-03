const container=document.querySelector('.container')
const unsplashURL = 'https://picsum.photos/'

const row=5

for(let i=0;i<row*3;i++){
    const img=document.createElement('img')
    img.src=`${unsplashURL}${randomsize()}`
    container.appendChild(img)
}
function randomsize(){
return `${randomNumber()}/${randomNumber()}`
}

function randomNumber(){
    return Math.floor(Math.random()*10)+300
 
}