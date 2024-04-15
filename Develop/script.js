// Get a reference to the #add-employees-btn element


const addEmployeesBtn = document.querySelector('#add-employees-btn');
//___________________________________________________________________________
// Collect employee data
// TODO: Get user input to create and return an array of employee objects
//Recolección de datos de empleado
const collectEmployees = function() {
  
  let employees=[];
  let addMore= true;
  console.log("Collected Employees:", employees);  // Muestra todos los empleados recogidos

  
  while (addMore){
  let firstName= prompt('Introduce the employee fisrt name');
  let lastName= prompt('Introduce the employee last name');
  let salary= parseFloat( prompt('Introduce employee salary'));


  return employees;
  //que pasa si no es numero


}
// TODO: Calculate and display the average salary
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary=employeesArray.reduce((total,employee)=> {  //  Calcula el promedio numérico.
    return total + parseFloat(employee.salary); //convierte el string employee.salary a un número de punto flotante.
  }, 0);
  let averageSalary= totalSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employees is: $${averageSalary.toFixed(2)}`); // muestra el promedio como un número con dos decimales.
  
}

// Select a random employee
 // TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  let randomIndex= Math.floor(Math.random () * employeesArray.length);
 let randomEmployee= employeesArray[randomIndex];
 
console.log(`Congratulations to ${randomEmployee.firstName}  ${randomEmployee.lastName}, our random drawing winner!` );

}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
