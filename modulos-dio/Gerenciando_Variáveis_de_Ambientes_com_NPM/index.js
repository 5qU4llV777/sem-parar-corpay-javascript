import connectDatabase from "./database/data.js";

async function main() {
    // console.log(process.env.USERDATABASE)
    // console.log(process.env.PASSWORDDATABASE)
    // console.log(process.env.HOSTDATABASE)
    // console.log(process.env.PORTDATABASE)
    // console.log(process.env.NAMEDATABASE)
    await connectDatabase("kakashi", "hatake");
    await connectDatabase("naruto", "uzumaki");
}

main();
