
 let all_information = [
  [[document.getElementById("red_tank")], [4, 0], [1, 2],[0]],
  [[document.getElementById("armed_forces_armored_car")], [4, 6], [4, 2],[1]],
  
];
let hidden_button = document.getElementById("hidden_button");
let num=all_information.length - 1;

all_information[0][0][0].addEventListener("dblclick", function (e) {
  
  for (let i = 0; i <= num; i++) {
     if(all_information[i][3][0]==0){
      continue;
    }
    else if (
      all_information[0][1][1] + all_information[0][2][1] ==
        all_information[i][1][1] &&
      all_information[i][1][0] <= all_information[0][1][0] &&
      all_information[0][1][0] <
        all_information[i][1][0] + all_information[i][2][0]
    ) {
      return 0;
    }
  }
  all_information[0][1][1]++;
  all_information[0][0][0].style.left = all_information[0][1][1] * 50 + "px";

  if (all_information[0][1][1] >= 10) {
    all_information[0][1][1]--;
    hidden_button.style.width = 1000 + "px";
    hidden_button.style.height = 1000 + "px";
  }
});
all_information[0][0][0].addEventListener("contextmenu", function (e) {
  e.preventDefault();
  for (let i = 0; i <= num; i++) {
    if(all_information[i][3][0]==0){
      continue;
    }
    else if (
      all_information[0][1][1] ==all_information[i][1][1] + all_information[i][2][1] &&
      all_information[i][1][0] <= all_information[0][1][0] &&
      all_information[0][1][0] <all_information[i][1][0] + all_information[i][2][0]
    ) {
      return 0;
    }
  }

  all_information[0][1][1]--;
  all_information[0][0][0].style.left = all_information[0][1][1] * 50 + "px";

  if (all_information[0][1][1] > 10) {
    all_information[0][1][1]++;
  }
});
all_information[1][0][0].addEventListener("dblclick", function (e) {
  for (let i = 0; i <= num; i++) {
    if(all_information[i][3][0]==1){
      continue;
    }
      else if(all_information[1][1][0]+all_information[1][2][0] ==all_information[i][1][0]&&
              all_information[i][1][1] < all_information[1][1][1]+all_information[1][2][1] &&
              all_information[1][1][1] <all_information[i][1][1] + all_information[i][2][1]){
            return 0;
      }
  }
  all_information[1][1][0]++;
  all_information[1][0][0].style.top = all_information[1][1][0] * 50 + "px";
  if (all_information[1][1][0] > 6) {
    all_information[1][1][0]--;
  }
});
all_information[1][0][0].addEventListener("contextmenu", function (e) {
  e.preventDefault();
  for (let j = 0; j <= num; j++) {
    if(all_information[i][3][0]==1){
      continue;
    }
      else if (
        all_information[1][1][0] ==all_information[j][1][0] + all_information[j][2][0] &&
        all_information[j][1][1] < all_information[1][1][1]+all_information[1][2][1] &&
        all_information[1][1][1] <all_information[j][1][1] + all_information[j][2][1]
      ) 
      {
        return 0;
      }
  }
  all_information[1][1][0]--;
  all_information[1][0][0].style.top = all_information[1][1][0] * 50 + "px";

  if (all_information[1][1][1] < 0) {
    all_information[1][1][0]++;
  }
});
