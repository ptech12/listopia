// one function for create update and delete
/* 
    url => URL to request the data
    optionsObject => what to do (create, update or delete)
    errMsg => error message to display
 */
async function apiRequest(url='', optionsObject = null, errMsg = null) {
    try{
        const response = await fetch(url, optionsObject);
        if(!response.ok) throw Error('There was an error while fetcing. Please reload.');
    }catch (err){
        errMsg = err.message
    } finally{
        return errMsg;
    }
}