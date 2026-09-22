function calculate_recipe() 
{


    try 
    {
        const flour = Number(document.getElementById("flour").value);
        const originalPeople = Number(document.getElementById("people").value);
        const newPeople = Number(document.getElementById("newPeople").value);
        const ingredient = document.getElementById("ingredient").value;

        if (!flour || !originalPeople || !newPeople) 
        {
            throw new Error("Please enter values for flour, original people, and new people.");
        }

        if (originalPeople <= 0 || newPeople <= 0) 
        {
            throw new Error("People values must be greater than zero.");
        }

        const newAmount = (flour / originalPeople) * newPeople;
        document.getElementById("output").textContent = `You need ${newAmount.toFixed(1)} of ${ingredient} for ${newPeople} people.`;

        const resultBox = document.getElementById("resultCollapse");
        resultBox.classList.add("show");

    }
     catch (error)
    {
        document.getElementById("output").textContent = "Error! " + error.message;
        const resultBox = document.getElementById("resultCollapse");
        resultBox.classList.add("show");
    }
}