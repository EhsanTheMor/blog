import '../style/HeroSection.css'
import {
     AiFillFacebook,
     AiOutlineTwitter,
     AiFillGooglePlusCircle,
     AiOutlineBehance,
     AiOutlineInstagram
} from 'react-icons/ai';

import { BsPinterest } from 'react-icons/bs';

import { BiLogoSoundcloud } from 'react-icons/bi'

export default function HeroSection() {
     const icons = [
          <AiFillFacebook />,
          <AiOutlineTwitter />,
          <AiFillGooglePlusCircle />,
          <AiOutlineBehance />,
          <AiOutlineInstagram />,
          <BsPinterest />,
          <BiLogoSoundcloud />,
     ]
     return (
          <div className="container">
               <section className="hero_section">
                    <div className="image_holder"></div>

                    <div className="icon_holder">
                         {icons.map((icon, index) => (
                              <a className='icons_link' href="#" key={index}>{icon}</a>
                         ))}
                    </div>
                    <div className="divider"></div>
               </section>
          </div>
     )
}
