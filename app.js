const db = require("./guestdb")
const yargs = require("yargs")
const {argv} = require("yargs")
/* console.log(chalk.green.bgBlue('Hello world!')); 
console.log(chalk.gray.inverse.bold('Hello world!'));  */

//functions names wtrk denne encpasulation concept eken

/* Project */
//guest = id,name,address,contact,visit date

/* db.addGuest()
db.updateGuest()
db.deleteGuest()
db.readGuest()
db.listGuest() */
/* console.log(process.argv) */

/* const command = process.argv
if (command [2] === "add"){
    db.addGuest()
}else if(command [2] === "update"){
    db.updateGuest()
} */
yargs.version("1.1.2")

//Add
yargs.command({
    command:"add",
    describe:"To add a guest",
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type:"string"
        },
        address:{
            describe:"Address",
            demandOption:true,
            type:"string"
        },
        contact:{
            describe:"Number",
            demandOption:true,
            type:"string"
        },
        visit_date:{
            describe:"Date",
            demandOption:true,
            type:"string"
        }
    },
        //short hand method
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contact,argv.visit_date)
       /*  console.log("Name =",argv.name)
        console.log("Address =",argv.address)
        console.log("Contact Number =",argv.contact)
        console.log("Date Visited =",argv.visit_date) */
    }
})

//Update
yargs.command({
    command:"update",
    describe:"To update a guest",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        },  
        name:{
            describe:"Name",
            type:"string"
        },
        address:{
            describe:"Address",
            type:"string"
        },
        contact:{
            describe:"Number",
            type:"string"
        },
        visit_date:{
            describe:"Date",
            type:"string"
        }
    },
    //long hand method
    handler:function(argv){
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact,argv.visit_date)
    }
})

//Delete
yargs.command({
    command:"delete",
    describe:"To delete a guest",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        } 
    },
    handler(argv){
        db.deleteGuest(argv.id)
    }
})

//Read
yargs.command({
    command:"read",
    describe:"To read a guest",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        } 
    },
    handler(argv){
        db.readGuest(argv.id)
    }
})

//List
yargs.command({
    command:"list",
    describe:"List all guests",
    handler(){
        db.listGuest()
    }
})



//get added data
yargs.parse()
/* console.log(yargs.argv) */
