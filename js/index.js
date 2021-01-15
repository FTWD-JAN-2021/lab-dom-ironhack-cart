document.querySelector('#calculate').onclick = function() {
    console.log('calculating')
    let allProducts = document.querySelectorAll('.product')
    let total = 0
    for (let i = 0 ; i < allProducts.length; i++){
        let eachProduct = allProducts[i]
            console.log(eachProduct)
            let price = eachProduct.querySelector('.price span').innerHTML 
            let value = eachProduct.querySelector('.quantity input').value
            console.log(price, value)
            let subTotal = price * value
            console.log(subTotal)       
            eachProduct.querySelector('.subtotal span').innerHTML = subTotal
            total += subTotal
    }
    document.querySelector('#total-value span').innerHTML = total
    console.log(total)
}
