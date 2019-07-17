// window.onload = function() {
//     let todos = [];

//     const board = document.createElement('div');
//     board.className = 'board';
//     board.id = 'board';

//     const container = document.createElement('div');

//     const input = document.createElement('input');
//     input.id = 'todo'
//     input.placeholder = "Write here...";

//     const button = document.createElement('button');
//     button.innerHTML = 'Add';

//     container.appendChild(input);
//     container.appendChild(button);

//     const list = document.createElement('ul');

//     const renderTodos = () => {
//         list.innerHTML = "";

//         todos.forEach((todoHtml, index) => {
//             const todo = document.createElement('li');
//             todo.className = 'todo';
//             todo.id = `todo-${index}`;
//             todo.innerHTML = todoHtml;

//             const btn = document.createElement('button');
//             btn.innerHTML = "DELETE"
//             todo.appendChild(btn);

//             btn.addEventListener('click', event => {
//                 const id = parseInt(todo.id.split('-')[1]);
//                 todos = todos.filter((_, index) => index !== id);
//                 renderTodos();
//             })
//             list.appendChild(todo);
//         });
//     }

//     const buttonHandler = function(event) {
//         if(!input.value || input.value.length < 3) {
//             alert('Input cannot be null or less than 3 chars');
//         } else {
//             todos.push(input.value);  
//             input.value = ""
//             renderTodos()
//         }

//     }

//     button.addEventListener('click', buttonHandler)

//     board.appendChild(container);
//     board.appendChild(list);
//     document.body.appendChild(board);

// }

//Emiliano code
// let names = ['Emiliano', 'Ejiro', 'Sabina', 'Jack', 'Peter']

// let button = document.querySelector('.button');
// let box = document.querySelector('.box')


// button.addEventListener('click', ()=>{
//     greet('ejiro');
// })




// let greet = (name)=> {
//     let p = document.createElement('p')
//     console.log(name)
//     box.appendChild(p)
//     p.innerHTML = `Hello ${name}`
// }



// let greet = function(name){

//     console.log(name)
//     box.appendChild(p)
//     p.innerHTML = `Hello ${name}`
// }






// let names = ['Emiliano', 'Ejiro', 'Sabina', 'Jack', 'Peter']

// let button = document.querySelector('.button');
// let box = document.querySelector('.box')




//  es5 for looping inside an array 

// for(var i=0; i < names.length; i++){
//     console.log(names[i])
// }


// new methods 

// MAP, FOREACH

// console.log('OLD ARRAY', names)

// names.forEach(n=>{console.log('OLD ARRAY', n)})

// let newArray 

// newArray = names.map(name=>{

//    let greetPerson = `Hello ${name}`
//    return greetPerson

// })

// console.log('NEW ARRAY', newArray)





// button.addEventListener('click', ()=>{    
//     newFunc()
// })

// let newFunc = ()=> {
//     names.forEach(name=>{ greet(name)})  
// }


// let greet = (names)=> {
//     let p = document.createElement('p')
//     box.appendChild(p)
//     p.innerHTML = `Hello ${names}`
// }





// Mark plays archery
// age: 27
// nationality: english
// In one match it has 4 shots
// First shot > 8/10
// Second shots> 10/10
// third shot > 4/10
// fourth shot > 6/10

// John plays archery
// age: 29
// nationality: american
// In one match it has 4 shots
// First shot > 8/10
// Second shots> 7/10
// third shot > 8/10
// fourth shot > 7/10

// If he scores 25 or more points gets the Bronze medal
// If he scores 30 or more points gets the Silver medal
// If he scores 35 or more points gets the Gold medal

// let Mark = {
//     name: 'Mark',
//     age: 27,
//     nation: 'England',
//     points: [8, 10, 2, 5]

//   }


//   let John = {
//       name: 'John',
//       age: 29,
//       nation: 'american',
//       points: [8, 7, 8, 10]

//   }

// let scoreTotal = (a, b) => {return a + b}


//   // Calculate Mark's score 
//   let markScore = Mark.points.reduce(scoreTotal)
//   console.log(markScore)


//    // Calculate John's score
//   let johnScore = John.points.reduce(scoreTotal)
//   console.log(johnScore)


// Create a function that taking into account all the possibile outcomes, prints in the console the name of the player, his score, and the medal he won

// if (markScore >= 35) {
//     console.log('gold')
// } else if (markScore >= 30) {
//     console.log('silver')
// } else if (markScore >= 25) {
//     console.log('bronze')
// } else {
//     console.log('nothing')
//  }

// let johnReward = () => { 
//     if (johnScore >= 35) {
//         console.log('gold')
//         return 'gold'
//     } else if (johnScore >= 30) {
//         console.log('silver')
//         return 'silver'
//     } else if (johnScore >= 25) {
//         console.log('bronze')
//         return 'bronze'
//     } else {
//         console.log('nothing')
//         return 'nothing'
//     }
// }


// console.log(`${Mark.name} scored ${markScore} points and was rewarded a medal`)


// console.log(johnReward)


// let printInConsole = (name, age, score)=> {

//     if(score >= 35) {
//         console.log(`${name} is ${age} of age. He scored ${score} and he got a GOLD `)
//     } else if (score >= 30) {
//         console.log(`${name} is ${age} of age. He scored ${score} and he got a SILVER`)
//     } else if (score >= 25) {
//         console.log(`${name} is ${age} of age. He scored ${score} and he got BRONZE`)
//     } else {
//         console.log(`${name} is ${age} of age. He scored ${score} and he got NOTHING`)
//     }

// }

// printInConsole('Mark', 28, 38)
// printInConsole('John', 28, 15)


//simple app


let btn = document.querySelector('.button')
let name = document.getElementById('name')
let age = document.getElementById('age')
let score =  document.getElementById('score')

const list = document.querySelector('.board-list')

btn.addEventListener('click', () => {
    showScore()
})

let showScore = () => {


    if (score.value > 0) {
        switch (true) {
            case score.value >= 35: console.log(`${name.value} is ${age.value} years of age. He scored ${score.value} and he got a GOLD `); break;
            case score.value >= 30: console.log(`${name.value} is ${age.value} years of age. He scored ${score.value} and he got a SILVER `); break;
            case score.value >= 25: console.log(`${name.value} is ${age.value} years of age. He scored ${score.value} and he got a BRONZE `); break;
            default: console.log(`${name.value} is ${age.value} years of age. He scored ${score.value} and he got NOTHING `); break;
        }


        const scoreCard = document.createElement('li');
        scoreCard.className = 'scoreCard';
        scoreCard.id = `scoreCard`;
        scoreCard.innerHTML = `${name.value} is ${age.value} years old with a final score of ${score.value} points.`;
        
        list.appendChild(scoreCard);


    } else {
        alert('your score is invalid')
    }

}

