function calculateCookingTime() 
{
    try
    {
        // let first get the values from inputs
        const totalTime = Number(document.getElementById("totalTime").value); 
        const items = Number(document.getElementById("items").value);
        const timeUnit = document.getElementById("timeUnit").value;

        if (!totalTime || !items) // fixed: "items" -> "!items"
        {
            throw new Error("Please enter both total time and number of the items.");
        }

        if (items <= 0)
        {
            throw new Error("Number of itmes must be greater than zero.");
        }

        // now let apl.. formula: Totaltime / itmes
        const timePerItem = totalTime / items;

        document.getElementById("output").textContent = `${timePerItem.toFixed(2)} ${timeUnit} per item`;

    }
    catch(error)
    {
        document.getElementById("output").textContent = "Error! " + error.message;
    }

    const toastElement = document.getElementById("resultToast");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}