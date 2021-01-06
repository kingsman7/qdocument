export default {
  documents: {
    permission: 'idocs.documents.manage',
    activated: true,
    authenticated: true,
    path: '/document/documents',
    name: 'qdocument.admin.documents',
    crud : import('@imagina/qdocument/_crud/documents'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
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
    crud : import('@imagina/qdocument/_crud/categories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qdocument.sidebar.adminCategories',
    icon: 'fas fa-layer-group',
    subHeader: {
      refresh: true,
    }
  },
}
