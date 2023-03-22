const generateFizzNumbers = (n,p=1) => {

    const fizzTab = [] //numbers in "fizz style"
    const k = p + n;

    for(let i = p; i < k; i++){


        if(i%3 === 0 && i%5 === 0)fizzTab.push({key:i, value:"FizzBuzz"})
        else if(i%3 === 0)fizzTab.push({key:i, value:"Fizz"});
        else if(i%5 === 0)fizzTab.push({key:i, value:"Buzz"})
        else fizzTab.push({key:i, value: i})

    }

    return fizzTab
}

export {generateFizzNumbers};