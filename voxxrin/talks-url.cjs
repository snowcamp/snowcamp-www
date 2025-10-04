const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// Fonction principale
async function convertJsonToCsv(inputFilePath, outputFilePath) {
  try {
    // Lire le fichier JSON
    const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf8"));

    // Vérification de la structure attendue
    if (!jsonData || !Array.isArray(jsonData)) {
      throw new Error("Le fichier JSON n'a pas le format attendu.");
    }
    // Créer un tableau contenant les données pour le CSV
    const csvData = jsonData
      .filter((item) => item.speakersFullNames.length > 0)
      .map((item) => ({
        talkId: item.talkId,
        talkTitle: item.talkTitle,
        speakers: item.speakersFullNames.join(", "),
        registrationUrl: "https://" + item.registrationUrl,
      }));

    // Configurer le writer CSV
    const csvWriter = createCsvWriter({
      path: outputFilePath,
      header: [
        { id: "talkId", title: "Talk Id" },
        { id: "talkTitle", title: "Talk Title" },
        { id: "speakers", title: "Speakers" },
        { id: "registrationUrl", title: "Registration Url" },
      ],
    });

    // Écrire les données dans le fichier CSV
    await csvWriter.writeRecords(csvData);

    console.log(`Fichier CSV généré avec succès : ${outputFilePath}`);
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
}

// Récupérer les paramètres de la ligne de commande
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error(
    "Usage : node talks-url.cjs <chemin_du_fichier_JSON> [<chemin_du_fichier_CSV>]",
  );
  process.exit(1);
}

const inputFilePath = args[0];
const outputFilePath = args.length > 1 ? args[1] : "talks-url.csv";
convertJsonToCsv(inputFilePath, outputFilePath);
