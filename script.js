// Function to smooth scroll to gallery when clicking "Buy Now" header button
function scrollToGallery() {
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
}

// 1. Header එකේ තියෙන ලොකු "Buy Now" බටන් එක එබුවාම පල්ලෙහාට Scroll වෙන්න 
function scrollToGallery() {
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
}


function buyArt(artName) {
   
    const facebookURL = "https://www.facebook.com/share/1EmvALpieC/?mibextid=wwXIfr"; 

    // පාරිභෝගිකයාට දැනගන්න පොඩි පණිවිඩයක් පෙන්වීම
    alert(`Art: "${artName}" \n\n Contact To Face Book`);

    // අලුත් Tab එකක Facebook එක open කිරීම
    window.open(facebookURL, '_blank');
}