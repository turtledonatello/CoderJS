//Array de productos
var products = [
  {
    id: 1,
    name: 'Auricular Logitech G733',
    price: 5000,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 2,
    name: 'Auricular Sony G3',
    price: 3000,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 3,
    name: 'Auricular Motorola G',
    price: 5000,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 4,
    name: 'Auricular Apple 33',
    price: 4000,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 5,
    name: 'Auricular Edifier Pro',
    price: 1100,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 6,
    name: 'Auricular Samsung Gaming',
    price: 6000,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 7,
    name: 'Auricular Razer RGB',
    price: 7000,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 8,
    name: 'Auricular LG Inalambrico',
    price: 800,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 9,
    name: 'Auricular Samsung s10',
    price: 7000,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
  {
    id: 10,
    name: 'Auricular Motorola G6',
    price: 200,
    url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
  },
];

/* //Array Cart
var cart = []; */

/* //Contenedor del carrito
var $containerCart = document.querySelector('#containerCart');

//Widget Cart Contenedor
var $widget = document.querySelector('#widgetCart'); */

/* //Clase para el producto.
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  addID() {
    //Un pequeño truquillo para generar un id random jajaj :P
    return Math.ceil(Math.random() * 300);
  }
  //Agrego un nuevo producto al array.
  addProduct() {
    console.log(this.name);
    if (this.name === '' || this.price === '') {
      alert('Te falto llenar los campos o no respetaste el tipo de dato');
    }
    return products.push({
      name: this.name,
      price: parseInt(this.price),
      id: this.addID(),
      url: 'https://images.philips.com/is/image/PhilipsConsumer/TAH1205BK_00-IMS-es_AR?$jpglarge$&wid=1250',
    });
  }
} */

/* //Agregar al carrito
function addToCart(e) {
  $widget.innerHTML = '';
  let product = {
    name: e.target.parentElement.children[0].textContent,
    price: parseInt(
      e.target.parentElement.children[1].textContent.substring(1)
    ),
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  cart.map((prod) => {
    $widget.innerHTML += templateCart(prod.name, prod.price);
  });
  $containerCart.innerHTML = `${cart.length}`;
} */

//Container de productos
var $containerProducts = document.querySelector('#products');

//Template Card
function templateCard(name, price, url, id) {
  let template = ($containerProducts.innerHTML += `
  <div class="card">
      <div class="card__top">
      <img src="${url}" alt="${name}" />
      </div>
      <div class="card__info">
      <h3 id="name">${name}</h3>
      <h4 id="price">$${price}</h4>
      <button id="addToCart" onclick='addOnCart(${id})'>Agregar al carrito</button>
      </div>
  </div>
`);
  return template;
}
//Template CART
function templateCart(name, price) {
  let template = `
  <div class="widget__product">
    <div>
      <p>${name}</p>
      <p>$${price}</p>
    </div>
    <div>
      <i class="fas fa-trash-alt" id="trash" onclick="deleteProductOnCart(name)"></i>
    </div>
</div>
  `;
  return template;
}

//Recargar los productos
function reloadProducts() {
  let cartProduct = localStorage.getItem('cart');

  if (cartProduct) {
    cart = JSON.parse(cartProduct);
    cart.map((prod) => {
      $widget.innerHTML += templateCart(prod.name, prod.price, prod.id);
    });
  }

  products.map(({ name, price, url, id }) => {
    templateCard(name, price, url, id);
  });
  $containerCart.innerHTML = `${cart.length}`;
}
//Recargo los productos apenas inicia la web
window.onload = reloadProducts();
/*
let $cartButton = document.querySelectorAll('#addToCart');

for (const button of $cartButton) {
  button.addEventListener('click', addToCart);
}

//Productos ordenados por menor precio
function orderLowProducts() {
  $containerProducts.innerHTML = '';
  var orderProduct = products.sort((product1, product2) => {
    return product1.price - product2.price;
  });
  return orderProduct;
}

//Productos ordenados por mayor precio
function orderHightProducts() {
  $containerProducts.innerHTML = '';
  var orderProduct = products.sort((product1, product2) => {
    return product2.price - product1.price;
  });
  return orderProduct;
}

//EVENTO PARA AGREGAR PRODUCTO
let $submit = document.querySelector('#form');
$submit.addEventListener('submit', (e) => {
  e.preventDefault();
  addProduct();
  $containerProducts.innerHTML = '';
  reloadProducts();
});

//FILTRO PRODUCTOS
function filterProduct() {
  let $select = document.querySelector('#filter');
  switch ($select.value) {
    case 'low':
      //Recorro los productos para ver el orden de menor a mayor por precio
      const filter = orderLowProducts().map(({ name, price, url }) => {
        templateCard(name, price, url);
      });
      return filter;

    case 'hight':
      //Recorro los productos para ver el orden de menor a mayor por precio
      const filterHight = orderHightProducts().map(({ name, price, url }) => {
        templateCard(name, price, url);
      });
      return filterHight;
  }
}

//EVENTO PARA FILTRAR
let $submitFilter = document.querySelector('#filterSubmit');
let $select = document.querySelector('#filter');
$select.addEventListener('click', () => {
  filterProduct();
});
 */
