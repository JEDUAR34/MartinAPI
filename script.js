const gene= document.querySelector(".gene")
const template=document.querySelector(".template")
// console.log(clonetemplate)
const fragment=document.createDocumentFragment()   

document.addEventListener("DOMContentLoaded",()=>{
    info()
})

const info= async()=>{
    // console.log("casitas") 
    try {
        const data= await fetch("https://rickandmortyapi.com/api/character");
        const datas= await data.json();
        pintarima(datas.results)
        // console.log(datas)
    } catch (error) {
        console.log(error)
    }   
}

const pintarima=(datas)=>{
    // console.log(datas)
    
    datas.forEach((item) => {
        const clonetemplate=template.content.firstElementChild.cloneNode(true)
        // console.log(item)
        clonetemplate.querySelector(".ima").setAttribute("src", item.image);
        clonetemplate.querySelector(".name").textContent=item.name
        clonetemplate.querySelector(".perfil").textContent=item.species
        fragment.appendChild(clonetemplate)
    });
    gene.appendChild(fragment)
}