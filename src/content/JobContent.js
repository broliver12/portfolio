const jobContent = () => {
  return {
    'title': 'Professional Experience',
    'jobs': [{
      'company': 'Konrad Group',
      'title': 'Software Developer',
      'description': [
        {
          'body': 'Over my four years at Konrad I\'ve worked with ' +
                    'numerous clients to transform both their mobile technology, ' +
                    'and digital presence. My favorite part about software ' +
                    'consulting is the fact that I\'m constantly learning, ' +
                    'and being put into new and unique situations.',
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
          'body': 'I oversaw 25 employees on a pickup-truck ' +
                    'production line, we shipped around 450 trucks every day.' +
                    'I was responsible for ensuring that my line and shift met ' +
                    'production quotas while maintaining high employee safety ' +
                    'and product quality standards.',
        },
        {
          'body': 'I learned a lot at GM and made strong ' +
                    'and lasting relationships with both my employees, ' +
                    'and management. I left because I didn\'t see a way ' +
                    'to transition into a software development role internally.',
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
          'body': 'Developed an app for the touchpads used to ' +
                    'control the robotics and conveyor systems at GM Oshawa.',
        },
        {
          'body': 'The old model of touchpads needed to be replaced ' +
                    '- but it was too costly to re-train all the employees.',
        },
        {
          'body': 'I independently created a protocol that converted ' +
                    'the robot control files to the new system\'s expected format. ' +
                    'This saved countless hours of manual work. I also created a ' +
                    'complete wor UI that was an exact visual copy of the legacy ' +
                    'system\'s control interface, to reduce training time for robot ' +
                    'control staff.',
        },
      ],
      'start': '31/05/17',
      'end': '31/08/17',
      'stack': ['Visual Basic', 'Documentation'],
      'location': 'Oshawa',
      'bgClass': 'gmDecoration',
    },
    {
      'company': 'Chipotle',
      'title': 'Grill Cook',
      'description': [
        {
          'body': 'Working in a busy kitchen taught me about ' +
                    'the importance of organization and teamwork.',
        },
        {
          'body': 'My position was \'grill cook\'; I was in charge ' +
                    'of preparing all hot food, and ensuring that the line ' +
                    'was sufficiently stocked. ',
        },
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