// Tạo một mảng chứa các đối tượng sản phẩm
var products = [
    {tenvxl:"Core i3 7100", hangsx: "Intel", ngayramat: "2011-22-07", giatien: 3450000},
    {tenvxl:"Core i5 4430", hangsx: "Intel", ngayramat: "2012-21-08", giatien: 4530000},
  ];
  
  // Lặp qua từng sản phẩm trong mảng và thêm chúng vào bảng
  var tableBody = document.querySelector("#mytable tbody");

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
  
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${product.tenvxl}</td>
      <td>${product.hangsx}</td>
      <td>${product.ngayramat}</td>
      <td>${product.giatien}</td>
    `;
  
    tableBody.appendChild(row);
  }

  function them() {
    var tenvxlfocus = document.getElementById("tenvxl");
    var hangfocus = document.getElementById("hang");
    var ngayramatfocus = document.getElementById("ngayramat");
    var giatienfocus = document.getElementById("giatien");
    // Lấy các giá trị từ các ô input
    var tenvxl = document.getElementById("tenvxl").value;
    var hang = document.getElementById("hang").value;
    var ngayramat = document.getElementById("ngayramat").value;
    var giatien = document.getElementById("giatien").value;

    // Lấy thời gian hiện tại
    var now = new Date().getTime();
    var inputTime = new Date(document.getElementById("ngayramat").value).getTime();
    // set điều kiện 
    if(tenvxl == "") {
      alert("Bạn chưa nhập Tên VXL.");
      tenvxlfocus.focus();
      return false;
    }else if(hang == "") {
      alert("Bạn chưa nhập Hãng.");
      hangfocus.focus();
      return false;
    }else if(giatien == "") {
      alert("Bạn chưa nhập giá tiền.");
      giatienfocus.focus();
      return false;
    }
    else if(ngayramat == "") {
      alert("Bạn chưa nhập ngày ra mắt.");
      ngayramatfocus.focus();
      return false;
    }else if(inputTime > now) {
      alert("Ngày không được lớn hơn thời gian hiện tại");
      ngayramatfocus.focus();
      return false;
    }
    else {
    // Tìm thẻ tbody trong bảng
    var tbody = document.querySelector("#mytable tbody");
  
    // Tạo một dòng mới trong bảng
    var row = tbody.insertRow();
  
    // Tạo các ô trong dòng mới
    var sttCell = row.insertCell(0);
    var tenvxlCell = row.insertCell(1);
    var hangCell = row.insertCell(2);
    var ngayramatCell = row.insertCell(3);
    var giatienCell = row.insertCell(4);
  
    // Đặt giá trị cho các ô
    sttCell.innerHTML = tbody.rows.length - 1;
    tenvxlCell.innerHTML = tenvxl;
    hangCell.innerHTML = hang;
    ngayramatCell.innerHTML = ngayramat;
    giatienCell.innerHTML = giatien;
  
    // Đặt các giá trị input về rỗng
    document.getElementById("tenvxl").value = "";
    document.getElementById("hang").value = "";
    document.getElementById("ngayramat").value = "";
    document.getElementById("giatien").value = "";
  }
}

  function huy() {
    document.getElementById("tenvxl").value = "";
    document.getElementById("hang").value = "";
    document.getElementById("ngayramat").value = "";
    document.getElementById("giatien").value = "";
  }
  
  
