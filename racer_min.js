function l(a, b, c) {
    var d = c / 2,
    e = (a + b + j.random() * d - c / 4) / 2;
    c <= 1 ? M.push(a) : (l(a, e, c / 2), l(e, b, c / 2))
}
b = 40,
c = 150,
d = "fillStyle",
e = "lineWidth",
g = "hsl(27,",
j = Math;
for (k in a) a[k[0] + k.replace(/[^A-Z]/g, "")] = a[k];
M = [99],
l(50, 50, 512),
M[512] = 99,
setInterval(function() {
    f = new Date / 10;
    a[d] = "#8bd",
    a.fR(0, 0, 300, 75);
    k = j.cos(f / b) * b;
    a[d] = "#555",
    a.bP();
    for (i = 0; i < 513; a.lT(i - c + k * .8, M[512 - i++] - 10));
    a.f(),
    a[d] = "#333",
    a.bP();
    for (i = 0; i < 513; a.lT(i - c + k, M[i++]));
    a.f();
    for (h = 0; h <= 75; h++) {
        l = h * 90 / (90 - h),
        m = l / 450,
        n = (f + l) % b < 20 ? [g + (b - m * b) + "%,52%)", g + (73 - m * 73) + "%,23%)"] : [g + (b - m * b) + "%,54%)", g + (b - m * b) + "%,41%)"],
        o = j.sin((h + f) / b) * 30;
        y = c - h,
        a[d] = n[0],
        a.fR(0, y, 300, 1);
        p = 4 - .05 * h;
        a[d] = g + (b - m * b) + "%,33%)",
        a.fR( - 35 * p + o + c, y, 70 * p, 1),
        a[d] = n[1],
        a.fR( - 30 * p + o + c, y, 60 * p, 1)
    }
    k = j.sin(f / 15)
    
    A = a
    with(A) {
        A[d] = "#dca",
        strokeStyle = "#421",
        A[e] = 1,
        bP();
        for (i = 0; i < 6; a(150, 110 + i, 21 - i, 2, 8), i += 2);
        f(),
        s(),
        bP(),
        A[d] = "#db7",
        moveTo(132, 119),
        lT(168, 119),
        lT(164, 135),
        lT(136, 135),
        closePath(),
        f(),
        s(),
        A[e] = 4,
        bP(),
        lT(129 + k, 122),
        lT(132 - k, 143),
        moveTo(171 + k, 122),
        lT(168 - k, 143),
        s()
    }
},
0)
