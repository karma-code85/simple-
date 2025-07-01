const btn=document.getElementById('btn')
const content=document.getElementById('bass')
const sentMessage=document.getElementById('sent-text')
// console.log(sentMessage)
btn.addEventListener(('click'),  () => {
    const messagArea=sentMessage.value.trim();
    const createDiv=document.createElement('div')
    if(messagArea !== "")
        {
        createDiv.classList.add('message', "sent")
        createDiv.textContent= messagArea;
    }
    content.appendChild(createDiv)
    
})