const color = document.querySelector("#colorSelector");
const color_button = document.querySelector("#colorBtn");
const rainbow_button = document.querySelector("#rainbowBtn");
const eraser_button = document.querySelector("#eraserBtn");
const clear_button = document.querySelector("#clearBtn");
const size_scale = document.querySelector("#sizeScale");
const display_size = document.querySelector("#displaySize");
const container = document.querySelector("#container");
let color_selected = color.value;
let currentMode = 'Color';
const default_size = 3;

color.addEventListener("click", ()=>{
   color_selected = color.value;
   
});

function createPixels(size){

    container.innerHTML =  "";
    const totalPixels = size*size;
    const pixelSize = Math.floor(600 / size);

    for(let i = 0; i< totalPixels; i++){

        const pixel = document.createElement("div");
        pixel.classList.add('pixel');
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;

        pixel.addEventListener("mouseover", ()=>{
            if(currentMode === 'Color'){
                pixel.style.backgroundColor = color_selected;
            }else if(currentMode === 'Rainbow'){
                pixel.style.backgroundColor = getRandomColor();
                
            }else if(currentMode === 'Eraser'){
                pixel.style.backgroundColor = 'white';
            }
            
        });

        container.appendChild(pixel);
    }
}

function getRandomColor(){
    let letter = '012345789ABCDEF';
    let color = '#';

    for(let i = 0; i<6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
   

    return color;
}


size_scale.addEventListener("input", ()=>{
    const size = size_scale.value;
    display_size.textContent = `${size} x ${size}`;
    createPixels(size);
}); 



color_button.addEventListener("click", () => {
    console.log("Color button clicked!"); 
    currentMode = 'Color';
    createPixels(size_scale.value);
   
});

rainbow_button.addEventListener("click", ()=>{
    console.log("rainbow button clicked");
    currentMode = 'Rainbow';
    createPixels(size_scale.value);

});

eraser_button.addEventListener("click", ()=>{
    console.log("clear button is clicked");
    currentMode = 'Eraser';
    createPixels(size_scale.value);
});

clear_button.addEventListener("click", ()=>{
    createPixels(size_scale.value);
});

document.addEventListener("DOMContentLoaded", () => {
    size_scale.value = default_size; // Set the slider to default size
    display_size.textContent = `${default_size} x ${default_size}`; // Update display size text
    createPixels(default_size); // Create pixels with default size
});