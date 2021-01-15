
document.querySelector('#calculate').onclick = function() {
    console.log('calculating')
    let allProducts = document.querySelectorAll('.product')
    for (let i = 0 ; i < allProducts.length; i++){
        let eachProduct = allProducts[i]
            console.log(eachProduct)
            let price = eachProduct.querySelector('.price span').innerHTML  
            console.log(price)
            
    }
}
