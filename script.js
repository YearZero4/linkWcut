async function shortenLink() {
const number = document.getElementById('number').value;
const message = document.getElementById('message').value;
const formatLink = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
const url = 'https://acut0x.onrender.com/';
const data = new URLSearchParams();
data.append('url', formatLink);
try {
 const response = await fetch(url, {
 method: 'POST',
 body: data,
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded'
  }
 });
 const text = await response.text();
 const parser = new DOMParser();
 const doc = parser.parseFromString(text, 'text/html');
 const shortLink = doc.querySelector('a.acortada').textContent;
 const rs = document.getElementById('result');
 rs.style.padding='5px 0px 5px 0px';
 document.getElementById('result').innerHTML = `<a href="${shortLink}" target="_blank">${shortLink}</a>`;
} catch (error) {
 console.error('Error:', error);
 document.getElementById('result').innerHTML = 'Hubo un error al acortar el enlace.';
 }
}