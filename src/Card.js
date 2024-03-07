import card1 from '../src/properties-card/card-1.webp';
import card2 from '../src/properties-card/card-2.webp';
import card3 from '../src/properties-card/card-3.webp';



function Card() {
    return (
        <div className="container">
            <div className="row">
            
                <div className="col-md-4">
                    <img className="img-fluid" src={card1} alt="Slide 1" />
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={card2} alt="Slide 1" />
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={card3} alt="Slide 1" />
                </div>
                </div>
        </div>
    );
}

export default Card;
