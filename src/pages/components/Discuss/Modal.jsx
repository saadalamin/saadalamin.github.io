import React from 'react'
import { $firebase_firestore_write, $timestamp } from '../../utils/firebase';

function Modal() {
    const submitQ = (e) => {
        e.preventDefault();
        const email = document.querySelector('#modalForDiscuss #email').value;
        if (!document.querySelector('#modalForDiscuss #title').value) return alert('Title is required');
        if (!document.querySelector('#modalForDiscuss #name').value) return alert('Name is required');
        if (!email) return alert('Email is required');

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) return alert('Invalid Email');

        const data = {
            title: document.querySelector('#modalForDiscuss #title').value,
            body: document.querySelector('#modalForDiscuss #description').value,
            author: document.querySelector('#modalForDiscuss #name').value,
            date: $timestamp(new Date()),
            email: email,
            answer: []
        };

        $firebase_firestore_write('discuss-posts', data, () => {
            alert('Question submitted successfully');
            document.querySelector('#modalForDiscuss').querySelector('button.btn-close').click();
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }, (e) => {
            alert("Failed to submit question");
            console.error(e);
        });
    }
    return (
        <div
            className="modal fade"
            id="modalForDiscuss"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="Ask Question"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-scrollable"
                style={{
                    maxWidth: '500px',
                }}>
                <div className="modal-content bg-light text-black">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">
                            Ask Question
                        </h1>
                        <button
                            type="button"
                            className="btn-close bg-white p-1"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body list-group p-0 text-center">
                        <form className="p-3">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    id="title"
                                    className="form-control"
                                    placeholder="Title (required)"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    id="description"
                                    className="form-control"
                                    placeholder="Description"
                                ></textarea>
                            </div>
                            <p>
                                <small>Your Information</small>
                            </p>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    id='name'
                                    className="form-control"
                                    placeholder="Name (required)"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    id='email'
                                    className="form-control"
                                    placeholder="Email (required)"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={submitQ}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal