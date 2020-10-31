function isIsogram(str){
    let str_lower = str.toLowerCase();
    let str_object = {};
    for (let key in str_lower) {
        if (str_object[str_lower[key]]) {
            str_object[str_lower[key]] += 1;
        } else {
            str_object[str_lower[key]] = 1;
        }
    }
    for (let key in str_object) {
        if (str_object[key] > 1) {
            return false;
        }
    }
    return true;
}
