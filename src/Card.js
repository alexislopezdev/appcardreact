import sumimg from './Group.png'
import './Card.css';

function Card(props) {
  return (
    <div className='Container_Card'>
         <div className='Card'>
           <div className='Cards'>
                <img src={props.imgsrc1} alt=''/>
                <h2>Moscú Rusia  <img className='logo1' src={sumimg} alt=''/></h2>
                <h3>Resume</h3>
                <p>Moscú Rusia Rascacielos Casa Moscow City Noche Ciudades imagenes 1600x1200
                   </p>
           </div>
           <div className='Cards'>
             <img src={props.imgsrc2} alt=''/>
             <h2>España Fortalez <img className='logo2' src={sumimg} alt=''/></h2>
             <h3>Resume</h3>
             <p>España Fortaleza (arquitectura) Casa Granada Alhambra imagenes 1600x1200
                  a</p>
           </div>
           <div className='Cards'>
             <img src={props.imgsrc3} alt=''/>
             <h2>London <img className='logo3' src={sumimg} alt=''/></h2>
             <h3>Resume</h3>
             <p>England Bridges Rivers Thames, Tower Bridge Night London Waterfront Street lights  1600x1200
                   </p>
           </div>
         </div>
    </div>
  );
}

export default Card;
