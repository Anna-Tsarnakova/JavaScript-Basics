function showData(){
    var showBlock = document.getElementById('company-data');
    if (document.getElementById('checkbox').checked) {
        showBlock.style.visibility = 'visible';
    } else {
        showBlock.style.visibility = 'hidden';
    }

    //Second solution
    //var showBlock = document.getElementById('company-data');
    //if (document.getElementById('checkbox').checked) {
    //    showBlock.style.display = 'block';
    //} else {
    //    showBlock.style.display = 'none';
    //}
}
