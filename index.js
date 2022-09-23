const grid = document.querySelector('.grid');
const slider = document.querySelector('#slider');
const buttons = document.querySelectorAll('.btn');
var currentMode = 'draw';
var gridSize = 16;

function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('divs');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.addEventListener('mouseover', (event) => {
        if (currentMode == 'draw') {
            event.target.classList.add('colored-div');
        } else {
            event.target.classList.remove('colored-div');
        }
    });
    return div;
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
    }
}

slider.addEventListener('mousemove', (event) => {
    document.querySelector('#sizeText').textContent = `${event.target.value} x ${event.target.value}`;
});

slider.addEventListener('change', (event) => {
    gridSize = event.target.valueAsNumber;
    grid.innerHTML = '';
    createGrid(gridSize);
})

document.querySelector('#draw').classList.add('selected-btn');
for (button of buttons) {
    button.addEventListener('click', (event) => {
        if (event.target.id == 'reset') {
            grid.innerHTML = '';
            createGrid(gridSize);
            event.target.classList.add('selected-btn');
            setTimeout( () => {
                event.target.classList.toggle('selected-btn'), 1000
            })
        } else {
            document.querySelector(`#${currentMode}`).classList.toggle('selected-btn');
            currentMode = event.target.id;
            event.target.classList.add('selected-btn');
        }
    })
}
createGrid(gridSize)
