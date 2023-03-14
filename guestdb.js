/* Data save file */
const chalk = require('chalk');
const fs = require('fs')
const db_file="data.json"

//Just for learning
/* //console.log("db")
const name="Anuradha" */

//guest = id,name,address,contact no,visit date

//create
const addGuest =(name,address,contact,visit_date)=>{
    const guests =loadGuests()
    const length = guests.length
    let id=1;
    if (length>0) {
        id=guests[length-1].id+1
    }
    guests.push({
        id,
        name,
        address,
        contact,
        visit_date
    })
    saveGuest(guests)
    console.log(chalk.green("Data Saved!")) 
}

//updating
const updateGuest =(id,name,address,contact,visit_date)=>{
    const guests = loadGuests()
    const guestIndex = guests.findIndex((guest)=>guest.id === id)
     //console.log(guestIndex) 
    if(guestIndex != -1){
        const guest= guests[guestIndex]
        guest.name= name ? name:guest.name;
        guest.address= address ? address:guest.address;
        guest.contact= contact ? contact:guest.contact;
        guest.visit_date= visit_date ? visit_date:guest.visit_date;
          console.log(chalk.yellow("Record Updated",id)) 
          saveGuest(guests) 
    }else{
        console.log(chalk.yellow.inverse("Nothing to Update")) 
    }
  
   
}


//deleting
const deleteGuest =(id)=>{
    const guests = loadGuests()
    const newGuests = guests.filter((guest)=>{
        return guest.id!=id
    })
    if(guests.length>newGuests.length){
        saveGuest(newGuests)
        console.log(chalk.red("Deleted",id)) 
    }else{
        console.log(chalk.red.inverse("Nothing to delete"))
    }
    
}

//reading
const readGuest =(id)=>{
    const guests = loadGuests()
    const guest = guests.find((guest)=>{
        return guest.id === id
    })
    if (guest) {
        console.log(chalk.blue("Guest id:",id))
        console.log(guest) 
    }else{
        console.log(chalk.blue.inverse("Invalid input"))
    }
    
}

//listing
const listGuest =()=>{
    console.log(chalk.magenta("Guests List")) 
    const guests = loadGuests()
          guests.forEach((guest)=>{
            console.log(guest)
          })
}
//adding
const saveGuest =(guests)=>{
    const dataJSON=JSON.stringify(guests)
    fs.writeFileSync(db_file,dataJSON)
}
const loadGuests =()=>{
    try {
        const dataBuffer = fs.readFileSync(db_file)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
     
}

module.exports={addGuest,updateGuest,deleteGuest,readGuest,listGuest}

