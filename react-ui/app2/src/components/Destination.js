
import Mount2 from "../assets/27.jpg"
import Mount3 from "../assets/23.jpg"
import DestinationData from "./DestinationData";
import "./Destinationstyle.css"
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p> Tour give up the freshnes opportunity  to see alot with in a time frame</p>
        <p>
        The City of Light draws millions of visitors every year with its unforgettable ambiance.
       Of course, the divine cuisine and vast art collections deserve some of the credit as well. 
       The gentle River Seine rambles through the city, flanked by stately museums,
        centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture,
         further enhanced by cascading trees and glowing streetlamps. 
         Peppering the Seine's cobbled walks 
        </p>
        
        <div >
       <DestinationData
       className="First-des"
       heading="City of Light draws millions of visitors"
       text="The City of Light draws millions of visitors every year with its unforgettable ambiance.
       Of course, the divine cuisine and vast art collections deserve some of the credit as well. 
       The gentle River Seine rambles through the city, flanked by stately museums,
        centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture,
         further enhanced by cascading trees and glowing streetlamps. 
         Peppering the Seine's cobbled walks and graceful bridges are impossibly chic Parisians,
          probably on their way to the market, cafe or cinema.
         Containing world-class museums, fashion, cuisine and an atmosphere all its own, 
         Visit the beloved Musée d'Orsay, shop the biggest designers
                on the Champs Élysées or hit the boutiques in Le Marais, take in the view atop the
                 Eiffel Tower, or even plan a day trip to Versailles Palace. But don't miss out on 
                 the simple pleasure of meandering the marvelous arrondissements (districts), or 
                 snacking on street crepes either"
               
                 img4={Mount2}
           

       />
      </div>
     
      <DestinationData
       className="First-des-reverse"
       heading="City of rainbow"
       text="The City of Rainbow draws millions of visitors every year with its unforgettable ambiance.
       Of course, the divine cuisine and vast art collections deserve some of the credit as well. 
       The gentle River Seine rambles through the city, flanked by stately museums,
        centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture,
         further enhanced by cascading trees and glowing streetlamps. 
         Peppering the Seine's cobbled walks and graceful bridges are impossibly chic Parisians,
          probably on their way to the market, cafe or cinema.
         Containing world-class museums, fashion, cuisine and an atmosphere all its own, 
         Visit the beloved Musée d'Orsay, shop the biggest designers
                on the Champs Élysées or hit the boutiques in Le Marais, take in the view atop the
                 Eiffel Tower, or even plan a day trip to Versailles Palace. But don't miss out on 
                 the simple pleasure of meandering the marvelous arrondissements (districts), or 
                 snacking on street crepes either"
                
                 img4={Mount3}
           

       />
    </div>
   

 
  );
};

export default Destination