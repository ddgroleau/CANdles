import React from 'react';
import '../assets/footer.css';

function Footer() {
    const handleClick = async () => {
        if (document.getElementById('subscriber').value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            let data = {email: document.getElementById('subscriber').value};
            console.log(`Sending this email to the server: ${data.email}`);
            const request = await fetch("/subscribers", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await request.json();
            const input= document.getElementById("subscriber");
            console.log(response);
            if (!JSON.stringify(response).includes("MongoError")) {
            setTimeout(()=>{
                input.value="";
                input.placeholder= "Success!";
                document.getElementById("serverSuccess").style.visibility = "visible";
            },800);
            setTimeout(()=>{
                window.location.reload();
                return false;
            },1800);
        } else {
            setTimeout(()=>{
                input.value="";
                input.placeholder= "Uh Oh. Try again.";
                document.getElementById("serverFailure").style.visibility = "visible";
            },800);
            setTimeout(()=>{
                window.location.reload();
                return false;
            },2200);
        };
        } else {
            setTimeout(()=>{
                document.getElementById("subscriber").value="";
                document.getElementById("subscriber").placeholder= "Uh Oh. Try again.";
                document.getElementById("serverFailure").style.visibility = "visible";
            },800);
            setTimeout(()=>{
                window.location.reload();
                return false;
            },2200);
        }
    };
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Something down here Broh!
                </p>
                <p className='footer-subscription-text'>
                    More stuff down here Broh...
                </p>
                <div className='input areas'>
                    <div className="input-container">
                        <input id='subscriber' type='email' placeholder="Your email"
                        className='footer-input'/>
                            <i id="serverSuccess" className="fas fa-check"></i>
                            <i id="serverFailure" className="fas fa-user-times"></i>
                    </div>
                        <button onClick={handleClick} className='btn--outline'>Subscribe</button>
                </div>
            </section>
        </div>
    )
}

export default Footer
