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
    i18n.venue_desc = 'The schedule can be found here:';
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
    i18n.sponsor_places_conferences = (num: number) => `Free tickets to attend the sessions (${num} free tickets)`;
    i18n.sponsor_places_booth = (num: number) => `Free tickets for the sponsors space only (${num } free tickets)`;
    i18n.sponsor_places_speakers_dinner = (num: number) => `Places for the <em>speakers dinner</em> (${num} persons)`;
    i18n.sponsor_booth_area = (area: string) => `Booth in the exhibition hall (${area})`;
    i18n.sponsor_logo_pass = 'Your logo on the attendees pass';
    i18n.sponsor_logo_website = 'Your logo on the SnowCamp website';
    i18n.sponsor_logo_billposting  = 'Your logo visible on the location of the conference';
    i18n.sponsor_logo_pass_strap = 'Your logo on pass straps';
    i18n.sponsor_keynote_talk = (duration: number) => `Free keynote (${duration })`;
    i18n.snowcamp_logo_usage = 'Authorisation to use the SnowCamp logo for your communications';
    i18n.sponsorship_prospectus = 'Sponsorship Prospectus';
    i18n.contact_us = 'Contact us';
    i18n.sponsor_desc = `<p class="text dark-background">
        Snowcamp is organized by a group of geeky volonteers. Their only motivation
        is to propose a unique conference gathering innovation and research.
      </p>
      <p class="text dark-background emph">
        To make a success of this adventure, we need you.
      </p>
      <p class="text dark-background">
        In return, we offer you a large visibility, on the web and during the event.
        It's the perfect opportunity to meet developers from Grenoble,
        demonstrate your products and services, and to make yourself known.
      </p>
      <p class="text dark-background">
        Sponsoring campaign opens the ${sponsors.sponsorship.open_datetime.en}.
        <br>Use <a href="${sponsors.sponsorship.subscribe_link}">form to subscribe</a>
      </p>`;

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
    return i18n;
  }    
  