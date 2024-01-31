export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'mainimage',
        title: 'Mainimage',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'black',
        title: 'Black',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'red',
        title: 'Red',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'pink',
        title: 'Pink',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'green',
        title: 'Green',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'blue',
        title: 'Blue',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'skyblue',
        title: 'Skyblue',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'gray',
        title: 'Gray',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'lemon',
        title: 'Lemon',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'purple',
        title: 'Purple',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'brown',
        title: 'Brown',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'orange',
        title: 'Orange',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'size',
        title: 'Size',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'mainname',
        title: 'Mainname',
        type: 'string',
      },
      { 
        name: 'firstname',
        title: 'Firstname',
        type: 'string',
      },
      { 
        name: 'secondname',
        title: 'Secondname',
        type: 'string',
      },
      { 
        name: 'gender',
        title: 'Gender',
        type: 'string',
      },
      { 
        name: 'class',
        title: 'Class',
        type: 'string',
      },
     
      { 
        name: 'type',
        title: 'Type',
        type: 'array',
        of: [{ type: 'string' }]
      },
      { 
        name: 'material',
        title: 'Material',
        type: 'array',
        of: [{ type: 'string' }]
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'mainname',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'oldprice',
        title: 'Oldprice',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [
          {
            type: 'category',
          },
        ],
      }
    
   
    ]
  }