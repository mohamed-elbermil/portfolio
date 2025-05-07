import React from "react";
import { Skills } from "../Skills/Skills";
import {InfoCard} from "../InfoCard/InfoCard"
import "./SectionSkill.css"

export const SectionKills = () => {
    return(
        <>
            <div className="sectionSplit">
                <InfoCard 
                title = "Compétences"
                description = "Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"
                subtitle = "Lorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clzLorem ipsum dolor kzehfkzfezlfjlzfzlcz,lc,z,clz"
                />
                <div className="SkillsContainer">
                <Skills
                title="Web"
                technologies={["React", "JavaScript", "CSS", "Node.js", "HTML", "Git"]}
                />
                <Skills
                title="Web"
                technologies={["React", "JavaScript", "CSS", "Node.js", "HTML", "Git"]}
                />
                </div>
            </div>
        </>
    )
}