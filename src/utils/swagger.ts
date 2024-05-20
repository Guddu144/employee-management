import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation',
      contact: {
        name: "Guddu Dhananjaya",
        email: "guddudhananjaya@email.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Local server',
      },
    ],
    components: {
      schemas: {
        ValidationFailedResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
            status: {
              type: 'integer',
            },
            errors: {
              type: 'object',
              additionalProperties: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/user/*.ts','./src/routes/employee/*.ts','./src/routes/employeer/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
