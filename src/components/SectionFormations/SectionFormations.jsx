import React from "react";
import styles from "./SectionFormations.module.css";
import { Formations } from "../Formations/Formations";
import {InfoCard} from "../InfoCard/InfoCard"



const SectionFormations = () => {
    return(
        <>
        <div className="sectionSplit" id="formation">
        <InfoCard 
        title="Formations"
        description="Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"
        subtitle="Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clzLorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"
        />
        <div className={styles.allFormations}>
        <Formations />
        </div>
        </div>
        </>
    )
}

export default SectionFormations