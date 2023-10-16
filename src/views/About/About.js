import Achal from './achal.jpg' 
import Kaveri from './kaveri.jpg'
import Urmila from './urmila.jpg'
import Pratik from './pratik.jpg'
import Suyash from './suyash.jpg'
import Shravan from './shravan.jpg'

import './About.css';
import github from './github.png';
import linkedin from './linked-in.png'
import Navbar from '../../component/Navbar/Navbar';

export default function About() {
    return(
        <>
        <Navbar/>
        <h1 className='main-heading'> Our Team</h1>
        <div className='main-div'>
            <div className='sub-div'>
                <img src={Achal} className='team-imgs'/>
                <h2 className='name-heading'>Achal katkar</h2>
                <p className = 'team-description' > Persuing B.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
               <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>

            <div className='sub-div'>
                <img src={Kaveri} className='team-imgs'/>
                <h2 className='name-heading'>Kaveri Tupe</h2>
                <p className = 'team-description' > Persuing B.Tech from Usha </p> 
                <p className = 'team-description' > Mittal Institute of Technology, Mumbai </p>
                <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>

            <div className='sub-div'>
                <img src={Urmila} className='team-imgs'/>
                <h2 className='name-heading'>Urmila Pawar</h2>
                <p className = 'team-description' >Persuing B.E.from  </p> 
                <p className = 'team-description' > Vishwabharati Academy Engineering Collage</p>
                <div className='link-div'>
               < a href = "https://github.com/UrmilaPawar1909" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/urmila-pawar-3a4949278/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>
        </div>


        <div className='main-div'>
            <div className='sub-div'>
                <img src={Pratik} className='team-imgs'/>
                <h2 className='name-heading'>Pratik Barbudhe</h2>
                <p className = 'team-description' > Persuing B.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
                <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>


            <div className='sub-div'>
                <img src={Suyash} className='team-imgs'/>
                <h2 className='name-heading'>Suyash</h2>
                <p className = 'team-description' > Persuing B.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
                <div className='link-div'>
               < a href = "https://github.com/suyash2107" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/suyash-shinde-90a44b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>


            <div className='sub-div'>
                <img src={Shravan} className='team-imgs'/>
                <h2 className='name-heading'>Shravan</h2>
                <p className = 'team-description' > Persuing M.C.A from G H Raisoni </p> 
                <p className = 'team-description' > Institute of Engineering & Technology </p>
                <div className='link-div'>
               < a href = "https://github.com/KaveriTupe25" >
                < img src = { github }
                alt = 'github'
                className = 'gihub-img'/>
                </a> 
                < a href = 'https://www.linkedin.com/in/kaveri-tupe/' >
                < img src = { linkedin }
                alt = 'linkedin'
                className = 'linkedIn-img' />
               </a>
               </div>
            </div>
            
        </div>
        </ >
        
    )
}
