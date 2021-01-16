function calculate(){
    annualVal = document.getElementById("annual").value;
    prsiVal = (annualVal / 100) * 4;
    document.getElementById("prsi").value = prsiVal;

    tax = calculateTax(annualVal);
    document.getElementById("paye").value = tax;
    calculateUSC(annualVal);

    netVal = annualVal - prsiVal - tax;
    payVal = tax + prsiVal;
    document.getElementById("payable").value = payVal;
    document.getElementById("net").value = netVal;
}

function calculateTax(annualVal){
    statusVal = document.getElementById("marital").value;

    // Single person child carer credit €1,650
    // Additional credit for certain widowed persons /surviving civil partner €1,650
    // Earned income credit (increased)* €1,650
    // Home carer credit €1,600
    
    // One parent/widowed parent/surviving civil partner €39,300 Balance

    // married2, loneparent, widow, surviving, home
    if(statusVal == "single"){
        scop = 35300;
        tc = 3300;

        if(annualVal < scop){
            tax = (annualVal * 0.2) - tc;
        }
        if(annualVal > scop){
            tax = (scop * 0.2) + ((annualVal - scop) * 0.4) - tc;
        }
    }
    if(statusVal == "married1"){
        scop = 44300;
        tc = 4950;

        if(annualVal < scop){
            tax = (annualVal * 0.2) - tc;
        }
        if(annualVal > scop){
            tax = (scop * 0.2) + ((annualVal - scop) * 0.4) - tc;
        }
    }
    if(statusVal == "married2"){
        scop = 70600;
        tc = 3300;

        if(annualVal < scop){
            tax = (annualVal * 0.2) - tc;
        }
        if(annualVal > scop){
            tax = (scop * 0.2) + ((annualVal - scop) * 0.4) - tc;
        }
    }
    return tax;
}

function calculateUSC(annualVal){
    ageVal = document.getElementById("age").value;

    if(ageVal == "undgerAge"){

    }
    if(ageVal == "overAge"){

    }
}