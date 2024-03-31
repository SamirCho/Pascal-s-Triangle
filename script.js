let num=5

function factorial(x){
    if(x<=1){
        return 1
    }
    return x*factorial(x-1)
}

function choose(n,k){
    return factorial(n)/(factorial(k)*factorial(n-k))
}

let a=[]
for (let i = 0; i < num; i++) {
    a=[]
    for (let j = 0; j <= i; j++) {
        a.push(choose(i,j))
    }
    console.log(a)
}