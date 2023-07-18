//basket to store all of the items
let basket = [];

//load items that were already on the page from the last visit
if(JSON.parse(localStorage.getItem("cart"))!=null){
    basket = JSON.parse(localStorage.getItem("cart"));
}

//add the differnt listeners on the home page
//the basketball
$("#basketball").on("click", function(event){
    event.preventDefault();

    //basketball price is $40
    const add = {
        name: "Basketball",
        price: 40
    }

    //call the save data function
    saveData(add);
});

//the soccerball
$("#soccerball").on("click", function(event){
    event.preventDefault();

    //soccerball price is $30
    const add = {
        name: "Soccerball",
        price: 30
    }

    //call the save data function
    saveData(add);
});

//tennisball
$("#tennisball").on("click", function(event){
    event.preventDefault();

    //tennisball price is $2
    const add = {
        name: "Tennisball",
        price: 2
    }

    //call the save data function
    saveData(add);
});

//bedset
$("#bedset").on("click", function(event){
    event.preventDefault();

    //bedset price is $750
    const add = {
        name: "Bedset",
        price: 750
    }

    //call the save data function
    saveData(add);
});

//bed
$("#bed").on("click", function(event){
    event.preventDefault();

    //bed price is $400
    const add = {
        name: "Bed",
        price: 400
    }

    //call the save data function
    saveData(add);
});

//lawnmower
$("#lawnmower").on("click", function(event){
    event.preventDefault();

    //lawnmower price is $400
    const add = {
        name: "Lawnmower",
        price: 400
    }

    //call the save data function
    saveData(add);
});

//fancy chair
$("#round-chair").on("click", function(event){
    event.preventDefault();

    //fancy chair price is $75
    const add = {
        name: "Rounded chair",
        price: 75
    }

    //call the save data function
    saveData(add);
});

//chair
$("#chair").on("click", function(event){
    event.preventDefault();

    //chair price is $50
    const add = {
        name: "Chair",
        price: 50
    }

    //call the save data function
    saveData(add);
});

//stool
$("#stool").on("click", function(event){
    event.preventDefault();

    //stool price is $30
    const add = {
        name: "Stool",
        price: 30
    }

    //call the save data function
    saveData(add);
});

//create the save data function that will use the browsers local storage feature to store the items selected for the cart
function saveData(data) {
    //append the data to the basket
    basket.push(data);

    alert(JSON.stringify(data));
    //store the data in the browser
    localStorage.setItem("cart",JSON.stringify(basket));
};
