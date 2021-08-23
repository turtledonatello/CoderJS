//AGREGO PRODUCTO
function addProduct() {
  //Atajo inputs
  let $price = document.querySelector('#price');
  let $name = document.querySelector('#name');
  let priceValue = isNaN(parseInt($price.value));

  if (priceValue || $name.value === '') {
    alert('El precio tiene que estar en dato numerico');
  } else {
    //Creo un nuevo producto
    var newProduct = new Product($name.value, $price.value);
    newProduct.addProduct();
  }
  $price.value = '';
  $name.value = '';
}
