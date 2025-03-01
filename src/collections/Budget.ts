import type { CollectionConfig } from 'payload'

export const Budget: CollectionConfig = {
  slug: 'budget',
  fields: [
    {
      name: 'income',
      label: 'Income',
      type: 'text',
      required: true,
    },
    {
      name: 'expensetotal',
      label: 'Expense Total',
      type: 'text',
      required: true,
    },
    {
      name: 'expenses',
      type: 'array',
      label: 'Expenses',
      interfaceName: 'Expense',
      labels: {
        singular: 'Expense',
        plural: 'Expenses',
      },
      fields: [
        {
          name: 'category',
          label: 'Category',
          type: 'text',
          required: true,
        },
        {
          name: 'amount',
          label: 'Amount',
          type: 'text',
          required: true,
        },
      ],
    },
    // Add more fields as needed
  ],
}
