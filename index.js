const inquirer = require('inquirer');
const connection = require('./connection');

const helloUser = () => {
    inquirer
      .prompt({
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'Add Department',
          'Add Employee',
          'Add Role'
          
        ],
      })

      .then((answer) => {
        switch (answer.choice) {
          case 'Add Department':
            addDepartment();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Add Role':
            addRole();
            break;
  
          default:
            console.log(`Invalid`);
            break;
        }
      });
  };

  const addDepartment = () => {
    inquirer
      .prompt({
        name: 'name',
        type: 'input',
        message: 'What will you name this department?',
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
              // re-prompt the user for if they want to bid or post
              start();
            }
          );
        });
    //     const query = 'SELECT position, song, year FROM top5000 WHERE ?';
    //     connection.query(query, { artist: answer.artist }, (err, res) => {
    //       res.forEach(({ position, song, year }) => {
    //         console.log(
    //           `Position: ${position} || Song: ${song} || Year: ${year}`
    //         );
    //       });
    //       runSearch();
    //     });
  };

  helloUser();