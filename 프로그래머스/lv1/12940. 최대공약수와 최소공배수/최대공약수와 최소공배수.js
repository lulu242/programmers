function solution(n, m) {
    function gcd(a , b) {
        if(b === 0 ) return a
        else return (gcd(b, a % b))
    }
    const result = []
    result.push( n>= m ? gcd(n , m) : gcd(m, n))
    result.push(n * m / result[0])
    
    return result
}