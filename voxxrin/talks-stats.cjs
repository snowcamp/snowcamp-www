const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Fonction principale
async function convertJsonToCsv(inputFilePath, outputFilePath) {
    try {
        // Lire le fichier JSON
        const jsonData = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));

        // Vérification de la structure attendue
        if (!jsonData.perTalkStats || !Array.isArray(jsonData.perTalkStats)) {
            throw new Error("Le fichier JSON n'a pas le format attendu.");
        }

        // Créer un tableau contenant les données pour le CSV
        const csvData = jsonData.perTalkStats.map(item => ({
            talkId: item.talkId,
            talkTitle: item.talkTitle,
            totalFavoritesCount: item.totalFavoritesCount
        }));

        // Configurer le writer CSV
        const csvWriter = createCsvWriter({
            path: outputFilePath,
            header: [
                { id: 'talkId', title: 'talkId' },
                { id: 'talkTitle', title: 'talkTitle' },
                { id: 'totalFavoritesCount', title: 'totalFavoritesCount' }
            ]
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
    console.error("Usage : node talks-stats.cjs <chemin_du_fichier_JSON> [<chemin_du_fichier_CSV>]");
    process.exit(1);
}

const inputFilePath = args[0];
const outputFilePath = args.length > 1 ? args[1] : 'talks-stats.csv';
convertJsonToCsv(inputFilePath, outputFilePath);
