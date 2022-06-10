const inquirer = require('inquirer');
const db = require('./config/connection');
//const mysql = require('mysql2')
const cTable = require('console.table');





async function init() {
    console.log("Welcome Employee Tracker Database ............/n");
    await inquirer.prompt([
        {
            name: "myOptions",
            type: "list",
            message: "What would you like to do ? ",
            choices: ["View all Departments", "View all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "Exit"]
        }
    ]).then(answers => {
        console.log(answers);
        //switch or if else if 
        switch (answers.myOptions) {
            case "View all Departments":
                viewAllDepartments();
                break;
            case "View all roles":
                allroles()
                break;
            case "view all employees":
                allemployees ()
              break;
            case "add a department":
                addDepartment()
                break;
            case "add a role":
                    addRole()
                    break;
            case "Exit":
                console.log("Goodbye ............");
                process.exit(0);
        }


    })
}


// if(answers.myOptions === "View all Departments"){
//     viewAllDepartments();
// } else if(answers.myOptions === "View all roles") {
//     allroles()
// } else if (answers.myOptions === "View all employees") {
//     allemployees()
//     init()
// }else {
//     //for exit 
//     console.log("Goodbye ............");
//     process.exit(0); 
// }








// function to view all departments

 function viewAllDepartments() {

    const sql = `SELECT * FROM department`
    db.query(sql, (err, res) => {
        if (err) {
            console.log(error)
        }
        else {
            return console.table(res)
        }


    })
init()
}

// function to get all roles
function allroles() {
    //const sql = `SELECT * FROM role LEFT JOIN department ON role.department_id =department.id` 
    const sql = `SELECT role.*, department_name
    FROM role
    LEFT JOIN department ON role.department_id =department.id`


    db.query(sql, (err, res) => {
        if (err) {
            console.log(error)
        }
        else {
            return console.table(res)
        }


    })
}

// function to get all employees
function allemployees() {
    // const sql = `SELECT employee.*, role.title
    // FROM employee
    // LEFT JOIN employee ON role.role_id =role.id` 
    const sql = `SELECT * FROM employee`

    db.query(sql, (err, res) => {
        if (err) {
            console.log(error)
        }
        else {
            return console.table(res)
        }


    })
}

function addDepartment() {



    // })


    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the department's name? ",
            
        }
    ]).then(answers => {
        console.log(answers);
    
        const params = answers.department

    const sql = `INSERT INTO department (department_name)
    VALUES('${params}');`


    db.query(sql, (err, res) => {
        if (err) {
            console.log(error)
        }
        else {
            console.log('Department created! Please see updated department list')

            return console.table(viewAllDepartments())
        }
    })

    })




}


function addRole () {

var departments; 

//     const sql = `SELECT * FROM department`
//      const dbquery = await db.query(sql)
        
//     console.log(dbquery)

//    

function getDeptsQuery(){
    const sql = `SELECT * FROM department`
    return db.promise().query(sql)
}

getDeptsQuery()
.then (([rows]) => {
    let department = rows
    const departmentChoices = department.map(({ id, department_name }) => ({
                name: department_name,
                value: id
        }))

    inquirer.prompt([
        {
            name: "role",
            type: "input",
            message: "What is the name of the new role? ",
            
        },
        {
            name: "roleSalary",
            type: "integer",
            message: "What is the salary ",
            
        },
        {
            name: "roleDep",
            type: "list",
            message: "What is the Department? ",
            choices: departmentChoices
        },

    

        
    ]).then(answers => db.addNewDeptQuery(
    
        const role = answers.role
        const salary = answers.roleSalary
        const roleDep = answers.roleDep

    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES('${role}', '${salary}', '${roleDep}');`

    db.query(sql, (err, res) => {
        if (err) {
            console.log(error)
        }
        else {
            console.log('Role created! Please see updated role list')

            return console.table(allroles())
        }
    }

.then(() => init())
})
}



init(); 
