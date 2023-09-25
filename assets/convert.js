
// Length conversion factors
const INCHES_TO_FEET = 1 / 12;
const INCHES_TO_YARDS = 1 / 36;
const INCHES_TO_MILES = 1 / 63360;
const INCHES_TO_KILOMETERS = 1 / 39370.1;
const INCHES_TO_METERS = 1 / 39.3701;
const INCHES_TO_CENTIMETERS = 2.54;
const FEET_TO_INCHES = 12;
const FEET_TO_YARDS = 1 / 3;
const FEET_TO_MILES = 1 / 5280;
const FEET_TO_KILOMETERS = 1 / 3280.84;
const FEET_TO_METERS = 1 / 3.28084;
const FEET_TO_CENTIMETERS = 30.48;
const YARDS_TO_INCHES = 36;
const YARDS_TO_FEET = 3;
const YARDS_TO_MILES = 1 / 1760;
const YARDS_TO_KILOMETERS = 1 / 1093.61;
const YARDS_TO_METERS = 1 / 1.09361;
const YARDS_TO_CENTIMETERS = 91.44;
const MILES_TO_INCHES = 63360;
const MILES_TO_FEET = 5280;
const MILES_TO_YARDS = 1760;
const MILES_TO_KILOMETERS = 1 / 0.621371;
const MILES_TO_METERS = 1 / 0.00062137;
const MILES_TO_CENTIMETERS = 1 / 0.0000062137;
const KILOMETERS_TO_INCHES = 39370.1;
const KILOMETERS_TO_FEET = 3280.84;
const KILOMETERS_TO_YARDS = 1093.61;
const KILOMETERS_TO_MILES = 0.621371;
const KILOMETERS_TO_METERS = 1000;
const KILOMETERS_TO_CENTIMETERS = 100000;
const METERS_TO_INCHES = 39.3701;
const METERS_TO_FEET = 3.28084;
const METERS_TO_YARDS = 1.09361;
const METERS_TO_MILES = 0.00062137;
const METERS_TO_KILOMETERS = 1 / 1000;
const METERS_TO_CENTIMETERS = 100;
const CENTIMETERS_TO_INCHES = 1 / 2.54;
const CENTIMETERS_TO_FEET = 1 / 30.48;
const CENTIMETERS_TO_YARDS = 1 / 91.44;
const CENTIMETERS_TO_MILES = 1 / 160934;
const CENTIMETERS_TO_KILOMETERS = 1 / 100000;
const CENTIMETERS_TO_METERS = 1 / 100;

