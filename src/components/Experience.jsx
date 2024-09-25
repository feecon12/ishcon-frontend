/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const DetailCard = ({ position, company, companyLink, time, address, work }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>

            <h3 className='capitalize font-bold text-2xl sm:text-xl cs:text-lg'>
                {position}
                &nbsp;
                <a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark '>@{company}</a>
            </h3>

            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>

            <p className='font-medium w-full md:text-sm px-3'>
                {work.map((item, index) => <li className="mt-2 list-disc"
                    key={index}>{item.bullet}</li>)}
            </p>

        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )

    const verisysWork = [
        {
            bullet: "Built and automated web scraping bots to gather  professionals' data from various sources, streamlining data collection processes."
        },
        {
            bullet: "Utilized xPath and CSS selector techniques to interact with DOM elements and trigger JavaScript events, improving data extraction accuracy."
        },
        {
            bullet: "Optimized data processing by implementing Ruby transformation logic and Regular Expressions, enhancing processing speed by 30%."
        },
        {
            bullet: "Performed peer code reviews that helped achieving the quality work significantly by 90%."
        },
        {
            bullet: "Collaborated with different stakeholders on Jira, then Azure DevOps as a part of agile development practice."
        },

    ]
    const pwcWork = [
        {
            bullet: "Headed the development of a scalable web application using Express/Nodejs, implementing best practices for maintainability and extensibility."
        },
        {
            bullet: "Implemented RESTful APIs with Express Framework, reducing integration time by 20% through seamless external service integration."
        },
        {
            bullet: "Utilized Postman for API testing, accelerating development cycles, and enhancing software quality."
        },
    ]

    return (
        <div className='my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

                    <DetailCard
                        position={'Associate Software Engineer'}
                        company={'Verisys'}
                        companyLink={'www.verisys.com'}
                        time={'Feb 2024 - present'}
                        address={'Hyderabad, Telangana'}
                        work={verisysWork}
                    />
                    <DetailCard
                        position={'Associate'}
                        company={'PwC'}
                        companyLink={'www.pwc.com'}
                        time={'Apr 2021 - Oct 2023'}
                        address={'Bangalore, Karnataka'}
                        work={pwcWork}
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience