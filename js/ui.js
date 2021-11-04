// adding some basic pastes into ui
document.getElementById("str").innerHTML = Str;
document.getElementById("agi").innerHTML = Agi;
document.getElementById("stam").innerHTML = Stam;
document.getElementById("int").innerHTML = Int;
document.getElementById("spi").innerHTML = Spi;
document.getElementById("rap").innerHTML = BaseRAP;
document.getElementById("rangehit").innerHTML = Math.Round(RangeHitChance * 100) / 100 + " %";
document.getElementById("rangecrit").innerHTML = Math.Round(RangeCritChance * 100) / 100 + " %";
document.getElementById("haste").innerHTML = HasteRating;
document.getElementById("arp").innerHTML = ArmorPen;
document.getElementById("map").innerHTML = BaseMAP;
document.getElementById("meleehit").innerHTML = Math.Round(MeleeHitChance * 100) / 100 + " %";
document.getElementById("meleecrit").innerHTML = Math.Round(MeleeCritChance * 100) / 100 + " %";
document.getElementById("exp").innerHTML = Expertise;
