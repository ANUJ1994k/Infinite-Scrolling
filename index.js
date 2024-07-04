

let container=document.getElementById("container");

let page=1;
let flag=false;
let getData= async(api)=>{
    let res= await fetch(api);
    let data= await res.json();
    console.log(data);
    displayData(data);
}
getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);

let displayData = (data) => {

data.forEach((ele)=>{
    let card=document.createElement("div");
    card.id="main";
    card.className="carddesign"
let title=document.createElement("p");
title.textContent=`Title : ${ele.title}`;

let image=document.createElement("img");
image.src=ele.url;
image.alt="image";

card.append(image,title);
container.append(card)

    })
    flag=true;
}


// For creating infinite scrolling

let scrollHeight=document.documentElement.scrollHeight;
let clientHeight=document.documentElement.clientHeight;
let scrollTop=document.documentElement.scrollTop;



function handleScroll() {
    if(Math.ceil(scrollHeight-clientHeight)<=Math.ceil(scrollTop)){
        console.log("reach the bottom fetch the data");
        page++;
        getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
        flag=false;
    }
    }


window.addEventListener('scroll', handleScroll);

// handleScroll();

