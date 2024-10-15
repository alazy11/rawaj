let menuBtn = document.querySelector(".menu-btn");
let navMobile = document.querySelector("#nav-mobile");
let productsList = document.querySelectorAll('.product-service');
let productServiceImg = document.querySelectorAll('.product-service-img');

menuBtn.addEventListener('click',e=>{
    navMobile.classList.toggle('show');
})

productsList.forEach((item,index)=> {
    item.addEventListener('click',e=>{
        productsList.forEach(ele=>{
            ele.classList.remove('active');
        });
        item.classList.add('active');
        productServiceImg[index].dataset.order = '1';
        if(index === productServiceImg.length - 1) {
            productServiceImg[0].dataset.order = '2';
            productServiceImg[index - 1].dataset.order = '3';
        }else if(index === 0) {
            productServiceImg[index + 1].dataset.order = '2';
            productServiceImg[productServiceImg.length - 1].dataset.order = '3';
        }else {
            productServiceImg[index + 1].dataset.order = '2';
            productServiceImg[index - 1].dataset.order = '3';
        }

    });

})