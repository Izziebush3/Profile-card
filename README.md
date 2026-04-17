 Profile Card Component

A responsive, accessible **Profile Card** built with semantic HTML, modern CSS, and vanilla JavaScript.
This project was created as part of a frontend assessment to demonstrate clean structure, accessibility, responsiveness, and testability using `data-testid` attributes.

 Live Demo
https://izziebush3.github.io/Profile-card/

GitHub Repository
https://github.com/Izziebush3/Profile-card

 Features
 Semantic HTML structure (`article`, `header`, `figure`, `nav`, `section`)
 Fully responsive layout (mobile, tablet, desktop)
 Accessible design (ARIA attributes, alt text, keyboard navigation)
 Dynamic current time display using `Date.now()`
 Test-friendly with required `data-testid` attributes
 External links open securely in new tabs


Technologies Used
* HTML5
* CSS3 (Flexbox & Grid)
* JavaScript (Vanilla)

Accessibility Considerations
* Meaningful `alt` text for images
* `aria-live="polite"` for dynamic time updates
* Keyboard-accessible navigation
* Visible focus states for interactive elements
* Proper heading hierarchy

 Responsiveness
* Mobile-first design
* Flexible layout that adapts to different screen sizes
* Content stacks on small screens and aligns side-by-side on larger screens

Dynamic Time Feature
The profile card displays the current epoch time in milliseconds using:
```javascript
Date.now()
```
The time updates every 500 milliseconds to remain accurate.

Testing
All required elements include specific `data-testid` attributes to support automated testing.
Example:
html
data-testid="test-user-name"
data-testid="test-user-avatar"
data-testid="test-user-time"

How to Run Locally
1. Clone the repository:
git clone https://github.com/Izziebush3/Profile-card.git

2. Navigate into the project folder:
Profile card
 
3. Open `index.html` in your browser.

Author
**Izzie Bush**

* GitHub: https://github.com/Izziebush3
* Twitter: https://x.com/izzie_bush
* LinkedIn: https://www.linkedin.com/in/wisdom-o-20a890314


## 📄 License

This project is open-source and available under the MIT License.
