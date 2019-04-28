const AbilityScores = (str, dex, con, int, wis, cha) => {
  const fullStats = () => "Strength " + str + ", Dexterity "+ dex + ", Constitution " + con + ", Intelligence " + int + ", Wisdom " + wis + ", Charisma " +cha
  const abrvStats = () => "Str " + str + ", Dex " + dex + ", Con " + con + ", Int " + int + ", Wis " + wis + ", Cha " + cha
  const getStr = () => str
  const getDex = () => dex
  const getCon = () => con
  const getInt = () => int
  const getWis = () => wis
  const getCha = () => cha
  return {fullStats, abrvStats, getStr, getDex, getCon, getInt, getWis, getCha}
}



const scores = AbilityScores(8,10,12,13,16,17)

function render() {
  let test = document.createElement('p')
  test.innerHTML = scores.getInt()
  let body = document.querySelector('body')
  body.appendChild(test)
}


render();