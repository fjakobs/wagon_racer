(function() {

var C40 = 40
var C150 = 150
var CFillStyle = "fillStyle"
var CStrokeStyle = "strokeStyle"
var CAddColorStop = "addColorStop"
var CLineWidth = "lineWidth"
var CHsl27 = "hsl(27,"
var Ma = Math


//var short = {}
//for (var k in a) {
//    var nk = k[0]+k.replace(/[^A-Z]/g, "")
//    if (short[nk])
//        console.log("collision", k, short[nk])
//    short[nk] = k
//}
//    
for(k in a)
    a[k[0]+k.replace(/[^A-Z]/g,"")]=a[k]

    
M = []
m(0, C40, 600, C40, 8)
M.push(500, C150, 0, C150)
M1 = M
M = []
m(0, 50, 500, 50, 8)
M.push(500, C150, 0, C150)

function m(x1, y1, x2, y2, n) {    
    if (!n)
        return M.push(x2, y2)
    var d = (x2-x1)/4
    var y = (y1 + y2) / 2 + Ma.random() * d - d/ 2
    m(x1, y1, x1+2*d, y, n-1)
    m(x1+2*d, y, x2, y2, n-1)
}
/*
function wagon(x) {
    a[CFillStyle] = "#ead2b6"
    a[CStrokeStyle] = "#7c6c4e"
    a[CLineWidth] = 2
    a.bP()
    for (i=0; i<6; a.a(C150, 110+i, 21-i, 2, 8), i+=2);
    a.f()
    a.s()
    
    a.bP()
    a[CFillStyle] = "#ddbc75"
    a[CStrokeStyle] = "#44260b"
    a.moveTo(132, 119)
    a.lT(168, 119)
    a.lT(164, 135)
    a.lT(136, 135)
    a.closePath()
    a.f()
    a.s()

    a[CLineWidth] = 4
    a.bP()
    a.lT(129+Math.sin(x), 122)
    a.lT(132-Math.sin(x), 143)
    
    a.moveTo(171+Math.sin(x), 122)
    a.lT(168-Math.sin(x), 143)
    a.s()
}*/

function doIt() {
    var tick = new Date() / 10;
    
    // sky
    var sky = a.cLG(0, 0, 0, C150)
    sky[CAddColorStop](0, '#25b')
    sky[CAddColorStop](1, '#8bd')
    a[CFillStyle] = sky
    a.fR(0, 0, 300, 75)
    
    // mountain
    var x = Ma.cos(tick/C40)*C40
    a[CFillStyle] = "#555"
    a.bP()
    a.mT(0, C40)
    for (i=0; i<M.length; a.lT(M1[i++]-C150+x*0.8, M1[i++]));
    a.f()
    
    a[CFillStyle] = "#333"
    a.bP()
    a.mT(0, 50)
    for (i=0; i<M.length; a.lT(M[i++]-C150+x, M[i++]));
    a.f()
    
    var offset = tick%C40
    var e = 90
    var h = 0
    var scale = 4
    for (var y=C150; y>=75; y--) {
        var d = h*e/(e-h)        
        var shade = d/450
        var colors = (offset + d) % C40 < 20 
            ? [CHsl27+(C40-shade*C40)+"%,52%)", CHsl27+(73-shade*73)+"%,23%)"] 
            : [CHsl27+(C40-shade*C40)+"%,54%)", CHsl27+(C40-shade*C40)+"%,41%)"]
        colors[2] = CHsl27+(C40-shade*C40)+"%,33%)"
        
        var shift = Ma.sin((h+tick)/ C40)*30
        
        a[CFillStyle] = colors[0]
        a.fR(0, y, 300, 1)
        a[CFillStyle] = colors[2]
        a.fR(-35*scale+shift+C150, y, 70*scale, 1)
        a[CFillStyle] = colors[1]
        a.fR(-30*scale+shift+C150, y, 60*scale, 1)
        
        h++
        scale -= 0.048
    }
    
    x = Ma.sin(tick/15)
    // wagon
    a[CFillStyle] = "#ead2b6"
    a[CStrokeStyle] = "#7c6c4e"
    a[CLineWidth] = 2
    a.bP()
    for (i=0; i<6; a.a(C150, 110+i, 21-i, 2, 8), i+=2);
    a.f()
    a.s()
    
    a.bP()
    a[CFillStyle] = "#ddbc75"
    a[CStrokeStyle] = "#44260b"
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
};

setInterval(doIt, 10)

})();