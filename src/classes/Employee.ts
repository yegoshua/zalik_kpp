export class Employee {
    private surname: string;
    private experience: number;
    private hourlyWage: number;
    private hoursWorked: number;

    constructor(surname: string, experience: number, hourlyWage: number, hoursWorked: number) {
    this.surname = surname;
    this.experience = experience;
    this.hourlyWage = hourlyWage;
    this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
    return this.hourlyWage * this.hoursWorked;
    }

    calculateBonus(): number {
    let bonusPercentage = 0;
    if (this.experience < 1) {
        bonusPercentage = 0;
    } else if (this.experience < 3) {
        bonusPercentage = 0.05;
    } else if (this.experience < 5) {
        bonusPercentage = 0.08;
    } else {
        bonusPercentage = 0.15;
    }

    return this.calculateSalary() * bonusPercentage;
    }

    printEmployeeData(): void {
    console.log("Employee Data:");
    console.log("Surname: ", this.surname);
    console.log("Experience: ", this.experience, " years");
    console.log("Hourly Wage: $", this.hourlyWage);
    console.log("Hours Worked: ", this.hoursWorked, " hours");
    console.log("Salary: $", this.calculateSalary());
    console.log("Bonus: $", this.calculateBonus());
    }

    getEmployeeData(): string{
        return `Surname: ${this.surname}, Experience: ${this.experience} years, Hourly Wage: $ ${this.hourlyWage}, Hours Worked: ${this.hoursWorked} hours, Salary: $ ${this.calculateSalary()}, Bonus: $ ${this.calculateBonus()}`
    }
}

