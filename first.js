let items=document.getElementById("row1").children;
let n=2;
function transformImg()
{
    for(let item of items)
    {
        item.style.transform+="rotate(360deg)";
        item.src="images/"+n+".jpg";
        n++;
        if(n>5)n%=5;
    }
}
window.setInterval(transformImg,6000);
function pictures(name)
{
    let item=document.getElementById("bn1");
    item.style.display="flex";
    item.style.alignItems="center"
    item.style.position="fixed";
    item.children[0].src="images/"+name+".jpg";
}
function reSizeBn()
{
    let item=document.getElementById("bn1");
    if(document.body.style.width<=document.body.style.height)
    {
        item.style.display="flex";
        item.style.alignItems="center"
        item.children[0].style.width="100%";
        item.children[0].style.height="auto";
        item.style.backgroundColor="green"; 
    }
    else
    {
        item.children[0].style.height="100%";
        item.children[0].style.width="auto";
        item.style.backgroundColor="red"; 
    }
      
}
// window.resizeBy()
// {
//     let item=document.getElementById("bn1");
//     if(item.style.width<=item.style.height)
//     {
//         item.style.display="flex";
//         item.style.alignItems="center"
//         item.children[0].style.width="100%";
//         item.children[0].style.height="auto";
//     }
//     else
//     {
//         item.children[0].style.height="100%";
//         item.children[0].style.width="auto";
//     }
//     console.log("hello");
// }
function nextOrPrev(n)
{
    if(n===0)
    {
        
    }
}