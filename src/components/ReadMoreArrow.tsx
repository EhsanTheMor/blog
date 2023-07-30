import { CSSProperties } from 'react'
import '../style/ReadMoreArrow.css'

type Props = {
    isHovered: Boolean
}

export default function ReadMoreArrow({ isHovered }: Props) {
    const spanStyle: CSSProperties = {
        backgroundColor: isHovered ? 'red' : 'gray',
        marginLeft: isHovered ? '4px' : '2px',
    }

    return (
        <span className="read-more-arrow-holder">

            <span style={spanStyle} ></span>
            <span style={spanStyle} ></span>
            <span style={spanStyle} ></span>
            <span style={spanStyle} ></span>
            <span style={spanStyle} ></span>
            <span style={{
                ...spanStyle,
                backgroundColor: 'white',
                borderRight: isHovered ? 'red 2px solid' : 'gray 2px solid',
                borderBottom: isHovered ? 'red 2px solid' : 'gray 2px solid'
            }} ></span>
        </span>
    )
}
