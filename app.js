// selecting element 
const student = document.getElementById("student");
const roll = (document.getElementById("roll"));
// const rlVl = Number(roll.value);
// console.log(typeof rlVl)
const srany = (document.getElementById("srany"));
const gpa = (document.getElementById("gpa"));
const btn = document.querySelector(".btn");
const stdList = document.getElementById("std-list");



btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (student.value === '' && roll.value === '' && srany.value === '' && gpa.value === '') {
        alert('please fill all statement')
    } else {
        const newRow = document.createElement('tr')
            //   creating student name
        const stdHead = document.createElement('th');
        Number(stdHead.innerHTML = student.value);
        newRow.appendChild(stdHead);

        //   creating student name
        const stdRoll = document.createElement('th');
        Number(stdRoll.innerHTML = roll.value);
        newRow.appendChild(stdRoll)

        //   creating student name
        const stdClass = document.createElement('th');
        Number(stdClass.innerHTML = srany.value);
        newRow.appendChild(stdClass)

        //   creating student name
        const stdGpa = document.createElement('th');
        Number(stdGpa.innerHTML = gpa.value);
        newRow.appendChild(stdGpa);

        //  display result 
        stdList.appendChild(newRow)
    }
})