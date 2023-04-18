select = document.getElementById("select");
nhaphang = document.getElementById("nhaphang");

btn = document.getElementById("btn");
nhapds = document.getElementById("nhapds");

nhaphang = document.getElementById("nhaphang");

btn_them = document.getElementById("btn_them");
btn_luu = document.getElementById("btn_luu");
btn_huy = document.getElementById("btn_huy");

function subProgram() {
    // Code chương trình con của bạn
    var arr = ['intel' ,'Acer', 'Asus'];
        for(var i = 0; i< arr.length;i++) {
            var op = document.createElement("option");
            var txt = document.createTextNode(arr[i]);
            op.appendChild(txt);
            select.appendChild(op);
        }
  }
  
window.addEventListener('load', subProgram);
    

function them() {
    nhaphang.value ="";
    btn_luu.style.display = "block";
    btn_them.style.display = "none";
    nhapds.style.display = "block";
}

function luu() {
    if(nhaphang.value.trim() === '') {
        alert("Bạn chưa nhập hãng");
        nhaphang.focus();
    }else {
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].value == nhaphang.value) {
              alert('Giá trị nhập vào trùng với giá trị trong danh sách.');
              nhaphang.value ='';
              nhaphang.focus();
              break;
            }
        }
    // lệnh if này để trương trình ngừng lại
    if(nhaphang.value.trim() === '') {
        nhaphang.focus();    
    }
    else {
        var op = document.createElement("option");
        var txt = document.createTextNode(nhaphang.value);
        op.appendChild(txt);
        select.appendChild(op);     
        btn_luu.style.display = "none";
        btn_them.style.display = "block";
        nhapds.style.display = "none";  
    }
            
    } 
}

function huy() {
    nhaphang.value ="";

    nhapds.style.display = "none"; 
    btn_luu.style.display = "none";
    btn_them.style.display = "block";
}
