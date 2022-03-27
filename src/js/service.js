const search = document.querySelector('#s');
const SerachBtn = document.querySelector('.search');
const query = document.querySelector('.Service');
const title = document.getElementsByClassName('.tile');
console.log(title);

const div = title.getElementsByClassName('div');

SerachBtn.addEventListener('click',()=>{
    console.log(search.value);
    const queryText = search.value.toUpperCase();
    
    for(i =0; i<div.length;i++){
        if(queryText == query)
        {
            div[i].style.display="";
            console.log(div);
        }
        else{
            div[i].style.display="none";
        }
    }
})

