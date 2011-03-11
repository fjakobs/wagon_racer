
function drawBackground() {
    var sky = a.createLinearGradient(0, 0, 0, 150)
    sky.addColorStop(0, '#2b51b2')
    sky.addColorStop(1, '#90b0d7')
    a.fillStyle = sky
    a.fillRect(0, 0, 300, 75)
}

function initPattern() {
    a.fillStyle = "#b57f53"
    a.fillRect(0, 0, 230, 20)
    a.fillStyle = "#7d532d"
    a.fillRect(230, 0, 240, 20)
    a.fillStyle = "#643811"
    a.fillRect(240, 0, 297, 20)
    a.fillStyle = "white"
    a.fillRect(297, 0, 300, 20)
    a.fillStyle = "#b8905d"
    a.fillRect(0, 20, 230, 20)
    a.fillStyle = "#7d532d"
    a.fillRect(230, 20, 240, 20)
    a.fillStyle = "#99643a"
    a.fillRect(240, 20, 300, 20)
    pattern = a.getImageData(0, 0, 300, 40)
}

function drawline(y, line, shift, scale) {
    var target = a.createImageData(300, 1)
    var dy = line*300*4;
    var dx = 299;
    for (var i=149; i>=0; i--) {
        pixel = dy + (~~dx)*2*4
        target.data[i*4] = pattern.data[pixel];
        target.data[i*4+1] = pattern.data[pixel+1];
        target.data[i*4+2] = pattern.data[pixel+2];
        target.data[i*4+3] = pattern.data[pixel+3];
        
        target.data[(299-i)*4] = pattern.data[pixel];
        target.data[(299-i)*4+1] = pattern.data[pixel+1];
        target.data[(299-i)*4+2] = pattern.data[pixel+2];
        target.data[(299-i)*4+3] = pattern.data[pixel+3];
        dx -= scale;
    }
    a.putImageData(target, 0, y)
}

initPattern()
drawBackground()

setInterval(function() {
    tick = ~~(new Date() / 10);
    var scale = 0.2;
    for (var i=149; i>=75; i--) {
        drawline(i, (200-i+tick)%39, 0, scale)
//        console.log(scale)
        scale += 0.0108
    }
}, 0);