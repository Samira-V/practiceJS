const number = document.querySelector('.number')
const check = document.querySelector('.btn')
const text = document.querySelector('.text')
const textTwo = document.querySelector('.text-2')

check.addEventListener("click", () => {
    if (number.value <= 18) {
        text.innerHTML = "هنوز کوچولویی"
    }
    else {
        text.innerHTML = "سن بالای 18 هست"
    }
    if (number.value <= 30 && number.value >= 18) {
        textTwo.innerHTML = "سن وارد شده بین 30 و 18 هست"
    } else {
        textTwo.innerHTML = "سن وارد شده بین 30 و 18 نیست"

    }
})
number.addEventListener('focus', () => {
    text.innerHTML = ""
    number.value = ""
})


// two 

const showCar = document.querySelector('.show-car')
const carDetails = document.querySelector('.car-details')

const addFormInputs = (event) => {
    event.preventDefault();
    const form = event.target;
    let car = {
        name: form['carName'].value,
        model: form['model'].value,
        year: form['year'].value,
        isElectric: form['isElectric'].value,

    };

    showCar.addEventListener('click', () => {

        carDetails.innerHTML = `نام برند :${car.name}   <br> مدل : ${car.model} <br> سال ساخت :${car.year}<br> ${car.isElectric}  `


    }

    )
};




/////three

const shoppingList = document.querySelector('.shopping-list')
const firstItem = document.querySelector('.first-item')
const lastItem = document.querySelector('.last-item')
const listLength = document.querySelector('.list-length')
const inputArray = document.querySelector('.input-array')
const makeArray = document.querySelector('.make-array')
let array = []
makeArray.addEventListener('click', () => {
    if (inputArray.value !== "") {
        array.push(inputArray.value)
        shoppingList.innerHTML += inputArray.value + " "
        firstItem.innerHTML = `اولین عنصر : ${array[0]}`
        lastItem.innerHTML = ` آخرین عنصر : ${array[array.length - 1]}`
        listLength.innerHTML = `طول آرایه : ${array.length}`
        inputArray.value = ""
        firstItem.value = ''
        lastItem.value = ''
        listLength.length = ""

    }

})


// four 

const fourContainer = document.querySelector(".four-container")
const evenOddNumber = document.querySelector(".even-odd-number")
const evenOdd = document.querySelector(".even-odd")
const evenOddCheck = document.querySelector(".even-odd-check")

evenOddCheck.addEventListener("click", () => {
    if (evenOddNumber.value % 2 === 0) {
        evenOdd.innerHTML = ` عدد ${evenOddNumber.value} زوج هست.`

    }
    else {
        evenOdd.innerHTML = ` عدد ${evenOddNumber.value} فرد هست.`


    }
})
evenOddNumber.addEventListener("focus", () => {
    evenOddNumber.value = ""
})


// five 
const username = document.querySelector(".username")
const age = document.querySelector(".age")
const favorate = document.querySelector(".favorate")
const addFav = document.querySelector(".add-fav")
const checkUser = document.querySelector(".check-user")
const resetUser = document.querySelector(".reset-user")
const userInfo = document.querySelector(".user-info")
const favList = document.querySelector(".fav-list")


let user = { username: '', age: '', favorate: [] }

addFav.addEventListener("click", (e) => {
    e.preventDefault()
    user.favorate.push(favorate.value)
    favorate.value = ""
    favList.innerHTML = user.favorate
    user.age = age.value
    user.username = username.value

})
checkUser.addEventListener("click", (e) => {
    e.preventDefault()
    userInfo.innerHTML = `سن ${user.username} ${user.age} سال است .<br> 
    اولین علاقمندی ${user.username} ${user.favorate[0]} , و آخرین علاقمندی ${user.username} ${user.favorate[user.favorate.length - 1]} است.`

})
resetUser.addEventListener("click", (e) => {
    e.preventDefault()
    username.value = ""
    age.value = ""
    favorate.value = ""
    favList.innerHTML = ""
    user.favorate = []
    user.age = ""
    user.username = ""
    userInfo.innerHTML = ""

})


// calculatur 

const numbers = document.querySelectorAll(".num")
const display = document.querySelector(".display")
const clear = document.querySelector(".clear")
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const equal = document.querySelector('.equal')
const divide = document.querySelector('.divide')
const multiple = document.querySelector('.multiple')

let opration = null
numbers.forEach((number) => {
    console.log(number.innerText)

    number.addEventListener("click", () => {
        display.value += number.innerText
    })
})


clear.addEventListener('click', () => {
    console.log('clear')
    display.value = " "
})

