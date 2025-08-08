export default {
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
              list: [
                { title: 'Twitter', value: 'twitter' },
                { title: 'LinkedIn', value: 'linkedin' },
                { title: 'Facebook', value: 'facebook' },
                { title: 'Instagram', value: 'instagram' }
              ]
            }
          },
          {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule: any) => Rule.required()
          }
        ]
      }]
    }
  ]
}