const sizeBtn = document.querySelector("#sizeBtn");
sizeBtn.addEventListener("click", () => {
    let auxSize = prompt("enter grid size","16");
    auxSize = Number.parseInt(auxSize);
    if (Number.isNaN(auxSize)){
        auxSize = 16;
    }
    auxSize = Math.min(auxSize,100);
    createGrid(auxSize);
})


function createGrid(size){
    const divGrid = document.querySelector(".grid");
    while (divGrid.firstChild){
        divGrid.removeChild(divGrid.lastChild);
    }
    for (let rowIndex = 1; rowIndex <= size; rowIndex++){
        let divRow = document.createElement("div");
        divRow.setAttribute("class","row");
        for (let colIndex = 1; colIndex <= size; colIndex++){
            let divCol = document.createElement("div");
            divCol.setAttribute("class","col");
            divCol.style.opacity = 0.0;
            divCol.addEventListener("mouseover",() => {
                divCol.style.backgroundColor = "#" + randomColor();
                divCol.style.opacity = 
                (Math.min(1,Number.parseFloat(divCol.style.opacity) + 0.1)).toString();
                
            });
            divRow.appendChild(divCol);
        }
        divGrid.appendChild(divRow);
    }
}

function randomColor(){
    return Math.floor(Math.random() * 16777215).toString(16);
}

let size = 16;
createGrid(size)