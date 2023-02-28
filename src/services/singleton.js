class Login {
    static login = null;

    static getLogin() {
        if (!this.login) {
            this.login = new this();
        }
        return this.login;
    }

    myData = {}
    updateData(data){
        this.myData = data;
    }
}

export default Login.getLogin();