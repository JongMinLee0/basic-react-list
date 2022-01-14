import React, { useState } from 'react';
import './AddForm.css'

const AddForm = ({addItem}) => {
    const [id, setId] = useState(0);
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const onClickAddButton = () => {
        addItem(id, author, imageUrl);
    }

    return (
        <div className="add-form">
            <div className="form-wrap">
                <div className="form">
                    <div className="floating">
                        <input id="input_id" className="floating__input" name="id" type="number" placeholder="id"
                            value={id} onChange={(event)=>setId(event.target.value)} />
                        <label htmlFor="input_id" className="floating__label" data-content="id">
                            <span className="hidden--visually">
                                id
                            </span>
                        </label>
                    </div>

                    <div className="floating">
                        <input id="input__author" type="text" className="floating__input" name="author" type="text" placeholder="author" 
                            value={author} onChange={(event)=>setAuthor(event.target.value)} />
                        <label htmlFor="input__author" className="floating__label" data-content="author">
                            <span className="hidden--visually">author</span>
                        </label>
                    </div>
                    <div className="floating">
                        <input id="input_imageUrl" type="text" className="floating__input" name="imageUrl" type="text" placeholder="image_url"
                            value={imageUrl} onChange={(event)=>setImageUrl(event.target.value)} />
                        <label htmlFor="input_imageUrl" className="floating__label" data-content="image_url">
                            <span className="hidden--visually">image_url</span>
                        </label>
                    </div>
                    <button className="button" onClick={onClickAddButton}>ADD</button>
                </div>
            </div>
        </div>
    );
}


export default AddForm;