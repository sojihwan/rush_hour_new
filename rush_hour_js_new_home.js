let count=0;
let armed_count = 0;
let min_count1 = 8;
let min_count2 = 7;
let min_go = document.getElementById("mini_car");
let move_go=document.getElementById("red_tank");
let hiddne_bnt=document.getElementById("hidden_button");
let armed_go=document.getElementById("armed_forces_armored_car");

move_go.addEventListener('dblclick', function(e) {
        if((armed_count===4||armed_count===3||armed_count===2||armed_count===1)&&(count===5||count===6||count===7||count===8)){
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
armed_count++;

armed_go.style.top=armed_count*50+'px';

if(armed_count>6){
    
    armed_count--;
}

});



