function solution(id_pw, db) {

    const flat = db.flat()
    const idx = flat.findIndex(el => el === id_pw[0]);
    if(idx === -1) return 'fail'
    return flat[idx + 1] === id_pw[1] ? 'login' : 'wrong pw'

}