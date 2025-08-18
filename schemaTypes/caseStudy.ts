export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'service',
      title: 'Service Phase',
      type: 'string',
      options: {
        list: [
          { title: 'Vision', value: 'Vision' },
          { title: 'Scale', value: 'Scale' },
          { title: 'Thrive', value: 'Thrive' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'tagline',
      title: 'Project Tagline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Short, compelling tagline (e.g., "From Manual Reporting Hell to $2M Funding Success")'
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'Brief description shown on the main case studies page'
    },
    {
      name: 'overview',
      title: 'Project Overview',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'Detailed overview shown in the modal header'
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'What problem did the client face?'
    },
    {
      name: 'solution',
      title: 'Our Solution',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'How did we solve the problem?'
    },
    {
      name: 'results',
      title: 'The Results',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'What were the outcomes and impact?'
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
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [{
        type: 'object',
        name: 'metric',
        title: 'Metric',
        fields: [
          {
            name: 'label',
            title: 'Metric Label',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
            description: 'e.g., "Hours Saved Weekly", "Deployment Time"'
          },
          {
            name: 'value',
            title: 'Metric Value',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
            description: 'e.g., "40+", "6 weeks", "$2M"'
          }
        ],
        preview: {
          select: {
            title: 'label',
            subtitle: 'value'
          }
        }
      }],
      validation: (Rule: any) => Rule.required().min(2).max(5)
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Technologies, frameworks, and tools used in this project'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule: any) => Rule.required()
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
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'client',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required(),
      description: 'Used for URLs and linking'
    }
  ],
  preview: {
    select: {
      title: 'client',
      subtitle: 'tagline',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }]
    }
  ]
}