import React from "react";
import {ExperienceType} from "@controllers/Notion/types";
import {ExperienceCard} from "@components/molecules";

type Props = {
    experiences: ExperienceType[]
};

export function Experiences({experiences}: Props) {
    return (
        <div className="py-4">
            <ol className="flex snap-mandatory border-t-2 border-indigo-600 snap-x overflow-x-auto overflow-y-visible -mx-32">
                <li className='snap-center snap-always flex w-1/3 flex-shrink-0 '/>
                {experiences.map((exp, idx) => <ExperienceCard experience={exp} key={idx}/>)}
                <li className='snap-center snap-always flex w-1/3 flex-shrink-0 '/>
            </ol>
        </div>
    );
};