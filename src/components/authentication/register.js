import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../assets/css/register.css'
const Register = () => {
    return (
        <div className="container">
            <br/>
            <div className="card shadow-lg">
            <div class="form-content register-box">
            <form>
                <div class="form-group form-box">
                    <label for="inputname">Name</label>
                    <input type="text" class="form-control" id="inputname" placeholder="Name" />
                </div>
                <div class="form-group form-box">
                    <label for="inputfathersname">Father`s Name</label>
                    <input type="text" class="form-control" id="inputfathersname" placeholder="Father`s Name" />
                </div>
                <div class="form-group form-box">
                    <label for="inputoccupationdetails">Occupation Details</label>
                    <input type="text" class="form-control" id="inputoccupationdetails" placeholder="Occupation Details" />
                </div>
                <div class="form-group form-box">
                    <label for="inputdesignation">Designation</label>
                    <input type="text" class="form-control" id="inputdesignation" placeholder="Designation" />
                </div>
                <div class="form-group form-box">
                    <label for="inputorganisation">Organisation</label>
                    <input type="text" class="form-control" id="inputorganisation" placeholder="Organisation" />
                </div>
                <div class="form-group form-box">
                    <label for="inputAddress">Office Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Office Address" />
                </div><div class="form-group form-box">
                    <label for="inputdistrict">District</label>
                    <input type="text" class="form-control" id="inputdistrict" placeholder="District" />
                </div>
                <div class="form-group form-box">
                    <label for="inputpincode">Pincode</label>
                    <input type="text" class="form-control" id="inputpincode" placeholder="Pincode" />
                </div>
                <div class="form-group form-box">
                    <label for="inputstate">State</label>
                    <input type="text" class="form-control" id="inputstate" placeholder="State" />
                </div>
                <div className="row">
                    <div class="form-group form-box col-md-6">
                        <label for="inputphone">Phone</label>
                        <input type="number" class="form-control" id="inputphone" placeholder="Phone" />
                    </div>
                    <div class="form-group form-box col-md-6">
                        <label for="inputfax">Fax</label>
                        <input type="text" class="form-control" id="inputfax" placeholder="Fax" />
                    </div>
                    <div className="row">
                    </div>
                    <div class="form-group form-box col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group form-box col-md-6">
                        <label for="inputmobile">Mobile</label>
                        <input type="number" class="form-control" id="inputmobile" placeholder="Mobile" />
                    </div>
                </div>
                <div class="form-group form-box">
                    <label for="inputpersonalcommunicationdetails">Personal & Communication Details</label>
                    <input type="text" class="form-control" id="inputpersonalcommunicationdetails" placeholder="Personal & Communication Details" />
                </div>
                <div class="form-group form-box ">
                    <label for="inputdob">Date of Birth</label>
                    <input type="text" class="form-control" id="inputdob" placeholder="Date of Birth" />
                </div>
                <div class="form-group form-box ">
                    <label for="inputeducation">Educational Qualification</label>
                    <input type="text" class="form-control" id="inputeducation" placeholder="Educational Qualification" />
                </div>
                <div class="form-group form-box ">
                    <label for="inputhobbies">Your Special Interest, Hobbies</label>
                    <input type="text" class="form-control" id="inputhobbies" placeholder="Your Special Interest, Hobbie" />
                </div>
                <div class="form-group form-box">
                    <label for="inputspouse">If Married, Name of Spouse</label>
                    <input type="text" class="form-control" id="inputspouse" placeholder="If Married, Name of Spouse" />
                </div>
                <div class="form-group form-box">
                    <label for="inputoccupation">Occupation</label>
                    <input type="text" class="form-control" id="inputoccupation" placeholder="Occupation" />
                </div>
                <div class="form-group form-box">
                    <label for="inputdob">His/Her Date of Birth</label>
                    <input type="text" class="form-control" id="inputdob" placeholder="His/Her Date of Birth" />
                </div>
                <div class="form-group form-box">
                    <label for="inputchildren">Children`s Name & Date of Birth</label>
                    <input type="text" class="form-control" id="inputchildren" placeholder="Children`s Name & Date of Birth" />
                </div>
                <div class="form-group form-box">
                    <label for="inputAddress">Residence Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Residence Address" />
                </div>
                <div class="form-group form-box">
                    <label for="inputdistrict">District</label>
                    <input type="text" class="form-control" id="inputdistrict" placeholder="Tax,GST" />
                </div>
                <div class="form-group form-box">
                    <label for="inputtax">Tax,GST</label>
                    <input type="text" class="form-control" id="inputtax" placeholder="Tax,GST" />
                </div>
                <div class="form-group form-box">
                    <label for="inputpan">Pan No</label>
                    <input type="text" class="form-control" id="inputpan" placeholder="Pan No" />
                </div>
                <div class="form-group form-box">
                    <label for="inputadhaar">Adhaar No</label>
                    <input type="text" class="form-control" id="inputadhaar" placeholder="Adhaar No" />
                </div>
                <div class="form-group form-box">
                    <label for="inputAddress">What events would you like YTF to host?</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="What events would you like YTF to host?" />
                </div>
                <div className="row">
                Are you a member of any club or organisation?
                    <div class="form-check">
                       
                    <input class="form-check-input"  type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label class="form-check-label" for="exampleRadios1">
                            Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                            No</label>
                    </div>
                </div>
               
                <button type="submit" class="btn register-button">Register</button>
            </form>
            </div>
            </div>
        </div>
    )
};
export default Register;