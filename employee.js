// Display a welcome message on the console
console.log("Welcome to employee wage computation");

// ! UC1 - Check Attendance

// Define a class named 'employee'
class employee {

    // Constructor to initialize employee details
    constructor(empId, empName) {
        this.empId = empId;                      // Assign employee ID
        this.empName = empName;                  // Assign employee name

        // Randomly determine full-time attendance status
        this.empAttendance = this.checkAttendance();

        // Randomly determine part-time attendance status (separately from full-time)
        this.partTimeAttendance = this.checkAttendance();
    }

    // Method to randomly return "Present" or "Absent"
    checkAttendance() {
        // Math.random() gives 0 to 2 → If 1, return "Absent", else "Present"
        return Math.floor(Math.random() * 3) === 1 ? "Absent" : "Present";
    }

    //! UC3 - Calculate wage based on attendance

    calculateDailyWage() {
        const WAGE_PER_HOUR = 20;       // Hourly wage rate
        const FULL_DAY_HOUR = 8;        // Working hours for full-time
        const PART_TIME_HOUR = 4;       // Working hours for part-time

        let dailyWage = 0;              // Wage for full-time attendance
        let partTimeWage = 0;           // Wage for part-time attendance

        // Calculate full-time wage if employee is present
        if (this.empAttendance === "Present") {
            dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
        }

        // Calculate part-time wage if employee is present
        if (this.partTimeAttendance === "Present") {
            partTimeWage = WAGE_PER_HOUR * PART_TIME_HOUR;
        }

        // Return total wage (full-time + part-time)
        return dailyWage + partTimeWage;
    }

    // Method to display employee attendance and total wage
    displayDetails() {
        console.log(`Employee ID : ${this.empId} and Employee name : ${this.empName} was ${this.empAttendance} for full time, and ${this.partTimeAttendance} for part time and employee earned ${this.calculateMonthlyWage()}`);
    }
}

// Create an instance of employee with ID and Name
let emp1 = new employee(1455, "Tom");

// Call the method to display employee attendance and wage
emp1.displayDetails();
