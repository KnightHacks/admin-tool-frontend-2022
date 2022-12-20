<h1 align="center">
  2022 Knight Hacks Admin Tool
</h1>

This repository is the home for the admin tool used by our hackathon organizers to manage hackathons and the attendees, sponsors, and events at each one.

## Installation

```shell
https://github.com/KnightHacks/admin-tool-frontend-2022
cd admin-tool-frontend-2022
npm install
```

## Getting Started

To run a live development server, run the following in a terminal:

```shell
npm run start
```

This will host the website at http://localhost:3000. As you make updates to the
code, the development server will automatically reload the page.

## Building the Docker Image Locally

Build this app into a Docker image:

```shell
docker build -t <image_name> .
```

Run the image as a container:

```shell
docker run -itd -p 9090:9090 [--name <container_name>] <image_name>
```

`-i, -t, -d, --name` are optional flags. Reference: https://docs.docker.com/engine/reference/run/.

`-p 9090:9090` is required and based on the configured port in the Dockerfile and the NGINX config (default.config).

You can now use the website through the url `http://localhost:9090` in your browser of choice.

## Updating the API Submodule

To get any changes made to the API submodule, run `git submodule update --remote`

For a detailed guide of handling submodules, see [here](https://git-scm.com/book/en/v2/Git-Tools-Submodules)