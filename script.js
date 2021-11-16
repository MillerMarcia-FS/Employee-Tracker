class Employee{
    constructor(name,age){
      this.name= name;
      this.age= age;
      this.annualSalary= 0;
    }
  }
  
  class PartTime extends Employee{
    constructor(name,age,hours,payRate){
      super(name,age); 
      this.payRate= payRate;
      this.hours= hours;
      this.employeeType= "Part Time";   
    }

    calculatePay(){
      let annualSalary = (this.payRate*this.hours)*52;
    }
  }
  
  class FullTime extends Employee{
    constructor(name,age,payRate){
      super(name,age);
      this.payRate= payRate;
      this.employeeType= "Full Time";
    }

    calculatePay(){
      let annualSalary = (this.payRate*this.hours)*52-1000;
    }
  }
  
  class Main{
    constructor(){
      console.log("Main Created"); 
      this.employeeArray=[];
      const fullTime = new FullTime("Buffy",24,12,"Full Time");
      const partTime = new PartTime("Willow",46,20,18,"Part Time");
      const fullTime2 = new FullTime("Xander",55,23,"Full Time");
      this.employeeArray.push(fullTime);
      this.employeeArray.push(partTime);
      this.employeeArray.push(fullTime2);
      this.mainMenu();
      }
  
        mainMenu(){
          console.log(this.employeeArray);
          this.userChoice = prompt("Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee \n4. Display Employee");
          if(this.userChoice == "1"){
            this.addEmployee();
          }  
          else if(this.userChoice == "2"){
            this.removeEmployee();
          }
          else if(this.userChoice == "3"){
            this.editEmployee();
          }
          else if(this.userChoice == "4"){
            this.displayEmployee();
          }
        }
        
        addEmployee(){
          let add;
          add = prompt("Add Employee Name,Age,Hours/Week,Pay Rate (separate each by a comma)");
          let input= add.split(",");
          
          if (input[2]<=39){
            const partTime = new PartTime(input[0],input[1],input[2],input[3]);
            this.employeeArray.push(partTime);
            console.log(this.employeeArray);
            this.mainMenu();
            }
          else {
            const fullTime = new FullTime(input[0],input[1],input[2],input[3]);
            this.employeeArray.push(fullTime);
            console.log(this.employeeArray);
            this.mainMenu();
            }
          }
        
        removeEmployee(){
          let remove;
          remove = prompt("Enter Employee's ID and Name");
          let removeInput = remove.split(",");
          this.employeeArray.splice(this.employeeArray.indexOf(removeInput));
          this.mainMenu();
        }
        
        editEmployee(){
          editEmployee= prompt("Enter new Pay Rate")
          this.mainMenu();      
        }

        displayEmployee(){
          console.log("Employees");
          console.log("ID\tName\tSalary\tHours\tPay Rate\tFT/PT");
          console.log(this.employeeArray);
          this.mainMenu();
        }
    }
  
  (()=>{
    const main = new Main();
  })();
  