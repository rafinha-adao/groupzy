let user = JSON.parse(sessionStorage.getItem('user'));
if (user.idGroup == null) {
    window.location = '/groups';
}