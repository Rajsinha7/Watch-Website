// Add event listener to the "Explore Watches" button
document.querySelector('#home button').addEventListener('click', () => {
    // Scroll to the watches section
    document.querySelector('#watches').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the "Buy Now" buttons
document.querySelectorAll('.watch-card button').forEach(button => {
    button.addEventListener('click', () => {
        // Add a confirmation message
        alert('you will be directed to the payment option');
    });
});

// Add event listener to the navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        // Prevent default link behavior
        event.preventDefault();
        // Get the section ID from the link href
        const sectionId = link.getAttribute('href');
        // Scroll to the section
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});     




// Add animation to elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.watch-card').forEach((card) => {
    observer.observe(card);
});







// Get the learn more button element
const learnMoreButton = document.querySelector('#about button');

// Add event listener to the learn more button
learnMoreButton.addEventListener('click', () => {
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>About Us</title>
        <style>
         body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
           background-image: url("https://hodinkee.imgix.net/uploads/images/1590079828602-0s0zkrmbwece-b508fc566b07f7282db3bee225f108e0/watches_make_you_better.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12");
            background-size: cover;

        }
            .text{
            color: #f2f2f2;
            font-size: 100px;
            }
            .about{
            
            font-size: 50px;
            
            }
        </style>
      </head>
      <body>
        <h1 class="about">About Our Company</h1>
        <p class="text">We are a leading watch manufacturer dedicated to creating high-quality timepieces that combine style, functionality, and precision.</p>
        <p class="text">Our mission is to provide our customers with the best possible experience, from the moment they purchase a watch to the moment they wear it.</p>
      </body>
    </html>
  `);
  newWindow.document.close();
});

// Developer button
const Button = document.querySelector('#dev');

// Add event listener to the learn more button
Button.addEventListener('click', () => {
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>About Developer</title>
        <style>
         body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
           background-image: url("https://media.istockphoto.com/id/177547733/photo/wrist-watch.jpg?s=612x612&w=0&k=20&c=XwYy2SHk68baSF-iK104tAHEm2Jio5idYnriPYmkgHI=");
            background-size: cover;

        }
            .txt{
            color: #f2f2f2;
            font-size: 40px;
            }
        
            .abt{
            color: #f2f2f2 ;

            }
        </style>
      </head>
      <body>
        <h1 class="abt">About Me</h1>
        <p class="txt">I'm Raj Sinha, a programmer and full-stack developer with expertise in Java development and frontend technologies. I design and implement efficient solutions, driven by a passion for innovation and problem-solving. With a strong foundation in Java, I also excel in crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript and Bootstrap5. I stay updated with the latest technologies and deliver high-quality work through meticulous attention to detail. I'm a collaborative team player who strives for exceptional results.</p>
        
      </body>
    </html>
  `);
  newWindow.document.close();
});







/*
// Get all buy now buttons
const buyNowButtons = document.querySelectorAll('.watch-card button');

// Add event listener to each buy now button
buyNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Create a new window
    const newWindow = window.open('', '_blank', 'width=400,height=500');

    // Write content to the new window
    newWindow.document.write(`
      <h1>Payment Options</h1>
      <form>
        <label>Payment Method:</label>
        <select id="payment-method">
          <option value="upi">UPI</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>
        <div id="upi-payment" style="display: none;">
          <label>UPI ID:</label>
          <input type="text" id="upi-id" />
          <button>Pay with UPI</button>
        </div>
        <div id="cash-payment" style="display: none;">
          <p>Cash payment details...</p>
        </div>
        <div id="card-payment" style="display: none;">
          <label>Card Number:</label>
          <input type="text" id="card-number" />
          <label>Expiry Date:</label>
          <input type="text" id="expiry-date" />
          <label>CVV:</label>
          <input type="text" id="cvv" />
          <button>Pay with Card</button>
        </div>
      </form>

      <script>
        const paymentMethod = document.getElementById('payment-method');
        const upiPayment = document.getElementById('upi-payment');
        const cashPayment = document.getElementById('cash-payment');
        const cardPayment = document.getElementById('card-payment');

        paymentMethod.addEventListener('change', () => {
          if (paymentMethod.value === 'upi') {
            upiPayment.style.display = 'block';
            cashPayment.style.display = 'none';
            cardPayment.style.display = 'none';
          } else if (paymentMethod.value === 'cash') {
            upiPayment.style.display = 'none';
            cashPayment.style.display = 'block';
            cardPayment.style.display = 'none';
          } else if (paymentMethod.value === 'card') {
            upiPayment.style.display = 'none';
            cashPayment.style.display = 'none';
            cardPayment.style.display = 'block';
          }
        });
      </script>
    `);

    // Close the document stream
    newWindow.document.close();
  });
});
*/








