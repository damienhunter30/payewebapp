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
    // Home carer credit €1,600

    // home
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
    if(statusVal == "loneparent"){
        scop = 39300;
        tc = 3300;

        if(annualVal < scop){
            tax = (annualVal * 0.2) - tc;
        }
        if(annualVal > scop){
            tax = (scop * 0.2) + ((annualVal - scop) * 0.4) - tc;
        }
    }
    if(statusVal == "surviving" || statusVal == "widow"){
        scop = 39300;
        tc = 4950;

        if(annualVal < scop){
            tax = (annualVal * 0.2) - tc;
        }
        if(annualVal > scop){
            tax = (scop * 0.2) + ((annualVal - scop) * 0.4) - tc;
        }
    }
    if(statusVal == "homeS"){
        scop = 35300;
        tc = 4900;

        if(annualVal < scop){
            tax = (annualVal * 0.2) - tc;
        }
        if(annualVal > scop){
            tax = (scop * 0.2) + ((annualVal - scop) * 0.4) - tc;
        }
    }
    if(statusVal == "homeM"){
        scop = 44300;
        tc = 6550;

        if(annualVal < scop){
            tax = (annualVal * 0.2) - tc;
        }
        if(annualVal > scop){
            tax = (scop * 0.2) + ((annualVal - scop) * 0.4) - tc;
        }
    }
    if(statusVal == "homeMM"){
        scop = 70600;
        tc = 4900;

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