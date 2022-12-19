let sinhNhat = (sucKhoe) =>{
    return new Promise((resolve, reject) =>{
        // tìm hiểu thêm về setTimeout trong javascript
        setTimeout(() =>{
            if (sucKhoe) {
                resolve(2)  
            }else{
                reject(new Error("Đang Ốm"))    
            }
        })
    })
}

sinhNhat(true)
.then((sucess) =>{
     console.log("Có "+ sucess +" cái bánh")
  }
)
.catch((err) =>{
    console.log(err)
})
.finally(() =>{
    console.log("Kết thúc")
})
