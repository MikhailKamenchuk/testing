
const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj
}
const addPropertyV2 = (obj, key, value) => {
  const newProp = {[key]: value}
    Object.assign(obj, newProp)
  return obj
}
const addPropertyV3 = (obj, key, value) => {
  const newProp = {[key]: value}
  return Object.assign({}, obj, newProp)
}
const addPropertyV4 = (obj, key, value) => {
    return {
      ...obj,
      [key]: value
    }
}