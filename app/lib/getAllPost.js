export const getAllPost = async()=>{
    const res = await fetch('http://localhost:3000/api');
    if(!res.ok){
        throw new Error('Data not fatching!');
    }
    return res.json();
}