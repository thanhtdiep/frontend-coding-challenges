import React, { FC } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons'
interface Props {
    className: string,
    value: number | null,
    length: number,
    onClick: (index: number) => void,
}

const Rating: FC<Props> = ({ className, value, length, onClick }) => {
    const [hover, setHover] = React.useState<number | null>(null)
    return (
        <div className={`${className} flex flex-row justify-center items-center`}>
            {Array.from(Array(length), (e, idx) => (
                <Icon key={idx} icon={(value && value >= idx) || (hover && hover >= idx) ? faStar: faStarOutline}
                    size='xs'
                    className={`${(value && value >= idx) || (hover && hover >= idx) ? 'text-yellow-300' : ''} w-[2.5rem]`}
                    onClick={() => onClick(idx)} 
                    onMouseOver={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    />
            ))}
        </div>
    );
}

export default Rating;