plus.addEventListener('click', () => {
    display.value += plus.innerHTML
})
minus.addEventListener('click', () => {
    display.value += minus.innerHTML
})
multiple.addEventListener('click', () => {
    display.value += multiple.innerHTML
})
divide.addEventListener('click', () => {
    display.value += divide.innerHTML
})
let result = []
equal.addEventListener('click', () => {

    if (display.value.includes('+')) {
        result = display.value.split('+')
        opration = "+"
    }
    else if (display.value.includes('-')) {
        result = display.value.split('-')
        opration = "-"
    }
    else if (display.value.includes('*')) {
        result = display.value.split('*')
        opration = "*"
        console.log(result, opration)
    }
    else if (display.value.includes('/')) {
        result = display.value.split('/')
        opration = "/"
    }

    result.map(item => {
        Number(item)

    })
    switch (opration) {
        case "+":
            display.value = result.reduce(function (result, item) {
                return (result += Number(item))
            }, 0)
            break
        case "-":
            display.value = result.reduce(function (result, item) {
                return result = Math.abs(Number(item) - result)
            }, 0)
            break
        case "*":
            display.value = result.reduce(function (result, item) {
                return (result *= Number(item))
            }, 1)
            break
        case "/":
            for (let i = 0; i < result.length - 1; i++) {

                display.value = result[i] / result[i + 1]
            }
            break
    }
}
);



//  seven 



const hoopNumber = document.querySelector('.hoop-number')
const numbersDivisible = document.querySelector('.numbersDivisible')
const checkDivisible = document.querySelector('.divide-btn')
const errorText = document.querySelector('.text')
let numberArr = []
checkDivisible.addEventListener('click', () => {

    if (hoopNumber.value <= 5) {
        for (let i = 1; i <= 100; i++) {
            if ((i % hoopNumber.value) === 0) {
                numberArr.push(i)
            }
        }
        console.log(numberArr)
        numbersDivisible.innerHTML = numberArr

    }
    else {
        errorText.innerHTML = 'لطفا عدد کوچکتر از 5 وارد کنید'

    }
})

hoopNumber.addEventListener('focus', () => {
    numbersDivisible.innerHTML = ""
    numberArr = []
})

// eight 
const sumEven = document.querySelector('.even-btn')
const evenNum = document.querySelector('.even-number')
const resultSum = document.querySelector('.sum')
sumEven.addEventListener('click', () => {
    sumEvenNumbers(evenNum.value)
})
function sumEvenNumbers(item) {
    let sum = 0
    for (let i = 2; i <= item; i++) {
        if (i % 2 === 0) {
            sum += i

        }
    }
    console.log(sum)
    resultSum.innerHTML = sum
}
evenNum.addEventListener('focus', () => {
    resultSum.innerHTML = ""
    evenNum.value = ""
})


// nine 


const firstInputArray = document.querySelector('.first-input-array')
const oneMakeArray = document.querySelector('.one-make-array')
const secondInputArray = document.querySelector('.second-input-array')
const twoMakeArray = document.querySelector('.two-make-array')
const firstList = document.querySelector('.first-list')
const secondList = document.querySelector('.second-list')
const similarItem = document.querySelector('.similar-item')
const similar = document.querySelector('.similar')
let arr1 = []
let arr2 = []
oneMakeArray.addEventListener('click', () => {
    arr1.push(firstInputArray.value)
    firstList.innerHTML = arr1
    console.log(arr1)
})

twoMakeArray.addEventListener('click', () => {
    arr2.push(secondInputArray.value)
    secondList.innerHTML = arr2
    console.log(arr2)


})
similar.addEventListener("click", () => {
    for (let i = 0; i <= arr1.length-1; i++) {
        for (let j = 0; j <= arr2.length-1; j++) {
            if (arr1[i] === arr2[j]) {
                similarItem.innerHTML += `عدد ${arr1[i]} با ایندکس ${i}<br> از ارایه ی اول با عدد${arr2[j]} با ایندکس ${j} از ارایه ی دوم مساوی است. <br>`
            }

            
        }

    }
})


// ten 
function bakhshpaziri ( a,b,c){
    if(c % a == 0 && c % b == 0 ){
        return "بخش پذیر بر دو عدد"
    }
    if( c % a == 0 && c%b != 0 ){
        return "بر a بخش پذیر است"
    }
     if( c % a != 0 && c%b == 0 ){
        return "بر b بخش پذیر است"
    }
}
const javab = bakhshpaziri( 5,4,12 )
console.log(javab)
