var controls = document.getElementById('controls')
var bgImg_inp = document.getElementById('bgImg_inp')
var title_inp = document.getElementById('title_inp')
var dis_title = document.getElementById('dis_title')
var des_inp = document.getElementById('des_inp')
var dis_desc = document.getElementById('dis_desc')
var color_inp = document.getElementById('color_inp')
var background = document.getElementById('background')
var num_up_down = 0
var num_lef_right = 0
var num_small_big = 300

function expandMenu() {
    if (menu_count == 0) {
        controls.style.bottom='0px';
        menu_count=1;
    }
    else {
        controls.style.bottom='-120px';
        menu_count=0;
    }
}

function changeColor() {
    dis_title.style.color = color_inp.value;
    dis_desc.style.color = color_inp.value;
}

function changeDescription() {
    dis_desc.innerHTML = des_inp.value;
}

function changeTitle() {
    dis_title.innerHTML = title_inp.value;
}

function changeBG() {
    if (bgImg_inp.value == 'horse') {
        document.getElementById('background').style.backgroundImage="url('img_bg1.jpg')";
    }
    else if (bgImg_inp.value == 'night') {
        document.getElementById('background').style.backgroundImage="url('img_bg2.jpg')";
    }
    else if (bgImg_inp.value == 'mountain') {
        document.getElementById('background').style.backgroundImage="url('img_bg3.jpg')";
    }
    else if (bgImg_inp.value == 'mountain') {
        document.getElementById('background').style.backgroundImage="url('img_bg3.jpg')";
    }
    else if (bgImg_inp.value.indexOf('epic') >= 0) {
        document.getElementById('background').style.backgroundImage="url('img_bg4.jpg')";
    }
    else {
        document.getElementById('background').style.backgroundImage='url('+bgImg_inp.value+')';
    }
}

function moveBG(code) {
    if(code == 38){
        num_up_down = num_up_down - 10
        background.style.top = num_up_down + 'px';
    }
    if(code == 40){
        num_up_down = num_up_down + 10
        background.style.top = num_up_down + 'px';
    }
    if(code == 37){
        num_lef_right = num_lef_right - 10
        background.style.left = num_lef_right + 'px';
    }
    if(code == 39){
        num_lef_right = num_lef_right + 10
        background.style.left = num_lef_right + 'px';
    }
    
    if(code == 107){
        num_small_big = num_small_big + 10
        background.style.height = num_small_big + 'px';
    }
    
    if(code == 109){
        num_small_big = num_small_big - 10
        background.style.height = num_small_big + 'px';
    }
}

function createBG() {
    new_BG = document.createElement('div');
    new_BG.className = 'nBG';
    //new_BG.className = 'col-lg-3 col-md-4 col-sm-6 col-xs-12';
    new_BG.style.backgroundImage=document.getElementById('background').style.backgroundImage;
    
    display.appendChild(new_BG);
    
    
    new_title = document.createElement('div');
    new_title.innerHTML = dis_title.innerHTML;
    new_title.style.color = dis_title.style.color;
    new_title.className = 'ntitle';
    new_BG.appendChild(new_title);
    
    new_desc = document.createElement('div');
    new_desc.innerHTML = dis_desc.innerHTML;
    new_desc.style.color = dis_desc.style.color;
    new_desc.className = 'ndesc';
    new_BG.appendChild(new_desc);
}

menu_count = 0
document.getElementById('menu_but').addEventListener("click", function(){
    expandMenu()
});

bgImg_inp.addEventListener('keyup', function(ev){
    if(ev.keyCode == 13){
        changeBG()
    }
});

title_inp.onkeyup= function() {
    changeTitle()
};

des_inp.onkeyup= function() {
    changeDescription()
}

color_inp.addEventListener('change', function() {
    changeColor()
});

document.addEventListener('keydown', function(ev) {
    moveBG(ev.keyCode)
});

document.getElementById('new_comp').addEventListener('click', function() {
    createBG()
});