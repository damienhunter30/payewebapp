function calculate(){
    annualVal = document.getElementById("annual").value;
    prsiVal = (annualVal / 100) * 4;
    document.getElementById("prsi").value = prsiVal;

    calculateTax(annualVal);
    calculateUSC(annualVal);
}

function calculateTax(annualVal){
    statusVal = document.getElementById("marital").value;

    // Single person €1,650
    // Married couple/civil partnership €3,300
    // Single person child carer credit €1,650
    // Additional credit for certain widowed persons /surviving civil partner €1,650
    // Employee credit €1,650
    // Earned income credit (increased)* €1,650
    // Home carer credit €1,600
    
    // Single person €35,300 Balance
    // Married couple/civil partnership (one income) €44,300 Balance
    // Married couple/civil partnership (two incomes)* €70,600 Balance
    // One parent/widowed parent/surviving civil partner €39,300 Balance

    // Single, married1, married2, loneparent, widow, surviving, home
}

function calculateUSC(annualVal){
    ageVal = document.getElementById("age").value;
}