export const validateNumber = (prefix, phone) => {
    if (prefix === '383' || prefix === '389') {
        if (phone.length === 8) return true;
        else return false;
    } else if (prefix === '355') {
        if (phone.length === 9) return true;
        else return false;
    } else return false;
}