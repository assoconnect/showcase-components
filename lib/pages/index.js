"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCountTo = _interopRequireDefault(require("react-count-to"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var headerHomeCards = [{
  title: 'Membres',
  image: 'members'
}, {
  title: 'Comptabilité',
  image: 'accounting'
}, {
  title: 'Adhésions',
  image: 'membership'
}, {
  title: 'Dons',
  image: 'donations'
}, {
  title: 'Site internet',
  image: 'website'
}, {
  title: 'Emailing',
  image: 'emailing'
}, {
  title: 'Billetterie',
  image: 'ticketing'
}, {
  title: 'Boutique',
  image: 'deal'
}];

var IndexPage = function IndexPage() {
  return /*#__PURE__*/_react["default"].createElement(_components.Layout, {
    preFooter: true,
    meta: {
      title: 'AssoConnect Logiciel Association - Le Logiciel des Associations Tout-en-Un',
      description: 'Le Logiciel Tout-en-Un des Associations ! Tous les Outils de Gestion de votre Association dans un Logiciel : Adhésions, Compta, Dons en Ligne, Site Web, Emails'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.HeaderHome, {
    cards: headerHomeCards,
    subTitle: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Changez le monde,", /*#__PURE__*/_react["default"].createElement("br", null), "AssoConnect s'occupe du reste !"),
    title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Le logiciel tout-en-un", /*#__PURE__*/_react["default"].createElement("br", null), "pour g\xE9rer simplement", /*#__PURE__*/_react["default"].createElement("br", null), "votre association"),
    videoId: "6yurbg1g3b"
  }), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.Section, {
    wave: {
      direction: 'down'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_components.MiddleTitle, null, "Gagnez du temps au quotidien"), /*#__PURE__*/_react["default"].createElement(_components.Subtitle, null, "50 outils pour g\xE9rer facilement votre association"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeature, {
    yado: {
      image: 'yado-look-up',
      position: '',
      alt: 'yado assoconnect'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'accounting',
      alt: "comptabilité d'association"
    },
    title: "Comptabilit\xE9",
    text: "Tenez votre comptabilit\xE9 sereinement gr\xE2ce \xE0 notre module complet et simple \xE0 utiliser. Pas besoin d'\xEAtre un expert pour \xE7a !",
    href: "/fonctionnalites/logiciel-comptabilite-association/",
    buttonText: "En savoir plus"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'members',
      alt: 'Gestion des membres pour association'
    },
    title: "Membres",
    text: "Remplacez votre traditionnel Excel par une base de membres claire, en ligne et \xE0 jour en permanence !",
    href: "/fonctionnalites/gestion-membres-association/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'membership',
      alt: 'Adhésions pour association'
    },
    title: "Adh\xE9sions",
    text: "Passez enfin des rentr\xE9es associatives sereines en g\xE9rant les adh\xE9sions en ligne. Finies les centaines de ch\xE8ques \xE0 encaisser !",
    href: "/fonctionnalites/adhesions/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'donations',
      alt: 'Dons pour association'
    },
    title: "Dons",
    text: "D\xE9veloppez les sources de financement de votre association loi 1901 en lan\xE7ant des collectes de dons en ligne.",
    href: "/fonctionnalites/logiciel-dons/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'website',
      alt: 'Site web pour association'
    },
    title: "Site internet",
    text: "Cr\xE9ez facilement un joli site internet \xE0 l'image de votre association, sans avoir besoin de comp\xE9tence technique !",
    href: "/fonctionnalites/site-association/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'communication',
      alt: 'Communication pour association'
    },
    title: "Communication",
    text: "Tous vos outils de communication centralis\xE9s \xE0 un endroit unique : emailing, blog, publipostage\u2026 C'est vous qui choisissez !",
    href: "/fonctionnalites/communication-association/"
  })), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big",
    className: "hidden-mobile"
  }), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big",
    className: "hidden-mobile"
  }))), /*#__PURE__*/_react["default"].createElement(_components.Section, {
    wave: {
      color: 'blue',
      direction: 'up'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 1 / 2,
    overflowLeft: true
  }, /*#__PURE__*/_react["default"].createElement(_components.AdaptiveImage, {
    src: "pages/index/dashboard",
    alt: "logiciel association"
  })), /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    color: "yellow",
    align: "left"
  }, "Un logiciel tout-en-un pour"), /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    align: "left",
    minHeight: "3em",
    display: "block"
  }, /*#__PURE__*/_react["default"].createElement(_components.AnimationTyping, {
    data: ["tous les types d'associations", 'les associations sportives', 'les associations en réseau', 'les associations étudiantes', 'les fondations', 'les associations médico-sociales', 'les associations de loisirs', 'les associations professionnelles', 'les clubs de sport', 'les fonds de dotation', 'les têtes de réseaux associatifs', 'les associations caritatives', "les associations de protection de l'environnement", 'les associations culturelles', 'les fondations', 'les associations politiques', "les associations d'éducation", 'les associations religieuses']
  })), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_components.ButtonLink, {
    href: "/associations/logiciel-type-association/",
    theme: "white",
    button: {
      size: 'big'
    }
  }, "et pour mon asso ?"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }))), /*#__PURE__*/_react["default"].createElement(_components.Section, null, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 2 / 5
  }, /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    align: "left",
    color: "yellow"
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, null, /*#__PURE__*/_react["default"].createElement(_reactCountTo["default"], {
    to: 10000,
    speed: 2000
  })), ' ', "associations ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    align: "left",
    color: "blue",
    tag: "span"
  }, "de 8 \xE0 800 000 membres")), /*#__PURE__*/_react["default"].createElement(_components.Subtitle, {
    align: "left"
  }, "nous font confiance"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_components.Box, null, /*#__PURE__*/_react["default"].createElement(_components.Link, {
    href: "https://www.appvizer.fr/organisations/association/assoconnect#reviews"
  }, /*#__PURE__*/_react["default"].createElement(_components.AdaptiveImage, {
    src: "pages/index/appvizer_google",
    alt: "Avis Clients AssoConnect",
    align: "left"
  }))), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  })), /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 3 / 5
  }, /*#__PURE__*/_react["default"].createElement(_components.AnimationBubbles, {
    datas: [{
      text: "Bient\xF4t votre asso !",
      backgroundColor: 'turquoise',
      size: 1
    }, {
      image: 'common/clients/organizations/rotary-international',
      alt: 'Rotary International',
      size: 1
    }, {
      image: 'common/clients/organizations/petit-coeur-de-beurre',
      alt: 'Petit Coeur de Beurre',
      size: 2
    }, {
      image: 'common/clients/organizations/utopia56-150',
      alt: 'Utopia 56',
      size: 1
    }, {
      image: 'common/clients/organizations/phenix',
      alt: 'Phenix',
      size: 2
    }, {
      image: 'common/clients/organizations/ebullescence',
      alt: 'Ebullescence',
      size: 3
    }, {
      image: 'common/clients/organizations/amf',
      alt: 'Association Montessori de France',
      size: 2
    }, {
      image: 'common/clients/organizations/federation_protestante_de_france',
      alt: 'Fédération Protestante de France',
      size: 3
    }, {
      image: 'common/clients/organizations/chambre-pro-du-conseil',
      alt: 'Chambre professionnelles du Conseil',
      size: 2
    }, {
      image: 'common/clients/organizations/federation-francaise-de-danse',
      alt: 'Fédération Française de Danse',
      size: 1
    }, {
      image: 'common/clients/organizations/amis-nature150',
      alt: 'Amis de la Nature',
      size: 3
    }, {
      image: 'common/clients/organizations/ff-triathlon',
      alt: 'Fédération Française de Triathlon',
      size: 1
    }, {
      image: 'common/clients/organizations/generation-mouvement',
      alt: 'Génération mouvement',
      size: 2
    }, {
      image: 'common/clients/organizations/sos-racisme',
      alt: 'SOS Racisme',
      size: 1
    }, {
      image: 'common/clients/organizations/timbao',
      alt: 'Timbo',
      size: 3
    }, {
      image: 'common/clients/organizations/ffepgv150',
      alt: "Fédération française d'éducation physique et de gymnastique volontaire",
      size: 2
    }]
  }))), /*#__PURE__*/_react["default"].createElement(_components.Section, {
    wave: {
      direction: 'up'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_components.MiddleTitle, null, "Les associations nous adorent"), /*#__PURE__*/_react["default"].createElement(_components.Subtitle, null, "D\xE9couvrez les t\xE9moignages de nos clients"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimony, null, /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/ffmas-sophie',
      name: 'Sophie Nouvel',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "La rencontre avec AssoConnect a été le déclencheur de notre transformation digitale, incontournable aujourd’hui pour rester connecté aux environnements actuels. \n Un grand merci à AssoConnect d’être là ! L'essayer, c’est l’adopter !"
    },
    organisation: {
      logo: 'common/clients/organizations/ffmas',
      name: 'FFMAS',
      resume: 'Association en réseau / Membres : 550 / Lieu : Paris(75)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/amis-nature-nicolas',
      name: 'Nicolas Quero-Rio',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Assoconnect nous permet de connaître en temps réel notre nombre d'adhérents et de faire gagner du temps à nos associations locales en automatisant certaines tâches : comptabilité, gestion des adhérents, envoi de lettres d'information... \n Il assure aussi la sécurité de nos données et leur accessibilité en tout temps, grâce à un simple navigateur internet."
    },
    organisation: {
      logo: 'common/clients/organizations/amis-nature150',
      name: 'Les Amis de la Nature',
      resume: 'Association Environnementale / Membres : 9000 / Lieu : Montreuil (93)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/afs-jmm',
      name: 'Jean-Marc Maurice',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Enfin un logiciel complet !! \n Assoconnect permet à tous nos membres d'intervenir quelque soit le lieu ou l'heure dans son domaine de compétence : de la comptabilité, à la gestion des adhésions, et à la communication sous toutes ses formes (mailing, site internet, etc.) tout en étant certain de travailler sur des renseignements provenant de la toute dernière mise à jour."
    },
    organisation: {
      logo: 'common/clients/organizations/afs',
      name: 'AFS - Agroécologie France Sénégal',
      resume: 'Association caritative / Membres : 180 / Lieu : Saint-Martin du Vivier (76)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/forme-loisirs-francoise',
      name: 'Françoise Noël',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "G\xE9r\xE9e avec AssoConnect, notre association Forme et Loisirs a retrouv\xE9 dynamisme et modernit\xE9. \n L'\xE9quipe AssoConnect est g\xE9niale : interrog\xE9e en cas de soucis, elle apporte une r\xE9ponse rapide, efficace, sympathique. Choisir AssoConnect, c'est travailler en confiance et s\xE9r\xE9nit\xE9."
    },
    organisation: {
      logo: 'common/clients/organizations/forme-loisirs',
      name: 'Forme et Loisirs',
      resume: 'Association de Loisirs / Membres : 420 / Lieu : Chaumont (52)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/mouette-benoit',
      name: 'Benoit Marcesche',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Net Promoter Score',
      text: "Le paiement et les adh\xE9sions en ligne nous permettent de s\xE9curiser nos inscriptions, de supprimer les erreurs de recopie de formulaires, et de limiter le travail administratif de saisie et d'enregistrement des paiements. AssoConnect est simple d'utilisation et offre un vrai support, via le blog et l'assistance en ligne. Bravo et merci !!"
    },
    organisation: {
      logo: 'common/clients/organizations/mouette',
      name: 'La Mouette Sinagote',
      resume: 'Association Sportive / Membres : 250 / Lieu : Séné (56)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/acs-franck',
      name: 'Franck Gérald',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Net Promoter Score',
      text: "Nous sommes tr\xE8s heureux d'avoir fait confiance \xE0 AssoConnect : la plateforme \xE9volue au mieux des besoins de notre association, que ce soit pour la gestion de nos fichiers, pour notre comptabilit\xE9 ou notre communication."
    },
    organisation: {
      logo: 'common/clients/organizations/acs',
      name: 'ACS France',
      resume: 'Association Médico-Sociale / Membres : 3200 / Lieu : Nice (06)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/bas-masques-vincent',
      name: 'Vincent Van Laethem',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Super projet ! Merci infiniment pour ce que vous faites pour la communauté associative. Elle avait bien besoin qu'on s'occupe un peu d'elle :)"
    },
    organisation: {
      logo: 'common/clients/organizations/bas-masques',
      name: 'Bas les Masques',
      resume: 'Association culturelle / Membres : 350 / Lieu : Belgique'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/amis-voiliers-michel',
      name: 'Michel Balique',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Cette plateforme traite tous les probl\xE8mes de gestion des associations. L'interface est tr\xE8s agr\xE9able \xE0 utiliser. "
    },
    organisation: {
      logo: 'common/clients/organizations/amis-voiliers',
      name: 'Amis des Grands Voiliers',
      resume: 'Association de Loisirs / Membres : 400 / Lieu : Paris (75)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/amam-stephane',
      name: 'Stéphane Dorigo',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Net Promoter Score',
      text: "Gr\xE2ce \xE0 son ensemble de fonctionnalit\xE9s tr\xE8s complet, AssoConnect nous permet de g\xE9rer notre club d\u2019arts martiaux multi-sections. Quel bonheur de n\u2019avoir qu\u2019un seul outil en ligne pour tout faire : Gestion des adh\xE9rents, \xE9v\xE8nements, site internet, communication avec nos adh\xE9rents, les statistiques, etc. Le tout est bien pens\xE9 pour une utilisation agr\xE9able et parfaitement adapt\xE9e aux clubs de sport et autres associations. Un must du genre !"
    },
    organisation: {
      logo: 'common/clients/organizations/amam',
      name: 'AMAM',
      resume: 'Club Omnisports / Membres : 330 / Lieu : Mennecy (91)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/espci-corinne',
      name: 'Corinne Degoutte',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Nous sommes tr\xE8s satisfaits de l'application dans son ensemble et les am\xE9liorations apport\xE9es r\xE9guli\xE8rement. En tant que fonds de dotation, nous utilisons principalement les dons, l'emailing et le site internet. Nous avons bien progress\xE9 dans l'utilisation de ces modules et nous faisons mieux chaque jour, \xE0 mesure que nous d\xE9couvrons les fonctionnalit\xE9s."
    },
    organisation: {
      logo: 'common/clients/organizations/espci',
      name: 'Fonds ESPCI Paris',
      resume: 'Fonds de dotation / Membres : 460 / Lieu : Paris (75)'
    }
  })), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }))));
};

var _default = IndexPage;
exports["default"] = _default;