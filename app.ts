type student = {
    fullName : string,
    email : string,
    phoneNumber : string,
    gender: string,
    fav : string
}

var sutdenInfo : student = {
    fullName : 'Ho Huu Phuoc',
    email : "hophuoc@gmail",
    phoneNumber: "0385446528",
    gender : "male",
    fav : "xem phim , doc sach"
}
var table  = document.querySelector("#userInfo")
table.innerHTML = `
                        <td>${sutdenInfo.fullName}</td>
                        <td>${sutdenInfo.email}</td>
                        <td>${sutdenInfo.fav}</td>
                        <td>${sutdenInfo.gender}</td>
                        <td>${sutdenInfo.fav}</td>
                        `
