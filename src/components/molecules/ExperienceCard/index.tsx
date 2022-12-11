import {ExperienceType, RichTextType} from "@controllers/Notion/types";
import Image from "next/image";
import React from "react";

type Props = {
    experience: ExperienceType
};

function formatExperienceDate(dateString: string) {
    const date = new Date(dateString)

    const months = ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC']

    return `${months[date.getMonth()]} ${date.getFullYear()}`
}

function parseNotionRichTextToHTML(richText: RichTextType) {
    const nodes = []

    for (const { annotations, plain_text } of richText) {
        switch (true) {
            case plain_text === '\n':
                nodes.push(<br/>)
                break

            case annotations.bold:
                nodes.push(<strong>{plain_text}</strong>)
                break

            case annotations.italic:
                nodes.push(<i>{plain_text}</i>)
                break

            case annotations.underline:
                nodes.push(<u>{plain_text}</u>)
                break

            default:
                nodes.push(<span>{plain_text}</span>)
                break
        }
    }

    return <p>{nodes.map(n => n)}</p>
}

export function ExperienceCard({experience: {label, company, companyLogo, to, from, summary}}: Props) {
    return (
        <li>
            <div className="md:flex flex-start">
                <div
                    className="bg-indigo-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                         className="text-white w-3 h-3" role="img"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512">
                        <path fill="currentColor"
                              d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                </div>
                <article
                    className="block p-6 rounded-xl shadow-lg max-w-xl bg-gray-100 ml-6 mb-10">
                    <figure className='w-full h-32 relative'>
                        <Image src={companyLogo} alt="Logo de l'entreprise"
                               className='object-contain' layout='fill' loading='lazy'/>
                    </figure>
                    <header className="mb-4">
                        <h3 className="font-cursive text-2xl leading-relaxed">{label}</h3>
                        <p className='font-light uppercase text-xs tracking-wide text-indigo-600'>{company} &bull; {formatExperienceDate(from)} - {formatExperienceDate(to)}</p>
                    </header>
                    <article
                        className='text-gray-700 text-sm whitespace-normal text-justify leading-relaxed'>
                        {parseNotionRichTextToHTML(summary)}
                    </article>
                </article>
            </div>
        </li>
    );
};