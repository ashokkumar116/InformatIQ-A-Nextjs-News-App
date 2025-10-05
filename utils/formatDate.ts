export const formatDate = (date:string):string=>{
    const formatedDate = new Date(date);
    return formatedDate.toLocaleDateString("en-US",{
        year:"numeric",
        month:"long",
        day:"numeric"
    })
}