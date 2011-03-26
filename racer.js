(function() {

var C40 = 40
var C150 = 150
var CFillStyle = "fillStyle"
//var CAddColorStop = "addColorStop"
var CLineWidth = "lineWidth"
var CHsl27 = "hsl(27,"
var Ma = Math

for(k in a)
    a[k[0]+k.replace(/[^A-Z]/g,"")]=a[k]

    
M = [99]
m(50, 50, 512)
M[512] = 99
function m(y1, y2, l) {    
    var l2 = l/2
    var y = (y1+y2+Ma.random()*l2-l/4) / 2
    l<=1 ? M.push(y1) : (m(y1, y, l2), m(y, y2, l2))
}

setInterval(function() {
    var tick = new Date() / 10;
    
    // sky
//    var sky = a.cLG(0, 0, 0, C150)
//    sky[CAddColorStop](0, "#25b")
//    sky[CAddColorStop](1, "#8bd")
//    a[CFillStyle] = sky
    a[CFillStyle] = "#8bd"
    a.fR(0, 0, 300, 75)
    
    // mountain
    var x = Ma.cos(tick/C40)*C40
    
    a[CFillStyle] = "#555"
    a.bP()    
    for (i=0; i<513; a.lT(i-C150+x*0.8, M[512-i++]-10));
    a.f()
    
    a[CFillStyle] = "#333"
    a.bP()    
    for (i=0; i<513; a.lT(i-C150+x, M[i++]));
    a.f()
    
    for (h=0; h<=75; h++) {
        var d = h*90/(90-h)        
        var shade = d/450
        var colors = (tick + d) % C40 < 20 
            ? [CHsl27+(C40-shade*C40)+"%,52%)", CHsl27+(73-shade*73)+"%,23%)"] 
            : [CHsl27+(C40-shade*C40)+"%,54%)", CHsl27+(C40-shade*C40)+"%,41%)"]

        var shift = Ma.sin((h+tick)/ C40)*30
        y = C150-h
        a[CFillStyle] = colors[0]
        a.fR(0, y, 300, 1)
        var scale = 4-0.05*h
        a[CFillStyle] = CHsl27+(C40-shade*C40)+"%,33%)"
        a.fR(-35*scale+shift+C150, y, 70*scale, 1)
        a[CFillStyle] = colors[1]
        a.fR(-30*scale+shift+C150, y, 60*scale, 1)
    }
    
    x = Ma.sin(tick/15)
    // wagon
    a[CFillStyle] = "#dca"
    a.strokeStyle = "#421"
    a[CLineWidth] = 1
    a.bP()
    for (i=0; i<6; a.a(C150, 110+i, 21-i, 2, 8), i+=2);
    a.f()
    a.s()
    
    a.bP()
    a[CFillStyle] = "#db7"
    a.moveTo(132, 119)
    a.lT(168, 119)
    a.lT(164, 135)
    a.lT(136, 135)
    a.closePath()
    a.f()
    a.s()

    a[CLineWidth] = 4
    a.bP()
    a.lT(129+x, 122)
    a.lT(132-x, 143)
    
    a.moveTo(171+x, 122)
    a.lT(168-x, 143)
    a.s()
}, 0);

})();