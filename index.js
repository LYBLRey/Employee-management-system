const inquirer = require("inquirer");
const connection = require("./connection");

const helloUser = () => {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: ["Add Department", "Add Employee", "Add Role"],
    })

    .then((answer) => {
      if (answer.choice === "Add Department") {
        addDepartment();
      } else if (answer.choice === "Add Employee") {
        addEmployee();
      } else if (answer.choice === "Add Role") {
        addRole();
      }
    });
};

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
          if (err) throw err;
          console.log("Your department was added successfully!");
          start();
        }
      );
    });
};

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
          if (err) throw err;
          console.log("Your employee was added successfully!");
          start();
        }
      );
    });
};

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
          if (err) throw err;
          console.log("Your role was added successfully!");
          start();
        }
      );
    });
};
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

helloUser();
