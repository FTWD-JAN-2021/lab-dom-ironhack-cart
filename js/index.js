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


document.querySelector('#create.btn').onclick = function(){
    console.log("I clicked the button")

   let newProductName =  document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value

   let newProductPrice = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value

   console.log(newProductName,newProductPrice)
}