import '../style/NavbarMenu.css'
import { SlMagnifier } from 'react-icons/sl'
import { FaShoppingBag } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { useRef, useState } from 'react'
import NavbarDropDownMenu from './NavbarDropDownMenu'

export default function NavbarMenu() {
     const ulSpanElement = useRef<HTMLSpanElement>(null);
     const inputMagnifierEl = useRef<HTMLInputElement>(null)

     // Menu Item List For Rendering
     const menuList: { title: string, dropDownList: string[] | null }[] = [
          {
               title: 'HOMES',
               dropDownList: ['Default Layout', 'List Blog Layout', 'Mixed Blog Layout']
          },
          {
               title: 'POST FORMATS',
               dropDownList: ['Image Post', 'Youtube Post', 'Twitt Post']
          },
          {
               title: 'PAGES',
               dropDownList: null
          },
          {
               title: 'PURCHASE NOW!',
               dropDownList: null
          }
     ];

     // A function that makes the dot below the menu to appear on hover
     const hoverEffect = (e: React.MouseEvent<HTMLLIElement>) => {
          const x = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
          const y = e.currentTarget.offsetTop + e.currentTarget.offsetHeight;

          if (!ulSpanElement) return

          (ulSpanElement.current as HTMLSpanElement).style.top = `${y - 3}px`;
          (ulSpanElement.current as HTMLSpanElement).style.left = `${x}px`;
          ulSpanElement.current?.classList.add('span-show');
     }

     // Disapears the dot below the menu
     const leaveEffect = () => {
          ulSpanElement.current?.classList.remove('span-show')
     }

     // Renders each item for the navbar
     const renderMenuListItem = (item: { title: string, dropDownList: string[] | null }): JSX.Element => {
          const [hover, setHover] = useState(false)

          return (
               <li
                    key={item.title}
                    onMouseEnter={e => {
                         hoverEffect(e);
                         setHover(true)
                    }}
                    onMouseLeave={() => setHover(false)}
                    className='list_navbar-item'
               >
                    {item.title}
                    {item.dropDownList &&
                         <NavbarDropDownMenu dropDownList={item.dropDownList} isHovered={hover} />
                    }
               </li>
          )
     }

     return (
          <>
               <div className="container" style={{ position: 'sticky', top: '0px', zIndex: '10' }}>
                    <nav style={{ backgroundColor: 'white' }}>
                         <h1 className="logo_navbar">
                              <a className='logo_navbar-link' href="/">
                                   EhsanTheMor
                              </a>
                         </h1>

                         <div className='lists_container'>
                              <ul className='list_navbar' onMouseLeave={leaveEffect}>

                                   {
                                        menuList.map(menuListItem => (
                                             renderMenuListItem(menuListItem)
                                        ))
                                   }

                              </ul>

                              <ul className='list_navbar'>

                                   <li className='
                                   list_navbar-item 
                                   list_navbar-item-icon
                                   list_navbar-item-icon-magnifier'
                                   >
                                        <input
                                             ref={inputMagnifierEl}
                                             className='list_navbar-item-input'
                                             type="text"
                                             placeholder='Hit enter to search' />

                                        <SlMagnifier
                                             onClick={() => {
                                                  inputMagnifierEl.current?.classList.toggle('input-show')
                                             }} />
                                   </li>

                                   <li
                                        className='list_navbar-item list_navbar-item-icon'
                                   >
                                        <FaShoppingBag />
                                   </li>

                                   <li className='list_navbar-item list_navbar-item-icon'
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
