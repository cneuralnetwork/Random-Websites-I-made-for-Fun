const wrapper=document.querySelector(".wrapper")
const qrInput=wrapper.querySelector(".form input")
const genbtn=wrapper.querySelector(".form button")
const qrImage=wrapper.querySelector(".qr-code img")

genbtn.addEventListener("click",()=>{
    let qrvalue=qrInput.value
    if(!qrvalue) return;
    genbtn.innerText="Generating QR Code ..."
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
    qrImage.addEventListener("load",()=>{
        wrapper.classList.add("active")
        genbtn.innerText="Generate QR Code"
    })
})
qrInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let qrvalue=qrInput.value
        if(!qrvalue) return;
        genbtn.innerText="Generating QR Code ..."
        qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
        qrImage.addEventListener("load",()=>{
            wrapper.classList.add("active")
            genbtn.innerText="Generate QR Code"
        })
    }
  });

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})