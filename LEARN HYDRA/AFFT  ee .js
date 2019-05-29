a.show()
//SOUND

a.setScale (10)
a.setBins (8)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9

shape(14).scale(()=> a.fft[0]*2 + 0.125)
  .repeat(15, 8, 0.0005)
.kaleid(2)
// .add(osc(8).colorama(8).color(2,3,4))
.diff(o1).rotate(()=> a.fft[2]*0.1 -0.2)
// .scrollY(-0.32,-0.2)
.blend(o3)
// .modulate(o3)
.diff(o3)
  // .add(shape(2).color(2,1,0.5).repeat(-2,8)
     .add(shape(3).scale(2).color(0,1,0.5))
     // .scrollY(()=> a.fft[5]*0.2 -0.1,-0.02))
  	 .scale(()=> a.fft[3]*0.2 -1)
.modulate(o1)
// .scale(()=> a.fft[3]*2 -1)
.scrollY(-2,-0.2)
// .rotate(-0.1,()=> a.fft[3]*0.02 -0.1)
.out(o2)
