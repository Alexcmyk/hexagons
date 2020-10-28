$('.filters-list a').on('click', function() {
    let filter = $(this).data('filter')
    $('.product').hide()
    $(filter).show()
    $('.filters-list a').removeClass('store-selected')
    $(this).addClass('store-selected')
    return false
})
