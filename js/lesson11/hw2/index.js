const countOccurrences = (st, subst) => {
    if(!subst) return null;
    let count = 0;
    let pos = -1;
    while ((pos = st.indexOf(subst, pos + 1)) !== -1) {
        count++
    }
    return count;
}