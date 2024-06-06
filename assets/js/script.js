/* Alerta */
const alerta = document.getElementById('alerta')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

alerta.append(wrapper)
}

const alertTrigger = document.getElementById('alertaBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
    appendAlert(document.getElementById('alertaBtn').getAttribute('data-bs-contenido'),document.getElementById('alertaBtn').getAttribute('data-bs-tipo-de-alerta'))
    })
}

/* PopOver */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* Toast */
const toastTrigger = document.getElementById('toastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
    })
}

document.querySelector('#toastBtn').addEventListener('click', function() {
    document.querySelector('.toast-header strong').textContent = document.querySelector('#toastBtn').getAttribute('data-bs-titulo')
    document.querySelector('.toast-body').textContent = document.querySelector('#toastBtn').getAttribute('data-bs-contenido')
})

/* OffCanvas */
document.querySelector('#offcanvasBtn').addEventListener('click', function() {
    document.querySelector('.offcanvas-title').textContent = document.querySelector('#offcanvasBtn').getAttribute('data-bs-titulo')
    document.querySelector('.offcanvas-body').textContent = document.querySelector('#offcanvasBtn').getAttribute('data-bs-contenido')
})