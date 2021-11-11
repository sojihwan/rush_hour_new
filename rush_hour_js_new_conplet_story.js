import resh from "./rush_hour_js_new_conplet_story_inprot";

let map=
  [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0],
    [1,1,0,0,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,0,0],
    [0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ];
let all_information = 
  [
    [[document.getElementById("red_tank")],[4,0],[1,2],1],
    [[document.getElementById("armed_forces_armored_car")],[4,2],[4,2],0],
    [[document.getElementById("yellow_armored_car")],[8,6],[1,2],1],
    [[document.getElementById("green_armored_car")],[3,6],[1,2],1],
    [[document.getElementById("armed_forces_armored_car-1")],[4,6],[4,2],0]
  ];
  let x;
  let y;
  all_information[resh][0][0].addEventListener("dblclick", function (e) {
    for(let i=0;i<=all_information.length-1;i++){
      if(all_information[resh][0][0]==all_information[i][0][0]){
        continue;
      }
      x=all_information[resh][1][0]+all_information[resh][2][1];
      y=all_information[resh][1][1];
      if(map[y][x+all_information[resh][2][1]]==1){
        return 0;
      }
    }
    all_information[resh][1][0]=all_information[resh][1][0]+1;
    all_information[resh][0][0].style.left=all_information[resh][1][0]*50;
    map[all_information[resh][1][0]][[all_information[resh][1][0]]]=1;
    map[all_information[resh][1][0]][[all_information[resh][1][0]-1]]=0;
    if(all_information[resh][1][0]+all_information[resh][2][1]==10){
      all_information[resh][1][0]=all_information[resh][1][0]-1;
    }
  });
  all_information[resh][0][0].addEventListener("contextmenu", function (e) {
    e.preventDefault();
    for(let i=0;i<=all_information.length-1;i++){
      if(all_information[resh][0][0]==all_information[i][0][0]){
        continue;
      }
      x=all_information[resh][1][0];
      y=all_information[resh][1][1];
      if(map[y][x-1]==1){
        return 0;
      }
    }
      all_information[resh][1][0]=all_information[resh][1][0]-1;
      all_information[resh][0][0].style.left=all_information[resh][1][0]*50;
      map[all_information[resh][1][0]][[all_information[resh][1][0]]]=1;
      map[all_information[resh][1][0]][[all_information[resh][1][0]+all_information[resh][2][1]]]=0;
      if(all_information[resh][1][0]==0){
        all_information[resh][1][0]=all_information[resh][1][0]+1;
      }
  });


  