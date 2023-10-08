// Modal
const modalOpen = document.querySelector('#open-modal')
const modalClose = document.querySelector('#close-modal')
const modal = document.querySelector('dialog')
const html = document.querySelector('html')

// Show modal

modalOpen.addEventListener('click', () => {
    modal.show()
    html.style.overflowY = 'hidden'
})

// Close Modal
modalClose.addEventListener('click', () => {
    modal.close()
    console.log('hello')
    html.style.overflowY = 'visible'
})
