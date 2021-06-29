const mutate = (data) => {
    return data.map(value => value.toLowerCase());
}

export {mutate};