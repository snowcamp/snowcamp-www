import edition from '../data/edition.json';
import sponsors from '../data/sponsors.json';
import cfp from '../data/cfp.json';

export function init() {
    const i18n: any = {};
    i18n.program_translation = 'CFP';
    i18n.cfp_program_translation = 'Call For Proposals';
    i18n.ticketlabel = 'Tickets';
    i18n.what_is_this = "C'est quoi ?";
    i18n.in_2017 = 'En 2017';
    i18n.become_sponsor = 'Devenez Sponsor';
    i18n.our_sponsors = 'Nos sponsors';
    i18n.past_editions = 'Éditions précédentes';
    i18n.venue = 'Venir';
    i18n.tickets = 'Billeterie';
    i18n.videos = 'Vidéos';
    i18n.coc = 'CdC';
    i18n.conference_desc = 'Une conférence unique pour les devs, les ops et les archis';
    i18n.universities_title = 'Universités';
    i18n.universities_desc = 'Une journée de formation en profondeur<br/>(2 formations de 3 heures au choix).';
    i18n.conference_title = 'Conférences';
    i18n.conference_desc = '2 jours de conférences avec des présentations de 45 minutes.';
    i18n.unconference_title = 'Unconference';
    i18n.unconference_desc = 'Une journée d\'échange sur les pistes mêlant orateurs et participants.';

    i18n.innovation_research_title = 'Innovation &amp; Recherche';
    i18n.innovation_research_desc = 'Une conférence à haut niveau technique réunissant des ingénieurs et des académiques';
    i18n.innovation_title = 'Innovation';
    i18n.innovation_desc = 'Découvrez les outils, frameworks et technologies d\'aujourd\'hui et de demain.';
    i18n.discussion_title = 'Échange';
    i18n.discussion_desc = 'Rencontrez et échangez avec d\'autres devs, ops, archis et orateurs.';
    i18n.research_title = 'Recherche';
    i18n.research_desc = 'Découvrez les travaux des chercheurs sur les tendances et sujets du moment.';
    
    i18n.cfp_open_desc=`<p>Le CFP est ouvert ! C'est le moment de soumettre des sujets extraordinaires ici : 
    <br><i class="fa fa-bullhorn"></i>&nbsp;<a href="${cfp.url}" target="_blank">${cfp.url}</a></p>
    <br/>
    <p>Quelques conseils :</p>
    <ul>
    <li>Choisissez bien votre titre</li>
    <li>Expliquez ce que les participants vont voir et apprendre</li>
    <li>Faites des démos</li>
    <li>Soumettez tôt !</li>
    <li>Plus de conseils <a href="https://docs.google.com/document/d/e/2PACX-1vReWAaCbafJqc0cCo2vhKWnAVoiHk3Tq561y4GseXvTyOV7cSk6lN2c_feWEWZBIA/pub" target="_blank">ici</a></li>
    </ul>
    <br/>
    <p>Les sessions peuvent être proposées en français ou en anglais. Les présentations sont sélectionnées
    par un comité neutre et ouvert. Alors lancez-vous !
    </p>`;
    i18n.cfp_open_soon_desc=`<p>Le CFP ouvre le ${cfp.dates.open_date.fr } !
    C'est le moment de préparer des sujets extraordinaires. Le CFP ouvrira ici : 
    <br><i class="fa fa-bullhorn"></i>&nbsp;<a href="${cfp.url}" target="_blank">${cfp.url}</a></p>
    <br/>
    <p>Quelques conseils :
    <ul>
    <li>Choisissez bien votre titre</li>
    <li>Expliquez ce que les participants vont voir et apprendre</li>
    <li>Faites des démos</li>
    <li>Soumettez tôt !</li>
    </ul>
    <span>Et encore plus de conseils <a href="https://docs.google.com/document/d/e/2PACX-1vReWAaCbafJqc0cCo2vhKWnAVoiHk3Tq561y4GseXvTyOV7cSk6lN2c_feWEWZBIA/pub">ici</a>.</span>
    </p>
    <br/>
    <p>Les sessions peuvent être proposées en français ou en anglais. Les présentations sont sélectionnées
    par un comité neutre et ouvert. Alors lancez-vous !
    </p>`;
    i18n.cfp_closed_desc=`<p>Le CFP est désormais fermé !</p>`;
    i18n.cfp_other_desc=`<p>Le CFP n'est pas encore ouvert... Soyez patients !
    <br>Suivez-nous sur Twitter <a class="sp-tw" href="https://twitter.com/SnowCampIO"><i class="fa fa-twitter"></i></a> pour être notifiés de
   l'ouverture du CFP.</p>`;
    i18n.cfp_opens = 'Ouverture du CFP';
    i18n.cfp_closes = 'Fermeture du CFP';
    i18n.cfp_notifications = 'Notifications';

    i18n.schedule_title = 'Agenda';
    i18n.schedule_desc = 'L\'agenda de SnowCamp peut être consulté à ce lien : ';

    i18n.venue_title = 'Venir';
    i18n.venue_desc = 'SnowCamp se déroulera au Centre de Congrès du WTC (World Trade Center) de Grenoble à la fois pour les Universités et les Conférences.';
    i18n.venue_location = `Les Universités et les Conférences auront toutes lieux au
      <a href="http://www.congres-wtcgrenoble.com/fr" target="_blank"><strong>"WTC World Trade Center Grenoble"</strong></a>,
      un Centre de Conférences au cœur de Grenoble.`;
    i18n.venue_access=`Vous pouvez y accéder :
      <ul>
        <li>par la ligne B du Tram (direction Grenoble Presqu'île), arrêt "Palais De Justice - Gare"</li>
        <li>en voiture (vous pouvez vous garer aux parkings Doyen Weil ou d'Europole Gare)
        <ul>
          <li>en arrivant de Lyon ou de Valence, prenez la sortie d'autoroute "Europole - Gares" et suivre la direction Europole</li>
          <li>en arrivant de Chambéry, Gap ou Sisteron, prenez la rocade sud, suivre la direction Lyon par l'autoroute, puis la
          sortie "Europole - Gares" et suivre la direction Europole</li>
        </ul>
        </li>
        <li>en train ou bus : utilisez le passage souterrain depuis la gare vers Europole</li>
        <li>par avion : il y a des navettes d'aéroports : depuis Lyon Saint-Exupéry (17 rotations
        7j/7) et depuis Genève Cointrin (3 rotations, 7j/7)</li>
        <li>en <a href="http://www.metromobilite.fr/velo.html" target="_blank">vélo</a></li>
      </ul>`;
    i18n.sponsor_chamois = 'Sponsor Chamois &#129351;';
    i18n.sponsor_etoile = 'Sponsors Étoile ⭐';
    i18n.sponsor_flocon = 'Sponsors Flocon ❄️';
    i18n.sponsor_meetgreet = 'Sponsor Meet&Greet 🍻';
    i18n.partners = 'Partenaires';
    i18n.sponsor_thanks = () => `Ils nous ont déjà accordé leur confiance pour préparer ensemble l'édition ${edition.year}.<br/>Un grand merci à nos sponsors !`;
    i18n.sponsor_previous_year = 'Ils étaient sponsors l\'édition précédente';
    i18n.sponsor_thanks_previous_year = (year:number) => `Ils nous ont accordé leur confiance pour préparer ensemble l'édition ${year}.
      <br/>Un grand merci à nos sponsors !`;
    i18n.sponsor_limit = (num: number) => num > 1 ? `Limité à ${num} sponsors` : `Limité à ${num} sponsor`;
    i18n.sponsor_places_conferences = (num: number) => `Entrées offertes pour participer aux sessions (${num} entrées)`;
    i18n.sponsor_places_booth = (num: number) => `Entrées offertes sur l’espace sponsor uniquement (${num } entrées)`;
    i18n.sponsor_places_speakers_dinner = (num: number) => `Places pour le <em>speakers dinner</em>, ${num} personnes`;
    i18n.sponsor_booth_area = (area: string) => `Stand dans le hall d'exposition (${area})`;
    i18n.sponsor_logo_pass = 'Logo sur badges portés par les participants';
    i18n.sponsor_logo_website = 'Logo sur notre site web du SnowCamp';
    i18n.sponsor_logo_billposting  = 'Affichage de votre logo sur le lieu de la conférence';
    i18n.sponsor_logo_pass_strap = 'Logo sur les tours de cou';
    i18n.sponsor_keynote_talk = (duration: number) => `Présentation de votre choix lors d'une session plénière (${duration })`;
    i18n.snowcamp_logo_usage = 'Autorisation d\'exploiter le logo SnowCamp pour votre communication';
    i18n.sponsorship_prospectus = 'Plaquette Sponsors';
    i18n.contact_us = 'Nous contacter';
    i18n.sponsor_desc = `<p class="text dark-background">
        Le SnowCamp est organisé bénévolement par un groupe de geeks de la région grenobloise. Leur seule
        motivation est d'offrir une conférence unique réunissant innovation et recherche.</p>
      <p class="text dark-background emph">
        Pour réussir dans cette aventure, nous avons besoin de vous.
      </p>
      <p class="text dark-background">
        En retour, nous vous offrons une grande visibilité, sur le web mais aussi lors de l'événement. C'est
        l'occasion idéale pour rencontrer les développeurs grenoblois, montrer vos produits et services, et
        vous faire connaître.
      </p>`;
    i18n.sponsor_status_not_open = `<p class="text dark-background">
      L'ouverture du sponsoring aura lieu le ${sponsors.sponsorship.open_datetime.fr}</a>.
      </p>`;
    i18n.sponsor_status_open = `<p class="text dark-background">
      La campagne de sponsoring est ouverte depuis le ${sponsors.sponsorship.open_datetime.fr}. 
      <br>Vous pouvez vous enregistrer via <a href="${sponsors.sponsorship.subscribe_link}">ce formulaire d'inscription</a>.
    </p>`;
    i18n.sponsor_status_closed = `<p class="text dark-background">
      La campagne de sponsoring est fermée</a>.
    </p>`;
  i18n.store_package_title = (title:string, days: number) => `${title} - Pack ${days} days`;
    i18n.store_package_universities_plus_confs = 'Universités + Conférences';
    i18n.store_package_confs_only = 'Conférences seulement';
    i18n.store_access_universities = 'Accès aux Universités';
    i18n.store_access_conferences = 'Accès aux Conférences';
    i18n.store_access_breakfast = (days: number) => `Petit déjeuner sur les ${days} jours`;
    i18n.store_access_lunch = (days: number) => `Repas du midi sur les ${days} jours`;
    i18n.store_access_meet_and_greet = 'Meet & Greet le Jeudi soir';
    i18n.store_classic_dates = (date: string) => `La billetterie ouvre le ${date}`;
    i18n.store_not_open = 'La billetterie n\'est pas encore ouverte';
    i18n.store_early_birds_open = (date: string) => `Vente des Early Birds le ${date}!`;
    i18n.store_opens_on = (date: string) => `La billetterie ouvre le ${date}!`;
    i18n.store_is_open = 'La billetterie est ouverte';
    i18n.store_is_soldout = 'La billetterie est épuisée !';
    i18n.store_here = 'Billetterie ici';

    i18n.previous_sponsors_thanks = (year: number) => `Sans eux, l'aventure n'aurait pas été possible. Un grand merci à nos sponsors ${year}!`;
    i18n.previous_edition_how_was_it = (year: number) => `Il y avait quoi en ${year}?`;
    i18n.previous_edition_relive_with_images = (year: number) => `Revivez l'édition ${year} en images !`;

    i18n.organisation_title='Organisation';
    i18n.organisation_desc=`Le Snowcamp est une conférence faite par des développeurs de la région grenobloise. 
      Elle a été créée en 2016 à l'initiative de l'<a href="http://www.alpesjug.fr/">AlpesJug</a>.
      Tous les organisateurs sont des geeks bénévoles passionnés.`;

    i18n.snowcamp_sentence='La conférence qui envoie de la noix';
    i18n.snowcamp_whatis_title='Le SnowCamp c`\'est quoi ?';
    i18n.snowcamp_whatis_desc=`Tout d'abord, c'est surtout une conférence à haut niveau technique où
      l'innovation prime en faisant rencontrer académiques et entreprises du secteur informatique autour de
      technologies d'aujourd'hui et de demain.
      <br>Le SnowCamp est un concept à part : des ateliers le mercredi sur une
      journée complète pour apprendre ou approfondir une technologie particulière; une conférence le jeudi et
      vendredi plus classique; enfin le samedi, une journée détente à la neige.`;
    i18n.snowcamp_gren_inno_title='Grenoble et l\'innovation';
    i18n.snowcamp_gren_inno_desc=`Depuis les débuts de l'électricité, Grenoble a toujours été un vivier 
      d'innovation et d'excellence :
      des laboratoires et des industries de pointe y sont installés, elle a été classée 5e ville la plus
      innovante au monde par le magazine Forbes et est maintenant labellisée “French Tech”. Ici, l'innovation
      technique a trouvé ses racines dans les montagnes environnantes. C'est pourquoi le SnowCamp propose,
      suite à la conférence, une journée "unconference" en altitude, sur les pistes de ski, lors de laquelle
      les participants pourront continuer à échanger de façon plus informelle et détendue, dans un cadre
      exceptionnel propice à la créativité.`;
    i18n.snowcamp_conf_title='Les conférences';
    i18n.snowcamp_conf_desc=`Le SnowCamp s'articule autour de trois événements distincts :
      <ul>
        <li>Les universités, le mercredi, proposent aux participants de découvrir en profondeur et de
          manière pratique des technologies avec deux sessions de 3h au choix,
        </li>
        <li>Les conférences, le jeudi et vendredi, proposent un modèle plus classique: des présentations de 45
          minutes. En 2018, ces conférences étaient structurées en thèmes,
        </li>
        <li>L'unconference, le samedi, propose aux orateurs et aux participants de se retrouver sur les
          pistes de ski de la région grenobloise.</li>
      </ul>
      La première édition en 2016 réunissait ~200 participants et orateurs dans les locaux de l'université 
      de Grenoble et a grandi grâce à votre confiance pour pouvoir accueillir ~600 participants et ~70
      orateurs depuis 2020 au World Trade Center de Grenoble.`;
    i18n.snowcamp_unconf_title='L\'unconference';
    i18n.snowcamp_unconf_desc=`<p>Une conférence, c'est plus que des présentations, c'est aussi des échanges, des orateurs disponibles,
      des discussions entre participants… Et quoi de mieux pour continuer ces échanges qu'une journée au grand
      air ? Le SnowCamp se termine par une journée a la neige, afin de profiter du cadre exceptionnel grenoblois.</p>
      <br/>
      <p>Alors, tu viens ?</p>
      <br/>
      <p>
        D'autres questions ? Contacte-nous :
      </p>`;

    i18n.store_title = 'Billetterie';
    i18n.store_desc = `Vous pouvez acheter le pack 3 jours (Universités + Conférences), ou 2 jours
      (Conférences seulement). L'achat du ticket est délégué à notre prestataire BilletWeb. Attention, le
      nombre de billets est limité !`;

    i18n.coc_title = 'Code de conduite';
    i18n.coc_intro =`L'ensemble des participants, sponsors, volontaires et orateurs à SnowCamp sont invités à lire les
      recommandations de bonne conduite à la conférence.
      <br>
      En cas de soucis durant la conférence, nous invitons toute personne ayant besoin d'aide à contacter de
      préférence l'équipe d'organisation, qui mettra tout en oeuvre pour vous aider.`

    i18n.coc_quick_title = 'La version rapide';
    i18n.coc_quick_desc = `SnowCamp se veut une expérience sans harcèlement, quel que soit votre sexe, votre identité sexuelle, votre
    âge, votre orientation sexuelle, votre handicap, votre apparence physique, votre poids, votre origine ethnique
    ou votre religion. Nous ne tolérons aucun harcèlement des participants à la conférence, quel que soit sa
    forme. Les expressions et les images à connotation sexuelle ne sont pas appropriées lors de l'événement. Ceci
    inclut les conférences, les ateliers, les soirées, Twitter et les autres médias en ligne. Les participants à
    la conférence qui violent ces règles peuvent être sanctionnés, voire exclus de la conférence sans
    remboursement, à la discrétion des organisateurs de la conférence.`;
    i18n.coc_long_title ='La version moins rapide';
    i18n.coc_long_desc = `<p>Le harcèlement inclut des commentaires oraux sur le sexe, l'identité sexuelle, l'âge, l'orientation sexuelle,
    le handicap, l'apparence physique, le poids, l'origine ethnique, la religion, les images à connotation
    sexuelle dans des lieux publics, les intimidations délibérées, la traque, la poursuite, un harcèlement
    photographique ou vidéo, une suite d'interruption des conférences et des autres événements, un contact
    physique inapproprié et des avances sexuelles non désirées.</p>
  <br>
  <p>Les participants à qui il sera demandé d'arrêter tout comportement de harcèlement doivent arrêter
    immédiatement.</p>
  <br>
  <p>Les sponsors sont aussi sujet à la politique anti-harcèlement. En particulier, les sponsors ne doivent pas
    utiliser d'images ou de matériels à connotation sexuelle. Ils ne doivent pas non plus engager d'activités à
    connotation sexuelle. L'équipe du stand (y compris les volontaires) ne doivent pas utiliser de vêtements,
    uniformes ou costumes à connotation sexuelle. Ils ne doivent pas non plus créer un environnement sexualisé.
  </p>
  <br>
  <p>Si un participant a un comportement de harcèlement, les organisateurs de la conférence peuvent prendre toute
    action qui leur semble adéquate. Cela va d'un simple avertissement à l'exclusion du participant de la
    conférence sans remboursement.</p>
  <br>
  <p>Si vous vous sentez harcelé, si vous pensez que quelqu'un se fait harceler, et plus généralement en cas de
    problème, merci de contacter immédiatement un membre de l'organisation de l'événement. Les membres sont
    facilement identifiables à leur t-shirts aux couleurs de l'événement.</p>
  <br>
  <p>Les membres de l'organisation seront ravis d'aider les participants à contacter la sécurité de l'hôtel ou du
    bâtiment où se déroule l'événement, ou les forces de l'ordre, à fournir une escorte ainsi qu'à aider de toute
    autre façon les personnes victimes de harcèlement, pour garantir leur sécurité pendant la durée de
    l'événement. Nous apprécions votre participation à l'événement.</p>
  <br>
  <p>Nous attendons des participants qu'ils suivent ces règles dans le bâtiment des conférences et des ateliers,
    ainsi que pendant les événements sociaux relatifs à la conférence.</p>
  <hr />
  <p><em>Original source and credit: <a href="http://2012.jsconf.us/#/about" target="_blank">JSConf US 2012</a> &
      <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy" target="_blank">The Ada
        Initiative</a>.
      This work is licensed under a <a href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
        target="_blank">Creative Commons Attribution 3.0 Unported License</a>.</em></p>`

  return i18n;
}    
  