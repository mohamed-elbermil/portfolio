import React from 'react';
import './LegalNotice.css';
import Navbar from '../../components/Navbar/Navbar';

const LegalNotice = () => (
  <>
    <Navbar/>
    <div className="legal-notice-container">
      <h1>Mentions légales et politique de confidentialité</h1>

      <p>
        L'entreprise individuelle Mohamed EL BERMIL, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
      </p>
      <p>
        Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site : <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">https://www.cnil.fr/</a>
      </p>
      <p>
        La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent. La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site et jusqu'à ce qu'une nouvelle version la remplace.
      </p>

      <h2>Article 1 - Mentions légales</h2>
      <h3>1.1 Site :</h3>
      <p>mohamedelbermil</p>

      <h3>1.2 Éditeur :</h3>
      <p>
        L'entreprise individuelle Mohamed EL BERMIL<br />
        9 allée des saphirs, ST PIERRE DE CHANDIEU<br />
        Téléphone : 0612173910<br />
        Email : <a href="mailto:melbermil@outlook.fr">melbermil@outlook.fr</a>
      </p>

      <h3>1.3 Hébergeur :</h3>
      <p>
        Hébergé par Vercel, siège social à Covina, 440 N Barranca Avenue #4133.
      </p>

      <h2>Article 2 - Accès au site</h2>
      <p>
        L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations qui y figurent à des fins commerciales, politiques ou publicitaires.
      </p>

      <h2>Article 3 - Contenu du site</h2>
      <p>
        Tous les éléments du site (textes, images, vidéos, sons, logiciels, etc.) sont protégés par les lois sur la propriété intellectuelle. Toute reproduction ou utilisation sans l'accord écrit de l'éditeur est interdite.
      </p>

      <h2>Article 4 - Gestion du site</h2>
      <ul>
        <li>Suspension ou limitation de l'accès au site.</li>
        <li>Suppression de toute information perturbatrice.</li>
        <li>Mises à jour du site.</li>
      </ul>

      <h2>Article 5 - Responsabilités</h2>
      <p>
        L'éditeur ne peut être tenu responsable en cas de panne, de difficulté de connexion ou d'attaque virale. Vous êtes responsable de votre propre matériel et navigation.
      </p>

      <h2>Article 6 - Liens hypertextes</h2>
      <p>
        Les liens vers le site sont autorisés. L'éditeur n'a cependant aucun contrôle sur les contenus liés.
      </p>

      <h2>Article 7 - Collecte et protection des données</h2>
      <p>
        Données collectées : nom, prénom, email, téléphone. Elles sont utilisées pour la gestion client et les commandes.
      </p>

      <h2>Article 8 - Droits sur les données</h2>
      <p>
        Conformément au RGPD, vous disposez de droits d’accès, de rectification, de suppression, de limitation, d’opposition et de portabilité. Contact : <a href="mailto:melbermil@outlook.fr">melbermil@outlook.fr</a>
      </p>

      <h2>Article 9 - Utilisation des données</h2>
      <ul>
        <li>Utilisation de la plateforme</li>
        <li>Assistance utilisateur</li>
        <li>Publicité ciblée</li>
        <li>Prévention des fraudes</li>
        <li>Litiges</li>
      </ul>

      <h2>Article 10 - Conservation des données</h2>
      <p>
        Les données sont conservées aussi longtemps que nécessaire pour fournir les services ou respecter les obligations légales.
      </p>

      <h2>Article 11 - Partage avec des tiers</h2>
      <p>
        Les données peuvent être partagées avec des prestataires dans l’UE uniquement dans certains cas (assistance, publicité, etc.).
      </p>

      <h2>Article 12 - Offres commerciales</h2>
      <p>
        Vous pouvez vous opposer à la réception d’offres en envoyant un email à <a href="mailto:melbermil@outlook.fr">melbermil@outlook.fr</a>.
      </p>

      <h2>Article 13 - Cookies</h2>
      <p>
        Des cookies peuvent être utilisés pour améliorer le service. Consentement valable 13 mois. Voir <a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi" target="_blank" rel="noopener noreferrer">la CNIL</a>.
      </p>

      <h2>Article 14 - Photographies</h2>
      <p>
        Les images de produits sont non contractuelles.
      </p>

      <h2>Article 15 - Loi applicable</h2>
      <p>
        La loi française s’applique. Tribunal compétent : celui du siège social de l’éditeur.
      </p>

      <h2>Article 16 - Contact</h2>
      <p>
        Pour toute demande, contactez <a href="mailto:melbermil@outlook.fr">melbermil@outlook.fr</a>
      </p>

      <p className="disclaimer">
        Ces mentions légales et politique de confidentialité ont été créées sur le site Rocket Lawyer.
      </p>
    </div>
  </>
);

export default LegalNotice;
