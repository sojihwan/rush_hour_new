let all_coordinate = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
];
let lest_x;
let lest_y;
var img_L = 0;
var img_T = 0;
var targetObj;
let size_x;
let size_y;
let all_information;
function getLeft(o) {

    






    
    return parseInt(o.style.left.replace('px', ''));
}
function getTop(o) {
    return parseInt(o.style.top.replace('px', ''));
}

// 이미지 움직이기
function moveDrag(e) {
    var e_obj = window.event ? window.event : e;
    var dmvx = parseInt(e_obj.clientX + img_L);
    var dmvy = parseInt(e_obj.clientY + img_T);
    targetObj.style.left = (Math.floor(dmvx / 50)) * 50 + "px";
    targetObj.style.top = (Math.floor(dmvy / 50)) * 50 + "px";
    lest_x = (Math.floor(dmvx / 50));
    lest_y = (Math.floor(dmvy / 50));
    size_y = targetObj.style.width / 50;
    size_x = targetObj.style.height / 50;
    return false;
}

// 드래그 시작
function startDrag(e, obj) {
    targetObj = obj;
    var e_obj = window.event ? window.event : e;
    img_L = getLeft(obj) - e_obj.clientX;
    img_T = getTop(obj) - e_obj.clientY;

    document.onmousemove = moveDrag;
    document.onmouseup = stopDrag;
    if (e_obj.preventDefault) 
        e_obj.preventDefault();
    
}

// 드래그 멈추기
function stopDrag() {
    if (Math.floor(lest_x / 50) < 10 && Math.floor(lest_y / 50) < 10) {
        if (all_coordinate[lest_y][lest_x] == 0) {
            all_coordinate[lest_y][lest_x] = 1;

            for (let j=0;j < size_y+1; j++) {
                
               for (let i = 0; i < size_x+1; i++) {
              
                    all_coordinate[lest_y+j][lest_x+i] = 1;
            
               }
            }
        } else {
            if (size_x > size_y) {
                targetObj.style.left = targetObj.style.left + targetObj.style.width + "px";
            } else {
                targetObj.style.top = targetObj.style.left + targetObj.style.height + "px";
            }
        }
    }
    document.onmousemove = null;
    document.onmouseup = null;

}
