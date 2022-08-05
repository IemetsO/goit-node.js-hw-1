// const yargs = require("yargs");
// const {hideBin} = require("yargs/helpers")
const {program} = require("commander")
const contacts = require("./db/contacts.js");


const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const listOfContacts = await contacts.listContacts();
            console.log(listOfContacts);
            break;

        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;

        case "add":
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;

        case "remove":
            const removedContact = await contacts.removeContact(id);
            console.log(removedContact);
            break;

        default:
            console.log("unknown action");
    }
}



// const arr = hideBin(process.argv);
// const {argv} = yargs(arr);
// invokeAction(argv);

program
    .option("--action <type>")
    .option("--id <type>")
    .option("--name <type>")
    .option("--email <type>")
    .option("--phone <type>")

program.parse();
const options = program.opts();
invokeAction(options)
