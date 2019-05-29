//PANTROPICAL


// IMG OUT

s3.init({src: vid})
src(s3).out(o3)


s3.init({src: vid})
src(s3)
  .diff(o1)
  // .scale(()=> a.fft[0]*2 +0.001)
      // .scale(()=> a.fft[0]*1 +0.99)
// .scale(()=> a.fft[4]*1 +0.39)
// .repeat(15, 3, 0.5)
// .rotate(0, 0.0008)
.saturate(8)
// .rotate(()=> a.fft[0]*4, -0.8)
// .color(() => a.fft[1]*3, () => a.fft[2], () => a.fft[4]*12)
// .color(0.02, () => a.fft[0], () => a.fft[4])
  .saturate(3.3)
  .contrast(2)
  // .contrast(()=> a.fft[0]*1 +1.99)
  // .scrollX(1, -0.08)
  // .scrollX(1, () => a.fft[1]/24)
// .diff(osc(0.06, 0.3, 0.02))
 // .diff(osc(2, 0.03, 2))
 // .diff(osc(()=> 0.1, 0.3, 2))
  // .diff(o3)
  // .kaleid(2)
// .diff(src(s3).saturate().hue(0.4))
.out(o3)


//\\\\\\

//LOAD
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
/////


//\\\\

//IMAGE
vid.src = '/Volumes/DATA/e_e/IMAGEN/webm/webm ee/3.webm'















vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/0.webm'
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/1.webm'
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/2.webm'
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/3.webm'
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/4.webm'

NAAFI IMG
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/NAAFI_knife.webm'
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/NAAFI_ash.webm'

//Logos NAAFI
// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/pantropical_sun_w.webm'
//Logos PANTROPICAL
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/pantropical_sun_b.webm'
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/pantropical_sun_w.webm'
//Logo+ Text
vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/pantropical_txt.webm'


//VID
// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/pantropical.mp4'
// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/pantropicabeza.mp4'




///////

vid.src = '/Volumes/DATA/e_e/ee_scripts/hydra examples test/hood02.webm'
// vid.src = '/Volumes/DATA/e_e/ee_scripts/hydra examples test/e.webm'


//OK
vid.src = '/Volumes/DATA/e_e/ee_scripts/hydra examples test/test.webm'

// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/pantropical-test.webm'
// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/SSR/0.webm'






// TEST
// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/webm/MOSHED-2019-5-15-0-14-48.webm'





/////////////










//VIDEO
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
// get path to video using getPaths() representing current directory in atom
// vid.src = atom.project.getPaths()[0]+'/assets/jelly.webm'
// img.src = atom.project.getPaths()[0]+'Volumes/DATA/e_e/ee_scripts/hydra examples test/testMK.jpg'
// img.src = '/Volumes/DATA/e_e/ee_scripts/hydra examples test/testMK.jpg'
// vid.src = '/Volumes/DATA/e_e/ee_scripts/hydra examples test/test.webm'

// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/pantropical-test.webm'

// vid.src = '/Volumes/DATA/e_e/IMAGEN/PANTROPICAL/webm/MOSHED-2019-5-15-0-14-48.webm'



s0.init({src: vid})
src(s0).out(o2)
