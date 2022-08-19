var restaurantMenu={
    name: "JS Pizza",
    items:[
        {
            itemName:"Pepperoni Pizza",
            itemPrice: 10
        },
        {
            itemName:"Cheese pizza",
            itemPrice: 8
        },
        {
            itemName:"Meat Combo Pizza",
            itemPrice: 12
        },
        {
            itemName:"Veggie Combo Pizza",
            itemPrice: 12
        },{
            itemName:"Bread Sticks",
            itemPrice: 5
        }

    ],
    listMenuItems:function(){
        var menulist=""
        for(let i=0;i<=4;i++){
            
            // console.log(this.items[i].itemName)
            // console.log(this.items[i].itemPrice)
       
            menulist+=i + ". " + this.items[i].itemName + " - $ " + this.items[i].itemPrice + "\n"
            
        }
        alert(menulist)
        var answer=prompt("which item would you like, enter the number of the item")
        this.selectMenuItem(answer)
       
    },
    selectMenuItem: function(number){

        alert(this.items[number].itemName)
    }
    
}
