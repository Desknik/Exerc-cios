const InputColor = document.querySelector('#color');


const setColor = () =>{
    var Color = InputColor.value;
    document.querySelector('body').style.backgroundColor = Color;
}

setColor();