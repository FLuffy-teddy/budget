## Overview

This project aims to provide a comprehensive budgeting tool that helps users manage their finances effectively. The tool leverages MongoDB for database management and uses a local disk storage adapter for storing files.

## Folder Structure

- **/config**: Contains configuration files for the project.
- **/controllers**: Holds the controller logic for handling requests and responses.
- **/models**: Includes the database schemas and models.
- **/routes**: Defines the API routes for the application.
- **/views**: Contains the front-end templates and static files.
- **/scripts**: Utility scripts for database seeding, backups, and other tasks.
- **/tests**: Unit and integration tests to ensure the application works as expected.
- **/public**: Publicly accessible files such as images, CSS, and JavaScript.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.
3. Configure the environment variables as needed.
4. Run the application using `npm start`.

## Using Payload CMS

Payload CMS is used in this project to manage content. Follow these steps to set it up:

1. **Install Payload CMS**: If you haven't already, install Payload CMS by running `npm install payload`.
2. **Configure Payload**: Create a `payload.config.js` file in the root of your project and configure it according to your needs.
3. **Start Payload**: Run `npm run payload` to start the CMS.
4. **Access the Admin Panel**: Navigate to `http://localhost:3000/admin` to access the Payload CMS admin panel.
5. **Create Collections**: Define your collections in the `payload.config.js` file to manage different types of content.
6. **Use the API**: Utilize the Payload CMS API to fetch and manage content within your application.

For more detailed information, refer to the [Payload CMS documentation](https://payloadcms.com/docs).

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting a pull request.

## License

This project is licensed under the MIT License.
