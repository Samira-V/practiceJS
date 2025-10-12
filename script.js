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
const carName = document.querySelector(".name")
console.log(carName.value)
const model = document.querySelector('.model')

const year = document.querySelector('.year')
const isElectric = document.querySelectorAll(".yes-btn")
const isNotElectric = document.querySelectorAll(".no-btn")
const showCar = document.querySelector('.show-car')

const carDetails = document.querySelector('.car-details')


var car = {
    carName: carName.value,
    model: model.value,
    year: year.value,
    isElectric: isElectric.value

}



showCar.addEventListener('click', () => {
    if (car.isElectric === "بله") {
        carDetails.innerHTML = `نام برند :${carName.value}   <br> مدل : ${model.value} <br> سال ساخت :${year.value}<br> ماشین برقی است`

    }
    else {
        carDetails.innerHTML = `نام برند :${carName.value}   <br> مدل : ${model.value} <br> سال ساخت :${year.value}<br> ماشین برقی نیست`

    }
})


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

const opration = [plus.value, minus.value, equal.value, divide.value, multiple.value]
console.log(opration)
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

equal.addEventListener('click', () => {

if(opr = display.value.split("+")){
    
    // opr = display.value.split("*")
    // opr = display.value.split("/")
    opr.map(item => {
        Number(item)

    })
    console.log(opr)

    const total = opr.reduce(function (result, item) {
        return (result += Number(item))
    }, 0)

    display.value = total
}

  


}




);



