import edition from '../data/edition.json';
import sponsors from '../data/sponsors.json';
import cfp from '../data/cfp.json';

export function init() {
    const i18n: any = {};
    i18n.program_translation = 'Conférence';
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
    C'est le moment de préparer des sujets extraordinaires. Le CFP ouvrira ici : <i class="fa fa-bullhorn"></i></p>
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
    i18n.sponsor_places_conferences = (num: number) => `${num} entrées offertes pour participer aux sessions`;
    i18n.sponsor_places_booth = (num: number) => `${num } entrées offertes sur l'espace sponsor uniquement`;
    i18n.sponsor_places_speakers_dinner = (num: number) => `${num} place pour le speakers dinner`;
    i18n.sponsor_booth_area = (area: string) => `Stand dans le hall d'exposition (${area})`;
    i18n.sponsor_kakemono = 'Un kakémono (max 1m x 2m50)';
    i18n.sponsor_logo_pass = 'Logo sur badges portés par les participants';
    i18n.sponsor_logo_website = 'Logo sur notre site web du SnowCamp';
    i18n.sponsor_logo_billposting  = 'Affichage de votre logo sur le lieu de la conférence';
    i18n.sponsor_logo_pass_strap = 'Logo sur les tours de cou';
    i18n.sponsor_keynote_talk = (duration: number) => `Présentation de votre choix lors d'une session plénière (${duration })`;
    i18n.snowcamp_logo_usage = 'Autorisation d\'exploiter le logo SnowCamp pour votre communication';
    i18n.sponsorship_prospectus = 'Plaquette Sponsors';
    i18n.contact_us = 'Nous contacter';
    i18n.why_become_sponsor='Pourquoi devenir sponsor ?';
    i18n.sponsor_options='Les formules de sponsoring';
    i18n.sponsor_desc = `
        Le SnowCamp est organisé bénévolement par un groupe de geeks de la région grenobloise. Leur seule
        motivation est d'offrir une conférence unique réunissant innovation et recherche.
      <br>
        Pour réussir dans cette aventure, nous avons besoin de vous.
      <br>
        En retour, nous vous offrons une grande visibilité, sur le web mais aussi lors de l'événement. C'est
        l'occasion idéale pour rencontrer les développeurs grenoblois, montrer vos produits et services, et
        vous faire connaître.`;
    i18n.sponsor_subscription_title = 'Inscription';
    i18n.sponsor_subscription = `L'inscription s'effectue en 2 étapes :`;
    i18n.sponsor_subscription_step1 = `A partir de la date d'ouverture du sponsoring, vous vous enregistrez via un formulaire en ligne.
Cela détermine votre classement pour devenir sponsor et donc l'emplacement qui vous sera attribué.`;
    i18n.sponsor_subscription_step2 = `Suite à votre enregistrement, l'équipe d'organisation Snowcamp vous envoie la facture à payer.
A partir de la réception de la facture par le sponsor, le sponsor a 90 jours pour réaliser le paiement.
Si ce délai n'est pas respecté par un sponsor, l'organisation du Snowcamp se donne le droit d'annuler le
contrat avec ce sponsoring pour laisser la place à un autre sponsor.`;

    i18n.sponsoring_not_open=`L'enregistrement pour le sponsoring du Snowcamp ${edition.year} ouvrira le
        <div style="text-align: center; font-weight: bold; font-size: 1.3em; margin: 10px 0">${sponsors.sponsorship.open_datetime.fr}</div>
        <p class="text-big-italic">Veuillez revenir à partir de ce moment pour vous enregistrer. Nous enverrons un message de rappel aux entreprises qui ont déjà été sponsors.</p>`;
    i18n.sponsoring_open= (sponsors:any) => `<div class="text-big-italic">L'enregistrement pour le sponsoring du Snowcamp ${edition.year} est ouvert depuis le
      <p style="text-align: center; font-weight: bold; font-size: 1.3em; margin: 10px 0">${sponsors.sponsorship.open_datetime.fr}</p>
      Il reste actuellement ${12 - sponsors.etoile.length} places de sponsor(s) Etoile et ${6 - sponsors.flocon.length} places de sponsor(s) Flocon.
      <br>Vous pouvez vous enregistrer via <a href="/sponsors_subscription_form/">ce formulaire d'inscription</a></div>`;
    i18n.sponsoring_closed=`La campagne de sponsoring du snowcamp ${edition.year} est actuellement terminée. Il y a plus de possibilités de devenir sponsor pour la conférence.
      Vous pouvez nous contacter par email pour indiquer que vous souhaitez être parmi notre liste de contact pour la campagne de sponsoring de l'année suivante.`;
    i18n.sponsoring_question='Pour toute information vous pouvez nous contacter par email';

    i18n.sponsor_plan_title = 'Le plan des stands'
    i18n.sponsor_meetgreet_title = 'La bière au Meet & Greet';
    i18n.sponsor_meetgreet_desc = `Pour le moment convivial du Meet & Greet, le Jeudi de 16h50 à 18h, un des sponsors Etoile peut prendre en charge la distribution de la bière et de boisson non alcoolisée. Le principe :`;
    i18n.sponsor_meetgreet_desc_1 = `Distribuer de la bière sur son stand pendant le créneau du Meet & Greet seulement (pas durant les 2 jours)`;
    i18n.sponsor_meetgreet_desc_2 = `Il s'agit de distribuer de la bière à la pression (pas de bouteille ou de canette). Il faut donc prévoir une tireuse, des fûts de bière et des écocup pour 600 personnes`;
    i18n.sponsor_meetgreet_desc_3 = `L'avantage pour le sponsor est d'assurer du passage sur son stand :-).`;
    i18n.sponsor_meetgreet_desc_4 = `La contrepartie est bien sûr d'organiser cela : logistique, distribution de la bière, frais de location de la tireuse, achat des fûts, location des ecocup ...`;

    i18n.sponsor_guide_title = 'Guide du sponsor';

    i18n.sponsor_guide_place_title ='Les places';
    i18n.sponsor_guide_place_content =`Les places liées au sponsoring doivent être retirées par le sponsor au moyen
      d'une url de connexion et d'un code fourni par l'organisation du Snowcamp vers la mi-novembre. Via ce lien vous
      pourrez entrer les informations de chaque participant : nom, prénom, email, type de repas (végétarien ou normal).
      <br>Le retrait des places doit être réalisé impérativement avant le <b>31 décembre</b> précédent la
      conférence. Passé ce délais les places "conference" ne seront plus récupérable par le sponsor. Elles
      seront mis en vente au public.
      <br>Il existe 2 types de places :<ul>
        <li>Place <b>conférence</b>: Elle donne le droit d'accéder à la conférence le jeudi et le vendredi
            et permet d'assister aux talks/schuss durant les 2 jours.</li>
        <li>Place <b>stand</b>: Elle donne le droit d'accéder à la conférence le jeudi et le vendredi mais
            seulement au hall des sponsors (contenant les stands), l'atrium du WTC. Elle ne permet pas
            d'accéder aux présentations (talk/schuss).</li>
      </ul>`;

    i18n.sponsor_guide_buy_ticket_package_title='Achat de plusieurs places';
    i18n.sponsor_guide_buy_ticket_package_content=`Le snowcamp ne propose pas la possibilité d\'acheter plusieurs
      places à la fois. Il s\'agit de notre politique définie depuis de l\'origine. Pour acheter plusieurs places, il
      faut les acheter une par une.`;

    i18n.sponsor_guide_place_sharing_title ='Partage de place';
    i18n.sponsor_guide_place_sharing_content =`Le billet d'une place que vous obtenez lors de l'inscription permet d'obtenir un badge le jeudi matin lors de l'accueil.
      Chaque billet est nominatif. Et normalement, il ne peut être cédé. Cependant, nous tolérons que des entreprises
      pratiquent le partage de badge entre leurs employés sur les 2 jours. Ainsi pour chaque billet/place, il vous est possible d'envoyer une personne le jeudi et une autre le vendredi.
      Le badge sera nécessaire pour rentrer le vendredi matin. La transmission du badge entre la personne du jeudi
      et celle du vendredi doit être gérée de votre côté. Nous ne distribuons pas deux badges pour un même billet.
      Lors de son arrivée le vendredi, la personne pourra coller une étiquette afin de mettre son nom sur le badge.
      A noter que la préférence de repas (normal ou végé) sera celle indiquée dans la plateforme billetweb au 31 décembre.
      Au delà de cette date, nous procédons à la commande auprès de notre traiteur (et à l'impression des badges).
      Veillez donc à faire un choix compatible avec les 2 personnes partageant le badge.`;

    i18n.sponsor_guide_add_booth_ticket_title='Place stand supplémentaire';
    i18n.sponsor_guide_add_booth_ticket_content=`Sur demande il est possible d\'acheter des places stands supplémentaire.
      Le prix est de 60€ pour les 2 jours de conférence. Contactez <a mailto:team@snowcamp.io>team@snowcamp.io</a> pour demander la place.`;

    i18n.sponsor_guide_booth_etoile_title='Le stand ETOILE';
    i18n.sponsor_guide_booth_etoile_content=`Le stand Etoile fait 9m² (3m x 3m). Il est tracé au sol. Il contient par
      défault: 1 table, 2 chaises, une arrivée électrique et 1 claustra métallique d'affichage (163 cmH x 83 cm L).
      La hauteur maximal du stand ne doit pas dépasser 2m40. La charge au sol des produits ne doit pas excéder 500kg / m2.
      <br>Aucun affichage direct sur les murs, cloisons et piliers du centre de congrès n'est autorisé, prévoir
      obligatoirement un support si besoin, en plus du claustra fourni.`;

    i18n.sponsor_guide_booth_etoile_what_title=`Ce qu'il est possible de faire sur le stand`;
    i18n.sponsor_guide_booth_etoile_what_content=`Il n'y a pas de liste définissant ce qui est interdit ou ce qui
      est autorisé. L'équipe d'organisation du Snowcamp est à solliciter pour tout ce qui peut sortir de l'ordinaire
      d'un stand d'une conférence.
      <br>Concernant la nourriture, il y a 3 préoccupations :<ol>
        <li>L'hygiène: La nourriture doit être manipulée de manière hygiénique.</li>
        <li>La propreté: Vous devez rendre l'emplacement de votre stand dans un état correct afin qu'il ne
            nécessite pas un surcroît de nettoyage inhabituel.</li>
        <li>La cuisson: Faire cuire peut être une source de problème : risque de feu, surcharge d'électricité.
            Donc un appareillage au gaz n'est pas accepté. En revanche un appareil pour réchauffer des crêpes
            est acceptable.</li>
      </ol>`;

    i18n.sponsor_guide_booth_etoile_material_title=`Matériel à louer`;
    i18n.sponsor_guide_booth_etoile_material_content=`Il est possible de commander du matériel supplémentaire auprès du
      WTC mais via l'organisation du Snowcamp. Le catalogue est disponible <a target="_" href="https://www.calameo.com/read/0052859110d5d2f7cc04d">ici</a>. Le demande de
      matériel doit être adressée à l'équipe d'organisation du Snowcamp qui vous transmettra les tarifs.
      Une facture sera émise qui devra être réglée au plus tard 7j AVANT le début de la conférence. L'absence
      de paiement dans le délais fixé impliquera la non fourniture du matériel demandé.`;

    i18n.sponsor_guide_booth_etoile_install_title=`(De)Installation du stand`;
    i18n.sponsor_guide_booth_etoile_install_content=`L'installation du stand peut s'opérer le mercredi après-midi (14h-17h30)
      du démarrage du Snowcamp. Les stands devront être démontés pour le vendredi 18h au plus tard. Le WTC comporte un monte
      charge et un ascenseur. L'accès au monte-charge se fait par la rue de la Frise, entre le World Trade Center
      Grenoble et l'Ecole Supérieure de Commerce.`;

    i18n.sponsor_guide_booth_etoile_delivery_title=`Livraison de matériel`;
    i18n.sponsor_guide_booth_etoile_delivery_content=`<p>La livraison des colis et matériels devra se faire à partir du mardi veille du début de la conférence, de 8h30 à 16h30
          et au plus tard mercredi avant 16h30, 1er jour de la conférence (partie université). Tous les colis livrés devront porter
          l'adresse suivante :
      </p>
          <p style="margin-left:  50px;">SNOWCAMP
          <br>Nom de la société exposante + contact
          <br>Centre de congrès du WTC Grenoble 1er étage
          <br>5 - 7, place Robert Schuman
          <br>38000 GRENOBLE</p>
      <p>Les livreurs devront déposer les colis sur le lieu de l'exposition, qui se trouve au 1er étage
          du bâtiment, accessible par monte-charge et ascenseur, sinon, les colis seront refusés. Les livreurs
          doivent être AUTONOMES pour assurer leurs prestations :</p>
          <ul>
          <li>soit disposer du matériel adéquat (hayon, transpalette spécifique, élévateur, ...)</li>
          <li>soit disposer d'un effectif suffisant</li>
          </ul>
      <p>Aucune manutention ne sera apportée par l'équipe du Centre de congrès.
          Un transpalette Jungheinrich, modèle AM 22, est à disposition libre le temps de la livraison.
          Toute livraison ne pouvant être assurée en totale autonomie devra être solutionnée
          indépendamment du Centre de congrès.
          Les colis devront tous être repris à l'issue du démontage.
          Les horaires de livraison et d'enlèvement des colis se font entre 8h30 et 16h30
          uniquement.</p>
      <p>Pour les colis ne pouvant être repris le jour du démontage, ils pourront être conservés sur
          le centre de congrès jusqu'au lundi à 16h30 suivant la conférence. Il devront être bien emballés et
          porter une adresse de retour lisible afin d'être repris par votre transporteur. La
          responsabilité du centre de congrès ne peut être engagée sur leur destruction ou
          disparition. Merci de bien indiquer sur vos colis lisiblement vos coordonnées complètes
          pour éviter des pertes.</p>`;

    i18n.sponsor_guide_booth_etoile_wifi_title=`Connexion wifi`;
    i18n.sponsor_guide_booth_etoile_wifi_content=`<p>L'ensemble des espaces du centre de congrès est équipée de bornes Wifi.
          Matériel compatible : ordinateur, assistant personnel (PDA) et tout matériel certifié wifi 802.11a/b/g :</p>
          < style="margin-left:  50px;">
              Nom du réseau : ESPACE-CONGRES
              <br>Le code d'accès vous sera communiqué ultérieurement
          </p>`;

    i18n.sponsor_guide_media_kit_title='Kit de communication';
    i18n.sponsor_guide_media_kit_content=`Un <a href="/media_kit.pdf">kit de communication</a> est disponible pour vous aider dans la communication à propos du Snowcamp.
    <br>Vous pouvez utiliser notre logo: <a href="/img/logo/snowcamp.svg">format vectoriel</a>, <a href="/img/logo/SnowCampLogo500x500.png">format PNG</a>`;
    i18n.sponsor_tenyears_title="10 ans";
    i18n.sponsor_tenyears_description="Sponsor du goodies spécial des 10 ans: un T-shirt de qualité sur lequel sera affiché devant/derrière le logo du snowcamp et le logo des 10 ans. Votre logo sur la manche du t-shirt."

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

  i18n.tremplin_title = 'Le Tremplin de Snowcamp'
  i18n.tremplin_brief_title = 'En bref'
  i18n.tremplin_brief_content = `Le Tremplin de SnowCamp est un événement organisé en marge de la conférence SnowCamp.
    Son but est d’accompagner des primo-speakers locaux pour leur première conférence à travers un coaching personnalisé
    d’une durée d’environ 2 mois. Le candidat est accompagné de l’idéation à la session finale de 20 min, qui aura lieu lors d’une mini-conférence dédiée où les talks seront filmés.
    A l’issue d’un vote, 2 des participants seront sélectionnés pour rejouer leur session lors de la conférence SnowCamp.`
  i18n.tremplin_planning_content = `
    <ul>
      <li>du 1er avril au 31 mai 2025 : ouverture du CFP</li>
      <li>mi-juin 2025 : annonce des candidates et candidats sélectionnés</li>
      <li>mi-septembre 2025 : début de l'accompagnement</li>
      <li>mi-novembre 2025 : soirée du Tremplin et sélection des 2 talks qui seront programmés pour le SnowCamp 2026</li>
    </ul>`

  i18n.tremplin_participate_title = 'Participer'
  i18n.tremplin_participate_content_fn = (date: string) => `<em>Tu voudrais donner ta première conférence mais tu n’oses pas le faire seul·e ?<br>
    Tu aimerais avoir des conseils et être accompagné·e ?<br><br></em>
    Alors le Tremplin de SnowCamp est fait pour toi !<br><br>
    <b>But :</b><br>
    Offrir un accompagnement individuel gratuit aux personnes désireuses de se lancer en tant que speaker.
    Notre équipe bénévole de coachs expérimentés t’aidera durant toutes les étapes de préparation de ta première conférence de 20 minutes,
    jusqu'à ta prise de parole devant un public lors de la soirée du Tremplin sur Grenoble.<br><br>

    <em>Et ce n’est pas tout !</em> Le public du Tremplin choisira lors de la soirée 2 talks, qui seront d'office sélectionnés au programme
    de la conférence SnowCamp qui aura lieu du ${date}.<br><br>

    <b>Principe du Tremplin :</b><br>
    Parmi les propositions reçues, nous sélectionnerons 6 personnes pour les accompagner dans la définition de l’idée de leur talk,
    la structuration, la réalisation et les répétitions jusqu’au Jour-J de la conférence.
    Chaque participant⋅e bénéficiera d'un coaching personnel pour l'accompagner dans la réalisation de son talk de 20 minutes, sur les mêmes catégories que Snowcamp.<br><br>

    Que tu aies déjà une idée de talk bien définie, ou que tu sois simplement très motivé·e par une thématique mais avec une idée plus floue,
    n’hésite pas à soumettre ta proposition et tes motivations : le Tremplin est fait pour ça !<br><br>

    <b>Qui peut participer ?</b><br>
    Le CFP (call for papers) du Tremplin est réservé aux primo-speakers n’ayant jamais donné de conférence publique (les meetups ou conférences internes ne comptent pas).
    `

    i18n.tremplin_previous_editions_title = 'Éditions précédentes'
    i18n.tremplin_previous_editions_content = `Le Tremplin de SnowCamp a été lancé en 2023.<br><br>
      <p style="text-align: center;">
        <img src="/img/tremplin/tremplin_2023.jpg" width="100%">
        <small><em>Participants et coaches de l'édition 2023</em></small>
      </p>
      <br>
      Voici les enregistrements des talks sélectionnés lors des éditions précédentes, pour celles et ceux ayant acceptés leur diffusion publique :
      <ul>
        <li><a href="https://www.youtube.com/playlist?list=PLIYXcdwc2smE6928CjtzrqCI-sqNZBNDy" target="_blank">Tremplin 2023</a></li>
      </ul>`

    i18n.cfp_tracks_title = 'Les catégories de talks'
    i18n.cfp_tracks_content = `<ul>
        <li><b>Cloud & DevOps :</b> tout ce qui touche aux outils, méthodes et solutions pour déployer, tester et faire tourner des applications.</li>
        <li><b>UX & Frontend :</b> tout ce qui touche au frontend de nos apps: expérience utilisateur, design, interfaces utilisateur, des approches aux outils et technos, web et mobile inclus.</li>
        <li><b>Langage, Backend & Sécurité :</b> tout ce qui touche aux langages de programmation, backend de nos apps, et la sécurité: bonnes pratiques, frameworks, performance...</li>
        <li><b>Architecture, Data & AI :</b> modèles d’architectures, paradigmes de conception et développement, gestion des données, et tout ce se rapproche de l'intelligence artificielle.</li>
        <li><b>Hors-piste :</b> tout ce qui sort des pistes damées et qui ne rentre pas dans les autres tracks, en gardant en ligne de mire une audience technique de développeurs.</li>
      </ul>`
    i18n.cfp_speaker_expenses_title=`Frais des speakers`
    i18n.cfp_speaker_expenses_content=`La politique de prix de la conférence ne permet pas de prendre en charge les frais des speakers (transport, logement, repas).
				La conférence offre le repas le midi les jours de conférence et invite les speakers à un diner le jeudi soir (Confirmation en fonction du budget).`

    i18n.cfp_speaker_ticket_title='Accès à la conférence';
    i18n.cfp_speaker_ticket_content='Chaque speaker retenu et qui a confirmé sa participation (via conference hall) a droit à un billet conférence 2 jours (Jeudi + Vendredi). Ce billet ne peut être céder. Le speaker recevra son billet entre novembre et décembre. Le billet ne donne pas accès aux universités car il s\'agit de places réservées. Si le speaker veut assister à une université il doit acheter un billet 3 jours.';

    i18n.cfp_editoriale_line_title = `Ligne éditoriale`;
    i18n.cfp_editoriale_line_content = `
        <h2>Introduction</h2>
        <p>Chaque année lors de la préparation de la conférence Snowcamp.io nous organisons un Call For Paper (CFP) afin de vous permettre, si vous êtes orateur ou oratrice, de proposer le ou les sujets qui vous tiennent à cœur.</p>
        <p>Le CFP est un outil formidable pour nous afin de construire le planning de conférences que nous proposeront au public qui sera présent tout en laissant la possibilité à des orateurs/oratrices que nous ne connaissions pas de venir s'exprimer.</p>
        <p>Cependant le nombre de sujets présentés lors du Snowcamp.io est limité et nous ne pouvons pas garder tout le monde. Ainsi le sujet que vous aurez proposé ne sera pas forcément retenu.</p>
        <p>Par exemple, l'année dernière nous avions reçu plus de 250 propositions et il nous a fallu en sélectionner seulement une 50aine, soit 20%.</p>
        <p>C'est pourquoi afin de vous donner le plus de chances possible d'être retenus, nous avons compilé dans ce document un ensemble de conseils pouvant mettre en valeur votre soumission de sujet.</p>
        <p>Ces conseils sont fortement inspirés par le superbe travail de Katia Aresti dans son <a href="https://twitter.com/karesti/status/1079114352240795650">thread twitter</a>. Merci à elle ;-)</p>

        <h2>La ligne éditoriale de Snowcamp.io</h2>
        <p>La première étape avant de proposer votre sujet est de vous assurer qu'il correspond bien à notre ligne éditoriale.</p>
        <p>Bien que nous soyons attachés à la méthodologie, nous avons fait le choix de dédier cet événement à la technologie. Ainsi notre ligne éditoriale consiste à proposer des sujets techniques rattachés soit à des langages de programmation, des outils de développement (ex: IDE, Framework, SDK etc) ou encore des sujets d'architecture logicielle. Le format est plutôt libre et peut consister en une présentation technique, un retour d'expérience, un cours ou encore un comparatif avec d'autres technologies concurrentes.</p>
        <p>Si votre sujet n'est pas uniquement technique ou s'il n'a pas sa place dans les catégories proposées, la catégorie Hors-Piste a été prévue pour autoriser de sortir des sentiers battus de notre ligne éditoriale, mais gardez en tête que cette catégorie ne représentera qu'un nombre réduit de sessions.</p>

        <h2>Les points importants lorsque vous proposez une session</h2>
        <h3>Présentez-vous</h3>
        <p>Dans notre outil de CFP, une section est dédiée à votre présentation. Utilisez celle-ci pour nous dire qui vous êtes mais aussi pour nous dire quelles sont vos expériences passées en tant qu'orateur ou oratrice.</p>
        <p>Chaque année, un certain nombre de sujets sont très similaires. Dans ces cas-là, même si elle ne fait pas tout, votre bio peut faire la différence si celle-ci montre votre expérience dans le domaine et/ou votre motivation.</p>
        <p>Bien sûr si vous n'avez pas d'expériences passées en tant qu'orateur dans ce format de conférence, soyez honnête et dites le nous. En tant qu'organisateurs de conférences nous nous devons de permettre à des nouveaux orateurs de se lancer.</p>
        <p>Enfin, si vous avez déjà présenté le même sujet à une autre conférence et que celle-ci a été filmée ou si vous vous êtes simplement entraîné face à une caméra, n'hésitez pas à nous partager un lien que nous pourrions visionner. Comme on dit une image vaut mieux que 1000 mots ;-)</p>
        <p>À noter que le nombre maximum d'orateurs par sujet (conférence ou atelier) est limité à 2.</p>

        <h3>Trouvez un bon titre pour votre session</h3>
        <p>Le titre est la première que l'on voit, et va potentiellement donner envie (ou non) de sélectionner un talk (pour les organisateurs) ou assister à la sessions (pour les participants). Le titre est donc un élément essentiel de votre proposition, ne le négligez pas!</p>
        <p>Un titre original ou amusant peut attirer l'œil, mais gardez tout de même en tête qu'il doit refléter votre sujet: quand on lit un titre et qu'on ne sait pas de quoi le sujet va parler, ce n'est jamais bon signe!</p>
        <p>Et si vous n'êtes pas très inspirés, vous pouvez toujours essayer de demander à ChatGPT de vous conseiller un titre à partir de votre abstract ;)</p>

        <h3>Soyez clair dans la rédaction de l'abstract</h3>
        <p>L'abstract de votre session est l'élément le plus important à renseigner, c'est grâce à lui que nous pouvons savoir de quoi vous allez parler mais aussi comment vous allez en parler.</p>
        <p>Il vous est fortement conseillé d'inclure dans votre abstract :<ul>
        <li>Le quoi de votre session : le sujet que vous allez aborder. Essayez d'être précis sur ce point. Par exemple, si vous voulez parler d'un Framework, allez-vous effectuer une présentation large de ce Framework? Ou allez vous focaliser votre session sur une caractéristique particulière de ce Framework comme par exemple l'optimisation de sa mémoire.</li>
        <li>Le comment de votre session : la façon dont vous allez diriger votre session. Allez-vous rester dans la théorie ou allez vous montrer des exemples? Votre session sera-t-elle sous forme de live coding ou de retour d'expérience? Allez-vous expérimenter une nouvelle forme de passage de connaissances?</li>
        <li>La cible de votre session : à qui vous souhaitez dédier votre session. Votre sujet sera-t-il un introduction à une technologie dédiée à des débutants? Ou sera-t-il plutôt à destination d'experts?</li>
        </ul></p>
        <p>Ne bâclez pas votre abstract car cela se voit et cela ne peut que réduire vos chances d'être choisi.</p>
        <p>A contrario, n'écrivez pas un abstract trop long. En fin de CFP nous avons généralement plusieurs centaines de sessions à découvrir, analyser et noter, même si nous faisons tout notre possible pour lire entièrement votre soumission, tomber sur un abstract trop long peut vite être décourageant.</p>
        <p>Il peut être tentant de rajouter de l'humour ou des emojis dans votre abstract. Cela est bien sûr accepté mais cela ne doit pas être fait en dépit de la clarté de celui-ci. Votre abstract aura beau nous faire rire, si nous ne comprenons pas de quoi votre session parlera nous ne pourrons pas lui donner une note correcte.</p>
        <p>Enfin attention à ne pas être dans la dérive du Buzzword. Votre session doit avant tout avoir du sens. Aligner les termes à la mode et jouer sur les tendances sans que votre session n'ait de sens n'augmentera pas vos chances d'être sélectionné.</p>

        <h3>N'oubliez pas de renseigner le format, la catégorie et la langue de votre session</h3>
        <p>Lors de la définition de notre ligne éditoriale nous avons défini un certain nombre de catégories de sessions qui pourront être présentées. Ces catégories (ou encore thèmes) sont au nombre de 5 :</p>
        <ul>
        <li>Cloud & DevOps</li>
        <li>UX & Frontend</li>
        <li>Language, Backend et Sécurité</li>
        <li>Architecture, Data & AI</li>
        <li>Hors piste</li>
        </ul>
        <p>Notre but est que chacune de ces catégories soit représentée le plus équitablement possible lors de la conférence. Si vous ne précisez pas cette catégorie lors de votre soumission de sujet, alors il nous sera plus difficile de classer votre session et celle-ci pourrait être pénalisée si nous lui attribuons une mauvaise catégorie (ex: si le sujet est ambigu).</p>


        <p>En plus de des catégories, il existe trois formats de session :</p>
        <ul>
        <li>Les Conférences de 45min</li>
        <li>Les sessions courtes (Schuss) de 20min</li>
        <li>Les Workshops de 3h</li>
        </ul>
        <p>Le format des Workshops est réservé au premier jour du SnowCamp tandis que celui des talks correspond aux deux jours suivants. Il nous est donc primordial de savoir à quel format correspond votre session. S'il nous est possible d'estimer la catégorie d'un sujet, il est souvent difficile d'estimer la durée et le format que le conférencier souhaite lui attribuer. <strong>La règle sera donc claire : pas de format = pas de vote</strong>.</p>
        <p>Si vous pensez que votre sujet peut être présenté à la fois sous forme d'un Workshop et d'un talk, soumettez le deux fois en renseignant le bon format pour chacun.</p>
        <p>Enfin n'oubliez pas de renseigner la langue dans laquelle vous présenterez votre session. Il nous faudra afficher cette information sur le programme de la conférence donc plus tôt nous avons cette information plus simple cela sera pour mettre en forme le programme.</p>
        <p>Au passage, si vous présentez une session dans une langue, alors optez pour un abstract dans la même langue.</p>
        <p>Nous vous conseillons aussi de ne proposer un talk en Anglais que si vous êtes vraiment à l'aise en Anglais et/ou que vous maîtrisez mieux cette langue que le Français. Présenter un sujet technique face à un public et en étant limité dans le temps est déjà un exercice difficile, ne vous rajoutez pas d'autres contraintes.</p>

        <h2>Notre engagement</h2>
        <p>Bien sûr si nous constatons qu'il manque des informations à votre soumission ou que votre sujet/abstract n'est pas assez clair nous ferons au mieux pour vous en faire part afin que vous puissiez corriger le tir.</p>
        <p>Cependant notez que cela ne nous est possible que pendant que le CFP est ouvert et que vous pouvez modifier votre soumission. Donc plus vous soumettez votre session proche de la date de fermeture du CFP, plus vous réduisez vos chances d'avoir droit à retravailler votre texte.</p>
    `;
    i18n.schedule_menu ='Programme';
    i18n.schedule_title ='Programme';
    i18n.schedule_unavailable =`Le programme sera disponible le ${cfp.dates.schedule.fr}.`;
    i18n.schedule_available =`Le programme est disponible depuis le ${cfp.dates.schedule.fr}.`;
    i18n.schedule_openfullschedule =`Pour le voir sur une page complète cliquer sur `;
    i18n.schedule_change =`Jusqu'à la dernière minute un ajustement de programme est possible car un speaker peut être indisponible ou l'organisation peut décider d'inverser 2 salles par rapport à la fréquentation supposée.`;

  return i18n;
}
