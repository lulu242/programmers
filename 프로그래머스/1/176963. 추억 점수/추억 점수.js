function solution(name, yearning, photo) {
    for(let i = 0; i < photo.length; i++) {
        for(let j = 0; j < photo[i].length; j++) {
            if(name.indexOf(photo[i][j]) >= 0 ) {
                photo[i][j] = yearning[name.indexOf(photo[i][j])]
            } else {
                photo[i][j] = 0
            }
        }
    } return photo.map(el => el.reduce((acc, cur)=> acc + cur))
}
