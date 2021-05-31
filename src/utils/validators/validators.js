export const required = value => {
    if(value) return undefined;

    return "Field is required";
}

export const maxLength = (maxlen) => (value) => {
    if(value && value.length > maxlen) return ("max length is " + maxlen);
    return undefined;
}