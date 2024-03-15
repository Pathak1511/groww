# Project Documentation

## Project Name: groww assignment

### Overview:

This project is the overview of checkout process built using nextjs 14 and redux-toolkit. It includes fetching of data from external api which contains product information and other details.

Example :

```json
{
  "products": [
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave",
      "price": 168,
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "quantity": 10
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts",
      "price": 22.3,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "quantity": 7
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "quantity": 2
    }
  ],
  "paymentMethods": ["UPI", "CARDS"]
}
```

This project used this data to process checkout functionality.

### Table of Contents:

1. Technologies Used
2. Installation
3. Usage
4. Project Structure
5. Features
6. Known Issues
7. Future Improvements
8. Contact Information

---

### 1. Technologies Used:

- **Next.js** (Version 14.1.3): A React framework for server-side rendering and client-side routing.
- **React** (Version 18): A JavaScript library for building user interfaces.
- **react-redux** (Version 9.1.0): Official Redux bindings for React.
- **reduxjs/toolkit** (Version 2.2.1): An opinionated, batteries-included toolset for efficient Redux development.
- **tailwindcss** (Version 3.3.0): A utility-first CSS framework for building custom designs.

### 2. Installation:

To install and set up the project locally, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/Pathak1511/groww.git
   ```

2. Navigate to the project directory:

   ```bash
   cd groww
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### 3. Usage:

To run the project locally, use the following command:

```bash
npm run dev
```

Access the project in your web browser at `http://localhost:3000`.

### 4. Project Structure:

The project structure is organized as follows:

```
- /public          # Static assets
- /src/pages       # Next.js pages directory
- /src/store       # Redux store configuration and slices
- /src/styles      # CSS stylesheets
- /src/lib         # Utility functions
- README.md        # Project documentation
- package.json     # NPM package configuration
```

### 5. Features:

1. **Main Page**:

   - Displays a button labeled "Checkout".
   - Uses useEffect hook to fetch data and initialize the Redux Toolkit state.

2. **Checkout Page**:

   - Displays project details fetched from the Redux state.
   - Contains a payment button to proceed to the payment page.

3. **Payment Page**:

   - Allows users to choose between card, UPI, or cash on delivery payment methods.
   - Proceeds to the final payment page after selecting a payment method.

4. **Confirmation Page**:
   - Displays details of the purchased products, including quantity, total price, and payment status.

### 6. Known Issues:

- While Refereshing the state get's reset.

### 7. Future Improvements:

- Add Redux-persist for preventing state reset when refereshing.
- Improve UI/UX for a better shopping experience.

### 8. Contact Information:

If you have any questions or feedback about the project, feel free to reach out:

- **Name:** Hritik Pathak
- **Email:** hritik1511@gmail.com
- **GitHub Profile:** https://github.com/Pathak1511/groww
