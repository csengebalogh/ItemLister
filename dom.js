// import {runEvent} from './modules/runEvent'
// import addItem from './modules/addItem'
// import removeItem from './modules/removeItem'
// import filterItems from './modules/filterItems'

var button = document.getElementById('button')
var box = document.getElementById('box')
// var output = document.getElementById('output')


//button.addEventListener('click', runEvent)
//button.addEventListener('dblclick', runEvent)
//button.addEventListener('mousedown', runEvent)
//button.addEventListener('mouseup', runEvent)

//box.addEventListener('mouseenter', runEvent)
//box.addEventListener('mouseleave', runEvent)

//box.addEventListener('mouseover', runEvent)
//box.addEventListener('mouseout', runEvent)

box.addEventListener('mousemove', runEvent)
var itemInput = document.querySelector('input[type="text"]')
var form = document.querySelector('form')

form.addEventListener('submit', runEvent)
//itemInput.addEventListener('focus', runEvent)
//itemInput.addEventListener('blur', runEvent) 






function runEvent(e){
    e.preventDefault()
    console.log('EVENT TYPE: '+e.type)
    
    //box.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)'
    //console.log(e.target.value)

    //document.getElementById('output').innerHTML =
    //'<h3>'+e.target.value+'</h3>' 

    document.body.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 0)'
    //document.getElementById('main').style.backgroundColor = 'rgb('+e.offsetY+', '+e.offsetX+',  40)'
    output.innerHTML =  '<h3>MouseX(red):  '+e.offsetX+'</h3><h3>MouseY(green): ' +e.offsetY+'</h3>'

}
      

//search filter


var formOfItems = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')
var title = document.getElementById('itemsTitle')



//formsubmit evvent
formOfItems.addEventListener('submit', addItem)
//delete event
itemList.addEventListener('click', removeItem)
//filter event
filter.addEventListener('keyup', filterItems)
//itemnotfound event
//title.addEventListener('keydown', itemNotFound)

//additem

    function addItem(e) {
        e.preventDefault()
        //get input value
        var inputField = document.getElementById('item')
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
        inputField.value = ''

    }

//removeitem

    function removeItem(e) {
        e.preventDefault()
        if (e.target.classList.contains('delete')) {
            if (confirm('Are you sure you want to delete this item permanently?')) {
                var li = e.target.parentElement
                itemList.removeChild(li)

            }
        }
    }

//filteritems

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


        /* switch(itemName.toLowerCase().indexOf(text) != -1) {
                case 1:  
                    item.style.display = 'block'
                    title.style.display = 'block'
                break;
                case 2: 
                    item.style.display = 'none'
                    //njtitle.style.display = 'none'
                    //console.log('item not found')
                    title.innerHTML = '<h2>Item not found</h2>'
                break;
                default: title.innerHTML = '<h2> Items </h2>'
            } */
            

        })

        
    //     //return notFound.innerHTML = '<h2>Items</h2>'

    }


    




    