let img, snd

function preload(){
  img = loadImage("images/cma4w_logo.png")
  snd = new Tone.Player(
    "sound/045_tom_3.wav",
    "onload": function(){
      console.log("Sound loaded!")
    }
  ).toDestination()
}

function setup(){
  createCanvas(400, 400)
  image(img, 0, 0, width, height)
}

function mouseClicked(){
  if (Tone.state !== "started"){
    Tone.start()
  }

  if (snd.loaded){
    snd.start(0)
  }
  else {
    alert("Sound hasn't loaded yet. Please try again in a second!")
  }
}
