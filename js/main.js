var numArray = [];

document.getElementById("btnAdd").onclick = function () {
  var num = Number(document.getElementById("inputNumber").value);
  numArray.push(num);
  document.getElementById("txtArray").innerHTML = numArray;
};

// Bài 1: Tính Tổng số DƯƠNG
function TongDuong() {
  for (n = 0, i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      n += numArray[i];
    }
  }
  document.getElementById("txtTongDuong").innerHTML = "Tổng số Dương: " + n;
}

// Bài 2:Đếm số DƯƠNG
function demSoDuong() {
  for (n = 0, i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      n++;
    }
  }
  document.getElementById("txtDemSoDuong").innerHTML = "Số Dương: " + n;
}

// Bài 3: Tìm số nhỏ nhất

function findMin() {
  var min = numArray[0];
  for (var i = 1; i < numArray.length; i++) {
    if (min > numArray[i]) {
      min = numArray[i];
    }
  }
  document.getElementById("txtFindMin").innerHTML = "Số nhỏ nhất: " + min;
}

// Bài 4: Tìm số Dương nhỏ nhất
function findMinDuong() {
  var posArray = [];
  for (var i = 0; i < numArray.length; i++) {
    numArray[i] > 0 && posArray.push(numArray[i]);
  }
  if (posArray.length > 0) {
    for (var min = posArray[0], j = 0; j < posArray.length; j++) {
      if(posArray[j]< min){
        min = posArray[j];
      }
    }
  }
  document.getElementById("txtFindMinDuong").innerHTML =
    "Số dương nhỏ nhất: " + min;
}

// Bài 5: Tìm số chẵn cuối cùng

function timChanEnd() {
  for (var n = -1, i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      n = numArray[i];
    }
  }
  document.getElementById("txttimChanEnd").innerHTML =
    "số chẵn cuối cùng: " + n;
}

// Bài 6: Đổi chỗ

function doiCho() {
  var newArray = [];
  for (var i = 0; i < numArray.length; i++) {
    newArray.push(numArray[i]);
  }
  var n1 = Number(document.getElementById("inputIndex1").value);
  var n2 = Number(document.getElementById("inputIndex2").value);
  var temp = newArray[n1];
  newArray[n1] = newArray[n2];
  newArray[n2] = temp;

  document.getElementById("txtDoiCho").innerHTML =
    "Mảng sau khi đổi chỗ: " + newArray;
}

// Bài 7: Sắp Xếp Tăng

function sapXepTang() {
  var newArray = [];
  for (var i = 0; i < numArray.length; i++) {
    newArray.push(numArray[i]);
  }
  for (var i = 0; i < newArray.length; i++) {
    for (j = 0; j < newArray.length - 1; j++) {
      if (newArray[j] > newArray[j + 1]) {
        var temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
    }
  }
  document.getElementById("txtsapXepTang").innerHTML =
    "Mảng sau khi sắp xếp: " + newArray;
}

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng
function ktrSNT(e) {
  if (e < 2) return false;
  for (var t = 2; t <= Math.sqrt(e); t++) {
    if (e % t == 0) {
      return false;
    }
  }
  return true;
}
function timSoNguyenTo() {
  for (var n = -1, i = 0; i < numArray.length; i++) {
    if (ktrSNT(numArray[i])) {
      n = numArray[i];
      break;
    }
  }
  document.getElementById("txtSoNguyenTo").innerHTML =
    "Số nguyên tố đầu tiên: " + n;
}

// Bài 9: Đếm số nguyên
var arrayFloat = [];
function getNum() {
  var n = Number(document.getElementById("inpNumber").value);
  arrayFloat.push(n);
  document.getElementById("txtThemSo").innerHTML = arrayFloat;
}

function demSoNguyen() {
  for (var n = 0, i = 0; i < arrayFloat.length; i++) {
    if (Number.isInteger(arrayFloat[i])) {
      n++;
    }
  }
  document.getElementById("txtdemSoNguyen").innerHTML = "Số nguyên: " + n;
}

// Bài 10: so sánh số dương và số âm

function soSanh() {
  for (var duong = 0, am = 0, i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      duong++;
    } else if (numArray[i] < 0) {
      am++;
    }
  }
  if (duong > am) {
    document.getElementById("txtSoSanh").innerHTML = "Số dương > Số âm";
  } else if (duong < am) {
    document.getElementById("txtSoSanh").innerHTML = "Số dương < Số âm";
  } else {
    document.getElementById("txtSoSanh").innerHTML = "Số dương = Số âm";
  }
}
