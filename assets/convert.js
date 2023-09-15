//  defined variables
let unitSelect = document.getElementById('unit-sys'); //   element that contains the unit system dropdown list
let fromUnitGroup = document.getElementById('from-unit-box');  // group element that contains the (from units) dropdown list
let toUnitGroup = document.getElementById('to-unit-box');  // group element that contains the (to units) dropdown list
let fromUnitSelect = document.getElementById('from-unit'); // The (from unit) dropdown select 
let toUnitSelect = document.getElementById('to-unit'); // The (to unit) dropdown select
const Input = document.getElementById('input'); // The input field where the user enters the value to be converted
const output = document.getElementById('output'); // The output field where the result is displayed

//  execute the document loaded
document.addEventListener("DOMContentLoaded", function () {

    // Add an event listener for the unit system selection
    unitSelect.addEventListener('change', function () {
        fromUnitSelect.innerHTML = '';
        toUnitSelect.innerHTML = '';
        const selectedUnit = unitSelect.value;

        //Define units based on the selected unit system
        let units = [];
        switch (selectedUnit) {
            case 'length':
                units = ['Inches', 'Feet', 'Yards', 'Miles', 'Kilometers', 'Meters', 'Centimeters'];
                break;
        }

    })
});