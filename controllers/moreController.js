function generateHtmlWithDynamicData(routeName, dynamicData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${routeName}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
        }
        p {
          line-height: 1.6;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${routeName}</h1>
        <hr>
        <p>${dynamicData}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </body>
    </html>
  `;
}

// Function to fetch dynamic data based on route name (Replace this with your implementation)
function getDynamicData(routeName) {
  // Sample dynamic data generation based on route name
  switch (routeName) {
    case 'Offer and Program':
      return ' for Offer and Program route';
    case 'Fantasy Point System':
      return ' for Fantasy Point System route';
    case 'Fantasy Self Help':
      return ' for Fantasy Self Help route';
    // Add cases for other routes as needed
    default:
      return '';
  }
}

// Controller functions for each route
exports.offerandProgram = (req, res) => {
  const dynamicData = getDynamicData('Offer and Program');
  const html = generateHtmlWithDynamicData('Offer and Program', dynamicData);
  res.send(html);
};

exports.fantasyPointSystem = (req, res) => {
  const dynamicData = getDynamicData('Fantasy Point System');
  const html = generateHtmlWithDynamicData('Fantasy Point System', dynamicData);
  res.send(html);
};

exports.fantasySelfHelp = (req, res) => {
  const dynamicData = getDynamicData('Fantasy Self Help');
  const html = generateHtmlWithDynamicData('Fantasy Self Help', dynamicData);
  res.send(html);
};

exports.aboutUs = (req, res) => {
  const dynamicData = getDynamicData('About Us');
  const html = generateHtmlWithDynamicData('About Us', dynamicData);
  res.send(html);
};
 

exports.termAndCondition = (req, res) => {
  const dynamicData = getDynamicData('Terms and Conditions'); // Fetch dynamic data
  const html = generateHtmlWithDynamicData('Terms and Conditions', dynamicData); // Generate HTML with dynamic data
  res.send(html); // Send HTML response
};

exports.privacyPolicy = (req, res) => {
  const dynamicData = getDynamicData('Privacy Policy'); // Fetch dynamic data
  const html = generateHtmlWithDynamicData('Privacy Policy', dynamicData); // Generate HTML with dynamic data
  res.send(html); // Send HTML response
};

exports.contactUs = (req, res) => {
  const dynamicData = getDynamicData('Contact Us'); // Fetch dynamic data
  const html = generateHtmlWithDynamicData('Contact Us', dynamicData); // Generate HTML with dynamic data
  res.send(html); // Send HTML response
};

exports.faq = (req, res) => {
  const dynamicData = getDynamicData('FAQ'); // Fetch dynamic data
  const html = generateHtmlWithDynamicData('FAQ', dynamicData); // Generate HTML with dynamic data
  res.send(html); // Send HTML response
};

exports.Legality = (req, res) => {
  const dynamicData = getDynamicData('Legality'); // Fetch dynamic data
  const html = generateHtmlWithDynamicData('Legality', dynamicData); // Generate HTML with dynamic data
  res.send(html); // Send HTML response
};

exports.responsibleGaming = (req, res) => {
  const dynamicData = getDynamicData('Responsible Gaming'); // Fetch dynamic data
  const html = generateHtmlWithDynamicData('Responsible Gaming', dynamicData); // Generate HTML with dynamic data
  res.send(html); // Send HTML response
};
