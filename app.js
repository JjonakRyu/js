const txtAnim = document.querySelector('h1')

new Typewriter(txtAnim, {
    deleteSpeed:20
})
.changeDelay(20)
.typeString('Moi c\'est Martin ou Photon ig')
.pauseFor(300)
.typeString('<strong>, mon niveau sur differents jeux</strong>')
.pauseFor(2000)
.deleteChars(30)
.typeString('<strong> je suis</strong>')
.pauseFor(2000)
.typeString('<span style="color: #27ae60"> master sur apex</span>')
.pauseFor(2000)
.deleteChars(15)
.typeString('<span style="color: #ff0000"> 1200 elo sur chess.com</span>')
.pauseFor(2000)
.deleteChars(22)
.typeString('<span style="color: #ea39ff"> GM sur overwatch</span>')
.pauseFor(2000)
.deleteChars(16)
.typeString('<span style="color: midnightblue"> challenger sur LOL</span>')
.pauseFor(2000)
.deleteChars(61)
.typeString('<strong> rien a voir mais ... j\'aime les ramen !</strong>!')
.pauseFor(2000)
.deleteChars(40)
.typeString(' <3')
.start()
