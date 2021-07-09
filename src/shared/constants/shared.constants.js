const checkPermissions = (permissions, moduleName, inspectPermission) => {
  const modulePermissionStatus = permissions[moduleName][inspectPermission];

   if (modulePermissionStatus) {
    return true;
  }

  return false;
};

module.exports.checkPermissions = checkPermissions;
