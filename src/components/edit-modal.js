import React, { useEffect } from 'react';

const EditModal = ({ editTodo }) => {
    const {id, name} = editTodo;
    const {editName, setName } = React.useState(name);

    // const changeName = () => {
    //     useEffect(() => {
    //         setName(name)
    //     }, [name])
    // }
    // const updateTodo
    return <>
        <div className="modal fade" id="editModal" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Todo ID {id}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>  
                    <div className="modal-body">
                        <div>
                            <input className="d-none" value={id}  />
                            <input className="form-control" value={name} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default EditModal;