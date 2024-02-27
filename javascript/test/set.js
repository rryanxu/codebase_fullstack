const s = new Set();

[2, 2, 2, 3, 5].forEach(x => s.add(x))

for (const sElement of s) {
    console.log(sElement)
}


