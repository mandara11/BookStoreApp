import axios from "axios"

const headerConfig={
    headers:{'x-access-token':localStorage.getItem('token')}
}

export const getBookList=()=>{
    let response=axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerConfig)
    return response
}

export const addToCart=(id)=>{
    let response=axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,id,headerConfig)
    return response
}

export const addToWishList = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,id,headerConfig)
     return response
}

export const itemsCount = (detailsObj) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${detailsObj.id}`, detailsObj,headerConfig)
      return response
}

export const getcartBookList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)
    return response
}
export const getWishList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items', headerConfig)
    return response
}

export const removeCartListItem = (cartlistObj) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${cartlistObj.id}`, headerConfig)
    return response
}
export const removeWishListItem = (wishlistObj) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${wishlistObj.id}`, headerConfig)
    return response
}