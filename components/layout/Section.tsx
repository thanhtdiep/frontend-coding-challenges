import React, { FC } from 'react'

interface SectionProps {
    children?: React.ReactNode,
    className?: string,
    headingStyle?: string,
    descriptionStyle?: string,
    heading?: string,
    numbering?: string,
    description?: string,
    ref?: React.RefObject<HTMLDivElement>,
    [x: string]: any
}

const Section: FC<SectionProps> = ({ children, className, heading, headingStyle, description, descriptionStyle, numbering, ...others }) => {

    return (
        <div className={`${className} `}>
            <div className='flex flex-row items-center'>
                {numbering && <h1 className='text-sm sm:text-xl font-bold border-[.8rem] border-black rounded-full px-4 py-2'>{numbering}</h1>}
                <div className='flex flex-col ml-4'>
                    {heading && <h1 className={`${headingStyle} font-bold text-sm sm:text-xl`}>{heading}</h1>}
                    {description && <p className={`${descriptionStyle}`}>{description}</p>}
                </div>
            </div>
            {children}
        </div>
    )
};

Section.displayName = 'Section';
export default Section;

