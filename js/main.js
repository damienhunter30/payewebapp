function calculate()
{
    annualPay = document.getElementById("annual").value;
    payeVal = calculatePaye(annualPay);
    prsiVal = annualPay / 100 * 4;
    uscPay = calculateUSC(annualPay);
    payableVal = payeVal + prsiVal + uscPay;
    netVal = annualPay - payableVal;

    document.getElementById("paye").value = payeVal;
    document.getElementById("prsi").value = prsiVal;
    document.getElementById("usc").value = uscPay;
    document.getElementById("payable").value = payableVal;
    document.getElementById("net").value = netVal;
}

function calculatePaye(annualPay)
{
    tax = 0;

    if(document.getElementById("single").checked)
    {
        tc = 3300;
        scop = 35300;

        if(annualPay < scop)
        {
            tax = (annualPay * 0.2) - tc;
            return tax;
        }
        if(annualPay > scop)
        {
            tax = (scop * 0.4) + ((annualPay - scop) * 0.4) - tc;
            return tax;
        }
    }
    if(document.getElementById("married").checked)
    {
        tc = 4950;
        scop = 44300;
        
        if(annualPay < scop)
        {
            tax = (annualPay * 0.2) - tc;
            return tax;
        }
        if(annualPay > scop)
        {
            tax = (scop * 0.4) + ((annualPay - scop) * 0.4) - tc;
            return tax;
        }
    }
    return tax;
}

function calculateUSC(annualPay)
{
    usc = 0;

    if(document.getElementById("over").checked)
    {
        if(annualPay < 13000)
        {
            usc = 0;
        }
        if(annualPay < 20687)
        {
            usc = ((12012 / 100) * 0.5) + ((annualPay - 12012) * 0.02);
            return usc;
        }
        if(annualPay > 20687)
        {
            usc = ((12012 / 100) * 0.5) + ((annualPay - 12012) * 0.02);
            return usc;
        }
    }

    if(annualPay < 13000)
    {
        usc = 0;
    }
    if(annualPay > 70044)
    {
        usc = ((12012 / 100) * 0.5) + ((20687 - 12012) * 0.02) + ((70044 - 20687) * 0.045) + ((annualPay - 70044) * 0.08);
        return usc;
    }
    if(annualPay < 70044 && annualPay > 20687)
    {
        usc = ((12012 / 100) * 0.5) + ((20687 - 12012) * 0.02) + ((annualPay - 20687) * 0.045);
        return usc;
    }
    if(annualPay < 20687)
    {
        usc = ((12012 / 100) * 0.5) + ((annualPay - 12012) * 0.02);
        return usc;
    }
    return usc;
}

function clearFields()
{
    document.getElementById("annual").value = "0";
    document.getElementById("paye").value = "0";
    document.getElementById("prsi").value = "0";
    document.getElementById("usc").value = "0";
    document.getElementById("payable").value = "0";
    document.getElementById("net").value = "0";
}
