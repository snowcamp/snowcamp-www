import * as fs from "fs";

// This program collect data of the current conference edition and build a unique json file as previous_version

// load data from the current file
const edition = JSON.parse(fs.readFileSync("src/data/edition.json", "utf8"));
const cfp = JSON.parse(fs.readFileSync("src/data/cfp.json", "utf8"));
const sponsors = JSON.parse(fs.readFileSync("src/data/sponsors.json", "utf8"));

// build the data for the previous edition
const previous = {
  sched_url: cfp.sched_url,
  flickr_embed_url:
    "https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=www.flickr.com/photos/162459903@N02/albums/72177720305519001&sort=0&by=album&theme=default&scale=fill&speed=3000&limit=10&skin=default&autoplay=true",
  punch_line: {
    fr: "Une super conf IT a Grenoble",
    en: "A top IT conference at Grenoble",
  },
  summary: {
    fr:
      'Retrouvez le programme de SnowCamp %s <a href="%s" target="_blank">ici</a> ! Vous pouvez aussi retrouver les liens vers les slides des conférences dans <a href="' +
      cfp.sched_url +
      '">Sched</a>, et les retours des participants <a href="' +
      cfp.feedback_url +
      '">là</a>',
    en:
      'The agenda for SnowCamp %s is available <a href="%s" target="_blank">here</a>! You can also find the links to the sessions material in <a href="' +
      cfp.sched_url +
      '">Sched</a>, and the participants feedback <a href="' +
      cfp.feedback_url +
      '">there</a>.',
  },
  sponsors: {
    etoile: sponsors.etoile,
    flocon: sponsors.flocon,
  },
};

// create the file
const fileName = "src/data/previous_editions_" + edition.year + ".json";
fs.writeFileSync(fileName, JSON.stringify(previous, null, 2), "utf8");
