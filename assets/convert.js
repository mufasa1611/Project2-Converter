//  defined variables
let unitSelect = document.getElementById('unit-sys'); //   element that contains the unit system dropdown list
let fromUnitGroup = document.getElementById('from-unit-box');  // group element that contains the (from units) dropdown list
let toUnitGroup = document.getElementById('to-unit-box');  // group element that contains the (to units) dropdown list
let fromUnitSelect = document.getElementById('from-unit'); // The (from unit) dropdown select 
let toUnitSelect = document.getElementById('to-unit'); // The (to unit) dropdown select
const Input = document.getElementById('Input'); // The input field where the user enters the value to be converted
const output = document.getElementById('output'); // The output field where the result is displayed
const outputContainer = document.getElementById('output-container')
const convertBtn = document.getElementById('convert-btn');
const valueLabel = document.querySelector('label[for="Input"]');

//  execute the document loaded
document.addEventListener("DOMContentLoaded", function () {

    // hide the elements at start
    fromUnitGroup.classList.add('hidden');
    toUnitGroup.classList.add('hidden');
    Input.classList.add('hidden');
    convertBtn.classList.add('hidden');
    

    // Define an array for measurement types
    const measureType = [
        { value: 'length', label: 'Length' },
        { value: 'temp', label: 'Temperature' },
    ];

    // establish the selected measurement element 
    measureType.forEach(function (measurement) {
        const optionElement = document.createElement('option');
        optionElement.value = measurement.value;
        optionElement.textContent = measurement.label;
        unitSelect.appendChild(optionElement);
    });

    // Add an event listener for the unit system selection
    unitSelect.addEventListener('change', function () {

        // show the elements at start
        document.querySelector('label[for="input"]').classList.remove('hidden');
        fromUnitGroup.classList.remove('hidden');
        toUnitGroup.classList.remove('hidden');
        Input.classList.remove('hidden');
        convertBtn.classList.remove('hidden');
        fromUnitSelect.innerHTML = '';
        toUnitSelect.innerHTML = '';

        const selectedUnit = unitSelect.value;

        //Define units based on the selected unit system
        let units = [];
        switch (selectedUnit) {
            // based of length
            case 'length':
                units = ['Inches', 'Feet', 'Yards', 'Miles', 'Kilometers', 'Meters', 'Centimeters'];
                break;

            // based of temp
            case 'temp':
                units = ['Fahrenheit', 'Celsius', 'Kelvin'];
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

        // Check if the input value is a valid number
        if (isNaN(inputValue)) {
            alert('Please enter a valid number.');
            return;
        }

        switch (selectedUnit) {
            case 'length':
                convertedValue = Length(fromUnit, toUnit, inputValue);
                break;

            case 'temp':
                convertedValue = temp(fromUnit, toUnit, inputValue);
                break;

        }

        
        // Display the result
        const Info = `1 ${fromUnit} equals ${units.toFixed(6)} ${toUnit}`
        document.getElementById('Info').textContent = Info;
        output.textContent = convertedValue.toFixed(4); //<---Rounded to 4 decimal
    });

    // Add Enter key press in the input field
    Input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            document.getElementById("convert-btn").click();
        }
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

        // Conversions from Kilometers
        case 'Kilometers':
            if (toUnit === 'Inches') {
                return value * 39370.1;
            }
            else if (toUnit === 'Feet') {
                return value * 3280.84;
            }
            else if (toUnit === 'Yards') {
                return value * 1093.61;
            }
            else if (toUnit === 'Miles') {
                return value / 1.60934;
            }
            else if (toUnit === 'Meters') {
                return value * 1000;
            }
            else if (toUnit === 'Centimeters') {
                return value * 100000;
            }
            break;

        // Conversions from Meters
        case 'Meters':
            if (toUnit === 'Inches') {
                return value * 39.3701;
            }
            else if (toUnit === 'Feet') {
                return value * 3.28084;
            }
            else if (toUnit === 'Yards') {
                return value * 1.09361;
            }
            else if (toUnit === 'Miles') {
                return value / 1609.34;
            }
            else if (toUnit === 'Kilometers') {
                return value / 1000;
            }
            else if (toUnit === 'Centimeters') {
                return value * 100;
            }
            break;

        // Conversions from Centimeters
        case 'Centimeters':
            if (toUnit === 'Inches') {
                return value / 2.54;
            }
            else if (toUnit === 'Feet') {
                return value / 30.48;
            }
            else if (toUnit === 'Yards') {
                return value / 91.44;
            }
            else if (toUnit === 'Miles') {
                return value / 160934;
            }
            else if (toUnit === 'Kilometers') {
                return value / 100000;
            }
            else if (toUnit === 'Meters') {
                return value / 100;
            }
            break;
            return value;
    }
}
// Function for temperature conversions
function temp(fromUnit, toUnit, value) {
    switch (fromUnit) {

        // Conversions from Fahrenheit
        case 'Fahrenheit':
            if (toUnit === 'Celsius') {
                return (value - 32) * 5 / 9;
            } else if (toUnit === 'Kelvin') {
                return (value - 32) * 5 / 9 + 273.15;
            }
            break;

        // Conversions from Kelvin
        case 'Kelvin':
            if (toUnit === 'Fahrenheit') {
                return (value - 273.15) * 9 / 5 + 32;
            } else if (toUnit === 'Celsius') {
                return value - 273.15;
            }
            break;

        // Conversions from Celsius
        case 'Celsius':
            if (toUnit === 'Fahrenheit') {
                return (value * 9 / 5) + 32;
            } else if (toUnit === 'Kelvin') {
                return value + 273.15;
            }
            break;
        default:
    }


    return value;
}

