import './Images.css';
import img2 from '../images/img2.jpg';
function Images() {
    return (
        <div className='container'>
         <div className='child'>
         <div className="headerMJ">Image2</div> 
         <img src={img2} alt="" />
         </div>
         <div className='child'>
         <div className="headerMJ">Image2</div> 
         <img src={img2} alt="" />
         </div>
         <div className='child'>
         <div className="headerMJ">Image2</div> 
         <img src={img2} alt="" />
         </div>
        </div>
    );
};
export default Images;