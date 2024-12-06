import cart from './cart.js';
import products from './products.js';

let checkOutDetails = document.querySelector('.checkOutDetails');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');
let productCart = JSON.parse(localStorage.getItem('cart'));
let payBtn = document.querySelector('.payBtn');
let total_amt = 0;
let grand_total_amt = 0;


fetch('./AddToCart.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
    })

if (productCart.length > 0) {
    productCart.forEach(item => {
        let productListId = products.findIndex((value) => value.id == item.product_id);
        let info = products[productListId];
        
        total_amt = item.quantity * info.price;
        grand_total_amt += total_amt;

        document.querySelector('.grandTotal').innerHTML = '$' + grand_total_amt;

        let newItem = document.createElement('div');
        newItem.classList.add('item');

        newItem.innerHTML = `
        <div class="checkOutInfo">
            <div class="img">
                <img src="${info.image}">
            </div>
            <div class="details">
                Name:<p> ${info.name}</p>
                Price:<p> $${info.price}</p>
                Quantity:<p> ${item.quantity}</p>
                Amount:<p> $${total_amt}</p>
            </div>
        </div>
        -----------------------------------------------------------------------
        `;
        
        checkOutDetails.appendChild(newItem);
        
    });
} else {
    window.location.href = "/Website/";
}


    payBtn.addEventListener('click',()=>{
        alert('hi');

    })

/*const loadTemplate = () =>{
    fetch('./AddToCart.html')
    .then(response => response.text())
    .then(html =>{
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        productList();
    })
}
loadTemplate();
const productList = () =>{

    if (productCart.length > 0) {
        productCart.forEach(item => {
            let productListId = products.findIndex((value) => value.id == item.product_id);
            let info = products[productListId];
            total_amt = item.quantity * info.price;
    
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            newItem.innerHTML = `
                <div class="img">
                    <img src="${info.image}">
                </div>
                <div class="details">
                    <h3>Name : ${info.name}</h3>
                    <h3>Price : $${info.price}</h3>
                    <h3>Quantity : ${item.quantity}</h3>
                    <h3>Total Amount: $${total_amt}</h3>
                </div>
            `;
            productDetails.appendChild(newItem);
    
        });
    } else {
        window.location.href = "/Website/";
    }
    
}
*/