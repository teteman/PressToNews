

function muestra_oculta(id) {
    if (id === 2) {
        aditional_info.style.display = 'none';
        choose_categories.style.display = '';
        help.style.display = 'none';
    }
    else {
        if (id === 3) {
            aditional_info.style.display = 'none';
            choose_categories.style.display = 'none';
            help.style.display = '';
        }
        else {
            aditional_info.style.display = '';
            choose_categories.style.display = 'none';
            help.style.display = 'none';
        }
    }
}