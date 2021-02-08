addEventListener("load", main)


//These two will load in the listeners to the main account 
//and will help them get to calculating sales
function main() {
    btCalcSales.addEventListener("click", calculateSales)
}


/**
 * This is the function of the code that will actually do the sales calculations
 *  which will include the price, tax, and totals with taxed amounts
 */
function calculateSales() {
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
    Tax=Price*TaxRate
    Total=Price+Tax
    spTotal.innerHTML=Total.toFixed(2)
}

