import Achal from './achal.jpg' 
import Kaveri from './kaveri.jpg'
import Urmila from './urmila.jpg'
import Pratik from './pratik.jpg'

import './About.css';
import github from './github.png';
import linkedin from './instagram.png';

export default function About() {
    return(
        <>
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
                <img src={Kaveri} className='team-imgs'/>
                <h2 className='name-heading'>Suyash</h2>
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
