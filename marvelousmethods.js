const mutate = (data) => {
    return data.map(value => value.toLowerCase());
}

const mutateWithForEach = (data) => {
    data.forEach((value, index) =>{
        data[index] = value.toLowerCase();
    });
    return data;
}

export {mutate, mutateWithForEach};