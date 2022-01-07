function removeItem(e) {
    e.preventDefault()
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this item permanently?')) {
            var li = e.target.parentElement
            itemList.removeChild(li)

        }
    }
}

export default removeItem
