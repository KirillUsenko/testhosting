document.querySelector('.modal__back').addEventListener('click', () => {
    document.querySelector('.rules').classList.remove('rules_active')
    document.querySelector('.wipe').classList.remove('wipe_active')
    document.querySelector('.kits').classList.remove('kits_active')
    document.querySelector('.card').classList.remove('card_active')
    document.querySelector('.menu').classList.remove('menu_active')
    document.querySelector('.modal__back').classList.toggle('modal__back_active')
})

document.querySelector('.card__close').addEventListener('click', () => {
    document.querySelector('.card').classList.remove('card_active')
    document.querySelector('.modal__back').classList.toggle('modal__back_active')
})


document.querySelector('.catalog__button_rules').addEventListener('click', () => {
    document.querySelector('.rules').classList.toggle('rules_active')
    document.querySelector('.modal__back').classList.toggle('modal__back_active')
})

document.querySelector('.catalog__button_wipe').addEventListener('click', () => {
    document.querySelector('.wipe').classList.toggle('wipe_active')
    document.querySelector('.modal__back').classList.toggle('modal__back_active')
})

document.querySelector('.catalog__button_kits').addEventListener('click', () => {
    document.querySelector('.kits').classList.toggle('kits_active')
    document.querySelector('.modal__back').classList.toggle('modal__back_active')
})

document.querySelector('.nav__burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu_active')
    document.querySelector('.modal__back').classList.toggle('modal__back_active')
})

document.querySelectorAll('.kits__button').forEach(button => {
    button.addEventListener('click', e => {
        document.querySelectorAll('.kits__button').forEach(button => button.classList.remove('kits__button_active'))  
        e.target.classList.add('kits__button_active') 
        document.querySelectorAll('.kits__content').forEach(content => content.classList.remove('kits__content_active'))    
        document.querySelector(`#content${e.target.getAttribute('id').slice(-1)}`).classList.add('kits__content_active')
    })
})

document.querySelectorAll('.big-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.card').classList.toggle('card_active')
        document.querySelector('.modal__back').classList.toggle('modal__back_active')
    })
})

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.card').classList.toggle('card_active')
        document.querySelector('.modal__back').classList.toggle('modal__back_active')
    })
})