
const gettoken=()=>{
    const token=localStorage.getItem("OnlineTestKey");
    return token;
}
const getuserdetails = () => {
    var token = gettoken();
   
    if (gettoken() != null) {
        try{
      var userData = JSON.parse(window.atob(token.split(".")[1]));
      return userData;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    } else {
      return null;
    }
  };
const removetoken=()=>{
   return localStorage.removeItem("OnlineTestKey");
}
export {gettoken,getuserdetails,removetoken};