import { leagues } from "./leagues";

const images = import.meta.glob("../assets/jerseys/*.{png,jpeg,jpg}", { eager: true });

const getImage = (path) => images[path]?.default || null;

const teamImages = {
  "acmilan":                { home: "acmilan-home.png",                    away: "acmilan-away.png" },
  "acmilanretro":           { home: "acmilanretro-away.png",               away: "acmilanretro-away.png" },
  "argentina":              { home: "argentina-home.png",                  away: "argentina-home.png" },
  "arsenal":                { home: "arsenal-home.png",                    away: "arsenal-away.png" },
  "arsenalretro":           { home: "arsenalretro-home.png",               away: "arsenalretro-away.png" },
  "arsenalstreet":          { home: "arsenalstreet-home.png",              away: "arsenalstreet-home.png" },
  "barcelona":              { home: "barcelona-home.png",                  away: "barcelona-away.png" },
  "barcelonaretro":         { home: "barcelonaretro-home.png",             away: "barcelonaretro-home.png" },
  "barcelonaspecial":       { home: "barcelonaspecial-home.png",           away: "barcelonaspecial-home.png" },
  "bayernmunich":           { home: "bayernmunich-home.png",               away: "bayernmunich-away.png" },
  "blackair":               { home: "blackair-home.png",                   away: "blackair-away.png" },
  "borussiadortmund":       { home: "borussiadortmund-home.png",           away: "borussiadortmund-home.png" },
  "brazilspecial":          { home: "brazilspecial-home.png",              away: "brazilspecial-home.png" },
  "brazilstreet":           { home: "brazilstreet-home.png",               away: "brazilstreet-home.png" },
  "celtavigo":              { home: "celtavigo-home.png",                  away: "celtavigo-away.png" },
  "chelsea":                { home: "chelsea-home.png",                    away: "chelsea-away.png" },
  "englandretro":           { home: "englandretro-home.png",               away: "englandretro-home.png" },
  "franceretro":            { home: "franceretro-home.png",                away: "franceretro-home.png" },
  "intermilan":             { home: "intermilan-home.jpeg",                away: "intermilan-away.png" },
  "intermilanstreet":       { home: "intermilanstreet-home.png",           away: "intermilanstreet-home.png" },
  "juventusretro":          { home: "juventusretro-home.png",              away: "juventusretro-home.png" },
  "juventusretro2":         { home: "juventusretro2-home.png",             away: "juventusretro2-home.png" },
  "lazioretro":             { home: "lazioretro-home.png",                 away: "lazioretro-away.png" },
  "liverpool":              { home: "liverpool-home.png",                  away: "liverpool-away.png" },
  "liverpoolretro":         { home: "liverpoolretro-home.png",             away: "liverpoolretro-home.png" },
  "liverpoolretro2":        { home: "liverpoolretro2-away.png",            away: "liverpoolretro2-away.png" },
  "liverpoolretro3":        { home: "liverpoolretro3-away.png",            away: "liverpoolretro3-away.png" },
  "liverpoolretro4":        { home: "liverpoolretro4-away.png",            away: "liverpoolretro4-away.png" },
  "manchestercity":         { home: "manchestercity-home.png",             away: "manchestercity-away.png" },
  "manchesterunited":       { home: "manchesterunited-home.png",           away: "manchesterunited-away.png" },
  "manchesterunitedretro2": { home: "manchesterunitedretro2-away.png",     away: "manchesterunitedretro2-away.png" },
  "manchesterunitedstreet": { home: "manchesterunitedstreet-home.png",     away: "manchesterunitedstreet-home.png" },
  "newcastleretro":         { home: "newcastleretro-away.png",             away: "newcastleretro-away.png" },
  "nigeria":                { home: "nigeria-home.png",                    away: "nigeria-home.png" },
  "nigeriaretro":           { home: "nigeriaretro-away.png",               away: "nigeriaretro-away.png" },
  "psg":                    { home: "psg-home.png",                        away: "psg-home.png" },
  "realmadrid":             { home: "realmadrid-home.png",                 away: "realmadrid-away.png" },
  "realmadridstreet":       { home: "realmadridstreet-home.png",           away: "realmadridstreet-home.png" },
  "sevilla":                { home: "sevilla-home.png",                    away: "sevilla-home.png" },
  "valencia":               { home: "valencia-home.png",                   away: "valencia-home.png" },
  "villarreal":             { home: "villarreal-home.png",                 away: "villarreal-home.png" },
  "westhamspecial":         { home: "westhamspecial-away.png",             away: "westhamspecial-away.png" },
};

const formatName = (team) => team.toLowerCase().replace(/[^a-z0-9]/g, "");

let id = 1;
const products = [];

leagues.forEach((league) => {
  league.teams.forEach((team) => {
    const key = formatName(team);
    const kit = teamImages[key];
    if (!kit) return;

    const homeImage = getImage(`../assets/jerseys/${kit.home}`);
    if (homeImage) {
      products.push({
        _id: String(id++),
        name: `${team} Home Jersey`,
        price: 30000,
        type: "home",
        category: league.name,
        image: homeImage,
        badge: "NEW",
      });
    }

    if (kit.away !== kit.home) {
      const awayImage = getImage(`../assets/jerseys/${kit.away}`);
      if (awayImage) {
        products.push({
          _id: String(id++),
          name: `${team} Away Jersey`,
          price: 22000,
          type: "away",
          category: league.name,
          image: awayImage,
          badge: "HOT",
        });
      }
    }
  });
});

export default products;