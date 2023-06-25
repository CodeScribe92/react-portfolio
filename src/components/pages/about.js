import React from 'react';
import profilePicture from "../../../static/assets/images/desktop-wallpaper-snakeman-luffy-snakeman-thumbnail.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            
            <div className="right-column">
                Luffy is the strongest member of the Straw Hat Pirates. In japanese, theyre known as Mugiwara.
                Luffy has five transformations. Each transformation has its own unique abilities, but still tied to his devil fruit somehow.
                Second gear makes his rubbery body heat up, stretching at an immeasurable speed.
                Third gear allows the main character to increase a certain body part, but the drawback is his entire body becomes really small, shrinking in soze.
                Fourth gear has two parts: Bounce Man and Snake Man (as seen in the photo).
                Bounce Man allows Luffy to stretch and move faster than second gear while maintaining a larger body frame.
                Snake Man allows Luffy to keep his size, but instead strech and move just like Bounce Man. The other difference is Luffy somehow resembles a snake and attacks accordingly.
                Fifth gear has yet to make its debut in the anime. It is said that fifth gear is supposedly to be Luffy's devil fruit awakening, just like how Trafalgar Law and Eustace Kidd awakened theis during their fight between Big Mom.
            </div>
        </div>
    );
}
