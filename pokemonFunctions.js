// Gets all the values that are given by the API and execute all the functions inside of it.
export function changeFields(pHeight, pWeight, pName, pType1, pType2, pImg) {
    changePokemonName(pName)
    changePokemonWeight(pWeight)
    changePokemonHeight(pHeight)
    changePokemonImg(pImg)
    changePokemonType(pType1, pType2)
}


// Gives the pokemon name based on its ID
export const changePokemonName = (pName) => {
    let name = document.querySelector('.title')
    name.textContent = pName.charAt(0).toUpperCase() + pName.slice(1)
}


// Gives the pokemon weight based on its ID
export const changePokemonWeight = (pWeight) => {
    let weight = document.getElementById('weightDiv')
    let weightParagraph = weight.lastChild
    weightParagraph.textContent = pWeight + "g"
}


// Gives the pokemon height based on its ID
export const changePokemonHeight = (pHeight) => {
    let height = document.getElementById('heightDiv')
    let heightParagraph = height.lastChild
    heightParagraph.textContent = pHeight + "cm"
}

// Gives the pokemon image based on its ID
export const changePokemonImg = (pImg) => {
    let img = document.getElementsByTagName('img')[1].src=`${pImg}`
}

// Gives the pokemon types based on its ID and also changes the field color according to each type
// I still don't know how to reduce the switch/case function but as soon as I find out, I'll change it.
export const changePokemonType = (pType1, pType2) => {
    let type1 = document.getElementsByTagName('span')[1]
    let type2 = document.getElementsByTagName('span')[2]
    type1.textContent = pType1.charAt(0).toUpperCase() + pType1.slice(1)
    type2.textContent = pType2.charAt(0).toUpperCase() + pType2.slice(1)

    switch(type1.innerText) {
        case "Fire":
            type1.classList = ""
            type1.classList.add("fire")
            break
        
        case "Water":
            type1.className = ""
            type1.classList.add("water")
            break

        case "Flying":
            type1.className = ""
            type1.classList.add("flying")
            break

        case "Poison":
            type1.className = ""
            type1.classList.add("poison")
            break

        case "Ground":
            type1.className = ""
            type1.classList.add("ground")
            break

        case "Grass":
            type1.className = ""
            type1.classList.add("grass")
            break

        default:
            type1.className = ""
            type1.classList.add("default")
    }
    
    switch(type2.innerText) {
        case "Fire":
            type2.classList = ""
            type2.classList.add("fire")
            break
        
        case "Water":
            type2.classList = ""
            type2.classList.add("water")
            break

        case "Flying":
            type2.classList = ""
            type2.classList.add("flying")
            break

        case "Poison":
            type2.classList = ""
            type2.classList.add("poison")
            break

        case "Ground":
            type2.classList = ""
            type2.classList.add("ground")
            break

        case "Grass":
            type2.classList = ""
            type2.classList.add("grass")
            break

        case "Fairy":
            type2.classList = ""
            type2.classList.add("fairy")
            break

        default:
            type2.classList = ""
            type2.classList.add("default")
    }
}