const hoursPerDay = document.getElementById("hoursPerDay");

const days = document.getElementById("days");

const totalHours = document.getElementById("totalHours");

const work_type_value = document.getElementById("workType");


function calculateTotalHours() {
 
  try {
    const workType_stat = work_type_value.value;

    const hours = Number(hoursPerDay.value);

    const numberOfDays = Number(days.value);

    let total = 0;

    if (workType_stat === "Full-time") {
      total = hours * numberOfDays;
    } else if (workType_stat === "Part-time") {
      total = (hours / 2) * numberOfDays;
    } else if (workType_stat === "Over-time") {
      total = (hours + 4) * numberOfDays;
    } else if (workType_stat === "Freelance") {
      total = hours * numberOfDays;
    }

    totalHours.textContent = total;
  } catch (error) {
    totalHours.textContent = "Error !" + error.message;
  }
}
