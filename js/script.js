/*************************************************************
* BatList
*************************************************************/

$(document).ready(function () {
    //Arrey todo
    var elements = [
        {
            text: "Revisione Batmobile",
            completed: true,
        },
        {
            text: "Rendere la mia voce meno minacciosa",
            completed: false,
        },
        {
            text: "Mostrare a Robin come guidare la Batmobile",
            completed: true,
        },
        {
            text: "Portare Robin a lezione di guida",
            completed: false,
        },
        {
            text: "Essere molto inquietante",
            completed: false,
        },
        {
            text: "Pulire la Batcaverna",
            completed: false,
        },
        {
            text: "Mettere qualche luce ambient nella Batcaverna",
            completed: true,
        },
        {
            text: "Permettere a Alfred di abbracciarmi",
            completed: false,
        },
    ];

    //Refs
    var list = $(".todo-list");
    var template = $("#template li");
    var input = $("input");

    //Popolare HTML
    for(var i = 0; i < elements.length; i++ ){
        var task = elements[i];
        var item = template.clone();
        item.find(".text").text(task.text);
        list.prepend(item);
    };

    //Inserire nuovi elementi da input
    input.keyup(function(e){
        if(e.which === 13) {
            var newTask = input.val().trim();

            if(newTask !== "") {
                var item = template.clone();
                item.find(".text").text(newTask);
                list.prepend(item);
            }

            //Reset
            input.val("");
        }
    });

    //Rimozione task
    $("body").on("click", ".todo-list li i", function(){
        $(this).parent("li").remove();
    });

    //Sbarrare tasks complete
    $("body").on("click", ".todo-list li .text", function(){
        $(this).toggleClass("completed");
    });




    //End doc ready
});