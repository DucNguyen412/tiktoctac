var chuoi = document.getElementById("chuoi");
var selected = document.getElementById("select");

function tachchuoi() {
    if(chuoi.value.trim().length == 0) {
        alert("Hãy nhập chuỗi");
        chuoi.focus();
        return false;
    }
    var arr = chuoi.value.trim().split(",");
    for(var i = 0; i < arr.length; i++) {
        var op = document.createElement("option");
        var txt = document.createTextNode(arr[i]);
        op.appendChild(txt);
        selected.appendChild(op);
    }
}

function selectChange() {
    var i = selected.selectedIndex;
    alert("Bạn đã chọn mục: " + selected.options[i].value);
}

function huy(){
    chuoi.value="";
    chuoi.focus();
}