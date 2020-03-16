import React from 'react'

const Form = (props) => {
    return (
        <form>
            <div>
                <p>*Required</p>
                <label htmlFor="first-name">Please enter your first name</label><br/>
                <input id="first-name" type="text" placeholder="first name..."/><br/>

                <label htmlFor="last-name">Please enter your last name</label><br/>
                <input id="last-name" type="text" placeholder="last name..."/><br/>

                <label htmlFor="email">Please enter your email adress</label><br/>
                <input id="email" type="email" placeholder="email address..."/><br/>
            </div>

            <label htmlFor="work-phone">Please enter your work telephone number</label><br/>
            <input id="work-phone" type="number" placeholder="Work telephone..."/><br/>
            <label htmlFor="extention-number">Please enter your extention number</label><br/>
            <input id="extention-number" type="number" placeholder="extention number..."/><br/>

            <div>
                <p>*Required</p>
                <p>Please enter your skills</p>
                <input type="radio" id="professional" name="professional" value="professional"/>
                <label htmlFor="professional">Professional</label><br/>
                <input type="radio" id="communication" name="communication" value="communication"/>
                <label htmlFor="communication">communication</label>
                <input type="radio" id="Meeting facilitation" name="Meeting facilitation" value="Meeting facilitation"/>
                <label htmlFor="Meeting facilitation">Meeting facilitation</label>
                <input type="radio" id="Powerpoint creating" name="Powerpoint creating" value="Powerpoint creating"/>
                <label htmlFor="Powerpoint creating">Powerpoint creating</label>
            </div>
            <label htmlFor="bio"> Bio</label>
            <input type="text" name="bio" id="bio" placeholder="A bit about yourself"/>
        </form>
    )
}
export default Form