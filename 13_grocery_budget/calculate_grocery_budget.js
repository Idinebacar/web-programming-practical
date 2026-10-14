const budgetInput = document.getElementById('budget');

const item1Input = document.getElementById('item1');

const item2Input = document.getElementById('item2');

const item3Input = document.getElementById('item3');

const output = document.getElementById('output');


function calculateGroceryBudget() {

    try 
    {
        // empty boxes
        if (budgetInput.value === "" ||
            item1Input.value === "" ||
            item2Input.value === "" ||
            item3Input.value === "") 
            {
                throw new Error("Please fill in all the fields.");
            }

        const budget = Number(budgetInput.value);
        const item1 = Number(item1Input.value);
        const item2 = Number(item2Input.value);
        const item3 = Number(item3Input.value);


            // negative number
        if (budget < 0 || item1 < 0 || item2 < 0 || item3 < 0) 
            {
              throw new Error("Please enter positive numbers.");
            }

        const remaining = budget - (item1 + item2 + item3);
        let message;

        if (remaining < 0) 
            {
            message = "Over budget by UGX " + Math.abs(remaining).toFixed(2);
            } else {
                message = "Remaining budget: UGX " + remaining.toFixed(2);
            }

        output.textContent = message;
    } 
    catch (error) 
    {
        output.textContent = "Error! " + error.message;
    }
}