// Function for length conversions
function lengthConversion(fromUnit, toUnit, value) {
    switch (fromUnit) {
        case 'Inches':
            if (toUnit === 'Feet') {
                return value * INCHES_TO_FEET;
            } else if (toUnit === 'Yards') {
                return value * INCHES_TO_YARDS;
            } else if (toUnit === 'Miles') {
                return value * INCHES_TO_MILES;
            } else if (toUnit === 'Kilometers') {
                return value * INCHES_TO_KILOMETERS;
            } else if (toUnit === 'Meters') {
                return value * INCHES_TO_METERS;
            } else if (toUnit === 'Centimeters') {
                return value * INCHES_TO_CENTIMETERS;
            }
            break;

        case 'Feet':
            if (toUnit === 'Inches') {
                return value * FEET_TO_INCHES;
            } else if (toUnit === 'Yards') {
                return value * FEET_TO_YARDS;
            } else if (toUnit === 'Miles') {
                return value * FEET_TO_MILES;
            } else if (toUnit === 'Kilometers') {
                return value * FEET_TO_KILOMETERS;
            } else if (toUnit === 'Meters') {
                return value * FEET_TO_METERS;
            } else if (toUnit === 'Centimeters') {
                return value * FEET_TO_CENTIMETERS;
            }
            break;

        case 'Yards':
            if (toUnit === 'Inches') {
                return value * YARDS_TO_INCHES;
            } else if (toUnit === 'Feet') {
                return value * YARDS_TO_FEET;
            } else if (toUnit === 'Miles') {
                return value * YARDS_TO_MILES;
            } else if (toUnit === 'Kilometers') {
                return value * YARDS_TO_KILOMETERS;
            } else if (toUnit === 'Meters') {
                return value * YARDS_TO_METERS;
            } else if (toUnit === 'Centimeters') {
                return value * YARDS_TO_CENTIMETERS;
            }
            break;

        case 'Miles':
            if (toUnit === 'Inches') {
                return value * MILES_TO_INCHES;
            } else if (toUnit === 'Feet') {
                return value * MILES_TO_FEET;
            } else if (toUnit === 'Yards') {
                return value * MILES_TO_YARDS;
            } else if (toUnit === 'Kilometers') {
                return value * MILES_TO_KILOMETERS;
            } else if (toUnit === 'Meters') {
                return value * MILES_TO_METERS;
            } else if (toUnit === 'Centimeters') {
                return value * MILES_TO_CENTIMETERS;
            }
            break;

        case 'Kilometers':
            if (toUnit === 'Inches') {
                return value * KILOMETERS_TO_INCHES;
            } else if (toUnit === 'Feet') {
                return value * KILOMETERS_TO_FEET;
            } else if (toUnit === 'Yards') {
                return value * KILOMETERS_TO_YARDS;
            } else if (toUnit === 'Miles') {
                return value * KILOMETERS_TO_MILES;
            } else if (toUnit === 'Meters') {
                return value * KILOMETERS_TO_METERS;
            } else if (toUnit === 'Centimeters') {
                return value * KILOMETERS_TO_CENTIMETERS;
            }
            break;

        case 'Meters':
            if (toUnit === 'Inches') {
                return value * METERS_TO_INCHES;
            } else if (toUnit === 'Feet') {
                return value * METERS_TO_FEET;
            } else if (toUnit === 'Yards') {
                return value * METERS_TO_YARDS;
            } else if (toUnit === 'Miles') {
                return value * METERS_TO_MILES;
            } else if (toUnit === 'Kilometers') {
                return value * METERS_TO_KILOMETERS;
            } else if (toUnit === 'Centimeters') {
                return value * METERS_TO_CENTIMETERS;
            }
            break;

        case 'Centimeters':
            if (toUnit === 'Inches') {
                return value * CENTIMETERS_TO_INCHES;
            } else if (toUnit === 'Feet') {
                return value * CENTIMETERS_TO_FEET;
            } else if (toUnit === 'Yards') {
                return value * CENTIMETERS_TO_YARDS;
            } else if (toUnit === 'Miles') {
                return value * CENTIMETERS_TO_MILES;
            } else if (toUnit === 'Kilometers') {
                return value * CENTIMETERS_TO_KILOMETERS;
            } else if (toUnit === 'Meters') {
                return value * CENTIMETERS_TO_METERS;
            }
            break;
    }
    return value;
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

// Function for liquid volume conversions
function liquid(fromUnit, toUnit, value) {
    switch (fromUnit) {
        case 'Fluid Ounces':
            if (toUnit === 'Milliliters') {
                return value * 29.5735;
            } else if (toUnit === 'Liters') {
                return value * 0.0295735;
            } else if (toUnit === 'Gallons') {
                return value * 0.0078125;
            }
            break;

        case 'Milliliters':
            if (toUnit === 'Fluid Ounces') {
                return value / 29.5735;
            } else if (toUnit === 'Liters') {
                return value * 0.001;
            } else if (toUnit === 'Gallons') {
                return value * 0.000264172;
            }
            break;

        case 'Liters':
            if (toUnit === 'Fluid Ounces') {
                return value / 0.0295735;
            } else if (toUnit === 'Milliliters') {
                return value * 1000;
            } else if (toUnit === 'Gallons') {
                return value * 0.264172;
            }
            break;

        case 'Gallons':
            if (toUnit === 'Fluid Ounces') {
                return value / 0.0078125;
            } else if (toUnit === 'Milliliters') {
                return value / 0.000264172;
            } else if (toUnit === 'Liters') {
                return value / 0.264172;
            }
            break;

        default:
        }
            return value;
    }
    
//  defined variables
const unitSelect = document.getElementById('unit-sys'); //   element that contains the unit system dropdown list
const fromUnitGroup = document.getElementById('from-unit-box');  // group element that contains the (from units) dropdown list
const toUnitGroup = document.getElementById('to-unit-box');  // group element that contains the (to units) dropdown list
const fromUnitSelect = document.getElementById('from-unit'); // The (from unit) dropdown select 
const toUnitSelect = document.getElementById('to-unit'); // The (to unit) dropdown select
const Input = document.getElementById('Input'); // The input field where the user enters the value to be converted
const Decimal = document.getElementById('decimal');//  field for the decimal 
const outputContainer = document.getElementById('output-container');
const convertBtn = document.getElementById('convert-btn');
const decimalPlacesSelect = document.getElementById('decimal-places');
const colorToggle = document.getElementById('color-toggle');
const containers = document.querySelectorAll('.container');

// Function to toggle color scheme
colorToggle.addEventListener('click', function () {
    // Get current color scheme from data attribute
    const currentColorScheme = document.documentElement.getAttribute('data-color-scheme');
    // Determine new color scheme
    const newColorScheme = currentColorScheme === 'dark' ? 'light' : 'dark';
    // Update data attribute with new color scheme
    document.documentElement.setAttribute('data-color-scheme', newColorScheme);
    // Apply new color scheme to containers
    applyColorSchemeToContainers(newColorScheme);
});

// Function to apply color scheme to containers
function applyColorSchemeToContainers(colorScheme) {
    // Loop through containers
    containers.forEach(function (container) {
        // Set color scheme attribute
        container.setAttribute('data-color-scheme', colorScheme);
    });
}


//  execute the document loaded
document.addEventListener("DOMContentLoaded", function () {

    // hide the elements at start
    //https://tpiros.dev/blog/hiding-removing-elements-in-dom-using-javascript/

    fromUnitGroup.classList.add('hidden');
    toUnitGroup.classList.add('hidden');
    Input.classList.add('hidden');
    convertBtn.classList.add('hidden');


    // Define an array for measurement types
    const measureType = [
        { value: 'length', label: 'Length' },
        { value: 'liquid', label: 'liquid Volume' },
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
        //https://tpiros.dev/blog/hiding-removing-elements-in-dom-using-javascript/

        document.querySelector('label[for="Input"]').classList.remove('hidden');
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
            // based of liquid
            case 'liquid':
                units = ['Milliliters', 'Liters', 'Gallons', 'Fluid Ounces'];
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
    convertBtn.addEventListener('click', function () {

        //Retrieve units to convert from and to, and input value
        const selectedUnit = unitSelect.value;
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        const inputValue = parseFloat(Input.value);
        const decimalPlaces = parseInt(decimalPlacesSelect.value);
        let convertedValue = inputValue;

        // Check if the input value is a valid number
        if (isNaN(inputValue)) {
            alert('Please enter decimal number.');
            return;
        }

        let units;

        switch (selectedUnit) {
            case 'length':
                units = lengthConversion(fromUnit, toUnit, 1);
                convertedValue = lengthConversion(fromUnit, toUnit, inputValue);
                break;

            case 'temp':
                units = temp(fromUnit, toUnit, 1);
                convertedValue = temp(fromUnit, toUnit, inputValue);
                break;
        }

        // show the result container
        outputContainer.classList.remove('hidden');


        // Display the formula
        const Info = `1 ${fromUnit} equals ${units.toFixed(6)} ${toUnit}`;
        document.getElementById('Info').textContent = Info;

        // Round the converted value based on the selected decimal count
        const decimalCount = Number.isInteger(convertedValue) === false;
        if (decimalCount) {
            Decimal.textContent = convertedValue.toFixed(decimalPlaces); // Rounded to the selected decimal places
        } else {
            Decimal.textContent = convertedValue.toString(); // Display as an integer
        }

        // Event listener for the "Update Decimal" button
        const updateDecimalButton = document.getElementById('update-button');
        updateDecimalButton.addEventListener('click', function () {
            const selectedDecimalPlaces = parseInt(decimalPlacesSelect.value);

            // Update the result with the selected decimal places
            Decimal.textContent = convertedValue.toFixed(selectedDecimalPlaces);

        });
    });

    // Add Enter key press in the input field
    Input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            document.getElementById("convert-btn").click();
        }
    });

    // Populate the "Decimal Places" select element
    for (let i = 1; i <= 9; i++) {
        const optionElement = document.createElement('option');
        optionElement.value = i;
        optionElement.textContent = i;
        decimalPlacesSelect.appendChild(optionElement);
    }
});

