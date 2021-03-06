import React from 'react';
import classes from './Modal.css'
import Aux from '../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    
    return (
        <Aux>
            <Backdrop show={props.show} modalClosed={props.modalClose}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'traslateY(0)' : 'traslateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    zIndex: props.show ? '500' : '-1'
                }}>
                {props.children}
            </div>
        </Aux>
    );
};

export default modal;   