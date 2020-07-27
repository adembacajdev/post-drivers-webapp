export const validateNumber = (prefix, phone) => {
    console.log('prefix', prefix);
    console.log('phone', phone);
    console.log('phoneLength', phone.length);
    if (prefix === '383' || prefix === '389') {
        if (phone.length === 8) return true;
        else return false;
    } else if (prefix === '355') {
        if (phone.length === 9) return true;
        else return false;
    } else return false;
}