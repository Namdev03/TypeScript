class chai {
    flavour:string;
    price:number;
    constructor (flavour:string,price:number){
        this.flavour = flavour
        this.price = 43
    }
}
 const  masalachai = new chai("ginger",23)
 masalachai.flavour= "masala"
 class chai {
    public flavour:string="masala chai"
    private secretIngrediants = "cardamon"
    reveal(){
        return this.secretIngrediants
    }
    protected shopName = "chai corner"
 }
 const c = new chai()