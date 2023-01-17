import {Experiences, Hero, Projects} from '@components/organisms'
import {Title} from '@components/atoms'
import React, {FC} from 'react'
import {InferGetServerSidePropsType} from 'next'
import {ExperienceType, ProjectType, SkillType} from '@controllers/Notion/types'
import {fetcher} from '../src/utils'
import {Tooltip} from '@components/atoms/Tooltip'
import Image from "next/image";
import gif from '@assets/Hugo DERIGNY.gif'

type Fetcher = {
    projects: ProjectType[]
    skills: SkillType[]
    blogs: [],
    experiences: ExperienceType[]
}

export const getServerSideProps = async ({req}) => {
    const data = await fetcher<Fetcher>(`http://${req.headers.host}/api/data`)

    return {
        props: data,
    }
}

export const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({projects, skills, experiences}) => {
    return (
        <>
            <Hero/>
            <section
                id='resume'
                className='autumn-pattern shadow-xl sw-screen h-auto p-8 pb-16 mt-[208%] lg:px-32 lg:py-16 lg:pb-32 lg:mt-[52%] rounded-t-3xl'
            >
                <Title>{new Date().getHours() > 19 ? 'Bonsoir' : 'Bonjour'} ! 👋 </Title>
                <article
                    className='text-gray-300 text-lg space-y-4 text-justify flex flex-col leading-relaxed text-justify'>
                    <p>
                        Récemment diplômé de l&apos;école d&apos;ingénieur{' '}
                        <span className='underline'>IMT Nord Europe</span> en profil <span>Informatique</span>, je suis
                        à la recherche d&apos;un CDI en tant que{' '}
                        <span className='underline'>développeur fullstack</span>.
                    </p>
                    <p>
                        D&apos;origine compiègnoise, je suis venu à Lille pour mes études et je souhaite y rester pour
                        ma vie future. Je suis ouvert à tout type de poste, full-remote comme présentiel, à Lille et ses
                        alentours ou bien à Paris.
                    </p>
                    <div className="py-4 mx-auto">
                        <a href='/assets/Hugo%20DERIGNY.pdf' className="flex flex-col hover:shadow-[8px_8px_0px_0px_#fc6976] transition-all">
                            <figure className="relative w-72 h-96 bg-[#4300F6] self-start py-0">
                                <Image src={gif} layout='fill' alt='CV animé' className='object-cover'/>
                            </figure>
                            <figcaption className='text-center bg-[#4300F6] w-72 font-semibold text-white py-2'>Télécharger mon CV</figcaption>
                        </a>
                    </div>
                </article>
            </section>
            <div className='h-16 w-full bg-blue-900 absolute skew-y-2 -mt-8'/>
            <section
                className='architect-pattern w-screen h-auto p-8 py-32 lg:px-32 bg-gray-100 flex flex-col justify-center space-y-8'
            >
                {/*<article id='articles'>*/}
                {/*    <Title black>Articles publiés ✍🏻</Title>*/}
                {/*    <div className="w-full mt-8">*/}
                {/*        <p>Rien à voir pour l&apos;instant !</p>*/}
                {/*    </div>*/}
                {/*</article>*/}
                <article id='projets'>
                    <Title black>Mes projets 🏗</Title>
                    <div className='w-full mt-8'>
                        <Projects projects={projects}/>
                    </div>
                </article>
                <article id="parcours">
                    <Title black>Parcours scolaire 🏫</Title>
                    <section className="flex flex-wrap pb-4">
                        <div className='w-full lg:w-1/2 shrink-0 p-4 snap-center'>
                            <article className="bg-white shadow-xl rounded-xl p-6 flex flex-col gap-4 h-full">
                                <header className='flex items-center space-x-4'>
                                    <span
                                        className='rounded-full flex justify-center items-center bg-yellow-400 h-10 w-10 text-xl'>🏫</span>
                                    <div>
                                        <h3 className='text-2xl font-cursive leading-relaxed'>Dut Informatique</h3>
                                        <p className='text-yellow-400 uppercase tracking-wide'>IUT A Villeneuve
                                            d'Ascq</p>
                                    </div>
                                </header>
                                <div
                                    className='text-gray-600 text-sm whitespace-normal text-justify leading-relaxed line-clamp-5'>
                                    <p className="font-bold">⚙️ Java, C, JavaScript, Cobol</p>
                                    <p className="font-bold">✍🏻 Droit, Comptabilité, Mathématiques, Graphes,
                                        Communication, Gestion de projet</p>
                                </div>
                            </article>
                        </div>
                        <div className='w-full lg:w-1/2 shrink-0 p-4 snap-center'>
                            <article
                                className="bg-white shadow-xl rounded-xl p-6 flex flex-col gap-4 h-full border-4 border-yellow-300 shadow-lg shadow-yellow-300/50">
                                <header className='flex items-center space-x-4'>
                                    <span
                                        className='rounded-full flex justify-center items-center bg-yellow-400 h-10 w-10 text-xl'>🎓</span>
                                    <div>
                                        <h3 className='text-2xl font-cursive leading-relaxed'>Ingénieur
                                            Informatique</h3>
                                        <p className='text-yellow-400 uppercase tracking-wide'>IMT Nord
                                            Europe</p>
                                    </div>
                                </header>
                                <div
                                    className='text-gray-700 text-sm whitespace-normal text-justify leading-relaxed whitespace-normal'>
                                    <p className="font-bold">⚙️ Java, C, JavaScript/TypeScript, Flutter, IA, Machine Learning</p>
                                    <p className="font-bold">✍🏻 Droit, Gestion et Management de Projet</p>
                                </div>
                            </article>
                        </div>
                    </section>
                </article>
                <article id="experiences">
                    <Title black>Expériences professionnelles 💻</Title>
                    <Experiences experiences={experiences}/>
                </article>
            </section>
            <div className='h-16 w-full bg-teal-600 absolute -skew-y-1 -mt-12'/>
            <section
                id='stack'
                className='graph-pattern justify-center place-items-center flex flex-col h-auto py-32 px-8 lg:px-32 bg-teal-800'
            >
                <Title>Stack technique 🔧</Title>
                <div className='w-fit mx-auto'>
                    <p className='text-amber-400 uppercase font-thin tracking-wide'>Spécialisation 🌟</p>
                    <article
                        className='bg-gradient-to-br from-[#ffbf00] to-[#ffd447] shadow-lg flex flex-wrap justify-start gap-8 shadow-amber-400 p-4 rounded-xl'>
                        {skills
                            .filter(({isFavorite}) => isFavorite)
                            .map(({label, imageUrl}) => (
                                <Tooltip content={label} offset={4} key={label}>
                                    <div className='relative p-2 aspect-square bg-white rounded-lg overflow-hidden'
                                         key={label}>
                                        <Image
                                            loading='lazy'
                                            width='48'
                                            height='48'
                                            className='object-contain'
                                            src={imageUrl}
                                            alt={label}
                                        />
                                    </div>
                                </Tooltip>
                            ))}
                    </article>
                </div>
                <article className='py-4 flex justify-center flex-wrap lg:mx-64 my-4 gap-8'>
                    {skills
                        .filter(({isFavorite}) => !isFavorite)
                        .map(({label, imageUrl}) => (
                            <Tooltip content={label} offset={4} key={label}>
                                <div className='relative p-2 aspect-square bg-white rounded-lg overflow-hidden'
                                     key={label}>
                                    <Image
                                        loading='lazy'
                                        width='48'
                                        height='48'
                                        className='object-contain'
                                        src={imageUrl}
                                        alt={label}
                                    />
                                </div>
                            </Tooltip>
                        ))}
                </article>
            </section>
            <footer id='contact' className='bg-black flex place-items-center text-center flex-col px-8 py-4 pt-16'>
                <Title>
                    Me contacter par{' '}
                    <a href='mailto:hugo.derigny@gmail.com'
                       title='Contact par mail'
                       className="before:block before:absolute before:transition-all before:-inset-1 hover:before:mt-2 before:mt-8 before:bg-orange-400 relative inline-block">
                        <span className="relative text-white">mail</span>
                    </a>
                    <span>ou sur</span>
                    <a href='https://www.linkedin.com/in/hugo-derigny/' title='Contact par LinkedIn' rel='noopener noreferrer'>
                        <svg
                            className='w-12 h-12 text-gray-200 hover:text-blue-500 transition cursor-pointer'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                        >
                            <path
                                d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'/>
                        </svg>
                    </a>
                </Title>
                <p className='text-gray-200 mt-8 text-xs font-thin tracking-wide'>
                    Construit à l&apos;aide de Next.JS, Notion API et TailwindCSS par Hugo DERIGNY.
                </p>
            </footer>
        </>
    )
}

export default Home
