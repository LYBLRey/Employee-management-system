const inquirer = require("inquirer")
const connection = require("./connection")

const helloUser = () => {
  inquirer
    .prompt({
     
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
          { title: "Add Department", value: "Add Department" },
          { title: "Add Employee", value: "Add Employee" },
          { title: "Add Role", value: "Add Role" },
        ],
    })

    console.log("hello world")

    .then(answer => {

      console.log("we made it baby");
      // if (answer.choice === "Add Department") {
      //   addDepartment();
      // } else if (answer.choice === "Add Employee") {
      //   addEmployee();
      // } else if (answer.choice === "Add Role") {
      //   addRole();
      // } else {
      //   connection.end();
      // }
      switch (answer.choice) {
        case "Add Department":
          addDepartment();

        case "Add Employee":
          addEmployee();

        case "Add Role":
          addRole();

        default:
          console.log(`Invalid`);
      }
    })
    };

const addDepartment = () => {
  console.log("test 12312o3123")
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What will you name this department?",
    })
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",

        {
          name: answer.name,
        },
        (err) => {
          if (err) throw err
          console.log("Your department was added successfully!")
          start()
        }
      )
    })
}

const addEmployee = () => {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What is this employee's name?",
    })
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",

        {
          name: answer.name,
        },
        (err) => {
          if (err) throw err
          console.log("Your employee was added successfully!")
          start()
        }
      )
    })
}

const addRole = () => {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What is this role are you creating?",
    })
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET ?",

        {
          name: answer.name,
        },
        (err) => {
          if (err) throw err
          console.log("Your role was added successfully!")
          start()
        }
      )
    })
}
connection.connect((err) => {
  if (err) throw err
  // run the start function after the connection is made to prompt the user
  start()
})

helloUser()
