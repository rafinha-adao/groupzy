if (sessionStorage.getItem('login')) {
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-signup').style.display = 'none';
}
if (!sessionStorage.getItem('login')) {
    document.getElementById('btn-logout').style.display = 'none';
    document.getElementById('btn-chat').style.display = 'none';
    document.getElementById('btn-groups').style.display = 'none';
}