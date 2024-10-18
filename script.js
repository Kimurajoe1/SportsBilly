// Conversion Rate: 1 ETH = 10000 Sport Billy Tokens (adjust as needed)
function convertToTokens() {
    const ethAmount = document.getElementById("eth-amount").value;
    const conversionRate = 10000; // 1 ETH = 10000 Sport Billy Tokens
    const tokenAmount = ethAmount * conversionRate;

    const resultText = tokenAmount 
        ? `You will get approximately ${tokenAmount} Sport Billy Tokens for ${ethAmount} ETH.` 
        : 'Please enter a valid ETH amount.';

    document.getElementById("conversion-result").innerText = resultText;
}

// Fetch Live Token Price (dummy function; replace with real API call)
function fetchLivePrice() {
    document.getElementById("token-price").innerText = "$0.05 (per token)"; // Static value for demo
}

// Fetch live price when the page loads
window.onload = fetchLivePrice;
