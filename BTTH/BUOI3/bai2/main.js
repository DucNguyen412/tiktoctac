function xem() {
    var ngaysingforcus = document.getElementById("ngaysinh");
    var ngaysinh = new Date(document.getElementById("ngaysinh").value);
    var cung = document.getElementById("cung");
    
    var thang = ngaysinh.getMonth() + 1;
    var ngay = ngaysinh.getDate();
    
    if ((thang == 3 && ngay >= 21) || (thang == 4 && ngay <= 19)) {
      cung.value = "Bạch Dương";
    } else if ((thang == 4 && ngay >= 20) || (thang == 5 && ngay <= 20)) {
      cung.value = "Kim Ngưu";
    } else if ((thang == 5 && ngay >= 21) || (thang == 6 && ngay <= 21)) {
      cung.value = "Song Tử";
    } else if ((thang == 6 && ngay >= 22) || (thang == 7 && ngay <= 22)) {
      cung.value = "Cự Giải";
    } else if ((thang == 7 && ngay >= 23) || (thang == 8 && ngay <= 22)) {
      cung.value = "Sư Tử";
    } else if ((thang == 8 && ngay >= 23) || (thang == 9 && ngay <= 22)) {
      cung.value = "Xử Nữ";
    } else if ((thang == 9 && ngay >= 23) || (thang == 10 && ngay <= 23)) {
      cung.value = "Thiên Bình";
    } else if ((thang == 10 && ngay >= 24) || (thang == 11 && ngay <= 21)) {
      cung.value = "Bò Cạp";
    } else if ((thang == 11 && ngay >= 22) || (thang == 12 && ngay <= 21)) {
      cung.value = "Nhân Mã";
    } else if ((thang == 12 && ngay >= 22) || (thang == 1 && ngay <= 19)) {
      cung.value = "Ma Kết";
    } else if ((thang == 1 && ngay >= 20) || (thang == 2 && ngay <= 18)) {
      cung.value = "Bảo Bình";
    } else if ((thang == 2 && ngay >= 19) || (thang == 3 && ngay <= 20)) {
        cung.value = "Song Ngư";
    } else {
      alert("Nhập ngày tháng.");
      ngaysingforcus.focus();
    }
  }
  
  function xoa() {
    document.getElementById("ngaysinh").value = "";
    document.getElementById("cung").value = "";
  }