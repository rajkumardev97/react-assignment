export function removeNullProperties(obj, prv, key) {
  Object.entries(obj).forEach(([key, val]) => {
    if (val && typeof val === "object") removeNullProperties(val, obj, key);
    else if (!val)  { if(val !== 0 && val !== false) delete obj[key] }
  });
  if(prv && !Object.keys(prv[key]).length) delete prv[key];
}
