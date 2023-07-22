import '../style/ContentSection.css'
import Image from './Image'
import { BiImage } from 'react-icons/bi'

export default function ContentSection() {
     return (
          <div className='container'>
               <section className='section'>
                    <article>
                         <Image source='/images/post1.jpg' alt='post1' />
                         <div className="article-holder">
                              <h3 className='article-header'>
                                   <a href="#">
                                        Business Partners Work at Modern Office
                                   </a>
                              </h3>
                              <div className="auther-field">
                                   <div className="avatar">
                                        <Image
                                             source='sdf'
                                             alt='E'
                                             sx={{
                                                  width: '100%',
                                                  height: '100%',
                                                  borderRadius: '100%',
                                                  overflow: 'hidden'
                                             }}
                                        />
                                   </div>
                                   <div className="auther-description">
                                        <h4>Ehsan TheMor</h4>
                                        <div className="description">
                                             <div style={{ fontSize: 19, display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                                                  <BiImage />
                                             </div>
                                             <p>SUBJECT</p>
                                             <span className="under_line">__</span>
                                             <p>DATE</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </article>
               </section>
          </div>
     )
}
