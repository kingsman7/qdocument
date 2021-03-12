const pages = config('pages') // Get Pages from config

//Blog
export default [
  {
    title: 'qdocument.sidebar.adminGroup',
    icon: 'fas fa-folder-open',
    children: [
      pages.qdocument.documents, // posts setup
      pages.qdocument.categories, // categories setup
    ]
  },
]
