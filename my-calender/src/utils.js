export const getMonthNum=(month1)=>{
    month1 = month1.toLowerCase();
    console.log("month1", month1);
    var months = ["january", "february", "march", "april", "may", "june", "july", "august", "septeber", "october", "november", "december"];
    const monthnum = months.indexOf(month1)+1;
    console.log("monthnum", monthnum);
    return monthnum;
}
export const getMonthbyNum=(i)=>{

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septeber", "October", "November", "December"];
    console.log(months[i].toLocaleUpperCase);
    return months[i]

}