const swap = (arr) => {
    const [first, ...rest] = arr;
    return [...rest, first];
}
