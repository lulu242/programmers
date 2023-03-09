function solution(id_pw, db) {
  const [id, pw] = id_pw
  //Map 객체는 키-값 쌍인 집합이면 키는 단 하나만 존재한다
  // set으로 추가, get으로 값 반환, has로 존재여부확인
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
    
}