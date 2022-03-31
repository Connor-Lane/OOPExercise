// 1a
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    // 1b
    quote: () => `Dishonor! Dishonor on your whole family!`,
    // 1c
    storyline: function() {
        return `The movie ${this.title} is about ${this.main}`;
    }
};
console.log(mulan);
console.log(mulan.storyline());

console.log(`==================`);

// 2a
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    // 2b
    quote: () => `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`,
    // 2c
    storyline: function() {
        return `The movie ${this.title} is about ${this.main}`;
    }
}
console.log(tangled);

console.log(`==================`);

// 3a
function DisneyMovie(t, m) {
    this.title = t;
    this.main = m;
}

// 3b
DisneyMovie.prototype.storyline = function() {
    return `The movie ${this.title} is about ${this.main}`;
}

// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);

// 3d
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1);

console.log(`==================`);

// 4a
class DM {
    constructor(t, m) {
        this.title = t;
        this.main = m;
    }

    // 4b
    storyline() {
        return `The movie ${this.title} is about ${this.main}`;
    }

    // 4e
    static loveDisneyMovies() {
        return `I love Disney Movies!`;
    }
}

// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2);

// 4d
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2);

// 4f
console.log(DM.loveDisneyMovies());

console.log(`====================`);

// 5a
class DMCast extends DM {
    // 5b
    constructor(t, m, c) {
        // 5c
        super(t, m);
        this.cast = c;
    }

    // BONUS 6a
    static create(a, b, c) {
        return new DMCast(a, b, c);
    }
}

// 5d
const mulan3 = new DMCast(`Mulan`, `Fa Mulan`, {mulan: `Ming-Na Wen`, mushu: `Eddie Murphy`, shang: `BD Wong`, theEmperor: `Pat Morita`});
console.log(mulan3);

// 5e
const tangled3 = new DMCast(`Tangled`, `Rapunzel`, {rapunzel: `Mandy Moore`, flynnRider: `Zachary Levi`, motherGothel: `Donna Murphy`});
console.log(tangled3);

// BONUS
// 6b
const moana = DMCast.create(`Moana`, `Moana of Motunui`, {moana: `Auli'i Cravalho`, maui: `Dwayne Johnson`, grammaTala: `Rachel House`, chiefTui: `Temuera Morrison`});

// 6c
console.log(moana);