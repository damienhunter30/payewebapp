function calculate(){
    annualVal = document.getElementById("annual").value;
    tax = calculateTax(annualVal);
    uscVal = calculateUSC(annualVal);

    prsiVal = (annualVal / 100) * 4;
    netVal = annualVal - prsiVal - tax - uscVal;
    payVal = tax + prsiVal + uscVal;

    document.getElementById("paye").value = "€" + tax;
    document.getElementById("prsi").value = "€" + prsiVal;
    document.getElementById("usc").value = "€" + uscVal;
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
    card = document.getElementById("card").value;

    if(ageVal == "undgerAge"){
        if(card == "yes"){
            usc1 = (12012 / 100) * 0.5;
            usc2 = (annualVal - 12012) * 0.02;
            usc = usc1 + usc2;
        }
        if(card == "no"){
            if(annualVal > 100000){
                usc1 = (12012 / 100) * 0.5;
                usc2 = (20687 - 12012) * 0.02;
                usc3 = (70044 - 20687) * 0.045;
                usc4 = (100000 - 70044) * 0.08;
                usc5 = (annualVal - 100000) * 0.11;
                usc = usc1 + usc2 + usc3 + usc4 + usc5;
            }
            if(annualVal > 70044 && annualVal < 100000){
                usc1 = (12012 / 100) * 0.5;
                usc2 = (20687 - 12012) * 0.02;
                usc3 = (70044 - 20687) * 0.045;
                usc4 = (annualVal - 70044) * 0.08;
                usc = usc1 + usc2 + usc3 + usc4;
            }
            if(annualVal > 20687 && annualVal < 70044){
                usc1 = (12012 / 100) * 0.5;
                usc2 = (20687 - 12012) * 0.02;
                usc3 = (annualVal - 20687) * 0.045;
                usc = usc1 + usc2 + usc3;
            }
            if(annualVal < 20687 && annualVal > 13000){
                usc1 = (12012 / 100) * 0.5;
                usc2 = (annualVal - 12012) * 0.02;
                usc = usc1 + usc2;
            }
        }
        return usc;
    }
    if(ageVal == "overAge"){
        usc1 = (12012 / 100) * 0.5;
        usc2 = (annualVal - 12012) * 0.02;
        usc = usc1 + usc2;
    }
}