#!/usr/bin/env bash
# VOXXRIN est le site web utilisé pour publier le programme de la conference.
# Le site se base sur OpenPlanner qui lui même est branché sur Conference Hall
# Ce script sert à mettre à jour le site voxxrin. La mise à jour se base sur
# Le fichier de configuration est dans /public/voxxrin/ et sur ce qu'il y a dans
# Open Planner.
# La mise à jour de Open Planner s'effectue dans conference hall en faisant un
# export. Attention à n'exporter que les talks 'confirmed'.
#
# Author: Sebastien Chassande

###############################################################################
# Variables de configuration
###############################################################################
VOXXRIN_FRONT_END_BASE_URL=app.voxxr.in
VOXXRIN_BASE_URL=https://api.voxxr.in
VOXXRIN_EVENT_ID=snowcamp25

if [[ -z "$VOXXRIN_TOKEN" ]]; then
  echo 'Missing $VOXXRIN_TOKEN environment variable'
  exit 1
fi

###############################################################################
# Fonction d'affichage de l'usage du script
###############################################################################
function usage() {
  echo "Usage du script (need VOXXRIN_TOKEN env var token url encoded):"
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
  #{{baseUrl}}/api/events/{{eventId}}/talksStats?token={{secretToken}}
  curl --request GET --silent --url "${VOXXRIN_BASE_URL}/api/events/${VOXXRIN_EVENT_ID}/talksStats?token=${VOXXRIN_TOKEN}" > talks-stats.json
  node talks-stats.cjs talks-stats.json
  rm talks-stats.json
}

###############################################################################
# Recuperation des feedbacks d'un talk
###############################################################################
function getTalkFeedbacks() {
  TALK_ID=$2
  echo "Talk: $TALK_ID"
  NOW=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  echo "Now: $NOW"
  #{{baseUrl}}/api/events/{{eventId}}/talks/{{talkId}}/feedbacks?token={{secretToken}}&updatedSince={{updatedSinceISODatetime}}
  curl --request GET --silent --url "${VOXXRIN_BASE_URL}/api/events/${VOXXRIN_EVENT_ID}/talks/${TALK_ID}/feedback?token=${VOXXRIN_TOKEN}&updatedSince=${NOW}" > feedback-${TALK_ID}.json
}

###############################################################################
# Recuperation de l'url de gestion des talks
###############################################################################
function getTalksUrl() {
  #{{baseUrl}}/api/events/{{eventId}}/talksEditors?token={{secretToken}}&baseUrl={{voxxrinInstanceBaseUrl}}
  curl --request GET --silent --url "${VOXXRIN_BASE_URL}/api/events/${VOXXRIN_EVENT_ID}/talksEditors?token=${VOXXRIN_TOKEN}&baseUrl=${VOXXRIN_FRONT_END_BASE_URL}" > talks-url.json
  node talks-url.cjs talks-url.json
  rm talks-url.json
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
  "talks-url")
    getTalksUrl $*
    ;;
  "talk-feedbacks")
    getTalkFeedbacks $*
    ;;
  *)
    usage
    ;;
esac
