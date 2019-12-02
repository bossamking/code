console.log('신나는 야구 게임!')

let count = [0,0,0,0,0] // 0.스트 || 1.볼 || 2.아웃 || 3.안타
function start() {
  if(count[4] === 0 ){
    console.log('첫번째 타자가 입장했습니다.')
    console.log('투구!!')
    hit()
    count[4]++
  } else if (count[4] === 4){
    console.log('게임을 리셋해주세요')
  } else {
    console.log('투구!!')
    hit()
  }
}

function hit() {
  let pitch = Math.floor(Math.random() * 4)

  if(pitch === 0){
    count[0]++
    console.log('Strike!')
    if(count[0]===3){
      console.log('삼진 아웃! \n 다음 타자가 타석에 입장했습니다.')
      count[2]++
      count[0] = 0
    }
  } else if (pitch === 1){
    count[1]++
    console.log('ball!')
    if(count[1]===4){
      console.log('볼넷! \n 다음 타자가 입장했습니다.')
      count[0] = 0
      count[3]++
      count[1] = 0
    }
  } else if (pitch === 2) {
    count[0] = 0
    count[1] = 0
    count[2]++
    if(count[2] < 3){
      console.log('아웃! 다음 타자가 타석에 입장했습니다.')
    }
  } else if (pitch === 3){
    count[0] = 0
    count[1] = 0
    count[3]++
    console.log('안타! 다음 타자가 타석에 입장했습니다.')
  }
  if(count[2] === 3){
    count[4] = 4
    return console.log('쓰리 아웃! \n game over \n 최종 안타수 : '+count[3])
  }
  console.log(count[0]+'S '+count[1]+'B '+count[2]+'O')
}

function reset() {
    for(let a in count) {
        count[a] = 0
    }
    console.log('게임을 리셋합니다.')
}