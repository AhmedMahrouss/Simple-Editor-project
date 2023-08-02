// Start Selector
let upload = document.getElementById("upload");
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let Brightness = document.getElementById("Brightness");
let Sepia = document.getElementById("Sepia");
let GrayScale = document.getElementById("GrayScale");
let Blur = document.getElementById("Blur");
let HueRotate= document.getElementById("HueRotate"); 
let reset= document.getElementById("reset");
let download= document.getElementById("download");
let btns = document.querySelector(".btn");
let img  = document.getElementById("imgg");
let imgBox = document.querySelector(".img");
let filters = document.querySelectorAll('input[type="range"]');
// End Selector

// Start window onload fun
window.onload = ()=>{
btns.style.display = 'none'
imgBox.style.display = 'none'
}
// End window onload fun

// Start upoload function
upload.onchange = ()=>{
ResetValue();
btns.style.display = 'block'
imgBox.style.display = 'block'
let image = new FileReader();
image.readAsDataURL(upload.files[0]);
image.onload = ()=>{
img.src = image.result;
console.log(img.src)
}
}
// End upoload function

// Start ResetValue Function
function ResetValue(){
img.style.filter = 'none'
saturate.value = '100'
contrast.value = '100'
Brightness.value = '100'
Sepia.value = '0'
GrayScale.value = '0'
blur.value = '0'
HueRotate.value = '0'
}
// End ResetValue Function
// Start Filter
filters.forEach((filter)=>{
    filter.addEventListener('input',()=>{
       img.style.filter = `
       saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${Brightness.value}%)
    sepia(${Sepia.value}%)
    grayscale(${GrayScale.value})
    blur(${blur.value}px)
    hue-rotate(${HueRotate.value}deg)
       `
    })
})
// End Filter   
reset.onclick = ()=>{
    ResetValue();
}
