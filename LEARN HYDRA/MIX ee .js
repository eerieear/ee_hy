

render(o3) // show only o3
render(o2) // show only o2
render(o1) // show only o1
//MIX
render(o0)
 // show only o0

render() // show all four outputs o0, o1, o2, o3
//////////

src(o1).diff(o2).out(o0)
src(o2).diff(o3).diff(o2).modulate(o2).out(o0)
src(o1).diff(o2).diff(o3).out(o0)
src(o3).mult(o2).diff(o1).modulate(o2).diff(o3).out(o0)
src(o2).mult(o1).diff(o2).modulate(o3).mult(o3).out(o0)

src(o1).mult(o2).out(o0)

src(o1).mult(o3).out(o0)
src(o1).mult(o3).diff(o1).diff(o3).mult(o2).out(o0)
src(o1).mult(o3).blend(o3).out(o0)
src(o2).diff(o2).modulate(o3).diff(o1).blend(o3).mult(o3).modulate(o2).out(o0)

src(o3).diff(o1).modulate(o1).mult(o2).modulate(o2).out(o0) //RAIN
src(o0).modulate(o3).out(o0) //RAIN

src(o0).modulate(o1).out(o0) //RAIN
// src(o0).modulate(o1).out(o0) //RAIN





  src(o1).modulate(o3).diff(o1).out(o0) //CHROME GEOMETRY CRAZY RAIN
  src(o2).modulate(o1).modulate(o1).out(o0) //lines DOuble MOD
  src(o2).modulate(o3).modulate(o1).diff(o2).out(o0) //lines DOuble MOD
  src(o1).modulate(o2).mult(o2).out(o0) //3
  src(o1).modulate(o2).mult(o2).modulate(o2).mult(o3).out(o0) //4 LINE

  src(o0).modulate(o3).out(o0) //RAIN
