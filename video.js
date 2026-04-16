function generateVideo() {
  const canvas = document.getElementById("reelCanvas");
  const ctx = canvas.getContext("2d");

  const capturer = new CCapture({
    format: 'webm',
    framerate: 30
  });

  let frame = 0;
  let tempMoney = 0;

  capturer.start();

  function draw() {
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 400, 700);

    ctx.fillStyle = "white";
    ctx.font = "bold 28px Arial";
    ctx.fillText("💸 LIVE EARNING", 50, 100);

    tempMoney += Math.floor(Math.random() * 400);

    ctx.fillStyle = "#22c55e";
    ctx.font = "bold 42px Arial";
    ctx.fillText("₹" + tempMoney, 110, 250);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("😳 Real ?", 80, 400);
    ctx.fillText("Try Now 🔥", 120, 450);

    ctx.fillStyle = "#888";
    ctx.font = "14px Arial";
    ctx.fillText(" Only", 130, 650);

    capturer.capture(canvas);

    frame++;

    if (frame < 120) {
      requestAnimationFrame(draw);
    } else {
      capturer.stop();
      capturer.save(); // auto download
    }
  }

  draw();
}