// a custom  button function

const custom_btn_func = document.querySelector('.custom_btn');

const custom_btn = ( buttn_text, gb_color, txt_color, width, height) =>{

    // create the elements
    const container = document.createElement('div');
    const btn_text = document.createElement('p');

    // add class to the elements
    container.classList.add('container');
    btn_text.classList.add('btn_text');

    // write text to the p tag created
    btn_text.innerText = `${buttn_text}`;

    // append the p tag to the div
    container.append(btn_text);

    // append the div to the body
    custom_btn_func.append(container);

    // custom button styling
    container.style.backgroundColor =`${gb_color}`;
    container.style.color = `${txt_color}`;
    container.style.borderRadius = "10px";
    container.style.width =`${width}px` ;
    container.style.height =`${height}px` ;

}

custom_btn("Button", "gray", "black", 100, 40);