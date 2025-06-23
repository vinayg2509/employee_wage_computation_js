console.log("Welcome to employee wage computation");

// ! UC1 - Check Attendance

// Define a class named 'employee'
class employee {

    // Constructor to initialize employee details
    constructor(empId, empName) {
        this.empId = empId;                      // Assign employee ID
        this.empName = empName;                  // Assign employee name
        this.empAttendance = this.checkAttendance(); // Determine and store attendance
    }

    // Method to randomly check attendance
    checkAttendance() {
        // Returns "Absent" if random number is 1, otherwise "Present"
        return Math.floor(Math.random() * 2) ? "Absent" : "Present";
    }


    //! UC2-CalculateDailyWage

    calculateMonthlyWage()
    {
        const WAGE_PER_HOUR=20
        const FULL_DAY_HOUR=8
        return this.empAttendance==="Present"?WAGE_PER_HOUR*FULL_DAY_HOUR:0;
    }

   
    // Method to display employee details
    displayDetails() {
        console.log(`Employee ID : ${this.empId} and Employee name : ${this.empName} was  ${this.empAttendance} and employee earned ${this.calculateMonthlyWage()}`);
    }
}


// Create an instance of employee
let emp1 = new employee(1455, "Tom");

// Call the method to display employee information
emp1.displayDetails();
