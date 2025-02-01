// Convert the query parameters object into a URL-encoded string
// Define the API endpoint
const url = "https://ads.api.cj.com/query";

// Define the Authorization token (replace "XXXXXXXXX" with your actual token)
const authToken = "Bearer 5vdggj4jebt51sctax5kwfa1qn";

// Define the GraphQL query as a string
const graphqlQuery = `
{
  products(companyId: "7342464" ,  limit: 1000, keywords:["Dozen Roses","flowers","chocolate" "jewelry", "strawberries", "Valentine's Day", "romantic"]), {

    resultList {
      advertiserId,
      advertiserName,
            imageLink,
      title,
      description,
      
      linkCode(pid: "101316119") {
        clickUrl
      }
    }
  }
}
`;

// Perform the fetch request
fetch(url, {
  method: "POST", // Use POST method
  headers: {
    Authorization: authToken, // Add the Bearer token for authentication
    "Content-Type": "application/json", // Specify that we're sending JSON data
  },
  body: JSON.stringify({ query: graphqlQuery }), // Send the GraphQL query in the body
})
  .then((response) => {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    // Handle the data returned by the API
    console.log("Data received:", data);

    // Step 1: Filter out products containing the word "funeral"
    const refinedProducts = data.data.products.resultList
      .filter(
        (product) =>
          !product.title.toLowerCase().includes("funeral") &&
          !product.description.toLowerCase().includes("funeral")
      )
      .map((product) => {
        return {
          title: product.title,
          description: product.description,
          imageLink: product.imageLink,
          advertiserName: product.advertiserName || "N/A",
          linkCode: product.linkCode?.clickUrl,
        };
      });

    // ring
    const veryRefinedProducts = refinedProducts.map((product) => {
      if (product.linkCode) {
        return {
          title: product.title,
          description: product.description,
          imageLink: product.imageLink,
          advertiserName: product.advertiserName,
          linkCode: product.linkCode,
        };
      }
    });
    // Assuming veryRefinedProducts is an array that may contain undefined or invalid entries
    veryRefinedProducts.forEach((product) => {
      // Check if the product exists and has a title property
      if (product && product.title) {
        const newElement = document.createElement("div");
        const advertiserName = document.createElement("p");
        const description = document.createElement("p");
        const photos = document.createElement("amp-img");
        const link = document.createElement("a");

        // Set the text content to the product's title
        newElement.textContent = product.title;
        link.textContent = "Click here to view the deal!";
        advertiserName.textContent = product.advertiserName;
        description.textContent = product.description;
        photos.src = product.imageLink;
        photos.setAttribute("alt", "Product Image"); //
        //
        if (product.advertiserName.toLowerCase().includes("russell")) {
          const photosURL = "https://minnowspace.com/img/land-see/content/valentines.jpg";
          photos.setAttribute("src", photosURL); // Image source
        } else {
          photos.setAttribute("src", product.imageLink); // Image source
        }
        // Alt text for accessibility
        photos.setAttribute("width", "400"); // Width of the image
        photos.setAttribute("height", "400"); // Height of the image
        photos.setAttribute("layout", "responsive"); // Responsive layout
        link.href = product.linkCode;
        // Add styling to the element
        newElement.style.backgroundColor = "pink";
        newElement.style.padding = "10px";
        newElement.style.margin = "5px"; // Optional: Add spacing between elements
        newElement.style.borderRadius = "5px"; // Optional: Rounded corners
        photos.style.width = "400px";
        // Append the new element to the body (or another container)
        document.body.appendChild(newElement);
        newElement.appendChild(description);
        newElement.appendChild(photos);
        newElement.appendChild(link);
      } else {
        console.warn("Skipping invalid product:", product); // Log skipped items for debugging
      }
    });
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Error fetching data:", error);
  });
