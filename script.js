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
const isElectric = document.querySelectorAll(".radio-btn")
const showCar = document.querySelector('.show-car')

const carDetails = document.querySelector('.car-details')


var car = {
    carName: carName.value,
    model: model.value,
    year: year.value,
    isElectric: isElectric.value
}


console.log(car)
showCar.addEventListener('click', () => {
    carDetails.innerHTML = `نام برند :${carName.value}   <br> مدل : ${model.value} <br> سال ساخت :${year.value}<br>`
    // for(i in isElectric){
    // if(isElectric.value[i] =="بله"){
    //     carDetails.innerHTML = `ماشین برقی هست`
    // }
    // else{
    //     carDetails.innerHTML = `ماشین برقی نیست`

    // }

    // }
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
    if(inputArray.value !== ""){
        array.push(inputArray.value)
        shoppingList.innerHTML +=inputArray.value + " "
       firstItem.innerHTML = `اولین عنصر : ${array[0]}`
       lastItem.innerHTML = ` آخرین عنصر : ${array[array.length-1]}`
       listLength.innerHTML = `طول آرایه : ${array.length}`
        inputArray.value = ""
        firstItem.value =  ''
        lastItem.value=''
        listLength.length = ""

    }
   
})