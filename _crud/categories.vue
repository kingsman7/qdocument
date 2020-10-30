<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

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
          apiRoute: 'apiRoutes.qdocument.categories',
          permission: 'idocs.categories',
          create: {
            title: this.$tr('qdocument.layout.newCategory'),
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'name', label: this.$tr('ui.form.title'), field: 'title', align: 'rigth'},
              {
                name: 'parent', label: this.$tr('ui.form.parent'), field: 'parent', align: 'left',
                format: val => val ? (val.title ? val.title : '-') : '-'
              },
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {include: 'parent'}
          },
          update: {
            title: this.$tr('qdocument.layout.updateCategory'),
            requestParams: {include: 'parent'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            userId: {value: this.$store.state.quserAuth.userId},
            title: {
              value: '',
              type: 'input',
              isTranslatable: true,
              props : {
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
              props : {
                label: `${this.$tr('ui.form.description')}*`,
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              }
            },
          },
          formRight: {
            parentId: {
              value: 0,
              type: 'select',
              props : {
                label: this.$tr('ui.form.parent'),
                options : [
                  {label: this.$tr('ui.label.disabled'), value: 0},
                ],
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qdocument.categories',
                select: {label: 'title', id: 'id'},
                requestParams: {include: 'parent'}
              }
            },
            mediasSingle: {
              name: 'mediasSingle',
              value: {},
              type: 'media',
              props : {
                label: this.$tr('ui.form.firstImage'),
                zone: 'mainimage',
                entity: "Modules\\Idocs\\Entities\\Category",
                entityId: null
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
