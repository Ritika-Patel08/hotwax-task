
function deepClone(obj)
{
    const changeTostring=JSON.stringify(obj);

    const clonedString=JSON.parse(changeTostring);

    return clonedString;
}

const obj1={
    name:"Ritika",
    Gender:"Female",
    address:"Indore"
}

console.log(obj1);

const clonedObject=deepClone(obj1);


console.log(clonedObject);

