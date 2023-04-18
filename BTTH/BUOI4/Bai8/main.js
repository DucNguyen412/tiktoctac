var tenvxl = document.getElementById("tenvxl");
var hang = document.getElementById("hang");
var ngayramat = document.getElementById("ngayramat");
var giatien = document.getElementById("giatien");

// Tạo một mảng chứa các đối tượng sản phẩm
var dulieu = [{
    STT: 1,
    Ten: 'Core i3 7100',
    Hang: 'Intel',
    NgaySX: '22-7-2017',
    Gia: 11111111
},
{
    STT: 2,
    Ten: 'Core i5 4430',
    Hang: 'Intel',
    NgaySX: '11-4-2017',
    Gia: 2222222
}
];

  table = document.getElementById('mytable');
  // tạo một function add dữ liệu từ data vào table
  function addData(element) {
    //tạo một hàng
    var row = table.insertRow();
    //đưa dữ liệu từ element vào cột
    row.insertCell().innerHTML = element.STT;
    row.insertCell().innerHTML = element.Ten;
    row.insertCell().innerHTML = element.Hang;
    row.insertCell().innerHTML = element.NgaySX;
    row.insertCell().innerHTML = element.Gia;
  }
  // Tạo một function add dữ liệu từ element vào data
  function myFunction() {
    dulieu.forEach(function(element){
        addData(element)}, this);
  }
  // add dữ liệu vào bảng
  for(var i = 0; i< dulieu.length; i++) {
    addData(dulieu[i]);
  }

  function them() {
    // Lấy thời gian hiện tại
    var now = new Date().getTime();
    var inputTime = new Date(document.getElementById("ngayramat").value).getTime();
    // set điều kiện 
    if(tenvxl.value.trim() == "") {
      alert("Bạn chưa nhập Tên VXL.");
      tenvxl.focus();
      return false;
    }else if(hang.value.trim() == "") {
      alert("Bạn chưa nhập Hãng.");
      hang.focus();
      return false;
    }else if(giatien.value.trim() == "") {
      alert("Bạn chưa nhập giá tiền.");
      giatien.focus();
      return false;
    }
    else if(ngayramat.value == "") {
      alert("Bạn chưa nhập ngày ra mắt.");
      ngayramat.focus();
      return false;
    }else if(inputTime > now) {
      alert("Ngày không được lớn hơn thời gian hiện tại");
      ngayramat.focus();
      return false;
    }
    else {
    // Lấy dữ liệu nhập xong add vào table và vào data
        var dl = {
            STT: dulieu.length + 1,
            Ten: tenvxl.value,
            Hang: hang.value,
            NgaySX: ngayramat.value,
            Gia: giatien.value
        }
        addData(dl);
        dulieu.push(dl);

  
    // Đặt các giá trị input về rỗng
    huy();
  }
}

  function huy() {
    tenvxl.value = "";
    hang.value = "";
    ngayramat.value = "";
    giatien.value = "";
  }
  