let library = [
    "Apprendre JavaScript en 24 heures",
    "Le guide complet de HTML5 et CSS3",
    "JavaScript for beginners",
    "Data science",
    "Python pour les débutants",
  ];

  let total;
  let javascript=0;

for( let i=0 ; i< library.length ; i++){
    books=library[i];

    if(books.toLowerCase().includes("javascript")){
        console.log(`${books}  is about JavaScript.`);

        javascript++
    }


    else{
        console.log(books);
    }
}

total=library.length;

let summary ={
    booksjs:javascript,
    bookstotal:total,

}

console.log(`Total number of book is ${summary.bookstotal} Number of books about JavaScript ${summary.booksjs} `);