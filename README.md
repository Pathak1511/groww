#### Project Report

##### Tech used :

- Nextjs 14.1.3.
- React 18
- react-redux 9.1.0
- reduxjs/toolkit 2.2.1
- tailwindcss 3.3.0

##### Workflow :

Step 1 : From main page you will see a button which will take you to Checkout page.

<iframe src="https://groww-rosy.vercel.app/" title="groww-assignment" width="360px" height="640px"></iframe>

##### Make sure you click on the button since from here I am fetching the data from url provided in assignment.

Step 2: On the checkout page.
<img src="https://drive.google.com/thumbnail?id=1TOlIe4TG83N4oyw53GQZ1T3ut_vwOQ9e" alt="checkout page" width="360px" height="644px"/>

Step 3: On the payment page.

<iframe src="https://groww-rosy.vercel.app/payment" title="groww-assignment" width="360px" height="644px" overflow="hidden"></iframe>

Step 4 : Confirm Page
<img src="https://drive.google.com/thumbnail?id=1TOBQB7MH8vAvqlp5Q5f8Bo3r4hd-EyLq" alt="confirm page" width="360px" height="644px" overflow="hidden"/>

##### Issues Faced :

I faced issue while refereshing the page. Doing Refereshing reset the state of redux-toolkit. Since this application fetch data using useEffect when app start once at app.js file and you can direct to other page by clicking on the button, but if you are on page checkout,payment or confirm and you do referesh then the data will be lost.

##### Resolve ?

You can use Redux persist to solve this issue.
