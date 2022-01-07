
function filterItems(e) {

    //convert to lowercase
    var text = e.target.value.toLowerCase()
    //get listitems
    var items = itemList.getElementsByTagName('li')
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        
        

        //notFound.style.display = 'none'
        if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block'
            title.style.display = 'block'
            title.innerHTML = '<h2>Items</h2>'

        }
        else {
            item.style.display = 'none'
            //njtitle.style.display = 'none'
            //console.log('item not found')
            title.innerHTML = '<h2>Item not found</h2>'
            
        } 

    })
}

export default filterItems
