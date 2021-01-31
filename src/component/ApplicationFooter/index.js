import React from 'react';
import ApplicationPageLayout from "../../helpers/ApplicationPageLayout"
import ApplicationAboutSection from "../ApplicationAboutSection"
import './index.scss';

function ApplicationFooter() {
    const List = ["About", "Advertise", "Privacy & Policy", "Contact Us"]
  return (
      <React.Fragment>
            <ApplicationAboutSection />
            <div className="application-footer">
                <ApplicationPageLayout>
                    <div className="application-footer__container">
                        <div>
                            &#169; Copyright 2021,All Rights Reserved
                        </div>
                        <div className="application-footer__list">
                            {
                                List.map((value)=>{
                                    return(
                                        <div className= "application-footer__list__data">
                                            {value}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </ApplicationPageLayout>
            </div>
      </React.Fragment>
    
  );
}

export default ApplicationFooter;
