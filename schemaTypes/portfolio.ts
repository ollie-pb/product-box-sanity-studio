export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'links',
      title: 'Project Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Demo', value: 'demo' },
                  { title: 'Case Study', value: 'case-study' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Website', value: 'website' }
                ]
              },
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: any) => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'type',
              subtitle: 'url'
            }
          }
        }
      ]
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    }
  }
}