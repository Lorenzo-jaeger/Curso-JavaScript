const ps = document.querySelector('.paragrafos')
const paragrafos = ps.querySelectorAll('p')

const styleBody = getComputedStyle(document.body)
const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);


console.log(paragrafos);
for(let p of paragrafos){
p.style.color = backgroundColorBody;
    
}