//declaration des variables 'let et const'
//let age=28;
//const nom="karim";

//declaration des fonctions
    const sayhello= (a)=>{
        alert('hello ARrow function!'+a);
        }

    sayhello("ohtman ");

//template string: si mieux pour faire la concatination
    let ville="rabat";
    //alert(`je suis de ${ville}`);


//spread operator:pour ajouter une attribut à un objet
let person={
    nom:"ali",
    age:27,
    hobby:"football"

}
person={...person,city:"casablanca"};
console.log(person);

//Destructuring
const {nom,age} =person;
//alert(nom+" "+age)


//Array Methods:map-filter-find-some-every-reduce

let notes=[17,18,15,7,10,8,16];
let res= notes.map((value,index,array)=>{
    return value;
  
})
alert (res)
//filter
let resFilter= notes.filter((value)=>{
    return value >=10;
})

alert(resFilter)

//find

let resFind= notes.find((value)=>{
    return value==16;
})
alert(resFind)