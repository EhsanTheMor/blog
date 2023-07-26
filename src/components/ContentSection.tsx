import '../style/ContentSection.css'
import Image from './Image'
import { BiImage } from 'react-icons/bi'

const Title = ({ title }: { title: string }): JSX.Element => {
     return (
          <h3 className='article-header'>
               <a href="#">
                    {title}
               </a>
          </h3>
     )
}

const Avatar = ({ source }: { source: string }) => {
     return (
          <div className="avatar">
               <Image
                    source={source}
                    alt='E'
                    sx={{
                         width: '100%',
                         height: '100%',
                         borderRadius: '100%',
                         overflow: 'hidden'
                    }}
               />
          </div>
     )
}

const AuthorDescription = () => {
     return (
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
     )
}

export default function ContentSection() {
     return (
          <div className='container'>
               <section className='section'>
                    <article>
                         <Image source='/images/post1.jpg' alt='post1' />
                         <div className="article-holder">
                              <Title title='Business Partners Work at Modern Office' />

                              <div className="auther-field">
                                   <Avatar source='asdf' />

                                   <AuthorDescription />
                              </div>
                         </div>

                    </article>
               </section>
          </div >
     )
}
