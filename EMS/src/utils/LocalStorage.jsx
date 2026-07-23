const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "456"
  }
];

const employees = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and CSS.",
        date: "2026-07-15",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve alignment issues in the navigation bar.",
        date: "2026-07-16",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Document the login module and API endpoints.",
        date: "2026-07-10",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Develop the employee dashboard UI.",
        date: "2026-07-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix",
        taskDescription: "Fix the logout button issue.",
        date: "2026-07-11",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect dashboard with backend APIs.",
        date: "2026-07-12",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Card",
        taskDescription: "Display employee information in cards.",
        date: "2026-07-18",
        category: "Frontend"
      }
    ]
  },

  {
    id: 3,
    email: "michael.brown@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Perform weekly database backup.",
        date: "2026-07-09",
        category: "Database"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve SQL query performance.",
        date: "2026-07-19",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Server",
        taskDescription: "Deploy backend on production server.",
        date: "2026-07-13",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Review authentication and authorization flow.",
        date: "2026-07-20",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test all REST API endpoints.",
        date: "2026-07-08",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    email: "emily.johnson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate monthly employee reports.",
        date: "2026-07-16",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Notifications",
        taskDescription: "Implement notification emails.",
        date: "2026-07-10",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Chart Integration",
        taskDescription: "Integrate analytics charts into dashboard.",
        date: "2026-07-12",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Pull Requests",
        taskDescription: "Review pending GitHub pull requests.",
        date: "2026-07-18",
        category: "Code Review"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Cleanup",
        taskDescription: "Remove unused components and files.",
        date: "2026-07-07",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Analyze application loading speed.",
        date: "2026-07-21",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    email: "david.wilson@example.com",
    password: "123",  
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement JWT-based authentication.",
        date: "2026-07-17",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed:true,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write unit tests for authentication APIs.",
        date: "2026-07-11",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Design and implement landing page.",
        date: "2026-07-18",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate online payment service.",
        date: "2026-07-13",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Git Cleanup",
        taskDescription: "Delete merged branches and clean repository.",
        date: "2026-07-09",
        category: "Git"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deploy Frontend",
        taskDescription: "Deploy React application to Vercel.",
        date: "2026-07-20",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Audit",
        taskDescription: "Improve accessibility according to WCAG guidelines.",
        date: "2026-07-22",
        category: "Accessibility"
      }
    ]
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  
  return {employees, admin}
}