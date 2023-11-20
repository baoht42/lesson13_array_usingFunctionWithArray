function bai1() {
    myColor = ["Red", "Green", "White", "Black"];
    document.write(myColor.toString() + "<br>");
    document.write(myColor.join("+"));
}

function bai2(){
    let num = prompt("nhap vao so can tach:");
    let str = num.toString();
    let result = [str[0]];

    for (let i = 1; i < str.length; i++) {
        if (str[i-1]%2===0 && str[i]%2 ===0){
            result.push("-", str[i]);
        }else {
            result.push(str[i]);
        }
    }
    document.write(result.join(""));
}

function bai3(){
    str = prompt("Nhap vao 1 chuoi");
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];

    for(var x=0; x<str.length; x++)
    {
        if(UPPER.indexOf(str[x]) !== -1)
        {
            result.push(str[x].toLowerCase());
        }
        else if(LOWER.indexOf(str[x]) !== -1)
        {
            result.push(str[x].toUpperCase());
        }
        else
        {
            result.push(str[x]);
        }
    }
    document.write("chuoi nhap vao la: "+str + "<br>");
    document.write("chuoi sau khi ctrinh chay la: "+result.join(''));
}