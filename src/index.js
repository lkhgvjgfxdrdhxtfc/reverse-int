module.exports = function reverse (n) {
  let n1 = Math.abs(n);
        let result ='';
        for (let i=n1.toString().length-1; i>=0; i=i-1) {
          result = result + n1.toString()[i];
        }
        return result;
}
