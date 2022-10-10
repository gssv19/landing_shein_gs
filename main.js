const btn_3 = document.getElementById('btn_3');
const btn_close = document.getElementById('close_modal');
const ventana = document.getElementById('IrVentanaFlotante');

btn_3.addEventListener('click', (event) => {
    event.preventDefault();
    ventana.classList.add('active');
});

btn_close.addEventListener('click', (event) => {
    event.preventDefault();
    ventana.classList.remove('active');
});