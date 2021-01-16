function calculate(){
    annualVal = document.getElementById("annual").value;
    prsiVal = (annualVal / 100) * 4;
    document.getElementById("prsi").value = "€" + prsiVal;

    tax = calculateTax(annualVal);
    document.getElementById("paye").value = "€" + tax;
    
    calculateUSC(annualVal);

    netVal = annualVal - prsiVal - tax;
    payVal = tax + prsiVal;
    document.getElementById("payable").value = "€" + payVal;
    document.getElementById("net").value = "€" + netVal;
}

function calculateTax(annualVal){
    statusVal = document.getElementById("marital").value;

    if(statusVal == "single"){
        if(annualVal < 35300){
            tax = (annualVal * 0.2) - 3300;
        }
        if(annualVal > 35300){
            tax = (35300 * 0.2) + ((annualVal - 35300) * 0.4) - 3300;
        }
    }
    if(statusVal == "married1"){
        if(annualVal < 44300){
            tax = (annualVal * 0.2) - 4950;
        }
        if(annualVal > 44300){
            tax = (44300 * 0.2) + ((annualVal - 44300) * 0.4) - 4950;
        }
    }
    if(statusVal == "married2"){
        if(annualVal < 70600){
            tax = (annualVal * 0.2) - 3300;
        }
        if(annualVal > 70600){
            tax = (70600 * 0.2) + ((annualVal - 70600) * 0.4) - 3300;
        }
    }
    if(statusVal == "loneparent"){
        if(annualVal < 39300){
            tax = (annualVal * 0.2) - 3399;
        }
        if(annualVal > 39300){
            tax = (39300 * 0.2) + ((annualVal - 39300) * 0.4) - 3300;
        }
    }
    if(statusVal == "surviving" || statusVal == "widow"){
        if(annualVal < 39300){
            tax = (annualVal * 0.2) - 4950;
        }
        if(annualVal > 39300){
            tax = (39300 * 0.2) + ((annualVal - 39300) * 0.4) - 4950;
        }
    }
    if(statusVal == "homeS"){
        if(annualVal < 35300){
            tax = (annualVal * 0.2) - 4900;
        }
        if(annualVal > 35300){
            tax = (35300 * 0.2) + ((annualVal - 35300) * 0.4) - 4900;
        }
    }
    if(statusVal == "homeM"){
        if(annualVal < 44300){
            tax = (annualVal * 0.2) - 6550;
        }
        if(annualVal > 44300){
            tax = (44300 * 0.2) + ((annualVal - 44300) * 0.4) - 6550;
        }
    }
    if(statusVal == "homeMM"){
        if(annualVal < 70600){
            tax = (annualVal * 0.2) - 4900;
        }
        if(annualVal > 70600){
            tax = (70600 * 0.2) + ((annualVal - 70600) * 0.4) - 4900;
        }
    }
    return tax;
}

function calculateUSC(annualVal){
    ageVal = document.getElementById("age").value;

    // 0.5% (unchanged) €0 to €12,012**
    // 2.0% (unchanged) €12,013 to €20,687***
    // 4.5% (unchanged) €20,688 to €70,044****
    // 8% (unchanged) €70,045 to €100,000
    // 11% (unchanged) > €100,000

    if(ageVal == "undgerAge"){

    }
    if(ageVal == "overAge"){

    }
}