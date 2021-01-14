function calculate()
{
    annualVal = document.getElementById("annual").value;
    status = document.getElementById("marital").value;
    ageStatus = document.getElementById("age").value;
    window.alert(status + " " + ageStatus + " " + annualVal);

    prsiVal = (annualVal / 100) * 4;
    document.getElementById("prsi").value = prsiVal;
}