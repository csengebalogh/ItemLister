var button = document.getElementById('button')
var box = document.getElementById('box')

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

export default runEvent
