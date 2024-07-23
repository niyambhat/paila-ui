// routes.config.js

const routes = [
    {
      category: "Occasion",
      pages: [
        { name: "Wedding / Anniversary", path: "/wedding-anniversary" },
        { name: "Baby Shower", path: "/baby-shower" },
        { name: "Get Well Soon", path: "/get-well-soon" },
        { name: "Her Birthday", path: "/her-birthday" },
        { name: "His Birthday", path: "/his-birthday" },
        { name: "Sorry", path: "/sorry" },
        { name: "Sympathy", path: "/sympathy" },
        { name: "Thank you", path: "/thank-you" },
      ],
    },
    {
      category: "Categories",
      pages: [
        { name: "Housewarming", path: "/housewarming" },
        { name: "Gourmet", path: "/gourmet" },
        { name: "No Alcohol", path: "/no-alcohol" },
        { name: "Baby", path: "/baby" },
        { name: "Beer & Spirits", path: "/beer-spirits" },
        { name: "Cellar", path: "/cellar" },
        { name: "Women's", path: "/womens" },
        {
          name: "Wedding / Anniversary",
          path: "/wedding-anniversary-categories",
        },
        { name: "Men's Hampers", path: "/mens-hampers" },
      ],
    },
    {
      category: "Customer Service",
      pages: [
        { name: "Delivery Information", path: "/delivery-information" },
        { name: "Corporate Branding", path: "/corporate-branding" },
        { name: "Customer Loyalty Club", path: "/customer-loyalty-club" },
        { name: "Contact Us", path: "/contact-us" },
      ],
    },
    {
      category: "About Us",
      pages: [
        { name: "About First Class Hampers", path: "/about-first-class-hampers" },
        { name: "Our Supported Charities", path: "/our-supported-charities" },
        { name: "Customer Reviews", path: "/customer-reviews" },
      ],
    },
    {
      category: "Terms",
      pages: [
        { name: "Terms & Conditions", path: "/terms-conditions" },
        { name: "Privacy and Security", path: "/privacy-and-security" },
      ],
    },
  ];
  
  export default routes;
  