function calculate()
{
    annualVal = document.getElementById("annual").value;
    status = document.getElementById("marital").value;
    ageStatus = document.getElementById("age").value;

    calculateTax(annualVal);
    calculateUSC(annualVal);

    prsiVal = (annualVal / 100) * 4;
    document.getElementById("prsi").value = prsiVal;
}

function calculateTax(annualVal)
{
    
}

function calculateUSC(annualVal)
{
    
}