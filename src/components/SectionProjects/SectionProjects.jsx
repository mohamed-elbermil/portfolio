import React from "react"
import {InfoCard} from "../InfoCard/InfoCard"
import { TabletCarousel } from "../TabletCarousel/TabletCarousel"
import styles from "./SectionProjects.module.css"


export const SectionProjects = () => {
    return(
        <>
        <InfoCard 
        title="Projets"
        />
        <div className={styles.title}>
            <h2>Les projets que j'ai réalisés</h2>
            <p>Ce projet a été réalisé dans le cadre mzejzigzgezgzezgzeg</p>
        </div>
        <TabletCarousel className={styles.styleSection}/>
        </>
    )
}