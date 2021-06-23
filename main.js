const input = document.getElementById("input");
const add = document.getElementById("add");
const chips = document.querySelector(".chips");

let id = 0;

const deleteChip = (thisid) => {
    let allChips = document.querySelectorAll(".chip");
    
    for(let chip of allChips) {
        if(chip.id == thisid) {
            chips.removeChild(chip);
            break;
        }
    }
}

const addChip = (id) => {
    let text = input.value;

    let chip = document.createElement("div");
    let avatar = document.createElement("img");
    let name = document.createElement("p");
    let close = document.createElement("span");

    avatar.src = "./avatar.png";
    name.innerText = text;
    close.innerText = "X";

    close.addEventListener("click", () => deleteChip(id));

    chip.appendChild(avatar);
    chip.appendChild(name);
    chip.appendChild(close);

    chip.id = id;
    chip.classList.add("chip");

    chips.appendChild(chip);
    input.value = "";
}

add.addEventListener("click", () => {addChip(id); id += 1;});
