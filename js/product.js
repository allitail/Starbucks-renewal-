// const products = [
//     {id:0, title : '스타벅스 아이스 아메리카노'}
// ]

// function start() {
//     const checkbox = document.querySelectorAll('.check');
//     const beansproduct = document.querySelectorAll('.bean');

//     checkbox.forEach(c=>c.addEventListener('click', (e)=>{
//         e.preventDefault();
//         const filter = e.target.dataset.filter

//         beansproduct.forEach(p=>{
//             if(filter==='all'){
//                 p.style.display = 'block';
//             }else {
//                 if(p.classList.contains(filter))
//                 p.style.display = 'block';
//             }
//             else {
//                 p.style.display='none';
//             }
//         })
//     })
//     )
// }
// function products() {
//     return fetch("data/data.json")
//     .then((response) => response.json())
//     .then((json) => json.product);

// }

// products().then((product) => {
//     console.log(product);
// })

let productList = [];

const beansArr = new Array();
const viewFilterValue = document.getElementsByClassName(".beansPro");


async function getProducts() {
    return fetch('../data/data.json')
    .then(res=>res.json());
}

function viewProducts(products, form) {
    const menu = document.querySelector('div.products');


    if(form)
     menu.innerHTML = products.filter(val=>val.form === form).map(productsHTML).join('');
        else
          menu.innerHTML = products.map(productsHTML).join('');

   
}

function productsHTML(product) {
    return `
    <div class="card-body">
        <img src = "${product.image}"/>
        <span>${product.productname}</span>
    </div>`
}

function makeFilter(target) {
    const beansVal = target.value;
    const beansCheck = target.checked;

    const dataset = target.dataset;
        if(beansCheck == true) {
            console.log("check");
            beansArr.push(beansVal);

        if(dataset.value === 'logo') {
        viewProducts(productList);
        console.log(productList);
        }
        } else {
            // beansArr.splice(beansArr.indexOf(beansVal), 1)
            viewProducts(productList,dataset.value);
    }
    viewFilterValue.value = beansArr;
    console.log("필터:" + beansArr);
    document.getElementsByClassName('.beansPro').innerHTML = beansVal;

}


// document.querySelector('.check').addEventListener('click', e=> {
//     const dataset = e.target.dataset;
//     const beansCheck = e.target.checked;
//     if(beansCheck == true) {
//                 console.log("check");
//                 // beansArr.push(beansVal);
         
        
//             }
//     // if(!dataset.value) return;
//     // if(beansCheck) viewProducts(productList);
//     // else viewProducts(productList,dataset.value);
// });


window.onload = ()=>{
    getProducts()
    .then(products => {
        products.product.forEach(product => productList.push(product));
        viewProducts(productList);
    });
};



