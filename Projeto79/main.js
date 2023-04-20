menuListArray = ["Pizza vegetariana","Pizza de peperoni","Pizza de carne de sol"
,"Pizza de abacaxi","Pizza portuguesa"];

function getMenu(){
    var htmldata = "";
    menuListArray.sort();
    for(var i=0;i<menuListArray.length;i++){
        htmldata=htmldata + menuListArray[i] + '<br>';
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
    var htmldata = "";
    var imgtags='<img id="im1" src="images/pizzaImg.com"/>';
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata=""
    for(var i=0;i<menuListArray.lenth;i++){
        htmldata=htmldata + menuListArray[i] + '<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
    var item = document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}