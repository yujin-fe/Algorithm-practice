function solution(slice, n) {
   let pizza = 1;
    while(slice*pizza<n){
        pizza++
    }
    return pizza
}