class appURL {
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL + "/getvisitor"
    static PostContact = this.BaseURL + "/postcontact"
    static AllCategory = this.BaseURL + "/category"
    static ProductListByType(type) {
        return this.BaseURL + "/type/" + type;
    }
    static ProductListByCategory(category) {
        return this.BaseURL + "/category/" + category;
    }

    static ProductDetails(id) {
        return this.BaseURL + "/productdetails/" + id;
    }

    static NotificationHistory = this.BaseURL + "/notification"

    static searchByProduct(key) {
        return this.BaseURL + "/search/" + key;
    }
    
    static userLogin = this.BaseURL + "/login"
    static userData = this.BaseURL + "/user"
    static userRegister = this.BaseURL + "/register"
    static userForget = this.BaseURL + "/forgetpassword";
    static userReset = this.BaseURL + "/resetpassword";
}

export default appURL