

//RESET
      shape(0, () => a.fft[1])
        // .color(0,0,0)
        // .repeat(15, 40, 0.0005)
        // .repeat(2, 4, 0.0005)
        // .rotate(0.0004,  ()=> 0.028 + a.fft[6])
        // .diff(osc(8, 0.03, 2))
        .modulate(o2)
        .scale(1.5, ()=> 0.4 + a.fft[4])
        .out(o2)


    //SQUARES
      shape(4, () => a.fft[1])
        .repeat(15, 24, 0.5)
        // .repeat(5, 4, 0.0005)
        // .rotate(0.0004,  ()=> 0.028 + a.fft[3])
        // .diff(osc(8, 0.03, 2))˜
        // .scale(15, ()=> 0.4 + a.fft[0])
        .out(o1)

//LINE
shape(2, () => a.fft[0])
    .scale(0.5, ()=> 0.4 + a.fft[6])//SMALLER
    // .scale(1.95, ()=> 0.4 + a.fft[0]) //LARGER
    // .repeat(()=> 0.4 + a.fft[0], 4, 0.05)
    .repeat(5, 4, 0.05)
    // .repeat(5, 2, 0.05) //STRIPES
    // .scrollY(1,0.2)
    // .diff (osc(0.3, 0.03, 4a.fft[4]))
    .diff(osc(() => a.fft[0] + 0.02,() => a.fft[6] + 0.2, () => a.fft[0] + 1))
    .out(o1)


//TRIANGLE
  // shape(3, () => a.fft[0] + 1.02)
  shape(3, () => a.fft[0] + 0.02)
      .repeat(25, 0.5, 0.0005)
      // .repeat(5, 0.2, 0.5)
    // .rotate(0.0004,  ()=> 0.028 + a.fft[6])
    // .diff(osc(8, 0.03, 2))
    // .scale(()=> 1.4 + a.fft[4] , ()=> 0.4 + a.fft[1])
    // .scale(()=> 0.28 + a.fft[3], ()=> 0.8 + a.fft[1])
    // .scale(()=> 0.058 + a.fft[3], ()=> 0.68 + a.fft[3])
    .scale(()=> 0.158 + a.fft[3], ()=> 0.8 + a.fft[0])
    // .scrollY(-0.32,()=> 0.028 + a.fft[6])
    .out(o1)



  //SQUARES
    shape(4, () => a.fft[0])
    .repeat(15, 40, 0.0005)
    .rotate(0.0004,  ()=> 0.028 + a.fft[6])
    // .diff(osc(8, 0.03, 20))
    .scale(1.5, ()=> 0.4 + a.fft[4])
    .out(o1)
