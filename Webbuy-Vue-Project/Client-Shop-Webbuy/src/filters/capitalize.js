export default (value) => {
    return value.forEach(v =>{
        v[0].toUpperCase() + v.substring(1).toLowerCase();
    }) 
}