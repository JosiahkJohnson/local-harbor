//basket will hold onto all the different items in the basket
let basket = [];

//load the cart from local storage and fill the array
if(JSON.parse(localStorage.getItem("cart"))!=null){
    basket = JSON.parse(localStorage.getItem("cart"));
};

//pointer to the main container we are appending things to
const container = $(".sale");

//display a new row on the page for each item in the basket
//if there is nothing in the basket edgecase
if(basket.length == 0) {
    //the row div for bootstrap to work
    const row = $("<div>");
    row.addClass("row text-center");

    //contains info
    const wrapper = $("<div>");
    wrapper.addClass("wrapper");

    //message
    $('<p>' + "No items in cart" + '</p>').appendTo(wrapper);

    //remember to actually add everything to the html document
    row.append(wrapper);
    container.append(row);
}

//the more likely situation of a customer having somthing in the basket
else {
    //loop through the basket and add the name and price for each item
    for(i = 0; i < basket.length; i++) {

        //create the divs we are going to need
        const row = $("<div>");
        const name = $("<div>");
        const price = $("<div>");
        //create the button to remove the item
        const button = $("<button>" + "Remove" + "</button>");
        const buttonContainer = $("<div>");

        //set the proper classes for the row name and price divs
        row.addClass("row");
        name.addClass("col");
        price.addClass("col");
        //add classes to the button
        button.addClass("btn btn-danger rounded-pill");
        buttonContainer.addClass("col container");

        //give the button an id to identify it on the page
        button.attr("id", i);

        //add the function to the button
        button.on("click", function() {
            //target the button
            const eventID = $(this).attr("id");

            //removes item from the array
            basket.splice(eventID, 1);
            localStorage.setItem("cart",JSON.stringify(basket));
            location.reload();
        });

        //add the values
        $('<p>' + basket[i].name + '<p>').appendTo(name);
        $('<p>' + "$" + basket[i].price + '<p>').appendTo(price);

        //append them to the container
        row.append(name);
        row.append(price);
        buttonContainer.append(button);
        row.append(buttonContainer);
        container.append(row);
    }
}
