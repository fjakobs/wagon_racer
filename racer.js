
function drawBackground() {
    var sky = a.createLinearGradient(0, 0, 0, 150)
    sky.addColorStop(0, '#2b51b2')
    sky.addColorStop(1, '#90b0d7')
    a.fillStyle = sky
    a.fillRect(0, 0, 300, 75)
}

function drawline(y, colors, shift, scale) {    
    a.save()
    a.translate(150, 0)
    
    a.fillStyle = colors[0]
    a.fillRect(-150, y, 300, 1)
    
    a.fillStyle = colors[2]
    var x = -35*scale+shift
    var l = 70*scale
    a.fillRect(x, y, l, 1)

    a.fillStyle = colors[1]
    var x = -30*scale+shift
    var l = 60*scale
    a.fillRect(x, y, l, 1)
    
    a.restore()
}

drawBackground()

setInterval(function() {
    var tick = ~~(new Date() / 10);
    var offset = tick%40
    var e = 90;
    var h = 0;
    var scale = 4;
    for (var i=149; i>=75; i--) {
        var d = h*e/(e-h)        
        var shade = d/450
        var colors = (offset + d) % 40 < 20 
            ? ["hsl(26, " + (40 - shade*40)+ "%, 52%)", "hsl(28, "+(73-shade*73)+"%, 23%)"] 
            : ["hsl(34, "+(39 - shade*39)+"%, 54%)", "hsl(27, "+(45-shade*45)+"%, 41%)"];
        colors[2] = "hsl(29, "+(47 - shade*47)+"%, 33%)"
        drawline(i, colors, Math.cos((h+tick)/ 40)*25, scale)
        h++
        scale -= 0.048
    }
}, 0);