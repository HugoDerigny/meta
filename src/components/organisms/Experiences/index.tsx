import React from "react";
import {ExperienceType} from "@controllers/Notion/types";
import {ExperienceCard} from "@components/molecules";

type Props = {
    experiences: ExperienceType[]
};

export function Experiences({experiences}: Props) {
    return (
        <div className="py-4 relative">
                <i className='text-indigo-600 absolute -right-8 top-0.5 text-xl z-20 md:hidden'>&gt;</i>
            <ol className="flex snap-mandatory border-t-2 border-indigo-600 snap-x overflow-x-auto overflow-y-visible -mx-8 lg:-mx-32 relative">
                <li className='snap-center snap-always lg:flex hidden w-1/3 flex-shrink-0 '/>
                {experiences.map((exp, idx) => <ExperienceCard experience={exp} key={idx}/>)}
                <li className='snap-center snap-always lg:flex hidden lg:w-1/3 flex-shrink-0 '/>
            </ol>
        </div>
    );
};