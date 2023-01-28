const jobContent = () => {
  return {
    'title': 'Professional Experience',
    'jobs': [{
      'company': 'Konrad Group',
      'title': 'Software Developer',
      'description': [
        {
          'body': 'Over my four years at Konrad I\'ve worked with some of our largest clients to transform both their mobile technology, and digital presence.',
        },
        {
          'body': 'As an Android developer I work primarily in Kotlin and Java. However, I\'ve also had the opportunity to explore front-end technologies like Flutter and React.',
        },
        {
          'body': 'My favorite part about software consulting is that I\'m constantly learning, and being put into unique and challenging situations.',
        },
      ],
      'start': '11/09/18',
      'end': '-',
      'stack': ['Kotlin', 'Java', 'Android', 'Git', 'Jira', 'Agile'],
      'location': 'Toronto',
      'bgClass': 'kgDecoration',
    },
    {
      'company': 'General Motors',
      'title': 'Production Supervisor',
      'description': [
        {
          'body': 'I oversaw 25 employees on a pickup-truck production line. I was responsible for ensuring that my shift met production quotas, while guaranteeing employee safety and product quality. We shipped over 400 trucks every day.',
        },
        {
          'body': 'I learned a lot at GM and made strong and lasting relationships with both my employees, and management. I left because I didn\'t see a way to transition into a software development role internally.',
        },
      ],
      'start': '31/05/18',
      'end': '31/08/18',
      'stack': ['Management', 'Leadership', 'Communication'],
      'location': 'Oshawa',
      'bgClass': 'gmDecoration',
    },
    {
      'company': 'General Motors',
      'title': 'Engineering Intern',
      'description': [
        {
          'body': 'I was tasked with developing an app for controlling the robotics and conveyor systems at GM Oshawa.',
        },
        {
          'body': 'The old touchpads needed to be replaced - but it was too costly to re-train all the employees to use the default software on the new touchpads.',
        },
        {
          'body': 'I independently created a protocol that converted the robot control files to the new system\'s expected format. This saved countless hours of manual work. I also created a complete working user interface that was an exact visual copy of the legacy system, in order to facilitate the transition for robot control staff.',
        },
      ],
      'start': '31/05/17',
      'end': '31/08/17',
      'stack': ['Visual Basic', 'Documentation'],
      'location': 'Oshawa',
      'bgClass': 'gmDecoration2',
    },
    {
      'company': 'Chipotle',
      'title': 'Grill Cook',
      'description': [
        {
          'body': 'I was in charge of preparing all hot food, and ensuring that the line was sufficiently stocked.',
        },
        {
          'body': 'Working in a busy kitchen taught me about the importance of organization, communication and teamwork.',
        },
        {
          'body': 'By continuously improving our processes, we were able to serve delicious food, and keep the restaurant running efficiently.'
        }
      ],
      'start': '31/05/16',
      'end': '31/08/16',
      'stack': ['Communication', 'Teamwork', 'Food Safety'],
      'location': 'Toronto',
      'bgClass': 'chipotleDecoration',
    },
    ]
  }
}

export default jobContent
