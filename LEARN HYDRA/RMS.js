
msg.setPort(6666)
//L
peaks1 = new Array(8).fill(0)
powers1 = new Array(8).fill(0)
//R
peaks2 = new Array(8).fill(0)
powers2 = new Array(8).fill(0)
msg.on('/rms', (args) => {
  // ["/rms", synthID, orbitIndex, peak1, power1, peak2, power2, …]
  let buffer = Buffer.from(args[0].data);
  let index = buffer.readInt32BE(20)
  peaks1[index] = buffer.readFloatBE(24)
  powers1[index] = buffer.readFloatBE(28)
  peaks2[index] = buffer.readFloatBE(32)
  powers2[index] = buffer.readFloatBE(36)
})


osc()
  .kaleid( ()=>peaks1[1]*5)
  .pixelate( ()=>peaks1[0]/2)
  .out()
