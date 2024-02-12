const btn = document.getElementById('btn')
const title = document.getElementById('title')
const explaination = document.getElementById('explaination')
const container = document.getElementById('container')
const count = document.getElementById('count')
const clap = document.getElementById('clap')
const you = document.getElementById('you')
const bot = document.getElementById('bot')
const rectangle1 = document.getElementById('rectangle1')
const rectangle2 = document.getElementById('rectangle2')
const rectangle3 = document.getElementById('rectangle3')
const rectangle4 = document.getElementById('rectangle4')
const rectangle5 = document.getElementById('rectangle5')
const rectangle6 = document.getElementById('rectangle6')
const indept = document.getElementById('indept')
const cont = document.getElementById('cont')
let mynum = document.getElementById('mynum')
let botnum = document.getElementById('botnum')
const clapsound = new Audio("https://firebasestorage.googleapis.com/v0/b/number-counting-3d576.appspot.com/o/Clap-%5BAudioTrimmer.com%5D_2.mp3?alt=media&token=f0045a93-31e1-4247-ad3f-ff6b2c522e91")
const mycountsound = new Audio("https://firebasestorage.googleapis.com/v0/b/number-counting-3d576.appspot.com/o/y2mate.com%20-%20Undertale%20Voice%20SFX-%5BAudioTrimmer.com%5D_3.mp3?alt=media&token=78f16869-ef73-4b73-a665-36c92b0a1668")
const botcountsound = new Audio("https://firebasestorage.googleapis.com/v0/b/number-counting-3d576.appspot.com/o/y2mate.com%20-%20Undertale%20Voice%20SFX-%5BAudioTrimmer.com%5D_2.mp3?alt=media&token=1e9b7ab5-ea88-4d66-9d88-f285cd14e585")
let timeout;
let number = 0;

you.style.display = 'none'
bot.style.display = 'none'
cont.style.display = 'none'
count.style.display = 'none'
clap.style.display = 'none'
mynum.style.display = 'none'
botnum.style.display = 'none'
rectangle1.style.display = 'none'
rectangle2.style.display = 'none'
rectangle3.style.display = 'none'
rectangle4.style.display = 'none'
rectangle5.style.display = 'none'
rectangle6.style.display = 'none'

if(number === 100) youWin();

btn.onclick = function() {

    you.style.display = 'block'
    bot.style.display = 'block'

    title.style.display = 'none'
    explaination.style.display = 'none'
    btn.style.display = 'none'
    indept.style.display = 'none'

    count.style.display = 'block'
    clap.style.display = 'block'
    mynum.style.display = 'block'

}

count.onclick = function() {
    clearTimeout(timeout);
    const check = number + 1;
    if(check.toString().includes('3') || check % 3 === 0) {
        youLose();
    }
    else{
        mycountsound.play()
        cont.style.display = 'none'
        count.style.display = 'none'
        clap.style.display = 'none'
        rectangle1.style.display = 'block'
        rectangle2.style.display = 'block'
        rectangle3.style.display = 'block'
        mynum.style.display = 'block'
        number++
        mynum.innerHTML = number
        setTimeout(function(){
            botCount()
        }, 625);
    }
}

clap.onclick = function() {
    clearTimeout(timeout);
    const check = parseInt(number + 1);
    if(check % 3 === 0 || check.toString().includes('3')) {
        clapsound.play()
        cont.style.display = 'none'
        count.style.display = 'none'
        clap.style.display = 'none'
        number++
        rectangle1.style.display = 'block'
        rectangle2.style.display = 'block'
        rectangle3.style.display = 'block'
        mynum.style.display = 'block'
        mynum.innerHTML = "Bộp!"
        setTimeout(function(){
            botCount()
        }, 625);
    }
    else{
        return youLose()
    }
}

function botCount(){

    mynum.style.display = 'none'
    rectangle1.style.display = 'none'
    rectangle2.style.display = 'none'
    rectangle3.style.display = 'none'

    const check = parseInt(number + 1);
    if(check % 3 === 0 || check.toString().includes('3')) {
        clapsound.play()
        number++
        rectangle4.style.display = 'block'
        rectangle5.style.display = 'block'
        rectangle6.style.display = 'block'
        botnum.style.display = 'block'
        botnum.innerHTML = "Bộp!"
    }
    else{
        botcountsound.play()
        number++
        rectangle4.style.display = 'block'
        rectangle5.style.display = 'block'
        rectangle6.style.display = 'block'
        botnum.style.display = 'block'
        botnum.innerHTML = number
    }
    setTimeout(function(){
        count.style.display = 'block'
        clap.style.display = 'block'
        cont.style.display = 'block'
        timeout = setTimeout(function(){
            youLose();
        },3000)
        botnum.style.display = 'none'
        rectangle4.style.display = 'none'
        rectangle5.style.display = 'none'
        rectangle6.style.display = 'none'
    },625)
}

function youWin(){
    cont.style.display = 'none'
    mynum.style.display = 'none'
    count.style.display = 'none'
    clap.style.display = 'none'

    container.innerHTML = `
    <h1 id="win">You Win!</h1>
    <button id="restart">Restart</button>
    `
    const restart = document.getElementById('restart')
    restart.onclick = function(){
        location.reload()
    }
}

function youLose(){
    cont.style.display = 'none'
    mynum.style.display = 'none'
    count.style.display = 'none'
    clap.style.display = 'none'

    container.innerHTML = `
    <h1 id="lose">You Lose!</h1>
    <button id="restart">Restart</button>
    `
    const restart = document.getElementById('restart')
    restart.onclick = function(){
        location.reload()
    }
}
