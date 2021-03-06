import React from 'react'
import {
  AdaptiveImage,
  AnimationBubbles,
  AnimationTyping,
  BigTitle,
  Box,
  ButtonLink,
  HeaderVideo,
  Layout,
  Link,
  MiddleTitle,
  Section,
  SliderFeature,
  SliderFeatureSlide,
  SliderTestimony,
  SliderTestimonySlide,
  Space,
  Subtitle,
  PostMain,
  Newsletter,
  Table,
  VideoPlaceholder,
  Video,
} from '../components'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
const IndexPage = () => (
  <Layout
    preFooter
    meta={{
      title:
        'AssoConnect Logiciel Association - Le Logiciel des Associations Tout-en-Un',
      description:
        'Le Logiciel Tout-en-Un des Associations ! Tous les Outils de Gestion de votre Association dans un Logiciel : Adhésions, Compta, Dons en Ligne, Site Web, Emails',
    }}
  >
    <HeaderVideo
      wave="components/headers/header-big/wave-asso.svg"
      title={
        <>
          Le logiciel de gestion <br />
          pour toutes les associations
        </>
      }
      subTitle={
        <>
          Notre <Link href="/">logiciel de gestion</Link> s'adapte à tous les
          secteurs associatifs : sportive, caritative, culturelle, loisirs,
          réseaux, omnisports, etc.
        </>
      }
      image={{
        src:
          'pages/associations/culturelle/tableau-bord-association-culturelle',
        alt: 'Tableau de bord Logiciel Gestion Association',
        width: '670',
        height: '500',
      }}
      videoId="7n612yo14o"
    />
    <VideoPlaceholder videoId="6yurbg1g3b" />
    <Video videoId="6yurbg1g3b" />
    <Section wave={{ direction: 'down' }}>
      <Newsletter
        buttonHref="https://app.assoconnect.com/sign-up?lang=en_US"
        title="The Holy Grail of Nonprofit Tips ✨"
        subtitle="Get all of the information you need to efficiently manage your nonprofit with our monthly newsletter."
      ></Newsletter>
    </Section>
    <Space size="big" />
    <Space size="big" />
    <Section wave={{ direction: 'down' }}>
      <Table
        columns={[
          {
            title: '',
            dataIndex: 'title',
            className: 'rc-table-title',
            width: 300,
          },
          {
            title: 'Offre gratuite',
            text: '0€',
            dataIndex: 'jeunePousse',
            width: 400,
          },
          {
            title: 'Offre complète',
            subTitle: 'A partir de 19€ / mois',
            dataIndex: 'bonzai',
            width: 400,
          },
        ]}
        datas={[
          {
            title: 'Comptabilité',
            jeunePousse: 'no',
            children: [
              { title: 'Saisie simplifiée', jeunePousse: 'no' },
              { title: 'Comptabilisation automatique', jeunePousse: 'no' },
              { title: 'Documents comptables', jeunePousse: 'no' },
              { title: 'Remise de chèques', jeunePousse: 'no' },
              { title: 'Rapprochement bancaire', jeunePousse: 'no' },
              { title: 'Tableau de bord financier', jeunePousse: 'no' },
              { title: 'Clôture comptable', jeunePousse: 'no' },
              { title: 'Emission du FEC', jeunePousse: 'no' },
              { title: 'Saisie comptable avancée', jeunePousse: 'no' },
            ],
          },
          {
            title: 'Gestion des membres',
            children: [
              'Base de membres centralisée',
              'Historique des membres',
              'Champs personnalisables',
              { title: 'Filtres et recherche avancée', jeunePousse: 'no' },
              { title: 'Groupes simples et dynamiques', jeunePousse: 'no' },
              'Envoi de messages directs',
              { title: 'Import et export massifs', jeunePousse: 'no' },
              {
                title: 'Gestion des personnes morales',
                subTitle: 'Voir prix ci-dessous',
                jeunePousse: 'no',
              },
            ],
          },
          {
            title: 'Adhésions',
            children: [
              'Création rapide de campagne',
              'Tarifs et moyens de paiement paramétrables',
              'Paiements 100% sécurisés',
              'Alimentation du CRM',
              'Envoi automatique de reçus et factures',
              {
                title: 'Saisie automatique en comptabilité',
                jeunePousse: 'no',
              },
              'Suivi des paiements',
              { title: 'Tarifs réservés ou publics', jeunePousse: 'no' },
              { title: 'Gestion des réductions', jeunePousse: 'no' },
            ],
          },
          {
            title: 'Dons',
            children: [
              'Dons ponctuels',
              'Dons libres ou suggérés',
              'Moyens de paiement paramétrables',
              'Paiements 100% sécurisés',
              "Collecte d'informations des donateurs",
              {
                title: 'Saisie automatique en comptabilité',
                jeunePousse: 'no',
              },
              'Suivi des paiements',
              'Page personnalisée',
              'Emission et envoi des reçus fiscaux',
              'Enrichissement du CRM',
            ],
          },
          {
            title: 'Site internet',
            jeunePousse: 'no',
            children: [
              { title: 'Facile à créer et administrer', jeunePousse: 'no' },
              { title: '7 modèles disponibles', jeunePousse: 'no' },
              { title: 'Nombre illimité de pages', jeunePousse: 'no' },
              {
                title: 'Pages automatiques et personnalisées',
                jeunePousse: 'no',
              },
              {
                title: 'Aucune compétence informatique nécessaire',
                jeunePousse: 'no',
              },
              {
                title: 'Affichage sur mobile et tablette',
                jeunePousse: 'no',
              },
              {
                title: 'Optimisation référencement naturel',
                jeunePousse: 'no',
              },
              { title: 'URL personnalisable', jeunePousse: 'no' },
              { title: 'Intranet et accès réservés', jeunePousse: 'no' },
              { title: 'Statistiques', jeunePousse: 'no' },
            ],
          },
          {
            title: 'Communication',
            jeunePousse: 'no',
            children: [
              { title: "Module complet d'emailing", jeunePousse: 'no' },
              { title: 'Lien avec la base de données', jeunePousse: 'no' },
              { title: 'Champs personnalisables', jeunePousse: 'no' },
              { title: 'Sondages', jeunePousse: 'no' },
              { title: 'Galeries photos', jeunePousse: 'no' },
              { title: 'Articles et Documents', jeunePousse: 'no' },
              { title: 'Agenda intelligent', jeunePousse: 'no' },
              { title: 'Annuaire', jeunePousse: 'no' },
              { title: 'Lien avec les réseaux sociaux', jeunePousse: 'no' },
            ],
          },
          {
            title: 'Billetterie',
            children: [
              "Page dédiée à l'événement",
              'Personnalisation des billets',
              'Tarifs et moyens de paiement paramétrables',
              { title: 'Evénement privé ou public', jeunePousse: 'no' },
              'Suivi des inscriptions',
              'Suivi des paiements',
              "Scan des billets à l'entrée",
              {
                title: 'Saisie automatique en comptabilité',
                jeunePousse: 'no',
              },
              'Reçus et factures automatiques',
              { title: "Intégration à l'agenda", jeunePousse: 'no' },
            ],
          },
          {
            title: 'Boutique en ligne',
            jeunePousse: 'no',
            children: [
              { title: 'Page dédiée', jeunePousse: 'no' },
              {
                title: 'Tarifs et moyens de paiement paramétrables',
                jeunePousse: 'no',
              },
              { title: 'Suivi des stocks', jeunePousse: 'no' },
              { title: 'Lien avec la comptabilité', jeunePousse: 'no' },
              { title: 'Reçus et factures automatiques', jeunePousse: 'no' },
              { title: 'Intégration au site internet', jeunePousse: 'no' },
            ],
          },
          {
            title: 'Outils collaboratifs',
            children: [
              "Nombre illimité d'administrateurs",
              {
                title: 'Répartition des rôles sur les modules',
                jeunePousse: 'no',
              },
              { title: 'Autonomie des groupes avancés', jeunePousse: 'no' },
              'Passations simplifiées',
            ],
          },
          {
            title: 'Logiciel en ligne',
            children: [
              'Données accessibles en permanence',
              'Accès sécurisés',
              'Sauvegardes automatiques',
              'Confidentialité des données',
              'Evolutions et améliorations incluses',
              'Accessible sur tous les supports',
            ],
          },
        ]}
      />
    </Section>
    <Section wave={{ direction: 'down' }}>
      <PostMain />
      <Box width={1}>
        <MiddleTitle>Gagnez du temps au quotidien</MiddleTitle>
        <Subtitle>50 outils pour gérer facilement votre association</Subtitle>
        <Space size="big" />
        <SliderFeature
          yado={{
            image: 'yado-look-up',
            position: '',
            alt: 'yado assoconnect',
          }}
        >
          <SliderFeatureSlide
            image={{ link: 'accounting', alt: "comptabilité d'association" }}
            title="Comptabilité"
            text="Tenez votre comptabilité sereinement grâce à notre module complet et simple à utiliser. Pas besoin d'être un expert pour ça !"
            href="/fonctionnalites/logiciel-comptabilite-association/"
            buttonText="En savoir plus"
          />
          <SliderFeatureSlide
            image={{
              link: 'members',
              alt: 'Gestion des membres pour association',
            }}
            title="Membres"
            text="Remplacez votre traditionnel Excel par une base de membres claire, en ligne et à jour en permanence !"
            href="/fonctionnalites/gestion-membres-association/"
          />
          <SliderFeatureSlide
            image={{ link: 'membership', alt: 'Adhésions pour association' }}
            title="Adhésions"
            text="Passez enfin des rentrées associatives sereines en gérant les adhésions en ligne. Finies les centaines de chèques à encaisser !"
            href="/fonctionnalites/adhesions/"
          />
          <SliderFeatureSlide
            image={{ link: 'donations', alt: 'Dons pour association' }}
            title="Dons"
            text="Développez les sources de financement de votre association loi 1901 en lançant des collectes de dons en ligne."
            href="/fonctionnalites/logiciel-dons/"
          />
          <SliderFeatureSlide
            image={{ link: 'website', alt: 'Site web pour association' }}
            title="Site internet"
            text="Créez facilement un joli site internet à l'image de votre association, sans avoir besoin de compétence technique !"
            href="/fonctionnalites/site-association/"
          />
          <SliderFeatureSlide
            image={{
              link: 'communication',
              alt: 'Communication pour association',
            }}
            title="Communication"
            text="Tous vos outils de communication centralisés à un endroit unique : emailing, blog, publipostage… C'est vous qui choisissez !"
            href="/fonctionnalites/communication-association/"
          />
        </SliderFeature>
        <Space size="big" className="hidden-mobile" />
        <Space size="big" className="hidden-mobile" />
      </Box>
    </Section>{' '}
    <Space size="big" /> <Space size="big" />
    <Space size="big" /> <Space size="big" />
    <Space size="big" />
    <div style={{ background: 'black', width: '500px', margin: 'auto' }}> </div>
    <Space size="big" /> <Space size="big" />
    <Space size="big" /> <Space size="big" />
    <Space size="big" />
    <Section wave={{ color: 'blue', direction: 'up' }}>
      <Box width={1 / 2} overflowLeft>
        <AdaptiveImage src="pages/index/dashboard" alt="logiciel association" />
      </Box>
      <Box width={1 / 2}>
        <BigTitle color="yellow" align="left">
          Un logiciel tout-en-un pour
        </BigTitle>
        <BigTitle align="left" minHeight="3em" display="block">
          <AnimationTyping
            data={[
              "tous les types d'associations",
              'les associations sportives',
              'les associations en réseau',
              'les associations étudiantes',
              'les fondations',
              'les associations médico-sociales',
              'les associations de loisirs',
              'les associations professionnelles',
              'les clubs de sport',
              'les fonds de dotation',
              'les têtes de réseaux associatifs',
              'les associations caritatives',
              "les associations de protection de l'environnement",
              'les associations culturelles',
              'les fondations',
              'les associations politiques',
              "les associations d'éducation",
              'les associations religieuses',
            ]}
          />
        </BigTitle>
        <Space size="medium" />
        <ButtonLink
          href="/associations/logiciel-type-association/"
          theme="white"
          button={{ size: 'big' }}
        >
          et pour mon asso ?
        </ButtonLink>
        <Space size="medium" />
      </Box>
    </Section>
    <Section>
      <Box width={2 / 5}>
        <BigTitle align="left" color="yellow">
          <LazyLoadComponent>10000</LazyLoadComponent> associations <br />
          <BigTitle align="left" color="blue" tag="span">
            de 8 à 800 000 membres
          </BigTitle>
        </BigTitle>
        <Subtitle align="left">nous font confiance</Subtitle>
        <Space size="medium" />
        <Box>
          <Link href="https://www.appvizer.fr/organisations/association/assoconnect#reviews">
            <AdaptiveImage
              src="pages/index/appvizer_google"
              alt="Avis Clients AssoConnect"
              align="left"
            />
          </Link>
        </Box>
        <Space size="big" />
      </Box>
      <Box width={3 / 5}>
        <AnimationBubbles
          datas={[
            {
              text: `Bientôt votre asso !`,
              backgroundColor: 'turquoise',
              size: 1,
            },
            {
              image: 'common/clients/organizations/rotary-international',
              alt: 'Rotary International',
              size: 1,
            },
            {
              image: 'common/clients/organizations/petit-coeur-de-beurre',
              alt: 'Petit Coeur de Beurre',
              size: 2,
            },
            {
              image: 'common/clients/organizations/utopia56-150',
              alt: 'Utopia 56',
              size: 1,
            },
            {
              image: 'common/clients/organizations/phenix',
              alt: 'Phenix',
              size: 2,
            },
            {
              image: 'common/clients/organizations/ebullescence',
              alt: 'Ebullescence',
              size: 3,
            },
            {
              image: 'common/clients/organizations/amf',
              alt: 'Association Montessori de France',
              size: 2,
            },
            {
              image:
                'common/clients/organizations/federation_protestante_de_france',
              alt: 'Fédération Protestante de France',
              size: 3,
            },

            {
              image: 'common/clients/organizations/chambre-pro-du-conseil',
              alt: 'Chambre professionnelles du Conseil',
              size: 2,
            },
            {
              image:
                'common/clients/organizations/federation-francaise-de-danse',
              alt: 'Fédération Française de Danse',
              size: 1,
            },
            {
              image: 'common/clients/organizations/amis-nature150',
              alt: 'Amis de la Nature',
              size: 3,
            },
            {
              image: 'common/clients/organizations/ff-triathlon',
              alt: 'Fédération Française de Triathlon',
              size: 1,
            },
            {
              image: 'common/clients/organizations/generation-mouvement',
              alt: 'Génération mouvement',
              size: 2,
            },
            {
              image: 'common/clients/organizations/sos-racisme',
              alt: 'SOS Racisme',
              size: 1,
            },
            {
              image: 'common/clients/organizations/timbao',
              alt: 'Timbo',
              size: 3,
            },
            {
              image: 'common/clients/organizations/ffepgv150',
              alt:
                "Fédération française d'éducation physique et de gymnastique volontaire",
              size: 2,
            },
          ]}
        />
      </Box>
    </Section>
    <Section wave={{ direction: 'up' }}>
      <Box align="center">
        <MiddleTitle>Les associations nous adorent</MiddleTitle>
        <Subtitle>Découvrez les témoignages de nos clients</Subtitle>
        <Space size="big" />
        <SliderTestimony>
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/ffmas-sophie',
              name: 'Sophie Nouvel',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Note Google',
              text:
                "La rencontre avec AssoConnect a été le déclencheur de notre transformation digitale, incontournable aujourd’hui pour rester connecté aux environnements actuels. \n Un grand merci à AssoConnect d’être là ! L'essayer, c’est l’adopter !",
            }}
            organisation={{
              logo: 'common/clients/organizations/ffmas',
              name: 'FFMAS',
              resume:
                'Association en réseau / Membres : 550 / Lieu : Paris(75)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/amis-nature-nicolas',
              name: 'Nicolas Quero-Rio',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Note Google',
              text:
                "Assoconnect nous permet de connaître en temps réel notre nombre d'adhérents et de faire gagner du temps à nos associations locales en automatisant certaines tâches : comptabilité, gestion des adhérents, envoi de lettres d'information... \n Il assure aussi la sécurité de nos données et leur accessibilité en tout temps, grâce à un simple navigateur internet.",
            }}
            organisation={{
              logo: 'common/clients/organizations/amis-nature150',
              name: 'Les Amis de la Nature',
              resume:
                'Association Environnementale / Membres : 9000 / Lieu : Montreuil (93)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/afs-jmm',
              name: 'Jean-Marc Maurice',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Note Google',
              text:
                "Enfin un logiciel complet !! \n Assoconnect permet à tous nos membres d'intervenir quelque soit le lieu ou l'heure dans son domaine de compétence : de la comptabilité, à la gestion des adhésions, et à la communication sous toutes ses formes (mailing, site internet, etc.) tout en étant certain de travailler sur des renseignements provenant de la toute dernière mise à jour.",
            }}
            organisation={{
              logo: 'common/clients/organizations/afs',
              name: 'AFS - Agroécologie France Sénégal',
              resume:
                'Association caritative / Membres : 180 / Lieu : Saint-Martin du Vivier (76)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/forme-loisirs-francoise',
              name: 'Françoise Noël',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Note Google',
              text: `Gérée avec AssoConnect, notre association Forme et Loisirs a retrouvé dynamisme et modernité. \n L'équipe AssoConnect est géniale : interrogée en cas de soucis, elle apporte une réponse rapide, efficace, sympathique. Choisir AssoConnect, c'est travailler en confiance et sérénité.`,
            }}
            organisation={{
              logo: 'common/clients/organizations/forme-loisirs',
              name: 'Forme et Loisirs',
              resume:
                'Association de Loisirs / Membres : 420 / Lieu : Chaumont (52)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/mouette-benoit',
              name: 'Benoit Marcesche',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Net Promoter Score',
              text: `Le paiement et les adhésions en ligne nous permettent de sécuriser nos inscriptions, de supprimer les erreurs de recopie de formulaires, et de limiter le travail administratif de saisie et d'enregistrement des paiements. AssoConnect est simple d'utilisation et offre un vrai support, via le blog et l'assistance en ligne. Bravo et merci !!`,
            }}
            organisation={{
              logo: 'common/clients/organizations/mouette',
              name: 'La Mouette Sinagote',
              resume: 'Association Sportive / Membres : 250 / Lieu : Séné (56)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/acs-franck',
              name: 'Franck Gérald',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Net Promoter Score',
              text: `Nous sommes très heureux d'avoir fait confiance à AssoConnect : la plateforme évolue au mieux des besoins de notre association, que ce soit pour la gestion de nos fichiers, pour notre comptabilité ou notre communication.`,
            }}
            organisation={{
              logo: 'common/clients/organizations/acs',
              name: 'ACS France',
              resume:
                'Association Médico-Sociale / Membres : 3200 / Lieu : Nice (06)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/bas-masques-vincent',
              name: 'Vincent Van Laethem',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Note Google',
              text:
                "Super projet ! Merci infiniment pour ce que vous faites pour la communauté associative. Elle avait bien besoin qu'on s'occupe un peu d'elle :)",
            }}
            organisation={{
              logo: 'common/clients/organizations/bas-masques',
              name: 'Bas les Masques',
              resume:
                'Association culturelle / Membres : 350 / Lieu : Belgique',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/amis-voiliers-michel',
              name: 'Michel Balique',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Note Google',
              text: `Cette plateforme traite tous les problèmes de gestion des associations. L'interface est très agréable à utiliser. `,
            }}
            organisation={{
              logo: 'common/clients/organizations/amis-voiliers',
              name: 'Amis des Grands Voiliers',
              resume:
                'Association de Loisirs / Membres : 400 / Lieu : Paris (75)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/amam-stephane',
              name: 'Stéphane Dorigo',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Net Promoter Score',
              text: `Grâce à son ensemble de fonctionnalités très complet, AssoConnect nous permet de gérer notre club d’arts martiaux multi-sections. Quel bonheur de n’avoir qu’un seul outil en ligne pour tout faire : Gestion des adhérents, évènements, site internet, communication avec nos adhérents, les statistiques, etc. Le tout est bien pensé pour une utilisation agréable et parfaitement adaptée aux clubs de sport et autres associations. Un must du genre !`,
            }}
            organisation={{
              logo: 'common/clients/organizations/amam',
              name: 'AMAM',
              resume: 'Club Omnisports / Membres : 330 / Lieu : Mennecy (91)',
            }}
          />
          <SliderTestimonySlide
            user={{
              picture: 'common/clients/people/espci-corinne',
              name: 'Corinne Degoutte',
              position: '',
            }}
            testimony={{
              note: 5,
              origin: 'Note Google',
              text: `Nous sommes très satisfaits de l'application dans son ensemble et les améliorations apportées régulièrement. En tant que fonds de dotation, nous utilisons principalement les dons, l'emailing et le site internet. Nous avons bien progressé dans l'utilisation de ces modules et nous faisons mieux chaque jour, à mesure que nous découvrons les fonctionnalités.`,
            }}
            organisation={{
              logo: 'common/clients/organizations/espci',
              name: 'Fonds ESPCI Paris',
              resume: 'Fonds de dotation / Membres : 460 / Lieu : Paris (75)',
            }}
          />
        </SliderTestimony>
        <Space size="medium" />
      </Box>
    </Section>
  </Layout>
)

export default IndexPage
