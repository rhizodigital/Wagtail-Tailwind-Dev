import '../styles/base.css'

const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headings.forEach((heading) => {
    heading.className = 'bg-red-500 p-10 rounded';
}  );