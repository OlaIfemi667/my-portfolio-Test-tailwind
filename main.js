

function startupage(){
  console.log('startUpPage');
  const startUpPage = document.querySelector('body');
  startUpPage.classList.add('press-start-2p-regular')
  const startUpHeader = document.querySelector('header');
  const startUpHeaderContent = document.createElement('p');
  const startUpHeaderContentChild  = document.createElement('span');
  startUpHeaderContentChild.classList.add('blink_me');
  startUpHeaderContentChild.textContent = ' ola-iya ~ <3 '
  const startUpHeaderContentChild2  = document.createElement('span');
  startUpHeaderContentChild2.textContent = ' sudo chilling '
  
  startUpHeaderContent.appendChild(startUpHeaderContentChild);
  startUpHeaderContent.appendChild(startUpHeaderContentChild2);
  startUpHeader.appendChild(startUpHeaderContent);

  
  const startUpButton = document.createElement('button');
  startUpButton.classList.add('startUpButton');
  startUpButton.classList.add('press-start-2p-regular');
  
  startUpButton.textContent = 'START';

  const main = document.querySelector('section');
  main.appendChild(startUpButton);
  startUpButton.addEventListener('click', () => {
    startUpButton.disabled = true;
    startUpHeader.classList.add('fade-out');
    startUpButton.classList.add('fade-out');
    setTimeout(() => {
      startUpButton.remove();
      startUpHeaderContent.remove();
      loadMainPage();
    }, 500);
    
  });
  
}

function loadMainPage() {
  const header = document.querySelector('header');
  header.classList.remove('fade-out');

  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const ul = document.createElement('ul');
  const tabs = ['Whoami', 'Project', 'Blog'];

  tabs.forEach(tabName => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('navlink')
    a.href = `#${tabName.toLowerCase()}`;
    a.textContent = tabName;
    li.appendChild(a);
    ul.appendChild(li);
  });

  
  nav.appendChild(ul);
  header.appendChild(nav);
  whoami();
  const navLink = document.querySelectorAll('.navlink');
  navLink.forEach(link => {
    link.addEventListener('click', (event) => {
      document.querySelectorAll('.navlink').forEach(link => link.classList.remove('active'));
      link.classList.add('active');
      console.log(' navlink click');
      event.preventDefault();
      const target = event.target.getAttribute('href').substring(1);

      if (target === 'whoami') {
        console.log('whoami');
        whoami();
      } else if (target === 'project') {
        console.log('project');
        project();
      } else if (target === 'blog') {
        console.log('blog');
        blog();
      }
    });
    
  });
}

function whoami(){
  //cleanup main
  const main = document.querySelector('section');
  main.innerHTML = '';
  const whoH2 = document.createElement('h2');
  whoH2.classList.add('press-start-2p-regular');
  whoH2.classList.add('blink-border')
  whoH2.textContent = 'Who am I?';
  const whoP = document.createElement('p');
  whoP.classList.add('roboto-normal');
  whoP.textContent = 'I am an ethical hacker and I love software engineering. I have experience in various programming languages and frameworks. And also as an ethical hacker, I have a strong understanding of security principles and practices. ';
  main.appendChild(whoH2);
  main.appendChild(whoP);
  const whoHobbiesdiv = document.createElement('div');
  const whoHobbiesH3 = document.createElement('h6');
  whoHobbiesH3.classList.add('press-start-2p-regular');
  whoHobbiesH3.textContent = 'My Hobbies';  
  const whoHobbiesP = document.createElement('p');
  whoHobbiesP.classList.add('roboto-normal');
  whoHobbiesP.textContent = 'I love to play games, draw portraits, and I\'m trying to read more books XD. I also enjoy learning new things and exploring new technologies. I am always looking for new challenges and opportunities to grow.';
  whoHobbiesdiv.appendChild(whoHobbiesH3);
  whoHobbiesdiv.appendChild(whoHobbiesP);
  main.appendChild(whoHobbiesdiv);


}
function project(){
  //cleanup main
  const main = document.querySelector('section');
  main.innerHTML = '';
  const projectH2 = document.createElement('h2');
  projectH2.classList.add('press-start-2p-regular');
  projectH2.classList.add('blink-border')
  projectH2.textContent = 'My Projects';
  const projectP = document.createElement('p');
  projectP.classList.add('roboto-normal');
  projectP.textContent = 'Here are some of my projects:';
  
  main.appendChild(projectH2);
  main.appendChild(projectP);
}
function blog(){
  //cleanup main
  const main = document.querySelector('section');
  main.innerHTML = '';
  const blogH2 = document.createElement('h2');
  blogH2.classList.add('press-start-2p-regular');
  blogH2.classList.add('blink-border')
  blogH2.textContent = 'My Blog';
  main.appendChild(blogH2);
}

function main(){
  startupage();
}

main();