const sortContacts = (arr, isAds = true) => {
    if(!Array.isArray(arr)) return null;
    return arr.sort((a, b) => isAds ? a.name.localCompare(b.name) : b.name.localCompare(a.name))
}