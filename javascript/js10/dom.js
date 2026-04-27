let r = document.body.firstElementChild
r.style.backgroundColor = "red"
r.firstElementChild.style.backgroundColor="yellow"
r.lastElementChild.style.backgroundColor="green"

let box=document.querySelectorAll(".box")
 let middle=Math.floor(box.length/2)

 box[middle].style.backgroundColor="blue"

/*document.body.firstelementchild.children*/
/*document.body.firstelementchild.children[0]*/
/*document.body.firstelementchild.children[1]*/
/*document.body.firstelementchild.children[1].nextelementsibling*/
/*document.body.firstelementchild.children[1].previouselementsibling*/