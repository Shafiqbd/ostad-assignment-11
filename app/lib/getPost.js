export const getPost = async(id)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!res.ok){
        throw new Error('Data not fatching!');
    }
    return res.json();
}