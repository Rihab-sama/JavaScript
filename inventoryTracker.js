
let inventory = [
    { name: "Pommes", quantity: 10 },
    { name: "Bananes", quantity: 4 },
    { name: "Pastek", quantity: 40 },
    { name: "Citron", quantity: 12 },
  ];
let total ;  
let restock = 0;

for( let i = 0 ; i < inventory.length ; i++){
    let item = inventory[i];

    if( item.quantity <5 ){
        console.log(`${item.name} needs restocking.`);

        restock++;
    }

    else{
        console.log(`${item.name}: ${item.quantity}`);
    }

}

total=inventory.length;

let summary = {
    totalitems : total,
    itemsrestocking : restock,
    
  };


console.log(`le totale est ${summary.totalitems} Number of items that need restocking is ${summary.itemsrestocking}  `);  

