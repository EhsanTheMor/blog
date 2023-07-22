import '../style/NavbarDropDownMenu.css'
import { CSSProperties, useState } from 'react'

type Props = {
    isHovered: boolean,
    dropDownList: string[] | null
}

export default function NavbarDropDownMenu({ isHovered, dropDownList }: Props) {
    const styles: { [key: string]: CSSProperties } = {
        ul: {
            visibility: isHovered ? 'visible' : 'hidden',
            opacity: isHovered ? '1' : '0',
            height: isHovered ? `${3 * 40 - 1}px` : '0px',

            top: isHovered ? '100%' : '90%',
            left: isHovered ? '50%' : '45%',
        },
        li: {
        }
    }

    const renderDropDownListItem = (item: string): JSX.Element => {
        const [isHovered, setIsHovered] = useState<Boolean>(false)

        return (
            <li
                key={item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='navbar-drop-down-item'
            >
                <a
                    style={{ color: isHovered ? 'black' : '#6b6a6a' }}
                >{item}</a>
            </li>
        )
    }

    return (
        <ul style={styles.ul} className='navbar-drop-down'>
            {dropDownList && dropDownList.map(item => (
                renderDropDownListItem(item)
            ))}
        </ul>
    )
}


