console.log("Welcome to employee wage computation");


// ! UC1-CheckAttendance

class employee{

    constructor(empId,empName)
    {
        this.empId=empId
        this.empName=empName
        this.empAttendance=this.checkAttendance()
    }


    checkAttendance()
    {
        return Math.floor(Math.random()*2)?"Absent":"Present"
    }

    displayDetails()
    {
        console.log(`Employee ID :${this.empId} and Employee name :${this.empName} is ${this.empAttendance}`);
        
    }
}

let emp1=new employee(1455,"Tom")
emp1.displayDetails()