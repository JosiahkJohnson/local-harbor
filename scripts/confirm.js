//load the basket
let basket = [];

//load the basket from storage
if(JSON.parse(localStorage.getItem("cart"))!=null){
    basket = JSON.parse(localStorage.getItem("cart"));
};

//point to the sale container again
const container = $(".sale");

//display a message if there is nothing to display
if(basket.length == 0) {
    const row = $("<div>");
    row.addClass("row text-center");

    //info
    const wrapper = $("<div>");
    wrapper.addClass("wrapper");

    //message
    $('<p>' + "Nothing here" + '</p>').appendTo(wrapper);

    //add everything to the document
    row.append(wrapper);
    container.append(row);
}

//else we can actually work here
else {
    //loop through the basket, we want to display everything
    for(i = 0; i < basket.length; i++) {

        //create the row, the name, and the price for each item
        const row = $("<div>");
        const name = $("<div>");
        const price = $("<div>");

        //add the proper classes to the divs
        row.addClass("row");
        name.addClass("col");
        price.addClass("col");

        //add the values to display
        $('<p>' + basket[i].name + '<p>').appendTo(name);
        $('<p>' + "$" + basket[i].price + '<p>').appendTo(price);

        //now add them to the container
        row.append(name);
        row.append(price);
        container.append(row);
    }
}

//next we will calculate and display the total price
//we need the proper containers
$total = $(".total");
row = $("<div>");
//now add the button that will "Confirm" the transaction by
//deleting the whole basket
button = $("<button>" + "Confirm" + "</button>");
buttonContainer = $("<div>");

//add the class
row.addClass("row");
buttonContainer.addClass("col");

//and now for the calculation
total = 0;

basket.forEach(element => {
    total += element.price;
});

price = $('<p>' + "Total price: $" + total + '<p>')
price.addClass("col");

//add the components to the button that dumps the basket
button.addClass("btn btn-primary rounded-pill");
button.on("click", function(event) {
    //dump the basket
    basket = [];
    alert("Thank you for your order!");

    localStorage.setItem("cart", JSON.stringify(basket));
    location.reload();
})

//append everything
buttonContainer.append(button);
row.append(price);
row.append(buttonContainer);
$total.append(row);