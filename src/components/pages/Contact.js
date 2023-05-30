import React from 'react';

export default function Contact() {
  return (
    <div className="container">
    <h2>Contact Me</h2>
    <a href="eogbeide2@gmail.com">Email</a>
    <form>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
);
}
