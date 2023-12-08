

let arr = []

function todo(){
    

    let inp = document.getElementById('inp')
    let list = document.getElementById('list')

    arr.push(inp.value)

    let data = " "
    for(let item of arr){
       data += `<li class="list-group-item d-flex justify-content-between">${item} <button class = "btn btn-danger btn-sm> X </button> </li>`
    }


    list.innerHTML = data

    // console.log(arr);
}