// Sample project data
const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1 goes here.',
        tools: 'HTML, CSS, JavaScript',
        image: '0AB13957-E0F5-4ED1-8E43-A3AB77A12177.jpeg',
      
        demoLink: 'https://example.com',
        codeLink: 'https://github.com/example/project1'
    },
    {
        title: 'Project 2',
        description: 'Description of project 2 goes here.',
        tools: 'React, Node.js, Express',
        image: 'project2.jpg',
        demoLink: 'https://example.com',
        codeLink: 'https://github.com/example/project2'
    },
    {
        title: 'Project 3',
        description: 'Description of project 3 goes here.',
        tools: 'Python, Django, PostgreSQL',
        image: 'project3.jpg',
        demoLink: 'https://example.com',
        codeLink: 'https://github.com/example/project3'
    }
];

// Select the projects container
const projectsContainer = document.querySelector('.projects-container');

// Loop through the projects array and create a project card for each project
projects.forEach((project, index) => {
    // Create a project card element
    const card = document.createElement('div');
    card.classList.add('project');
    card.dataset.index = index; // Add a data attribute with the project index for later use

    // Create the card contents
    const title = document.createElement('h2');
    title.textContent = project.title;
    card.appendChild(title);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    card.appendChild(imageContainer);

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = `Screenshot of ${project.title}`;
    imageContainer.appendChild(image);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    imageContainer.appendChild(overlay);

    const overlayContent = document.createElement('div');
    overlayContent.classList.add('overlay-content');
    overlay.appendChild(overlayContent);

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = project.description;
    overlayContent.appendChild(description);

    const tools = document.createElement('p');
    tools.classList.add('tools');
    tools.textContent = `Tools and technologies used: ${project.tools}`;
    overlayContent.appendChild(tools);

    const links = document.createElement('div');
    links.classList.add('links');
    overlayContent.appendChild(links);

    if (project.demoLink) {
        const demoLink = document.createElement('a');
        demoLink.classList.add('link');
        demoLink.href = project.demoLink;
        demoLink.target = '_blank';
        demoLink.textContent = 'Live Demo';
        links.appendChild(demoLink);
    }

    const codeLink = document.createElement('a');
    codeLink.classList.add('link');
    codeLink.href = project.codeLink;
    codeLink.target = '_blank';
    codeLink.textContent = 'View Code';
    links.appendChild(codeLink);

    // Add a click event listener to the card to show more information
    card.addEventListener('click', () => {
        // Remove active class from any other project cards
        const activeCard = document.querySelector('.project.active');
        if (activeCard) {
            activeCard.classList.remove('active');
        }

        // Add active class to this project card
        card.classList.add('active');
    });

    // Add the card to the projects container
    projectsContainer.appendChild(card);
});

