// Display a welcome message on the console
console.log("Welcome to employee wage computation");

// Define a class named 'employee'
class employee {
    constructor(empId, empName) {
        this.empId = empId;
        this.empName = empName;

       this.totalWage=this.calculateMonthlyWage()
    }

    // Randomly return one of the three attendance types
    checkAttendance() {
      
        return Math.floor(Math.random() * 3);
    }

    //!UC5_Monthly_Wage

    getDailyHour()
    {
        const FULL_DAY_HOUR = 8;
        const PART_TIME_HOUR = 4;
        let dailyHour=this.checkAttendance()
        switch(dailyHour)
        {
            case 1:return 8;break;
            case 2:return 4;break;
            default :return 0;break
        }
    }
    calculateMonthlyWage() {
        const WAGE_PER_HOUR = 20;
        let totalWage=0;
       
       for(let days=1;days<=20;days++)
       {
        let hours=this.getDailyHour()
        totalWage+=hours*WAGE_PER_HOUR
       }
                
        return  totalWage
    }

    // Display method with proper format
    displayDetails() {
        console.log(`Employee ID: ${this.empId} and Employee name: ${this.empName} and earned RS.${this.calculateMonthlyWage()} for 20 days`);
    }
}

// Create and test an employee instance
let employees =[ new employee(1455, "Vinay"),new employee(1456,"Yogeesh"),new employee(1457,"Pavan")];

for(let employee of employees)
{
    employee.displayDetails()
}
