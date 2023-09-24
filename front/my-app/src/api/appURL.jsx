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

    static relatedProduct(category) {
        return this.BaseURL + "/related/" + category;
    }

    static listReview(id) {
        return this.BaseURL + "/review/" + id;
    }

    static addToCart = this.BaseURL + "/cart";

    static cartCount(product_code){
        return this.BaseURL + "/cartcount/" + product_code;
   }

   static addToFavorite(product_code, email){
    return this.BaseURL + "/favorite/"  + product_code + "/" + email;
   }

   static listFavorite(email){
    return this.BaseURL + "/listfavorite/" + email;
   }

   static removeFavorite(product_code, email){
    return this.BaseURL + "/deletefavorite/" + product_code + "/" + email;
   }

   static listCart(email){
    return this.BaseURL + "/listcart/" + email;
   }

   static removeCart(product_code, email){
    return this.BaseURL + "/deletecart/" + product_code + "/" + email;
   }

   static addItem(id, quantity, price){
    return this.BaseURL + "/itemadd/" + id + "/" + quantity + "/" + price;
}

   static removeItem(id, quantity, price){
    return this.BaseURL + "/itemremove/" + id + "/" + quantity + "/" + price;
}

   static Order = this.BaseURL + "/order";

   static orderListByEmail(email){
    return this.BaseURL + "/orderlist/" + email;
}

    static postReview = this.BaseURL + "/postreview"

}

export default appURL