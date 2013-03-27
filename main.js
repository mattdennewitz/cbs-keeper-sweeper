var rm = function() {
    $('tr.plistitem td:contains("Keeper")').parent().remove();
    $('span#posList a').click(rm);
};

window.onload = rm;
