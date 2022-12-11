import React from "react";
import {ExperienceType} from "@controllers/Notion/types";
import {ExperienceCard} from "@components/molecules";

type Props = {
    experiences: ExperienceType[]
};

export function Experiences({experiences}: Props) {
    return (
        <div className="flex justify-center pt-4">
            <ol className="border-l-2 border-indigo-600">
                {experiences.map((exp, idx) => <ExperienceCard experience={exp} key={idx}/>)}
            </ol>
        </div>
    );
};