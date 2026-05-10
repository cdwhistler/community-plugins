(function (root) {
    "use strict";

    const adjectives = [
        "amber","ancient","arctic","ashen","autumn","azure",
        "bare","bleak","bold","brave","bright","brisk","bronze",
        "calm","carved","cedar","chill","clear","clever","cold","coral","crisp","crystal",
        "dark","dawn","deep","dense","dusty",
        "early","elder","ember","empty",
        "faint","fallen","fast","fierce","firm","flat","fleet","foggy","fresh","frost","frozen",
        "gentle","ghost","giant","gilded","golden","grand","granite","grave","green","grey","grim",
        "harsh","hidden","high","hollow","humble",
        "iron",
        "jade","keen","kind",
        "large","light","lone","loud","lunar",
        "marble","mighty","misty","muted",
        "narrow","noble","north","numb",
        "old","open",
        "pale","pearl","plain","polar","prime","proud",
        "quiet",
        "rapid","rare","remote","rough","round","royal","rugged","rustic",
        "sage","shallow","silver","simple","slim","slow","small","smart","snow",
        "solar","solid","south","sparse","stark","stern","still","stone","storm",
        "strong","sunny","swift",
        "tall","teal","thick","thin","timber","true",
        "vast","vivid",
        "warm","wild","winter","wise","wooden",
        "young"
    ];

    const nouns = [
        "anchor","anvil","apple","arrow","atlas","axe",
        "barrel","basin","bay","bear","bell","birch","blade","bloom","boat",
        "bone","boulder","branch","bridge","brook",
        "candle","canyon","cave","cedar","chain","chalk","cliff","cloud","coal",
        "coast","comet","copper","coral","crane","creek","crown","crystal","current",
        "dawn","deer","delta","desert","dome","dove","dusk","dust",
        "eagle","echo","elm","ember",
        "falcon","fern","field","fjord","flame","flint","flood","flower",
        "fog","forest","forge","frost",
        "gate","glade","glass","glen","grove",
        "harbor","hawk","heath","hedge","hill","hollow","hound",
        "ice","inlet","iron","island",
        "jade","kettle",
        "lake","lamp","lark","leaf","ledge","lion","log",
        "maple","marsh","mast","meadow","mesa","mill","mist","moon","moss","mountain",
        "oak","ocean","otter",
        "peak","pine","plain","plank","pond","pool",
        "rain","raven","reed","ridge","river","rock","root","rose","ruin",
        "sage","sand","seal","shadow","shore","slate","snow","soil",
        "spring","star","stone","stream","summit","swan",
        "thorn","tide","timber","trail","tree",
        "vale","valley","vine",
        "wave","willow","wind","wolf","wood"
    ];

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * Generate a passphrase room name in the form:
     *   adjective-noun-noun-NN
     * e.g. "swift-river-stone-42"
     *
     * Entropy: ~128 adj * ~142 nouns * ~142 nouns * 90 suffixes = ~233M combinations.
     */
    function generate() {
        const suffix = String(Math.floor(Math.random() * 90) + 10); // 10-99
        return `${pick(adjectives)}-${pick(nouns)}-${pick(nouns)}-${pick(nouns)}-${suffix}`;
    }

    root.OlmeetWordlist = { generate };

}(this));