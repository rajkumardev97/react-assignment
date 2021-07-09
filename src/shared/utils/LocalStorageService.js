const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setAccessToken(access_token) {
    localStorage.setItem("access_token", access_token);
  }

  function _setRefreshToken(refresh_token) {
    localStorage.setItem("refresh_token", refresh_token);
  }

  function _setUser(user) {
    localStorage.setItem("userData", user);
  }

  function _getAccessToken() {
    return localStorage.getItem("access_token"); //access_token
  }

  function _getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }

  function _clearToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
  function _getUserData() {
    return localStorage.getItem("userData"); //access_token
  }
  return {
    getService: _getService,
    setAccessToken: _setAccessToken,
    setRefreshToken: _setRefreshToken,
    setUser: _setUser,
    getUser: _getUserData,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
  };
})();
export default LocalStorageService;
