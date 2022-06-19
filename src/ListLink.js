import React from "react";
import './ListLink.css'
import img1 from './titanic.jpg'
import img2 from './images.jpg'
import img3 from './salem.jpg'


function ListLink() {
    return (
        <header className="header1">
            <h1 className="title">
                Read through some historical remnants!
            </h1>
            <h2 className="sub-heading">I post historical remnants on a weekly basis </h2>

            <div className="alignment">
                <div className="titanic-alignment">
                    <h2>R.M.S Titanic</h2>
                    <div className="image1">
                        <img src={img1} className="Titanic" alt="Titanic img" height={300} width={300} />
                    </div>
                    <text className="titanic">
                        The Unsinkable Ship”- one particular flaw in its structure, unfortunately, 
                        led to its devastating sinking. The walls that separated the watertight bulkheads
                        were very close to the waterline, which in this case, led to water pouring into
                        the ship`s compartments once it hit the iceberg. The faulty structure, along with
                        the small number of lifeboats, further caused the catastrophic impact, leaving
                        behind 1,517 people to die at sea, many of whose bodies have not yet been found.
                        The sinking of the R.M.S Titanic is truly a heartbreaking historical remnant
                        that will never be forgotten.
                    </text>
                    <text className="textDetails">
                        Photograph from National Museums Northern Ireland Collection / Ulster Folk & Transport Museum
                        Source: https://www.history.com/topics/early-20th-century-us/titanic
                    </text>
                </div>
                <div className="ketchup-alignment">
                    <h2>America's Beloved Condiment</h2>
                    <div className="image2">
                        <img src={img2} className="Ketchup" alt="Ketchup img" height={300} width={300} />
                    </div>
                    <text className="ketchup">
                        Our beloved condiment - the ketchup - is one that is used for all types of 
                        food: burgers, french fries, hotdogs, and so many more. But did you know that
                        it was once used for medicinal purposes? Well, if you didn’t, this historical
                        remnant will truly surprise you! John Cook, a Physician, sold ketchup, 
                        claiming that it allows for easy digestion. But soon enough, people believed
                        that it not only cured indigestion, but it also cured jaundice, diarrhea, 
                        rheumatism, and many more. So in the end, it may not have lived up to be a 
                        miracle drug, but it transformed into America’s favorite condiment. 
                    </text>
                </div>
                <div className="salem-alignment">
                    <h2>Salem's Witch Hunt</h2>
                    <div className="image3">
                        <img src={img3} className="Salem" alt="Salem img" height={300} width={300} />
                    </div>
                    <text className="salem">
                        The infamous Salem Witch Trials, which occurred from 1692 to 1693,
                        were events fuelled by mass hysteria and fear of devil possession.
                        Since the concept of supernatural entities possessing certain individuals
                        to inflict harm on others was widespread in Salem, a region founded on
                        Puritanism, the Salem residents started to believe that there were witches
                        among them when a smallpox epidemic unfolded and their fear of attacks
                        from Native Americans increased. However, when two young girls,
                        Betty Parris and Abigail Williams, started experiencing outbursts
                        of screaming and contortions, a physician, who could not find a reasonable
                        explanation, diagnosed the girls with bewitchment, and this unfortunate
                        event led to the very first trial. Following their diagnosis, other girls
                        started experiencing similar symptoms, leading to the arrest of three women:
                        Tituba, Sarah Good, and Sarah Osborn. This event marked the start of the
                        Salem Witch trials, and the accusations and executions continued until
                        1693 when the hysteria died down and the Salem residents opposed the trials.
                        Although the number of executions are not agreed on, the Salem Witch Trials
                        was a tragic event fuelled by fear of the other.
                    </text>
                </div>
            </div>
        </header>
    )
}
export default ListLink