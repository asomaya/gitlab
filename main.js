async function Get (){
    const responce = await fetch("https://afternoon-falls-30227.herokuapp.com/api/v1/products")
const data = await responce.json()
console.log(data);
const pro = data.data
console.log(pro[0]);

for (let i = 0; i < pro.length; i++) { 
  console.log(pro[i].Name);
  const product =` 
  
  
  <div class="col-4 p-2">
  <img class="img-thumbnail" src="${pro[i].ProductPicUrl}">
    <p class="text-center">${pro[i].Name}</p>
    
  
  
  </div>
`
 con.innerHTML+= product;
    
}


}
Get()