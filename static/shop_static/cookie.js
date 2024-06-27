const buttonBuy = document.querySelectorAll(selectors = '.buy-button')

let countCartDiv = document.querySelector('.count-cart')
let countCart = document.querySelector('.count-cart p')

for (let count = 0; count < buttonBuy.length; count++) {
    let button = buttonBuy[count]
    var countInCart = 0

    // if(countCart.textContent <= "0"){
    //     countCartDiv.style.backgroundColor = 'green'
    // }
    // if(countCart.textContent >= "1" ){
    //     countCartDiv.style.backgroundColor = 'red'
    // }
    button.addEventListener(type = 'click', listener = function(event){
        countInCart += 1
        countCart.textContent = countInCart
        if (document.cookie != ''){
            let currentProduct = document.cookie.split('=')[1]
            let idProduct = currentProduct + ' ' + button.value
            document.cookie = `product = ${idProduct}`
        }
        else {
            document.cookie = `product = ${button.id}`
        }
    })
}

