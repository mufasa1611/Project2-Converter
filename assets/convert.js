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

        //element of "From" select box
        units.forEach(function (unit) {
            const unitElement = document.createElement('option');
            unitElement.value = unit;
            unitElement.textContent = unit;
            fromUnitSelect.appendChild(unitElement);

            //element of "To" select box
            const toUnitElement = document.createElement('option');
            toUnitElement.value = unit;
            toUnitElement.textContent = unit;
            toUnitSelect.appendChild(toUnitElement);


        });
    });

    //event listener for the "Convert" button
    document.getElementById('convert-btn').addEventListener('click', function () {

        //Retrieve units to convert from and to, and input value
        const selectedUnit = unitSelect.value;
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        const inputValue = parseFloat(Input.value);
        let convertedValue = inputValue;


        switch (selectedUnit) {
            case 'length':
                convertedValue = Length(fromUnit, toUnit, inputValue);
                break;
        }
        // Display the result
        output.textContent = convertedValue;
    });
});
// Conversion function for length
function Length(fromUnit, toUnit, value) {

    switch (fromUnit) {
        // Conversions from Inches
        case 'Inches':
            if (toUnit === 'Feet') {
                return value / 12;
            }
            else if (toUnit === 'Yards') {
                return value / 36;
            }
            else if (toUnit === 'Miles') {
                return value / 63360;
            }
            else if (toUnit === 'Kilometers') {
                return value / 39370.1;
            }
            else if (toUnit === 'Meters') {
                return value / 39.3701;
            }
            else if (toUnit === 'Centimeters') {
                return value * 2.54;
            }
            break;

        // Conversions from Feet
        case 'Feet':
            if (toUnit === 'Inches') {
                return value * 12;
            }
            else if (toUnit === 'Yards') {
                return value / 3;
            }
            else if (toUnit === 'Miles') {
                return value / 5280;
            }
            else if (toUnit === 'Kilometers') {
                return value / 3280.84;
            }
            else if (toUnit === 'Meters') {
                return value / 3.28084;
            }
            else if (toUnit === 'Centimeters') {
                return value * 30.48;
            }
            break;
        // Conversions from Yards
        case 'Yards':
            if (toUnit === 'Inches') {
                return value * 36;
            }
            else if (toUnit === 'Feet') {
                return value * 3;
            }
            else if (toUnit === 'Miles') {
                return value / 1760;
            }
            else if (toUnit === 'Kilometers') {
                return value / 1093.61;
            }
            else if (toUnit === 'Meters') {
                return value / 1.09361;
            }
            else if (toUnit === 'Centimeters') {
                return value * 91.44;
            }
            break;

            // Conversions from Miles
        case 'Miles':
            if (toUnit === 'Inches') {
                return value * 63360;
            }
            else if (toUnit === 'Feet') {
                return value * 5280;
            }
            else if (toUnit === 'Yards') {
                return value * 1760;
            }
            else if (toUnit === 'Kilometers') {
                return value / 0.621371;
            }
            else if (toUnit === 'Meters') {
                return value / 0.00062137;
            } else if (toUnit === 'Centimeters') {
                return value / 0.0000062137;
            }
            break;
        default:
            return value;
    }

}