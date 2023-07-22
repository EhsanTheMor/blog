import '../style/NavbarMenu.css'
import { SlMagnifier } from 'react-icons/sl'
import { FaShoppingBag } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { useRef } from 'react'

export default function NavbarMenu() {
     const ulSpanElement = useRef<HTMLSpanElement>(null);
     const inputMagnifierEl = useRef<HTMLInputElement>(null)

     const hoverEffect = (e: React.MouseEvent<HTMLLIElement>) => {
          const hoverElementXMiddle = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
          const hoverElementYBottom = e.currentTarget.offsetTop + e.currentTarget.offsetHeight;

          const x = hoverElementXMiddle;
          const y = hoverElementYBottom;

          if (!ulSpanElement) return

          (ulSpanElement.current as HTMLSpanElement).style.top = `${y - 3}px`;
          (ulSpanElement.current as HTMLSpanElement).style.left = `${x}px`;
          ulSpanElement.current?.classList.add('span-show');
     }

     const leaveEffect = () => {
          ulSpanElement.current?.classList.remove('span-show')
     }

     return (
          <>
               <div className="container">
                    <nav>
                         <h1 className="logo_navbar">
                              <a className='logo_navbar-link' href="#">
                                   EhsanTheMor
                              </a>
                         </h1>

                         <div className='lists_container'>
                              <ul className='list_navbar' onMouseLeave={leaveEffect}>
                                   <li
                                        // onMouseLeave={leaveEffect}
                                        onMouseEnter={hoverEffect}
                                        className='list_navbar-item'
                                   >HOMES</li>
                                   <li
                                        // onMouseLeave={leaveEffect}
                                        onMouseEnter={hoverEffect}
                                        className='list_navbar-item'
                                   >POST FORMATS</li>
                                   <li
                                        // onMouseLeave={leaveEffect}
                                        onMouseEnter={hoverEffect}
                                        className='list_navbar-item'
                                   >PAGES</li>
                                   <li
                                        // onMouseLeave={leaveEffect}
                                        onMouseEnter={hoverEffect}
                                        className='list_navbar-item'
                                   >SHOP</li>
                                   <li
                                        // onMouseLeave={leaveEffect}
                                        onMouseEnter={hoverEffect}
                                        className='list_navbar-item'
                                   >PURCHASE NOW!</li>
                              </ul>
                              <ul className='list_navbar'>
                                   <li className='
                                   list_navbar-item 
                                   list_navbar-item-icon
                                   list_navbar-item-icon-magnifier'
                                   >
                                        <input ref={inputMagnifierEl} className='list_navbar-item-input' type="text" placeholder='Hit enter to search' />
                                        <SlMagnifier
                                             onClick={() => {
                                                  inputMagnifierEl.current?.classList.toggle('input-show')
                                             }} />
                                   </li>
                                   <li className='
                                   list_navbar-item 
                                   list_navbar-item-icon'
                                   >
                                        <FaShoppingBag />
                                   </li>
                                   <li className='
                                   list_navbar-item 
                                   list_navbar-item-icon'
                                   >
                                        <FiMenu />
                                   </li>
                              </ul>
                              <span className='list_navbar-span' ref={ulSpanElement}></span>
                         </div>
                    </nav>
               </div>
               <div className="full_divider"></div>
          </>
     )
}
