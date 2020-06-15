// MARBLE DIAGRAMj
const { fromEvent } = rxjs;
const { filter, map } = rxjs.operators;

    
// fromEvent(document.getElementById("myButton"), "click") 
// .subscribe(() => alert("Button has been clicked"));

// --------------------------------------------------------




// fromEvent(document.getElementById("myButton"), "click") // 1.L'observable
//   .pipe(                                                // 2.Filter sur l'observable
//     filter((click) => click.shiftKey),
//     map((event) => ({ x: event.pageX, y: event.pageY })) // il va réagire seulement sur les événemnet filter
//   )
//   .subscribe((coordinates) =>                           // On

//     alert(`Clicked at [${coordinates.x}, ${coordinates.y}]`)
//   );


// -------------------------------------------------
//  On peut mettre le rxjs dans des valeurs qui permet d'avoir plusieur evénement en même temps

//const clickObs = fromEvent(document.getElementById("myButton"), "click");
//const shiftClickObs = clickObs.pipe(filter((click) => click.shiftKey));

//clickObs.subscribe(click => console.log("Do something with the click", click));
//shiftClickObs.subscribe(shiftClick => console.log("Shift Click", shiftClick));
// clickObs.subscribe(console.log);
//console.log(shiftClickObs);




// 1.réagir au click
// 2.filter les clicks sans shiftKe
// 3.extraire les coodonnées de la souris
// 4. afficher les coordonnés dans une alerts

// L'idée de RXJS est de bien séparer les étapes






// application native JS
//-------------------------


// document.getElementById("myButton").addEventListener("click",() => alert("Button has been clicked")
//   );

// document.getElementById("myButton").addEventListener("click", event => { 
//     if (event.shiftKey) {
//         const coordinates = { x: event.x, y: event.y};
//         alert(`clicked at [${coordinates.x}, ${coordinates.y}]`)
//     }
// });

