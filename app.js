// current-colour
// new-colour-button
// colour-display

//selecting the elements form the web page
const newColourBtn = document.getElementById('new-colour-button');
const currentColourBtn = document.getElementById('current-colour');


const color = [
    '#5ede18', '#e277fe', '#b05eed', '#3aed93', '#3877ef',
    '#fbe652', '#eabb25', '#26a23b', '#eb2c40', '#db2b7e',
    '#14e73b', '#35f8cb', '#303e54', '#bbc52d', '#a8a53b',
    '#877812', '#70511e', '#e3fdfc', '#587968', '#094e23'
];    


//all possible values set of [0-F]
const arr = [
    '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'
]    


//generates the random hex number of 6 bits
function generateRandomColor(){
    let newColor = "";
    for(let i = 0; i < 6; i++)
        newColor += arr[Math.floor(Math.random()*arr.length)];    

    return '#'+newColor;
}    


//event listener works whenever the click is done by the user
newColourBtn.addEventListener('click',()=>{
    const newColor = generateRandomColor();      //color[Math.floor((Math.random()*100)%20)];
    document.body.style.setProperty('background-color', newColor);
    //update the text content of new colour button
    currentColourBtn.textContent = newColor;
})


