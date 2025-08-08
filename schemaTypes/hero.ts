export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string'
    },
    {
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string'
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'value',
            title: 'Value',
            type: 'string',
            validation: (Rule: any) => Rule.required()
          },
          {
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: (Rule: any) => Rule.required()
          }
        ]
      }]
    }
  ]
}