let count=0;
let armed_count = 4;
let yellow_count = 6;
let green_count =6;
let armed_count_1 =4
let armed_1_go = document.getElementById("armed_forces_armored_car-1");
let green_go = document.getElementById("green_armored_car");
let yellow_go = document.getElementById("yellow_armored_car");
let move_go=document.getElementById("red_tank");
let hiddne_bnt=document.getElementById("hidden_button");
let armed_go=document.getElementById("armed_forces_armored_car");

move_go.addEventListener('dblclick', function(e) {
    if((armed_count===4||armed_count===3||armed_count===2||armed_count===1)&&(count===5||count===6||count===7||count===8)){
        return 0;
    }
    if((armed_count_1===4||armed_count_1===3||armed_count_1===2||armed_count_1===1)&&(count===3||count===4||count===5||count===6)){
        return 0;
    }
    move_go.style.left=count*50+'px';
    count++;
    if(count>10){
        count--;
        hiddne_bnt.style.width=100+'px';
        hiddne_bnt.style.height=100+'px';
    }
        
});


move_go.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if((armed_count===4||armed_count===3||armed_count===2||armed_count===1)&&(count===9||count===6||count===7||count===8)){
        return 0;
    }
    count--;
    move_go.style.left=count*50+'px';
    if(count<0){
        count++;    
    }
    
    
});






armed_go.addEventListener('dblclick', function(e) {
    if((count===6||count===7||count===8)&&(armed_count===5||armed_count===4||armed_count===3||armed_count===2||armed_count===0||armed_count===1)){
        return 0;
    }
    if((green_count===5||green_count===6||green_count===7)&&armed_count==4){
        return 0;
    }
    armed_count--;
    armed_go.style.top=armed_count*50+'px';
    if(armed_count<0){
        armed_count++;
    }
});


armed_go.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if((count===6||count===7||count===8)&&(armed_count===1||armed_count===4||armed_count===3||armed_count===2||armed_count===0)){
        return 0;
    }
    if((yellow_count===5||yellow_count===6||yellow_count===7)&&armed_count==4){
        return 0;
    }
    armed_count++;
    armed_go.style.top=armed_count*50+'px';
    if(armed_count>6){ 
        armed_count--;
    }
});








yellow_go.addEventListener('dblclick', function(e) {
    if((armed_count===5||armed_count===6)&&yellow_count===4){
        return 0;
    }
    if((armed_count_1===5||armed_count_1===6)&&yellow_count_1===4){
        return 0;
    }
    yellow_count++;
    yellow_go.style.left=yellow_count*50+'px';
    if(yellow_count>=9){
        yellow_count--;
    }
    
});


yellow_go.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if((armed_count===5||armed_count===6)&&yellow_count===8){
        return 0;
    }
    if((armed_count_1===5||armed_count_1===6)&&yellow_count_1===8){
        return 0;
    }
    yellow_count--;
    yellow_go.style.left=yellow_count*50+'px';
    if(yellow_count<=0){
        yellow_count++;  
    }
});







green_go.addEventListener('dblclick', function(e) {
    if((armed_count===0||armed_count===1||armed_count===2||armed_count===3)&&green_count===4){
        return 0;
    }
    if((armed_count_1===0||armed_count_1===1||armed_count_1===2||armed_count_1===3)&&green_count_1===4){
        return 0;
    }
    green_count++;
    green_go.style.left=green_count*50+'px';
    if(green_count>=9){
        green_count--;
    }
    console.log(green_count);
    
});


green_go.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if((armed_count_1===0||armed_count_1===1||armed_count_1===2||armed_count_1===3)&&green_count_1===8){
        return 0;
    }
    
    green_count--;
    green_go.style.left=green_count*50+'px';
    if(green_count<=0){
        green_count++;  
    }
    console.log(green_count);
});

armed_1_go.addEventListener('dblclick', function(e) {
    if((count===6||count===7||count===8)&&(armed_count_1===5||armed_count_1===4||armed_count_1===3||armed_count_1===2||armed_count_1===0||armed_count_1===1)){
        return 0;
    }
    if((green_count===3||green_count===4||green_count===5)&&armed_count_1==4){
        return 0;
    }
    armed_count_1--;
    armed_1_go.style.top=armed_count_1*50+'px';
    if(armed_count_1<0){
        armed_count_1++;
    }
});


armed_1_go.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if((count===6||count===7||count===8)&&(armed_count===1||armed_count_1===4||armed_count_1===3||armed_count_1===2||armed_count_1===0)){
        return 0;
    }
    if((yellow_count===3||yellow_count===4||yellow_count===5)&&armed_count_1==4){
        return 0;
    }
    armed_count_1++;
    armed_1_go.style.top=armed_count_1*50+'px';
    if(armed_count_1>6){ 
        armed_count_1--;
    }
});