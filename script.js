let celsius = document.getElementById("a");
let fahrenheit = document.getElementById("b");
let kelvin = document.getElementById("c");

let isUpdating = false; // 🔥 prevents infinite triggering

celsius.addEventListener("input", function () {
    if (isUpdating) return;
    isUpdating = true;

    let c = parseFloat(celsius.value);

    if (isNaN(c)) {
        fahrenheit.value = "";
        kelvin.value = "";
    } else {
        fahrenheit.value = (c * 9/5 + 32).toFixed(2);
        kelvin.value = (c + 273.15).toFixed(2);
    }

    isUpdating = false;
});

fahrenheit.addEventListener("input", function () {
    if (isUpdating) return;
    isUpdating = true;

    let f = parseFloat(fahrenheit.value);

    if (isNaN(f)) {
        celsius.value = "";
        kelvin.value = "";
    } else {
        let c = (f - 32) * 5/9;
        celsius.value = c.toFixed(2);
        kelvin.value = (c + 273.15).toFixed(2);
    }

    isUpdating = false;
});

kelvin.addEventListener("input", function () {
    if (isUpdating) return;
    isUpdating = true;

    let k = parseFloat(kelvin.value);

    if (isNaN(k)) {
        celsius.value = "";
        fahrenheit.value = "";
    } else {
        let c = k - 273.15;
        celsius.value = c.toFixed(2);
        fahrenheit.value = (c * 9/5 + 32).toFixed(2);
    }

    isUpdating = false;
});

