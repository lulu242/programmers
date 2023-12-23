function solution(str1, str2) {
    const arr1 = twoSlice(str1)
    const arr2 = twoSlice(str2)
    
    const cleandedArr1 = cleanAndLowerCase(arr1)
    const cleandedArr2 = cleanAndLowerCase(arr2)
      
    const intersectionArr = intersection(cleandedArr1, cleandedArr2)
    const unionLength = cleandedArr1.length + cleandedArr2.length - intersectionArr.length

    return Math.floor(intersectionArr.length / unionLength * 65536)
}

function cleanAndLowerCase(arr) {
    let regex = /[0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const newArr = arr.filter(el => !regex.test(el)).map(el => el.toLowerCase());
    return newArr
}

function twoSlice(str) {
    const arr = [...str].map((el, i) => el + str[i+1])
    arr.pop()
    
    return arr
} 

function intersection(arr1, arr2) {
    let newArr = [...arr2]
    let intersectionArr = []
    let idx = -1
    for(let i = 0 ; i < arr1.length; i++) {
        idx = newArr.findIndex(el => el === arr1[i])
        if(idx > -1) {
            intersectionArr.push(newArr[idx])
            
            newArr.splice(idx, 1)
        }
    }
    return intersectionArr
}

function union(arr1, arr2, intersection) {
    return arr1.length + arr2.length - intersection.length
}



// 소문자로 바꾸기 특수문자 제거
// 2개씩 자르기
// 교집합 같은거 집합 찾기
// 합지합운 교집한 제외한 것들 더하기