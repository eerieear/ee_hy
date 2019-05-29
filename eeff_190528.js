e_e
//eerieeye //reactive vortex //eeff190528

//based on
//flor de fuego -audioreactive shape
//see code below



a.setScale (10)
a.setBins (8)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9


osc(1,1,0.2)
  .color(()=>a.fft[0]*6,()=>a.fft[6]*3,()=>a.fft[3]*1).rotate(1,0.5).modulateRotate(o0).mult(o1,1).diff(o2).mult(o3).out()
osc(12,()=>a.fft[0]*0.001).kaleid(100)
  .modulate(noise(3)).modulate(o2).diff(o3)
  	.out(o1)
shape(100,0.01,1).scale(0.6,0.6).modulateScale(osc(1,1))
  //.diff(o1)
  	.out(o2)






shape(14).scale(()=> a.fft[0]*2 + 0.125)
  .repeat(15, 8, 0.0005)
.modulate(noise(3))
.kaleid(()=>a.fft[0]*3)
 .add(osc(8).colorama(8).color(2,3,4))
.diff(o1).rotate(()=> a.fft[2]*0.1 -0.2)
 //.scrollY(-0.32,-0.2)
//.blend(o3)
 .modulate(o1)
.diff(o3)
  	.add(shape(20).color(2,1,0.5).repeat(-2,8)
     .diff(shape(3).scale(2).color(0,1,0.5))
      .scrollY(()=> a.fft[5]*0.2 -0.1,-0.02))
  	 .scale(()=> a.fft[3]*0.2 -4)
.modulate(o1)
.modulate(o2)
// .scale(()=> a.fft[3]*2 -1)
//.scrollY(-2,-0.2)
 .rotate(-0.1,()=> a.fft[3]*0.02 -0.1)
.out(o3)



//based on
//flor de fuego -audioreactive shape

//osc(1,1,0.2).color(1,0.3,()=>a.fft[0]*1).rotate(1,0.5).modulateRotate(o0).mult(o1,1).mult(o2).out()
//osc(2,()=>a.fft[0]*0.001).kaleid(100).modulate(noise(3)).modulate(o1).out(o1)
//shape(100,0.01,1).scale(0.6,0.6).modulateScale(osc(1,1)).out(o2)


