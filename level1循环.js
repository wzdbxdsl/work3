function factorial(n){
    let sum=1;
    for(let i=1;i<=n;i++){
        
        sum=sum*i;
    }
    return sum;
}


console.log(factorial(4));


