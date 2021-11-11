import map from "./rush_hour_js_new_conplet_story";



document.getElementById("red_tank").addEventListener("dblclick", function (e) {
    map=0;
});
document.getElementById("red_tank").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    map=0;
});
document.getElementById("armed_forces_armored_car").addEventListener("dblclick", function (e) {
    map=1;
});
document.getElementById("armed_forces_armored_car").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    map=0;
});
document.getElementById("yellow_armored_car").addEventListener("dblclick", function (e) {
    map=2;
});
document.getElementById("yellow_armored_car").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    map=0;
});
document.getElementById("green_armored_car").addEventListener("dblclick", function (e) {
    map=3;
});
document.getElementById("green_armored_car").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    map=0;
});
document.getElementById("armed_forces_armored_car-1").addEventListener("dblclick", function (e) {
    map=4;
});
document.getElementById("armed_forces_armored_car-1").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    map=0;
});