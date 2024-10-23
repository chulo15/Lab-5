function calculateArea() {
    const radius = document.getElementById('radius').value;
    const result = document.getElementById('result');
    
    if (radius === "") {
        window.alert("Please enter a radius value.");
        result.innerHTML = "";
    } else if (radius <= 0) {
        window.alert("Please enter a radius greater than 0.");
        result.innerHTML = ""; 
    } else {
        const area = Math.PI * radius * radius;
        result.innerHTML = "The area of the circle is: " + area;
    }
}
