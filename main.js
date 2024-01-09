function probl(){
    const a = Number(prompt())*10
    document.querySelector('.div').innerText = `${a}`
    document.querySelector('.img').classList.add('img1')
}
function probl2(){
    const number = Number(prompt('Введите трехзначное число'));
    document.querySelector('.div2').innerText =`${number%10 * 100 + (number/10 | 0) % 10 * 10 + (number/100 | 0) % 10}`
    document.querySelector('.img2').classList.add('img1')
}
function probl3(){
    const number = Number(prompt('Введите целое число'));
    function checkNum(num){
        const a =['четное', 'нечетное']
        return a[num % 2]
    }
    document.querySelector('.div3').innerText =`${checkNum(number)}`
    document.querySelector('.img3').classList.add('img1')
}