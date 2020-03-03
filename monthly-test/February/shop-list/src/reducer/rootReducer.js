const initState = {
    list : [],
    filteredList : []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_SHOP" :
            (action.shop.opening < action.shop.closing) ? action.shop.isOpen = true : action.shop.isOpen = false 
            let newShop = action.shop
            console.log(newShop)
            return {
                ...state,
                list : [...state.list, newShop],
                filteredList : [...state.list, newShop]
            }
        case "AREA_FILTER" : 
            let newList = state.list.filter(shop => {
                return shop.area === action.areaName
            })
            //console.log(newList)
            return {
                ...state,
                filteredList : newList
            }
        case "CATEGORY_FILTER" : 
            let newList2 = state.list.filter(shop => shop.category === action.categoryName)
            //console.log(newList2)
            return {
                ...state,
                filteredList : newList2
            }
        case "STATUS_FILTER" :
            let newList3 = state.list.filter(shop => {
                //shop.isOpen === (action.status === "Open") ? true : false
                if(action.status === "Open") {
                    return shop.isOpen ===true
                }
                if(action.status === "Closed") {
                    return shop.isOpen ===false
                }else {
                    return true
                }
            })
            return {
                ...state,
                filteredList : newList3
            } 
        default : 
            return state    
    }
}

export default rootReducer;