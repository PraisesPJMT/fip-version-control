const socialsBox = document.getElementById('socials');
const outcomeList = document.getElementById('objectives');

const socialData = [
  {
    name: 'github',
    icon: 'github.svg',
    link: 'https://github.com/PraisesPJMT/',
  },
  {
    name: 'linkedin',
    icon: 'linkedin-in.svg',
    link: 'https://www.linkedin.com/in/praises-tula/',
  },
  {
    name: 'twitter',
    icon: 'x-twitter.svg',
    link: 'https://twitter.com/PraisesPJMT/',
  },
  {
    name: 'facebook',
    icon: 'facebook-f.svg',
    link: 'https://web.facebook.com/praises.musa/',
  },
  {
    name: 'instagram',
    icon: 'instagram.svg',
    link: 'https://www.instagram.com/praisespjmt/',
  },
];

const outcomeData = [
  'Creating repositories',
  'Cloning repositories',
  'Creating branches',
  'Committing and reverting commits',
  'Pulling and pushing changes downstream and upstream',
  'Fetching, merging and renaming branches',
  'Creating, reviewing merging, reverting pull requests etc.',
];

const loadSocials = () => {
  if (socials) {
    let links = socialData.map(
      (link) =>
        `<a href="${link.link}" target="_blank">
                <img class="social" src="./assets/${link.icon}" alt="${link.name}"/>
            </a>`
    );
    socialsBox.innerHTML = links.join('');
  }
};

const loadOutcomes = () => {
  if (outcomeList) {
    let list = outcomeData.map(
      (outcome, index) => `<li><span>${index + 1}</span>${outcome}</li>`
    );
    outcomeList.innerHTML = list.join('');
  }
};

loadSocials();
loadOutcomes();
