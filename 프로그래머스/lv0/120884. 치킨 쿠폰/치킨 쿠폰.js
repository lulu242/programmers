function solution(chicken) {
    function coupon(chicken, num){
        if(chicken < 10) return num
        // 1081 마리 주문시 108 쿠폰 + 1쿠폰
        let result = Math.floor(chicken / 10) + chicken % 10;
        // 재주문 치킨
        let num2 = num + Math.floor(chicken / 10);
        return coupon(result, num2)
    }
    return coupon(chicken, 0)
}