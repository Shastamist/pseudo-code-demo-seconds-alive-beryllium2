// Step 1:
let birthMonthInput = prompt("What is your month of birth? (Please provide the month in number form. For example, for January, enter 1, and for June, enter 6.)")
let birthYearInput = prompt("What is your year of birth? (For example, 1993 – not '93'.)")

let birthMonth = parseInt(birthMonthInput)
let birthYear = parseInt(birthYearInput)

// Step 2:
let currentMonth = new Date().getMonth() + 1
let currentYear = new Date().getFullYear()

// Step 3:
let secondsInMonth = 60 * 60 * 24 * 30
// Step 4:
let secondsInYear = secondsInMonth * 12

// Step 5:
let secondsInBirthYear = secondsInMonth * (12 - birthMonth)
// Step 6:
let secondsInCurrentYear = secondsInMonth * currentMonth
// Step 6.5:
let secondsInBetween = secondsInYear * (currentYear - birthYear - 2)

// Step 7:
let secondsSinceBirth = secondsInBirthYear + secondsInBetween + secondsInCurrentYear

// Step 8:
document.write(`
    <h3>Are you ready?</h3>
    <details>
        <summary>Given the birth month (${birthMonth}) and the birth year (${birthYear}), you have been alive for...</summary>
        ...approximately <mark>${secondsSinceBirth.toLocaleString()}</mark> seconds! ⏱
    </details>
`)