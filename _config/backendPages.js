export default {
  documents: {
    permission: 'idocs.documents.manage',
    activated: true,
    authenticated: true,
    path: '/document/documents',
    name: 'qdocument.admin.documents',
    page: () => import('@imagina/qdocument/_pages/admin/documents/index'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qdocument.sidebar.adminDocuments',
    icon: 'fas fa-folder-open',
    subHeader: {
      refresh: true,
    }
  },
  categories: {
    permission: 'idocs.categories.manage',
    activated: true,
    authenticated: true,
    path: '/document/categories',
    name: 'qdocument.admin.categories',
    page: () => import('@imagina/qdocument/_pages/admin/categories/index'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qdocument.sidebar.adminCategories',
    icon: 'fas fa-layer-group',
    subHeader: {
      refresh: true,
    }
  },
}
