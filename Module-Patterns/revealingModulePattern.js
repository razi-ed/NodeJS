let msg = 'export passed with Revealing Module Pattern Object !!!';

function show(params) {
    console.log(msg);
}

module.exports = {
    showMsg: show
}