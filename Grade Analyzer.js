let notes = [85, 92, 78, 90, 88]; 


let moyenne ;
let excellentNotes = 0; 
let total = 0;


for (let i = 0; i < notes.length; i++) { 
  let note = notes[i]; 

  if (note >= 90) {
    console.log(` ${note} est excellente.`);
    excellentNotes++;
  } else {
    console.log(` ${note} `); 
  }

    total+=note;
}

moyenne= total / notes.length ; 

let summary = {
    totalGrades : total,
    excellentGrades : excellentNotes,
    average : moyenne ,
  };


console.log(`le totale est ${summary.totalGrades} et le totale des note qui sont exellent est ${summary.excellentGrades} et la moyenne est ${summary.average}  `);  


