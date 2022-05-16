const palindrome = (string) => {
   // if(typeof string === 'undefined') return ;
   if(typeof string == 'undefined') return;

    return string
            .split('')
            .reverse()
            .join('');
}

const average = array => {
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

// Exportación de un objeto
module.exports = {
    palindrome : palindrome,
    average : average
}

// Exportación de un método
// module.exports = average;