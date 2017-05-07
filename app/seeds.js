var applications = [{
    job: [{
      company: 'Ziprecruiter.com',
      title: 'software developer',
      location: 'Los Angeles, CA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://www.ziprecruiter.com/jobs',
      created_at: 'April 5, 2017',
    }],
    dateApplied: 'April 6, 2017',
    resume: 'http://placehold.it/350x150',
    coverLetter: 'http://placehold.it/350x150',
  },
  {
    job: [{
      company: 'General Assembly',
      title: 'software developer instructor',
      location: 'Santa Monica, CA',
      description: 'TEACH!',
      url: 'https://www.generalassemb.ly',
      created_at: 'March 5, 2017',
    }],
    dateApplied: 'March 6, 2017',
    resume: 'http://placehold.it/350x150',
    coverLetter: 'http://placehold.it/350x150',
  }
]

var contacts = [{
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '555-555-5555',
    company: 'Zip Recruiter',
    title: 'HR',
    location: 'Los Angeles, CA',
    interactions: 'Met him at We Love Tech LA event on 5/2'
  },
  {
    name: 'Steven Peltzer',
    email: 'steve@gmail.com',
    phone: '555-555-5551',
    company: 'Freelance',
    title: 'Web Developer',
    location: 'Los Angeles, CA',
    interactions: 'Met at ziprecruiter hackathon 5/6'
  },
  {
    name: 'Alex Espenoza',
    email: 'alex@gmail.com',
    phone: '555-555-5552',
    company: 'General Assembly',
    title: 'Web Developer Instructor',
    location: 'Santa Monica, CA',
    interactions: 'Met at my general assembly job interview'
  }
]

var users = [{
  name: 'Gus Nordz',
  email: 'gustove@gmail.com',
  phone: '555-555-5555',
  accounts: {
    'https://github.com/gnordhielm/',
    'https://www.linkedin.com/in/gnordhielm/'
  }
}]

var interviews = [{
    round: 1,
    contact: contacts[0],
    followUp: true
    date: 'April 28, 2017',
    application: applications[0]
  },
  {
    round: 2,
    contact: contacts[1],
    followUp: false,
    date: 'May 1, 2017',
    application: applications[0]
  },
  {
    round: 1,
    contact: contacts[2],
    followUp: true,
    date: 'April 1, 2017',
    application: applications[1]
  }
]
