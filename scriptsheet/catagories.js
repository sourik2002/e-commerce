let cartQuantity = 0;
if (cartQuantity == 0) {
    document.querySelector('#item-count').style.visibility = 'hidden';
}
else {
    document.querySelector('#item-count').style.display = `${cartQuantity}`;
}