import { useState } from 'react'
import ReadMoreArrow from './ReadMoreArrow'

type Props = {
    link: string
}

export default function ReadMoreLinkWithArrow({ link }: Props) {
    const [isHovered, setIsHovered] = useState<Boolean>(false)

    return (
        <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={link}>
            Continue Reading
            <ReadMoreArrow isHovered={isHovered} />
        </a>
    )
}
