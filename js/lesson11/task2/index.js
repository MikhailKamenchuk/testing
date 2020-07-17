const sortContacts = (arr, isAds = true) => {
    if(!Array.isArray(arr)) return null;
    return arr.sort((a, b) => isAds ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
}