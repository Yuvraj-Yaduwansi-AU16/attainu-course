function colors(colorTile){
    const hexCodes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hexSymbol = '#';

    for (let i=0; i<6;i++){
        hexSymbol+= hexCodes[Math.floor(Math.random()* hexCodes.length)];

    };
    let colorHeading = document.createElement('h2');
    colorHeading.innerText = hexSymbol;
    colorHeading.className = 'fs-2 text-light text-center';
    colorTile.style.backgroundColor = hexSymbol;
    colorTile.appendChild(colorHeading);
}

document.addEventListener('DOMContentLoaded', function(){
    const allColorTiles = document.querySelectorAll('.col');

    allColorTiles.forEach(colors)
})

document.querySelector('#change').addEventListener('click', function(){
    const allColorTiles = document.querySelectorAll('.col');
    
    allColorTiles.forEach((colorTile) => {
        colorTile.innerHTML = '';
    });

    allColorTiles.forEach(colors)
})