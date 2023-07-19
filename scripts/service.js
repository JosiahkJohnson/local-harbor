//our messages will be stored within an array
messages = [
    //{
    //    sender: "Me",
    //    message: "Ello"
    //}, 
    //{
    //    sender: "user",
    //    message: "Whodis?"
    //}
];

//load previous messages
//load the cart from local storage and fill the array
if(JSON.parse(localStorage.getItem("messages"))!=null){
    messages = JSON.parse(localStorage.getItem("messages"));
};

//pointer for the messages container
$messageHistory = $("#messageHistory");
$sending = $("#sending");
$send = $("#send");

//call the draw function when this page loads
draw();

$send.on("click", function() {
    //grab the user's message
    telegram = $sending.val();

    //push the message to the array with the user's name
    messages.push({
        sender: "Me",
        message: telegram
    })

    //save the persistant data
    localStorage.setItem("messages",JSON.stringify(messages));

    //call the draw function
    draw();

    //reload the page
    location.reload();

    //console.log($sending.val());
});

//this function will draw all messages in order on the main text area
function draw() {
    promp = "";
    //loop through and get all of the messages
    for(i = 0; i < messages.length; i++) {
        promp += messages[i].sender + ": " + messages[i].message + "\n";
    }

    $messageHistory.text(promp);
}
