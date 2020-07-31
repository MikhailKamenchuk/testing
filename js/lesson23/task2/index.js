const arenaElem = document.querySelector('.arena');

const amountGenerator = amount => {
    const arr = [];
    for (let i = 1; i <= amount; i++) {
        arr.push(i)
    }
    return arr
}

const getLineSeats = () => amountGenerator(10)
    .map(seatNumber =>
        `<div class='sector__seat' data-seat-number="${seatNumber}">
            </div>`
    )
    .join('');

const getSectorLines = () => {
    const seatString = getLineSeats();
    return amountGenerator(10)
        .map(lineNumber =>
            `<div class='sector__line' data-line-number="${lineNumber}">
                ${seatString}
            </div>`
        )
        .join('');
}


const sectorsCreator = () => {
    const lineString = getSectorLines();
    const sectors = amountGenerator(3)
        .map(sectorNumber =>
            `<div class='sector' data-sector-number="${sectorNumber}">
                ${lineString}
            </div>`
        )
        .join('');
    return arenaElem.innerHTML = sectors;
};
sectorsCreator();

const boardElem = document.querySelector('.board');

const onSeatSelect = event => {
    const isSeat = event.target.classList.contains('sector__seat');
    if(!isSeat) return;
    const seatNumber = event.target.dataset.seatNumber;
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
    const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;
    
    const selectedSeatElem = document.querySelector('.board__selected-seat');
    selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`
}

arenaElem.addEventListener('click', onSeatSelect)

