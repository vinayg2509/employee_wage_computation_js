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

    // Method to display employee details
    displayDetails() {
        console.log(`Employee ID : ${this.empId} and Employee name : ${this.empName} is ${this.empAttendance}`);
    }
}

// Create an instance of employee
let emp1 = new employee(1455, "Tom");

// Call the method to display employee information
emp1.displayDetails();
