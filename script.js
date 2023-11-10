// Khởi tạo danh sách hàng hóa
let products = [];

// Lấy form và bảng
let productForm = document.getElementById("productForm");
let productTable = document.getElementById("productTable");

// Thêm sự kiện submit cho form
productForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn submit form

    // Lấy tên hàng hóa và giá từ form
    let nameInput = document.getElementById("name");
    let priceInput = document.getElementById("price");
    let name = nameInput.value;
    let price = parseFloat(priceInput.value);

    // Kiểm tra nếu tên hoặc giá trống thì không thêm hàng hóa
    if (name.trim() === "" || isNaN(price)) {
        alert("Vui lòng nhập đầy đủ thông tin hàng hóa");
        return;
    }

    // Tạo một đối tượng hàng hóa mới
    let product = {
        name: name,
        price: price
    };

    // Thêm hàng hóa vào danh sách
    products.push(product);

    // Cập nhật bảng
    updateTable();

    // Reset form
    nameInput.value = "";
    priceInput.value = "";
});

// Xóa hàng hóa khi click vào nút
function deleteProduct(index) {
    products.splice(index, 1);
    updateTable();
};

// Cập nhật bảng hàng hóa
function updateTable() {
    // Xóa hết các hàng cũ
    while (productTable.rows.length > 1) {
        productTable.deleteRow(1);
    }

    // Duyệt qua danh sách hàng hóa và thêm hàng mới vào bảng
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let row = productTable.insertRow(i + 1);
        let nameCell = row.insertCell(0);
        let priceCell = row.insertCell(1);
        let actionCell = row.insertCell(2);

        nameCell.innerHTML = product.name;
        priceCell.innerHTML = product.price;
        actionCell.innerHTML = "<button onclick=\"deleteProduct(" + i + ")\">Xóa</button>";
    }
}