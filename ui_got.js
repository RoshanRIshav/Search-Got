const readline = require('readline-sync');
var asoaif = require('asoiaf-api');

var input;

var name, gender, culture, born, played_by,aliases;

var obj;







function userInpWhat(inp){
    if (inp == "Valar Doharis"){
        console.log("Welcome"); 
        searchq();
        
    }
    
    else{
        console.log("Kostilus ȳdragon isse Valyrīha\n Eng: Please enter correct greatings in Valyrian");
    }
}

function searchq (){
    var inp = readline.question("What Would You like to know about?")
    input = (""+inp);
    obj = asoaif.getCharacterByName(input);
    name = obj[0].name;
    gender = obj[0].gender;
    culture = obj[0].culture;
    born = obj[0].born;
    played_by = obj[0].playedBy[0];
    aliases = obj[0].aliases[1];
    clog();
}



function clog (){
    

if(gender == ""){
    console.log(obj[0].name);
//    console.log(gender);
    console.log(culture);
    console.log(born);
    console.log(played_by);
    console.log(aliases);   
}

else if(culture == ""){
    console.log(obj[0].name);
    console.log(gender);
//    console.log(culture);
    console.log(born);
    console.log(played_by);
    console.log(aliases);   
}

else if(born == ""){
    console.log(obj[0].name);
    console.log(gender);
    console.log(culture);
//    console.log(born);
    console.log(played_by);
    console.log(aliases);   
}

else if(played_by == ""){
    console.log(obj[0].name);
    console.log(gender);
    console.log(culture);
    console.log(born);
//    console.log(played_by);
    console.log(aliases);   
}

else if(aliases == ""){
    console.log(obj[0].name);
    console.log(gender);
    console.log(culture);
    console.log(born);
    console.log(played_by);
//    console.log(aliases);   
}

else{
    
    console.log(obj[0].name);
    console.log(gender);
    console.log(culture);
    console.log(born);
    console.log(played_by);
    console.log(aliases);
}
    
}




var input1 = readline.question("Valar Morghulis");
userInpWhat(input1)
