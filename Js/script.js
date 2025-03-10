let display = document.getElementById('display')
function appendNumber(e) {
    display.value += e
}
function calculate(){
    display.value = eval(display.value)
}
function clearDisplay() {
    display.value = "";
}