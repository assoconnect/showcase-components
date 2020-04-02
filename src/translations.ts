interface ITranslations {
  [key: string]: string
}

const translations: ITranslations = {
  inputbutton_validation_required: 'Veuillez indiquer une adresse email.',
  inputbutton_validation_matches:
    'Cette adresse email contient des caractères invalides.',
  inputbutton_validation_email: 'Cette adresse email est incorrecte.',
  inputbutton_consent:
    "J'autorise AssoConnect à enregistrer et utiliser mes données personnelles.",
  inputbutton_placeholder: 'Adresse mail',
  inputbutton_text: 'essayer gratuitement',
  videobutton_text: 'Voir la vidéo',
  footer_copyright: 'AssoConnect est conçu avec 💙 à Paris',
  footer_ready: 'Prêt à vous lancer ?',
}

export default translations
