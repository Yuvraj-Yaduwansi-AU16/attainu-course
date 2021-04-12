const outerBox = document.querySelector('#box-main');


const randomColor = e => {

    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    e.target.style.transition = '0s';
    e.target.style.backgroundColor = color;
};

const reset = e => {
    e.target.style.transition = '1s';
    e.target.style.backgroundColor = '#3a3a3a';
};

const attachEventListeners = box => {
    box.addEventListener('mouseover', (e) => randomColor(e));
    box.addEventListener('mouseout', (e) => reset(e));
};

const fillBox = () => {
    for(let j = 0; j < 20; j++) {
        const divElement = document.createElement('div');
        divElement.className = 'd-flex';
        for(let i = 0; i < 20; i++) {

            const spanElement = document.createElement('span');
            spanElement.className = 'box';
            attachEventListeners(spanElement);
            divElement.appendChild(spanElement);
        };

        outerBox.appendChild(divElement);
    };    
};

addEventListener('DOMContentLoaded', fillBox);