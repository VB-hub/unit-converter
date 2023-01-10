/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const unitList = [
    {name: "Length (Meter/Feet)", unit1: "meters", unit2: "feet", ratio: 3.281},
    {name: "Volume (Liters/Gallons)", unit1: "liters", unit2: "gallons", ratio: 0.264},
    {name: "Mass (Kilograms/Pounds)", unit1: "kilos", unit2: "pounds", ratio: 2.204},
]
let inputValue = 0
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
let unitsEl = document.getElementById("units-el")
let converted12 = []
let converted21 = []

btnEl.addEventListener("click", function(){
    inputValue = inputEl.value
    convert(inputValue)
    inputEl.value = 0
})

render()

function render(){
    let unitItems = ""
    for (let i = 0; i < unitList.length; i++){
        unitItems += `
        <div class="unit-container">
            <h3>${unitList[i].name}</h3>
            <p>${inputValue} ${unitList[i].unit1} = ${converted12[i]} ${unitList[i].unit2}
            | ${inputValue} ${unitList[i].unit2} = ${converted21[i]} ${unitList[i].unit1}</p>
        </div>
        `
    }
    unitsEl.innerHTML = unitItems
    converted12 = []
    converted21 = []
}

function convert(num){
    for (let unit of unitList){
        convert12 = (num * unit.ratio).toFixed(3)
        convert21 = (num / unit.ratio).toFixed(3)
        converted12.push(convert12)
        converted21.push(convert21)
    }
    render()
}

