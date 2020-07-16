const getParsedIntegers = arr => [...arr].filter(item => Number.parseInt(item));
const getParsedIntegersV2 = arr => [...arr].filter(item => parseInt(item));
const getParsedFloats = arr => [...arr].filter(item => Number.parseFloat(item));
const getParsedFloatsV2 = arr => [...arr].filter(item => parseFloat(item));

