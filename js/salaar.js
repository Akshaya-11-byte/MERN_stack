const vegetables=["onion","tomato","bringal","cabbage","potato","pumpkin","cauliflower"]
//vegetables.forEach(veg=>console.log(veg));
function something(m,callback){
    console.log(m+"Something Something");
    callback();
}
function character(){
    console.log("casting:Akki,Akshaya")
}
//something("Movie :",character)
//promise
let promise=new Promise((resolve , reject)=>{
    resolve("Success");
}
);
//promise.then(result => console.log(result));
async function sum() {
    return 7+9;    
}
//sum().then(console.log)
let std={
    Name:"Akshaya",
    Age:22,  
};
let json=JSON.stringify(std);
console.log(json);