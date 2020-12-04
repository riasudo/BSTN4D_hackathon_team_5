import image from "./assets/icons/walmart-main-logo-1.jpg" 

import './SizeProfile.scss';
import Dropdown from '../src/assets/icons/dropdown.svg'


export default function SizeProfile (){
    return (
        <div className="create-profile-page">
            <div className="size-profile-box">
                <div className="size-profile-banner">
                    <img src={image} alt="walmart logo"/>
                    <h1>Create Size Profile</h1>
                </div>
                <form className="size-profile">
                    <label htmlFor="size-profile-name" className="size-profile-namelabel">Name</label>
                    <input htmlFor="size-profile-name" className="size-profile-name"/>
                    <div className="gender">
                        <div className="gender-label-dropdown">
                            <label htmlFor="size-profile-gender" className="size-profile-genderlabel">Gender</label>
                            {/* <img src={Dropdown} alt="dropdown arrow" className="dropdown-arrow"/> */}
                            <div class="dropdown">
                                <img src={Dropdown} alt="dropdown arrow" className="dropdown-arrow"/>
                                <div class="dropdown-content">
                                <p>Small</p>
                                <p>Medium</p>
                                <p>Large</p>
                                </div>
                            </div>
                        </div>
                        <input htmlFor="size-profile-gender" className="size-profile-gender"/>
                    </div>
                    <label htmlFor="size-profile-shirtsize" className="size-profile-shirtsizelabel">Shirt Size</label>
                    <input htmlFor="size-profile-shirtsize" className="size-profile-shirtsize"/>

                    <label htmlFor="size-profile-dob" className="size-profile-doblabel">Date of Birth</label>
                    <input htmlFor="size-profile-dob" className="size-profile-dob" placeholder="DD/MM/YYYY"/>

                    <div className="size-profile-pants">
                        <label htmlFor="size-profile-waist" className="size-profile-waistlabel">Waist</label>
                        <input htmlFor="size-profile-waist" className="size-profile-waist" placeholder="28, 29"/>

                        <label htmlFor="size-profile-length" className="size-profile-lengthlabel">Length</label>
                        <input htmlFor="size-profile-length" className="size-profile-length" placeholder="30, 31"/>
                    </div>

                    <label htmlFor="size-profile-shoe" className="size-profile-shoelabel">Shoe Size</label>
                    <input htmlFor="size-profile-shoe" className="size-profile-shoe" placeholder="10, 10.5, 11"/>
                
                    <button className="size-profile-button">Create Profile</button>
                    </form>
                </div>
            </div>
    )
}