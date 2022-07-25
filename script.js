const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    
    const celToFarenh=(value)=>{
        let Farenheite=Math.round((value*9/5)+32);
        return Farenheite;
    }
    const farenhToCel=(value)=>{
        let cel=Math.round((value-32)*5/9);
        return cel
    }

    let result;

    //console.log(result)
    if(valueTemp=='cel')
    {
        result=celToFarenh(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result} Farenheite.`
    }
    else
    {
        result=farenhToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result} Celcius.`    }
}