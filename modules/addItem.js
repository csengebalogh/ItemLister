function addItem(e) {
    e.preventDefault()
    //get input value
    inputField = document.getElementById('item')
    var newItem = inputField.value
    //createnew li element
    var li = document.createElement('li')
    //add classname
    li.className = 'list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    //create del btn element
    var deleteBtn = document.createElement('button')
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    //append textnode
    deleteBtn.appendChild(document.createTextNode('X'))
    //append btn to li
    li.appendChild(deleteBtn)
    //append li to list
    itemList.appendChild(li)
    // reset field
    inputField.value = ' '

}

export default addItem
