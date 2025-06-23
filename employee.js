// Display a welcome message on the console
console.log("Welcome to employee wage computation");

// Define a class named 'employee'
class employee {
    constructor(empId, empName) {
        this.empId = empId;
        this.empName = empName;

        // Randomly determine attendance statuses
        this.empAttendance = this.checkAttendance();        // Full-time
        this.partTimeAttendance = this.checkAttendance();   // Part-time
    }

    // Randomly return one of the three attendance types
    checkAttendance() {
        const attendanceType = ["Absent", "Present", "Part-time"];
        return attendanceType[Math.floor(Math.random() * 2)];
    }

    //! UC4 - Switch Case Calculation
    calculateMonthlyWage() {
        const WAGE_PER_HOUR = 20;
        const FULL_DAY_HOUR = 8;
        const PART_TIME_HOUR = 4;

        let fullTimeWage = 0;
        let partTimeWage = 0;

        // Full-time wage calculation
        switch (this.empAttendance) {
            case "Absent":
                fullTimeWage = 0;
                break;
            case "Present":
                fullTimeWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
                break;
            case "Part-time":
                fullTimeWage = WAGE_PER_HOUR * PART_TIME_HOUR;
                break;
        }

        // Part-time wage calculation
        switch (this.partTimeAttendance) {
            case "Absent":
                partTimeWage = 0;
                break;
            case "Present":
                partTimeWage = WAGE_PER_HOUR * PART_TIME_HOUR;
                break;
            case "Part-time":
                partTimeWage = WAGE_PER_HOUR * PART_TIME_HOUR;
                break;
        }
        
        return  fullTimeWage + partTimeWage;
    }

    // Display method with proper format
    displayDetails() {
        console.log(`Employee ID: ${this.empId} and Employee name: ${this.empName} was ${this.empAttendance.toLowerCase()} for full time, and ${this.partTimeAttendance.toLowerCase()} for part time and employee earned ${this.calculateMonthlyWage()}`);
    }
}

// Create and test an employee instance
let employees =[ new employee(1455, "Vinay"),new employee(1456,"Yogeesh"),new employee(1457,"Pavan")];

for(let employee of employees)
{
    employee.displayDetails()
}
