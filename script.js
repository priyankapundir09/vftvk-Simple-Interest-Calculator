function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // User enters zero or negative values, throw error.
    if(principal.value <= 0){
        alert("Enter a positive number.");
        principal.focus();
        return false;
    }

    //to display the result.
    var result = ("If you deposit " +principal.value + "," + "\n" + "at an interest rate of " + rate + "%." + "\n" + "You will receive an amount of " + interest + "," + "\n" + "in the year " + year)
    document.getElementById("result").innerText=result;

    return true;
}

function updateRate() 
{
    var rateval = (document.getElementById("rate").value + "%");
    document.getElementById("rate_val").innerText=rateval;
}