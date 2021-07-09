const SessionStrorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _setAddVehicleData(data) {
    sessionStorage.setItem("addVehicleData", data);
  }
  function _getAddVehicleData() {
    return sessionStorage.getItem("addVehicleData"); //addVehicleData
  }
  return {
    getService: _getService,
    setAddVehicleData: _setAddVehicleData,
    getAddVehicleData: _getAddVehicleData,
  };
})();
export default SessionStrorageService;
