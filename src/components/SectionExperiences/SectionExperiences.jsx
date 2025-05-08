import React from "react";
import {InfoCard} from "../InfoCard/InfoCard"
import {ExperiencesCard} from "../ExperiencesCard/ExperiencesCard"
import styles from "./SectionExperiences.module.css"
import image from "../../assets/peroquet.png"


const SectionExperiences = () => {
    return(
        <>
        <div className="sectionSplit" id="experiences">
        <InfoCard 
            title = "Expériences professionnelles"
            description = "Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"
            subtitle = "Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clzLorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"
        />
        <div className={styles.allExperiences}>
            <ExperiencesCard 
                job="Intégrateur Web"
                date="2023-2024"
                company="Penguin World"
                tasks={["Intégration de solutions en marque blanche sur les sites clients majeurs (Lidl, Veepee, etc.).", "Mise en œuvre de designs responsive pour une UX optimale tous supports","Optimisation des performances web selon les meilleures pratiques", "Conception de template mail avec Beefree", "Mise en place de design system modulaire avec Figma", "Application des normes d’accessibilité numérique (RGAA)"]}
            />
            <ExperiencesCard 
                job="Designer Web & graphiste"
                date="2023-2024"
                company="We do play"
                tasks={["Création d'un puzzle interactif intégré par la suite sur le site internet", "Refonte graphique du site internet avec Wix","Conseils sur les choix graphiques", "Conception créative d'une affiche de cinéma sur-mesure avec Photoshop"]}
            />
            <ExperiencesCard 
                job="Designer Web & graphiste"
                date="2023-2024"
                company="Soblim"
                tasks={["Création de l'identité graphique avec la suite Adobe", "Création d’un nouveau site internet (Wordpress)","Rédaction des textes", "Gestion des formulaires","Référencement (SEO)"]}
            />
            <div className={styles.bgBlur}>
                <img src={image} alt="" />
            </div>
        </div>

        </div>
        </>
    )
}

export default SectionExperiences