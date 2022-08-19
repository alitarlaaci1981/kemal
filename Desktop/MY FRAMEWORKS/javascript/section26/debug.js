function btn1Clicked() {
  document.getElementById('p1').innerHTML = 'Button 1 was clicked'
  alert('Button 1 was clicked')
}

function charsTyped() {
  const chars = document.getElementById('i1').value

  // eslint-disable-next-line no-use-before-define
  createString(chars)
}

function createString(someString) {
  document.getElementById('p2').innerText = `Characters typed: + ${someString.length}`
}

// eslint-disable-next-line no-use-before-define
document.getElementById('b2').addEventListener('click', btn2Clicked)

function btn2Clicked() {
  const main = document.getElementById('main')
  const child = document.getElementById('p3')

  main.removeChild(child)
}

// eslint-disable-next-line no-use-before-define
document.getElementById('i2').addEventListener('change', valueEntered)

function valueEntered() {
  const size = document.getElementById('i2').value.length

  document.getElementById('p4').style.fontSize = `${size} + em`
}
document.getElementById('i2').addEventListener('change', valueEntered)

btn1Clicked()
charsTyped()
createString()
