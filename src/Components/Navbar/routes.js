const routes = [
  {
    path: '#',
    name: 'Home',
    icon: '',
    id: 'home'
  },
  {
    path: '#',
    name: 'joan',
    icon: '',
    id: 'joan'
  },
  {
    path: '#',
    name: 'Jean',
    icon: '',
    id: 'jean'
  },
  {
    name: 'User',
    icon: '',
    id: 'user',
    dataTarget: 'usertarget',
    subRoutes: [
      {
        path: '#',
        name: 'New User',
        icon: ''
      },
      {
        path: '#',
        name: 'List Users',
        icon: ''
      }
    ]
  }
];

export default routes;
