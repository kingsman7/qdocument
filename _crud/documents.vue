<template></template>
<script>
  export default {
    data() {
      return {
        crudId: this.$uid()
      }
    },
    computed: {
      crudData() {
        return {
          crudId: this.crudId,
          apiRoute: 'apiRoutes.qdocument.documents',
          permission: 'idocs.documents',
          create: {
            title: this.$tr('qdocument.layout.newDocument'),
          },
          read: {
            columns: [
              {
                name: 'id', label: this.$tr('ui.form.id'),
                field: 'id',
                sortable: true,
              },
              {
                name: 'title', label: this.$tr('ui.form.title'),
                field: 'title',
                align: 'left',
                sortable: true,
              },
              {
                name: 'status', label: this.$tr('ui.form.status'), field: 'status',
                asStatus : true
              },
              {
                name: 'category', label: this.$tr('ui.form.category'),
                align: 'center', field: 'category', sortable: true,
                format: val => ((val && val.title) ? val.title : '-')
              },
              {
                name: 'createdAt', label: this.$tr('ui.form.createdAt'), field: 'createdAt',
                format: val => val ? this.$trd(val) : '-',
                align: 'left', sortable: true
              },
              {
                name: 'actions', label: this.$tr('ui.form.actions'), align: 'center'
              },
            ],
            requestParams: {include: 'category'}
          },
          update: {
            title: this.$tr('qdocument.layout.updateDocument'),
            requestParams: {include: 'categories'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            title: {
              value: '',
              type: 'input',
              isTranslatable: true,
              props: {
                label: `${this.$tr('ui.form.title')}*`,
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              },
            },
            description: {
              value: '',
              type: 'html',
              isTranslatable: true,
              props: {
                label: `${this.$tr('ui.form.description')}*`,
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              }
            }
          },
          formRight: {
            categoryId: {
              value: null,
              type: 'crud',
              props: {
                crudType: 'select',
                crudData: import('@imagina/qdocument/_crud/categories'),
                crudProps: {
                  label: `${this.$tr('ui.form.category')}*`,
                  rules: [
                    val => !!val || this.$tr('ui.message.fieldRequired')
                  ],
                },
              },
            },
            categories: {
              value: [],
              type: 'crud',
              props: {
                crudType: 'select',
                crudData: import('@imagina/qdocument/_crud/categories'),
                crudProps: {
                  label: this.$trp('ui.form.category'),
                  multiple: true,
                  useChips: true
                },
              },
            },
            status: {
              value: '1',
              type: 'select',
              props: {
                label: this.$tr('ui.form.status'),
                options: [
                  {label: this.$tr('ui.label.enabled'), value: '1'},
                  {label: this.$tr('ui.label.disabled'), value: '0'},
                ]
              },
            },
            mediasSingleIcon: {
              name: 'mediasSingle',
              value: {},
              type: 'media',
              props: {
                label: this.$tr('ui.form.icon'),
                zone: 'iconimage',
                entity: "Modules\\Idocs\\Entities\\Document",
                entityId: null
              }
            },
            mediasSingleFile: {
              name: 'mediasSingle',
              value: {},
              type: 'media',
              props: {
                label: `${this.$tr('ui.label.file')}*`,
                zone: 'file',
                entity: "Modules\\Idocs\\Entities\\Document",
                entityId: null,
                rules: [
                  val => (val && val.file) || this.$tr('ui.message.fieldRequired')
                ],
              }
            }
          },
        }
      },
      //Crud info
      crudInfo() {
        return this.$store.state.qcrudComponent.component[this.crudId] || {}
      }
    },
  }
</script>
