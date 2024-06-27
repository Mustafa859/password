let secondPlaceHolder = document.querySelector('.Wndplaceholder')
let firstPlaceholder = document.querySelector('.Istplaceholder')
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




function increment(){ 
    let any = Math.floor(Math.random() * characters.length);
let any1 = Math.floor(Math.random() * characters.length);
let any2 = Math.floor(Math.random() * characters.length);
let any3 = Math.floor(Math.random() * characters.length);
let any4 = Math.floor(Math.random() * characters.length);
let any5 = Math.floor(Math.random() * characters.length);
let increasing = (characters[any] + characters[any1] + characters[any2] + characters[any3] + characters[any4] +  characters[any5])
    firstPlaceholder.textContent = increasing

    let here = Math.floor(Math.random() * characters.length);
    let here1 = Math.floor(Math.random() * characters.length);
    let here2 = Math.floor(Math.random() * characters.length);
    let here3 = Math.floor(Math.random() * characters.length);
    let here4 = Math.floor(Math.random() * characters.length);
    let here5 = Math.floor(Math.random() * characters.length);
    let another = (characters[here] + characters[here1] + characters[here2] + characters[here3] + characters[here4] +  characters[here5])
    secondPlaceHolder.textContent = another


}