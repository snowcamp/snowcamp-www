# VOXXRIN est le site web utilisé pour publier le programme de la conference. 
# Le site se base sur OpenPlanner qui lui même est branché sur Conference Hall
# Ce script sert à mettre à jour le site voxxrin. La mise à jour se base sur
# Le fichier de configuration est dans /public/voxxrin/ et sur ce qu'il y a dans
# Open Planner.
# La mise à jour de Open Planner s'effectue dans conference hall en faisant un
# export. Attention à n'exporter que les talks 'confirmed'.
#
#Author: Sebastien Chassande

###############################################################################
# Variables de configuration
###############################################################################
VOXXRIN_BASE_URL=https://api.voxxr.in
VOXXRIN_EVENT_ID=snowcamp25
#Le token de voxxrin mais les : on été remplacés par des %3A pour le passage dans l'url
VOXXRIN_TOKEN=eventOrganizer%3Asnowcamp%3A4238c6e8-d71c-46dc-826f-2f78721b7278

###############################################################################
# Fonction d'affichage de l'usage du script
###############################################################################
function usage() {
  echo "Usage du script:" 
  echo "  ./voxxrin.sh update         : Mets à jour le site voxxrin" 
  echo "  ./voxxrin.sh talks-stats    : Telecharge les statistiques de tous les talks" 
  echo "  ./voxxrin.sh usage          : Affiche cette documentation" 
}

###############################################################################
# Rafraichir le site voxxrin
###############################################################################
function updateVoxxrin() {
curl --request POST --url "${VOXXRIN_BASE_URL}/api/crawlers/${VOXXRIN_EVENT_ID}/refreshScheduleRequest?token=${VOXXRIN_TOKEN}"
}

###############################################################################
# Recuperation des statistiques
###############################################################################
function getTalksStats() {
    curl --request GET --url "${VOXXRIN_BASE_URL}/api/crawlers/${VOXXRIN_EVENT_ID}/talksStats?token=${VOXXRIN_TOKEN}"
}


###############################################################################
# Programme principal
###############################################################################
case $1 in
  "update")
    updateVoxxrin $*
    ;;
  "talks-stats")
    getTalksStats $*
    ;;
  *)  usage;;
esac
