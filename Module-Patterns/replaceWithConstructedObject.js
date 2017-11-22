function ShowMsg2(msg) {
    this.show = () => console.log(msg);
}

module.exports = new ShowMsg2('export object replaced With Constructed Object !!!')