import products from "./products.js";
 
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');


// load layout file
const loadTemplate = () => {
  fetch('./AddToCart.html')
  .then(response => response.text())
  .then(html => {
      app.innerHTML = html;
      let contentTab = document.getElementById('contentTab');
      contentTab.innerHTML = temporaryContent.innerHTML;
      temporaryContent.innerHTML = null;
      //cart();
      displayItem();
  })
}
loadTemplate();

        const categories = [...new Set(products.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toUpperCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.name.toUpperCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

        const displayItem = (items) => {
            document.getElementById('root').innerHTML = items.map((item) => {
                var { id, image, name, price } = item;
                return (
                
                  `<div class='searchBox'>
                        <div class='search-img-box'>
                           <a href="./ProductDetailsPage.html?id=${id}">
                           <img class='searchImages' src=${image}></img></a>
                        </div> 
                        <div class='searchBottom'>
                            <p>${name}</p>
                            <p>$ ${price}.00</p>
                        </div>
                    </div>`
                )
            }).join('')
        };
        displayItem(categories);
