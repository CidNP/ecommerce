var wrapper= document.querySelector(".sliderWrapper");
var menuItem = document.querySelectorAll(".menuItem");


const products =[
    {
        id:1,
        title: "Air Force",
        price: 5000,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img:"./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordon",
        price: 5000,
        colors: [
            {
                code:"lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Yezzy",
        price: 6000,
        colors:[
            {
                code: "lightgray",
                img: "./img/yezzy.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 150,
        colors: [
            {
                code: "black",
                img: './img/crater.png',
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            }
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 4500,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide

       const transform = `translate(${ -100 * index}vw,0vw)`;
       wrapper.style.transform = transform;


       //change the choosen product
       choosenProduct= products[index]
       
       // change texts of currentProduct
       currentProductTitle.textContent= choosenProduct.title;
       currentProductPrice.textContent="Rs." + choosenProduct.price;
       currentProductImg.src= choosenProduct.colors[0].img

       //color change in product
       currentProductColors.forEach((color,index) => {
           color.style.bachgroundColor= choosenProduct.colors[index].code;
       });
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src= choosenProduct.colors[index].img
    });
});


//size color
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black" 
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})


const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})

