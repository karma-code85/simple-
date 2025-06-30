const btn=document.getElementById('btn')
const content=document.getElementById('bass')
const sentMessage=document.getElementById('sent-text')
console.log(sentMessage)
btn.addEventListener(('click'),  () => {
    const messagArea=sentMessage.value.trim();
    if(messagArea !== ""){
        const createDiv=document.createElement('div')
        createDiv.classList.add('message', "sent")
        createDiv.textContent= messagArea;
    }
    content.appendChild(createDiv)
    
})