import React from "react";
import {SectionSkills} from "../SectionSkills/SectionSkills";
import SectionFormations from "../SectionFormations/SectionFormations";
import SectionExperiences from "../SectionExperiences/SectionExperiences";
import { SectionProjects } from "../SectionProjects/SectionProjects";



const Main = () => {
    return(
        <main>
            <SectionSkills />
            <SectionExperiences />
            <SectionFormations /> 
            <SectionProjects />
        </main>
    )
}

export default Main;