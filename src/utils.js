const storeAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

const isSignedIn = () => {
  if(localStorage.getItem('authToken')) {
    return true;
  }
  return false;
};

const removeAuthToken = () => {
  localStorage.clear();
};

export { isSignedIn, storeAuthToken, removeAuthToken };
