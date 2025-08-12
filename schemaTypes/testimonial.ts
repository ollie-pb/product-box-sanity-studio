import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial quote from the client',
      validation: Rule => Rule.required().min(10).max(1000)
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'Name of the person giving the testimonial',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Company or organization name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      description: 'Client\'s role or job title at the company',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'variant',
      title: 'Display Variant',
      type: 'string',
      description: 'How this testimonial should be displayed',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Compact', value: 'compact'},
          {title: 'Featured', value: 'featured'}
        ],
        layout: 'radio'
      },
      initialValue: 'default',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this testimonial appears (lower numbers first)',
      initialValue: 1,
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as featured testimonial for special placement',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'client',
      subtitle: 'company',
      description: 'quote'
    },
    prepare(selection) {
      const {title, subtitle, description} = selection
      return {
        title: `${title} - ${subtitle}`,
        subtitle: description?.slice(0, 60) + (description?.length > 60 ? '...' : '')
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Client Name',
      name: 'clientAsc',
      by: [
        {field: 'client', direction: 'asc'}
      ]
    }
  ]
})