function getBasePath() {
  const path = window.location.pathname;

  // If inside a folder
  if (path.includes('/digital-marketing/') || path.includes('/web-development/') || path.includes('/ecommerce/') || path.includes('/services/')) {
    return '../component/';
  }

  // Root pages
  return './component/';
}

// HEADER
fetch(getBasePath() + 'header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(err => console.error("Header error:", err));

// FOOTER
fetch(getBasePath() + 'footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer error:", err));