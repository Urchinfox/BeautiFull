import React from "react";
import PropTypes from 'prop-types';

export default function ZonePicModal({closeModal,picture,focusPic}) {
    return (
        <div className="modal fade" id="picModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={closeModal} ></button>
                    </div>
                    <div className="modal-body">
                     {
                        picture.filter((_,index)=> index === focusPic).map((item,index)=>{
                            return(<React.Fragment key={index}>
                                <img src={item} className="w-100" width={100} height={100} alt="" />
                            </React.Fragment>);
                        })
                     }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ZonePicModal.propTypes = {
    closeModal: PropTypes.func.isRequired, 
    picture: PropTypes.array.isRequired,  
    focusPic: PropTypes.string.isRequired,
  };