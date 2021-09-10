const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "$aveDatmoney291",
  database: "employeems_db",
})

connection.connect((err) => {
  if (err) throw err
  // preSearch()
})

const inquirer = require("inquirer")
// const connection = require("./connection")

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

    .then((answer) => {
      switch (answer.choice) {
        case "Add Department":
          return addDepartment()

        case "Add Employee":
          return addEmployee()

        case "Add Role":
          return addRole()

        default:
          console.log(`Invalid`)
      }
    })
}

const addDepartment = () => {
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
          helloUser()
        }
      )
    })
}

const addEmployee = () => {
  inquirer.prompt(
    [
      {
        name: "firstname",
        type: "input",
        message: "What is this employee's first name?",
      },
      {
        name: "lastname",
        type: "input",
        message: "What is this employee's last name?",
      },
      {
        name: "role",
        type: "input",
        message: "What is this employee's role?",
      },
      {
        name: "managerID",
        type: "input",
        message: "What is this employee's manager ID?",
      },
    ].then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",

        {
          firstname: answer.firstname,
          lastname: answer.lastname,
          role: answer.role,
          managerID: answer.managerID,
        },

        (err) => {
          if (err) throw err
          console.log("Your employee was added successfully!")
          helloUser()
        }
      )
    })
  )
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
          helloUser()
        }
      )
    })
}

helloUser()
