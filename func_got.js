var asoaif = require('asoiaf-api');

var char = "Jon Snow"

var name, gender, culture, born, played_by,aliases;




//function node_maker (char){
var obj = asoaif.getCharacterByName(char);

name = obj[0].name;
gender = obj[0].gender;
culture = obj[0].culture;
born = obj[0].born;
played_by = obj[0].playedBy[0];
aliases = obj[0].aliases[1];

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

clog();


