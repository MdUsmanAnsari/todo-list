import React  from 'react';

const TodoItem = props => {

        return (
            <div className="item-container">
                <h3> {props.text} </h3>
                <div>
                    <span className="material-icons delete-icon" onClick={props.handlerDelete}>
                    delete
                    </span>
                    <span className="material-icons" onClick={props.handlerEdit}> 
                    create
                    </span>
                </div>
               
            </div>
        )


}


export default TodoItem;