import edition from '../data/edition.json';
import sponsors from '../data/sponsors.json';
import cfp from '../data/cfp.json';

export function init() {
    const i18n: any = {};
    i18n.program_translation = 'CFP';
    i18n.cfp_program_translation = 'Call For Proposals';
    i18n.ticketlabel = 'Tickets';
    i18n.what_is_this = "What's this?";
    i18n.in_2017 = 'In 2017';
    i18n.become_sponsor = 'Become a sponsor';
    i18n.our_sponsors = 'Our sponsors';
    i18n.past_editions = 'Past editions';
    i18n.venue = 'Venue';
    i18n.tickets = 'Tickets';
    i18n.videos = 'Videos';
    i18n.coc = 'CoC';
    i18n.conference_desc = 'A unique conference for devs, ops and architects';
    i18n.universities_title = 'Universities';
    i18n.universities_desc = 'A day of training <br/>(choice of 2 trainings of 3 hours long).';
    i18n.conference_title = 'Conferences';
    i18n.conference_desc = '2 days of conferences with 45mn talks.';
    i18n.unconference_title = 'Unconference';
    i18n.unconference_desc = 'A day of exchange on the skiing slopes gathering speakers and attendees.';

    i18n.innovation_research_title = 'Innovation and research';
    i18n.innovation_research_desc = 'A high-level technical conference gathering engineers and researchers';
    i18n.innovation_title = 'Innovation';
    i18n.innovation_desc = 'Learn about today\'s and tomorrow\'s tools, frameworks and technologies.';
    i18n.discussion_title = 'Exchange';
    i18n.discussion_desc = 'Meet and exchange with other devs, ops, architects and speakers.';
    i18n.research_title = 'Research';
    i18n.research_desc = 'Discover trending works of researchers.';

    i18n.cfp_open_desc=`<p>The CFP is open! Let's submit awesome subjects here:
      <br><i class="fa fa-bullhorn"></i>&nbsp;<a href="${cfp.url}" target="_blank">${cfp.url}</a></p>
      <br/>
      <p>Some hints:</p>
      <ul>
        <li>Choose well your title</li>
        <li>Explain what the attendees will see and learn</li>
        <li>Make demos</li>
        <li>Submit early!</li>
      </ul>
      <br/>
      <p>Sessions can be made in French or English. The talks are selected
        by a neutral and open-minded committee. So, take the plunge!
      </p>`;
    i18n.cfp_open_soon_desc=`<p>The CFP opens on the ${cfp.dates.open_date.en}!
      Let's prepare awesome subjects! The CFP will be open here: <a href="${cfp.url}" target="_blank"><i class="fa fa-bullhorn"> ${cfp.url}</i></a></p>
      <br/>
      <p>Some hints:
      <ul>
        <li>Choose well your title</li>
        <li>Explain what the attendees will see and learn</li>
        <li>Make demos</li>
        <li>Submit early!</li>
      </ul>
      </p>
      <br/>
      <p>Sessions can be made in French or English. The talks are selected
        by a neutral and open-minded committee. So, take the plunge!
      </p>`;
    i18n.cfp_closed_desc=`<p>Le CFP est désormais fermé !</p>`
    i18n.cfp_other_desc=`<p>The CFP is not yet open... Be patient!
      <br>Follow us on Twitter <a class="sp-tw" href="https://twitter.com/SnowCampIO"><i class="fa fa-twitter"></i></a> to be notified when the CFP opens.</p>`;
    i18n.cfp_opens = 'CFP opens';
    i18n.cfp_closes = 'CFP closes';
    i18n.cfp_notifications = 'Notifications';

    i18n.schedule_title = 'Schedule';
    i18n.schedule_desc = 'The schedule can be found here: ';

    i18n.venue_title = 'Venue';
    i18n.venue_desc = 'The schedule can be found here: ';
    i18n.venue_location = `Universities and conferences will take place at
      <a href="http://www.congres-wtcgrenoble.com/en target="_blank"><strong>"WTC World Trade Center Grenoble"</strong></a>,
      a conference center in Grenoble center.`;
    i18n.venue_access=`You can access:
      <ul>
        <li>by tramway line B (towards Grenoble Presqu'île), stop "Palais De Justice - Gare"</li>
        <li>by car (you can park at the parking Doyen Weil or Europole Gare)
          <ul>
            <li>when arriving from Lyon or Valence, take the Europole-Gares exit and follow signs to Europole.</li>
            <li>when arriving from Chambéry, Gap or Sisteron,  take "the rocade Sud", follow signs to Lyon by highway, take the Europole exit and follow signs to Europole</li>
          </ul>
        </li>
        <li>by train or bus: use the underground passage between the railway station and Europole</li>
        <li>by plane: there are airport shuttles: from Lyon Saint-Exupéry (17 round trips per day) and from Genève Cointrin (6 round trips per day)</li>
        <li>by <a href="http://www.metromobilite.fr/velo.html" target="_blank">bike</a></li>
      </ul>`;

    i18n.sponsor_chamois = 'Sponsor Chamois &#129351;';
    i18n.sponsor_etoile = 'Sponsors Étoile ⭐';
    i18n.sponsor_flocon = 'Sponsors Flocon ❄️';
    i18n.sponsor_meetgreet = 'Sponsor Meet&Greet 🍻';
    i18n.partners = 'Partners';
    i18n.sponsor_thanks = () => `They have already placed their trust to prepare the edition ${edition.year} together.<br/>Many thanks to our sponsors!`;
    i18n.sponsor_previous_year = 'They were sponsors the last edition';
    i18n.sponsor_thanks_previous_year = (year: number) => `They placed their trust to prepare the edition ${year} <span>
      </span>together.<br/>Many thanks to our sponsors!`;
    i18n.sponsor_limit = (num: number) => num > 1 ? `Limited to ${num} sponsors` : `Limited to ${num} sponsor`;
    i18n.sponsor_places_conferences = (num: number) => `${num} free tickets to attend the sessions`;
    i18n.sponsor_places_booth = (num: number) => `${num} free tickets for the sponsors space only`;
    i18n.sponsor_places_speakers_dinner = (num: number) => `${num} place for the speakers dinner`;
    i18n.sponsor_booth_area = (area: string) => `Booth in the exhibition hall (${area})`;
    i18n.sponsor_kakemono = '1 kakémono (max 1m x 2m50)';
    i18n.sponsor_logo_pass = 'Your logo on the attendees pass';
    i18n.sponsor_logo_website = 'Your logo on the SnowCamp website';
    i18n.sponsor_logo_billposting  = 'Your logo visible on the location of the conference';
    i18n.sponsor_logo_pass_strap = 'Your logo on pass straps';
    i18n.sponsor_keynote_talk = (duration: number) => `Free keynote (${duration })`;
    i18n.snowcamp_logo_usage = 'Authorisation to use the SnowCamp logo for your communications';
    i18n.sponsorship_prospectus = 'Sponsorship Prospectus';
    i18n.contact_us = 'Contact us';
    i18n.why_become_sponsor='Why become sponsor?';
    i18n.sponsor_options='Sponsoring options';
    i18n.sponsor_desc = `Snowcamp is organized by a group of geeky volonteers. Their only motivation
        is to propose a unique conference gathering innovation and research.
      <br>
        To make a success of this adventure, we need you.
      <br>
        In return, we offer you a large visibility, on the web and during the event.
        It's the perfect opportunity to meet developers from Grenoble,
        demonstrate your products and services, and to make yourself known.`;

      i18n.sponsor_subscription_title = 'The registration';
      i18n.sponsor_subscription = 'The registration process has 2 steps:';
      i18n.sponsor_subscription_step1 = `Since the open date of the sponsoring campaign, you can use the online form to register your company.
      For the Etoile sponsor, this registratrion sets your ranking and therefore the booth.`
      i18n.sponsor_subscription_step2 = `After the registration step the Snowcamp organisation team sends you an invoice by email
      Since the reception of the invoice, the sponsor has 90 days to make the payment.
      After that delay, the snowcamp organisation has the right to cancel the contract with that sponsor and to replace this sponsor.`;

      i18n.sponsoring_not_open=`The registration for the Snowcamp ${edition.year} will open on
          <div style="text-align: center; font-weight: bold; font-size: 1.3em; margin: 10px 0">${sponsors.sponsorship.open_datetime.en}</div>
          <p class="text-big-italic">Please come back after that moment, in order to register your company as sponsor. The snowcamp organisation team will send a reminder to
          all previous sponsors.</p>`;
      i18n.sponsoring_open=(sponsors:any) => `<div class="text-big-italic">The registration for the Snowcamp ${edition.year} is open since
      <p style="text-align: center; font-weight: bold; font-size: 1.3em; margin: 10px 0">${sponsors.sponsorship.open_datetime.en}</p>
        ${12 - sponsors.etoile.length} slots of Etoile sponsor and ${6 - sponsors.flocon.length} slots of Flocon sponsor are available.
        <br>Use the following online <a href="${sponsors.sponsorship.subscribe_link}">registration form</a></div>`;
      i18n.sponsoring_closed=`The sponsoring campaign of the session ${edition.year}. Hence, it is no more possible to become sponsor for the session ${edition.year}.
      You can contact us if you wish to belong our contact list in order to be alerted for the next edition of the Snowcamp.`;
      i18n.sponsoring_question='For any information, contact us by email';


      i18n.sponsor_notice = `<p class="text dark-background">Notice: Upon receipt of the invoice by the sponsor,
      the sponsor has 90 days to complete all administrative registration procedures and make the payment.
      If this deadline is not adhered to by a sponsor, the Snowcamp organization reserves the right to cancel
      the contract with that sponsor to make way for another sponsor.</p>`;
    i18n.sponsor_plan_title = 'Plan of booths'
    i18n.sponsor_meetgreet_title = 'Beer at Meet & Greet';
    i18n.sponsor_meetgreet_desc = `For the friendly Meet & Greet moment, the Thursday from 4:50 PM to 6:00 PM,
      one of the Etoile sponsors can take care of distributing beer. The idea:`
    i18n.sponsor_meetgreet_desc_1 = `Distribute beer at their booth only during the Meet & Greet time slot (not during the 2 days).`;
    i18n.sponsor_meetgreet_desc_2 = `The distribution involves draft beer (no bottles or cans). Therefore, a tap, beer kegs, and eco-cups for 600 people need to be arranged.`;
    i18n.sponsor_meetgreet_desc_3 = `The benefit for the sponsor is to ensure traffic to their booth :-).`;
    i18n.sponsor_meetgreet_desc_4 = `The counterpart, of course, is to organize this: logistics, beer distribution, rental fees for the tap, purchase of kegs, rental of eco-cups...`;
    i18n.sponsor_status_not_open = `<p class="text dark-background">
      Sponsoring campaign will open at ${sponsors.sponsorship.open_datetime.fr}</a>.</p>`;
    i18n.sponsor_status_open = `<p class="text dark-background">
      Sponsoring campaign is open since the ${sponsors.sponsorship.open_datetime.en}.
      <br>You can register with the following  <a href="${sponsors.sponsorship.subscribe_link}">online form</a>.
      </p>`;
    i18n.sponsor_status_closed = `<p class="text dark-background">
      Sponsoring campaign is closed</a>.
      </p>`;
    i18n.sponsor_guide_title = `Sponsor guide`;
    i18n.sponsor_guide_place_title ='Tickets';
    i18n.sponsor_guide_place_content =`The sponsorship-related tickets must be claimed by the sponsor
      through a login URL and a code provided by the Snowcamp organization around mid-November.
      Through this link, you can enter the information for each participant: name, first name, email, and
      meal preference (vegetarian or regular).
      <br>The ticket retrieval must be completed no later than December 31st before the conference. After
      this deadline, the "conference" tickets will no longer be retrievable by the sponsor and will be made
      available for public purchase.
      <br>There are two types of tickets:<ul>
        <li>Conference Ticket: Grants access to the conference on Thursday and Friday and allows attendance
        at talks/schuss during both days.</li>
        <li>Stand Ticket: Grants access to the conference on Thursday and Friday but only to the sponsors' hall
        (containing the booths), the atrium of the WTC. It does not allow access to presentations (talks/schuss).</li>
      </ul>`;

    i18n.sponsor_guide_place_sharing_title ='Ticket sharing';
    i18n.sponsor_guide_place_sharing_content =`The ticket for a single seat obtained during registration allows you
    to receive a badge on Thursday morning during the welcome session. Each ticket is personalized and typically cannot
    be transferred. However, we tolerate companies sharing badges among their employees over the 2 days. Thus, for each
    ticket/seat, it is possible for you to send one person on Thursday and another on Friday.
    <br>The badge will be necessary for entry on Friday morning. The transfer of the badge between the person on Thursday
    and the one on Friday must be managed on your end. We do not distribute two badges for a single ticket. Upon arrival
    on Friday, the person can affix a label to put their name on the badge.
    <br>Please note that the meal preference (regular or vegetarian) will be the one indicated in the Billetweb platform
    by December 31st. Beyond this date, we proceed with the order from our caterer (and the printing of badges).
    Therefore, ensure that the choice is compatible with the preferences of both individuals sharing the badge.`;

    i18n.sponsor_guide_booth_etoile_title='The booth ETOILE';
    i18n.sponsor_guide_booth_etoile_content=`The Star booth is 9m² (3m x 3m). It is marked on the ground. By default,
      it includes: 1 table, 2 chairs, an electrical outlet, and a metal display screen (163 cmH x 83 cm L). The maximum
      height of the booth should not exceed 2m40. The ground load of the products should not exceed 500kg/m2. <br>No direct
      display on the walls, partitions, and pillars of the congress center is allowed. It is mandatory to provide additional
      support if needed, in addition to the provided display screen.`;

    i18n.sponsor_guide_booth_etoile_what_title=`Content of the booth`;
    i18n.sponsor_guide_booth_etoile_what_content=`There is no list defining what is prohibited or allowed. The Snowcamp
    organizing team should be contacted for anything that may deviate from the norm of a conference booth.
    <br>Regarding food, there are three concerns:<ol>
      <li>Hygiene: Food must be handled in a hygienic manner.</li>
      <li>Cleanliness: You must leave your booth location in a proper state so that it does not require an unusual amount
      of cleaning.</li>
      <li>Cooking: Cooking can be a source of problems, such as the risk of fire or electrical overload. Therefore, gas
      appliances are not accepted. However, an appliance for warming up crepes is acceptable.</li>
    </ol>`;

    i18n.sponsor_guide_booth_etoile_material_title=`Rent material`;
    i18n.sponsor_guide_booth_etoile_material_content=`It is possible to order additional equipment through the
      WTC, but it must be done through the Snowcamp organization. The catalog is available
      <a target="_" href="/catalog_WTC.pdf">here</a>. The request for equipment should be addressed to the Snowcamp
      organizing team, who will provide you with the pricing. An invoice will be issued and must be settled no later
      than 7 days BEFORE the start of the conference. Failure to make the payment within the specified period will
      result in the non-provision of the requested equipment.`;

    i18n.sponsor_guide_booth_etoile_install_title=`(Un)Installation of the booth`;
    i18n.sponsor_guide_booth_etoile_install_content=`The booth setup can take place on Wednesday afternoon
      (2:00 PM to 5:30 PM) starting from the beginning of Snowcamp. The booths must be dismantled no later than Friday
      at 6:00 PM. The WTC has a freight elevator and a regular elevator. Access to the freight elevator is through Rue
      de la Frise, between the World Trade Center Grenoble and Grenoble Ecole Management.`;

    i18n.sponsor_guide_booth_etoile_wifi_title=`Wifi`;
    i18n.sponsor_guide_booth_etoile_wifi_content=`<p>The entire congress center is equipped with WiFi access points.
      Compatible devices include computers, personal digital assistants (PDAs), and any equipment certified for
      WiFi 802.11a/b/g:
      <p style="margin-left:  50px;">Network Name: ESPACE-CONGRES
      <br>The access code will be provided to you later.
      </p>`;

    i18n.sponsor_guide_media_kit_title='Kit de communication';
    i18n.sponsor_guide_media_kit_content=`A <a href="/media_kit.pdf">communication kit</a> is available to assist you in promoting Snowcamp.
    <br>You can use our logo: <a href="/img/logo/snowcamp.svg">vector format</a>, <a href="/img/logo/SnowCampLogo500x500.png">PNG format</a>.`;

    i18n.store_package_title = (title:string, days: number) => `${title} - Package ${days} days`;
    i18n.store_package_universities_plus_confs = 'Universities + Conferences';
    i18n.store_package_confs_only = 'Conferences only';
    i18n.store_access_universities = 'Access to the Universities';
    i18n.store_access_conferences = 'Access to the Conferences';
    i18n.store_access_breakfast = (days: number) => `Breakfast for the ${days} days`;
    i18n.store_access_lunch = (days: number) => `Lunch for the ${days} days`;
    i18n.store_access_meet_and_greet = 'Meet & Greet on Thursday evening';
    i18n.store_classic_dates = (date: string) => `The store opens on ${date}`;
    i18n.store_not_open = 'The store is not open yet';
    i18n.store_early_birds_open = (date: string) => `Early Birds sell starts on ${date}!`;
    i18n.store_opens_on = (date: string) => `Store opens on the ${date}!`;
    i18n.store_is_open = 'The store is open';
    i18n.store_is_soldout = 'The store is soldout!';
    i18n.store_here = 'Store here';

    i18n.previous_sponsors_thanks = (year: number) => `Without them, nothing would have been possible.
      A big thank you to our sponsors ${year}!`;
    i18n.previous_edition_how_was_it = (year: number) => `How was ${year}?`;
    i18n.previous_edition_relive_with_images = (year: number) => `Relive the edition ${year} with images!`;

    i18n.organisation_title='Organisation';
    i18n.organisation_desc=`Snowcamp is a conference crafted by developers from the Grenoble area. It was
      started in 2016 on the initiative of <a href="http://www.alpesjug.fr/">AlpesJug</a>. All
      organizers are enthusiast geeky volonteers.`;

    i18n.snowcamp_sentence='The conference driving you (wal)nuts';
    i18n.snowcamp_whatis_title='What is SnowCamp?';
    i18n.snowcamp_whatis_desc=`First and foremost, it's a high-level technical conference that focuses on innovation.
    SnowCamp brings IT professionals and researchers together to discuss today's and tomorrow's technologies.
    <br>SnowCamp is a unique concept: day-long workshops on Wednesday,
    to learn or improve a certain technology;
    a more classical conference on Thursday and Friday, and a socializing and relaxing day on the snow,
    in the mountains, on Saturday.`;
    i18n.snowcamp_gren_inno_title='Grenoble and the innovation';
    i18n.snowcamp_gren_inno_desc=`Since the early stage of electricity, Grenoble has been a place
      of innovation: laboratories and industries at the forefront of
      technology have established themselves there. It was ranked #5
      most innovative city in the world by Forbes magazine and it is
      now labelled "French Tech" as a recognition of its technical
      leadership in France. In Grenoble, innovation dugs its roots in
      the surrounding mountains. That's why the SnowCamp team organizes
      an "unconference" day following the conference where attendees
      will keep on sharing their knowledge and ideas in a less formal
      and more relax context, prone to creativity: the snowy slopes.`;
    i18n.snowcamp_conf_title='Conferences';
    i18n.snowcamp_conf_desc=`SnwoCamp is built around three main events:
      <ul>
        <li>the Universities, on Wednesday, offer the opportunity to discover
            a technology in depth and hands-on, through workshops that
            last half a day or the whole day,
        </li>
        <li>the Conference, on Thursday and Friday, offers a more classical model:
          45 minutes presentations. In 2017, the conference was structured
          around several tracks,
        </li>
        <li>the Unconference, on Saturday, offers to speakers and attendees
          an opportunity to meet each others on the slopes of the Grenoble area.</li>
      </ul>
      The first edition back in 2016 gathered ~200 attendees and speakers in Grenoble university
        building, and grow with your support to be hosted in Grenoble's
        World Trade Center to gather ~600 attendees and ~70 speakers since 2020.`;
    i18n.snowcamp_unconf_title='The unconference';
    i18n.snowcamp_unconf_desc=`<p>A conference is more than just attending presentations, it's
      also the discussions with the other participants, meeting the speakers...
      What better to continue these exchanges other than a day in the open air?
      SnowCamp ends with a day on the skiing slopes, in order to take advantage
      of the exceptional surroundings of Grenoble.</p>
      <br/>
      <p>So, are you coming?</p>
      <br/>
      <p>
        Any other questions? Contact us:
      </p>`;

    i18n.store_title = 'Tickets';
    i18n.store_desc = `You can buy a pack of 3 days (universities + conferences), or 2 days (conferences only).
    The tickets can be bought through our partner BilletWeb.
    Beware, the number of attendees is limited and we were sold out last year!`;


    i18n.coc_title = 'Code of conduct';
    i18n.coc_intro =`All participants, sponsors, volunteers and speakers are invited to read our recommandation
      about the code of conduct.<br>
      In case of problem during the conference, we invite any witness of a problem, to contact the organisation team,
      who will try to help you.`
    i18n.coc_quick_title = 'The Quick Version';
    i18n.coc_quick_desc = `SnowCamp is dedicated to providing a harassment-free conference experience for everyone, regardless
      of gender, gender identity and expression, age, sexual orientation, disability, physical appearance,
      body size, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate
      harassment of conference participants in any form. Sexual language and imagery is not appropriate
      for any conference venue, including talks, workshops, parties, Twitter and other online media.
      Conference participants violating these rules may be sanctioned or expelled from the conference
      without a refund at the discretion of the conference organisers.`;
    i18n.coc_long_title ='The Less Quick Version';
    i18n.coc_long_desc = `
        <p>Harassment includes offensive verbal comments related to gender, gender identity and expression, age,
            sexual orientation, disability, physical appearance, body size, ethnicity, religion, technology
            choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing
            photography or recording, sustained disruption of talks or other events, inappropriate physical
            contact, and unwelcome sexual attention.</p>
        <br>
        <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
        <br>
        <p>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use
            sexualised images, activities, or other material. Booth staff (including volunteers) should not use
            sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.</p>
        <br>
        <p>If a participant engages in harassing behavior, the conference organisers may take any action they
            deem appropriate, including warning the offender or expulsion from the conference with no refund.
        </p>
        <br>
        <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns,
            please contact a member of conference staff immediately. Conference staff can be identified as
            they'll be wearing branded clothing and/or badges.</p>
        <br>
        <p>Conference staff will be happy to help participants contact hotel/venue security or local law
            enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the
            duration of the conference. We value your attendance.</p>
        <br>
        <p>We expect participants to follow these rules at conference and workshop venues and conference-related
            social events.</p>
        <hr />
        <p><em>Original source and credit: <a href="http://2012.jsconf.us/#/about" target="_blank">JSConf US
                    2012</a> & <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy"
                    target="_blank">The Ada Initiative</a>.
                This work is licensed under a <a href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
                    target="_blank">Creative Commons Attribution 3.0 Unported License</a>.</em></p>`

  i18n.tremplin_title = 'Le Tremplin de Snowcamp'
  i18n.tremplin_brief_title = 'In short'
  i18n.tremplin_brief_content = `Le Tremplin de SnowCamp is an event organized alongside the SnowCamp conference.
  Its purpose is to support local first-time speakers for their first conference through personalized coaching lasting about 2 months.
  from ideation to the final 20-minute session that will take place at a dedicated mini-conference where the talks will be filmed.
  Following a vote, 2 of the participants will be selected to replay their session at the SnowCamp conference.`

  i18n.tremplin_participate_title = 'Participate'
  i18n.tremplin_participate_content_fn = (date: string) => `<em>Would you like to give your first conference but you don't dare to do it alone?<br>
    Would you like to have advice and be accompanied?<br><br></em>
    Then Le Tremplin de SnowCamp is for you!<br><br>
    <b>Goal:</b><br>
    To offer free individual support to people wishing to start as a speaker.
    Our volunteer team of experienced coaches will help you during all the stages of preparing your first 20-minute conference,
    up to your speech in front of an audience during the Tremplin evening in Grenoble.<br><br>

    <em>And that's not all!</em> The Tremplin audience will choose 2 talks during the evening, which will be automatically selected for the
    SnowCamp conference program that will take place from ${date}.<br><br>

    <b>Principle of the Tremplin:</b><br>
    Among the proposals received, we will select 6 people to accompany them in defining the idea of their talk,
    structuring, realization and rehearsals until the D-Day of the conference.
    Each participant will benefit from personal coaching to assist him in the realization of his 20-minute talk, on the same categories as Snowcamp.<br><br>

    Whether you already have a well-defined talk idea, or you are simply very motivated by a theme but with a more vague idea,
    do not hesitate to submit your proposal and your motivations: the Tremplin is made for that!<br><br>
    
    <b>Who can participate?</b><br>
    The Tremplin CFP (call for papers) is reserved for first-time speakers who have never given a public conference (meetups or internal conferences do not count).
    `

  i18n.tremplin_previous_editions_title = 'Previous editions'
  i18n.tremplin_previous_editions_content = `Le Tremplin de Snowcamp was launched in 2023.<br><br>
    <p style="text-align: center;">
      <img src="/img/tremplin/tremplin_2023.jpg" width="100%">
      <small><em>Participants and coaches of the 2023 edition</em></small>
    </p>
    <br>
    Here are the recordings of the talks selected during previous editions, for those who have accepted their public broadcast :
    <ul>
      <li><a href="https://www.youtube.com/playlist?list=PLIYXcdwc2smE6928CjtzrqCI-sqNZBNDy" target="_blank">Tremplin 2023</a></li>
    </ul>`

  i18n.cfp_tracks_title = 'Talk categories'
  i18n.cfp_tracks_content = `<ul>
      <li><b>Cloud & DevOps :</b> everything related to tools, methods, and solutions for deploying, testing, and running applications.</li>
      <li><b>UX & Frontend :</b> everything related to the frontend of our apps: user experience, design, user interfaces, from approaches to tools and technologies, including web and mobile.</li>
      <li><b>Language, Backend & Security :</b> everything related to programming languages, the backend of our apps, and security: best practices, frameworks, performance...</li>
      <li><b>Architecture, Data & AI :</b> architecture models, design and development paradigms, data management, and everything related to artificial intelligence.</li>
      <li><b>Off-road :</b> everything that goes off the beaten track and does not fit into the other tracks, keeping in mind a technical audience of developers.</li>
    </ul>`
    
  return i18n;
}
