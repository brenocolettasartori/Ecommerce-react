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
}

export default appURL