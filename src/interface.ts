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