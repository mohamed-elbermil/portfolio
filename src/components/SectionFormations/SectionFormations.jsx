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
        <Formations 
            date = "2024-2026"
            school = "Nexa Digital School"
            formation = "BTS SIO (option SLAM)"
            link = "zclz"
            
        />
        <Formations 
            date = "2023-2024"
            school = "Web Force 3"
            formation = "Développeur web"
            link = "Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clzLorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"
            
        />
        <Formations 
            date = "2022-2023"
            school = "Web Force 3"
            formation = "Designer UX/UI"
            link = "Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clzLorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"         
        />
        <Formations 
            date = "2022-2023"
            school = "Web Force 3"
            formation = "Web Marketing Digital"
            link = "Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clzLorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"         
        />
        </div>
        </div>
        </>
    )
}

export default SectionFormations