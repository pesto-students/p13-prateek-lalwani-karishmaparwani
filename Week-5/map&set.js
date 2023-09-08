// Create a WeakMap to store product view counts
const productViews = new WeakMap();

// Create a mapping object for numeric IDs to objects
const idToObjectMap = {};

// Function to increment product views using numeric IDs
function incrementProductViews(productId) {
    // Get or create an object for the numeric ID
    const productIdObj = idToObjectMap[productId] || { id: productId };

    // Get the view count for the product
    let viewCount = productViews.get(productIdObj) || 0;

    // Increment the view count by 1
    viewCount++;

    // Set the updated view count in the WeakMap
    productViews.set(productIdObj, viewCount);

    // Update the mapping object
    idToObjectMap[productId] = productIdObj;

    // Return the updated view count
    return viewCount;
}

// Example usage:
console.log(incrementProductViews(123)); // Output: 1
console.log(incrementProductViews(123)); // Output: 2
console.log(incrementProductViews(456)); // Output: 1
console.log(incrementProductViews(123)); // Output: 3


// Create a WeakSet to store product IDs
const cartItems = new WeakSet();

// Create a mapping object for numeric IDs to objects
const cartIdToObjectMap = {};

// Function to increment product views using numeric IDs
function addToCart(productId) {
    // Create a unique object wrapper for the numeric ID
    const productIdObj = cartIdToObjectMap[idToObjectMap]||{ id: productId };

    // Check if the product ID is already in the cart
    if (cartItems.has(productIdObj)) {
        console.log("Product already exists in the cart");
    } else {
        // Add the product ID to the WeakSet
        cartItems.add(productIdObj);
        console.log("Product added to the cart");
        // Update the mapping object
    cartIdToObjectMap[productId] = productIdObj;
    }
}
//duplicate happing
addToCart(123); // Output: Product added to cart
addToCart(123); // Output: Product already exists in the cart
