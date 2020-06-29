export const validateNumber = (number) => {
    let isPlus389 = number.startsWith('+389');
    let isOu389 = number.startsWith('00389');
    let isPlus355 = number.startsWith('+355');
    let isOu355 = number.startsWith('00355');
    let isPlus377 = number.startsWith('+377');
    let isOu377 = number.startsWith('00377');
    let isPlus386 = number.startsWith('+386');
    let isOu386 = number.startsWith('00386');
    let isPlus383 = number.startsWith('+383');
    let isOu383 = number.startsWith('00383');
    let hasLength = number.length >= 13;
    if (isPlus355 || isOu355 || isPlus389 || isOu389 || isPlus377 || isOu377 || isPlus386 || isOu386 || isPlus383 || isOu383) {
        if (hasLength) return true;
        else return false;
    } else return false;
}