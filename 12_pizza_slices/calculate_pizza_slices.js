const totalSlicesInput = document.getElementById("totalSlices");

const peopleInput = document.getElementById("people");

const slicesEachInput = document.getElementById("slicesEach");

const sizeInput = document.getElementById("size");

const output = document.getElementById("result");


function calculatePizzaSlices() {

  try 
  {

    // empty boxes
    if (totalSlicesInput.value === "" ||
        peopleInput.value === "" ||
        slicesEachInput.value === "") 
    {
      throw new Error("Please fill in all the fields.");
    }

    const totalSlices = Number(totalSlicesInput.value);

    const people = Number(peopleInput.value);

    const slicesEach = Number(slicesEachInput.value);

    const size = sizeInput.value;

   


    // negative numbers
    if (totalSlices < 0 || people < 0 || slicesEach < 0) 
    {
      throw new Error("Numbers can't be negative.");
    }

    const slicesLeft = totalSlices - (people * slicesEach);
    let message;

    if (slicesLeft < 0) 
    {
      message = "Not enough slices, you are short by " + Math.abs(slicesLeft);
    } else {
      message = "Slices left: " + slicesLeft + " (" + size.toLowerCase() + " pizza)";
    }

    output.textContent = message;
  } 
  catch (error) 
  {
    output.textContent = "Error ! " + error.message;
  }
}
