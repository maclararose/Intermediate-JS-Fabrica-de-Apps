function validation(){

    var valNumber = document.getElementById("number").value;
    var nameValue = document.getElementById("name").value;

    if(valNumber.length > 2){
        alert("Enter two numbers!");

        document.Form.number.focus();

        return false;
    
    }else if(nameValue.length < 3){
        alert("Enter a valid name!");
        
        document.Form.number.focus();

        return false;
    }else{
        alert("Successfully submitted form!");
        
        return true;
    }
}