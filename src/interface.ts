interface chaioder{
    type:string;
    suger:number;
    stong:boolean
}
function makechai (order:chaioder){
    console.log(order);
    
}
function sarvechai (order:chaioder){
    console.log(order);  
}
type teaRecipe = {
    water:number,
    milk:number
}
class masalchai implements teaRecipe {
    water = 100;
    milk= 50
}
// interface cupsize = 
interface Box<T>{
    content :T
}
const numberBox :Box<number>={content:10}
const numberB :Box<string>= {content:"Namdev"}

interface ApiPropise <T>{
    status:number,
    data:T
}
const response:ApiPropise<{flavour:string}> = {
    status:404,
    data:{flavour:"masala  Chai"}
}