const buyNowButtons = document.querySelectorAll('.watch-card button');

// Add event listener to each buy now button
buyNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Create a new window
    const newWindow = window.open('', '_blank', 'width=500,height=700');

    // Write content to the new window
    newWindow.document.write(`
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
           background-image: url("https://9f8e62d4.delivery.rocketcdn.me/wp-content/uploads/2023/10/When-Is-It-Okay-To-Wear-A-Watch-With-Bracelets.gif");
            background-size: cover;
        }
        .payment-container {
          width: 80%;
          margin: 40px auto;
          padding: 20px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .payment-header {
          background-color: #4CAF50;
          color: #fff;
          padding: 10px;
          border-radius: 10px 10px 0 0;
        }
        .payment-method {
          margin-top: 20px;
        }
        .payment-method select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .payment-details {
          margin-top: 20px;
        }
        .payment-details input[type="text"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .payment-button {
          background-color: #4CAF50;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .payment-button:hover {
          background-color: #3e8e41;
        }
      </style>
      <div class="payment-container">
        <div class="payment-header">
          <h2>Payment Options</h2>
        </div>
        <form>
          <div class="payment-method">
            <label>Payment Method:</label>
            <select id="payment-method">
               <option value="upi">Select</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
            </select>
          </div>
          <div id="upi-payment" style="display: none;" class="payment-details">
            <label>UPI ID:</label>
            <input type="text" id="upi-id" />
            <button class="payment-button" onclick="makePayment()">Pay with UPI</button>
          </div>
          <div id="cash-payment" style="display: none;" class="payment-details">
            <p>Cash payment details...</p>
            <button class="payment-button" onclick="makePayment()">Make Payment</button>
          </div>
          <div id="card-payment" style="display: none;" class="payment-details">
            <label>Card Number:</label>
            <input type="text" id="card-number" />
            <label>Expiry Date:</label>
            <input type="text" id="expiry-date" />
            <label>CVV:</label>
            <input type="text" id="cvv" />
            <button class="payment-button" onclick="makePayment()">Pay with Card</button>
          </div>
        </form>
      </div>

      <script>
        const paymentMethod = document.getElementById('payment-method');
        const upiPayment = document.getElementById('upi-payment');
        const cashPayment = document.getElementById('cash-payment');
        const cardPayment = document.getElementById('card-payment');

        paymentMethod.addEventListener('change', () => {
          if (paymentMethod.value === 'upi') {
            upiPayment.style.display = 'block';
            cashPayment.style.display = 'none';
            cardPayment.style.display = 'none';
          } else if (paymentMethod.value === 'cash') {
            upiPayment.style.display = 'none';
            cashPayment.style.display = 'block';
            cardPayment.style.display = 'none';
          } else if (paymentMethod.value === 'card') {
            upiPayment.style.display = 'none';
            cashPayment.style.display = 'none';
            cardPayment.style.display = 'block';
          }
        });

        function makePayment() {
          alert('Transaction Successful');
          alert('Thank you for making the payment!');
          window.close();
        }
      </script>
    `);

    //

    // Close the document stream
    newWindow.document.close();
  });
});










