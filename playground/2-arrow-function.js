//const square = function (x) {
//    return x*x;
//}

//const square = (x) => {
//    return x*x
//}

//const square = (x) => x * x

//console.log(square(3))

const  event = {
    name:'Birthday party',
    guestList:['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for: ' + this.name)
        this.guestList.forEach(item => console.log(item + " " + this.name))
    }
}

event.printGuestList()