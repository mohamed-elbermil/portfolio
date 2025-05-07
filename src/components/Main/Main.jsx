import React from "react";
import {SectionSkills} from "../SectionSkills/SectionSkills";
import SectionFormations from "../SectionFormations/SectionFormations";
import SectionExperiences from "../SectionExperiences/SectionExperiences";



const Main = () => {
    return(
        <main>
            <SectionSkills />
            <SectionExperiences />
            <SectionFormations /> 
        </main>
    )
}

export default Main;