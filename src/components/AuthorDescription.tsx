import { useShowCaseContext } from '../context/ShowCaseContext'
import { BiImage } from 'react-icons/bi'

export default function AuthorDescription() {

    const { state } = useShowCaseContext()

    return (
        <div className={`${state === 'Default' ?
            "auther-description" :
            "auther-description auther-description-list"
            }`}>

            <h4>Ehsan TheMor</h4>

            <div className="description">

                <div
                    style={{
                        fontSize: 19,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end'
                    }}>
                    <BiImage />
                </div>

                <p>SUBJECT</p>

                <span className="under_line">__</span>

                <p>DATE</p>

            </div>

        </div>
    )
}

