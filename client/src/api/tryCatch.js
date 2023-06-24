 export const tryCatch = async (apiCall) =>{
    try {
        console.log("tryCatch",apiCall);
        return apiCall
        // console.log("iamworking inside tryCatch");
    } catch (error) {
        return ("error",error?.message)
    }
}