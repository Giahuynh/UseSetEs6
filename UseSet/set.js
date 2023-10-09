// Khởi tạo Set để lưu danh sách động vật
const AnimalList = new Set();

// Hàm để thêm động vật mới vào danh sách

function addAnimal(name){
    if(!AnimalList.has(name)){
        AnimalList.add(name);
        console.log(`Đã thêm động vật mới có tên ${name} vào danh sách.`);

    }else{
        console.log(`Động vật có tên ${name} đã có trong danh sách.`)
    }
}

// Hàm để kiểm tra xem một động vật có trong danh sách hay không

function checkAnimal(name){
    if(AnimalList.has(name)){
        console.log(`Động vật có tên ${name} đã có trong danh sách.`)

    }else{
        console.log(`Động vật có tên ${name} chưa có trong danh sách.`)
    }
}

// Hàm để xóa động vật khỏi danh sách

function deleteAnimal(name){
    if(AnimalList.has(name)){
        AnimalList.delete(name);
        console.log(`Đã xóa động vật có tên ${name}`)
    } else {
        console.log(`Động vật có tên ${name} không có trong danh sách.`)
    }
}

// Hàm để in ra danh sách tất cả các động vật hiện có

function printLishAnimal(name){
    console.log("Danh sách động vật hiện có:");
    if(AnimalList.size === 0){
        console.log("Danh sách đang trống.");
    }else{
        AnimalList.forEach((Animal)=>{
            console.log(`-Động vật có tên ${Animal}`);
        })
    }
}

